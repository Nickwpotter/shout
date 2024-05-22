import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let employeeName = "";
  let transactionTotal = "";
  let influencerName = "";
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center"><h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-1stobui">Transaction Entry</h1> <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white"><p class="text-black mb-4">Campaign Code: ${escape(influencerName)}</p> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-1vnfywd"><span class="label-text text-black">Employee Name</span></label> <input type="text" class="input input-bordered border-black text-black"${add_attribute("value", employeeName)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-7awl56"><span class="label-text text-black">Transaction Total</span></label> <input type="number" class="input input-bordered border-black text-black"${add_attribute("value", transactionTotal)}></div> <button class="btn btn-primary w-full shadow-md" data-svelte-h="svelte-j8hdpb">Submit</button></div></div>`;
});
export {
  Page as default
};
