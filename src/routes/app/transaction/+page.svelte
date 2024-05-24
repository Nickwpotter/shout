<script>
  import { onMount } from "svelte";
  import { db } from "../../../firebase.js";
  import { collection, addDoc, getDoc, doc, updateDoc, increment } from "firebase/firestore";
  import { writable } from "svelte/store";
  import { goto } from "$app/navigation";

  let employeeName = '';
  let transactionAmount = '';
  let influencerName = '';
  let qrCodeId = '';
  let qrCodeValid = writable(false);
  let errorMessage = writable('');

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    qrCodeId = params.get('qrcode') || '';
    console.log(qrCodeId);
    if (qrCodeId) {
      console.log("Made it here ")
      const qrcodeDocRef = doc(db, "qrcodes", qrCodeId);
      const qrcodeDoc = await getDoc(qrcodeDocRef);

      if (qrcodeDoc.exists()) {
        const data = qrcodeDoc.data();
        const currentTime = new Date().getTime();
        const createdTime = data.timestamp.toDate().getTime();
        const duration = Number(data.promotionDuration);
        const durationUnit = data.durationUnit;

        let isValid = false;
        if (durationUnit === 'days') {
          isValid = (currentTime - createdTime) / (1000 * 60 * 60 * 24) <= duration;
        } else if (durationUnit === 'hours') {
          isValid = (currentTime - createdTime) / (1000 * 60 * 60) <= duration;
        }

        if (isValid) {
          influencerName = data.influencerName;
          qrCodeValid.set(true);
        } else {
          errorMessage.set('This QR code is no longer valid.');
        }
      } else {
        errorMessage.set('Invalid QR code.');
      }
    } else {
      errorMessage.set('No QR code found.');
    }
  });

  const submitTransaction = async () => {
    const amount = parseFloat(transactionAmount);
    if (!employeeName.trim() || amount <= 0 || isNaN(amount)) {
      errorMessage.set('All fields are required and the transaction amount must be a valid number.');
      return;
    }

    try {
      const transactionRef = await addDoc(collection(db, "transactions"), {
        qrCodeId,
        influencerName,
        employeeName,
        transactionAmount: amount,
        timestamp: new Date()
      });

      const qrcodeDocRef = doc(db, "qrcodes", qrCodeId);
      await updateDoc(qrcodeDocRef, {
        usageCount: increment(1)
      });

      goto(`/success?transaction=${transactionRef.id}`);
    } catch (error) {
      console.error("Error submitting transaction:", error);
      errorMessage.set('Error submitting transaction. Please try again.');
    }
  };
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
  <h1 class="text-3xl font-bold text-black mb-6">Register Transaction</h1>
  {#if $qrCodeValid}
    <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
      <p class="text-black font-bold mb-2">Influencer: {influencerName}</p>
      <p class="text-black font-bold mb-2">QR Code ID: {qrCodeId}</p>
      <div class="form-control mb-4">
        <label class="label" for="employeeName">
          <span class="label-text text-black">Employee Name</span>
        </label>
        <input id="employeeName" type="text" bind:value={employeeName} class="input input-bordered border-black text-black"/>
      </div>
      <div class="form-control mb-4">
        <label class="label" for="transactionAmount">
          <span class="label-text text-black">Transaction Amount</span>
        </label>
        <input id="transactionAmount" type="number" bind:value={transactionAmount} class="input input-bordered border-black text-black"/>
      </div>
      <button class="btn btn-primary w-full shadow-md" on:click={submitTransaction}>Submit Transaction</button>
      {#if $errorMessage}
        <p class="mt-4 text-red-600">{$errorMessage}</p>
      {/if}
    </div>
  {:else}
    <p class="mt-4 text-red-600">{$errorMessage}</p>
  {/if}
</div>
