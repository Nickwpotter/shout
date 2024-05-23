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
  return `<div class="flex items-center h-full w-full p-24" data-svelte-h="svelte-1htwx23"><div class="p-2 bg-base-100 w-full text-white rounded-lg flex flex-col items-center bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90%"><div class="bg-black h-full w-full rounded-lg flex items-center flex-col justify-center p-12"><h1 class="text-3xl font-bold text-white mb-6">Welcome to Shout</h1> <p class="text-lg text-white mb-4">Our mission is to help local restaurants gain more visibility through influencer marketing.</p> <p class="text-lg text-white mb-4">For sales inquiries, please contact us at: <span class="font-bold">801-726-9049</span></p></div></div></div> ${$showModal ? `<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"><div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg shadow-lg w-full max-w-md"><div class="rounded-lg w-full max-w-md bg-black p-6"><h2 class="text-2xl text-white font-bold mb-4" data-svelte-h="svelte-odhw19">Stay Updated</h2> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-115cund"><span class="label-text text-black">Name</span></label> <input type="text" class="input input-bordered border-black text-black"${add_attribute("value", visitorName, 0)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-13eoxpg"><span class="label-text text-black">Email</span></label> <input type="email" class="input input-bordered border-black text-black"${add_attribute("value", visitorEmail, 0)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-h600zv"><span class="label-text text-black">Phone Number</span></label> <input type="tel" class="input input-bordered border-black text-black"${add_attribute("value", visitorPhone, 0)}></div> <button class="btn btn-primary w-full shadow-md mb-4" data-svelte-h="svelte-nkfua3">Submit</button> <button class="btn btn-secondary w-full shadow-md" data-svelte-h="svelte-1nf9nl2">Close</button></div></div></div>` : ``}`;
});
export {
  Page as default
};
