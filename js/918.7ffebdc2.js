(self["webpackChunkrecord"]=self["webpackChunkrecord"]||[]).push([[918],{8803:function(t,e,s){s(6699),s(1703),
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,a){t.exports=a(s(4130),s(6221),s(1884))}(0,(function(t,e,s){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=a(t),i=a(e),o=a(s),l=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),c=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return e},r=t=>{const e=c(t);return e?document.querySelector(e):null},d=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),u=(t,e,s)=>{Object.keys(s).forEach((a=>{const n=s[a],i=e[a],o=i&&d(i)?"element":l(i);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${a}" provided type "${o}" but expected type "${n}".`)}))},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),f=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],b=t=>{"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{m.forEach((t=>t()))})),m.push(t)):t()},p=t=>{b((()=>{const e=v();if(e){const s=t.NAME,a=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=a,t.jQueryInterface)}}))},_=(t,e="hide")=>{const s=`click.dismiss${t.EVENT_KEY}`,a=t.NAME;n.default.on(document,s,`[data-bs-dismiss="${a}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),h(this))return;const n=r(this)||this.closest(`.${a}`),i=t.getOrCreateInstance(n);i[e]()}))},g="toast",w="bs.toast",k=`.${w}`,y=`mouseover${k}`,x=`mouseout${k}`,M=`focusin${k}`,C=`focusout${k}`,T=`hide${k}`,$=`hidden${k}`,W=`show${k}`,L=`shown${k}`,S="fade",F="hide",E="show",U="showing",D={animation:"boolean",autohide:"boolean",delay:"number"},I={animation:!0,autohide:!0,delay:5e3};class N extends o.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return D}static get Default(){return I}static get NAME(){return g}show(){const t=n.default.trigger(this._element,W);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(S);const e=()=>{this._element.classList.remove(U),n.default.trigger(this._element,L),this._maybeScheduleHide()};this._element.classList.remove(F),f(this._element),this._element.classList.add(E),this._element.classList.add(U),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(E))return;const t=n.default.trigger(this._element,T);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(F),this._element.classList.remove(U),this._element.classList.remove(E),n.default.trigger(this._element,$)};this._element.classList.add(U),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(E)&&this._element.classList.remove(E),super.dispose()}_getConfig(t){return t={...I,...i.default.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},u(g,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){n.default.on(this._element,y,(t=>this._onInteraction(t,!0))),n.default.on(this._element,x,(t=>this._onInteraction(t,!1))),n.default.on(this._element,M,(t=>this._onInteraction(t,!0))),n.default.on(this._element,C,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=N.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return _(N),p(N),N}))},8557:function(t,e,s){"use strict";function a(t){return{all:t=t||new Map,on:function(e,s){var a=t.get(e);a?a.push(s):t.set(e,[s])},off:function(e,s){var a=t.get(e);a&&(s?a.splice(a.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var a=t.get(e);a&&a.slice().map((function(t){t(s)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return i}});const n=a();var i=n},7587:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var a=s(8557);function n(t,e="更新"){if(t.data.success)a.Z.emit("push-message",{style:"success",title:`${e}成功`});else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message;a.Z.emit("push-message",{style:"danger",title:`${e}失敗`,content:s.join("、")})}}},1325:function(t,e){"use strict";e["Z"]={saveFavorite(t){const e=JSON.stringify(t);localStorage.setItem("favoriteProduct",e)},getFavorite(){return JSON.parse(localStorage.getItem("favoriteProduct"))}}},9667:function(t,e,s){"use strict";s.d(e,{Z:function(){return k}});var a=s(3396);const n={class:"toast-container position-fixed bottom-0 end-0 p-3",style:{"z-index":"1050"}};function i(t,e,s,i,o,l){const c=(0,a.up)("Toast");return(0,a.wg)(),(0,a.iD)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.messages,((t,e)=>((0,a.wg)(),(0,a.j4)(c,{key:e,message:t},null,8,["message"])))),128))])}var o=s(7139);const l={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header bg-dark text-white"},r={class:"me-auto"},d=(0,a._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),u={key:0,class:"toast-body"};function h(t,e,s,n,i,h){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",c,[(0,a._)("span",{class:(0,o.C_)([`bg-${s.message.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",r,(0,o.zw)(s.message.title),1),d]),s.message.content?((0,a.wg)(),(0,a.iD)("div",u,(0,o.zw)(s.message.content),1)):(0,a.kq)("",!0)],512)}var f=s(8803),v=s.n(f),m={name:"Toast",props:["message"],mounted(){const t=this.$refs.toast,e=new(v())(t,{delay:1e3});e.show()}},b=s(89);const p=(0,b.Z)(m,[["render",h]]);var _=p,g={components:{Toast:_},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const w=(0,b.Z)(g,[["render",i]]);var k=w},399:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Qt}});var a=s(3396);const n={key:0,class:"position-fixed end-0 bottom-0 scroll-top-btn pe-4 pb-4"},i=(0,a._)("i",{class:"bi bi-caret-up-fill"},null,-1),o=[i];function l(t,e,s,i,l,c){const r=(0,a.up)("Loading"),d=(0,a.up)("FrontNavbar"),u=(0,a.up)("ToastMessages"),h=(0,a.up)("router-view"),f=(0,a.up)("FrontFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{active:l.isLoading},null,8,["active"]),(0,a.Wm)(d),(0,a.Wm)(u),(0,a.Wm)(h),(0,a.Wm)(f),l.isShowed?((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("button",{type:"button",class:"btn btn-secondary rounded-circle shadow btn-lg",onClick:e[0]||(e[0]=(...t)=>c.scrollToTop&&c.scrollToTop(...t))},o)])):(0,a.kq)("",!0)],64)}var c=s(8557),r=s(7139),d=s(9242);const u=t=>((0,a.dD)("data-v-7b07e8d2"),t=t(),(0,a.Cn)(),t),h={class:"container"},f=(0,a.Uk)("Record"),v={class:"mainMeun"},m=u((()=>(0,a._)("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1))),b={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav navbar-nav-scroll"},_={class:"nav-item"},g=(0,a.Uk)("關於我們"),w={class:"nav-item"},k=(0,a.Uk)("唱片專區"),y={class:"nav-item"},x=(0,a.Uk)("常見問答"),M={class:"nav-item"},C=(0,a.Uk)("訂單查詢"),T={class:"otherMeun"},$=u((()=>(0,a._)("i",{class:"bi bi-heart"},null,-1))),W={key:0,class:"position-absolute badge rounded-pill bg-danger textS"},L=u((()=>(0,a._)("span",{class:"visually-hidden"},"unread messages",-1))),S=u((()=>(0,a._)("i",{class:"bi bi-cart3"},null,-1))),F={key:0,class:"position-absolute badge rounded-pill bg-danger textS"},E=u((()=>(0,a._)("span",{class:"visually-hidden"},"unread messages",-1))),U={class:"container-fluid"},D=u((()=>(0,a._)("span",{class:"navbar-toggler-icon"},null,-1))),I=[D],N={class:"offcanvas-header"},O=u((()=>(0,a._)("i",{class:"bi bi-x-lg"},null,-1))),j=[O],Z={class:"offcanvas-body"},A={class:"list-unstyled"},q={class:"nav-item"},z=(0,a.Uk)("Record"),H={class:"nav-item"},R=(0,a.Uk)("關於我們"),Y={class:"nav-item"},K=(0,a.Uk)("唱片專區"),P={class:"nav-item"},Q=(0,a.Uk)("常見問答"),J={class:"nav-item"},G=(0,a.Uk)("訂單查詢"),V={class:"otherMeun"},B=u((()=>(0,a._)("i",{class:"bi bi-heart"},null,-1))),X={key:0,class:"position-absolute badge rounded-pill bg-danger textS"},tt=u((()=>(0,a._)("span",{class:"visually-hidden"},"unread messages",-1))),et=u((()=>(0,a._)("i",{class:"bi bi-cart3"},null,-1))),st={key:0,class:"position-absolute badge rounded-pill bg-danger textS"},at=u((()=>(0,a._)("span",{class:"visually-hidden"},"unread messages",-1)));function nt(t,e,s,n,i,o){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",{class:(0,r.C_)(["desktop header navbar navbar-expand-lg navbar-dark fixed-top",{colorNav:i.act}])},[(0,a._)("div",h,[(0,a.Wm)(l,{to:"/",class:"navbar-brand iconFont fs-3"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a._)("div",v,[m,(0,a._)("div",b,[(0,a._)("ul",p,[(0,a._)("li",_,[(0,a.Wm)(l,{to:"/about",class:"nav-link navbarFont"},{default:(0,a.w5)((()=>[g])),_:1})]),(0,a._)("li",w,[(0,a.Wm)(l,{to:"/product",class:"nav-link navbarFont"},{default:(0,a.w5)((()=>[k])),_:1})]),(0,a._)("li",y,[(0,a.Wm)(l,{to:"/faq",class:"nav-link navbarFont"},{default:(0,a.w5)((()=>[x])),_:1})]),(0,a._)("li",M,[(0,a.Wm)(l,{to:"/ordertrack",class:"nav-link navbarFont"},{default:(0,a.w5)((()=>[C])),_:1})])])])]),(0,a._)("div",T,[(0,a.Wm)(l,{to:"/favorite",class:"nav-link"},{default:(0,a.w5)((()=>[$,i.favorite.length?((0,a.wg)(),(0,a.iD)("span",W,[(0,a.Uk)((0,r.zw)(i.favorite.length),1),L])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(l,{to:"/cart",class:"position-relative nav-link"},{default:(0,a.w5)((()=>[S,i.cart?((0,a.wg)(),(0,a.iD)("span",F,[(0,a.Uk)((0,r.zw)(i.cart),1),E])):(0,a.kq)("",!0)])),_:1})])])],2),(0,a._)("nav",{class:(0,r.C_)(["mobile header navbar navbar-expand-lg navbar-dark fixed-top",{colorNav:i.act}])},[(0,a._)("div",U,[(0,a._)("button",{type:"button",class:"navbar-toggler",onClick:e[0]||(e[0]=t=>o.showOffcanvasMenu())},I),(0,a._)("div",{class:(0,r.C_)(["offcanvas offcanvas-start main-panel open",i.showMenu?"show":""]),tabindex:"-1",style:(0,r.j5)({visibility:i.showMenu?"visible":"hidden"})},[(0,a._)("div",N,[(0,a._)("button",{type:"button",class:"btn-close text-reset h2",onClick:e[1]||(e[1]=t=>o.showOffcanvasMenu())},j)]),(0,a._)("div",Z,[(0,a._)("ul",A,[(0,a._)("li",q,[(0,a.Wm)(l,{to:"/",class:"nav-link",onClick:e[2]||(e[2]=(0,d.iM)((t=>o.showOffcanvasMenu()),["prevent"]))},{default:(0,a.w5)((()=>[z])),_:1})]),(0,a._)("li",H,[(0,a.Wm)(l,{to:"/about",class:"nav-link",onClick:e[3]||(e[3]=(0,d.iM)((t=>o.showOffcanvasMenu()),["prevent"]))},{default:(0,a.w5)((()=>[R])),_:1})]),(0,a._)("li",Y,[(0,a.Wm)(l,{to:"/product",class:"nav-link",onClick:e[4]||(e[4]=(0,d.iM)((t=>o.showOffcanvasMenu()),["prevent"]))},{default:(0,a.w5)((()=>[K])),_:1})]),(0,a._)("li",P,[(0,a.Wm)(l,{to:"/faq",class:"nav-link",onClick:e[5]||(e[5]=(0,d.iM)((t=>o.showOffcanvasMenu()),["prevent"]))},{default:(0,a.w5)((()=>[Q])),_:1})]),(0,a._)("li",J,[(0,a.Wm)(l,{to:"/ordertrack",class:"nav-link",onClick:e[6]||(e[6]=(0,d.iM)((t=>o.showOffcanvasMenu()),["prevent"]))},{default:(0,a.w5)((()=>[G])),_:1})])])])],6),(0,a._)("div",V,[(0,a.Wm)(l,{to:"/favorite",class:"nav-link"},{default:(0,a.w5)((()=>[B,i.favorite.length?((0,a.wg)(),(0,a.iD)("span",X,[(0,a.Uk)((0,r.zw)(i.favorite.length?i.favorite.length:""),1),tt])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(l,{to:"/cart",class:"position-relative nav-link"},{default:(0,a.w5)((()=>[et,i.cart?((0,a.wg)(),(0,a.iD)("span",st,[(0,a.Uk)((0,r.zw)(i.cart?i.cart:""),1),at])):(0,a.kq)("",!0)])),_:1})])])],2)],64)}var it=s(1325),ot={data(){return{act:!1,showMenu:!1,favorite:it.Z.getFavorite()||[],cart:{}}},created(){window.addEventListener("scroll",this.handleScroll),this.getCart()},inject:["emitter"],methods:{handleScroll(){this.act=window.scrollY>80},showOffcanvasMenu(){this.showMenu?this.showMenu=!1:this.showMenu=!0},updateFavorite(){this.favorite=it.Z.getFavorite()},getCart(){const t="https://vue3-course-api.hexschool.io/api/yuanyuan1103/cart";this.$http.get(t).then((t=>{this.cart=t.data.data.carts.length}))}},mounted(){this.emitter.on("update-favorite",this.updateFavorite),this.emitter.on("update-cart",this.getCart)}},lt=s(89);const ct=(0,lt.Z)(ot,[["render",nt],["__scopeId","data-v-7b07e8d2"]]);var rt=ct,dt=s(9667),ut=s(7587),ht=s.p+"img/vinyl_icon.1ffe98f5.png";const ft=t=>((0,a.dD)("data-v-8649b450"),t=t(),(0,a.Cn)(),t),vt={class:"footer py-3"},mt={class:"container row center",style:{gap:"1rem"}},bt=ft((()=>(0,a._)("div",{class:"footerIcon col-lg-4 col-sm-8 mb-2 lh-sm"},[(0,a._)("img",{src:ht,alt:"Record"}),(0,a._)("div",{class:"text-center space"},[(0,a._)("h1",{class:"fw-bolder"},"Record"),(0,a._)("p",null,"紀錄回憶的聲音")])],-1))),pt={class:"footerAbout col-lg-4 col-sm-8 lh-sm p-3"},_t=(0,a.uE)('<h2 class="fs-2 mb-2 text-muted fw-bolder" data-v-8649b450>聯絡方式</h2><p class="pt-2 space" data-v-8649b450><i class="bi bi-geo-alt-fill pe-1" data-v-8649b450></i>地球上某個角落</p><div class="d-flex" data-v-8649b450><i class="bi bi-clock-fill pe-1" data-v-8649b450></i><p class="space" data-v-8649b450>週一至週五 13:30 - 21:50<br data-v-8649b450>週六 10:00 - 21:50<br data-v-8649b450>週日 10:00 - 18:00</p></div>',3),gt={class:"space"},wt=ft((()=>(0,a._)("i",{class:"bi bi-envelope-fill pe-1"},null,-1))),kt=["href"],yt={class:"space"},xt=ft((()=>(0,a._)("i",{class:"bi bi-telephone-fill pe-1"},null,-1))),Mt=["href"],Ct={class:"contact col-lg-3 col-sm-8 lh-sm p-3"},Tt=ft((()=>(0,a._)("h2",{class:"fs-2 mb-2 text-muted fw-bolder"},"關於本站",-1))),$t={class:"d-flex flex-column space"},Wt=ft((()=>(0,a._)("i",{class:"bi bi-caret-right-fill"},null,-1))),Lt=(0,a.Uk)("關於我們"),St=ft((()=>(0,a._)("i",{class:"bi bi-caret-right-fill"},null,-1))),Ft=(0,a.Uk)("唱片專區"),Et=ft((()=>(0,a._)("i",{class:"bi bi-caret-right-fill"},null,-1))),Ut=(0,a.Uk)("常見問答"),Dt=ft((()=>(0,a._)("i",{class:"bi bi-caret-right-fill"},null,-1))),It=(0,a.Uk)("訂單查詢"),Nt=ft((()=>(0,a._)("a",{target:"_blank",class:"px-0 nav-link iconFont",href:"https://github.com/yuanyuan1103/Record"},[(0,a._)("i",{class:"bi bi-caret-right-fill"}),(0,a.Uk)("Github")],-1))),Ot={class:"space text-center"},jt=(0,a.Uk)("僅個人練習使用．不做商業用途 | "),Zt=(0,a.Uk)("管理員登入"),At=ft((()=>(0,a._)("p",null,"© 2022. YuanYuan All Rights Reserved.",-1)));function qt(t,e,s,n,i,o){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",vt,[(0,a._)("div",mt,[bt,(0,a._)("div",pt,[_t,(0,a._)("p",gt,[wt,(0,a._)("a",{class:"linked",href:`mailto:${i.email}`},(0,r.zw)(i.email),9,kt)]),(0,a._)("p",yt,[xt,(0,a._)("a",{class:"linked",href:`tel:${i.tel}`},(0,r.zw)(i.tel),9,Mt)])]),(0,a._)("div",Ct,[Tt,(0,a._)("div",$t,[(0,a.Wm)(l,{to:"/about",class:"px-0 nav-link iconFont"},{default:(0,a.w5)((()=>[Wt,Lt])),_:1}),(0,a.Wm)(l,{to:"/product",class:"px-0 nav-link iconFont"},{default:(0,a.w5)((()=>[St,Ft])),_:1}),(0,a.Wm)(l,{to:"/faq",class:"px-0 nav-link iconFont"},{default:(0,a.w5)((()=>[Et,Ut])),_:1}),(0,a.Wm)(l,{to:"/ordertrack",class:"px-0 nav-link iconFont"},{default:(0,a.w5)((()=>[Dt,It])),_:1}),Nt])]),(0,a._)("div",Ot,[(0,a._)("p",null,[jt,(0,a.Wm)(l,{to:"/login",class:"iconFont"},{default:(0,a.w5)((()=>[Zt])),_:1})]),At])])])}var zt={data(){return{email:"pijhs70401@gmail.com",tel:"(09)-8765-4321"}}};const Ht=(0,lt.Z)(zt,[["render",qt],["__scopeId","data-v-8649b450"]]);var Rt=Ht,Yt=s(3714),Kt={data(){return{isShowed:!1,isLoading:!1}},components:{ToastMessages:dt.Z,FrontNavbar:rt,FrontFooter:Rt},provide(){return{currency:Yt.A,emitter:c.Z,$httpMessageState:ut.Z}},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const t=document.documentElement,e=t.scrollHeight-t.clientHeight;t.scrollTop/e>.1?this.isShowed=!0:this.isShowed=!1}},mounted(){document.addEventListener("scroll",this.handleScroll)},unmounted(){document.removeEventListener("scroll",this.handleScroll)}};const Pt=(0,lt.Z)(Kt,[["render",l]]);var Qt=Pt}}]);
//# sourceMappingURL=918.7ffebdc2.js.map