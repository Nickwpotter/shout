<script>
  import { db } from "../../firebase";
  import { collection, addDoc } from "firebase/firestore";
  import { onMount } from "svelte";

  let employeeName = '';
  let transactionTotal = '';
  let influencerName = '';

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    employeeName = params.get('employeeName') ?? '';
    transactionTotal = params.get('transactionTotal') ?? '';
    influencerName = params.get('influencer') ?? '';
  });

  const submitTransaction = async () => {
    try {
      await addDoc(collection(db, "transactions"), {
        employeeName,
        transactionTotal,
        influencerName,
        timestamp: new Date()
      });
      // window.location.href = `/success?employeeName=${employeeName}&transactionTotal=${transactionTotal}&influencer=${influencerName}`;
    } catch (error) {
      console.error("Error submitting transaction:", error);
      // window.location.href = "/error";
    }
  };


</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
  <h1 class="text-3xl font-bold text-black mb-6">Transaction Entry</h1>
  <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
    <p class="text-black mb-4">Campaign Code: {influencerName}</p>
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text text-black">Employee Name</span>
      </label>
      <input type="text" bind:value={employeeName} class="input input-bordered border-black text-black"/>
    </div>
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text text-black">Transaction Total</span>
      </label>
      <input type="number" bind:value={transactionTotal} class="input input-bordered border-black text-black"/>
    </div>
    <button class="btn btn-primary w-full shadow-md" on:click={submitTransaction}>Submit</button>
  </div>
</div>
