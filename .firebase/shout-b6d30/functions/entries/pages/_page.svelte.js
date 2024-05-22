import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showModal, $$unsubscribe_showModal;
  const showModal = writable(true);
  $$unsubscribe_showModal = subscribe(showModal, (value) => $showModal = value);
  let visitorEmail = "";
  let visitorName = "";
  let visitorPhone = "";
  $$unsubscribe_showModal();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center" data-svelte-h="svelte-5r8iu1"><h1 class="text-3xl font-bold text-black mb-6">Welcome to Shout</h1> <p class="text-lg text-black mb-4">Our mission is to help local restaurants gain more visibility through influencer marketing.</p> <p class="text-lg text-black mb-4">For sales inquiries, please contact us at: <span class="font-bold">801-726-9049</span></p></div> ${$showModal ? `<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"><div class="bg-white p-8 rounded shadow-lg w-full max-w-md"><h2 class="text-2xl font-bold mb-4" data-svelte-h="svelte-162iio8">Stay Updated</h2> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-266p7t"><span class="label-text text-black">Name</span></label> <input type="text" class="input input-bordered border-black text-black"${add_attribute("value", visitorName)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-qayaas"><span class="label-text text-black">Email</span></label> <input type="email" class="input input-bordered border-black text-black"${add_attribute("value", visitorEmail)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-13dbbwr"><span class="label-text text-black">Phone Number</span></label> <input type="tel" class="input input-bordered border-black text-black"${add_attribute("value", visitorPhone)}></div> <button class="btn btn-primary w-full shadow-md mb-4" data-svelte-h="svelte-nkfua3">Submit</button> <button class="btn btn-secondary w-full shadow-md" data-svelte-h="svelte-1nf9nl2">Close</button></div></div>` : ``}`;
});
export {
  Page as default
};
