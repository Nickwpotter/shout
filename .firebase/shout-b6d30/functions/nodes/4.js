

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.5vroGir-.js","_app/immutable/chunks/scheduler.PCYk-eKx.js","_app/immutable/chunks/index.CKmYMgu1.js"];
export const stylesheets = [];
export const fonts = [];
