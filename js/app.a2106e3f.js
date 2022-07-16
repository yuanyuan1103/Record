(function(){"use strict";var e={3882:function(e,n,t){var r=t(9242),o=t(6265),a=t.n(o),i=t(6423),c=t(3396);function u(e,n){const t=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(t)}var f=t(89);const d={},l=(0,f.Z)(d,[["render",u]]);var s=l,p=t(678);const h=()=>Promise.all([t.e(612),t.e(268)]).then(t.bind(t,4268)),m=()=>t.e(159).then(t.bind(t,1159)),b=()=>t.e(493).then(t.bind(t,6493)),v=()=>t.e(301).then(t.bind(t,2301)),g=()=>Promise.all([t.e(612),t.e(907)]).then(t.bind(t,5907)),y=()=>t.e(794).then(t.bind(t,9794)),w=()=>Promise.all([t.e(612),t.e(863),t.e(929)]).then(t.bind(t,3929)),k=()=>Promise.all([t.e(612),t.e(863),t.e(695)]).then(t.bind(t,5695)),O=()=>Promise.all([t.e(612),t.e(863),t.e(437)]).then(t.bind(t,7437)),j=()=>t.e(434).then(t.bind(t,2434)),E=()=>t.e(656).then(t.bind(t,8656)),C=()=>t.e(21).then(t.bind(t,8021)),P=()=>t.e(195).then(t.bind(t,1195)),x=()=>t.e(855).then(t.bind(t,3855)),A=()=>t.e(576).then(t.bind(t,2576)),S=()=>t.e(470).then(t.bind(t,6855)),T=()=>t.e(791).then(t.bind(t,4791)),_=[{path:"/",name:"首頁",component:h,children:[{path:"",name:"首頁",component:m},{path:"about",name:"關於",component:v},{path:"faq",name:"問與答",component:S},{path:"product",name:"產品清單",component:y},{path:"product/:orderId",name:"產品詳細",component:E},{path:"ordertrack",name:"訂單查詢",component:C},{path:"ordertrack/:orderId",name:"訂單狀態",component:T},{path:"favorite",name:"最愛",component:j},{path:"cart",name:"購物車",component:P},{path:"checkinfo",name:"訂單資訊",component:x},{path:"checkout/:orderId",name:"結帳",component:A}]},{path:"/login",name:"登入",component:b},{path:"/dashboard",name:"後台儀表板",component:g,children:[{path:"products",name:"產品列表",component:w},{path:"orders",name:"訂單列表",component:k},{path:"coupons",name:"優惠券",component:O}]}],N=(0,p.p7)({history:(0,p.r5)(),linkActiveClass:"active",routes:_});N.beforeEach(((e,n,t)=>{window.document.title=`${e.name} - Record`,window.scrollTo({top:0,left:0,behavior:"smooth"}),t()}));var F=N,L=t(6216),M=t(3714),I=(t(6744),t(5708)),D=t(3990),H=t(579),Z=t(2389);(0,I.aH)("required",D.C1),(0,I.aH)("email",D.Do),(0,I.aH)("min",D.VV),Object.keys(D.ZP).forEach((e=>{(0,I.aH)(e,D.ZP[e])})),(0,I.jQ)({generateMessage:(0,H.NC)({zh_TW:Z}),validateOnInput:!0}),(0,H.i_)("zh_TW");const q=(0,r.ri)(s);q.config.globalProperties.$filters={date:M.h,currency:M.A},q.component("Form",I.l0),q.component("Field",I.gN),q.component("ErrorMessage",I.Bc),q.use(i.Z,a()),q.use(F),q.component("Loading",L.Z),q.mount("#app")},3714:function(e,n,t){function r(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function o(e){const n=new Date(1e3*e);return n.toLocaleDateString()}t.d(n,{A:function(){return r},h:function(){return o}})}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var f=o();void 0!==f&&(n=f)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{21:"38e27fcd",159:"92e92895",195:"0c274b68",268:"dcbf032f",301:"3c8aa2fb",434:"a01307a1",437:"8af7cf9c",470:"10979ae0",493:"103f8a9c",576:"98f84c7f",612:"aec32f0c",656:"3fc70494",695:"82d3e252",791:"7d6607dd",794:"7f988ebf",855:"96d309f7",863:"c701de10",907:"1e68d26e",929:"adbf803f"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{21:"67c8472b",159:"a2bcfa3a",195:"e63ee359",268:"ae4f297f",301:"1843c628",434:"f2f43c88",470:"5ba99ddb",493:"2388aa0f",576:"ab940e00",656:"8f28ea20",791:"64fe504f",794:"e1e1e77b",855:"efa813c6"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="record:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var s=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Record/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={21:1,159:1,195:1,268:1,301:1,434:1,470:1,493:1,576:1,656:1,791:1,794:1,855:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var d=u(t)}for(n&&n(r);f<i.length;f++)a=i[f],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=self["webpackChunkrecord"]=self["webpackChunkrecord"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3882)}));r=t.O(r)})();
//# sourceMappingURL=app.a2106e3f.js.map