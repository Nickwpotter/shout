<script>
    import { onMount } from "svelte";
    import { db } from "../../../firebase";
    import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
    import { authStore } from '$lib/authStore';
    import { goto } from "$app/navigation";
    import { writable } from "svelte/store";

    const showReferralModal = writable(false);
    let codes = [];
    let userType;
    let transactions = [];
    let allTransactions = [];
    let recentTransactions = [];
    let averageTransactionPrice = 0;
    let lifetimeAccountSales = 0;
    let lifetimeAccountTransactions = 0;
    let loading = true;  // Added loading state

    let referralEmail = '';
    let referralName = '';
    let referralPhone = '';
    let referralWebsite = '';
    let referralMessage = '';

    let alertMessage = '';
    let alertType = '';
    let showAlert = writable(false);

    const closeModal = () => {
        showReferralModal.set(false);
    };

    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 5;

    onMount(async () => {
        if ($authStore.userType) {
            console.log($authStore.userType)
            await getData($authStore.userType);
            loading = false;  // Set loading to false after data is fetched
        }
    });

    async function getData(userType) {
        let codesQuery;
        let transactionsQuery;

        if (userType === 'merchant') {
            codesQuery = query(collection(db, "codes"), where('merchant', '==', $authStore.userRef));
            transactionsQuery = query(collection(db, "transactions"), where('merchant', '==', $authStore.userRef));
        } else if (userType === 'influencer') {
            codesQuery = query(collection(db, "codes"), where('influencer', '==', $authStore.userRef));
            transactionsQuery = query(collection(db, "transactions"), where('influencer', '==', $authStore.userRef));
        } else {
            console.error('Invalid user type.');
            return;
        }

        try {
            const [codesSnapshot, transactionsSnapshot] = await Promise.all([
                getDocs(codesQuery),
                getDocs(transactionsQuery)
            ]);

            codes = codesSnapshot.docs.map((doc) => ({
                ...doc.data(),
                ref: doc.ref
            }));

            transactions = transactionsSnapshot.docs.map((doc) => doc.data());

            // Set all transactions and update displayed transactions
            allTransactions = transactions;
            updateDisplayedTransactions();

            // Extract transaction amounts
            lifetimeAccountTransactions = transactions.length;
            lifetimeAccountSales = transactions.reduce((sum, tx) => sum + tx.transactionAmount, 0);
            averageTransactionPrice = lifetimeAccountTransactions ? lifetimeAccountSales / lifetimeAccountTransactions : 0;
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loading = false;
        }
    }

    async function getPartners(){
        let partnerSnapShot; 
        if (partnerships != []){
            if ($authStore.userType == "merchant"){
                const influencerQuery = query(collection(db, "users"), where('type', '==', "influencer"));
                partnerSnapShot = await getDocs(influencerQuery);
            }
            else if ($authStore.userType == "influencer"){
                const merchantQuery = query(collection(db, "users"), where('type', '==', "merchant"));
                partnerSnapShot = await getDocs(merchantQuery);
            }
            partnerships = partnerSnapShot?.docs.map((doc) => doc.data());
        }
        showPartnersModal = true;
    }

    function updateDisplayedTransactions() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        recentTransactions = allTransactions.slice(start, end);
    }

    function nextPage() {
        if ((currentPage * itemsPerPage) < allTransactions.length) {
            currentPage += 1;
            updateDisplayedTransactions();
        }
    }

    function previousPage() {
        if (currentPage > 1) {
            currentPage -= 1;
            updateDisplayedTransactions();
        }
    }

    function viewCode(codeId) {
        goto(`/app/campaigns/${codeId}`);
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
        return phonePattern.test(phone);
    };

    const submitReferralInfo = async () => {
        if (!validateEmail(referralEmail)) {
            alertMessage = 'Please enter a valid email address.';
            alertType = 'alert-error';
            return;
        }

        if (!validatePhone(referralPhone)) {
            alertMessage = 'Please enter a valid US phone number.';
            alertType = 'alert-error';
            return;
        }

        try {
            await addDoc(collection(db, "referrals"), {
                name: referralName,
                email: referralEmail,
                website: referralWebsite,
                phone: referralPhone,
                timestamp: new Date(),
                userReferring: $authStore.userRef,
                userReferringType: userType
            });
            alertMessage = 'Your referral has been submitted successfully!';
            alertType = 'alert-success bg-black text-white';
            showReferralModal.set(false);
            showAlert.set(true);
            // Set the alert to false after 3 seconds
            setTimeout(() => {
                showAlert.set(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting referral info:", error);
            alertMessage = 'Error submitting your referral. Please try again.';
            alertType = 'alert-error';
        }
    };

    $: {
        if ($authStore.userRef) {
            userType = $authStore.userType;
            getData(userType);
        }
    }
</script>

{#if loading}
  <div class="flex items-center justify-center min-h-screen">
    <p>Loading...</p>
  </div>
{:else}
  <div class="m-8">
      <div class="w-full flex justify-between p-4">
          <h1 class="text-[28px] font-bold text-white">Your Campaigns</h1>
          <div class="flex flex-col">
          {#if userType === 'merchant'}
                <button class="mb-4 btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" on:click={async() => {await goto(`/app/campaigns/new`)}}>
                  Create new Campaign
                </button>
          {:else}
              <div class="tooltip" data-tip="Get extra commissions from the stores you refer to us.">
                <button on:click={() => showReferralModal.set(true)} class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Refer a merchant</span></button>
              </div>
          {/if}
          <div class="tooltip" data-tip="Get extra commissions from the stores you refer to us.">
            <button on:click={async() => {await goto(`/app/campaigns/partners`)}} class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">View Partners</span></button>
          </div>
        </div>

      </div>
      {#if codes.length > 0}
          <div class="w-full p-4">
              <div class="overflow-x-auto">
                  <table class="table text-white table-layout: auto;">
                      <!-- head -->
                      <thead>
                      <tr>
                          <th>Row #</th>
                          <th>ID</th>
                          <th>Start Date</th>
                          <th>Duration</th>
                          <th>Influencer</th>
                          <th>Total Transactions</th>
                          {#if userType === "merchant"}
                            <th></th>
                          {/if}
                          <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      {#each codes as _code, index}
                          <tr>
                              <th>{index + 1}</th>
                              <td>{_code.ref.id}</td>
                              <td>{_code.promotionStartDate}</td>
                              <td>{_code.promotionDuration}</td>
                              <td>{_code.influencer.id}</td>
                              <td>{_code.usageCount}</td>
                              <td><a class="text-orange-400 hover:text-blue-700" href="javascript:void(0);" on:click={() => viewCode(_code.ref.id)}>View Code</a></td>
                          </tr>
                      {/each}
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="w-full flex justify-between p-4">
              <h1 class="text-[28px] font-bold text-white">Lifetime</h1>
          </div>
          <div class="flex justify-center my-3">
              <div class="stats stats-vertical md:stats-horizontal shadow w-full">
                  <div class="stat">
                      <div class="stat-title">Lifetime Account Sales</div>
                      <div class="stat-value">${lifetimeAccountSales.toFixed(2)}</div>
                      <div class="stat-desc">All-time sales</div>
                  </div>
                  
                  <div class="stat">
                      <div class="stat-title">Average Transaction Price</div>
                      <div class="stat-value">${averageTransactionPrice.toFixed(2)}</div>
                      <div class="stat-desc">All-time average</div>
                  </div>
                  
                  <div class="stat">
                      <div class="stat-title">Lifetime Account Transactions</div>
                      <div class="stat-value">{lifetimeAccountTransactions}</div>
                      <div class="stat-desc">All-time transactions</div>
                  </div>
              </div>
          </div>
          <div class="overflow-x-auto justify-center shadow-md orange">
              {#if recentTransactions.length > 0 && $authStore.userType == "merchant"}
                <div class="w-full flex justify-between p-4">
                    <h1 class="text-[28px] font-bold text-white">Recent Transactions</h1>
                </div>     
                  <table class="table text-white w-1/2">
                      <!-- head -->
                      <thead>
                      <tr>
                          <th>Row #</th>
                          <th>Employee Name</th>
                          <th>Date</th>
                          <th>Code ID</th>
                          <th>Transaction Value</th>
                      </tr>
                      </thead>
                      <tbody>
                      {#each recentTransactions as transaction, index}
                          <tr>
                              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                              <td>{transaction.employeeName}</td>
                              <td>{new Date(transaction.timestamp.seconds * 1000).toLocaleString()}</td>
                              <td>{transaction.code.id}</td>
                              <td>${transaction.transactionAmount.toFixed(2)}</td>
                          </tr>
                      {/each}
                      </tbody>
                  </table>
              <div class="join flex justify-center mt-4">
                  <button class="join-item btn" on:click={previousPage} disabled={currentPage === 1}>«</button>
                  <button class="join-item btn">Page {currentPage}</button>
                  <button class="join-item btn" on:click={nextPage} disabled={(currentPage * itemsPerPage) >= allTransactions.length}>»</button>
              </div>
              {:else if $authStore.userType === "merchant"}
                <div class="w-full flex justify-between p-4">
                    <h1 class="text-[28px] font-bold text-white">Recent Transactions</h1>
                </div>    
                  <div class="w-full flex justify-between p-4">
                      <p>No Transactions found</p>
                  </div>
              {/if}
          </div>
      {:else}
          <div class="w-full flex justify-between p-4">
              <h1 class="text-white font-bold text-[26px]">No campaigns yet.</h1>
          </div>
          {#if userType === "influencer"}
              <div class="w-full flex justify-between p-4">
                  <p>Get in contact with a merchant for a partnership!</p>
              </div>
          {/if}
      {/if}
  </div>
{/if}

{#if $showReferralModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg shadow-lg w-full max-w-md">
            <div class="rounded-lg w-full max-w-md bg-black p-6">
                {#if alertMessage && alertType === 'alert-error'}
                    <div role="alert" class="alert alert-error mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{alertMessage}</span>
                    </div>
                {/if}
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text text-white">Name</span>
                    </label>
                    <input type="text" bind:value={referralName} class="input input-bordered border-white text-white"/>
                </div>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text text-white">Email</span>
                    </label>
                    <input type="email" bind:value={referralEmail} class="input input-bordered border-white text-white"/>
                </div>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text text-white">Website</span>
                    </label>
                    <input type="email" bind:value={referralWebsite} class="input input-bordered border-white text-white"/>
                </div>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text text-white">Phone Number</span>
                    </label>
                    <input type="tel" bind:value={referralPhone} class="input input-bordered border-white text-white"/>
                </div>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text text-white">Message</span>
                    </label>
                    <textarea bind:value={referralMessage} class="textarea textarea-bordered border-white text-white" placeholder="Message"></textarea>
                </div>
                <button class="btn btn-primary w-full shadow-md mb-4" on:click={submitReferralInfo}>Submit</button>
                <button class="btn btn-secondary w-full shadow-md" on:click={closeModal}>Close</button>
            </div>
        </div>
    </div>
{/if}

{#if $showAlert}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-black text-white p-4 rounded-lg shadow-lg w-full max-w-md mt-20">
            <div role="alert" class="alert {alertType}">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{alertMessage}</span>
            </div>
        </div>
    </div>
{/if}
