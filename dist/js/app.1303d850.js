(function(){"use strict";var e={1141:function(e,t,a){var s=a(9963),o=a(6252);const i={class:"app"};function n(e,t,a,s,n,r){const u=(0,o.up)("nav-bar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u),(0,o.Wm)(l)])}const r={class:"bar"},u={class:"d-flex justify-content-center p-2"};function l(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",u,[(0,o._)("div",{class:"p-2",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Main"),(0,o._)("div",{class:"p-2",onClick:t[1]||(t[1]=t=>e.$router.push("/list"))},"Beer list"),(0,o._)("div",{class:"p-2",onClick:t[2]||(t[2]=t=>e.$router.push("/about"))},"About")])])}var c={},p=a(3744);const d=(0,p.Z)(c,[["render",l],["__scopeId","data-v-b18e520a"]]);var m=d,g={components:{NavBar:m}};const v=(0,p.Z)(g,[["render",n]]);var h=v;const f={class:"d-grid col-3"},b={type:"button",class:"btn btn-dark"};function y(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("button",b,[(0,o.WI)(e.$slots,"default")])])}var w={name:"my-button"};const _=(0,p.Z)(w,[["render",y]]);var k=_;const D=["value"];function q(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("input",{value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>n.updateInput&&n.updateInput(...e)),class:"input",type:"text"},null,40,D)}var S={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const x=(0,p.Z)(S,[["render",q]]);var L=x,P=[k,L],O=a(2119);const C={class:"row"},I=(0,o.uE)('<div class="col-7 ms-5"><h2 class="">Beer for a day</h2><div class=""><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p><p class="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deserunt asperiores repellendus laudantium? Sint mollitia minus obcaecati omnis dignissimos! Dolorum quaerat ea pariatur, eius quo ullam quam earum veniam voluptate? </p></div></div>',1),V={class:"col bg-grey"},B=(0,o._)("h2",{class:"text-center"},"Beer List",-1),Z={class:"prokrutka"},$={key:1},j=(0,o._)("p",null,"Loading",-1),z=[j];function W(e,t,a,s,i,n){const r=(0,o.up)("post-list");return(0,o.wg)(),(0,o.iD)("div",C,[I,(0,o._)("div",V,[B,(0,o._)("div",Z,[i.postLoading?((0,o.wg)(),(0,o.iD)("div",$,z)):((0,o.wg)(),(0,o.j4)(r,{key:0,posts:this.posts},null,8,["posts"]))])])])}var U=a(9669),A=a.n(U);function E(e,t,a,i,n,r){const u=(0,o.up)("post-item");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s.W3,{name:"post-list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.posts,(e=>((0,o.wg)(),(0,o.j4)(u,{class:"post",key:e.id,post:e},null,8,["post"])))),128))])),_:1})])}var N=a(3577);const Q=e=>((0,o.dD)("data-v-cef3dd9a"),e=e(),(0,o.Cn)(),e),M={class:"card my-4 mx-auto",style:{width:"20rem"}},H={class:"al"},K=["src"],Y={class:"card-body"},F={class:"card-text"},T=Q((()=>(0,o._)("strong",null,"Название:",-1))),G={class:"card-text"},J=Q((()=>(0,o._)("strong",null,"Сорт:",-1))),R={class:"card-text"},X=Q((()=>(0,o._)("strong",null,"Создатель:",-1))),ee={class:"card-text"},te=Q((()=>(0,o._)("strong",null,"Описание:",-1))),ae=(0,o.Uk)(" OPEN ");function se(e,t,a,s,i,n){const r=(0,o.up)("my-button");return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("div",H,[(0,o._)("img",{class:"postImg img-fluid mx-auto d-block my-2",src:`${a.post.image_url}`},null,8,K)]),(0,o._)("div",Y,[(0,o._)("p",F,[T,(0,o.Uk)(" "+(0,N.zw)(a.post.name),1)]),(0,o._)("p",G,[J,(0,o.Uk)(" "+(0,N.zw)(a.post.tagline),1)]),(0,o._)("p",R,[X,(0,o.Uk)(" "+(0,N.zw)(a.post.contributed_by),1)]),(0,o._)("p",ee,[te,(0,o.Uk)(" "+(0,N.zw)(a.post.description),1)])]),(0,o.Wm)(r,{class:"mx-auto p-down",onClick:t[0]||(t[0]=t=>e.$router.push(`/beer/${a.post.id}`))},{default:(0,o.w5)((()=>[ae])),_:1})])}var oe={props:{post:{type:Object,require:!0}}};const ie=(0,p.Z)(oe,[["render",se],["__scopeId","data-v-cef3dd9a"]]);var ne=ie,re={components:{PostItem:ne},props:{posts:{type:Array,require:!0}}};const ue=(0,p.Z)(re,[["render",E],["__scopeId","data-v-4aedb42e"]]);var le=ue,ce={components:{PostList:le},data(){return{posts:[],postLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:60,totalPage:0,sortOptions:[{value:"name",name:"По названию"},{value:"tagline",name:"По сорту"},{value:"contributed_by",name:"По создателю"}]}},methods:{async fetchBeer(){console.log("fetching");try{this.postLoading=!0;const e=await A().get("https://api.punkapi.com/v2/beers",{params:{page:this.page,per_page:this.limit}});this.posts=e.data}catch(e){console.error(e)}finally{this.postLoading=!1}}},mounted(){this.fetchBeer()},computed:{},watch:{}};const pe=(0,p.Z)(ce,[["render",W]]);var de=pe;const me={class:"container"},ge=(0,o._)("h2",null,"Beer List",-1),ve={key:1},he=(0,o._)("p",null,"Loading",-1),fe=[he];function be(e,t,a,s,i,n){const r=(0,o.up)("my-input"),u=(0,o.up)("paginator"),l=(0,o.up)("select-form"),c=(0,o.up)("post-list");return(0,o.wg)(),(0,o.iD)("div",me,[ge,(0,o.Wm)(r,{modelValue:i.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>i.searchQuery=e),placeholder:"Search..."},null,8,["modelValue"]),(0,o.Wm)(u,{onChange:n.changePage,page:i.page,totalPage:i.totalPage},null,8,["onChange","page","totalPage"]),(0,o.Wm)(l,{modelValue:i.selectedSort,"onUpdate:modelValue":t[1]||(t[1]=e=>i.selectedSort=e),options:i.sortOptions},null,8,["modelValue","options"]),i.postLoading?((0,o.wg)(),(0,o.iD)("div",ve,fe)):((0,o.wg)(),(0,o.j4)(c,{key:0,posts:n.sortedAndSearchedPosts},null,8,["posts"]))])}a(6699);const ye={class:"d-flex flex-row"},we=["onClick"];function _e(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("div",ye,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.totalPage,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:(0,N.C_)(["text-info",{"text-danger":a.page===e}]),onClick:t=>n.changePage(e)},(0,N.zw)(e)+"  ",11,we)))),128))])}var ke={props:{totalPage:{type:Number,require:!0},page:{type:Number,require:!0}},methods:{changePage(e){this.$emit("change",e)}}};const De=(0,p.Z)(ke,[["render",_e]]);var qe=De;const Se=(0,o._)("option",{disabled:"",value:""},"Choose your destiny",-1),xe=["value"];function Le(e,t,a,i,n,r){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.modelValue=e),onChange:t[1]||(t[1]=(...e)=>r.changeOption&&r.changeOption(...e))},[Se,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.options,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.value,value:e.value},(0,N.zw)(e.name),9,xe)))),128))],544)),[[s.bM,a.modelValue]])}var Pe={name:"select-form",props:{modelValue:{type:String},options:{type:Array,defaulyt:()=>[]}},methods:{changeOption(e){this.$emit("update:modelValue",e.target.value)}}};const Oe=(0,p.Z)(Pe,[["render",Le]]);var Ce=Oe,Ie={components:{PostList:le,SelectForm:Ce,Paginator:qe},data(){return{posts:[],postLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:30,totalPage:0,totalPosts:325,sortOptions:[{value:"name",name:"По названию"},{value:"tagline",name:"По сорту"},{value:"contributed_by",name:"По создателю"}]}},methods:{changePage(e){this.page=e,this.fetchBeer()},async fetchBeer(){console.log("fetching");try{this.postLoading=!0;const e=await A().get("https://api.punkapi.com/v2/beers",{params:{page:this.page,per_page:this.limit}});this.totalPage=Math.ceil(this.totalPosts/this.limit),this.posts=e.data}catch(e){console.error(e)}finally{this.postLoading=!1}}},mounted(){this.fetchBeer()},computed:{sortPosts(){return[...this.posts].sort(((e,t)=>e[this.selectedSort]?.localeCompare(t[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortPosts.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const Ve=(0,p.Z)(Ie,[["render",be]]);var Be=Ve;function Ze(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("div",null," About")}var $e={};const je=(0,p.Z)($e,[["render",Ze]]);var ze=je;const We=e=>((0,o.dD)("data-v-a4dbecb6"),e=e(),(0,o.Cn)(),e),Ue={key:0},Ae=["src"],Ee={key:1},Ne=We((()=>(0,o._)("p",null,"Loading",-1))),Qe=[Ne];function Me(e,t,a,s,i,n){return(0,o.wg)(),(0,o.iD)("div",null,[i.postLoading?((0,o.wg)(),(0,o.iD)("div",Ee,Qe)):((0,o.wg)(),(0,o.iD)("div",Ue,[(0,o._)("h2",null,(0,N.zw)(i.beer.name),1),(0,o._)("p",null,(0,N.zw)(i.beer.tagline),1),(0,o._)("p",null,(0,N.zw)(i.beer.brewers_tips),1),(0,o._)("img",{class:"postImg",src:`${i.beer.image_url}`},null,8,Ae)]))])}var He={data(){return{beer:{},id:"",postLoading:!0}},methods:{getId(){const e=window.location.pathname.replace(/[^\d]/g,"");this.id=e},async fetchExectBeer(){try{const e=await A().get(`https://api.punkapi.com/v2/beers/${this.id}`,{});this.beer=e.data[0]}catch(e){console.error(e)}finally{this.postLoading=!1}}},mounted(){this.getId(),this.fetchExectBeer()}};const Ke=(0,p.Z)(He,[["render",Me],["__scopeId","data-v-a4dbecb6"]]);var Ye=Ke;const Fe=[{path:"/",component:de},{path:"/list",component:Be},{path:"/about",component:ze},{path:"/beer/:id",component:Ye}],Te=(0,O.p7)({routes:Fe,history:(0,O.PO)("/dist/")});var Ge=Te;const Je=(0,s.ri)(h);P.forEach((e=>{Je.component(e.name,e)})),Je.use(Ge).mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,i){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],i=e[c][2];for(var r=!0,u=0;u<s.length;u++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[u])}))?s.splice(u--,1):(r=!1,i<n&&(n=i));if(r){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,n=s[0],r=s[1],u=s[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(u)var c=u(a)}for(t&&t(s);l<n.length;l++)i=n[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},s=self["webpackChunkbeer_app"]=self["webpackChunkbeer_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1141)}));s=a.O(s)})();
//# sourceMappingURL=app.1303d850.js.map