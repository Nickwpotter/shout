import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
import { a as authStore } from "../../chunks/authStore.js";
const logo = "/_app/immutable/assets/logo.kSNaTfi5.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  {
    {
      if ($authStore) {
        !!$authStore.currentUser;
      }
    }
  }
  $$unsubscribe_authStore();
  return `<div class="min-h-screen static"><div class="navbar bg-base-100" data-svelte-h="svelte-1o7w5ru"><div class="navbar-start"></div> <div class="navbar-center"><img class="max-w-[200px]"${add_attribute("src", logo, 0)} alt="Your Description"></div> <div class="navbar-end"></div></div> <main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
