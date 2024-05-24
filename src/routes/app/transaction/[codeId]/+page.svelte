<script>
    import { onMount } from "svelte";
    import { db } from "../../../../firebase";
    import { collection, addDoc, getDoc, doc, updateDoc, increment } from "firebase/firestore";
    import { writable } from "svelte/store";
    import { page } from '$app/stores';
    import { authStore } from '$lib/authStore';

    let employeeName = '';
    let transactionAmount = '';
    let influencerEmail = '';
    let codeId = '';
    let isCodeValid = writable(false);
    let errorMessage = writable('');
    let codeDocRef;
    let codeDocData;
    let successfulTransaction = false;
    let loading = writable(true);

    onMount(async () => {
        codeId = $page.params.codeId;
        loading.set
        if (codeId) {
            codeDocRef = doc(db, "codes", codeId);
            const codeDoc = await getDoc(codeDocRef);

            if (codeDoc.exists()) {
                // TODO changed created time with start date
                codeDocData = codeDoc.data();
                const currentTime = new Date().getTime();
                const createdTime = codeDocData.timestamp.toDate().getTime();
                const duration = Number(codeDocData.promotionDuration);
                const durationUnit = codeDocData.durationUnit;

                let isValid = false;
                if (durationUnit === 'days') {
                    isValid = (currentTime - createdTime) / (1000 * 60 * 60 * 24) <= duration;
                } else if (durationUnit === 'hours') {
                    isValid = (currentTime - createdTime) / (1000 * 60 * 60) <= duration;
                }

                if (isValid) {
                    const influencerRef = codeDocData.influencer; // Assuming the reference is stored under "influencer"
                    // Fetch the influencer document
                    const influencerDoc = await getDoc(influencerRef);
                    const influencerData = influencerDoc.data();
                    influencerEmail = influencerData.email;
                    isCodeValid.set(true);
                } else {
                    errorMessage.set('This code is no longer valid.');
                }
            } else {
                errorMessage.set('Invalid QR code.');
            }
        } else {
            errorMessage.set('No code found.');
        }
        loading.set(false);
    });

    const submitTransaction = async () => {
        const amount = parseFloat(transactionAmount);
        // check for required fields
        if (!employeeName.trim() || amount <= 0 || isNaN(amount)) {
            errorMessage.set('All fields are required and the transaction amount must be a valid number.');
            return;
        }
        loading.set(true);
        // add transaction document to firebase
        // TODO replace names with firebase reference values
        try {
            await addDoc(collection(db, "transactions"), {
                codeId,
                code: codeDocRef,
                influencer: codeDocData.influencer,
                employeeName,
                transactionAmount: amount,
                merchant: $authStore.userRef,
                timestamp: new Date()
            });
            await updateDoc(codeDocRef, {
                usageCount: increment(1)
            });
            successfulTransaction = true;
        } catch (error) {
            console.error("Error submitting transaction:", error);
            errorMessage.set('Error submitting transaction. Please try again.');
        } finally {
            loading.set(false);
        }
    };

    $:{
        console.log('loading', $loading);
    }
</script>



<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
    {#if $loading}
        <span class="loading loading-infinity loading-lg text-white"></span>
    {:else}
        {#if successfulTransaction}
            <div class="card rounded-lg w-98 p-2 bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90%">
                <div class="card rounded-lg w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://plus.unsplash.com/premium_photo-1681487956679-59fb4ffef9b8?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Transaction Successful!</h2>
                        <p class="text-white">Thanks for working with Shout</p>
                    </div>
                </div>
            </div>
        {:else}
            <h1 class="text-3xl font-bold text-black mb-6">Register Transaction</h1>
            {#if $isCodeValid}
                <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full min-w-[350px] max-w-md p-2">
                    <div class="w-full max-w-md shadow-lg rounded-lg p-6 bg-black">
                        <p class="text-white font-bold mb-2">Influencer Email: {influencerEmail}</p>
                        <p class="text-white font-bold mb-2">QR Code ID: {codeId}</p>
                        <div class="form-control mb-4">
                            <label class="label" for="employeeName">
                                <span class="text-white">Employee Name</span>
                            </label>
                            <input id="employeeName" type="text" bind:value={employeeName} class="input input-bordered border-black text-white"/>
                        </div>
                        <div class="form-control mb-4">
                            <label class="label" for="transactionAmount">
                                <span class="text-white">Transaction Amount</span>
                            </label>
                            <input id="transactionAmount" type="number" bind:value={transactionAmount} class="input input-bordered border-black text-white"/>
                        </div>
                        <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full shadow-md" on:click={submitTransaction}>Submit Transaction</button>
                        {#if $errorMessage}
                            <div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{$errorMessage}</span>
                            </div>
                        {/if}
                    </div>
                </div>
            {:else}
                <div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{$errorMessage}</span>
                </div>
            {/if}
        {/if}
    {/if}
</div>