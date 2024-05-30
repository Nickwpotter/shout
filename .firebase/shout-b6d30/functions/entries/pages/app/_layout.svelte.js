import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../chunks/ssr.js";
import { a as authStore } from "../../../chunks/authStore.js";
/* empty css                  */
import { g as goto } from "../../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let userLogged = false;
  {
    {
      if ($authStore) {
        userLogged = !!$authStore.currentUser;
        console.log("user was authenticated");
      } else {
        goto();
      }
    }
  }
  $$unsubscribe_authStore();
  return `${userLogged ? `${slots.default ? slots.default({}) : ``}` : `<div data-svelte-h="svelte-11xkptw">User is not signed in, click <a class="text-orange-400"${add_attribute("href", "/auth/sign-up", 0)}>here</a> to sign in.</div>`}`;
});
export {
  Layout as default
};
