(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b8f7e6c"],{"29fd":function(t,e,a){},"2b04":function(t){t.exports=JSON.parse('{"1":"少林","2":"万花","3":"天策","4":"纯阳","5":"七秀","6":"五毒","7":"唐门","8":"藏剑","9":"丐帮","10":"明教","21":"苍云","22":"长歌","23":"霸刀","24":"蓬莱","25":"凌雪","211":"衍天","212":"药宗","213":"刀宗"}')},"52da":function(t,e,a){"use strict";var i=a("2b0e"),n=new i["default"];e["a"]=n},6259:function(t,e,a){"use strict";a("6ae0")},"6a7f":function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"g",(function(){return s})),a.d(e,"i",(function(){return l})),a.d(e,"l",(function(){return r})),a.d(e,"n",(function(){return u})),a.d(e,"o",(function(){return p})),a.d(e,"m",(function(){return m})),a.d(e,"a",(function(){return d})),a.d(e,"h",(function(){return f})),a.d(e,"d",(function(){return x})),a.d(e,"q",(function(){return g})),a.d(e,"c",(function(){return v})),a.d(e,"p",(function(){return y})),a.d(e,"e",(function(){return b})),a.d(e,"b",(function(){return h})),a.d(e,"k",(function(){return c})),a.d(e,"j",(function(){return o}));a("99af");var i=a("41cb");function n(t){return Object(i["$next"])().get("/api/question/user-exam-paper",{params:t})}function s(t){return Object(i["$next"])().get("api/question/public-list",{params:t})}function l(t){return Object(i["$next"])({proxy:!0}).get("api/question/user-exam-paper/"+t+"?details")}function r(t){return Object(i["$next"])({proxy:!0}).get("api/question/"+t+"/no-answer")}function c(t){return Object(i["$next"])({proxy:!0}).get("/api/question/".concat(t))}function o(t){return Object(i["$next"])().get("/api/question/exam-paper/"+t)}function u(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(i["$next"])({proxy:!0}).post("api/question/user-exam-paper/".concat(t,"/i-finish-all").concat(a?"?force":""),e)}function p(t,e){return Object(i["$next"])({proxy:!0}).post("api/question/user-exam-paper/q/".concat(t,"/answer"),e)}function m(t,e){return Object(i["$next"])({proxy:!0}).get("api/summary-any/"+t+"-"+e+"/stat")}function d(t,e){return Object(i["$next"])({proxy:!0}).put("api/question/exam-paper/"+t+"/opt","",{params:{action:e},withCredentials:!0})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return Object(i["$next"])().get("api/game/exam/random",{params:{count:t}})}function b(t){return Object(i["$next"])().get("api/game/exam/search",{params:t})}function h(t){return Object(i["$next"])().post("api/game/exam/ugc",t)}function x(t){return Object(i["$next"])().post("/api/question/create",t)}function g(t,e){return Object(i["$next"])().put("/api/question/"+t+"/update",e)}function v(t){return Object(i["$next"])().post("/api/question/exam-paper",t)}function y(t,e){return Object(i["$next"])().put("/api/question/exam-paper/"+t,e)}},"6ae0":function(t,e,a){},b09a:function(t){t.exports=JSON.parse('{"c":[{"label":"蓝色","value":"default"},{"label":"绿色","value":"green"},{"label":"橙色","value":"orange"},{"label":"红色","value":"red"},{"label":"紫色","value":"purple"}],"a":[{"label":"剑三老司机","value":"driver"}],"b":[{"label":"官方试卷","value":"official"}],"d":{"subject":["语文","数学","外语","信息","物理","化学","生物","政治","历史","地理","美术","音乐","体育","劳动","理综","文综"],"game":["PVE","PVP","PVX","PVBB"],"play":["副本","宠物","家园","奇遇","成就","阵营","野外","竞技场","切磋","吃鸡"],"domain":["美容","金融","医学","法学"]}}')},b50b:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-client"},[e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{on:{change:t.handleChange},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}},[e("el-radio",{attrs:{label:"std"}},[t._v("重制")]),e("el-radio",{attrs:{label:"origin"}},[t._v("缘起")]),t.forbidAll?t._e():e("el-radio",{attrs:{label:"all"}},[t._v("双端")])],1)],1),t._t("default")],2)},n=[],s=a("52da"),l={name:"publish_client",props:["data","forbidAll"],data:function(){return{client:this.data}},model:{prop:"data",event:"update"},watch:{data:function(t){this.client=t},client:{deep:!0,handler:function(t){this.$emit("update",t)}}},computed:{},methods:{handleChange:function(){s["a"].$emit("changeClient",this.client)}},mounted:function(){},components:{}},r=l,c=a("2877"),o=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=o.exports},c68f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box"},[e("div",{staticClass:"m-back"},[e("el-button",{on:{click:t.goBack}},[t._v("返回列表")])],1),e("el-form",{staticClass:"m-publish-exam",attrs:{"label-position":"left","label-width":"80px"}},[e("publish-client",{model:{value:t.primary.client,callback:function(e){t.$set(t.primary,"client",e)},expression:"primary.client"}}),e("el-form-item",{staticClass:"m-publish-exam-title",attrs:{label:"标题"}},[e("el-input",{attrs:{maxlength:120,minlength:2,"show-word-limit":"",required:"",placeholder:"请填写试卷标题"},model:{value:t.primary.title,callback:function(e){t.$set(t.primary,"title",e)},expression:"primary.title"}})],1),e("el-form-item",{staticClass:"m-publish-exam-desc",attrs:{label:"描述"}},[e("el-input",{attrs:{maxlength:200,minlength:2,"show-word-limit":"",required:"",rows:3,type:"textarea",placeholder:"请填写试卷描述"},model:{value:t.primary.desc,callback:function(e){t.$set(t.primary,"desc",e)},expression:"primary.desc"}})],1),e("el-form-item",{staticClass:"m-publish-exam-common",attrs:{label:"题目"}},[e("div",[t._v("请设置10道题（每道题10分，满分100分），用半角逗号隔开，例如1,2,3")]),e("el-input",{attrs:{"show-word-limit":"",required:"",placeholder:"请填写题目ID序列"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),e("el-form-item",{staticClass:"m-publish-exam-common",attrs:{label:"外链"}},[e("div",[t._v("如果为外链地址，则设置的题目将不会生效")]),e("el-input",{attrs:{"show-word-limit":"",required:"",placeholder:"请填写外链问卷地址"},model:{value:t.primary.iframe,callback:function(e){t.$set(t.primary,"iframe",e)},expression:"primary.iframe"}})],1),e("el-form-item",{staticClass:"m-publish-exam-level",attrs:{label:"难度"}},[e("el-rate",{attrs:{"show-score":"","text-color":"#ff9900","score-template":"{value} 星"},model:{value:t.primary.hardStar,callback:function(e){t.$set(t.primary,"hardStar",e)},expression:"primary.hardStar"}})],1),e("el-form-item",{staticClass:"m-publish-exam-style",attrs:{label:"风格"}},[e("el-select",{attrs:{placeholder:"请选择封面风格"},model:{value:t.primary.style,callback:function(e){t.$set(t.primary,"style",e)},expression:"primary.style"}},t._l(t.styles,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("exam_tags",{staticClass:"m-publish-exam-tags",model:{value:t.primary.tags,callback:function(e){t.$set(t.primary,"tags",e)},expression:"primary.tags"}}),e("el-form-item",{staticClass:"m-publish-exam-content",attrs:{label:""}},[e("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("发布试卷")])],1)],1)],1)},n=[],s=(a("14d9"),a("d3b7"),a("b64b"),a("25f0"),a("d81d"),a("b50b")),l=a("f4ce"),r=a("c9d2"),c=a("6a7f"),o=a("b09a"),u=a("85e4"),p={name:"exam_paper",components:{exam_tags:l["a"],"publish-client":s["a"]},props:[],data:function(){return{primary:{client:"std",title:"",desc:"",questionList:[],hardStar:0,tags:[],corner:"",medalAward:"",style:"default",iframe:""},list:"",isSuper:r["a"].isEditor(),awards:o["a"],marks:o["b"],styles:o["c"],processing:!1,loading:!1}},computed:{id:function(){return this.$route.params.id}},watch:{},methods:{goBack:function(){this.$router.push({name:"index",params:{type:3}})},publish:function(){var t=this;this.processing=!0,this.primary.questionList=this.checkList(),this.primary.questionList&&(this.id?Object(c["p"])(this.id,this.primary,this).then((function(e){t.success(e)})).finally((function(){t.processing=!1})):Object(c["c"])(this.primary,this).then((function(e){t.success(e)})).finally((function(){t.processing=!1})))},success:function(t){var e=this;this.$message({message:t.data.msg||"提交成功",type:"success"}),setTimeout((function(){location.href=Object(u["getLink"])("paper",e.id||t.data.data.id)}),500)},loadData:function(){var t=this;this.loading=!0,Object(c["j"])(this.id).then((function(e){var a=e.data;t.primary=a,t.primary.tags=JSON.parse(a.tags),t.primary.questionList=JSON.parse(a.questionList),t.list=t.primary.questionList.toString()})).finally((function(){t.loading=!1}))},checkList:function(){var t=this,e=this.list.split(",");return e.length>10||!e.length?(this.$alert("请设置10道题，每道题10分，满分100分","提醒",{confirmButtonText:"确定",callback:function(){t.processing=!1}}),!1):e.map((function(t){return~~t}))}},created:function(){this.id&&this.loadData()}},m=p,d=(a("da40"),a("2877")),f=Object(d["a"])(m,i,n,!1,null,null,null);e["default"]=f.exports},da40:function(t,e,a){"use strict";a("29fd")},f4ce:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-form-item",{attrs:{label:"标签"}},[e("div",{staticClass:"m-publish-exam-tags-list"},[e("el-checkbox-group",{model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("方向")])]),t._l(t.options.game,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("门派")])]),t._l(t.school,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("玩法")])]),t._l(t.options.play,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("学科")])]),t._l(t.options.subject,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2),e("div",{staticClass:"u-group"},[e("label",{staticClass:"el-checkbox"},[e("span",{staticClass:"el-checkbox__label u-group-label"},[t._v("领域")])]),t._l(t.options.domain,(function(a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(a))])}))],2)])],1)])},n=[],s=(a("a434"),a("14d9"),a("b09a")),l=a("2b04"),r={name:"exam_tags",props:["tags"],data:function(){return{options:s["d"],school:l,inputVisible:!1,inputValue:"",list:this.tags}},model:{prop:"tags",event:"update"},watch:{tags:function(t){this.list=t},list:function(t){this.$emit("update",t)}},methods:{handleClose:function(t){this.custom.splice(this.custom.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.custom.push(t),this.inputVisible=!1,this.inputValue=""}},mounted:function(){},components:{}},c=r,o=(a("6259"),a("2877")),u=Object(o["a"])(c,i,n,!1,null,"fa707c94",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-1b8f7e6c.7d6843f5.js.map