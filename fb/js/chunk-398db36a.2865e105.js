(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-398db36a"],{"4bb4":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t._self._c;return t.maptree?n("div",{staticClass:"m-fb-map"},t._l(t.maplist,(function(a){return n("img",{key:a,ref:"fb_map_img",refInFor:!0,staticClass:"u-map",attrs:{src:t.mapLink(t.mapid,a),alt:t.fb}})})),0):t._e()},i=[],s=a("65c2"),r=a("bc3a"),u=a.n(r);function o(){return u.a.get(s["__dataPath"]+"map/data/map_tree.json")}var p={name:"JMap",props:[],data:function(){return{loading:!0}},computed:{fb:function(){return this.$store.state.fb||this.$store.state.default_fb},dungeons:function(){return this.$store.getters.dungeons},mapid:function(){var t;return null===(t=this.dungeons)||void 0===t?void 0:t[this.fb]["maps"][0]["map_id"]},maplist:function(){return this.maptree[this.mapid]},maptree:function(){return this.$store.state.maptree}},watch:{mapid:function(t){}},methods:{loaded:function(){this.loading=!1},mapLink:function(t,n){return s["__imgPath"]+"map/maps/map_"+t+"_"+n+".png"}},mounted:function(){var t=this;o().then((function(n){t.$store.state.maptree=n.data}))}},c=p,m=(a("6a14"),a("2877")),f=Object(m["a"])(c,e,i,!1,null,null,null);n["default"]=f.exports},"6a14":function(t,n,a){"use strict";a("cb1a")},cb1a:function(t,n,a){}}]);
//# sourceMappingURL=chunk-398db36a.2865e105.js.map