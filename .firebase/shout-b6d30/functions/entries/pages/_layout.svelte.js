import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
/* empty css               */
const logo = "/_app/immutable/assets/logo.DOk5Hlwk.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen static"><div class="navbar bg-base-100" data-svelte-h="svelte-1otwwuo"><div class="navbar-start"></div> <div class="navbar-center"><img class="max-w-[200px]"${add_attribute("src", logo, 0)} alt="Your Description"></div> <div class="navbar-end"></div></div> <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
