(function(e){function t(t){for(var i,n,s=t[0],u=t[1],c=t[2],m=0,l=[];m<s.length;m++)n=s[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&l.push(r[n][0]),r[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var i={},n={app:0},r={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1a876bd7":"61afd39e","chunk-2d0b9d75":"ae0a0d27","chunk-5ddaf57c":"9de1e02c","chunk-6c61aea1":"21049e27","chunk-6dbd6a18":"5c167341","chunk-87cbaa20":"6b2f32e4"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={"chunk-1a876bd7":1,"chunk-5ddaf57c":1,"chunk-6c61aea1":1,"chunk-6dbd6a18":1,"chunk-87cbaa20":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var i="css/"+({}[e]||e)+"."+{"chunk-1a876bd7":"2ab88d9e","chunk-2d0b9d75":"31d6cfe0","chunk-5ddaf57c":"ab625c6d","chunk-6c61aea1":"a09fb622","chunk-6dbd6a18":"fb46053b","chunk-87cbaa20":"4dd36b26"}[e]+".css",r=u.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],m=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(m===i||m===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],m=c.getAttribute("data-href");if(m===i||m===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,a){i=r[e]=[t,a]}));t.push(i[2]=o);var c,m=document.createElement("script");m.charset="utf-8",m.timeout=120,u.nc&&m.setAttribute("nonce",u.nc),m.src=s(e);var l=new Error;c=function(t){m.onerror=m.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:m})}),12e4);m.onerror=m.onload=c,document.head.appendChild(m)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(a,i,function(t){return e[t]}.bind(null,i));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="vue-e-commerce-lorem-ipsum-project/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],m=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=m;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0376":function(e,t,a){e.exports=a.p+"img/truck-monster-solid.83e5706b.svg"},"084a":function(e,t,a){e.exports=a.p+"img/podcast-solid.b726efff.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=a("2f62"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-fade-transition",[a("router-view")],1)],1)},o=[],s={name:"App"},u=s,c=a("2877"),m=a("6544"),l=a.n(m),d=a("7496"),p=a("0789"),v=Object(c["a"])(u,r,o,!1,null,null,null),f=v.exports;l()(v,{VApp:d["a"],VFadeTransition:p["c"]});a("d3b7");var b=a("8c4f"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("h1",{staticClass:"display-4 mb-5"},[e._v("Project-name")]),i("div",{staticClass:"text-center my-6"},[i("img",{attrs:{src:a("9b19"),width:"120",alt:"logo"}})]),i("h2",{staticClass:"display-1 mt-5"},[e._v("Goals")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis nobis autem rem quidem, unde iste vitae ipsam quae? Ad facere recusandae sequi obcaecati a atque minus temporibus ab tempore. ")]),i("p",[e._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad in provident rerum autem reiciendis nulla beatae corrupti alias a amet tempore eos iusto sequi eveniet, aliquam delectus porro hic! Laboriosam, rem corrupti beatae distinctio illum aut sequi saepe tempore! Dolor magnam ducimus hic veniam dolore ratione asperiores assumenda quae sit consectetur! Blanditiis exercitationem facere enim aut delectus ut suscipit provident laudantium pariatur possimus. Modi nesciunt culpa ad, et inventore tenetur labore ea quisquam, recusandae soluta ducimus, impedit nemo unde laboriosam. Quia accusantium, nihil amet reprehenderit cum eaque autem? ")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi ipsam vel numquam dignissimos sequi natus dicta dolor animi est facilis nobis, iusto voluptas praesentium non laboriosam? Quisquam est cupiditate, velit quia fugiat dolorum, vel aliquid minima, aut alias necessitatibus incidunt magni. ")]),i("div",{staticClass:"text-center my-6"},[i("img",{attrs:{src:a("d333"),width:"120",alt:"Rocket"}})]),i("h2",{staticClass:"display-1"},[e._v("Advantages")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi ipsam vel numquam dignissimos sequi natus dicta dolor animi est facilis nobis, iusto voluptas praesentium non laboriosam? Quisquam est cupiditate, velit quia fugiat dolorum, vel aliquid minima, aut alias necessitatibus incidunt magni. ")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis nobis autem rem quidem, unde iste vitae ipsam quae? Ad facere recusandae sequi obcaecati a atque minus temporibus ab tempore. ")]),i("div",{staticClass:"text-center my-6"},[i("img",{attrs:{src:a("0376"),width:"120",alt:"truck-monster"}})]),i("h2",{staticClass:"display-1"},[e._v("Features")]),i("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis nobis autem rem quidem, unde iste vitae ipsam quae? Ad facere recusandae sequi obcaecati a atque minus temporibus ab tempore. ")]),i("p",[e._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad in provident rerum autem reiciendis nulla beatae corrupti alias a amet tempore eos iusto sequi eveniet, aliquam delectus porro hic! Laboriosam, rem corrupti beatae distinctio illum aut sequi saepe tempore! Dolor magnam ducimus hic veniam dolore ratione asperiores assumenda quae sit consectetur! Blanditiis exercitationem facere enim aut delectus ut suscipit provident laudantium pariatur possimus. Modi nesciunt culpa ad, et inventore tenetur labore ea quisquam, recusandae soluta ducimus, impedit nemo unde laboriosam. Quia accusantium, nihil amet reprehenderit cum eaque autem? ")]),i("div",{staticClass:"text-center my-6"},[i("img",{attrs:{src:a("084a"),width:"120",alt:"podcast"}})]),i("h2",{staticClass:"display-1"},[e._v("Values")]),i("p",[e._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad in provident rerum autem reiciendis nulla beatae corrupti alias a amet tempore eos iusto sequi eveniet, aliquam delectus porro hic! Laboriosam, rem corrupti beatae distinctio illum aut sequi saepe tempore! Dolor magnam ducimus hic veniam dolore ratione asperiores assumenda quae sit consectetur! Blanditiis exercitationem facere enim aut delectus ut suscipit provident laudantium pariatur possimus. Modi nesciunt culpa ad, et inventore tenetur labore ea quisquam, recusandae soluta ducimus, impedit nemo unde laboriosam. Quia accusantium, nihil amet reprehenderit cum eaque autem? ")]),i("p",[e._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad in provident rerum autem reiciendis nulla beatae corrupti alias a amet tempore eos iusto sequi eveniet, aliquam delectus porro hic! Laboriosam, rem corrupti beatae distinctio illum aut sequi saepe tempore! Dolor magnam ducimus hic veniam dolore ratione asperiores assumenda quae sit consectetur! Blanditiis exercitationem facere enim aut delectus ut suscipit provident laudantium pariatur possimus. Modi nesciunt culpa ad, et inventore tenetur labore ea quisquam, recusandae soluta ducimus, impedit nemo unde laboriosam. Quia accusantium, nihil amet reprehenderit cum eaque autem? ")]),i("v-btn",{attrs:{color:"primary",block:"",large:"",to:{name:"Prices"}}},[e._v(" Subscribe now ")])],1)},g=[],q=a("7b3d"),y={name:"Home",components:{Layout:q["a"]}},_=y,k=a("8336"),L=Object(c["a"])(_,h,g,!1,null,null,null),w=L.exports;l()(L,{VBtn:k["a"]}),i["a"].use(b["a"]);var x=[{path:"/",name:"Home",component:w},{path:"/contacts",name:"Contacts",component:function(){return a.e("chunk-6c61aea1").then(a.bind(null,"9bdf"))}},{path:"/prices",name:"Prices",component:function(){return a.e("chunk-1a876bd7").then(a.bind(null,"2512"))}},{path:"/login",name:"Login",component:function(){return a.e("chunk-5ddaf57c").then(a.bind(null,"013f"))}},{path:"/services",name:"Services",component:function(){return a.e("chunk-87cbaa20").then(a.bind(null,"83d7"))}},{path:"/services/:id",name:"Service",component:function(){return a.e("chunk-6dbd6a18").then(a.bind(null,"57e3"))},props:!0}],C=new b["a"]({mode:"history",base:"vue-e-commerce-lorem-ipsum-project/",routes:x}),S=C,A=a("f309");i["a"].use(A["a"]);var j=new A["a"]({}),O={user:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))||!1,auth:localStorage.getItem("auth")&&JSON.parse(localStorage.getItem("auth"))||!1,loading:!1},P={user:function(e){return e.user},token:function(e){return e.auth&&e.auth.token},loading:function(e){return e.loading}},T={setLoading:function(e,t){e.loading=t},setUser:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},setAuth:function(e,t){e.auth=t,localStorage.setItem("auth",JSON.stringify(t))}},V=(a("7db0"),500),E="customer",I="password",B="John D. Dow",D="710efd4d-2cdc-4e69-9ec4-d4a51ed56ee4",M={login:function(e,t){var a=e.commit,i=t.login,n=t.password;return a("setLoading",!0),new Promise((function(e,t){setTimeout((function(){if(a("setLoading",!1),i===E&&n===I){var r={name:B},o={token:D};a("setUser",r),a("setAuth",o),e(r)}else a("setUser",!1),a("setAuth",!1),t(new Error("Wrong credentials!"))}),V)}))},logout:function(e){var t=e.commit;return t("setLoading",!0),new Promise((function(e){setTimeout((function(){t("setLoading",!1),t("setUser",!1),t("setAuth",!1),e()}),V)}))},fetchServices:function(e){var t=e.commit;return t("setLoading",!0),new Promise((function(e){setTimeout((function(){a.e("chunk-2d0b9d75").then(a.t.bind(null,"3552",3)).then((function(a){t("setLoading",!1),e(a.default)}))}),V)}))},fetchService:function(e,t){var i=e.commit;return i("setLoading",!0),new Promise((function(e){setTimeout((function(){a.e("chunk-2d0b9d75").then(a.t.bind(null,"3552",3)).then((function(a){i("setLoading",!1),e(a.default.find((function(e){return e.id===t})))}))}),V)}))}},N={state:O,getters:P,mutations:T,actions:M};i["a"].use(n["a"]),i["a"].config.productionTip=!1,new i["a"]({router:S,vuetify:j,render:function(e){return e(f)},store:new n["a"].Store(N)}).$mount("#app")},"65f3":function(e,t,a){"use strict";var i=a("b1fd"),n=a.n(i);n.a},"7b3d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-content",{staticClass:"grey lighten-5"},[i("v-container",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("router-link",{staticClass:"d-flex align-center logo",attrs:{to:{name:"Home"}}},[i("img",{staticClass:"shrink mr-2 pa-3",staticStyle:{filter:"invert(1)"},attrs:{src:a("9b19"),alt:"Project Logo",width:"56"}}),i("v-toolbar-title",[e._v("Project-name")])],1),i("v-toolbar-items",{staticClass:"ml-6"},[i("v-btn",{attrs:{to:{name:"Home"},exact:"",text:""}},[i("v-icon",{staticClass:"mr-2"},[e._v(" mdi-home ")]),e._v(" Home ")],1),i("v-btn",{attrs:{to:{name:"Services"},text:""}},[i("v-icon",{staticClass:"mr-2"},[e._v(" mdi-beehive-outline ")]),e._v(" Services ")],1),i("v-btn",{attrs:{to:{name:"Prices"},text:""}},[i("v-icon",{staticClass:"mr-2"},[e._v(" mdi-currency-usd ")]),e._v(" Prices ")],1),i("v-btn",{attrs:{to:{name:"Contacts"},text:""}},[i("v-icon",{staticClass:"mr-2"},[e._v(" mdi-map-marker ")]),e._v(" Contacts ")],1)],1),i("v-spacer"),i("v-toolbar-items",{staticClass:"ml-4"},[e.user?i("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({attrs:{slot:"activator",text:"",small:""},slot:"activator"},"v-btn",n,!1),a),[i("span",[e._v(" "+e._s(e.user.name)+" ")]),i("v-icon",[e._v("mdi-chevron-down")])],1)]}}],null,!1,1441458372)},[i("v-list",[i("v-list-item",{on:{click:e.logout}},[i("v-list-item-title",[e._v("Logout")])],1)],1)],1):[i("v-btn",{attrs:{text:"",to:{name:"Login"}}},[i("span",[e._v(" Login ")])])]],2)],1),e._t("default")],2),e.loading?i("div",{staticClass:"loader"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:220,width:16}})],1):e._e()],1)},n=[],r=a("5530"),o=a("2f62"),s={name:"DefaultLayout",computed:Object(r["a"])({},Object(o["c"])(["user","loading"])),methods:Object(r["a"])({},Object(o["b"])(["logout"]))},u=s,c=(a("65f3"),a("2877")),m=a("6544"),l=a.n(m),d=a("40dc"),p=a("8336"),v=a("a523"),f=a("a75b"),b=a("132d"),h=a("8860"),g=a("da13"),q=a("5d23"),y=a("e449"),_=a("490a"),k=a("2fa4"),L=a("2a7f"),w=Object(c["a"])(u,i,n,!1,null,"ddc92f78",null);t["a"]=w.exports;l()(w,{VAppBar:d["a"],VBtn:p["a"],VContainer:v["a"],VContent:f["a"],VIcon:b["a"],VList:h["a"],VListItem:g["a"],VListItemTitle:q["c"],VMenu:y["a"],VProgressCircular:_["a"],VSpacer:k["a"],VToolbarItems:L["a"],VToolbarTitle:L["b"]})},"9b19":function(e,t,a){e.exports=a.p+"img/logo.35c6c4f7.svg"},b1fd:function(e,t,a){},d333:function(e,t,a){e.exports=a.p+"img/rocket-solid.5f68992b.svg"}});
//# sourceMappingURL=app.bb542eea.js.map