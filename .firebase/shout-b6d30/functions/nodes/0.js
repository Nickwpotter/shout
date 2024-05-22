

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CDbSgfzY.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.CwXh1Flu.js"];
export const stylesheets = ["_app/immutable/assets/0.CCuIT_zk.css"];
export const fonts = [];
