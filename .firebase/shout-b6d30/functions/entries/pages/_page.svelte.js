import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "../../chunks/client.js";
const hero = "/_app/immutable/assets/hero.CvLaY7wU.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showModal, $$unsubscribe_showModal;
  let $showAlert, $$unsubscribe_showAlert;
  const showModal = writable(false);
  $$unsubscribe_showModal = subscribe(showModal, (value) => $showModal = value);
  let visitorEmail = "";
  let visitorName = "";
  let visitorPhone = "";
  let alertMessage = "";
  let alertType = "";
  let showAlert = writable(false);
  $$unsubscribe_showAlert = subscribe(showAlert, (value) => $showAlert = value);
  $$unsubscribe_showModal();
  $$unsubscribe_showAlert();
  return `<div class="flex items-center h-[85vh] w-full px-2 py-4 mt-16 lg:my-0 lg:px-20 lg:py-2"><div class="flex flex-col lg:flex-row justify-between items-center gap-4 w-full max-w-[1600px]"><div class="flex flex-col gap-2 items-center lg:items-left"><h1 class="text-[40px] lg:text-[72px] font-bold text-white text-center lg:text-left" data-svelte-h="svelte-uk4q24">Turn Online <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Influence</span> into In-Store <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">Sales</span></h1> <h2 class="text-[16px] lg:text-[22px] text-white text-center lg:text-left" data-svelte-h="svelte-go8qxq">Shout connects store owners and social media influencers to drive real-world results. Track campaign success and maximize your impact</h2> <div class="flex flex-col items-center lg:flex-row w-full gap-4"><button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px" data-svelte-h="svelte-1mqs9ok"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Sign in</span></button> <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full mt-4 min-w-[250px] max-w-[300px] !p-px" data-svelte-h="svelte-7eieoy"><span class="bg-black text-white font-bold rounded-lg h-full w-full text-center flex items-center justify-center">Contact us</span></button></div></div> <div data-svelte-h="svelte-a7mntg"><img class="max-w-[250px] lg:max-w-[500px]"${add_attribute("src", hero, 0)} alt="Digital Marketing 3d render"></div></div></div> ${$showModal ? `<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"><div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg shadow-lg w-full max-w-md"><div class="rounded-lg w-full max-w-md bg-black p-6">${``} <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-1q8mb2n"><span class="label-text text-white">Name</span></label> <input type="text" class="input input-bordered border-white text-white"${add_attribute("value", visitorName, 0)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-miyyga"><span class="label-text text-white">Email</span></label> <input type="email" class="input input-bordered border-white text-white"${add_attribute("value", visitorEmail, 0)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-ufywft"><span class="label-text text-white">Phone Number</span></label> <input type="tel" class="input input-bordered border-white text-white"${add_attribute("value", visitorPhone, 0)}></div> <div class="form-control mb-4"><label class="label" data-svelte-h="svelte-1aezsnz"><span class="label-text text-white">Message</span></label> <textarea class="textarea textarea-bordered border-white text-white" placeholder="Message">${escape("")}</textarea></div> <button class="btn btn-primary w-full shadow-md mb-4" data-svelte-h="svelte-nkfua3">Submit</button> <button class="btn btn-secondary w-full shadow-md" data-svelte-h="svelte-1nf9nl2">Close</button></div></div></div>` : ``} ${$showAlert ? `<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"><div class="bg-black text-white p-4 rounded-lg shadow-lg w-full max-w-md mt-20"><div role="alert" class="${"alert " + escape(alertType, true)}"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape(alertMessage)}</span></div></div></div>` : ``}`;
});
export {
  Page as default
};
