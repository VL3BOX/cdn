(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed61999"],{"0521":function(t){t.exports=JSON.parse('{"c":{"4":"改名卡","5":"盒币充值","7":"1年VIP高级会员","8":"1年PRO专业会员","9":"高级会员升级专业会员","10":"0.99铭牌促销活动","11":"铭牌标准售卖","12":"1个月VIP高级会员","13":"3个月VIP高级会员","14":"1个月PRO专业会员","15":"3个月PRO专业会员","16":"金箔"},"a":{"0":"待支付","1":"支付完成","2":"放弃支付","3":"订单过期放弃支付"},"b":{"alipay":"支付宝","wepay":"微信"}}')},"3c92":function(t,a,e){"use strict";e("68b3")},"46c1":function(t){t.exports=JSON.parse('{"d":[{"name":"frame","icon":"el-icon-camera","label":"头像框"},{"name":"theme","icon":"el-icon-orange","label":"主题风格"},{"name":"honor","icon":"el-icon-collection-tag","label":"称号"},{"name":"emotion","icon":"el-icon-picture-outline-round","label":"表情包"}],"c":[{"name":"profile","icon":"el-icon-user","label":"基本资料"},{"name":"avatar","icon":"el-icon-camera","label":"修改头像"},{"name":"pwd","icon":"el-icon-lock","label":"修改密码"},{"name":"email","icon":"el-icon-message","label":"邮箱设置"},{"name":"connect","icon":"el-icon-connection","label":"绑定账号"},{"name":"address","icon":"el-icon-map-location","label":"地址管理"}],"a":[{"name":"mall","icon":"el-icon-shopping-bag-1","label":"商城订单"},{"name":"orders","icon":"el-icon-shopping-bag-2","label":"系统订单"}],"b":[{"name":"msg","icon":"el-icon-message","label":"消息"},{"name":"letter","icon":"el-icon-chat-dot-square","label":"私信"}]}')},"5b20":function(t,a,e){"use strict";e("e41e")},"68b3":function(t,a,e){},b547:function(t,a,e){"use strict";var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-dashboard-profile m-profile"},[a("h2",{staticClass:"u-title"},[a("i",{class:t.icon}),t._v(" "+t._s(t.title)+" "),t._t("header")],2),a("tabs",{attrs:{tabs:t.tabList}}),t._t("default")],2)},o=[],i=(e("b0c0"),function(){var t=this,a=t._self._c;return a("el-tabs",{staticClass:"m-dashboard-tabs",on:{"tab-click":t.changeTab},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tabs,(function(e){return a("el-tab-pane",{key:e.name,attrs:{name:e.name}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"u-tab-icon",class:e.icon}),t._v(" "+t._s(e.label))])])})),1)}),s=[],c=(e("14d9"),{name:"",props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{active:""}},watch:{$route:function(){this.active=this.$route.name}},computed:{},methods:{changeTab:function(){this.$router.push({name:this.active})}},mounted:function(){this.active=this.$route.name},components:{}}),l=c,r=e("2877"),u=Object(r["a"])(l,i,s,!1,null,null,null),d=u.exports,p=e("46c1"),m={name:"uc",props:{icon:{type:String,default:"el-icon-user"},title:{type:String,default:"我的资料"},tabList:{type:Array,default:function(){return p["c"]}}},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{tabs:d}},b=m,h=(e("3c92"),Object(r["a"])(b,n,o,!1,null,null,null));a["a"]=h.exports},e41e:function(t,a,e){},ff9a:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("uc",{attrs:{icon:"el-icon-shopping-bag-1",title:"订单中心",tabList:t.tabList}},[a("div",{staticClass:"m-dashboard m-dashboard-work m-dashboard-orders"},[a("div",{staticClass:"m-dashboard-orders-cont"},[t.list&&t.list.length?a("div",{staticClass:"m-order-list"},[a("table",[a("thead",[a("th",[t._v("产品")]),a("th",[t._v("订单编号")]),a("th",[t._v("金额")]),a("th",[t._v("支付方式")]),a("th",[t._v("交易号")]),a("th",[t._v("交易状态")]),a("th",[t._v("订单创建时间")])]),a("tbody",t._l(t.list,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(t._f("showProduct")(e.product_id)))]),a("td",[t._v(t._s(e.id))]),a("td",[t._v("¥"+t._s(t._f("showPrice")(e.total_fee)))]),a("td",[t._v(t._s(t._f("showPayType")(e.pay_type)))]),a("td",[t._v(t._s(e.transaction_id))]),a("td",[t._v(t._s(t._f("showPayStatus")(e.pay_status)))]),a("td",[t._v(t._s(t._f("showTime")(e.created_time)))])])})),0)]),a("div",{staticClass:"m-order-pages"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(a){t.page=a},"update:current-page":function(a){t.page=a}}})],1)]):a("div",{staticClass:"m-order-null"},[a("el-alert",{attrs:{title:"还有任何订单记录",type:"info","show-icon":""}})],1)])])])},o=[],i=(e("b680"),e("41cb"));function s(t){return Object(i["$pay"])().get("/api/order/list",{params:t})}var c=e("0521"),l=e("e4f1"),r=e("46c1"),u=e("b547"),d={name:"orders",components:{uc:u["a"]},props:[],data:function(){return{list:[],per:10,total:1,page:1,tabList:r["a"]}},computed:{params:function(){return{pageIndex:this.page,pageSize:this.per}}},methods:{loadData:function(){var t=this;s(this.params).then((function(a){t.list=a.data.data.list,t.total=a.data.data.page.total}))}},watch:{params:{deep:!0,immediate:!0,handler:function(){this.loadData()}}},filters:{showProduct:function(t){return c["c"][t]},showPayStatus:function(t){return c["a"][t]},showPayType:function(t){return c["b"][t]},showPrice:function(t){return t?(t/100).toFixed(2):"0.00"},showTime:l["b"]},mounted:function(){}},p=d,m=(e("5b20"),e("2877")),b=Object(m["a"])(p,n,o,!1,null,"984a2060",null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-1ed61999.20aa0b4c.js.map