import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {pages,projects,programmes,goals,organisation} from '../src/site/content.js';
const dir='dist/client';
const htmlFor=route=>fs.readFileSync(dir+(route==='/'?'/':route)+'index.html','utf8');
test('social cards and canonical links use the trusted review origin',()=>{const origin=JSON.parse(fs.readFileSync('site.config.json','utf8')).origin;for(const route of Object.keys(pages)){const html=htmlFor(route);assert.ok(html.includes(`property="og:image" content="${origin}/og.png"`));assert.ok(html.includes(`name="twitter:image" content="${origin}/og.png"`));assert.ok(html.includes(`rel="canonical" href="${origin+route}"`));}});
test('all eight site routes are pre-rendered in Polish with unique SEO titles',()=>{
 const titles=[];for(const [route,meta] of Object.entries(pages)){const html=htmlFor(route);assert.match(html,/<html lang="pl">/);assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.ok(html.includes(meta.title.replaceAll('&','&amp;')));assert.match(html,/<main id="main">/);assert.match(html,/application\/ld\+json/);assert.match(html,/noindex, nofollow/);titles.push(meta.title)}assert.equal(new Set(titles).size,8);
});
test('the supplied programmes and projects are present without invented metrics',()=>{
 assert.equal(programmes.length,6);assert.equal(goals.length,6);assert.equal(projects.length,3);
 const activityHtml=htmlFor('/dzialania/');for(const p of programmes){assert.ok(activityHtml.includes(`id="${p.id}"`));assert.ok(activityHtml.includes(p.text));}
 const projectHtml=htmlFor('/projekty/');for(const p of projects){assert.ok(projectHtml.includes(p.url));assert.ok(projectHtml.includes(p.title));}
 assert.ok(htmlFor('/kontakt/').includes(organisation.krs));
});
test('local page and asset links resolve in the build',()=>{
 const missing=[];for(const route of Object.keys(pages)){const html=htmlFor(route);for(const [,url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^" ]*"/g)){const clean=url.split(/[?#]/)[0];const target=dir+clean;if(!fs.existsSync(target))missing.push([route,url]);}}
 assert.deepEqual(missing,[]);
});
test('contact UI honestly prepares a draft; no mock sent confirmation',()=>{
 const html=htmlFor('/kontakt/');assert.match(html,/Przygotuj wiadomość/);assert.match(html,/Nic nie zostanie wysłane automatycznie/);assert.doesNotMatch(html,/Wiadomość została wysłana/);for(const name of ['name','email','subject','message'])assert.ok(html.includes(`name="${name}"`));
});
test('hero supports reduced-motion/mobile fallbacks and agreed direction',()=>{
 const js=fs.readFileSync('src/site/HeroJourney.jsx','utf8');assert.match(js,/prefers-reduced-motion: no-preference/);assert.match(js,/Zatrzymaj ruch/);assert.match(js,/\/site\/\$\{current.image\}\.webp/);const css=fs.readFileSync('src/site/styles.css','utf8');assert.match(css,/button-wipe/);assert.match(css,/\.desktop-nav a.*svg/);assert.match(css,/prefers-reduced-motion/);
});
