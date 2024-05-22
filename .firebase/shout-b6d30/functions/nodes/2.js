

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.oqieDtPU.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CwXh1Flu.js","_app/immutable/chunks/index.3BRkCKYy.js","_app/immutable/chunks/firebase.BCwi6t6O.js"];
export const stylesheets = [];
export const fonts = [];
