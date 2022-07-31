(function(){"use strict";var e={3882:function(e,n,t){var r=t(9242),o=t(6265),a=t.n(o),i=t(6423),c=t(3396);function u(e,n){const t=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(t)}var d=t(89);const f={},l=(0,d.Z)(f,[["render",u]]);var s=l,p=t(678);const h=[{path:"/",name:"首頁",component:()=>Promise.all([t.e(612),t.e(537)]).then(t.bind(t,9728)),children:[{path:"",name:"首頁",component:()=>t.e(872).then(t.bind(t,2872))},{path:"about",name:"關於",component:()=>t.e(593).then(t.bind(t,3593))},{path:"faq",name:"問與答",component:()=>t.e(34).then(t.bind(t,3034))},{path:"product",name:"產品清單",component:()=>t.e(406).then(t.bind(t,406))},{path:"product/:orderId",name:"產品詳細",component:()=>t.e(390).then(t.bind(t,7390))},{path:"ordertrack",name:"訂單查詢",component:()=>t.e(207).then(t.bind(t,8207))},{path:"ordertrack/:orderId",name:"訂單狀態",component:()=>t.e(400).then(t.bind(t,4675))},{path:"favorite",name:"最愛",component:()=>t.e(927).then(t.bind(t,2927))},{path:"cart",name:"購物車",component:()=>t.e(575).then(t.bind(t,6575))},{path:"checkinfo",name:"訂單資訊",component:()=>t.e(412).then(t.bind(t,5412))},{path:"checkout/:orderId",name:"結帳",component:()=>t.e(5).then(t.bind(t,6005))}]},{path:"/login",name:"登入",component:()=>t.e(539).then(t.bind(t,5539))},{path:"/dashboard",name:"後台儀表板",component:()=>Promise.all([t.e(612),t.e(871)]).then(t.bind(t,1871)),children:[{path:"products",name:"產品列表",component:()=>Promise.all([t.e(612),t.e(546),t.e(56)]).then(t.bind(t,5056))},{path:"orders",name:"訂單列表",component:()=>Promise.all([t.e(612),t.e(546),t.e(807)]).then(t.bind(t,5807))},{path:"coupons",name:"優惠券",component:()=>Promise.all([t.e(612),t.e(546),t.e(754)]).then(t.bind(t,754))}]},{path:"/:pathMatch(.*)*",redirect:"/"}],m=(0,p.p7)({history:(0,p.r5)(),linkActiveClass:"active",routes:h});m.beforeEach(((e,n,t)=>{window.document.title=`${e.name} - Record`,window.scrollTo({top:0,left:0,behavior:"smooth"}),t()}));var b=m,v=t(6216),g=t(3714),y=(t(6744),t(5708)),w=t(3990),k=t(579),O=t(2389);(0,y.aH)("required",w.C1),(0,y.aH)("email",w.Do),(0,y.aH)("min",w.VV),Object.keys(w.ZP).forEach((e=>{(0,y.aH)(e,w.ZP[e])})),(0,y.jQ)({generateMessage:(0,k.NC)({zh_TW:O}),validateOnInput:!0}),(0,k.i_)("zh_TW");const j=(0,r.ri)(s);j.config.globalProperties.$filters={date:g.h,currency:g.A},j.component("Form",y.l0),j.component("Field",y.gN),j.component("ErrorMessage",y.Bc),j.use(i.Z,a()),j.use(b),j.component("Loading",v.Z),j.mount("#app")},3714:function(e,n,t){function r(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function o(e){const n=new Date(1e3*e);return n.toLocaleDateString()}t.d(n,{A:function(){return r},h:function(){return o}})}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var d=o();void 0!==d&&(n=d)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{5:"1498556d",34:"4a1d640c",56:"4ec88084",207:"e4690ede",390:"791bf3c2",400:"fb9f8064",406:"754ade64",412:"4e1379c0",537:"11254d63",539:"058fc6ad",546:"e99a1ffa",575:"c82f2718",593:"98fa7dde",612:"aec32f0c",754:"4abfe326",807:"4a0a6fd4",871:"e83a6d12",872:"343b4fb3",927:"d0cf3805"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{5:"abce4e56",34:"884ed606",207:"da178613",390:"7a9afbf1",400:"005776b0",406:"063f8ee1",412:"3d38d043",537:"517bd298",539:"cb0a9c86",575:"e8c339a5",593:"aa8855cd",872:"92c83d59",927:"00331dff"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="record:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var l=d[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var s=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Record/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={5:1,34:1,207:1,390:1,400:1,406:1,412:1,537:1,539:1,575:1,593:1,872:1,927:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var f=u(t)}for(n&&n(r);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},r=self["webpackChunkrecord"]=self["webpackChunkrecord"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3882)}));r=t.O(r)})();
//# sourceMappingURL=app.2044ad5b.js.map