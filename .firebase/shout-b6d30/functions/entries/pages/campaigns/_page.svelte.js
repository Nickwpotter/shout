import { c as create_ssr_component, a as subscribe, d as each, e as escape } from "../../../chunks/ssr.js";
import { d as db } from "../../../chunks/firebase.js";
import { query, collection, where, getDocs } from "firebase/firestore";
import { a as authStore } from "../../../chunks/authStore.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let codes = [];
  async function getCodes() {
    const q = query(collection(db, "codes"), where("merchant", "==", $authStore.userRef));
    const querySnapshot = await getDocs(q);
    codes = querySnapshot.docs.map((doc) => ({
      // Get the document data
      ...doc.data(),
      // Store the document reference
      ref: doc.ref
    }));
    console.log("codes", codes);
  }
  {
    {
      if ($authStore.userRef) {
        getCodes();
      }
    }
  }
  $$unsubscribe_authStore();
  return `<div><div class="w-full flex justify-between p-4"><h1 class="text-xl font-bold text-white" data-svelte-h="svelte-1yogril">Your Campaigns</h1> <button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" data-svelte-h="svelte-1t6mqzo">Create new Campaign</button></div> <div class="w-full p-4"><div class="overflow-x-auto"><table class="table text-white"> <thead data-svelte-h="svelte-1wiaq7"><tr><th></th> <th>ID</th> <th>Start Date</th> <th>Duration</th> <th>Influencer</th> <th>Total Transactions</th> <th></th></tr></thead> <tbody>${each(codes, (_code) => {
    return `<tr><th data-svelte-h="svelte-728xsj">1</th> <td>${escape(_code.ref.id)}</td> <td>${escape(_code.promotionStartDate)}</td> <td>${escape(_code.promotionDuration)}</td> <td>${escape(_code.influencer.id)}</td> <td>${escape(_code.usageCount)}</td> <td data-svelte-h="svelte-1f5k16v">View</td> </tr>`;
  })}</tbody></table></div></div></div>`;
});
export {
  Page as default
};
