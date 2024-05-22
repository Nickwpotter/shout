import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen flex flex-col bg-base-100 text-neutral"><header class="bg-primary text-base-100 p-4 shadow-md" data-svelte-h="svelte-1ywiz5g"><div class="container mx-auto flex justify-between items-center"><h1 class="text-2xl font-bold text-black">Shout</h1></div></header> <main class="flex-grow container mx-auto p-4">${slots.default ? slots.default({}) : ``}</main> <footer class="bg-primary text-base-100 p-4 mt-4 shadow-md" data-svelte-h="svelte-1yf7qap"><div class="container mx-auto text-center text-black"><p>© 2024 Shout. All rights reserved.</p></div></footer></div>`;
});
export {
  Layout as default
};
