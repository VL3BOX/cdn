(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8742d6ca"],{"10ab":function(t,e,n){"use strict";n("62d8")},"46e8":function(t,e,n){"use strict";n.d(e,"l",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"h",(function(){return g})),n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return b})),n.d(e,"g",(function(){return m})),n.d(e,"i",(function(){return k})),n.d(e,"c",(function(){return w})),n.d(e,"m",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return p}));var c=n("41cb"),i=n("bc3a"),a=n.n(i),o=n("65c2"),r=Object(c["$_https"])("server",{proxy:!1});function u(){return Object(c["$cms"])().get("/api/cms/user/my/profile")}function s(t){return Object(c["$cms"])().put("/api/cms/user/my/profile",t)}function h(t){return Object(c["$cms"])().put("/api/cms/user/my/avatar",t)}function l(t){return Object(c["$cms"])().post("/api/cms/upload/avatar",t)}function d(){var t=o["__imgPath"]+"avatar/index.json";return a.a.get(t)}function p(t){return Object(c["$cms"])().get("/api/cms/user/".concat(t,"/info"),{params:{__no_cache:1}})}function f(t){return r.post("profile/password",t)}function b(){return r.get("profile/email/check")}function _(t){return r.get("profile/email/available",{params:{user_email:t}})}function m(t){return r.post("profile/email/bind",t)}function g(){return r.post("profile/email/verify")}function w(){return Object(c["$cms"])().get("/api/cms/account/oauth/status")}function k(t){return Object(c["$cms"])({popType:"alert"}).delete("/api/cms/account/oauth/unbind/".concat(t))}},"62d8":function(t,e,n){},7834:function(t){t.exports=JSON.parse('{"github":{"id":"5fbf7a66cd7d3d0f5153","authorize_uri":"https://github.com/login/oauth/authorize","tokenURL":"https://github.com/login/oauth/access_token","resourceURL":"https://api.github.com/user","callback":"oauth/github/callback"},"qq":{"id":"101870778","authorize_uri":"https://graph.qq.com/oauth2.0/authorize","tokenURL":"https://graph.qq.com/oauth2.0/token","resourceURL":"https://graph.qq.com/oauth2.0/me","profileURL":"https://graph.qq.com/user/get_user_info","callback":"oauth/qq/callback"},"weibo":{"id":"4076650110","authorize_uri":"https://api.weibo.com/oauth2/authorize","tokenURL":"https://api.weibo.com/oauth2/access_token","resourceURL":"https://api.weibo.com/2/users/show.json","callback":"oauth/weibo/callback"},"wechat":{"id":"wx7804c72000d28202","authorize_uri":"https://open.weixin.qq.com/connect/qrconnect","tokenURL":"https://api.weixin.qq.com/sns/oauth2/access_token","resourceURL":"https://api.weixin.qq.com/sns/userinfo","callback":"oauth/wechat/callback"}}')},fe82:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t._self._c;return e("uc",{staticClass:"m-dashboard-connect"},[e("div",{staticClass:"m-profile-connect"},[e("el-alert",{staticClass:"u-tip",attrs:{title:"如需解绑则需要先绑定一个邮箱",type:"warning","show-icon":""}}),e("div",{staticClass:"m-dashboard-connect-list"},t._l(t.oauth,(function(n,c){return e("el-card",{key:c,staticClass:"box-card"},[e("img",{class:"u-"+c,attrs:{"svg-inline":"",src:t._f("icon")(c)}}),e("p",{staticClass:"u-status"},[t._v(" "+t._s(t.checkStatus(c)?t.getNickname(c):"未绑定")+" ")]),e("el-button",{staticClass:"u-button",attrs:{type:t.checkStatus(c)?"danger":"primary"},on:{click:function(e){t.checkStatus(c)?t.unbind(c):t.bind(c)}}},[t._v(t._s(t.checkStatus(c)?"解除绑定":"绑定"))])],1)})),1)],1)])},i=[],a=(n("caad"),n("2532"),n("ac1f"),n("5319"),n("b547")),o=n("65c2"),r=n("7834");const u={github:`${r.github.authorize_uri}?client_id=${r.github.id}&redirect_uri=${o["__server"]}${r.github.callback}&state=login`,qq:`${r.qq.authorize_uri}?client_id=${r.qq.id}&redirect_uri=${o["__server"]}${r.qq.callback}&response_type=code&scope=get_user_info&state=login`,weibo:`${r.weibo.authorize_uri}?client_id=${r.weibo.id}&response_type=code&redirect_uri=${o["__server"]}${r.weibo.callback}&state=login`,wechat:`${r.wechat.authorize_uri}?appid=${r.wechat.id}&redirect_uri=${o["__server"]}${r.wechat.callback}&response_type=code&scope=snsapi_login&state=login#wechat_redirect`};var s=u,h=n("46e8"),l=location.host.includes("origin")?"origin":"std",d={name:"connect",props:[],data:function(){return{data:{github_name:"",github_id:"",weibo_name:"",weibo_id:"",qq_name:"",qq_unionid:"",wechat_name:"",wechat_unionid:""},oauth:r}},computed:{},methods:{checkStatus:function(t){return"qq"==t||"wechat"==t?!!this.data[t+"_unionid"]:!!this.data[t+"_id"]},getNickname:function(t){return this.data[t+"_name"]||"未知"},bind:function(t){location.href=s[t].replace("state=login","state=bind_".concat(l))},unbind:function(t){var e=this;Object(h["i"])(t).then((function(t){e.$message({message:"解绑成功",type:"success"}),location.reload()}))}},filters:{icon:function(t){return o["__imgPath"]+"image/connect/"+t+".svg"}},mounted:function(){var t=this;Object(h["c"])().then((function(e){t.data=e.data.data}))},components:{uc:a["a"]}},p=d,f=(n("10ab"),n("2877")),b=Object(f["a"])(p,c,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-8742d6ca.27e3b07d.js.map