"use strict";(self["webpackChunkrecord"]=self["webpackChunkrecord"]||[]).push([[656],{1325:function(t,e){e["Z"]={saveFavorite(t){const e=JSON.stringify(t);localStorage.setItem("favoriteProduct",e)},getFavorite(){return JSON.parse(localStorage.getItem("favoriteProduct"))}}},8656:function(t,e,a){a.r(e),a.d(e,{default:function(){return et}});a(6699);var i=a(3396),s=a(7139),r=a(9242);const o=t=>((0,i.dD)("data-v-2f9a0fae"),t=t(),(0,i.Cn)(),t),c={class:"position-relative"},l={style:{overflow:"hidden"}},d={class:"position-absolute text-hv-center h2 fw-bold pageBanner-text"},n={key:0,class:"container"},u={"aria-label":"breadcrumb"},p={class:"breadcrumb p-3"},g={class:"breadcrumb-item"},h=(0,i.Uk)("Recorods"),v={class:"breadcrumb-item"},b={class:"breadcrumb-item active","aria-current":"page"},_={class:"row"},m={class:"col-12 col-md-6 d-flex align-items-center p-3"},f=["src","title"],y={class:"col-12 col-md-6 p-3 d-flex flex-column justify-content-center textspac"},w={class:"proTitle border-bottom mb-3"},k={class:"fw-bolder"},x={classs:"d-flex align-items-center"},$={class:"bg-secondary text-light rounded px-2"},z={key:0,class:"text-danger fs-5 fw-bolder pt-3"},C={class:"text-danger fs-5 fw-bolder pt-3"},q={key:1,class:"text-decoration-line-through text-muted pt-3"},D={class:"pt-3 textspace"},L={class:"input-group pt-3"},M=["value"],P=["disabled"],S=o((()=>(0,i._)("h2",{class:"pt-5 border-bottom"},"曲目",-1))),I={class:"pt-3 textspace text-muted textspac"},F=o((()=>(0,i._)("nav",null,[(0,i._)("div",{class:"pt-4 nav nav-tabs",id:"nav-tab",role:"tablist"},[(0,i._)("button",{class:"nav-link active",id:"nav-first-tab","data-bs-toggle":"tab","data-bs-target":"#nav-first",type:"button",role:"tab","aria-controls":"nav-first","aria-selected":"true"}," 購買須知 "),(0,i._)("button",{class:"nav-link",id:"nav-second-tab","data-bs-toggle":"tab","data-bs-target":"#nav-second",type:"button",role:"tab","aria-controls":"nav-second","aria-selected":"false"}," 退換貨須知 ")])],-1))),U=o((()=>(0,i._)("div",{class:"tab-content",id:"nav-tabContent"},[(0,i._)("div",{class:"textspac pt-4 tab-pane fade show active",id:"nav-first",role:"tabpanel","aria-labelledby":"nav-first-tab"},[(0,i._)("ul",null,[(0,i._)("li",null,"現貨商品將於1-2天內為您寄出。(例假日除外)"),(0,i._)("li",null,"如調貨時程須 超過十日 以上，或是 商品缺貨 等其他問題，我們會以E-mail告知，請務必留意任何來信。"),(0,i._)("li",null,"訂單內若有預購商品，須待預購商品到貨後一併寄出，如欲分開寄送，請個別下單。")])]),(0,i._)("div",{class:"textspac pt-4 tab-pane fade",id:"nav-second",role:"tabpanel","aria-labelledby":"nav-second-tab"},[(0,i._)("ul",null,[(0,i._)("li",null," 黑膠唱片較容易因外在因素產生變化，「製作過程」或「拿取過程」也易有刮傷、不平等問題產生。由於本站售出的商品並皆是全新且未拆封的，故無法得知商品內部是否有瑕疵的狀況。 "),(0,i._)("li",null," 黑膠出廠時，每間壓片廠沒辦法保證有百分之百的平整，若不平狀況晃動很大造成跳針或撥放聲音明顯不對，可以協助您換貨，但若不影響唱片撥放及聲音，是屬正常的。 "),(0,i._)("li",null," 為避免黑膠瑕疵產生退換貨問題，本站可在出貨前先為您拆封檢查是否有嚴重「刮傷」、「不平」等狀況導致「無法播放」，請至「客服中心」留言告知訂單編號，以便我們為您安排。 "),(0,i._)("li",null,"由於本站已有免運優惠，瑕疵商品如欲換貨，需自行負擔往返的運送費用。")])])],-1))),Z=o((()=>(0,i._)("h2",{class:"pt-5 border-bottom"},"為您推薦",-1))),H={class:"row"},R={class:"product"},j={key:0,class:"bgr position-absolute top-0 end-0"},O=["onClick"],T=o((()=>(0,i._)("i",{class:"bi bi-search"},null,-1))),Y=[T],E=["src","title"],J={class:"proDetil p-2"},K={class:"fw-bolder"},N={class:"textover"},W={key:0,class:"fs-5"},A={key:1,class:"text-danger fs-5"};function B(t,e,a,o,T,B){const V=(0,i.up)("Loading"),G=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(V,{active:T.isLoading},null,8,["active"]),(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",{class:"collectbanner",style:(0,s.j5)([T.product.imageUrl?{backgroundImage:"url("+T.product.imageUrl+")"}:{}])},null,4)]),(0,i._)("h2",d,(0,s.zw)(T.product.title),1)]),T.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("nav",u,[(0,i._)("ol",p,[(0,i._)("li",g,[(0,i.Wm)(G,{to:"/product"},{default:(0,i.w5)((()=>[h])),_:1})]),(0,i._)("li",v,[(0,i._)("a",{href:"#",onClick:e[0]||(e[0]=(0,r.iM)((t=>B.updateCategory(T.product.category)),["prevent"]))},(0,s.zw)(T.product.category),1)]),(0,i._)("li",b,(0,s.zw)(T.product.title),1)])]),(0,i._)("div",_,[(0,i._)("div",m,[(0,i._)("img",{src:T.product.imageUrl,class:"card-img-top imgProduct",title:T.product.title},null,8,f)]),(0,i._)("div",y,[(0,i._)("div",w,[(0,i._)("h1",k,(0,s.zw)(T.product.title),1),(0,i._)("button",{type:"button",onClick:e[1]||(e[1]=(0,r.iM)((t=>B.toggleFavorite(T.product)),["stop"])),class:"btn btn-favorite colorHeart"},[(0,i._)("i",{class:(0,s.C_)(["bi",T.favorite.includes(T.product.id)?"bi-heart-fill":"bi-heart"])},null,2)])]),(0,i._)("div",x,[(0,i._)("span",$,(0,s.zw)(T.product.category),1),T.product.price?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h2",z,"$"+(0,s.zw)(B.currency(T.product.price)),1)),(0,i._)("h2",C,"$"+(0,s.zw)(B.currency(T.product.price)),1),T.product.price!=T.product.origin_price?((0,i.wg)(),(0,i.iD)("span",q,"$"+(0,s.zw)(B.currency(T.product.origin_price)),1)):(0,i.kq)("",!0),(0,i._)("p",D,(0,s.zw)(T.product.description),1),(0,i._)("div",L,[(0,i.wy)((0,i._)("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=t=>T.qty=t)},[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(10,(t=>(0,i._)("option",{value:t,key:t},(0,s.zw)(t),9,M))),64))],512),[[r.bM,T.qty]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[3]||(e[3]=t=>B.addToCart(T.product.id,T.qty)),disabled:this.status.loadingItem===T.product.id}," 加入購物車 ",8,P)])])])]),S,(0,i._)("p",I,(0,s.zw)(T.product.content),1),F,U,Z,(0,i._)("div",H,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(T.productRandom,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"col-12 col-sm-6 col-lg-3 p-3",key:t.id},[(0,i._)("div",R,[t.price!=t.origin_price?((0,i.wg)(),(0,i.iD)("div",j,"sale")):(0,i.kq)("",!0),(0,i._)("a",{href:"#",onClick:(0,r.iM)((e=>B.gotoProduct(t.id)),["prevent"])},Y,8,O),(0,i._)("img",{src:t.imageUrl,class:"card-img-top imgProduct",title:t.title},null,8,E)]),(0,i._)("div",J,[(0,i._)("div",K,[(0,i._)("p",N,(0,s.zw)(t.title),1),t.price==t.origin_price?((0,i.wg)(),(0,i.iD)("span",W,"$"+(0,s.zw)(B.currency(t.origin_price)),1)):(0,i.kq)("",!0),t.price!=t.origin_price?((0,i.wg)(),(0,i.iD)("span",A,"$"+(0,s.zw)(B.currency(t.price)),1)):(0,i.kq)("",!0)])])])))),128))])]))],64)}a(1703);var V=a(3714),G=a(1325),Q={data(){return{product:{},id:"",favorite:G.Z.getFavorite()||[],isLoading:!1,productRandom:[],qty:1,status:{loadingItem:""}}},inject:["$httpMessageState","emitter"],watch:{"$route.params":{immediate:!0,handler(t){const{orderId:e}=t;this.id=e,this.getProduct(),this.rendomProducts()}}},methods:{currency:V.A,rendomProducts(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/api/yuanyuan1103/products/all").then((t=>{if(!t.data.success)throw new Error(t.data.message);this.productRandom=t.data.products.filter((t=>t.id!==this.id)).sort((()=>Math.random()-.5)).splice(1,4),this.isLoading=!1})).catch((t=>{console.log(t?.message)}))},getProduct(){const t=`https://vue3-course-api.hexschool.io/api/yuanyuan1103/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.product=t.data.product)}))},addToCart(t,e){const a="https://vue3-course-api.hexschool.io/api/yuanyuan1103/cart",i={product_id:t,qty:e};this.status.loadingItem=t,this.$http.post(a,{data:i}).then((e=>{e.data.success?(this.status.loadingItem="",this.qty=1,this.$httpMessageState(e,"加入購物車"),this.emitter.emit("update-cart",t)):this.$httpMessageState(e,"加入購物車")})).catch((t=>{this.$httpMessageState(t,"連線錯誤")}))},toggleFavorite(t){this.isLoading=!0,this.favorite.includes(t.id)?(this.favorite.splice(this.favorite.indexOf(t.id),1),this.$httpMessageState({data:{success:!0}},"移除收藏"),this.isLoading=!1):(this.favorite.push(t.id),this.$httpMessageState({data:{success:!0}},"加入收藏"),this.isLoading=!1),G.Z.saveFavorite(this.favorite),this.emitter.emit("update-favorite",this.favorite)},updateFavorite(){this.favorite=G.Z.getFavorite()},gotoProduct(t){this.$router.push({path:`/product/${t}`,params:{}})},updateCategory(t){this.$router.push({name:"產品清單",query:{category:`${t}`}})}}},X=a(89);const tt=(0,X.Z)(Q,[["render",B],["__scopeId","data-v-2f9a0fae"]]);var et=tt}}]);
//# sourceMappingURL=656.3fc70494.js.map