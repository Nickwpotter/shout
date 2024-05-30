import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import "../../../../chunks/authStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $qrCodeValid, $$unsubscribe_qrCodeValid;
  let $errorMessage, $$unsubscribe_errorMessage;
  let employeeName = "";
  let transactionAmount = "";
  let influencerName = "";
  let qrCodeId = "";
  let qrCodeValid = writable(false);
  $$unsubscribe_qrCodeValid = subscribe(qrCodeValid, (value) => $qrCodeValid = value);
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  $$unsubscribe_qrCodeValid();
  $$unsubscribe_errorMessage();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center"><h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-uix1vj">Register Transaction</h1> ${$qrCodeValid ? `<div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white"><p class="text-black font-bold mb-2">Influencer: ${escape(influencerName)}</p> <p class="text-black font-bold mb-2">QR Code ID: ${escape(qrCodeId)}</p> <div class="form-control mb-4"><label class="label" for="employeeName" data-svelte-h="svelte-k3l84"><span class="label-text text-black">Employee Name</span></label> <input id="employeeName" type="text" class="input input-bordered border-black text-black"${add_attribute("value", employeeName, 0)}></div> <div class="form-control mb-4"><label class="label" for="transactionAmount" data-svelte-h="svelte-6ecj5w"><span class="label-text text-black">Transaction Amount</span></label> <input id="transactionAmount" type="number" class="input input-bordered border-black text-black"${add_attribute("value", transactionAmount, 0)}></div> <button class="btn btn-primary w-full shadow-md" data-svelte-h="svelte-1fiwydb">Submit Transaction</button> ${$errorMessage ? `<p class="mt-4 text-red-600">${escape($errorMessage)}</p>` : ``}</div>` : `<p class="mt-4 text-red-600">${escape($errorMessage)}</p>`}</div>`;
});
export {
  Page as default
};
