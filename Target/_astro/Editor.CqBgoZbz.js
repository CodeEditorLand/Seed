const __vite__mapDeps=(e,r=__vite__mapDeps,t=r.f||(r.f=["_astro/Action.D6lWCUxu.js","_astro/web.Bb4_WBG9.js","_astro/Editor.DJ_jKUOu.js","_astro/editor.main.CwGewecy.js","_astro/editor.Cp6PkmXt.css","_astro/Editor.CqhmHK5S.css"]))=>e.map((e=>t[e]));import{t as h,c as r,i as d,S as o,l as v}from"./web.Bb4_WBG9.js";const C="modulepreload",S=function(e){return"/"+e},m={},w=function(e,r,t){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),t=e?.nonce||e?.getAttribute("nonce");s=Promise.all(r.map((e=>{if((e=S(e))in m)return;m[e]=!0;const r=e.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=r?"stylesheet":C,r||(i.as="script",i.crossOrigin=""),i.href=e,t&&i.setAttribute("nonce",t),document.head.appendChild(i),r?new Promise(((r,t)=>{i.addEventListener("load",r),i.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}return s.then((()=>e())).catch((e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e}))};var f=h("<div class=p-5>"),T=h('<div class="flex flex-col"><main class="flex grow justify-center"><div class="flex grow self-center"><div class=container><div class="grid min-h-screen content-start gap-7 py-9"><div class="mb-28 grid w-full grow grid-flow-row gap-12 lg:grid-flow-col lg:grid-cols-2 lg:gap-10"><div class="order-last lg:order-first">');const P=v((()=>w((()=>import("./Action.D6lWCUxu.js")),__vite__mapDeps([0,1])))),g=v((()=>w((()=>import("./Editor.DJ_jKUOu.js")),__vite__mapDeps([2,1,3,4,5]))));var b=()=>r(o,{get children(){var e=T(),t=e.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;return d(t,r(o,{get children(){return r(P,{get children(){return[r(o,{get children(){var e=f();return d(e,r(g,{Type:"HTML"})),e}}),r(o,{get children(){var e=f();return d(e,r(g,{Type:"CSS"})),e}}),r(o,{get children(){var e=f();return d(e,r(g,{Type:"TypeScript"})),e}})]}})}})),e}});export{w as _,b as w};