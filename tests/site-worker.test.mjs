import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/site.js';
test('real page routes load their own HTML, not the homepage',async()=>{let found;const response=await worker.fetch(new Request('https://regina.test/misja/'),{ASSETS:{fetch:async r=>{found=new URL(r.url).pathname;return new Response('mission')}}});assert.equal(found,'/misja/index.html');assert.equal(response.status,200);assert.equal(response.headers.get('X-Content-Type-Options'),'nosniff')});
test('normalises directory routes while preserving query strings',async()=>{const r=await worker.fetch(new Request('https://regina.test/kontakt?temat=Edukacja'),{});assert.equal(r.status,308);assert.equal(r.headers.get('location'),'https://regina.test/kontakt/?temat=Edukacja')});
test('unknown pages and missing files retain 404 status',async()=>{for(const pathname of ['/unknown','/missing.png','/api/contact']){const r=await worker.fetch(new Request('https://regina.test'+pathname,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('missing',{status:404})}});assert.equal(r.status,404)}});
