

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/error/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.BaqgzISB.js","_app/immutable/chunks/scheduler.PCYk-eKx.js","_app/immutable/chunks/index.CKmYMgu1.js"];
export const stylesheets = [];
export const fonts = [];
