<script>
  import { onMount } from "svelte";
  import { db } from "../../../../firebase";
  import { doc, getDoc, updateDoc } from "firebase/firestore";
  import { writable } from "svelte/store";

  let transactionId = '';
  let employeeName = '';
  let transactionAmount = '';
  let newTransactionAmount = '';
  let qrCodeId = '';
  let influencerName = '';
  let errorMessage = writable('');
  let successMessage = writable('');

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    transactionId = params.get('transaction') || '';

    if (transactionId) {
      const transactionDocRef = doc(db, "transactions", transactionId);
      getDoc(transactionDocRef).then(transactionDoc => {
        if (transactionDoc.exists()) {
          const data = transactionDoc.data();
          employeeName = data.employeeName || '';
          transactionAmount = data.transactionAmount || '';
          newTransactionAmount = transactionAmount; // Initialize newTransactionAmount with current value
          qrCodeId = data.qrCodeId || '';
          influencerName = data.influencerName || '';
        } else {
          errorMessage.set('Transaction not found.');
        }
      }).catch(error => {
        errorMessage.set('Error fetching transaction.');
        console.error("Error fetching transaction:", error);
      });
    } else {
      errorMessage.set('No transaction ID found.');
    }
  });

  const updateTransactionAmount = async () => {
    const amount = parseFloat(newTransactionAmount);
    if (isNaN(amount) || amount <= 0) {
      errorMessage.set('Transaction amount must be a valid number.');
      successMessage.set('');
      return;
    }

    try {
      const transactionDocRef = doc(db, "transactions", transactionId);
      await updateDoc(transactionDocRef, {
        transactionAmount: amount
      });
      transactionAmount = newTransactionAmount; // Update the displayed amount only on success
      successMessage.set('Transaction amount updated successfully.');
      errorMessage.set('');
    } catch (error) {
      console.error("Error updating transaction:", error);
      errorMessage.set('Error updating transaction. Please try again.');
      successMessage.set('');
    }
  };
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
  <h1 class="text-3xl font-bold text-black mb-6">Transaction Successful</h1>
  {#if transactionId}
    <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
      <p class="text-black font-bold mb-2">Employee Name: {employeeName}</p>
      <p class="text-black font-bold mb-2">Transaction Amount: ${transactionAmount}</p>
      <p class="text-black font-bold mb-2">Influencer: {influencerName}</p>
      <p class="text-black font-bold mb-2">QR Code ID: {qrCodeId}</p>
      <div class="form-control mb-4">
        <label class="label" for="newTransactionAmount">
          <span class="label-text text-black">New Transaction Amount</span>
        </label>
        <input id="newTransactionAmount" type="number" step="0.01" bind:value={newTransactionAmount} class="input input-bordered border-black text-black"/>
      </div>
      <button class="btn btn-primary w-full shadow-md" on:click={updateTransactionAmount}>Update Transaction Amount</button>
      {#if $errorMessage}
        <p class="mt-4 text-red-600">{$errorMessage}</p>
      {/if}
      {#if $successMessage}
        <p class="mt-4 text-green-600">{$successMessage}</p>
      {/if}
    </div>
  {:else}
    <p class="mt-4 text-red-600">{$errorMessage}</p>
  {/if}
</div>
