

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CdKmpyHR.js","_app/immutable/chunks/scheduler.PCYk-eKx.js","_app/immutable/chunks/index.BWac97FB.js"];
export const stylesheets = ["_app/immutable/assets/app.BDEpXAo4.css"];
export const fonts = [];
