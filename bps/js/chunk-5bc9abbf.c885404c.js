(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bc9abbf"],{"055d":function(t,e,i){},"1ce6":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=function(){var t=this,e=t._self._c;return e("CollectionLayout",{attrs:{"has-right":!1}},[e("div",{staticClass:"m-collection-single"},[t.collection?[e("div",{staticClass:"m-collection-detail-content"},[e("div",{staticClass:"m-collection-detail-header"},[e("header",{staticClass:"m-single-header"},[e("div",{staticClass:"m-single-title"},[e("span",{staticClass:"u-title u-sub-block",attrs:{href:t.url,title:t.collection.title}},[t.collection.public?t._e():e("i",{staticClass:"u-private el-icon-lock",attrs:{title:"仅自己可见"}}),e("span",{staticClass:"u-title-text"},[t._v(t._s(t.collection.title))])])]),e("div",{staticClass:"m-single-info"},[e("div",{staticClass:"u-author u-sub-block"},[e("i",{staticClass:"u-author-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#444","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}})])]),e("a",{staticClass:"u-name",attrs:{href:t._f("authorLink")(t.collection.user_id)}},[t._v(t._s(t.collection.user_nickname))])]),e("span",{staticClass:"u-podate u-sub-block",attrs:{title:"发布日期"}},[e("i",{staticClass:"u-icon el-icon-date"}),e("time",[t._v(t._s(t.dateFormat(t.collection.created)))])]),e("span",{staticClass:"u-modate u-sub-block",attrs:{title:"最后更新"}},[e("i",{staticClass:"u-icon el-icon-refresh"}),e("time",[t._v(t._s(t.dateFormat(t.collection.updated)))])]),e("span",{staticClass:"u-views u-sub-block"},[e("i",{staticClass:"u-icon el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),t.canEdit?e("a",{staticClass:"u-edit u-sub-block",attrs:{href:t.edit_link}},[e("i",{staticClass:"u-icon-edit el-icon-edit-outline"}),e("span",[t._v("编辑")])]):t._e(),t.canEdit?e("a",{staticClass:"u-delete u-sub-block",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.delete_handle(e,t.collection.id)}}},[e("i",{staticClass:"u-icon-remove el-icon-delete"}),e("span",[t._v("删除")])]):t._e()])])]),t.collection.description?[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-collection"}),t._v(" 小册简介 ")]),e("div",{staticClass:"u-description"},[e("p",{domProps:{innerHTML:t._s(t.resolveImagePath(t.collection.description))}})])]:t._e(),t.collection.posts&&t.collection.posts.length?[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-folder"}),t._v(" 小册文章 ")]),e("ul",{staticClass:"u-list"},t._l(t.collection.posts,(function(i,n){return e("li",{key:n,staticClass:"u-item"},[e("span",{staticClass:"u-item-order"},[t._v(t._s(n+1)+".")]),"custom"===i.type?e("span",{staticClass:"u-item-link"},[e("i",{staticClass:"el-icon-link"}),t._v("站外链接 ")]):t._e(),"custom"!==i.type&&i.user_id?e("a",{staticClass:"u-item-author",attrs:{target:"_blank",href:t._f("authorLink")(i.user_id)}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(i.user_avatar)}}),e("span",{staticClass:"u-nickname",domProps:{textContent:t._s(i.user_nickname)}}),e("span",{staticClass:"u-div"},[t._v("/")])]):t._e(),e("a",{staticClass:"u-item-title",attrs:{target:"_blank",href:"custom"===i.type?i.url:t.getLink(i.type,i.id)}},[t._v(t._s(i.title))]),i.updated?e("time",{staticClass:"u-updated",domProps:{textContent:t._s("最后更新于 "+t.dateFormat(i.updated))}}):t._e()])})),0)]:t._e()],2),e("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:"collection",postTitle:t.title,userId:t.author_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:"all"}}),t.id?e("div",{staticClass:"m-comments"},[e("el-divider",{attrs:{"content-position":"left"}},[e("span",{staticStyle:{color:"#999999"}},[e("i",{staticClass:"el-icon-chat-line-square"}),t._v(" 讨论 ")])]),e("jx3-comment",{attrs:{id:t.id,category:"collection"}})],1):t._e()]:e("el-alert",{attrs:{title:"该剑三小册不存在或已被删除",type:"info",center:"","show-icon":"",closable:!1}})],2)])},a=[],s=(i("14d9"),i("d3b7"),i("23d8"));const c=Object.freeze({PRIVATE:0,PUBLIC:1,all(){return[this.PRIVATE,this.PUBLIC]}});var o=c,l=i("73cd"),r=i("fb92"),u=i("85e4"),d=i("c9d2"),f=i("9616"),h=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("Breadcrumb",{attrs:{name:"剑三小册",slug:"collection",root:"/collection",publishEnable:!0,adminEnable:!1,feedbackEnable:!0,crumbEnable:!0}}),e("LeftSidebar",{attrs:{uid:t.user_id}},[e("Nav",{staticClass:"m-nav",attrs:{id:t.id}})],1),e("Main",{attrs:{withoutRight:!t.hasRight}},[t._t("default"),e("RightSidebar",[e("Side",{staticClass:"m-extend",attrs:{id:t.id}})],1),e("Footer")],2)],1)},m=[],p=i("f93f"),v=i("e1e0"),b={name:"CollectionLayout",props:{hasRight:{type:Boolean,default:!0}},data:function(){return{id:Object(u["getAppID"])()}},computed:{user_id:function(){return this.$store.state.user_id}},methods:{},components:{Nav:p["a"],Side:v["a"]}},_=b,C=(i("d4f6"),i("2877")),g=Object(C["a"])(_,h,m,!1,null,null,null),k=g.exports,w={name:"CollectionSingle",props:[],components:{"jx3-comment":s["a"],CollectionLayout:k},data:function(){return{collection:"",publish:o,url:location.href,views:0,loading:!1}},computed:{edit_link:function(){return Object(u["editLink"])("collection",this.collection.id)},id:function(){var t;return null===(t=this.collection)||void 0===t?void 0:t.id},author_id:function(){var t;return(null===(t=this.collection)||void 0===t?void 0:t.user_id)||0},canEdit:function(){return this.author_id==d["a"].getInfo().uid||d["a"].isEditor()},title:function(){return this.collection.title}},watch:{"$route.params.id":{immediate:!0,handler:function(t){t&&(this.loadData(t),this.execStat(t))}}},methods:{getThumbnail:u["getThumbnail"],getLink:u["getLink"],getTypeLabel:u["getTypeLabel"],showAvatar:u["showAvatar"],resolveImagePath:u["resolveImagePath"],dateFormat:function(t){return Object(r["a"])(new Date(1e3*t))},delete_handle:function(t,e){var i=this;t.preventDefault(),this.$confirm("确认是否删除该剑三小册？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["f"])(e).then((function(t){i.$message.success("删除成功"),i.$router.push({name:"collection"})}))}))},loadData:function(t){var e=this;this.loading=!0,Object(l["b"])(t).then((function(t){var i;e.collection=(null===t||void 0===t||null===(i=t.data)||void 0===i?void 0:i.data)||{},e.$store.state.user_id=e.collection.user_id})).finally((function(){e.loading=!1}))},execStat:function(t){var e=this;Object(f["b"])("collection",t),Object(f["a"])("collection",t).then((function(t){e.views=t.data.views||0}))}},filters:{authorLink:u["authorLink"]},created:function(){},mounted:function(){}},j=w,x=(i("7b24"),Object(C["a"])(j,n,a,!1,null,null,null));e["default"]=x.exports},"73cd":function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"e",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"f",(function(){return s})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return r}));var n=i("41cb");i("4328");function a(t){return Object(n["$cms"])()({method:"GET",url:"/api/cms/post/collection",params:t})}function s(t){return Object(n["$cms"])()({method:"DELETE",url:"/api/cms/post/collection/".concat(t)})}function c(t){return Object(n["$cms"])()({method:"GET",url:"/api/cms/post/collection/".concat(t)})}function o(t,e){return Object(n["$helper"])().get("/api/wiki/posts/".concat(t),{params:e})}function l(t){return Object(n["$cms"])({mute:!0}).get("/api/cms/menu-group",{params:{key:t}})}function r(t){return Object(n["$cms"])({mute:!0}).get("/api/cms/breadcrumb/".concat(t))}},"7b24":function(t,e,i){"use strict";i("055d")},b6ba:function(t,e,i){},d4f6:function(t,e,i){"use strict";i("b6ba")},fb92:function(t,e,i){"use strict";i("99af");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=t.getFullYear(),s=t.getMonth()+1,c=t.getDate(),o=i?"".concat(n).concat(e).concat(a(s)).concat(e).concat(a(c)):"".concat(n).concat(e).concat(s).concat(e).concat(c);return o}function a(t){return t<10?"0"+t:t}e["a"]=n}}]);
//# sourceMappingURL=chunk-5bc9abbf.c885404c.js.map