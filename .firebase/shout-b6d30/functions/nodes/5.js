

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BJXwK2cw.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CwXh1Flu.js"];
export const stylesheets = [];
export const fonts = [];
