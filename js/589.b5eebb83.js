"use strict";(self["webpackChunkrecord"]=self["webpackChunkrecord"]||[]).push([[589],{589:function(t,a,s){s.r(a),s.d(a,{default:function(){return Q}});var e=s(3396),r=s(7139),d=s(9242);const i=t=>((0,e.dD)("data-v-aa889e92"),t=t(),(0,e.Cn)(),t),l=i((()=>(0,e._)("div",{class:"box"},null,-1))),o={class:"container-fluid h100"},c=(0,e.uE)('<div class="checkCart pt-5" data-v-aa889e92><div class="step border" data-v-aa889e92><i class="bi bi-bag-check" data-v-aa889e92></i><span class="border-top" data-v-aa889e92>確認清單</span></div><i class="bi bi-caret-right" data-v-aa889e92></i><div class="step border" data-v-aa889e92><i class="bi bi-card-list" data-v-aa889e92></i><span class="border-top" data-v-aa889e92>填寫資料</span></div><i class="bi bi-caret-right" data-v-aa889e92></i><div class="stepAct border border-secondary" data-v-aa889e92><i class="bi bi-credit-card" data-v-aa889e92></i><span class="border-top" data-v-aa889e92>確認付款</span></div></div>',1),n={class:"pt-5"},p={class:"row px-5"},u={class:"col-12 col-lg-7 mb-4"},b={class:"justify-content-center p-6 border"},_={class:"mb-3"},h=i((()=>(0,e._)("h3",{class:"border-bottom"},"訂單編號",-1))),v={class:"d-flex justify-content-between"},g=i((()=>(0,e._)("i",{class:"bi bi-clipboard-check"},null,-1))),m=[g],y={class:"mb-3"},w=i((()=>(0,e._)("h3",{class:"border-bottom"},"收件人信箱",-1))),k={class:"mb-3"},f=i((()=>(0,e._)("h3",{class:"border-bottom"},"收件人姓名",-1))),x={class:"mb-3"},$=i((()=>(0,e._)("h3",{class:"border-bottom"},"收件人電話",-1))),z={class:"mb-3"},D=i((()=>(0,e._)("h3",{class:"border-bottom"},"收件人地址",-1))),L={class:"mb-3"},C=i((()=>(0,e._)("h3",{class:"border-bottom"},"留言",-1))),I={class:"col-12 col-lg-5 mb-4"},M={class:"border p-6"},O={class:"table align-middle align-middle"},S=i((()=>(0,e._)("thead",null,[(0,e._)("tr",{class:"align-middle text-sm text-gray-400"},[(0,e._)("th",{scope:"col"},"品項")])],-1))),q={class:"d-flex align-items-center flex-column flex-sm-row"},j=["src","alt","title"],T={class:"ms-3 text-start py-4"},U={class:"h5"},H=i((()=>(0,e._)("span",{class:"text-sm text-gray-400"},"下單時間:",-1))),N={key:0},Y=i((()=>(0,e._)("span",{class:"text-sm text-gray-400"},"付款時間:",-1))),A=i((()=>(0,e._)("div",{class:"py-4"},[(0,e._)("span",{class:"text-sm text-gray-400 mr-4"},"總金額")],-1))),E={class:"fs-2 fw-bolder"},K={key:1},W={key:2},Z=i((()=>(0,e._)("button",{type:"button",class:"btn btn-dark w-100",disabled:""},"已付款",-1))),B=[Z];function F(t,a,s,i,g,Z){const F=(0,e.up)("Loading");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(F,{active:g.isLoading},null,8,["active"]),l,(0,e._)("div",o,[c,(0,e._)("div",n,[(0,e._)("div",p,[(0,e._)("div",u,[(0,e._)("div",b,[(0,e._)("div",_,[h,(0,e._)("div",v,[(0,e._)("span",null,(0,r.zw)(g.order.id),1),(0,e._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:a[0]||(a[0]=(0,d.iM)((t=>Z.toCopy(g.order.id)),["prevent"]))},m)])]),(0,e._)("div",y,[w,(0,e._)("span",null,(0,r.zw)(g.order.user.email),1)]),(0,e._)("div",k,[f,(0,e._)("span",null,(0,r.zw)(g.order.user.name),1)]),(0,e._)("div",x,[$,(0,e._)("span",null,(0,r.zw)(g.order.user.tel),1)]),(0,e._)("div",z,[D,(0,e._)("span",null,(0,r.zw)(g.order.user.address),1)]),(0,e._)("div",L,[C,(0,e._)("span",null,(0,r.zw)(g.order.message),1)])])]),(0,e._)("div",I,[(0,e._)("div",M,[(0,e._)("table",O,[S,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(g.order.products,(a=>((0,e.wg)(),(0,e.iD)("tr",{key:a.id},[(0,e._)("td",q,[(0,e._)("img",{class:"productImg",src:a.product.imageUrl,alt:a.product.title,title:a.product.title},null,8,j),(0,e._)("div",T,[(0,e._)("div",U,(0,r.zw)(a.product.title),1),(0,e._)("h6",null,"數量:"+(0,r.zw)(a.qty),1),(0,e._)("h6",null,"NT$"+(0,r.zw)(t.$filters.currency(a.final_total)),1)])])])))),128))])]),H,(0,e.Uk)((0,r.zw)(new Date(1e3*g.order.create_at).toLocaleString())+" ",1),g.order.is_paid?((0,e.wg)(),(0,e.iD)("div",N,[Y,(0,e.Uk)((0,r.zw)(new Date(1e3*g.order.paid_date).toLocaleString()),1)])):(0,e.kq)("",!0),A,(0,e._)("p",E,"NT$"+(0,r.zw)(t.$filters.currency(g.order.total)),1),!1===g.order.is_paid?((0,e.wg)(),(0,e.iD)("div",K,[(0,e._)("button",{type:"button",class:"btn btn-dark w-100",onClick:a[1]||(a[1]=(0,d.iM)(((...t)=>Z.payOrder&&Z.payOrder(...t)),["prevent"]))},"確認付款")])):(0,e.kq)("",!0),!0===g.order.is_paid?((0,e.wg)(),(0,e.iD)("div",W,B)):(0,e.kq)("",!0)])])])])])],64)}var G={data(){return{cart:{},order:{user:{},products:{}},orderId:"",isLoading:!1}},inject:["$httpMessageState","emitter"],methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/yuanyuan1103/order/${this.orderId}`;this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order,this.isLoading=!1)}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/yuanyuan1103/pay/${this.orderId}`;this.isLoading=!0,this.$http.post(t).then((t=>{t.data.success&&(this.$httpMessageState(t,"付款成功"),this.isLoading=!1,this.getOrder())}))},toCopy(t){navigator.clipboard.writeText(t).then((()=>{this.$httpMessageState({data:{success:!0}},"複製訂單編號")})).catch((t=>{this.$httpMessageState(t,"複製失敗")}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},J=s(89);const P=(0,J.Z)(G,[["render",F],["__scopeId","data-v-aa889e92"]]);var Q=P}}]);
//# sourceMappingURL=589.b5eebb83.js.map