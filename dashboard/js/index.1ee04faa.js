(function(n){function e(e){for(var t,a,r=e[0],s=e[1],i=e[2],f=0,d=[];f<r.length;f++)a=r[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var n,e=0;e<o.length;e++){for(var c=o[e],t=!0,a=1;a<c.length;a++){var r=c[a];0!==u[r]&&(t=!1)}t&&(o.splice(e--,1),n=s(s.s=c[0]))}return n}var t={},a={index:0},u={index:0},o=[];function r(n){return s.p+"js/"+({}[n]||n)+"."+{"chunk-1ecfef41":"48c4a876","chunk-1ed61999":"20aa0b4c","chunk-1f9fd118":"43fd6cb4","chunk-231c721e":"04b1a873","chunk-263938f7":"12a0400d","chunk-291c248f":"1e4b43c2","chunk-307769b9":"8df3f887","chunk-343c3352":"14b45f5a","chunk-3cf302a2":"eb8e66c0","chunk-4dc7579f":"683fff17","chunk-4fde356f":"a8d50a7d","chunk-47c2a392":"dd678d97","chunk-7598af95":"ebac80a1","chunk-502e88a6":"657124f3","chunk-5dbcfb7a":"b5f03187","chunk-646363a7":"14c4dc1a","chunk-6b125c7e":"73dc7255","chunk-29af8e0d":"3b80b8a2","chunk-2abf9405":"ac4d7ff5","chunk-5a6ac67a":"1a1e09e1","chunk-70d35c07":"26fb0356","chunk-736a354d":"09ed254f","chunk-7d8d2d45":"c7e705b7","chunk-819e7c7c":"c0ab3185","chunk-8742d6ca":"27e3b07d","chunk-db5bb51e":"9b09a997","chunk-e6cd4ee8":"cd4ca83a","chunk-6c3c8762":"21dda21d","chunk-724cbf56":"34cfe574","chunk-7b0e1dbf":"7a086d9f","chunk-7cf175ed":"ceeb455d","chunk-82b041f2":"3b00c177","chunk-a485d79a":"c7108d0f","chunk-eadecafa":"3e4da1f8","chunk-fe41893c":"49da7c08"}[n]+".js"}function s(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(n){var e=[],c={"chunk-1ecfef41":1,"chunk-1ed61999":1,"chunk-1f9fd118":1,"chunk-231c721e":1,"chunk-263938f7":1,"chunk-291c248f":1,"chunk-307769b9":1,"chunk-343c3352":1,"chunk-3cf302a2":1,"chunk-4dc7579f":1,"chunk-4fde356f":1,"chunk-47c2a392":1,"chunk-7598af95":1,"chunk-502e88a6":1,"chunk-5dbcfb7a":1,"chunk-646363a7":1,"chunk-6b125c7e":1,"chunk-29af8e0d":1,"chunk-2abf9405":1,"chunk-5a6ac67a":1,"chunk-70d35c07":1,"chunk-736a354d":1,"chunk-7d8d2d45":1,"chunk-819e7c7c":1,"chunk-8742d6ca":1,"chunk-db5bb51e":1,"chunk-e6cd4ee8":1,"chunk-6c3c8762":1,"chunk-724cbf56":1,"chunk-7b0e1dbf":1,"chunk-7cf175ed":1,"chunk-82b041f2":1,"chunk-a485d79a":1,"chunk-eadecafa":1,"chunk-fe41893c":1};a[n]?e.push(a[n]):0!==a[n]&&c[n]&&e.push(a[n]=new Promise((function(e,c){for(var t="css/"+({}[n]||n)+"."+{"chunk-1ecfef41":"a02d81ef","chunk-1ed61999":"ae5fc5c7","chunk-1f9fd118":"a7bbbba4","chunk-231c721e":"999f724a","chunk-263938f7":"4b370131","chunk-291c248f":"9b1a6b05","chunk-307769b9":"90e7d8bb","chunk-343c3352":"9b1a6b05","chunk-3cf302a2":"b865702e","chunk-4dc7579f":"3dad8990","chunk-4fde356f":"268c6e79","chunk-47c2a392":"d90ac10c","chunk-7598af95":"984b063c","chunk-502e88a6":"2d0e6cba","chunk-5dbcfb7a":"0caabdf0","chunk-646363a7":"72ad67ed","chunk-6b125c7e":"ce2a9c28","chunk-29af8e0d":"9ad743d4","chunk-2abf9405":"54f86483","chunk-5a6ac67a":"3f570387","chunk-70d35c07":"90db6469","chunk-736a354d":"9c26d1d3","chunk-7d8d2d45":"df96141c","chunk-819e7c7c":"41e34023","chunk-8742d6ca":"05c22b39","chunk-db5bb51e":"c3c61c72","chunk-e6cd4ee8":"1fbdeb87","chunk-6c3c8762":"510af41d","chunk-724cbf56":"d8e8d018","chunk-7b0e1dbf":"08d9dc27","chunk-7cf175ed":"4817ab36","chunk-82b041f2":"3c3d5fa2","chunk-a485d79a":"9efc80b0","chunk-eadecafa":"3f07197c","chunk-fe41893c":"3d2f8c50"}[n]+".css",u=s.p+t,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var i=o[r],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===t||f===u))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){i=d[r],f=i.getAttribute("data-href");if(f===t||f===u)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var t=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete a[n],h.parentNode.removeChild(h),c(o)},h.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){a[n]=0})));var t=u[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,c){t=u[n]=[e,c]}));e.push(t[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=r(n);var d=new Error;i=function(e){f.onerror=f.onload=null,clearTimeout(h);var c=u[n];if(0!==c){if(c){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+t+": "+a+")",d.name="ChunkLoadError",d.type=t,d.request=a,c[1](d)}u[n]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(e)},s.m=n,s.c=t,s.d=function(n,e,c){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)s.d(c,t,function(e){return n[e]}.bind(null,t));return c},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="https://cdn.vl3box.com/dashboard/",s.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var h=f;o.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("7ea5")},2433:function(n,e,c){},3131:function(n,e,c){"use strict";c("f92e")},4435:function(n,e,c){"use strict";c("2433")},4678:function(n,e,c){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"64030","./ms-my.js":"64030","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(n){var e=u(n);return c(e)}function u(n){if(!c.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}a.keys=function(){return Object.keys(t)},a.resolve=u,n.exports=a,a.id="4678"},"7cb7":function(n,e,c){var t={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function a(n){var e=u(n);return c(e)}function u(n){if(!c.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}a.keys=function(){return Object.keys(t)},a.resolve=u,n.exports=a,a.id="7cb7"},"7ea5":function(n,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),a=c("4eb5"),u=c.n(a),o=c("5c96"),r=c.n(o),s=(c("0fae"),c("6a69")),i=(c("6b30"),c("c5b4"),c("d3b7"),c("3ca3"),c("ddb0"),c("caad"),c("2532"),c("ac1f"),c("5319"),c("8c4f")),f=i["a"].prototype.push;i["a"].prototype.push=function(n){return f.call(this,n).catch((function(n){return n}))};var d=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-2abf9405")]).then(c.bind(null,"1e4b"))},h=function(){return c.e("chunk-7cf175ed").then(c.bind(null,"33dee"))},l=function(){return Promise.all([c.e("chunk-4fde356f"),c.e("chunk-47c2a392")]).then(c.bind(null,"b54a"))},b=function(){return c.e("chunk-4dc7579f").then(c.bind(null,"d51a"))},m=function(){return c.e("chunk-7b0e1dbf").then(c.bind(null,"9df5"))},p=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-5a6ac67a")]).then(c.bind(null,"9be6"))},k=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-7d8d2d45")]).then(c.bind(null,"a83c"))},j=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-e6cd4ee8")]).then(c.bind(null,"3f95"))},v=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-819e7c7c")]).then(c.bind(null,"4039"))},g=function(){return c.e("chunk-1ed61999").then(c.bind(null,"ff9a"))},y=function(){return c.e("chunk-502e88a6").then(c.bind(null,"88bc"))},w=function(){return c.e("chunk-343c3352").then(c.bind(null,"e963"))},_=function(){return c.e("chunk-646363a7").then(c.bind(null,"f516"))},x=function(){return c.e("chunk-291c248f").then(c.bind(null,"31dd"))},z=function(){return c.e("chunk-eadecafa").then(c.bind(null,"6d24"))},O=function(){return c.e("chunk-307769b9").then(c.bind(null,"337f"))},M=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-db5bb51e")]).then(c.bind(null,"b3b1"))},P=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-29af8e0d")]).then(c.bind(null,"4208"))},C=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-736a354d")]).then(c.bind(null,"7cb6"))},L=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-70d35c07")]).then(c.bind(null,"b622a"))},T=function(){return Promise.all([c.e("chunk-6b125c7e"),c.e("chunk-8742d6ca")]).then(c.bind(null,"fe82"))},E=function(){return c.e("chunk-724cbf56").then(c.bind(null,"f121"))},N=function(){return c.e("chunk-231c721e").then(c.bind(null,"0fe0"))},S=function(){return c.e("chunk-82b041f2").then(c.bind(null,"e097"))},$=function(){return c.e("chunk-263938f7").then(c.bind(null,"c6bd"))},D=function(){return c.e("chunk-1ecfef41").then(c.bind(null,"7984"))},I=function(){return c.e("chunk-3cf302a2").then(c.bind(null,"b8fd"))},Y=function(){return c.e("chunk-a485d79a").then(c.bind(null,"ed5e"))},A=function(){return c.e("chunk-5dbcfb7a").then(c.bind(null,"8435"))},B=function(){return c.e("chunk-6c3c8762").then(c.bind(null,"b286"))};t["default"].use(i["a"]);var H=[{name:"index",path:"/",component:d},{name:"msg",path:"/msg",component:h},{name:"letter",path:"/letter",component:l},{name:"fav",path:"/fav/:subtype?",component:b},{name:"purchases",path:"/purchases",component:m},{name:"frame",path:"/frame",component:p},{name:"theme",path:"/theme",component:k},{name:"emotion",path:"/emotion",component:j},{name:"honor",path:"/honor",component:v},{name:"mall",path:"/mall",component:I},{name:"orders",path:"/orders",component:g},{name:"packet",path:"/packet",component:y},{name:"boxcoin",path:"/boxcoin",component:w},{name:"cny",path:"/cny",component:x},{name:"points",path:"/points",component:_},{name:"tasks",path:"/tasks",component:z},{name:"card",path:"/card",component:O},{name:"profile",path:"/profile",component:M},{name:"avatar",path:"/avatar",component:P},{name:"pwd",path:"/pwd",component:C},{name:"email",path:"/email",component:L},{name:"connect",path:"/connect",component:T},{name:"config",path:"/config",component:E},{name:"cooperation",path:"/cooperation",component:S},{name:"privacy",path:"/privacy",component:N},{name:"address",path:"/address",component:D},{name:"order-detail",path:"/mall-detail/:id",component:Y},{name:"feedback",path:"/feedback",component:$,redirect:{name:"feedback_index"},children:[{name:"feedback_index",path:"/feedback",component:function(){return c.e("chunk-fe41893c").then(c.bind(null,"39a2"))}},{name:"feedback_erase",path:"/feedback/erase",component:function(){return c.e("chunk-1f9fd118").then(c.bind(null,"954e"))}},{name:"feedback_single",path:"/feedback/:id",component:function(){return Promise.all([c.e("chunk-4fde356f"),c.e("chunk-7598af95")]).then(c.bind(null,"b8d3"))}}]},{name:"invitation_creators",path:"/callback/invitation/creators",component:A},{name:"invitation_kith",path:"/callback/invitation/kith",component:B}],U=new i["a"]({routes:H,mode:"history",base:"/dashboard"});U.beforeEach((function(n,e,c){n.fullPath.includes("/#")&&c(n.fullPath.replace("/#","")),c()}));var q=U,F=c("2f62"),J=c("8e44");t["default"].use(F["a"]);var V={state:{userdata:"",client:location.href.includes("origin")?"origin":"std",isTeammate:!1},mutations:{setIsTeammate:function(n,e){n.isTeammate=e}},getters:{},actions:{getIsTeammate:function(n){var e=n.commit;Object(J["e"])().then((function(n){e("setIsTeammate",n.data.data)})).catch((function(n){console.log(n)}))}},modules:{}},K=new F["a"].Store(V),R=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("Breadcrumb",{attrs:{name:"个人中心",slug:"dashboard",root:"/dashboard",crumbEnable:!0}},[e("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 341.3 341.3","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[e("path",{attrs:{d:"M136.6 137.2h67.1v67.1h-67.1zM36 36.5h67.1v67.1H36zM136.6 237.8h67.1v67.1h-67.1zM36 137.2h67.1v67.1H36zM36 237.8h67.1v67.1H36zM237.2 36.5h67.1v67.1h-67.1zM136.6 36.5h67.1v67.1h-67.1zM237.2 137.2h67.1v67.1h-67.1zM237.2 237.8h67.1v67.1h-67.1z"}})]),e("Info")],1),e("LeftSidebar",[e("Nav")],1),e("Main",{staticClass:"m-dashboard-container",attrs:{withoutRight:!0}},[e("router-view")],1)],1)},G=[],Q=function(){var n=this,e=n._self._c;return e("div",{staticClass:"m-info"},[e("div",{staticClass:"u-stat"}),e("div",{staticClass:"u-home"},[e("a",{staticClass:"el-button el-button--default is-plain",attrs:{href:n.home}},[e("svg",{class:"u-home-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M256 152.96L79.894 288.469v181.549h141.507V336.973h75.175v133.045h135.531V288.469z"}}),e("path",{attrs:{d:"M439.482 183.132V90.307h-74.166v35.77L256 41.982 0 238.919l35.339 45.936L256 115.062l220.662 169.794L512 238.92z"}})]),n._v("个人主页")])])])},W=[],X=c("85e4"),Z=c("c9d2"),nn={name:"Info",props:[],data:function(){return{uid:Z["a"].getInfo().uid}},computed:{home:function(){return Object(X["authorLink"])(this.uid)}},methods:{},mounted:function(){}},en=nn,cn=(c("b760"),c("2877")),tn=Object(cn["a"])(en,Q,W,!1,null,null,null),an=tn.exports,un=(c("b0c0"),function(){var n=this,e=n._self._c;return e("nav",{staticClass:"m-nav"},[n._m(0),n._l(n.navList,(function(c){return e("div",{key:c.group_name},[e("h5",{staticClass:"u-title"},[n._v(n._s(c.group_name))]),e("div",{staticClass:"m-nav-group"},n._l(c.children,(function(c){return e("router-link",{key:c.path,class:n.isProfile(c.path)||n.isTheme(c.path)||n.isMall(c.path)||n.isMsg(c.path),attrs:{to:c.path}},[e("i",{class:c.icon}),e("span",[n._v(n._s(c.name))])])})),1)])}))],2)}),on=[function(){var n=this,e=n._self._c;return e("a",{staticClass:"m-nav-publish el-button el-button--primary",attrs:{href:"/publish",target:"_blank"}},[e("span",[n._v("前往创作中心")])])}],rn=c("65c2"),sn=(c("2ca0"),function(n){return"/dashboard/"+n}),fn=c("c243"),dn=["profile","avatar","pwd","connect","email","address"],hn=["theme","frame","emotion","honor"],ln=["mall","orders"],bn=["msg","letter"],mn={name:"Nav",data:function(){return{feedback:rn["feedback"],navList:fn}},computed:{},methods:{catg_url:function(n){return sn("#/".concat(n))},isProfile:function(n){return"/profile"===n&&dn.includes(this.$route.name)?"on":""},isTheme:function(n){return"/frame"===n&&hn.includes(this.$route.name)?"on":""},isMall:function(n){return"/mall"===n&&ln.includes(this.$route.name)?"on":""},isMsg:function(n){return"/msg"===n&&bn.includes(this.$route.name)?"on":""}},mounted:function(){}},pn=mn,kn=(c("3131"),Object(cn["a"])(pn,un,on,!1,null,null,null)),jn=kn.exports,vn=function(){"www.jx3box.com"!=location.hostname&&"origin.jx3box.com"!=location.hostname||Z["a"].isLogin()||(Z["a"].destroy(),Z["a"].toLogin())},gn={name:"dashboard",props:[],data:function(){return{}},methods:{},created:function(){vn()},components:{Info:an,Nav:jn}},yn=gn,wn=(c("4435"),Object(cn["a"])(yn,R,G,!1,null,null,null)),_n=wn.exports;t["default"].config.productionTip=!1,t["default"].use(u.a),t["default"].use(r.a),t["default"].use(s["a"]),new t["default"]({router:q,store:K,render:function(n){return n(_n)}}).$mount("#app")},"8e44":function(n,e,c){"use strict";c.d(e,"d",(function(){return o})),c.d(e,"a",(function(){return s})),c.d(e,"b",(function(){return r})),c.d(e,"e",(function(){return i})),c.d(e,"c",(function(){return f})),c.d(e,"f",(function(){return d}));var t=c("41cb"),a=c("c1df"),u=c.n(a);function o(n){return Object(t["$next"])().get("/api/user/"+n+"/medals")}function r(){return Object(t["$cms"])().get("/api/cms/user/my/info",{params:{__no_cache:1}})}function s(n){return Object(t["$pay"])().get("/api/my/asserts/history",{params:{start:n||u()().format("YYYYMMDD"),end:u()().add(1,"day").format("YYYYMMDD")}})}function i(){return Object(t["$cms"])().get("/api/cms/config/teammates/check")}function f(){return Object(t["$cms"])().get("/api/cms/config/teammates")}function d(n){return Object(t["$cms"])().post("/api/cms/upload",n)}},b760:function(n,e,c){"use strict";c("b812")},b812:function(n,e,c){},c243:function(n){n.exports=JSON.parse('[{"group_name":"我的仓库","children":[{"path":"/msg","name":"我的消息","icon":"el-icon-bell"},{"path":"/fav","name":"收藏订阅","icon":"el-icon-star-off"},{"path":"/purchases","name":"付费资源","icon":"el-icon-shopping-cart-2"},{"path":"/frame","name":"主题装扮","icon":"el-icon-brush"}]},{"group_name":"权益中心","children":[{"path":"/boxcoin","name":"我的盒币","icon":"el-icon-coin"},{"path":"/cny","name":"我的金箔","icon":"el-icon-wallet"},{"path":"/points","name":"我的银铛","icon":"el-icon-sugar"},{"path":"/card","name":"我的卡密","icon":"el-icon-bank-card"}]},{"group_name":"账号中心","children":[{"path":"/profile","name":"资料设置","icon":"el-icon-user"},{"path":"/privacy","name":"隐私设置","icon":"el-icon-ship"},{"path":"/config","name":"全局设置","icon":"el-icon-setting"},{"path":"/cooperation","name":"签约作者","icon":"el-icon-reading"}]},{"group_name":"服务中心","children":[{"path":"/mall","name":"订单中心","icon":"el-icon-shopping-bag-1"},{"path":"/tasks","name":"任务中心","icon":"el-icon-coffee-cup"},{"path":"/feedback","name":"反馈中心","icon":"el-icon-phone-outline"}]}]')},f92e:function(n,e,c){}});
//# sourceMappingURL=index.1ee04faa.js.map