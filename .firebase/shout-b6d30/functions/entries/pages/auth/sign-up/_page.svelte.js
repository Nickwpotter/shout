import { c as create_ssr_component, b as subscribe, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { a as authStore } from "../../../../chunks/authStore.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
import { w as writable } from "../../../../chunks/index.js";
import { g as goto } from "../../../../chunks/client.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  let $errorMessage, $$unsubscribe_errorMessage;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let email = "";
  let password = "";
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
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
  $$unsubscribe_errorMessage();
  return `<div class="hero bg-base-100"><div class="hero-content flex-col lg:flex-row-reverse"><div class="text-center lg:text-left text-white lg:ml-4" data-svelte-h="svelte-5r2avl"><h1 class="text-5xl font-bold">Let&#39;s make some <span class="bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% inline-block text-transparent bg-clip-text">noise</span> together.</h1> <p class="py-6">Unlock the secrets to successful influencer marketing. Login now!</p></div> <div class="max-w-sm min-w-[400px] bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% p-2 rounded-lg"><div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 !rounded-lg"><form class="card-body">${``} <div class="form-control"><label class="label" data-svelte-h="svelte-2km28j"><span class="label-text !text-white">Email</span></label> <input type="email" placeholder="email" class="input input-bordered" required${add_attribute("value", email, 0)}></div> ${``} <div class="form-control"><label class="label" data-svelte-h="svelte-kby9cu"><span class="label-text !text-white">Password</span></label> <input type="password" placeholder="Password" class="input input-bordered" required${add_attribute("value", password, 0)}> ${`<label class="label" data-svelte-h="svelte-d15w08"><a href="#" class="label-text-alt link link-hover">Forgot password?</a></label>`}</div> ${`<div><button type="submit" class="btn !text-white bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% !rounded-lg" data-svelte-h="svelte-3dspyp">Sign in</button></div> <button class="btn btn-active btn-link" data-svelte-h="svelte-1pnhgui">Don&#39;t have an account? Sign up</button>`} ${$errorMessage ? `<div role="alert" class="alert bg-gradient-to-r to-[#fd1d1d] from-[#fcb045] !text-white"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape($errorMessage)}</span></div>` : ``}</form></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
