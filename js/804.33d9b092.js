"use strict";(self["webpackChunkrecord"]=self["webpackChunkrecord"]||[]).push([[804],{9804:function(r,e,o){o.r(e),o.d(e,{default:function(){return M}});var d=o(3396),t=o(7139),s=o(9242);const l=r=>((0,d.dD)("data-v-849a7eae"),r=r(),(0,d.Cn)(),r),a=l((()=>(0,d._)("div",{class:"position-relative bg-cover"},[(0,d._)("div",{style:{overflow:"hidden"}},[(0,d._)("div",{class:"orderBanner"})]),(0,d._)("h2",{class:"position-absolute text-hv-center h2 fw-bold orderBanner-text"},"查看訂單狀態")],-1))),n={class:"orderTrack"},i={class:"container"},c={class:"orderInput"},u={class:"input-group"},_={class:"input-group-prepend"},h=["disabled"],v=l((()=>(0,d._)("i",{class:"bi bi-search-heart"},"查詢",-1))),p=[v],b={class:"invalid-feedback"},g=l((()=>(0,d._)("h3",{class:"py-4 orderInput"},"重要提醒",-1))),f=l((()=>(0,d._)("div",{class:"card orderInput"},[(0,d._)("div",{class:"card-body"},[(0,d._)("ul",{class:"card-text"},[(0,d._)("li",null,"訂單編號範例：-N778fIMygF_0rRl8LlH"),(0,d._)("li",null,"付款方式限 信用卡&ATM轉帳 付款。"),(0,d._)("li",null,"如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。"),(0,d._)("li",null,"在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。"),(0,d._)("li",null,"目前無提供海外服務。")])])],-1)));function E(r,e,o,l,v,E){return(0,d.wg)(),(0,d.iD)(d.HY,null,[a,(0,d._)("div",n,[(0,d._)("div",i,[(0,d._)("div",c,[(0,d._)("div",u,[(0,d.wy)((0,d._)("input",{type:"text",class:(0,t.C_)(["form-control",{"is-invalid":v.orderError}]),name:"order","onUpdate:modelValue":e[0]||(e[0]=r=>v.order=r),placeholder:"請輸入訂單編號"},null,2),[[s.nr,v.order]]),(0,d._)("div",_,[(0,d._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[1]||(e[1]=(0,s.iM)(((...r)=>E.gotoOrder&&E.gotoOrder(...r)),["prevent"])),disabled:v.orderError},p,8,h)]),(0,d._)("div",b,(0,t.zw)(v.orderErrMsg),1)])]),g,f])])],64)}var k={data(){return{order:"",orderError:!1,orderErrMsg:""}},inject:[],methods:{gotoOrder(){this.$router.push(`/ordertrack/${this.order}`)}},watch:{order(){var r=/[A-Za-z0-9lu4e00-lugfa5]+$/;r.test(this.order)?this.order.length<20?(this.orderError=!0,this.orderErrMsg="長度應為20的訂單編號"):this.orderError=!1:(this.orderError=!0,this.orderErrMsg="訂單未包含中文字")}}},w=o(89);const y=(0,w.Z)(k,[["render",E],["__scopeId","data-v-849a7eae"]]);var M=y}}]);
//# sourceMappingURL=804.33d9b092.js.map