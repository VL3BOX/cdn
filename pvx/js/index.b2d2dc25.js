(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={index:0},o={index:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-26c7f780":"13127538","chunk-01a119b6":"250c7f18","chunk-54d56770":"f3337ec5","chunk-379f58a6":"a5b672fc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-01a119b6":1,"chunk-54d56770":1,"chunk-379f58a6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-26c7f780":"31d6cfe0","chunk-01a119b6":"c27c5aa7","chunk-54d56770":"371cf476","chunk-379f58a6":"3a4c4564"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://cdn.vl3box.com/pvx/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"55e8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),u=n("6a69"),c=(n("6b30"),n("c5b4"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("8c4f"));r["default"].use(c["a"]);var i=c["a"].prototype.push;c["a"].prototype.push=function(e){return i.call(this,e).catch((function(e){return e}))};var s=[{name:"pvx",path:"/",component:function(){return Promise.all([n.e("chunk-26c7f780"),n.e("chunk-01a119b6"),n.e("chunk-54d56770"),n.e("chunk-379f58a6")]).then(n.bind(null,"0a0d"))},meta:{sidebar:!1}}],l=new c["a"]({routes:s,base:"/pvx",mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});l.beforeEach((function(e,t,n){e.fullPath.includes("/#")&&n(e.fullPath.replace("/#","")),n()}));var f,d=l,p=n("4360"),h=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("Nav",{on:{statusChange:e.statusChange}}),t("Main",{class:e.navStatusClass,attrs:{withoutRight:!0}},[t("div",{staticClass:"m-main"},[t("router-view")],1),t("PvxBacktop",{attrs:{color:"#fff",bgColor:"#324148"}})],1)],1)},v=[],b=n("ade3"),m=n("f1f0"),g=n("19b3"),y=(f={name:"App"},Object(b["a"])(f,"name","Reputation"),Object(b["a"])(f,"data",(function(){return{navStatusClass:"is-regular"}})),Object(b["a"])(f,"components",{Nav:m["a"],PvxBacktop:g["a"]}),Object(b["a"])(f,"methods",{statusChange:function(e){this.navStatusClass=e}}),f),k=y,w=(n("8b75"),n("2877")),x=Object(w["a"])(k,h,v,!1,null,null,null),O=x.exports;r["default"].config.productionTip=!1,r["default"].use(o.a),r["default"].use(u["a"]),new r["default"]({router:d,store:p["a"],render:function(e){return e(O)}}).$mount("#app")},"8b75":function(e,t,n){"use strict";n("55e8")}});
//# sourceMappingURL=index.b2d2dc25.js.map