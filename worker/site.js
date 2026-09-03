const routes=new Set(['/','/misja/','/dzialania/','/projekty/','/partnerstwo/','/kontakt/','/prywatnosc/','/informacje/']);
export default {
 async fetch(request,env){
  const url=new URL(request.url),normal=url.pathname.endsWith('/')?url.pathname:url.pathname+'/';
  const safe=['GET','HEAD'].includes(request.method);
  let response;
  if(safe&&routes.has(normal)){
   if(url.pathname!==normal)return Response.redirect(url.origin+normal+url.search,308);
   const target=new URL(request.url);target.pathname=normal+'index.html';
   response=await env.ASSETS.fetch(new Request(target,request));
  }else if(safe&&!url.pathname.includes('.')&&!url.pathname.startsWith('/api/')){
   const target=new URL(request.url);target.pathname='/404.html';target.search='';
   const missing=await env.ASSETS.fetch(new Request(target,request));
   response=new Response(request.method==='HEAD'?null:missing.body,{status:404,headers:missing.headers});
  }else{
   // Preserve the existing review-artifact serving behaviour, but never turn a missing file/API into HTML.
   response=await env.ASSETS.fetch(request);
  }
  const headers=new Headers(response.headers);
  headers.set('X-Content-Type-Options','nosniff');
  headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  headers.set('X-Frame-Options','DENY');
  headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');
  headers.set('X-Robots-Tag','noindex, nofollow');
  return new Response(request.method==='HEAD'?null:response.body,{status:response.status,statusText:response.statusText,headers});
 }
};
