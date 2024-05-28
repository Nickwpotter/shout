import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errorMessage, $$unsubscribe_errorMessage;
  let $$unsubscribe_successMessage;
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let successMessage = writable("");
  $$unsubscribe_successMessage = subscribe(successMessage, (value) => value);
  $$unsubscribe_errorMessage();
  $$unsubscribe_successMessage();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center"><h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-wvlv96">Transaction Successful</h1> ${`<p class="mt-4 text-red-600">${escape($errorMessage)}</p>`}</div>`;
});
export {
  Page as default
};
