(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-45012762"],{"0711":function(t,e,a){"use strict";var n={name:"",props:["data"],components:{},data:function(){return{visible:"0"}},model:{prop:"data",event:"update"},watch:{data:function(t){this.visible=t},visible:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},i=(a("ba02"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-visible"},[e("el-form-item",{attrs:{label:"阅读权限"}},[e("el-radio-group",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("el-radio",{attrs:{label:"0"}},[t._v("公开")]),e("el-radio",{attrs:{label:"1"}},[t._v("仅自己可见")]),e("el-radio",{attrs:{label:"2"}},[t._v("仅亲友可见")]),e("el-radio",{attrs:{label:"3",disabled:""}},[t._v("密码可见")]),e("el-radio",{attrs:{label:"4",disabled:""}},[t._v("付费可见")]),e("el-radio",{attrs:{label:"5",disabled:""}},[t._v("粉丝可见")])],1)],1)],1)}),[],!1,null,"509226a0",null);e.a=s.exports},"1fb2":function(t,e,a){"use strict";var n={name:"publish_original",props:["data"],data:function(){return{original:~~this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.original=~~t},original:{deep:!0,handler:function(t){this.$emit("update",~~t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-original"},[e("el-form-item",{attrs:{label:"原创"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},model:{value:t.original,callback:function(e){t.original=e},expression:"original"}})],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},4618:function(t,e,a){"use strict";var n={name:"publish_subtype",props:["data","options","lock"],data:function(){return{subtype:this.data,subtypes:this.options||[]}},model:{prop:"data",event:"update"},watch:{data:function(t){this.subtype=t},subtype:{deep:!0,handler:function(t){this.$emit("update",t)}},options:{deep:!0,handler:function(t){t&&(this.subtypes=t)}}},computed:{frozen:function(){return this.lock}},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-subtype"},[e("el-form-item",{attrs:{label:"类型"}},[e("el-radio-group",{model:{value:t.subtype,callback:function(e){t.subtype=e},expression:"subtype"}},t._l(t.subtypes,(function(a,n){return e("el-radio",{key:n,attrs:{label:n,border:"",disabled:t.frozen&&t.$route.params.id&&t.subtype!=n}},[t._v(t._s(a))])})),1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},"505f":function(t,e,a){"use strict";var n=a("52da"),i={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){n.a.$emit("changeClient",this.client)}},mounted:function(){},components:{}},s=a("2877"),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-client"},[e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("重制")]),e("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():e("el-radio",{attrs:{label:"all"}},[t._v("双端")])],1)],1),t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},"52da":function(t,e,a){"use strict";var n=new(a("2b0e").default);e.a=n},"5a5c":function(t,e,a){"use strict";a("bb22")},"7c00":function(t,e,a){},"7c7e":function(t,e,a){"use strict";var n=a("53ca");a("b64b");e.a=function(t){return!t||(!(!Array.isArray(t)||t.length)||"object"==Object(n.a)(t)&&!Object.keys(t).length)}},"7c9b":function(t,e,a){"use strict";a.r(e);var n=a("2909"),i=(a("d3b7"),a("14d9"),a("85e4")),s=a("b447"),o=a("ef77"),l=a("d0a1"),c=(a("1fb2"),a("505f"),a("adff"),a("b13e"),a("cc72"),a("0711"),a("4618"),a("e9c4"),a("2ef0")),r=a.n(c),u=a("7c7e"),d=a("7b4a"),p=a("bda6"),f=a("41cb");var h=a("fb5f"),m={author:"",pics:[],file:"",data:""},b={name:"publishFacedat",props:["data","client"],components:{UploadAlbum:d.a},data:function(){return{facedat:this.data,object:""}},model:{prop:"data",event:"update"},watch:{data:{immediate:!0,deep:!0,handler:function(t){!t||Object(u.a)(t)?this.facedat=r.a.cloneDeep(m):this.facedat=t}},facedat:{deep:!0,handler:function(t){this.$emit("update",t)}},"facedat.author":function(t){this.$emit("updateMeta",{key:"meta_1",val:t})},"facedat.data":function(t){var e=this.object.nRoleType;this.$emit("updateMeta",{key:"post_subtype",val:h.a[e]})}},computed:{},methods:{selectData:function(t){document.getElementById("face_file").dispatchEvent(new MouseEvent("click"))},uploadData:function(t){var e=this,a=new FormData;a.append("file",t),function(t){return Object(f.$cms)().post("/api/cms/upload/facedata",t)}(a).then((function(t){e.facedat.file=t.data.data[0],e.$message({message:"上传成功",type:"success"})}))},processFile:function(t){var e=t.target.files[0];e&&e.size>16384?this.$message({message:"文件过大，限 16KB 以内",type:"error"}):this.parseAndUpload(e)},parseAndUpload:function(t){if(FileReader&&t){var e=this,a=new FileReader;a.onload=function(a){console.log("读取成功...开始执行分析...");try{e.object=Object(p.a)(a.target.result),e.json=JSON.stringify(e.object)}catch(t){return console.log(t),e.$notify.error({title:"错误",message:"无法读取数据"}),void e.$emit("fail",{file:e.file})}e.object&&e.json&&(setTimeout((function(){return e.$notify({title:"成功",message:"数据读取成功，开始上传",type:"success"})}),0),e.uploadData(t),e.done=!0,e.$emit("success",{file:e.file,json:e.json,object:e.object}))},a.onerror=function(t){e.$notify.error({title:"错误",message:"文件读取异常"})},a.readAsArrayBuffer(t)}}},filters:{},created:function(){},mounted:function(){}},v=a("2877"),_=Object(v.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-facedat"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("① 数据")]),e("el-form-item",{attrs:{label:"数据"}},[e("input",{staticClass:"u-data-input",attrs:{type:"file",id:"face_file",accept:".jx3dat, .dat, .ini"},on:{change:t.processFile}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:t.selectData}},[t._v("上传脸型数据")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.facedat.file,expression:"facedat.file"}],staticClass:"u-data-ready"},[e("i",{staticClass:"el-icon-success"}),t._v(" 已上传 ")])],1),e("el-form-item",{attrs:{label:"分析结果"}},[e("el-input",{attrs:{type:"textarea",rows:6,disabled:""},model:{value:t.facedat.data,callback:function(e){t.$set(t.facedat,"data",e)},expression:"facedat.data"}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("② 美图")]),e("el-form-item",{attrs:{label:"图册"}},[e("UploadAlbum",{model:{value:t.facedat.pics,callback:function(e){t.$set(t.facedat,"pics",e)},expression:"facedat.pics"}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("③ 其它")]),e("el-form-item",{attrs:{label:"作者"}},[e("el-input",{attrs:{placeholder:"请注明原作者"},model:{value:t.facedat.author,callback:function(e){t.$set(t.facedat,"author",e)},expression:"facedat.author"}})],1),t._t("default")],2)}),[],!1,null,null,null).exports,g=a("c402"),y={name:"share",components:{"publish-header":o.a,"publish-title":l.a,"publish-facedat":_},data:function(){return{loading:!1,processing:!1,post:{ID:"",post_status:"publish",post_type:"share",post_title:"",post_subtype:"成男",post_meta:{author:"",pics:[],file:"",data:""},meta_1:"",post_content:"",post_mode:"tinymce",original:0,client:"std",lang:"cn",zlp:"",post_excerpt:"",post_banner:"",post_collection:"",comment:0,allow_gift:1,visible:0},share_types:s,setting:!1}},computed:{id:function(){return~~this.post.ID},data:function(){return this.id?[this.id,this.post]:[this.post]}},methods:{init:function(){var t=this;return this.loading=!0,this.$route.params.id?Object(g.d)(this.$route.params.id).then((function(e){return t.post=e.data.data,e.data.data})).finally((function(){t.loading=!1})):new Promise((function(t,e){t()})).finally((function(){t.loading=!1}))},publish:function(t,e){var a=this;this.post.post_status=t,this.processing=!0,g.e.apply(void 0,Object(n.a)(this.data)).then((function(t){var n=t.data.data;a.done(e,n)})).finally((function(){a.processing=!1}))},done:function(t,e){t?(this.$message({message:"发布成功",type:"success"}),setTimeout((function(){location.href=Object(i.getLink)(e.post_type,e.ID)}),500)):(this.$notify({title:"保存成功",message:"云端草稿保存成功",type:"success"}),this.post=e,this.$route.params.id||this.$router.push({params:{id:e.ID}}))},updateMeta:function(t){this.post[t.key]=t.val},toggleSetting:function(){this.setting=!this.setting}},created:function(){this.post.client=this.$store.state.client,this.init()},watch:{"$route.params.id":function(t){t&&this.init()}}},x=(a("a940"),Object(v.a)(y,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-publish-box m-publish-box-facedata"},[e("publish-header",{attrs:{name:"捏脸分享"}}),e("el-form",{attrs:{"label-position":"left","label-width":"80px"}},[e("div",{staticClass:"m-publish-info"},[e("publish-facedat",{on:{updateMeta:t.updateMeta},model:{value:t.post.post_meta,callback:function(e){t.$set(t.post,"post_meta",e)},expression:"post.post_meta"}}),e("el-form-item",{attrs:{label:"备注"}},[e("publish-title",{attrs:{hideDiv:!0,placeholder:"请填写描述"},model:{value:t.post.post_title,callback:function(e){t.$set(t.post,"post_title",e)},expression:"post.post_title"}})],1)],1),e("div",{staticClass:"m-publish-buttons"},[e("el-button",{attrs:{type:"primary",disabled:t.processing},on:{click:function(e){return t.publish("publish",!0)}}},[t._v("发    布")]),e("el-button",{attrs:{type:"plain",disabled:t.processing},on:{click:function(e){return t.publish("draft",!1)}}},[t._v("保存为草稿")])],1)])],1)}),[],!1,null,null,null));e.default=x.exports},"99f4":function(t,e,a){"use strict";a("7c00")},a1e5:function(t,e,a){"use strict";a("f92d")},a940:function(t,e,a){"use strict";a("ca1f")},abe2:function(t,e,a){"use strict";a("d810")},adff:function(t,e,a){"use strict";var n={name:"publish_excerpt",props:["data"],data:function(){return{excerpt:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.excerpt=t},excerpt:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=(a("99f4"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-excerpt"},[e("el-input",{attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"摘要信息"},model:{value:t.excerpt,callback:function(e){t.excerpt=e},expression:"excerpt"}}),t._t("default")],2)}),[],!1,null,"3228f028",null);e.a=s.exports},b13e:function(t,e,a){"use strict";var n={name:"post_banner",components:{uploadImage:a("5571").a},props:["data"],data:function(){return{banner:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.banner=t},banner:function(t){this.$emit("update",t)}}},i=(a("5a5c"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-banner"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("海报")]),e("uploadImage",{attrs:{info:"非必选。首页海报尺寸1600*280（推荐3200*560支持高分屏），最大30M。","max-size":30},model:{value:t.banner,callback:function(e){t.banner=e},expression:"banner"}})],1)}),[],!1,null,null,null);e.a=s.exports},b447:function(t){t.exports=JSON.parse('{"成男":"成男","成女":"成女","正太":"正太","萝莉":"萝莉"}')},b485:function(t,e,a){},ba02:function(t,e,a){"use strict";a("b485")},bb22:function(t,e,a){},ca1f:function(t,e,a){},cc72:function(t,e,a){"use strict";var n={name:"publish_comment",props:["data"],data:function(){return{comment:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.comment=t},comment:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=(a("a1e5"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-comment"},[e("el-form-item",{attrs:{label:"评论开关"}},[e("el-switch",{attrs:{"active-color":"#13ce66","active-value":0,"inactive-value":1},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),e("div",{staticClass:"m-comment-extend"},[t._t("default")],2)],1)}),[],!1,null,"ca3e4fc0",null);e.a=s.exports},d0a1:function(t,e,a){"use strict";var n={name:"publish_title",props:["data","hideDiv","placeholder"],data:function(){return{title:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.title=t},title:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{},mounted:function(){},components:{}},i=a("2877"),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-title"},[t.hideDiv?t._e():e("el-divider",{attrs:{"content-position":"left"}},[t._v("标题")]),e("el-input",{attrs:{maxlength:50,minlength:2,"show-word-limit":"",required:"",placeholder:t.placeholder||"请填写标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},d810:function(t,e,a){},ef77:function(t,e,a){"use strict";a("b0c0"),a("14d9");var n={name:"publish_header",props:["name"],data:function(){return{}},computed:{},methods:{goBack:function(){window.history.length?this.$router.go(-1):this.$router.push("/")}},mounted:function(){},components:{}},i=(a("abe2"),a("2877")),s=Object(i.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"m-publish-header"},[t("el-page-header",{attrs:{content:this.name},on:{back:this.goBack}}),this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},f92d:function(t,e,a){}}]);
//# sourceMappingURL=chunk-45012762.5859af67.js.map