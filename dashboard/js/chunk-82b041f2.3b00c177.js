(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82b041f2"],{"3efb":function(e,t,o){"use strict";o("bf4e")},bf4e:function(e,t,o){},e097:function(e,t,o){"use strict";o.r(t);o("a4d3"),o("e01a");var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-dashboard m-cooperation"},[e._m(0),t("div",{staticClass:"m-cooperation-ac m-block",domProps:{innerHTML:e._s(e.data)}}),t("div",{staticClass:"m-cooperation-form m-block"},[t("h3",[e._v("【认证说明】")]),e._m(1),t("hr"),e.isSuperAuthor?t("el-alert",{attrs:{title:"签约成功！",type:"success",description:"签约为每赛季审核一次，过期后如不满足条件的将会被取消资格。","show-icon":"",closable:!1}}):e._e(),e.isSuperAuthor||e.checked?e._e():t("el-alert",{attrs:{title:"等待审核！",type:"warning",description:"签约申请提交成功，请耐心等待审核！","show-icon":"",closable:!1}}),e.isSuperAuthor||2!=e.checked?e._e():t("el-alert",{attrs:{title:"申请被驳回",type:"error",description:"请填写有效的联系方式与作品，不符合要求的作品将不会受理。","show-icon":"",closable:!1}}),t("h3",[e._v("【认证信息】")]),t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px","label-position":e.position,disabled:e.isSuperAuthor||!e.checked}},[t("el-form-item",{staticClass:"u-item",attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),t("el-form-item",{staticClass:"u-item",attrs:{label:"QQ",prop:"qq"}},[t("el-input",{attrs:{placeholder:"请输入联系QQ"},model:{value:e.form.qq,callback:function(t){e.$set(e.form,"qq",t)},expression:"form.qq"}})],1),t("el-form-item",{staticClass:"u-item",attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("el-form-item",{staticClass:"u-item",attrs:{label:"社交平台",prop:"weibo"}},[t("el-input",{attrs:{placeholder:"请输入微博/B站地址"},model:{value:e.form.weibo,callback:function(t){e.$set(e.form,"weibo",t)},expression:"form.weibo"}})],1),t("el-form-item",{staticClass:"u-item",attrs:{label:"自述",prop:"description"}},[t("el-input",{attrs:{type:"textarea",rows:8,maxlength:800,placeholder:"详述自己的一些作品","show-word-limit":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),t("el-form-item",{staticClass:"u-btns",attrs:{label:""}},[t("el-button",{staticClass:"u-submit",attrs:{type:"primary",icon:"el-icon-s-promotion",disabled:e.isSuperAuthor||e.processing},on:{click:function(t){return e.submitForm("form")}}},[e._v("提交签约申请")])],1)],1)],1)])},r=[function(){var e=this,t=e._self._c;return t("h2",{staticClass:"u-title"},[t("i",{staticClass:"el-icon-reading"}),e._v(" 签约作者")])},function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("1、以下所有项目请务必填写真实有效，否则将不会处理，多次提交被拒后将不再接受申请。")]),t("p",[e._v("2、自述部分请填写魔盒内发布的有效作品链接（不少于3篇），站外链接将不会作为参考依据。")]),t("p",[e._v(" 3、当成功接受申请后，请加入Q群"),t("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=3Hgmu6jg"}},[e._v("140129951")]),e._v("，不定期发放奖励或其它通知。 ")])])}],s=(o("d3b7"),o("c9d2")),n=o("41cb");function a(e){return Object(n["$cms"])().post("/api/cms/contract-author/log",e)}function c(){return Object(n["$cms"])().get("/api/cms/contract-author/log/mine")}function l(e){return Object(n["$cms"])().get("/api/cms/user/is_super_author/"+e)}var u=o("cc9a"),p=o("2ef0"),m={name:"cooperation",props:[],data:function(){return{position:window.innerWidth<768?"top":"left",form:{nickname:"",qq:"",phone:"",weibo:"",description:""},rules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],qq:[{required:!0,message:"请输入QQ号码",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话",trigger:"blur"}],description:[{required:!0,message:"请认真填写，否则将申请将不会被通过",trigger:"blur"}]},user:s["a"],isSuperAuthor:!1,checked:-1,logs:[],processing:!1,data:""}},computed:{log:function(){return this.logs&&this.logs[0]}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var o=Object(p["pick"])(t.form,["nickname","qq","phone","weibo","description"]);t.processing=!0,a(o).then((function(e){t.checked=0,t.$message.success("提交申请成功，请等待管理审核。")})).catch((function(e){t.$message.error(e.message)})).finally((function(){t.processing=!1}))}}))},checkSuperUser:function(){var e,t,o=this;l(null===(e=this.user)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.uid).then((function(e){o.isSuperAuthor=e.data.data}))},loadContractAuthorLogs:function(){var e=this;c().then((function(t){e.logs=t.data.data.list,e.logs&&e.logs.length&&(e.checked=e.logs[0]["checked"],e.form=e.logs[0])}))},loadAc:function(){var e=this;Object(u["b"])("sign-ac").then((function(t){e.data=t}))},init:function(){this.loadContractAuthorLogs(),this.checkSuperUser(),this.loadAc()}},mounted:function(){this.init()}},f=m,d=(o("3efb"),o("2877")),h=Object(d["a"])(f,i,r,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-82b041f2.3b00c177.js.map