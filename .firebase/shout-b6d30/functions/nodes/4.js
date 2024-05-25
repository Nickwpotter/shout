

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DDiVrhgk.js","_app/immutable/chunks/scheduler.PCYk-eKx.js","_app/immutable/chunks/index.BWac97FB.js"];
export const stylesheets = [];
export const fonts = [];
