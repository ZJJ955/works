webpackJsonp([1],{"/Oaz":function(t,n,e){t.exports=e.p+"static/img/banner5.1648915.png"},B1R0:function(t,n){},CMrX:function(t,n,e){t.exports=e.p+"static/img/banner1.f5d7fea.png"},DSr0:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("//Fk"),s=e.n(a),r=e("7+uW"),i=(e("DSr0"),{render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}),o=e("VU/8")({name:"App"},i,!1,null,null,null).exports,c=e("/ocq"),l={data:function(){return{search:""}},created:function(){},mounted:function(){var t=new BMap.Map("container"),n=new BMap.Point(116.404,39.915);t.centerAndZoom(n,15),t.enableScrollWheelZoom(!0),t.enableContinuousZoom(!0),t.addControl(new BMap.NavigationControl),t.addControl(new BMap.ScaleControl),t.addControl(new BMap.GeolocationControl),(new BMap.LocalCity).get(function(n){var e=n.name;t.setCenter(e)})},methods:{jump:function(t){this.$router.push({path:t})}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("mt-search",{staticClass:"search",attrs:{"cancel-text":"取消",placeholder:"搜索"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}}),t._v(" "),e("p",{on:{click:function(n){return t.jump("candy")}}},[t._v("糖果")]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"2rem"},attrs:{id:"container"}}),t._v(" "),e("tabBar",{attrs:{url:"/"}})],1)},staticRenderFns:[]};var p=e("VU/8")(l,u,!1,function(t){e("g+3Y")},"data-v-64a3926b",null).exports,m={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("mt-swipe",{staticClass:"swipe",attrs:{auto:4e3}},[a("mt-swipe-item",[a("img",{attrs:{src:e("CMrX"),alt:""}})]),t._v(" "),a("mt-swipe-item",[a("img",{attrs:{src:e("i4Cj"),alt:""}})]),t._v(" "),a("mt-swipe-item",[a("img",{attrs:{src:e("XMCP"),alt:""}})]),t._v(" "),a("mt-swipe-item",[a("img",{attrs:{src:e("oXVe"),alt:""}})]),t._v(" "),a("mt-swipe-item",[a("img",{attrs:{src:e("/Oaz"),alt:""}})])],1),t._v(" "),a("div",{staticClass:"btn"},[a("mt-button",{attrs:{type:"danger"},on:{click:function(n){return t.jump("register")}}},[t._v("注册")]),t._v(" "),a("mt-button",{attrs:{type:"primary"},on:{click:function(n){return t.jump("login")}}},[t._v("登陆")])],1)],1)},staticRenderFns:[]};var d=e("VU/8")({data:function(){return{}},created:function(){},methods:{jump:function(t){this.$router.push({path:t})}}},m,!1,function(t){e("cQdN")},"data-v-46d9c578",null).exports,v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg"},[e("mt-header",{attrs:{title:"注册"}},[e("router-link",{attrs:{slot:"left",to:"/sign"},slot:"left"},[e("mt-button",[t._v("取消")])],1)],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"box"},[e("mt-field",{staticClass:"input",attrs:{placeholder:"请输入用户名",type:"text"},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}}),t._v(" "),e("mt-field",{staticClass:"input",attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"login"},[e("mt-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("注册")]),t._v(" "),e("div",{staticClass:"forget"},[t._v("忘记密码")]),t._v(" "),e("p",[t._v("\n      已有登陆账号？\n      "),e("span",{on:{click:function(n){return t.jump("login")}}},[t._v("去登陆")])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"top"},[n("img",{attrs:{src:e("/Oaz"),alt:""}})])}]};var f=e("VU/8")({data:function(){return{username:"",password:""}},methods:{jump:function(t){this.$router.push({path:t})},login:function(){return this.username?this.password?void 0:(this.$toast("请输入密码"),!1):(this.$toast("请输入用户名"),!1)}}},v,!1,function(t){e("Nr4j")},"data-v-f4625590",null).exports,h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg"},[e("mt-header",{attrs:{title:"登陆"}},[e("router-link",{attrs:{slot:"left",to:"/sign"},slot:"left"},[e("mt-button",[t._v("取消")])],1)],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"box"},[e("mt-field",{staticClass:"input",attrs:{placeholder:"请输入用户名",type:"text"},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}}),t._v(" "),e("mt-field",{staticClass:"input",attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"login"},[e("mt-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登陆")]),t._v(" "),e("div",{staticClass:"forget"},[t._v("忘记密码")]),t._v(" "),e("p",[t._v("\n      还没有登陆账号？\n      "),e("span",{on:{click:function(n){return t.jump("register")}}},[t._v("去注册")])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"top"},[n("img",{attrs:{src:e("/Oaz"),alt:""}})])}]};var _=e("VU/8")({data:function(){return{username:"",password:""}},methods:{jump:function(t){this.$router.push({path:t})},login:function(){return this.username?this.password?void this.$router.push({path:"/"}):(this.$toast("请输入密码"),!1):(this.$toast("请输入用户名"),!1)}}},h,!1,function(t){e("qk1V")},"data-v-0be11aad",null).exports,g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wrap"},[n("p",[this._v("糖果工厂")]),this._v(" "),n("div",{staticClass:"now"},[this._v("\n      当前的糖果数量："+this._s(this.candyNum)+"\n  ")]),this._v(" "),n("audio",{staticStyle:{display:"none"},attrs:{controls:"controls",autoplay:"",loop:"",src:"../static/images/dong.mp3"}})])},staticRenderFns:[]};var C=e("VU/8")({data:function(){return{candyNum:100}},methods:{}},g,!1,function(t){e("XohT")},"data-v-23aff1a9",null).exports,b={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("mt-tabbar",{model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"/"}},[a("img",{attrs:{slot:"icon",src:e("CMrX")},slot:"icon"}),t._v("\n      首页\n    ")]),t._v(" "),a("mt-tab-item",{attrs:{id:"car"}},[a("img",{attrs:{slot:"icon",src:e("i4Cj")},slot:"icon"}),t._v("\n      购物车\n    ")]),t._v(" "),a("mt-tab-item",{attrs:{id:"my"}},[a("img",{attrs:{slot:"icon",src:e("XMCP")},slot:"icon"}),t._v("\n      我的\n    ")])],1)],1)},staticRenderFns:[]};var w=e("VU/8")({data:function(){return{selected:this.url}},props:["url"],watch:{selected:function(t,n){this.$router.push({path:t})}},methods:{}},b,!1,function(t){e("mvWw")},"data-v-78949b3c",null).exports,y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my"},[t._m(0),t._v(" "),e("div",{staticClass:"title2"},[t._v("Interests")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"title2"},[t._v("Pictures")]),t._v(" "),t._m(2),t._v(" "),e("tabBar",{attrs:{url:"my"}})],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[this._v("Project")]),this._v(" "),n("div",{staticClass:"touxiang"},[n("img",{attrs:{src:e("CMrX"),alt:""}})]),this._v(" "),n("div",{staticClass:"name"},[this._v("Mayme Campbell")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Interests"},[e("span",[t._v("mountains")]),t._v(" "),e("span",[t._v("fashion")]),t._v(" "),e("span",[t._v("Paris")]),t._v(" "),e("span",[t._v("summer")]),t._v(" "),e("span",[t._v("New York")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"Pictures"},[n("img",{attrs:{src:e("CMrX"),alt:""}}),this._v(" "),n("img",{attrs:{src:e("i4Cj"),alt:""}}),this._v(" "),n("img",{attrs:{src:e("XMCP"),alt:""}}),this._v(" "),n("img",{attrs:{src:e("oXVe"),alt:""}}),this._v(" "),n("img",{attrs:{src:e("/Oaz"),alt:""}}),this._v(" "),n("img",{attrs:{src:e("XMCP"),alt:""}})])])}]};var x=e("VU/8")({data:function(){return{}},methods:{jump:function(t){this.$router.push({path:t})}}},y,!1,function(t){e("B1R0")},"data-v-71f59b8c",null).exports,$={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._v("\n  购物车\n  "),n("tabBar",{attrs:{url:"car"}})],1)},staticRenderFns:[]};var k=e("VU/8")({data:function(){return{}},created:function(){},mounted:function(){},methods:{jump:function(t){this.$router.push({path:t})}}},$,!1,function(t){e("rWcy")},"data-v-d1079d26",null).exports;r.default.use(c.a);var M=new c.a({routes:[{path:"/",name:"home",component:p},{path:"/sign",name:"sign",component:d},{path:"/register",name:"register",component:f},{path:"/login",name:"login",component:_},{path:"/candy",name:"candy",component:C},{path:"/tabBar",name:"tabBar",component:w},{path:"/car",name:"car",component:k},{path:"/my",name:"my",component:x}]}),j=e("Au9i"),X=e.n(j),B=(e("d8/S"),e("mtWM")),E=e.n(B);r.default.config.productionTip=!1,r.default.use(X.a),r.default.component("tabBar",w);r.default.prototype.$post=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new FormData;return new s.a(function(e,a){E.a.post("http://zhaoping.langfang1088.com/"+t,n).then(function(t){e(t)})})},new r.default({el:"#app",router:M,components:{App:o},template:"<App/>"})},Nr4j:function(t,n){},XMCP:function(t,n,e){t.exports=e.p+"static/img/banner3.feafebd.png"},XohT:function(t,n){},cQdN:function(t,n){},"d8/S":function(t,n){},"g+3Y":function(t,n){},i4Cj:function(t,n,e){t.exports=e.p+"static/img/banner2.808a6bd.png"},mvWw:function(t,n){},oXVe:function(t,n,e){t.exports=e.p+"static/img/banner4.c8de187.png"},qk1V:function(t,n){},rWcy:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.c982d08d3d9eacbcde98.js.map