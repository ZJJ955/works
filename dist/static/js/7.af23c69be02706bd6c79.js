webpackJsonp([7],{lvyN:function(t,e){},"lyB/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("mt-swipe",{attrs:{auto:4e3}},t._l(t.swipeList,function(e,i){return s("mt-swipe-item",{key:i},[s("img",{attrs:{src:e.swipeImgAll,alt:""},on:{click:function(s){return t.jump(e)}}})])}),1),t._v(" "),s("shopp1"),t._v(" "),s("banner1"),t._v(" "),s("shopp2"),t._v(" "),s("tabBar",{attrs:{url:"/"}})],1)},staticRenderFns:[]};var n=s("VU/8")({data:function(){return{search:"",swipeList:[]}},created:function(){},mounted:function(){this.swipeList=this.$store.state.swipeList},methods:{jump:function(t){this.$store.commit("detailsArr_jump",{val:t}),this.$router.push({path:"details"})}}},i,!1,function(t){s("lvyN")},"data-v-c7531cba",null);e.default=n.exports}});
//# sourceMappingURL=7.af23c69be02706bd6c79.js.map