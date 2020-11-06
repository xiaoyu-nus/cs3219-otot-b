(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"35a9":function(e,t,n){"use strict";n("3fb2")},"3fb2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HomeComponent")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v(" Anime List")]),n("div",{staticClass:"create-anime"},[n("label",{attrs:{for:"create-anime"}},[e._v(" New Anime ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"create-anime-name",placeholder:"Anime name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"text",id:"create-anime-year",placeholder:"Year of production"},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.production,expression:"production"}],attrs:{type:"text",id:"create-anime-pro",placeholder:"Produced by"},domProps:{value:e.production},on:{input:function(t){t.target.composing||(e.production=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.director,expression:"director"}],attrs:{type:"text",id:"create-anime-dir",placeholder:"Director"},domProps:{value:e.director},on:{input:function(t){t.target.composing||(e.director=t.target.value)}}}),n("br"),n("button",{staticClass:"button",on:{click:e.createAnime}},[e._v("Add")])]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._l(e.animes,(function(t,r){return n("div",{key:t._id,staticClass:"anime",attrs:{item:t,index:r},on:{dblclick:function(n){return e.deleteAnime(t._id)}}},[n("p",{staticClass:"name"},[e._v(e._s(t.name))]),n("p",{staticClass:"year"},[e._v(e._s(t.year))]),n("span",{staticClass:"info"},[e._v("Production: "+e._s(t.production))]),n("span",{staticClass:"info"},[e._v("Director: "+e._s(t.director))])])}))],2)},c=[],u=(n("b0c0"),n("96cf"),n("1da1")),s=(n("d81d"),n("5530")),l=n("d4ec"),p=n("bee2"),d=n("7338"),m=n.n(d),f="api/animes/",v=function(){function e(){Object(l["a"])(this,e)}return Object(p["a"])(e,null,[{key:"getAnime",value:function(){return m.a.get(f).then((function(e){var t=e.data,n=t.data.map((function(e){return Object(s["a"])({},e)}));return n})).catch((function(e){console.log(e)}))}},{key:"insertAnime",value:function(e,t,n,r){return m.a.post(f,{name:e,year:t,production:n,director:r})}},{key:"deleteAnime",value:function(e){return m.a.delete("".concat(f).concat(e))}}]),e}(),b=v,h={name:"HomeComponent",data:function(){return{animes:[],error:"",name:"",year:"",production:"",director:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.getAnime();case 3:e.animes=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createAnime:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.insertAnime(e.name,e.year,e.production,e.director);case 2:return t.next=4,b.getAnime();case 4:e.animes=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deleteAnime:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.deleteAnime(e);case 2:return n.next=4,b.getAnime();case 4:t.animes=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},g=h,y=(n("35a9"),n("2877")),_=Object(y["a"])(g,i,c,!1,null,"4f57cf48",null),x=_.exports,w={name:"App",components:{HomeComponent:x}},O=w,j=(n("034f"),Object(y["a"])(O,a,o,!1,null,null,null)),A=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e605bc64.js.map