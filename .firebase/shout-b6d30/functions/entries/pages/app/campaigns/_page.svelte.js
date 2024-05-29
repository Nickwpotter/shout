import { c as create_ssr_component, a as subscribe, d as each, e as escape } from "../../../../chunks/ssr.js";
import { d as db } from "../../../../chunks/firebase.js";
import { query, collection, where, getDocs } from "firebase/firestore";
import { a as authStore } from "../../../../chunks/authStore.js";
import "../../../../chunks/client.js";
const itemsPerPage = 5;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let codes = [];
  let userType;
  let transactions = [];
  let allTransactions = [];
  let recentTransactions = [];
  let averageTransactionPrice = 0;
  let lifetimeAccountSales = 0;
  let lifetimeAccountTransactions = 0;
  let loading = true;
  let currentPage = 1;
  async function getData(userType2) {
    let codesQuery;
    let transactionsQuery;
    if (userType2 === "merchant") {
      codesQuery = query(collection(db, "codes"), where("merchant", "==", $authStore.userRef));
      transactionsQuery = query(collection(db, "transactions"), where("merchant", "==", $authStore.userRef));
    } else if (userType2 === "influencer") {
      codesQuery = query(collection(db, "codes"), where("influencer", "==", $authStore.userRef));
      transactionsQuery = query(collection(db, "transactions"), where("influencer", "==", $authStore.userRef));
    } else {
      console.error("Invalid user type.");
      return;
    }
    try {
      const [codesSnapshot, transactionsSnapshot] = await Promise.all([getDocs(codesQuery), getDocs(transactionsQuery)]);
      codes = codesSnapshot.docs.map((doc) => ({ ...doc.data(), ref: doc.ref }));
      transactions = transactionsSnapshot.docs.map((doc) => doc.data());
      allTransactions = transactions;
      updateDisplayedTransactions();
      lifetimeAccountTransactions = transactions.length;
      lifetimeAccountSales = transactions.reduce((sum, tx) => sum + tx.transactionAmount, 0);
      averageTransactionPrice = lifetimeAccountTransactions ? lifetimeAccountSales / lifetimeAccountTransactions : 0;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      loading = false;
    }
  }
  function updateDisplayedTransactions() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    recentTransactions = allTransactions.slice(start, end);
  }
  {
    {
      if ($authStore.userRef) {
        userType = $authStore.userType;
        getData(userType);
      }
    }
  }
  $$unsubscribe_authStore();
  return `${loading ? `<div class="flex items-center justify-center min-h-screen" data-svelte-h="svelte-1lic2tl"><p>Loading...</p></div>` : `<div class="m-8"><div class="w-full flex justify-between p-4"><h1 class="text-[28px] font-bold text-white" data-svelte-h="svelte-sm021n">Your Campaigns</h1> ${userType === "merchant" ? `<button class="btn bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !text-white !rounded-lg border-none shadow-md" data-svelte-h="svelte-1yf2n8w">Create new Campaign</button>` : ``}</div> ${codes.length > 0 ? `<div class="w-full p-4"><div class="overflow-x-auto"><table class="table text-white table-layout: auto;"> <thead><tr><th data-svelte-h="svelte-qggnut">Row #</th> <th data-svelte-h="svelte-1tfe9gf">ID</th> <th data-svelte-h="svelte-i34oge">Start Date</th> <th data-svelte-h="svelte-9c57ka">Duration</th> <th data-svelte-h="svelte-wafei9">Influencer</th> <th data-svelte-h="svelte-13zf735">Total Transactions</th> ${userType === "merchant" ? `<th></th>` : ``} <th></th></tr></thead> <tbody>${each(codes, (_code, index) => {
    return `<tr><th>${escape(index + 1)}</th> <td>${escape(_code.ref.id)}</td> <td>${escape(_code.promotionStartDate)}</td> <td>${escape(_code.promotionDuration)}</td> <td>${escape(_code.influencer.id)}</td> <td>${escape(_code.usageCount)}</td> <td><a class="text-orange-400 hover:text-blue-700" href="javascript:void(0);" data-svelte-h="svelte-135qgqy">View Code</a></td> </tr>`;
  })}</tbody></table></div></div> <div class="w-full flex justify-between p-4" data-svelte-h="svelte-xwka3e"><h1 class="text-[28px] font-bold text-white">Lifetime</h1></div> <div class="flex justify-center my-3"><div class="stats stats-vertical md:stats-horizontal shadow w-full"><div class="stat"><div class="stat-title" data-svelte-h="svelte-1ul1asq">Lifetime Account Sales</div> <div class="stat-value">$${escape(lifetimeAccountSales.toFixed(2))}</div> <div class="stat-desc" data-svelte-h="svelte-lcwqtc">All-time sales</div></div> <div class="stat"><div class="stat-title" data-svelte-h="svelte-1lkd4am">Average Transaction Price</div> <div class="stat-value">$${escape(averageTransactionPrice.toFixed(2))}</div> <div class="stat-desc" data-svelte-h="svelte-1hrzwj5">All-time average</div></div> <div class="stat"><div class="stat-title" data-svelte-h="svelte-1vu18uz">Lifetime Account Transactions</div> <div class="stat-value">${escape(lifetimeAccountTransactions)}</div> <div class="stat-desc" data-svelte-h="svelte-hha9xb">All-time transactions</div></div></div></div> <div class="overflow-x-auto justify-center shadow-md orange"><div class="w-full flex justify-between p-4" data-svelte-h="svelte-1ilcbc9"><h1 class="text-[28px] font-bold text-white">Recent Transactions</h1></div> ${recentTransactions.length > 0 ? `<table class="table text-white w-1/2"> <thead data-svelte-h="svelte-1rgjwe1"><tr><th>Row #</th> <th>Employee Name</th> <th>Date</th> <th>Code ID</th> <th>Transaction Value</th></tr></thead> <tbody>${each(recentTransactions, (transaction, index) => {
    return `<tr><td>${escape((currentPage - 1) * itemsPerPage + index + 1)}</td> <td>${escape(transaction.employeeName)}</td> <td>${escape(new Date(transaction.timestamp.seconds * 1e3).toLocaleString())}</td> <td>${escape(transaction.code.id)}</td> <td>$${escape(transaction.transactionAmount.toFixed(2))}</td> </tr>`;
  })}</tbody></table> <div class="join flex justify-center mt-4"><button class="join-item btn" ${"disabled"}>«</button> <button class="join-item btn">Page ${escape(currentPage)}</button> <button class="join-item btn" ${currentPage * itemsPerPage >= allTransactions.length ? "disabled" : ""}>»</button></div>` : `<div class="w-full flex justify-between p-4" data-svelte-h="svelte-1wsdbhs"><p>No Transactions found</p></div>`}</div>` : `<div class="w-full flex justify-between p-4" data-svelte-h="svelte-e3ko25"><h1 class="text-white font-bold text-[26px]">No campaigns yet.</h1></div> ${userType === "influencer" ? `<div class="w-full flex justify-between p-4" data-svelte-h="svelte-11dkodd"><p>Get in contact with a merchant for a partnership!</p></div>` : ``}`}</div>`}`;
});
export {
  Page as default
};
