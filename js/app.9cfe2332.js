(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o={app:0},i=[];function c(t){return r.p+"js/"+({About:"About",Blog:"Blog",Home:"Home",Message:"Message",Project:"Project"}[t]||t)+"."+{About:"589c04b2",Blog:"ab36fc90",Home:"6e4d379d",Message:"a7119a82",Project:"1cbf1f51","chunk-ee7e0bce":"178e3471"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={About:1,Blog:1,Home:1,Message:1,Project:1,"chunk-ee7e0bce":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({About:"About",Blog:"Blog",Home:"Home",Message:"Message",Project:"Project"}[t]||t)+"."+{About:"48622192",Blog:"a9276856",Home:"8b9e83d5",Message:"a1f75b80",Project:"77ddcc88","chunk-ee7e0bce":"9522543a"}[t]+".css",o=r.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],p=l.getAttribute("data-href");if(p===a||p===o)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],u.parentNode.removeChild(u),n(i)},u.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){s[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=c(t);var d=new Error;l=function(e){p.onerror=p.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}o[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026c":function(t,e,n){},"0c12":function(t,e,n){"use strict";var a=n("8bbf"),s=n.n(a);const o=new s.a({});s.a.prototype.$bus=o,e["a"]=o},"0c6d":function(t,e,n){"use strict";var a=n("cebe"),s=n.n(a),o=n("c4f5");const i=s.a.create();i.interceptors.response.use((function(t){return 0!==t.data.code?(Object(o["a"])({type:"error",content:t.data.msg,duration:1500}),null):t.data.data})),e["a"]=i},"0f86":function(t,e,n){},2095:function(t,e,n){"use strict";e["a"]=function(t){const e=new Date(+t),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDay().toString().padStart(2,"0");return`${e.getFullYear()}-${n}-${a}`}},"2bc1":function(t,e,n){},3254:function(t,e,n){"use strict";n("b109")},"3e6a":function(t,e,n){"use strict";n("c55e")},4045:function(t,e,n){t.exports=n.p+"img/loading.7d26db10.svg"},4174:function(t,e,n){t.exports=n.p+"img/default.57c8f972.gif"},"463f":function(t,e,n){t.exports=n.p+"img/404.edbebba5.gif"},"476d":function(t,e,n){},"536b":function(t,e,n){t.exports={message:"showMessage-module_message_3v7H3","message-info":"showMessage-module_message-info_1ZW3l","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3","message-error":"showMessage-module_message-error_2UIr3",icon:"showMessage-module_icon_3nHuj"}},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("8bbf"),s=n.n(a),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"App-container"},[n("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"aside"},[n("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[n("RouterView")]},proxy:!0}])}),n("ToTop")],1)])},i=[],c=n("5849"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteAside-container"},[n("Avatar",{attrs:{url:"http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"}}),n("Menu"),n("Contact")],1)},l=[],p=n("77c0"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"Muen-container"},t._l(t.items,(function(e){return n("RouterLink",{key:e.link,class:{},attrs:{exact:e.exact,to:{name:e.name},"active-class":"isSelect","exact-active-class":"exactSelect"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:e.icon}})],1),n("span",[t._v(t._s(e.title))])])})),1)},u=[],m=n("d010"),g={components:{Icon:m["a"]},data(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",title:"留言板",icon:"chat",exact:!0}]}},methods:{}},h=g,f=(n("8d04"),n("1569")),b=Object(f["a"])(h,d,u,!1,null,"67085f30",null),y=b.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"Contact-container"},[n("li",[n("a",[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[t._v(t._s(t.data.githubName))])])]),n("li",[n("a",{attrs:{href:"mailto:"+t.data.mail}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[t._v(t._s(t.data.mail))])])]),n("li",[n("a",{attrs:{href:"tencent://message/?Menu=yes&uin="+t.data.qq+"&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[t._v(t._s(t.data.qq))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.qqQrCode}})])]),n("li",[n("a",{attrs:{href:"weixin://dl/businessWebview/link/?appid=appid&url=baidu.com"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[t._v(t._s(t.data.weixin))])]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:t.data.weixinQrCode}})])])])},v=[],w=(n("e996"),n("5880")),C={components:{Icon:m["a"]},computed:{...Object(w["mapState"])("setting",["data"])}},x=C,k=(n("3e6a"),Object(f["a"])(x,j,v,!1,null,"3b8de7ba",null)),_=k.exports,A={components:{Avatar:p["a"],Menu:y,Contact:_},created(){this.$store.dispatch("setting/getSettingData")}},O=A,S=(n("d642"),Object(f["a"])(O,r,l,!1,null,"28256d73",null)),T=S.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ToTop-container",on:{click:t.handleClick}},[t._v(" Top ")])},z=[],P={data(){return{show:!1}},mounted(){this.$bus.$on("mainScroll",this.handleScroll)},destory(){this.$bus.$off("mainScroll",this.handleScroll)},methods:{handleScroll(t){this.show=!!t&&t.scrollTop>1e3},handleClick(){this.$bus.$emit("setScrollHeight",0)}}},M=P,D=(n("c7c8"),Object(f["a"])(M,q,z,!1,null,"32bfa4fc",null)),H=D.exports,$={name:"APP",components:{Layout:c["a"],SiteAside:T,ToTop:H}},L=$,E=(n("abd2"),Object(f["a"])(L,o,i,!1,null,"603175c8",null)),R=E.exports,I=n("0c6d");async function N(){const t=await I["a"].get("/api/banner");return t}var F={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async getBannersData(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await N();t.commit("setData",e),t.commit("setLoading",!1)}}};async function B(){return await I["a"].get("/api/about")}var J={namespaced:!0,state:{loading:!1,data:""},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async getAboutData(t){if(t.state.data)return;t.commit("setLoading",!0);const e=await B();t.commit("setData",e),t.commit("setLoading",!1)}}};async function W(){return await I["a"].get("/api/setting")}var V=n("ed08"),G={namespaced:!0,state:{loading:!1,data:""},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async getSettingData(t){if(t.state.data)return;t.commit("setLoading",!0);const e=await W();if(t.commit("setData",e),t.commit("setLoading",!1),e.favicon){let t=document.querySelector("link[rel='shortcut icon']");if(t)return;t=document.createElement("link"),t.rel="shortcut icon",t.type="images/x-icon",t.href=e.favicon,document.querySelector("head").appendChild(t)}e.siteTitle&&V["c"].setSiteTitle(e.siteTitle)}}};async function K(){return await I["a"].get("/api/project")}var Q={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async getProjectData(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await K();t.commit("setData",e),t.commit("setLoading",!1)}}};window.Vuex||Object(w["install"])(s.a);var U=new w["Store"]({modules:{banner:F,about:J,setting:G,project:Q},strict:!0}),X=n("6389"),Y=n.n(X),Z=(n("50e8"),n("e44a")),tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notFound-container"},[a("img",{attrs:{src:n("463f")}})])}],nt={},at=nt,st=(n("fe1f"),Object(f["a"])(at,tt,et,!1,null,"29ae10da",null)),ot=st.exports;function it(t){return async()=>{Object(Z["start"])();const e=t();return Object(Z["done"])(),e}}Object(Z["configure"])({trickleRate:15,showSpinner:!1});var ct=[{name:"Home",path:"/",component:it(()=>n.e("Home").then(n.bind(null,"16c0"))),meta:{title:"首页"}},{name:"Blog",path:"/blog",component:it(()=>n.e("Blog").then(n.bind(null,"3b5d"))),meta:{title:"文章"}},{name:"CategoryBlog",path:"/blog/cate/:categoryid",component:it(()=>n.e("Blog").then(n.bind(null,"3b5d"))),meta:{title:"文章"}},{name:"BlogDetail",path:"/blog/:id",component:it(()=>n.e("chunk-ee7e0bce").then(n.bind(null,"537a"))),meta:{title:"文章详情"}},{name:"About",path:"/about",component:it(()=>n.e("About").then(n.bind(null,"0737"))),meta:{title:"关于我"}},{name:"Message",path:"/message",component:it(()=>n.e("Message").then(n.bind(null,"8fc4"))),meta:{title:"留言板"}},{name:"Project",path:"/project",component:it(()=>n.e("Project").then(n.bind(null,"34fb"))),meta:{title:"项目&效果"}},{name:"notFound",path:"*",component:ot}];window.VueRouter||s.a.use(Y.a);const rt=new Y.a({routes:ct,mode:"history"});rt.afterEach((t,e)=>{t.meta.title&&V["c"].setRouteTitle(t.meta.title)});var lt=rt,pt=n("c4f5"),dt=n("4045"),ut=n.n(dt),mt=n("5c5c"),gt=n.n(mt);function ht(t){return t.querySelector("img[data-role=loadImg]")}function ft(){const t=document.createElement("img");return t.src=ut.a,t.dataset.role="loadImg",t.className=gt.a.loading,t}var bt=function(t,e){const n=ht(t);if(e.value){if(!n){const e=ft();t.appendChild(e)}}else n&&n.remove()},yt=n("0c12"),jt=n("4174"),vt=n.n(jt);let wt=[];function Ct(){for(const t of wt)xt(t)}function xt(t){t.dom.src=vt.a;const e=t.dom.getBoundingClientRect(),n=document.documentElement.clientHeight,a=e.height||150;if(e.top>=-a&&e.top<=n){const e=new Image;e.onload=function(){t.dom.src=t.src},e.src=t.src,wt=wt.filter(e=>e!==t)}}function kt(){Ct()}yt["a"].$on("mainScroll",Object(V["a"])(kt,50));var _t={inserted(t,e){const n={dom:t,src:e.value};wt.push(n),xt(n)},unbind(t){wt=wt.filter(t=>{t.dom})}},At=n("cc83"),Ot=n.n(At);Ot.a.mock("/api/banner","get",{code:0,msg:"",data:[{id:"1",midImg:"http://mdrs.yuanjin.tech/img/20201031141507.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031141350.jpg",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var St=n("7f38"),Tt=n.n(St);Ot.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),Ot.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){const e=Tt.a.parse(t.url);return Ot.a.mock({code:0,msg:"",data:{"total|2000-3000":786,["rows|"+(e.limit||10)]:[{id:"@guid",title:"@ctitle(1,50)",description:"@cparagraph(1,20)",category:{"id|0-20":1,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":0,"thumb|1":["@image(300x250, @color, #fff, @natural)"],createDate:"@date('T')"}]}})})),Ot.a.mock(/^\/api\/blog(\?.+)?/,"get",(function(t){return Ot.a.mock({code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],thumb:[Ot.a.Random.image("300x250","@color","#fff","Random Image"),null],htmlContent:'<blockquote>\n    <p>阅读本文，你需要首先知道：</p><ol>\n    <li>浏览器的同源策略</li>\n    <li>跨域问题</li>\n    <li>JSONP原理</li>\n    <li>cookie原理</li>\n    </ol>\n    </blockquote>\n    <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n    <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n    <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n    </ol>\n    <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n          <figcaption>image-20200421152122793</figcaption>\n      \n        </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n    <li><strong>简单请求</strong></li>\n    <li><strong>需要预检的请求</strong></li>\n    <li><strong>附带身份凭证的请求</strong></li>\n    </ul>\n    <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n    <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n    <li>get</li>\n    <li>post</li>\n    <li>head</li>\n    </ul>\n    </li>\n    <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n    <li><code>Accept</code></li>\n    <li><code>Accept-Language</code></li>\n    <li><code>Content-Language</code></li>\n    <li><code>Content-Type</code></li>\n    <li><code>DPR</code></li>\n    <li><code>Downlink</code></li>\n    <li><code>Save-Data</code></li>\n    <li><code>Viewport-Width</code></li>\n    <li><code>Width</code></li>\n    </ul>\n    </li>\n    <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n    <li><code>text/plain</code></li>\n    <li><code>multipart/form-data</code></li>\n    <li><code>application/x-www-form-urlencoded</code></li>\n    </ul>\n    </li>\n    </ol>\n    <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n    \n    <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n    })\n    \n    <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">headers</span>:{\n        <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n      }\n    })\n    \n    <span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n    })\n    \n    <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n      <span class="hljs-attr">headers</span>: {\n        <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n      }\n    })</code></pre>\n    <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n    <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n    </ol>\n    <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n    <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n    <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n    </ol>\n    <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n    <li>*：表示我很开放，什么人我都允许访问</li>\n    <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n    </ul>\n    <blockquote>\n    <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n    <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n          <figcaption>image-20200421162846480</figcaption>\n      \n        </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n    <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n    <li><strong>服务器允许</strong></li>\n    <li><strong>浏览器发送真实请求</strong></li>\n    <li><strong>服务器完成真实的响应</strong></li>\n    </ol>\n    <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n      <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n      <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n        <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n      },\n      <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n    });</code></pre>\n    <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n    <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n    </ol>\n    <pre><code>OPTIONS /api/user HTTP/1.1\n    Host: crossdomain.com\n    ...\n    Origin: http://my.com\n    Access-Control-Request-Method: POST\n    Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n    <li>请求方法为<code>OPTIONS</code></li>\n    <li>没有请求体</li>\n    <li>请求头中包含<ul>\n    <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n    <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n    <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n    </ul>\n    </li>\n    </ul>\n    <ol start="2">\n    <li><strong>服务器允许</strong></li>\n    </ol>\n    <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    Access-Control-Allow-Methods: POST\n    Access-Control-Allow-Headers: a, b, content-type\n    Access-Control-Max-Age: 86400\n    ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n    <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n    <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n    <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n    <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n    </ul>\n    <ol start="3">\n    <li><strong>浏览器发送真实请求</strong></li>\n    </ol>\n    <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com\n    \n    {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n    <li><strong>服务器响应真实请求</strong></li>\n    </ol>\n    <pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n          <figcaption>image-20200421165913320</figcaption>\n      \n        </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n    <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n    xhr.withCredentials = <span class="hljs-literal">true</span>;\n    \n    <span class="hljs-comment">// fetch api</span>\n    fetch(url, {\n      <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n    })</code></pre>\n    <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}})})),Ot.a.mock(/^\/api\/comment/,"post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),Ot.a.mock(/^\/api\/comment(\?.+)?$/,"get",(function(t){const e=Tt.a.parse(t.url);return Ot.a.mock({code:0,msg:"",data:{"total|2000-3000":786,["rows|"+(e.limit||10)]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}]}})})),Ot.a.mock("/api/about","get",{code:0,msg:"",data:"https://weibo.com/?c=spr_sinamkt_buy_lhykj_weibo_t201"}),Ot.a.mock("/api/setting","get",{code:0,msg:"",data:{avatar:"http://www.duyiedu.com/source/img/logo.png",siteTitle:"我的个人空间",github:"https://github.com/PhilRandWu",qq:"3378814052",qqQrCode:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zuanke8.com%2Fforum%2F202003%2F20%2F221545x7xn6kg6z7k4hzg3.png&refer=http%3A%2F%2Fimg.zuanke8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634291717&t=3835f45136f6ff6003441ae60c288205",weixin:"wwb20020713",weixinQrCode:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zuanke8.com%2Fforum%2F202003%2F20%2F221545x7xn6kg6z7k4hzg3.png&refer=http%3A%2F%2Fimg.zuanke8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634291717&t=3835f45136f6ff6003441ae60c288205",mail:"3378814052@qq.com",icp:"黑ICP备17001719号",githubName:"PhilRandWu",favicon:"http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f"}}),Ot.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@guid",name:"@cname(1,5)","url|1":["@url",null],"github|1":["@url",null],"description|1-5":["@cparagraph(1,5)"],thumb:"@image(300x250,@color,#fff,@natural)",order:1}]}),Ot.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),Ot.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){const e=Tt.a.parse(t.url);return Ot.a.mock({code:0,msg:"",data:{total:52,["rows|"+(e.limit||10)]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}]}})})),Ot.a.setup({timeout:"1000-2000"}),s.a.config.productionTip=!1,s.a.prototype.$showMessage=pt["a"],s.a.directive("loading",bt),s.a.directive("lazy",_t),U.dispatch("setting/getSettingData"),new s.a({store:U,router:lt,render:t=>t(R)}).$mount("#app")},5849:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},s=[],o={},i=o,c=(n("dfb8"),n("1569")),r=Object(c["a"])(i,a,s,!1,null,"0feedcf9",null);e["a"]=r.exports},5880:function(t,e){t.exports=Vuex},"5c5c":function(t,e,n){t.exports={loading:"loading-module_loading_1dKWw"}},6389:function(t,e){t.exports=VueRouter},"6acd":function(t,e,n){},"6bb6":function(t,e,n){},"769a":function(t,e,n){},"77c0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"Avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},s=[],o={props:{url:{type:String,required:!0},size:{type:Number,default:150}}},i=o,c=(n("3254"),n("1569")),r=Object(c["a"])(i,a,s,!1,null,"03b1d7fc",null);e["a"]=r.exports},"8bbf":function(t,e){t.exports=Vue},"8d04":function(t,e,n){"use strict";n("476d")},a279:function(t,e,n){"use strict";n("6acd")},abd2:function(t,e,n){"use strict";n("0f86")},b109:function(t,e,n){},c4f5:function(t,e,n){"use strict";var a=n("dc93"),s=n("d010"),o=n("536b"),i=n.n(o);e["a"]=function(t={}){const e=t.content||"",n=t.type||"info",o=t.duration||2e3,c=t.container||document.body,r=document.createElement("div"),l=Object(a["a"])(s["a"],{type:n});r.innerHTML=`<span class="${i.a.icon}">${l.outerHTML}</span><div>${e}</div>`;const p=i.a["message-"+n];r.className=`${i.a.message} ${p}`,t.container&&"static"===getComputedStyle(c).position&&(c.style.position="relative"),c.appendChild(r),r.clientHeight,r.style.opacity=1,r.style.transform="translate(-50%,-50%)",setTimeout(()=>{r.style.opacity=0,r.style.transform="translate(-50%, -50%) translateY(-25px)",r.addEventListener("transitionend",()=>{r.remove(),t.callback&&t.callback()},{once:!0})},o)}},c55e:function(t,e,n){},c7c8:function(t,e,n){"use strict";n("2bc1")},cebe:function(t,e){t.exports=axios},d010:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont iconfont-container",class:t.fontClass})},s=[];const o={home:"icon-all",success:"icon-icon-test1",error:"icon-icon-test",close:"icon-close",warn:"icon-icon-test3",info:"icon-icon-test2",blog:"icon-blog",code:"icon-code",about:"icon-set_about_hov",weixin:"icon-icon-test5",mail:"icon-mail",github:"icon-icon-test4",qq:"icon-qq-copy-copy",arrowUp:"icon-arrow-up-bold",arrowDown:"icon-arrow-down-bold",empty:"icon-empty",chat:"icon-liuyan"};Object.keys(o);var i={props:{type:{type:String,required:!0}},computed:{fontClass(){return o[this.type]}}},c=i,r=(n("a279"),n("1569")),l=Object(r["a"])(c,a,s,!1,null,"1a9f2ef0",null);e["a"]=l.exports},d642:function(t,e,n){"use strict";n("769a")},dc93:function(t,e,n){"use strict";var a=n("8bbf"),s=n.n(a);e["a"]=function(t,e){const n=new s.a({render:n=>n(t,{props:e})});return n.$mount(),n.$el}},dfb8:function(t,e,n){"use strict";n("6bb6")},e996:function(t,e,n){},ed08:function(t,e,n){"use strict";n.d(e,"d",(function(){return a["a"]})),n.d(e,"b",(function(){return s["a"]})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l}));var a=n("c4f5"),s=(n("dc93"),n("2095")),o=function(t,e=100){let n=null;return(...a)=>{clearTimeout(n),n=setTimeout(()=>{t(...a)},e)}};let i="",c="";function r(){document.title=i||c?!i&&c?c:i&&!c?i:`${i}-${c}`:"loading..."}var l={setRouteTitle(t){i=t,r()},setSiteTitle(t){c=t,r()}}},fe1f:function(t,e,n){"use strict";n("026c")}});