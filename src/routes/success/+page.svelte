<script>
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
</script>

<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">
  <h1 class="text-3xl font-bold text-black mb-6">Transaction Success</h1>
  <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white">
    <p class="text-black mb-4">Employee Name: {employeeName}</p>
    <p class="text-black mb-4">Transaction Total: {transactionTotal}</p>
    <p class="text-black mb-4">Campaign Code: {influencerName}</p>
    <button class="btn btn-secondary w-full shadow-md" on:click={() => window.location.href = "/"}>Log Another Transaction</button>
  </div>
</div>
