(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62f57d53"],{1856:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"d",(function(){return o})),s.d(e,"c",(function(){return c})),s.d(e,"a",(function(){return r})),s.d(e,"e",(function(){return a}));var i=s("41cb");function n(t){return Object(i.$helper)()({method:"GET",url:"/api/my/namespaces",params:t})}function r(t){return Object(i.$cms)().post("/api/cms/namespace",t)}function a(t,e){return Object(i.$cms)().put("/api/cms/namespace/".concat(t),e)}function c(t){return Object(i.$cms)().get("/api/cms/namespace/".concat(t))}function o(t){return Object(i.$cms)().get("/api/cms/namespace-key",{params:{key:t}})}},"5dd0":function(t,e,s){"use strict";s("6870")},6870:function(t,e,s){},"878c":function(t,e,s){"use strict";s.r(e);s("b0c0"),s("9911"),s("d3b7"),s("25f0"),s("caad"),s("2532"),s("ac1f"),s("5319"),s("14d9");var i=s("bd13"),n=s("ef77"),r=s("1856"),a=s("c9d2"),c=s("2ef0"),o=s.n(c),l={key:"",desc:"",link:""},u={name:"namespace",props:[],data:function(){return{name:"剑三铭牌",form:o.a.cloneDeep(l),count:0,available:!1,success:!1,processing:!1,rules:{key:[{required:!0,message:"请输入铭牌名称",trigger:"blur"}],link:[{required:!0,message:"请输入链接网址",trigger:"blur"}]}}},computed:{data:function(){return{key:this.form.key,desc:this.form.desc,link:"https://"+this.form.link,source_type:"custom"}},isEditMode:function(){return!!this.$route.params.id},ready:function(){return this.isEditMode?this.available&&this.form.link:this.available&&this.form.link&&this.count}},methods:{checkKey:function(t){t?(this.form.key=Object(i.a)(this.form.key).kill().removeSpace().toString(),this.form.key!=this.key_cache?this.checkAvailable():this.available=!0):this.available=!0},checkLink:function(t){if(t){var e=this.form.link;(e.includes("http://")||e.includes("https://"))&&(this.form.link=e.replace(/https?\:\/\//,""))}},checkAvailable:function(){var t=this;Object(r.d)(this.form.key).then((function(e){e.data.data?t.available=!1:t.available=!0}))},onSubmit:function(){var t=this;if(""==this.form.desc){var e=a.a.getInfo();this.data.desc=e.name+"创建"}this.processing=!0,this.isEditMode?Object(r.e)(this.namespace_id,this.data).then((function(){t.onSuccess()})).finally((function(){t.processing=!1})):Object(r.a)(this.data).then((function(){t.onSuccess(),t.count-=1,t.form=o.a.cloneDeep(l)})).finally((function(){t.processing=!1}))},onSuccess:function(){var t=this;this.success=!0,this.$notify.success({title:"成功",message:"提交成功",showClose:!1}),setTimeout((function(){t.$router.push({name:"bucket_namespace"})}),500)}},watch:{"form.key":function(t){this.checkKey(t)},"form.link":function(t){this.checkLink(t)}},created:function(){var t=this;a.a.getAsset().then((function(e){t.count=e.namespace_card_count}))},mounted:function(){var t=this;this.namespace_id=this.$route.params.id,this.namespace_id&&Object(r.c)(this.namespace_id).then((function(e){var s=e.data.data,i=s.key,n=s.desc,r=s.link;t.key_cache=i,t.form={key:i,desc:n,link:r}})),""==this.form.key&&(this.available=!0)},components:{pubheader:n.a}},h=(s("5dd0"),s("2877")),m=Object(h.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-dashboard-publish-namespace m-publish-box"},[e("pubheader",{attrs:{name:t.name,localDraft:!1}},[t._t("header")],2),e("div",{staticClass:"m-publish-namespace-box"},[e("header",{staticClass:"m-publish-namespace-header"},[t._m(0),e("div",{staticClass:"u-count"},[e("span",{staticClass:"u-count-txt"},[t._v(" 当前可建铭牌数： "),e("b",[t._v(t._s(t.count))]),t._v(" 个 ")]),t._m(1)])]),t.success?e("div",{staticClass:"m-namspace-tips"},[e("el-alert",{attrs:{title:"提交成功，请等待审核",type:"success","show-icon":""}})],1):t._e(),e("el-form",{staticClass:"m-publish-namespace-form",attrs:{rules:t.rules,model:t.form}},[e("el-form-item",{attrs:{label:"关键词",prop:"key"}},[e("el-input",{attrs:{placeholder:"全局唯一关键词"},model:{value:t.form.key,callback:function(e){t.$set(t.form,"key",e)},expression:"form.key"}}),t.available?t._e():e("el-alert",{attrs:{title:"已有关键词，请重新输入",type:"error","show-icon":""}})],1),e("el-form-item",{attrs:{label:"链接",prop:"link"}},[e("el-input",{attrs:{placeholder:"请输入跳转地址"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}},[e("template",{slot:"prepend"},[t._v("https://")])],2)],1),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{attrs:{placeholder:"请输入关于铭牌的描述",maxlength:"30","show-word-limit":""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),e("el-form-item",{attrs:{label:""}},[e("el-button",{staticClass:"u-submit",attrs:{type:"primary",disabled:!t.ready||t.processing},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"u-tip"},[this._v(' 铭牌是一个可以通过关键词快速访问的功能，例如定义铭牌 "某某气纯宏"，则可以在浏览器地址栏中通过快速输入 '),t("a",{attrs:{href:"https://剑网3.com/某某气纯宏",target:"_blank"}},[t("b",[this._v("剑网3.com/某某气纯宏")])]),this._v(" 访问你输入的链接 ")])},function(){var t=this._self._c;return t("a",{staticClass:"u-btn-buy el-button el-button--primary el-button--mini",attrs:{href:"/vip/namespace?from=dashboard_namespace_create",target:"_blank"}},[t("span",{staticClass:"el-icon-shopping-cart-2"}),this._v("购买铭牌 ")])}],!1,null,null,null);e.default=m.exports},abe2:function(t,e,s){"use strict";s("d810")},bd13:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=function(t){return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()};class n{constructor(t){if("string"!==i(t))throw new Error("[Sterilizer::init] params should be string");this._symbols={"`":"`","~":"~","!":"!","@":"@","#":"#",$:"\\$","%":"%","^":"\\^","&":"&","*":"\\*","-":"\\-",_:"_","=":"=","+":"+","(":"\\(",")":"\\)","[":"\\[","]":"\\]","{":"\\{","}":"\\}","|":"\\|","\\":"\\\\","/":"/","?":"\\?",":":":",";":";","'":"'",'"':'"',">":">","<":"<",",":",",".":"\\."},this.symbols=Object.keys(this._symbols),this.regs=Object.values(this._symbols),this.str=t,this._str=t}toString(){return this._str}_detected(t){let e=i(t);if(!["string","array","set"].includes(e))throw new Error("[Sterilizer::remove] params should be string|array|set");return t}_sterilize(t){t=[...t].join("");let e=new RegExp(`[${t}]`,"gm");return this._str=this._str.replace(e,""),this}kill(t){let e=null;if(null==t)e=new Set(this.regs);else{this._detected(t),e=new Set;let s=new Set(t);for(let t of s)this.symbols.includes(t)&&e.add(this._symbols[t])}return this._sterilize(e)}live(t){this._detected(t);let e=new Set(this.regs);for(let s of t)this.symbols.includes(s)&&e.delete(this._symbols[s]);return this._sterilize(e)}safe(){return this.kill(["&","<",">",'"',"'","+",":","/","?","=","#","%"])}removeHSC(){return this.kill(["&","<",">",'"',"'"])}removeURL(){return this.kill(["+",":","/","?","=","&","#","%"])}removeSpace(){return this._str=this._str.replace(/\s/gm,""),this}remove(t,e){let s=new RegExp(""+t,"gm");return e=void 0!==e?e:"",this._str=this._str.replace(s,e),this}removeHTMLtag(){return this._str=this._str.replace(/<[^>]+>/gm,""),this}isDirty(t){return t?this.str.includes(t):this.symbols.some(t=>this.str.includes(t))}}function r(t){return new n(t)}},d810:function(t,e,s){},ef77:function(t,e,s){"use strict";s("b0c0"),s("14d9");var i={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},n=(s("abe2"),s("2877")),r=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=chunk-62f57d53.77dc314e.js.map