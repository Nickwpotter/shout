<script>
    import { onMount } from "svelte";
    import { db } from "../../../../firebase";
    import {collection, addDoc, getDoc, getDocs, query, doc} from "firebase/firestore";
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

    onMount(async () => {
            if (codeId === 'new') {
                // get influencers to select
                // TODO replace with query of users where type = influencer
                // const q = query(collection(db, "codes"), where('merchant', '==', $authStore.userRef));
                // const q = query(collection(db, "users"), where('type', '==', "influencer"));
                const q = query(collection(db, "influencers"));
                const querySnapshot = await getDocs(q);
                influencers = querySnapshot.docs.map((doc) => ({
                    // Get the document data
                    ...doc.data(),
                    // Store the document reference
                    ref: doc.ref,
                }));
            } else {
                isNewCode = false;
                codeDocRef = doc(db, "codes", codeId);
                const codeDoc = await getDoc(codeDocRef);
                codeDocData = codeDoc.data();
                codeLink = `${baseUrl}/${codeId}`;
                codeDataURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(codeLink)}&size=200x200&format=png`;

                // Get the influencer reference from the codeDocData
                const influencerRef = codeDocData.influencer; // Assuming the reference is stored under "influencer"
                console.log(influencerRef);
                // Fetch the influencer document
                const influencerDoc = await getDoc(influencerRef);
                const influencerData = influencerDoc.data();
                influencerName = influencerData.name;
            }
            merchantName = $authStore?.userData?.name;
            console.log('merchantName', merchantName);
    });


    const resetForm = () => {
        influencer = '';
        promotionStartDate = '';
        promotionDuration = 0;
        durationUnit = 'days';
        merchantName = '';
    };

    const generateCode = async () => {
        //check for required fields
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

    $:{
        if($authStore) {
            merchantName = $authStore?.userData?.name
        }
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
                <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg">
                    <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-black flex flex-col items-center">
                        <div class="bg-white p-2 mb-4 rounded-lg">
                            <img src={codeDataURL} alt="QR Code" class="w-40 h-40"/>
                        </div>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Merchant:</span> {merchantName}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Influencer:</span> {influencerName}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Start Date: </span> {codeDocData.promotionStartDate}</p>
                        <p class="text-white font-bold mb-2"><span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">QR Code ID: </span> {codeId}</p>
                        <a href={codeLink} target="_blank" class="btn btn-active btn-link">Test QR Code Link</a>
                        <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4" on:click={downloadQRCode}>Download QR Code</button>
                    </div>
                </div>
            {:else}
                <div>Something went wrong </div>
            {/if}
        {/if}
    {/if}
</div>





