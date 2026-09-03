import {build} from 'esbuild';
await build({entryPoints:['worker/site.js'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js'});
console.log('Prepared production page routing and security headers.');
