import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { a as authStore } from "../../../../chunks/authStore.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
import { g as goto } from "../../../../chunks/client.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let email = "";
  let password = "";
  {
    {
      if ($authStore.currentUser) {
        console.log("Logged in user:", $authStore.currentUser);
        goto();
      } else {
        console.log(
          "User is not logged in"
        );
      }
    }
  }
  $$unsubscribe_authStore();
  return `<div class="bg-base-100 min-w-min w-screen"><div class="flex flex-col md:flex-row w-full items-center justify-center gap-x-28 px-2 lg:px-6"><div class="text-center lg:text-left text-white lg:ml-4" data-svelte-h="svelte-5r2avl"><h1 class="text-5xl font-bold">Let&#39;s make some <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">noise</span> together.</h1> <p class="py-6">Unlock the secrets to successful influencer marketing. Login now!</p></div> <div class="max-w-sm min-w-[350px] bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg"><div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 !rounded-lg"><form class="card-body">${``} <div class="form-control"><label class="label" data-svelte-h="svelte-2km28j"><span class="label-text !text-white">Email</span></label> <input type="email" placeholder="email" class="input input-bordered" required${add_attribute("value", email, 0)}></div> ${``} <div class="form-control"><label class="label" data-svelte-h="svelte-kby9cu"><span class="label-text !text-white">Password</span></label> <input type="password" placeholder="Password" class="input input-bordered" required${add_attribute("value", password, 0)}> ${`<label class="label" data-svelte-h="svelte-d15w08"><a href="#" class="label-text-alt link link-hover">Forgot password?</a></label>`}</div> ${`<div><button type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg" data-svelte-h="svelte-1x83tdd">Sign in</button></div> <button class="btn !text-white btn-active btn-link" data-svelte-h="svelte-qgo3ok">Don&#39;t have an account? Sign up</button>`}</form></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen max-w-screen w-screen sm:flex sm:flex-row mx-0 justify-center">${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
