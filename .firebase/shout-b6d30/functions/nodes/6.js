

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/transaction/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Doq69gXi.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CwXh1Flu.js","_app/immutable/chunks/firebase.BCwi6t6O.js"];
export const stylesheets = [];
export const fonts = [];
