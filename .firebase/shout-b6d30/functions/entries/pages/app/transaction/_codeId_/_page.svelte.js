import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as authStore } from "../../../../../chunks/authStore.js";
import "../../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  let $$unsubscribe_page;
  let $loading, $$unsubscribe_loading;
  let $isCodeValid, $$unsubscribe_isCodeValid;
  let $errorMessage, $$unsubscribe_errorMessage;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let employeeName = "";
  let transactionAmount = "";
  let influencerEmail = "";
  let codeId = "";
  let isCodeValid = writable(false);
  $$unsubscribe_isCodeValid = subscribe(isCodeValid, (value) => $isCodeValid = value);
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let loading = writable(true);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_authStore();
  $$unsubscribe_page();
  $$unsubscribe_loading();
  $$unsubscribe_isCodeValid();
  $$unsubscribe_errorMessage();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">${$loading ? `<span class="loading loading-infinity loading-lg text-white"></span>` : `${`<h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-uix1vj">Register Transaction</h1> ${$isCodeValid ? `<div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full min-w-[350px] max-w-md p-2"><div class="w-full max-w-md shadow-lg rounded-lg p-6 bg-black"><p class="text-white font-bold mb-2">Influencer Email: ${escape(influencerEmail)}</p> <p class="text-white font-bold mb-2">QR Code ID: ${escape(codeId)}</p> <div class="form-control mb-4"><label class="label" for="employeeName" data-svelte-h="svelte-1avw4ly"><span class="text-white">Employee Name</span></label> <input id="employeeName" type="text" class="input input-bordered border-black text-white"${add_attribute("value", employeeName, 0)}></div> <div class="form-control mb-4"><label class="label" for="transactionAmount" data-svelte-h="svelte-12ukgw8"><span class="text-white">Transaction Amount</span></label> <input id="transactionAmount" type="number" class="input input-bordered border-black text-white"${add_attribute("value", transactionAmount, 0)}></div> <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full shadow-md" data-svelte-h="svelte-11wxde2">Submit Transaction</button> ${$errorMessage ? `<div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape($errorMessage)}</span></div>` : ``}</div></div>` : `<div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape($errorMessage)}</span></div>`}`}`}</div>`;
});
export {
  Page as default
};
