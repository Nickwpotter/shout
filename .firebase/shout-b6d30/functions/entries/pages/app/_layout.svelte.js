import { c as create_ssr_component, b as subscribe, a as add_attribute } from "../../../chunks/ssr.js";
import { a as authStore } from "../../../chunks/authStore.js";
import { b as base } from "../../../chunks/paths.js";
/* empty css                  */
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let rootURL = base;
  let userLogged = false;
  {
    {
      if ($authStore) {
        userLogged = !!$authStore.currentUser;
      }
    }
  }
  $$unsubscribe_authStore();
  return `${userLogged ? `${slots.default ? slots.default({}) : ``}` : `<div>User is not signed in, click <a${add_attribute("href", rootURL + "/auth/sign-up", 0)}>here</a> to sign in.</div>`}`;
});
export {
  Layout as default
};
