import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let employeeName = "";
  let transactionTotal = "";
  let influencerName = "";
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center"><h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-1ouw4rt">Transaction Success</h1> <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white"><p class="text-black mb-4">Employee Name: ${escape(employeeName)}</p> <p class="text-black mb-4">Transaction Total: ${escape(transactionTotal)}</p> <p class="text-black mb-4">Campaign Code: ${escape(influencerName)}</p> <button class="btn btn-secondary w-full shadow-md" data-svelte-h="svelte-15so0sq">Log Another Transaction</button></div></div>`;
});
export {
  Page as default
};
