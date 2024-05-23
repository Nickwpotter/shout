

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.iRzS5irW.js","_app/immutable/chunks/scheduler.Bnq60-53.js","_app/immutable/chunks/index.Ds0bHGC8.js","_app/immutable/chunks/index.Cyf_2U9l.js","_app/immutable/chunks/firebase.xiFXEIL6.js"];
export const stylesheets = [];
export const fonts = [];
