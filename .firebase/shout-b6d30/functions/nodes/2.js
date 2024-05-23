

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CDq4Pot7.js","_app/immutable/chunks/scheduler.Bnq60-53.js","_app/immutable/chunks/index.Ds0bHGC8.js"];
export const stylesheets = [];
export const fonts = [];
