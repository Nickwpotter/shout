import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let baseUrl = "";
  let influencerName = "";
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center"><h1 class="text-3xl font-bold text-black mb-6" data-svelte-h="svelte-q1k0g">Create QR Code</h1> <div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-white"><div class="form-control mb-4"><label class="label" data-svelte-h="svelte-cy0s56"><span class="label-text text-black">Base URL</span></label> <input type="text" class="input input-bordered border-black text-black"${add_attribute("value", baseUrl)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-1cdae4e"><span class="label-text text-black">Influencer Name</span></label> <input type="text" class="input input-bordered border-black text-black"${add_attribute("value", influencerName)}></div> <button class="btn btn-primary w-full shadow-md" data-svelte-h="svelte-10i54zb">Generate QR Code</button></div> ${``}</div>`;
});
export {
  Page as default
};
