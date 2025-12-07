import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.6f6d1515.js","_app/immutable/chunks/scheduler.c95dc542.js","_app/immutable/chunks/index.b81af30a.js","_app/immutable/chunks/UIcon.21a6ef93.js","_app/immutable/chunks/index.86cb54d6.js","_app/immutable/chunks/paths.53f138af.js","_app/immutable/chunks/stores.6d360df1.js","_app/immutable/chunks/singletons.37475bd4.js","_app/immutable/chunks/home.50f40a38.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/skills.c3e76453.js"];
export const stylesheets = ["_app/immutable/assets/0.a0723372.css"];
export const fonts = [];
