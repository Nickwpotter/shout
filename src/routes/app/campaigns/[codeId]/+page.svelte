<script>
    import { onMount } from "svelte";
    import { db } from "../../../../firebase";
    import { collection, addDoc, getDoc, getDocs, query, where, doc} from "firebase/firestore";
    import { writable } from "svelte/store";
    import { authStore } from '$lib/authStore';
    import { page } from '$app/stores';
    import { goto } from "$app/navigation";

    //qr code form fields
    let codeDataURL = '';
    let merchantName = '';
    let codeLink = '';
    let errorMessage = writable('');
    let loading = writable(false);

    // Influencer form fields
    let influencer;
    let influencers = [];
    let influencerName;
    let isNewCode = true;

    const baseUrl = 'http://localhost:5173/app/transaction';
    // const baseUrl = 'https://shout-b6d30.web.app/transaction';
    let promotionStartDate = '';
    let promotionDuration = 0;
    let durationUnit = 'days';

    let codeId = $page.params.codeId;
    let codeDocRef;
    let codeDocData;

    let recentTransactions = writable([]);

    onMount(async () => {
        if (codeId === 'new') {
            // get influencers to select
            const q = query(collection(db, "users"), where('type', '==', "influencer"));
            const querySnapshot = await getDocs(q);
            influencers = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                ref: doc.ref,
            }));
        } else {
            isNewCode = false;
            codeDocRef = doc(db, "codes", codeId);
            const codeDoc = await getDoc(codeDocRef);
            codeDocData = codeDoc.data();
            codeLink = `${baseUrl}/${codeId}`;
            codeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(codeLink)}&size=200x200&format=png`;

            const influencerRef = codeDocData.influencer;
            const influencerDoc = await getDoc(influencerRef);
            const influencerData = influencerDoc.data();
            influencerName = influencerData.name;

            const merchantRef = codeDocData.merchant;
            const merchantDoc = await getDoc(merchantRef);
            const merchantData = merchantDoc.data();
            merchantName = merchantData.name;
        }

        if ($authStore.userType === 'merchant') {
            merchantName = $authStore?.userData?.name;
        }

        // Fetch recent transactions
        const transactionsQuery = query(collection(db, "transactions"), where('code', '==', codeDocRef));
        const transactionsSnapshot = await getDocs(transactionsQuery);
        let transactions = transactionsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        recentTransactions.set(transactions);
    });

    const resetForm = () => {
        influencer = '';
        promotionStartDate = '';
        promotionDuration = 0;
        durationUnit = 'days';
        merchantName = '';
    };

    const generateCode = async () => {
        if (!influencer || !promotionStartDate.trim() || promotionDuration <= 0) {
            errorMessage.set('All fields are required.');
            return;
        }
        loading.set(true);
        try {
            const docRef = await addDoc(collection(db, "codes"), {
                influencer,
                promotionStartDate,
                promotionDuration,
                durationUnit,
                merchant: $authStore.userRef,
                usageCount: 0,
                timestamp: new Date()
            });
            codeId = docRef.id;
            codeLink = `${baseUrl}/${codeId}`;
            codeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(codeLink)}&size=200x200&format=png`;
            errorMessage.set('');
            await goto(`/app/campaigns/${codeId}`);
            window.location.reload();
        } catch (error) {
            console.error("Error generating QR Code:", error);
            errorMessage.set('Error generating QR code. Please try again.');
        }
        loading.set(false);
        resetForm();
    };

    const downloadQRCode = () => {
        fetch(codeDataURL)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'qrcode.png';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(err => {
                console.error('Error downloading the QR code:', err);
                errorMessage.set('Error downloading the QR code. Please try again.');
            });
    };

    const goToCodePage = () => {
        goto(`/app/transaction/${codeId}`);
    };

    $: if ($authStore) {
        merchantName = $authStore?.userData?.name;
    }
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
    {#if $loading}
        <span class="loading loading-infinity loading-lg text-white"></span>
    {:else}
        {#if isNewCode}
            <h1 class="text-3xl font-bold text-white mb-4">Create Campaign Code</h1>
            <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% rounded-lg p-2 max-w-md min-w-[350px]">
                <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-black">
                    <div class="form-control mb-4">
                        <label class="label" for="storeName">
                            <span class="text-white">Merchant</span>
                        </label>
                        <input id="storeName" type="text" bind:value={merchantName} class="input input-bordered border-black !text-white" disabled/>
                    </div>
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="!text-white">Influencer</span>
                        </div>
                        <select bind:value={influencer} class="select select-bordered !text-white">
                            <option disabled selected>Pick one</option>
                            {#each influencers as _influencer}
                                <option value={_influencer.ref}>{_influencer.name}</option>
                            {/each}
                        </select>
                    </label>
                    <div class="form-control mb-4">
                        <label class="label" for="promotionStartDate">
                            <span class="text-white">Promotion Start Date</span>
                        </label>
                        <input id="promotionStartDate" type="date" bind:value={promotionStartDate} class="input input-bordered border-black text-white"/>
                    </div>
                    <div class="form-control mb-4">
                        <label class="label" for="promotionDuration">
                            <span class="text-white">Promotion Duration</span>
                        </label>
                        <input id="promotionDuration" type="number" bind:value={promotionDuration} class="input input-bordered border-black text-white"/>
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input type="radio" name="durationUnit" value="days" bind:group={durationUnit} checked={durationUnit === 'days'} class="form-radio text-white"/>
                                <span class="ml-2 text-white">Days</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" name="durationUnit" value="hours" bind:group={durationUnit} checked={durationUnit === 'hours'} class="form-radio text-white"/>
                                <span class="ml-2 text-white">Hours</span>
                            </label>
                        </div>
                    </div>
                    <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full shadow-md" on:click={generateCode} disabled={$loading}>
                        {#if $loading}
                            <span class="loading loading-infinity loading-lg"></span>
                        {/if}
                        Generate Code
                    </button>
                    {#if $errorMessage}
                        <div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{$errorMessage}</span>
                        </div>
                    {/if}
                </div>
            </div>
        {:else}
            {#if codeDocData && codeDataURL}
            <div class="lg:flex lg:flex-row">
                <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg flex-col">
                    <div class="min-w-sm shadow-lg rounded-lg p-6 bg-black flex flex-col items-center">
                        <div class="bg-white p-2 mb-4 rounded-lg">
                            <img src={codeDataURL} alt="QR Code" class="w-40 h-40"/>
                        </div>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Merchant:</span> {merchantName}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Influencer:</span> {influencerName}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Start Date: </span> {codeDocData.promotionStartDate}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">QR Code ID: </span> {codeId}</p>
                        <button on:click={goToCodePage} class="btn !text-white btn-active btn-link">Test QR Code Link</button>
                        <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4" on:click={downloadQRCode}>Download QR Code</button>
                    </div>
                </div>
                {#if $recentTransactions.length > 0}
                <div class="overflow-x-auto flex-col mt-4 lg:mt-0 lg:ml-6">
                    <h1 class="text-white">Recent Transactions</h1>
                    <table class="table text-white w-full lg:w-auto">
                        <!-- head -->
                        <thead>
                        <tr>
                            <th>Row #</th>
                            <th>Employee Name</th>
                            <th>Date</th>
                            <th>Transaction Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {#each $recentTransactions as transaction, index}
                            <tr>
                                <td>{index + 1}</td>
                                <td class="whitespace-normal">{transaction.employeeName}</td>
                                <td class="whitespace-normal">{new Date(transaction.timestamp.seconds * 1000).toLocaleString()}</td>
                                <td class="whitespace-normal">${transaction.transactionAmount.toFixed(2)}</td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </div>
                {/if}
            </div>
            {:else}
                <div>Something went wrong </div>
            {/if}
        {/if}
    {/if}
</div>
