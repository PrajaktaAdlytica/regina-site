import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createServer} from 'vite';
import {pages,organisation} from '../src/site/content.js';

const origin=process.env.SITE_ORIGIN?.replace(/\/$/,'')||'';
if(origin&&!/^https:\/\/[^/]+$/.test(origin))throw new Error('SITE_ORIGIN must be a trusted HTTPS origin');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const root=path.resolve('dist/client');
const template=fs.readFileSync(path.join(root,'index.html'),'utf8');
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom'});
try{
 const {default:Site}=await server.ssrLoadModule('/src/site/App.jsx');
 for(const [route,meta] of [...Object.entries(pages),['/404/',{title:'Nie znaleziono strony — Regina Purpurea Fundus',description:'Nie znaleziono strony.'}]]){
  const body=renderToString(React.createElement(Site,{path:route}));
  const canonical=origin?origin+route:'';
  const structured={'@context':'https://schema.org','@type':'NGO',name:organisation.name,...(origin?{url:origin,logo:origin+'/assets/logo.svg'}:{}),email:organisation.email,telephone:organisation.telephone,address:{'@type':'PostalAddress',addressLocality:'Warszawa',addressCountry:'PL'},identifier:[{'@type':'PropertyValue',propertyID:'KRS',value:organisation.krs},{'@type':'PropertyValue',propertyID:'NIP',value:organisation.nip}]};
  const head=`<meta name="robots" content="noindex, nofollow"/><meta property="og:type" content="website"/><meta property="og:locale" content="pl_PL"/><meta property="og:site_name" content="Regina Purpurea Fundus"/><meta property="og:title" content="${escape(meta.title)}"/><meta property="og:description" content="${escape(meta.description)}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(meta.title)}"/><meta name="twitter:description" content="${escape(meta.description)}"/>${origin?`<link rel="canonical" href="${canonical}"/><meta property="og:url" content="${canonical}"/><meta property="og:image" content="${origin}/og.png"/><meta property="og:image:alt" content="Regina Purpurea Fundus — Edukacja, Innowacje, Współpraca"/><meta name="twitter:image" content="${origin}/og.png"/>`:''}<script type="application/ld+json">${JSON.stringify(structured).replaceAll('<','\\u003c')}</script>`;
  const html=template.replace(/<title>.*?<\/title>/,`<title>${escape(meta.title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${escape(meta.description)}"/>`).replace('</head>',head+'</head>').replace('<div id="root"></div>',`<div id="root">${body}</div>`);
  const directory=route==='/'?root:path.join(root,route.slice(1));fs.mkdirSync(directory,{recursive:true});fs.writeFileSync(path.join(directory,'index.html'),html);
  if(route==='/404/')fs.writeFileSync(path.join(root,'404.html'),html);
 }
 const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin?Object.keys(pages).map(route=>`<url><loc>${escape(origin+route)}</loc></url>`).join(''):''}</urlset>`;
 fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
 fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nDisallow: /\n${origin?'Sitemap: '+origin+'/sitemap.xml\n':''}`);
 console.log(`Prerendered ${Object.keys(pages).length} pages and a 404; ${origin?'trusted origin configured':'origin pending deployment'}. Review build is noindex.`);
}finally{await server.close()}
