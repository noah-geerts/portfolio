

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4ebe8786.js","_app/immutable/chunks/scheduler.c95dc542.js","_app/immutable/chunks/index.b81af30a.js","_app/immutable/chunks/stores.6d360df1.js","_app/immutable/chunks/singletons.37475bd4.js","_app/immutable/chunks/index.86cb54d6.js","_app/immutable/chunks/paths.53f138af.js"];
export const stylesheets = [];
export const fonts = [];
