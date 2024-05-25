

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/sign-up/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.zu6cnvnA.js","_app/immutable/chunks/scheduler.PCYk-eKx.js","_app/immutable/chunks/index.BWac97FB.js","_app/immutable/chunks/authStore.Dc8xNwkm.js","_app/immutable/chunks/index.eg0ioKiZ.js","_app/immutable/chunks/firebase.C7CWxqOX.js","_app/immutable/chunks/entry.D5liSSLQ.js","_app/immutable/chunks/paths.PaoNn1MQ.js"];
export const stylesheets = [];
export const fonts = [];
