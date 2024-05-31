import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../../chunks/index.js";
import { a as authStore } from "../../../../../chunks/authStore.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  let $page, $$unsubscribe_page;
  let $loading, $$unsubscribe_loading;
  let $errorMessage, $$unsubscribe_errorMessage;
  let $$unsubscribe_recentTransactions;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let merchantName = "";
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let loading = writable(false);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let influencers = [];
  let promotionStartDate = "";
  let promotionDuration = 0;
  $page.params.codeId;
  let recentTransactions = writable([]);
  $$unsubscribe_recentTransactions = subscribe(recentTransactions, (value) => value);
  {
    if ($authStore) {
      merchantName = $authStore?.userData?.name;
    }
  }
  $$unsubscribe_authStore();
  $$unsubscribe_page();
  $$unsubscribe_loading();
  $$unsubscribe_errorMessage();
  $$unsubscribe_recentTransactions();
  return `<div class="p-8 bg-base-100 text-black min-h-screen flex flex-col items-center">${$loading ? `<span class="loading loading-infinity loading-lg text-white"></span>` : `${`<h1 class="text-3xl font-bold text-white mb-4" data-svelte-h="svelte-1y02dnt">Create Campaign Code</h1> <div class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% rounded-lg p-2 max-w-md min-w-[350px]"><div class="w-full max-w-sm shadow-lg rounded-lg p-6 bg-black"><div class="form-control mb-4"><label class="label" for="storeName" data-svelte-h="svelte-hc6hcq"><span class="text-white">Merchant</span></label> <input id="storeName" type="text" class="input input-bordered border-black !text-white" disabled${add_attribute("value", merchantName, 0)}></div> <label class="form-control w-full max-w-xs"><div class="label" data-svelte-h="svelte-r2mmg"><span class="!text-white">Influencer</span></div> <select class="select select-bordered !text-white"><option disabled selected value="Pick one" data-svelte-h="svelte-8xjvh6">Pick one</option>${each(influencers, (_influencer) => {
    return `<option${add_attribute("value", _influencer.ref, 0)}>${escape(_influencer.name)}</option>`;
  })}</select></label> <div class="form-control mb-4"><label class="label" for="promotionStartDate" data-svelte-h="svelte-rowqhe"><span class="text-white">Promotion Start Date</span></label> <input id="promotionStartDate" type="date" class="input input-bordered border-black text-white"${add_attribute("value", promotionStartDate, 0)}></div> <div class="form-control mb-4"><label class="label" for="promotionDuration" data-svelte-h="svelte-3i1zdy"><span class="text-white">Promotion Duration</span></label> <input id="promotionDuration" type="number" class="input input-bordered border-black text-white"${add_attribute("value", promotionDuration, 0)}> <div class="mt-2"><label class="inline-flex items-center"><input type="radio" name="durationUnit" value="days" ${"checked"} class="form-radio text-white"${add_attribute("checked", true, 1)}> <span class="ml-2 text-white" data-svelte-h="svelte-1t6vrnv">Days</span></label> <label class="inline-flex items-center"><input type="radio" name="durationUnit" value="hours" ${""} class="form-radio text-white"${""}> <span class="ml-2 text-white" data-svelte-h="svelte-1mh0gi1">Hours</span></label></div></div> <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none w-full shadow-md" ${$loading ? "disabled" : ""}>${$loading ? `<span class="loading loading-infinity loading-lg"></span>` : ``}
                        Generate Code</button> ${$errorMessage ? `<div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.29 3.86l1.42-1.42 9.42 9.42-1.42 1.42-9.42-9.42zm2.71 6.42V6.7a9 9 0 00-1.71-5.3l1.42-1.42A10.978 10.978 0 0114 6.7v3.58l5.7 5.7a10.978 10.978 0 011.42-1.42L14 6.7v3.58z"></path></svg> <span>${escape($errorMessage)}</span></div>` : ``}</div></div>`}`}</div>`;
});
export {
  Page as default
};
