import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_593ecd08.mjs';
import './chunks/astro_8c4f9a15.mjs';
import './chunks/pages/generic_439003de.mjs';
import './chunks/astro-assets-services_050c3bcc.mjs';

const _page0  = () => import('./chunks/generic_e9106346.mjs');
const _page1  = () => import('./chunks/index_e680ff7f.mjs');
const _page2  = () => import('./chunks/rss_c296b378.mjs');
const _page3  = () => import('./chunks/about_1913933f.mjs');
const _page4  = () => import('./chunks/index_c611fc11.mjs');
const _page5  = () => import('./chunks/_.._62853773.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.4.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/about.astro", _page3],["src/pages/blog/index.astro", _page4],["src/pages/blog/[...slug].astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
