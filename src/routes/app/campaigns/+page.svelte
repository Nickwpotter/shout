<script>
    import { onMount } from "svelte";
    import { db } from "../../../firebase";
    import { collection, getDocs, query, where } from "firebase/firestore";
    import { authStore } from '$lib/authStore';
    import { goto } from "$app/navigation";

    let codes = [];
    let userType;
    let transactions = [];
    let allTransactions = [];
    let recentTransactions = [];
    let averageTransactionPrice = 0;
    let lifetimeAccountSales = 0;
    let lifetimeAccountTransactions = 0;
    let loading = true;  // Added loading state

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
          {/if}
          <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" on:click={async() => {await goto(`/app/campaigns/partners`)}}>
            View Partners
          </button>
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
