(function(t){function e(e){for(var r,o,c=e[0],s=e[1],i=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fac7fc67"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"cb01b4c2"}[t]+".css",a=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0285":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={},c=u,s=(n("034f"),n("2877")),i=Object(s["a"])(c,o,a,!1,null,null,null),l=i.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:n("7081"),alt:""}}),r("div",{staticClass:"right-contents"},[t._m(0),r("router-link",{staticClass:"blue-button",attrs:{to:"/test"}},[t._v("Let's start!")])],1)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("英語の発音の違い"),n("br"),t._v("を学習する")])}],m={name:"Home",components:{}},v=m,h=(n("93e2"),Object(s["a"])(v,p,d,!1,null,"7272cdb2",null)),b=h.exports,g=n("eeac");r["a"].use(f["a"]);var _=[{path:"/",name:"Home",component:b},{path:"/test",name:"Test",component:function(){return n.e("about").then(n.bind(null,"78c1"))}},{path:"/result",name:"Result",component:g["a"]}],y=new f["a"]({routes:_}),w=y,O=n("2f62");r["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:w,store:j,render:function(t){return t(l)}}).$mount("#app")},7081:function(t,e,n){t.exports=n.p+"img/image1.31231311.png"},"85ec":function(t,e,n){},"93e2":function(t,e,n){"use strict";n("a22c")},a22c:function(t,e,n){},bdeb:function(t,e,n){"use strict";n("0285")},eeac:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"results"},[n("p",[t._v("あなたの得点は"+t._s(t.count_all)+"問中")]),n("div",{staticClass:"corrects"},[t._v(t._s(t.correct_count)+"点")]),n("div",{staticClass:"button",on:{click:t.back}},[t._v("Homeに戻る")])])},o=[],a={name:"Result",props:["correct_count","wrong_count","count_all"],data:function(){return{}},methods:{back:function(){this.$router.push({path:"/"})}}},u=a,c=(n("bdeb"),n("2877")),s=Object(c["a"])(u,r,o,!1,null,"7355e219",null);e["a"]=s.exports}});
//# sourceMappingURL=app.2b41664d.js.map