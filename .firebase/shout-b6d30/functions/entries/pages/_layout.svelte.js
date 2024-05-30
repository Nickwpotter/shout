import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/ssr.js";
/* empty css               */
import { a as authStore } from "../../chunks/authStore.js";
import "../../chunks/client.js";
const logo = "/_app/immutable/assets/logo.DOk5Hlwk.png";
const profilePicture = "/_app/immutable/assets/profile.CZ5rsEOB.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let userLogged = false;
  {
    {
      if ($authStore.userRef) {
        userLogged = true;
      }
    }
  }
  $$unsubscribe_authStore();
  return `<div class="min-h-screen static"><div class="navbar bg-base-100"><div class="flex-1"></div> <div class="navbar-center" data-svelte-h="svelte-at75y2"><img class="max-w-[200px]"${add_attribute("src", logo, 0)} alt="Your Description"></div> <div class="flex-1 flex justify-end gap-2">${userLogged ? `<div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar" data-svelte-h="svelte-q6zks8"><div class="w-10 rounded-full bg-gradient-to-r from-[#833ab4] from-10% via-[#fd1d1d] via-30% to-[#fcb045] to-90% border border-white"><img alt="Profile"${add_attribute("src", profilePicture, 0)}></div></div> <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a data-svelte-h="svelte-1cjg06v">Profile</a></li> <li><a data-svelte-h="svelte-28h5c7">Campaigns</a></li> <li><a data-svelte-h="svelte-14yndbm">Logout</a></li></ul></div>` : ``}</div></div> <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
