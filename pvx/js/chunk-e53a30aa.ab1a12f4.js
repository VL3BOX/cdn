(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e53a30aa"],{"0e21":function(t,e,n){"use strict";n("9615")},1339:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var s=n("41cb"),i=Object(s["$node"])();function a(t){return i.get("/books",{params:t})}function o(t){return i.get("/book",{params:t})}},"6b19":function(t){t.exports=JSON.parse('[{"id":8,"name":"阅读"},{"id":11,"name":"杂集"},{"id":10,"name":"道学"},{"id":9,"name":"佛学"}]')},9615:function(t,e,n){},e9e6:function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-book-card"},[e("a",{staticClass:"u-book-info",class:"u-profession-bg--"+t.item.ExtendProfessionID1,attrs:{href:t.getLink(t.item.idKey),target:"_blank"}},[e("div",{staticClass:"title"},[t._v(t._s(t.item.Name))])]),e("div",{staticClass:"u-desc-info"},[e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.$th(t.item.Desc))}}),e("div",{staticClass:"desc-title",domProps:{innerHTML:t._s(t.$th(t.item.Name))}})])])},i=[],a=n("6d6e"),o={props:{item:{type:Object,required:!0}},data:function(){return{}},computed:{client:function(){return this.$store.state.client}},methods:{$th:a["translate"],getLink:function(t){return"/book/".concat(t)}}},r=o,c=(n("0e21"),n("2877")),u=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-e53a30aa.ab1a12f4.js.map