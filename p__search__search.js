(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0bdg":function(e,t,n){"use strict";var a=n("q1tI");t["a"]=Object(a["createContext"])()},"0vtl":function(e,t,n){e.exports={"song-list":"song-list___nlzxi",head:"head___14JBe",left:"left___2Njjf",right:"right___1fYZU","list-head":"list-head___3X3kj","head-item":"head-item___2GoQy","list-warp":"list-warp___3WdsB",warp:"warp___28LbG",item:"item___3J9xe"}},"2yZ0":function(e,t,n){e.exports={nothing:"nothing___21qjH"}},"3eJK":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("cmjm"),i=n.n(r),o=n("Ng/0"),s=n("sOOk"),l=n("Vn/K"),u=function(e){var t=e.item,n=e.width,a=void 0===n?100:n,r=e.showtime,u=void 0!==r&&r,m=null;if(u){var d=Object(l["h"])(t.publishTime,"yyyy-MM-dd");m=c.a.createElement("div",{className:"".concat(i.a["time"])},d)}return c.a.createElement("div",{className:"".concat(i.a["dvd-item"]," "),title:t.name,onClick:function(){return Object(s["a"])(t.id)}},c.a.createElement("div",{className:"".concat(i.a["bg"])},c.a.createElement("i",{className:"".concat(i.a["classname"]," iconfont icon-bofang1")}),c.a.createElement(o["a"],{src:"".concat(t.picUrl,"?param=").concat(a,"y").concat(a),alt:t.name})),c.a.createElement("p",{className:"".concat(i.a["dvd-name"]," text-row-1")},t.name),c.a.createElement("p",{className:"".concat(i.a["singer"]," text-row-1")},t.artists[0].name),m)};t["a"]=u},"5PGN":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("o1iF");function c(e){return Object(a["a"])({url:"/cloudsearch",params:e})}},"6mnD":function(e,t,n){e.exports={"base-image":"base-image___3KPub"}},"7Ecz":function(e,t,n){e.exports={cover:"cover___3kXW_","play-count":"play-count___ZF9Ea",time:"time___2CX6R","mv-item":"mv-item___GHq0Z",name:"name___1vCwP"}},F5qy:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("NsG5"),i=n.n(r),o=n("9kvl"),s=n("Vn/K"),l=n("Ng/0"),u=function(e){o["a"].push({pathname:"/playlist",query:{id:e}})};t["a"]=function(e){var t=e.item;return t.playCount=Object(s["k"])(t.playCount),c.a.createElement("div",{className:"".concat(i.a["list-item"]),onClick:function(){u(t.id)}},c.a.createElement("div",{className:"".concat(i.a["img-warp"])},c.a.createElement(l["a"],{src:t.coverImgUrl+"?param=140y140"}),c.a.createElement("div",{className:"".concat(i.a["img-buttom-bar"])},c.a.createElement("div",null,c.a.createElement("i",{className:"iconfont icon-erji"}," ",c.a.createElement("span",null,t.playCount))),c.a.createElement("div",null,c.a.createElement("i",{className:"iconfont icon-ziyuan"})))),c.a.createElement("p",{className:"".concat(i.a["name-text"]," text-row-2"),dangerouslySetInnerHTML:{__html:t.name}}))}},F9YG:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("2yZ0"),i=n.n(r),o=n("Ng/0");t["a"]=function(e){var t=e.hintText;return c.a.createElement("div",{className:"".concat(i.a["nothing"])},c.a.createElement(o["a"],{src:"//image.woai996.com/picGo/20210210092240.png"}),c.a.createElement("h3",{dangerouslySetInnerHTML:{__html:t}}))}},LaWv:function(e,t,n){"use strict";n.r(t);var a=n("9og8"),c=n("tJVT"),r=n("WmNS"),i=n.n(r),o=n("q1tI"),s=n.n(o),l=n("9kvl"),u=n("cvrK"),m=n.n(u),d=n("F9YG"),f=n("0bdg"),v=n("F5qy"),p=n("Vn/K"),b=function(){var e=Object(o["useContext"])(f["a"]),t=e.result,n=e.keywords,a=[];return t&&t.playlists&&Array.isArray(t.playlists)&&(a=t.playlists),s.a.createElement("div",{className:"".concat(m.a["warp-5"])},a.map((function(e,t){return e.name=Object(p["c"])(n,e.name),s.a.createElement("div",{className:"".concat(m.a["item"]),key:t},s.a.createElement(v["a"],{item:e}))})))},_=n("imZp"),y=function(){var e=Object(o["useContext"])(f["a"]),t=e.result,n=[];return t&&t.songs&&(n=t.songs),s.a.createElement("div",null,s.a.createElement(_["a"],{tracks:n,showHead:!1}))},E=n("Ng/0"),g=n("sOOk"),h=function(e){var t=Object(o["useContext"])(f["a"]),n=t.result,a=[];return n&&n.artists&&(a=n.artists),s.a.createElement("div",{className:"".concat(m.a["singer"])},a.map((function(e,t){return s.a.createElement(N,{key:t,item:e})})))},N=function(e){var t=e.item;return s.a.createElement("div",{className:"".concat(m.a["singer-item"]," click"),title:t.name,onClick:function(){return Object(g["d"])(t.id)}},s.a.createElement("div",null,s.a.createElement(E["a"],{src:"".concat(t.picUrl,"?param=130y130")}),s.a.createElement("div",{className:"".concat(m.a["name"])},s.a.createElement("div",{className:"".concat(m.a["text-row-1"])},t.name))))},k=n("3eJK"),x=function(e){var t=Object(o["useContext"])(f["a"]),n=t.result,a=[];return n&&n.albums&&(a=n.albums),s.a.createElement("div",{className:"".concat(m.a["warp-5"])},a.map((function(e,t){return s.a.createElement("div",{className:"".concat(m.a["item"]),key:t},s.a.createElement(k["a"],{item:e,width:160}))})))},w=n("YGkd"),O=function(e){var t=Object(o["useContext"])(f["a"]),n=t.result,a=[];return n&&n.mvs&&(a=n.mvs),s.a.createElement("div",{className:"".concat(m.a["warp-5"])},a.map((function(e,t){return s.a.createElement("div",{className:"".concat(m.a["item"]),key:t},s.a.createElement(w["a"],{item:e}))})))},j=n("R2Hq"),C=n.n(j),I=function(e){var t=4,n=Object(o["useState"])(!1),a=Object(c["a"])(n,2),r=a[0],i=a[1],l=e.item;if(!l||!l.lyrics)return null;var u,m=Object(p["l"])(parseInt(l.dt/1e3));return u=!l.lyrics||l.lyrics.length<=t?null:r?s.a.createElement("div",{onClick:function(){return i(!r)},className:"".concat(C.a["show-more"]," ")},s.a.createElement("i",{className:"iconfont icon-xia-down turn"}),"\u6536\u8d77"):s.a.createElement("div",{onClick:function(){return i(!r)},className:"".concat(C.a["show-more"])},s.a.createElement("i",{className:"iconfont icon-xia-down"}),"\u5c55\u5f00"),s.a.createElement("div",{className:"".concat(C.a["lyrics-item"])},s.a.createElement("header",{className:"".concat(C.a["h"])},s.a.createElement("div",{className:"iconfont icon-ziyuan ".concat(C.a["header-name"]," "),onClick:function(){var e={singerName:l.ar[0].name,songId:l.id,songName:l.name,dt:l.dt};Object(p["m"])(e)}}),s.a.createElement("div",{className:" ".concat(C.a["header-name"]," underline text-row-1"),onClick:function(){Object(g["e"])(l.id)}},l.name),s.a.createElement("div",{className:"".concat(C.a["header-name"]," underline text-row-1"),onClick:function(){return Object(g["d"])(l.ar[0].id)}},l.ar[0].name),s.a.createElement("div",{className:"".concat(C.a["header-name"]," underline text-row-1"),onClick:function(){return Object(g["a"])(l.al.id)}},"\u300a",l.al.name,"\u300b"),s.a.createElement("div",{className:"".concat(C.a["header-name"]," text-row-1")},m)),s.a.createElement("ul",null,l.lyrics.map((function(e,n){return!r&&n>=t?null:s.a.createElement("li",{dangerouslySetInnerHTML:{__html:e},key:n})}))),u)},S=function(e){var t=Object(o["useContext"])(f["a"]),n=t.result,a=[];return n&&n.songs&&(a=n.songs),s.a.createElement("div",{className:"".concat(m.a["lyrics"])},a.map((function(e,t){return s.a.createElement("div",{key:e.id},s.a.createElement(I,{item:e}))})))},q=n("XDti"),K=n.n(q),D=function(e){var t=e.item,n="gander".concat(t.dj.gender),a=s.a.createElement("i",{className:"".concat(K.a[n])});return s.a.createElement("div",{className:"".concat(K.a["dj-item"])},s.a.createElement("div",{className:"".concat(K.a["img-warp"])},s.a.createElement(E["a"],{src:"".concat(t.picUrl,"?param=200y200")})),s.a.createElement("div",{className:"".concat(K.a["name"]," text-row-1 underline"),dangerouslySetInnerHTML:{__html:t.name}}),s.a.createElement("div",{className:"".concat(K.a["dj-name"]," text-row-1")},s.a.createElement("span",null,"by")," ",s.a.createElement("span",{className:"underline text-row-1"},t.dj.nickname)," ",a))},T=function(){var e=Object(o["useContext"])(f["a"]),t=e.result,n=e.keywords,a=[];return t&&t.djRadios&&Array.isArray(t.djRadios)&&(a=t.djRadios),s.a.createElement("div",{className:"".concat(m.a["warp-5"])},a.map((function(e,t){return e.name=Object(p["c"])(n,e.name),s.a.createElement("div",{className:"".concat(m.a["item"]),key:t},s.a.createElement(D,{item:e}))})))},A=function(){var e=Object(o["useContext"])(f["a"]),t=e.result,n=e.keywords,a=[];return t&&t.userprofiles&&Array.isArray(t.userprofiles)&&(a=t.userprofiles),s.a.createElement("div",{className:""},a.map((function(e,t){return e.nickname=Object(p["c"])(n,e.nickname),s.a.createElement(H,{key:t,item:e})})))},H=function(e){var t=e.item;return s.a.createElement("div",{className:"".concat(m.a["user-item"])},s.a.createElement("div",{className:"".concat(m.a["cell"]," click"),onClick:function(){Object(g["f"])(t.userId)}},s.a.createElement(E["a"],{src:"".concat(t.avatarUrl,"?param=100y100")})),s.a.createElement("div",{className:"".concat(m.a["cell"])},s.a.createElement("div",{className:"".concat(m.a["nickname"]," text-row-1 underline"),onClick:function(){Object(g["f"])(t.userId)}},s.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.nickname}}),s.a.createElement(p["a"],{type:t.gender})),s.a.createElement("div",{className:"".concat(m.a["desc"]," text-row-1")},t.signature)),s.a.createElement("div",{className:"".concat(m.a["cell"]," btn btn-gray")},s.a.createElement("i",{className:" icon-jiahaocu iconfont"}),"\u5173\u6ce8"),s.a.createElement("div",{className:"".concat(m.a["cell"])},"\u6b4c\u5355 : ",t.playlistCount),s.a.createElement("div",{className:"".concat(m.a["cell"])},"\u7c89\u4e1d : ",t.followeds))},G=[{name:"\u5355\u66f2",content:y,type:1,countKey:"songCount"},{name:"\u6b4c\u624b",type:100,content:h,countKey:"artistCount"},{name:"\u4e13\u8f91",type:10,content:x,countKey:"albumCount"},{name:"\u89c6\u9891",type:1004,content:O,countKey:"mvCount"},{name:"\u6b4c\u8bcd",type:1006,content:S,countKey:"songCount"},{name:"\u6b4c\u5355",content:b,type:1e3,countKey:"playlistCount"},{name:"\u58f0\u97f3\u4e3b\u64ad",type:1009,content:T,countKey:"djRadiosCount"},{name:"\u7528\u6237",content:A,countKey:"userprofileCount",type:1002}],L=n("5PGN"),R=n("aiZx"),P=n("XEWl"),W=n.n(P),M=function(e){var t=e.changePage,n=void 0===t?function(){}:t,a=e.seletPage,c=e.pageSize,r=void 0===c?10:c;if(!r||r<=1)return null;var i=10;r<i&&(i=r);var o=Object(p["e"])(i);a=parseInt(a);var l=r>i&&r>i+a-5,u=a>5&&r>i;function m(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=e===a?"btn-main":"btn-gray",r=t?e:Math.random();return s.a.createElement("div",{className:"".concat(W.a["lastpage"]),key:r},s.a.createElement("div",{className:"".concat(W.a["page-item"]," btn ").concat(c),key:e,onClick:function(){n(e)}},e))}var d=1==a?"btn-disabled":"btn-gray",f=a==r?"btn-disabled":"btn-gray";return s.a.createElement("div",{className:"".concat(W.a["pagination"])},s.a.createElement("div",{className:"".concat(W.a["prov"]," ").concat(W.a["btn-item"]," ").concat(d," btn"),onClick:function(){1!=a&&n(a-1)}},s.a.createElement("i",{className:"icon-you iconfont turn"}),"\u4e0a\u4e00\u9875"),s.a.createElement("div",{className:"".concat(W.a["page-box"])},o.map((function(e,t){return u||l?l&&!u?t+1===i?s.a.createElement("div",{className:"".concat(W.a["lastpage"]),key:t+"cc"},s.a.createElement("div",null," \xb7\xb7\xb7 "),m(r,null)):m(t+1):!l&&u?0===t?s.a.createElement("div",{className:"".concat(W.a["lastpage"]),key:t+"cc"},m(t+1,null),s.a.createElement("div",null," \xb7\xb7\xb7 ")):m(r-i+t+1):l&&u?0===t?s.a.createElement("div",{className:"".concat(W.a["lastpage"]),key:t+"cc"},m(t+1,null),s.a.createElement("div",null," \xb7\xb7\xb7 ")):t+1===i?s.a.createElement("div",{className:"".concat(W.a["lastpage"]),key:t+"cc"},s.a.createElement("div",null," \xb7\xb7\xb7 "),m(r,null)):m(t+a-4):void 0:m(t+1)}))),s.a.createElement("div",{className:"".concat(W.a["next"]," ").concat(W.a["btn-item"]," ").concat(f," btn"),onClick:function(){a!=r&&n(a+1)}},"\u4e0b\u4e00\u9875 ",s.a.createElement("i",{className:"icon-you iconfont"})))},F=n("Ctmj"),J=function(){return s.a.createElement("div",{style:{height:"600px"}},s.a.createElement(F["a"],{text:"\u52aa\u529b\u641c\u7d22\u4e2d..."}))},Y=(t["default"]=function(e){var t=e.location.query,n=parseInt(t.type)||0;("number"!=typeof n||isNaN(n)||n>=G.length)&&(n=0);var r=Object(o["useState"])(t.keyword||localStorage.getItem(R["g"])||""),u=Object(c["a"])(r,2),v=u[0],b=u[1],_=Object(o["useState"])(n),y=Object(c["a"])(_,2),E=y[0],g=y[1],h=Object(o["useState"])(0),N=Object(c["a"])(h,2),k=N[0],x=N[1],w=30,O=Object(o["useState"])(null),j=Object(c["a"])(O,2),C=j[0],I=j[1],S=Object(o["useState"])(0),q=Object(c["a"])(S,2),K=q[0],D=q[1],T=Object(o["useState"])(!1),A=Object(c["a"])(T,2),H=A[0],P=A[1],W=Object(o["useState"])("\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57"),F=Object(c["a"])(W,2),z=F[0],V=F[1],Z=function(e){var t=e.target.value;b(t),localStorage.setItem(R["g"],t)},B=function(){var e=Object(a["a"])(i.a.mark((function e(){var t,n,a,c,r,o=arguments;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:null,t||(t=v||""),n=t,a=G[E].type,P(!0),0!=n.length){e.next=11;break}return I(null),V("\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57"),D(0),setTimeout((function(){P(!1)}),500),e.abrupt("return");case 11:return e.next=13,Object(L["a"])({keywords:n,type:a,offset:k,limit:w});case 13:if(c=e.sent,setTimeout((function(){P(!1)}),500),200===c.code){e.next=17;break}return e.abrupt("return");case 17:if(!G[E].countKey){e.next=22;break}r=c.result[G[E].countKey],D(Math.ceil(r/w)),e.next=23;break;case 22:return e.abrupt("return",D(0));case 23:if(0!==r&&r){e.next=26;break}return V("\u6ca1\u6709\u641c\u7d22\u5230\u4e0e \u3010 <b>".concat(n,"</b> \u3011 \u76f8\u5173\u7684\u7684").concat(G[E].name)),e.abrupt("return",I(null));case 26:I(c.result);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){e-1!=k&&(Object(p["n"])(0),x(e-1))},$={keywords:v,navActiveIndex:E,result:C,hintText:z,hanldeKeyup:Z,setnavActiveIndex:g,hanleBtnClick:B},Q=G[E].content||d["a"];C||(Q=d["a"]),H&&(Q=J);var ee=function(e,t){if("/search"===e.pathname){var n=parseInt(e.query.type);if("number"!=typeof n||isNaN(n)||n>=G.length)return;g(n),x(0)}};return Object(o["useEffect"])((function(){B()}),[E,k]),Object(o["useEffect"])((function(){l["a"].listen(ee)}),[]),s.a.createElement("div",{className:"".concat(m.a["content-box"]," content-box page-content")},s.a.createElement(f["a"].Provider,{value:$},s.a.createElement(Y,null),s.a.createElement(U,null),s.a.createElement(Q,{hintText:z}),s.a.createElement(M,{seletPage:k+1,pageSize:K,changePage:X})))},function(){var e=Object(o["useContext"])(f["a"]),t=e.keywords,n=e.hanldeKeyup,a=e.hanleBtnClick;return s.a.createElement("div",{className:"".concat(m.a["searchinp-wrap"])},s.a.createElement("div",{className:"".concat(m.a["inp-box"])},s.a.createElement("input",{type:"search",value:t,placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",onChange:n,onKeyDown:function(e){"Enter"==e.key&&a()}}),s.a.createElement("div",{className:"".concat(m.a["btn"]," btn btn-gray iconfont  icon-sousuo1 click"),onClick:function(){return a()}})))}),U=function(){var e=Object(o["useContext"])(f["a"]),t=e.navActiveIndex,n=(e.setnavActiveIndex,function(e){l["a"].replace({pathname:"/search",query:{type:e}})});return s.a.createElement("div",{className:"".concat(m.a["nav-bar"])},G.map((function(e,a){var c="";return t==a&&(c=m.a["active"]),s.a.createElement("div",{key:a,className:"".concat(m.a["nav-item"]," ").concat(c),onClick:function(){return n(a)}},e.name)})))}},"Ng/0":function(e,t,n){"use strict";var a=n("tJVT"),c=n("q1tI"),r=n.n(c),i=n("6mnD"),o=n.n(i);t["a"]=function(e){var t=e.src,n=e.alt,i=void 0===n?"\u56fe\u7247\u63cf\u8ff0":n,s=e.height,l=e.width,u=Object(c["useState"])(!1),m=Object(a["a"])(u,2),d=m[0],f=m[1],v="//photo.tuituisoft.com/picgo/20210114103900.png",p={height:s,width:l,display:d?"block":"none"},b={height:s,width:l,display:d?"none":"block"};function _(){f(!0)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:v,alt:"\u5360\u4f4d\u56fe\u7247",style:b,className:"".concat(o.a["base-image"])}),r.a.createElement("img",{src:t,alt:i,style:p,className:"".concat(o.a["base-image"]),onLoad:_}))}},NsG5:function(e,t,n){e.exports={"list-item":"list-item___2PceP","img-warp":"img-warp___3WOmS","img-buttom-bar":"img-buttom-bar___2Yh6g","name-text":"name-text___3KJw5"}},R2Hq:function(e,t,n){e.exports={"lyrics-item":"lyrics-item___38c_J","header-name":"header-name___HiF7N","show-more":"show-more___33n4A"}},"Vn/K":function(e,t,n){"use strict";n.d(t,"l",(function(){return m})),n.d(t,"q",(function(){return f})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return p})),n.d(t,"k",(function(){return b})),n.d(t,"o",(function(){return _})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return E})),n.d(t,"h",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return N})),n.d(t,"p",(function(){return k})),n.d(t,"b",(function(){return x})),n.d(t,"m",(function(){return w})),n.d(t,"n",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return C})),n.d(t,"r",(function(){return I})),n.d(t,"s",(function(){return S}));n("miYZ");var a=n("tsqr"),c=n("k1fw"),r=(n("2qtc"),n("kLXV")),i=n("q1tI"),o=n.n(i),s=n("x5H0"),l=n("vu0G"),u=r["a"].confirm;function m(e){var t=parseInt(e/60);t=t<10?"0"+t:t;var n=parseInt(e-60*t);return n=n<10?"0"+n:n,t+":"+n}var d={title:"\u9ed8\u8ba4\u6807\u9898",content:"\u9ed8\u8ba4\u5185\u5bb9",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"};function f(e){for(var t in d)e[t]||(e[t]=d[t]);return new Promise((function(t,n){u(Object(c["a"])(Object(c["a"])({},e),{},{onOk:function(){t()},onCancel:function(){n()}}))}))}function v(){document.documentElement.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top="0px",document.body.style.width="100%"}function p(){document.documentElement.style.overflowY="scroll",document.body.style.position="static"}function b(e){return e=parseInt(e),e<=1e4?e:e>1e4&&e<99999999?parseInt(e/1e4)+" \u4e07":parseInt(e/1e8)+" \u4ebf"}function _(e,t){var n=Date.parse(new Date)/1e3,a={data:t,time:n};window.localStorage.setItem(e,JSON.stringify(a))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Date.parse(new Date)/1e3,a=JSON.parse(window.localStorage.getItem(e));return!!(a&&t&&n-t<a.time||a&&0===t)&&a.data}function E(e){for(var t=e.split(/\n/),n=0;n<t.length;n++){var a="",c="",r=!1;t[n]&&(a=t[n].split("]")[0].split("[")[1],a=a.slice(0,5),c=t[n].split("]")[1]),t[n]={time:a,content:c,select:r}}return t}var g=function(e,t){if(!e)return"is not time";if("number"==typeof e&&(e=new Date(e)),/(y+)/.test(t)){var n=e.getFullYear()+"";t=t.replace(RegExp.$1,n.substr(4-RegExp.$1.length))}var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var c in a)if(new RegExp("(".concat(c,")")).test(t)){var r=a[c]+"";t=t.replace(RegExp.$1,1==RegExp.$1.length?r:("00"+r).substr(r.length))}return t};function h(e){if(isNaN(e))return[];for(var t=[],n=0;n<e;n++)t.push(n);return t}var N=function(e,t){var n=null;return function(){var a=arguments,c=this;clearTimeout(n),n=setTimeout((function(){e.apply(c,a)}),t)}},k=function(){return s["a"].emit(l["e"])},x=function(e){return s["a"].emit(l["b"],e)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"playSong";return s["a"].emit(l["a"],e,t)},O=function(e){window.scrollTo({behavior:"smooth",top:e})},j=function(e,t){var n=new RegExp(e,"is");return t.replace(n,"<b>$&</b>")},C=function(e){var t=e.type;return 1==t?o.a.createElement("i",{className:"iconfont icon-nan"}):2==t?o.a.createElement("i",{className:"iconfont icon-nv"}):o.a.createElement("i",{className:"iconfont icon-siglyphalien"})},I=function(e){a["default"].success(e)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u656c\u8bf7\u671f\u5f85\uff01";a["default"].warning(e)}},XDti:function(e,t,n){e.exports={"dj-item":"dj-item___ezM4W",name:"name___2qFOi",gander1:"gander1___XxaxB",gander2:"gander2___3RGmP","dj-name":"dj-name___1W48e"}},XEWl:function(e,t,n){e.exports={pagination:"pagination___pUb-w","btn-item":"btn-item___12S0-",lastpage:"lastpage___1ioJb","page-box":"page-box___34oz_","page-item":"page-item___16kRP"}},YGkd:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("7Ecz"),i=n.n(r),o=n("Ng/0"),s=n("Vn/K"),l=n("sOOk"),u=function(e){var t=e.item,n=e.src,a=void 0===n?"cover":n,r=(e.type,Object(s["k"])(t.playCount)),u=Object(s["l"])(t.duration/1e3);return c.a.createElement("div",{className:"".concat(i.a["mv-item"]),onClick:function(){return Object(l["b"])(t.id)}},c.a.createElement("div",{className:"".concat(i.a["cover"])},c.a.createElement(o["a"],{src:t[a]+"?param=159y120"}),c.a.createElement("div",{className:"".concat(i.a["play-count"])},c.a.createElement("i",{className:"".concat(i.a["classname"]," icon-ziyuan iconfont")}),r),c.a.createElement("div",{className:"".concat(i.a["time"])},u)),c.a.createElement("div",{className:"".concat(i.a["name"]," text-row-2")},t.name))};t["a"]=u},aiZx:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return u}));var a="USER_DATA",c="HOME_DATA",r="COOKIE",i="PLAY_SONG_NAME",o="NOW_PLAY_ID",s="NEW_DVDS",l="PROFILE_PALYLIST_ID",u="SEARCH_KEYWORDS"},cmjm:function(e,t,n){e.exports={singer:"singer___c7Fsn",bg:"bg___VZsH1",time:"time___dkc-E"}},cvrK:function(e,t,n){e.exports={"searchinp-wrap":"searchinp-wrap___yBTCU","inp-box":"inp-box___M1zl-",btn:"btn___2SQhW","content-box":"content-box___1lyUU","nav-bar":"nav-bar___1QfIr","nav-item":"nav-item___1cjxG",active:"active___2bE6-",singer:"singer___flNJG","singer-item":"singer-item___3W9FI",name:"name___2H78C","warp-5":"warp-5___2kVJc",item:"item___2BBk-",lyrics:"lyrics___EUFc4","user-item":"user-item___3dtlq",cell:"cell___1Gn5E",desc:"desc___6Wc8H"}},imZp:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("0vtl"),i=n.n(r),o=n("Vn/K"),s=n("sOOk"),l=["","\u6b4c\u66f2\u6807\u9898","\u65f6\u957f","\u6b4c\u624b","\u4e13\u8f91"];t["a"]=function(e){var t=e.tracks,n=void 0===t?[]:t,a=e.showHead,r=void 0===a||a,u=e.showSinger,m=void 0===u||u,d={display:r?"block":"none"};return c.a.createElement("div",{className:"".concat(i.a["song-list"])},c.a.createElement("div",{style:d},c.a.createElement("div",{className:"".concat(i.a["list-head"]," ").concat(i.a["warp"])},l.map((function(e,t){return c.a.createElement("div",{className:"".concat(i.a["head-item"]," ").concat(i.a["item"]),key:t},e)})))),c.a.createElement("ul",{className:"".concat(i.a["list-warp"]),style:{borderTop:r?"none":"1px solid #d9d9d9"}},n.map((function(e,t){var n="",a=Object(o["l"])(e.dt/1e3);return e.alia[0]&&(n="- (".concat(e.alia[0],")")),c.a.createElement("li",{className:"".concat(i.a["warp"]),key:t},c.a.createElement("div",{className:"".concat(i.a["item"]),onClick:function(){Object(o["m"])({singerName:e.ar[0].name,songId:e.id,songName:e.name,dt:e.dt})}},t+1,c.a.createElement("i",{className:"iconfont icon-ziyuan"})),c.a.createElement("div",{className:"".concat(i.a["item"]," text-row-1 underline"),onClick:function(){return Object(s["e"])(e.id)},title:"".concat(e.name).concat(n," ")},e.name," ",c.a.createElement("span",null,n)),c.a.createElement("div",{className:"".concat(i.a["item"])},a),c.a.createElement("div",{className:"".concat(i.a["item"]," text-row-1 underline"),onClick:function(){return Object(s["d"])(e.ar[0].id)},style:{display:m?"block":"none"}},e.ar[0].name),c.a.createElement("div",{className:"".concat(i.a["item"]," text-row-1 underline"),onClick:function(){return Object(s["a"])(e.al.id)},title:e.al.name},e.al.name))}))))}},o1iF:function(e,t,n){"use strict";var a=n("vDqi"),c=n.n(a),r=n("aiZx"),i="http://47.107.81.99:3000";function o(e){if(e.iscookie&&localStorage.getItem(r["a"])){var t="cookie=".concat(localStorage.getItem(r["a"])),n=/=/.test(e.url)?"&":"?";e.url+="".concat(n).concat(t)}var a=c.a.create({baseURL:i,timeout:1e4,withCredentials:!1});return a.interceptors.response.use((function(e){return e.data}),(function(e){return e})),a(e)}t["a"]=o},sOOk:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n("9kvl"),c=function(e){a["a"].push({pathname:"/songDetail",query:{songId:e}})},r=function(e){a["a"].push({pathname:"/userDetail",query:{id:e}})},i=function(e){a["a"].push({pathname:"/album",query:{id:e}})},o=function(e){a["a"].push({pathname:"/singer",query:{id:e}})},s=function(e){a["a"].push({pathname:"/mv",query:{id:e}})},l=function(e){a["a"].push({pathname:"/playlist",query:{id:e}})}},vu0G:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a="SHOW_LOGIN",c="SHOW_LOADING",r="HIDE_LOADING",i="addNewSong",o="addPlayList"},x5H0:function(e,t,n){"use strict";var a=n("oBTY"),c=n("fWQN"),r=n("mtLc"),i=function(){function e(){Object(c["a"])(this,e),this.subscribers=[]}return Object(r["a"])(e,[{key:"on",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n){var a=this.subscribers[n].events.findIndex((function(e){return t===e}));-1===a&&this.subscribers[n].events.push(t)}else{var c={funName:e,events:[t]};this.subscribers.push(c)}}}},{key:"once",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n)this.subscribers[n].events.push({event:t,isonce:!0});else{var a={funName:e,events:[{event:t,isonce:!0}]};this.subscribers.push(a)}}}},{key:"emit",value:function(){var e=arguments;if(0!==arguments.length){var t=this.subscribers.findIndex((function(t){return t.funName===e[0]}));if(-1!==t&&0!==this.subscribers[t].events.length){var n=Array.prototype.slice.call(arguments);n.splice(0,1);var c=-1;this.subscribers[t].events.forEach((function(e,t){e.isonce?(c=t,e.event.apply(e,Object(a["a"])(n))):e.apply(void 0,Object(a["a"])(n))})),-1!==c&&this.subscribers[t].events.splice(c,1)}}}},{key:"off",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n){var a=this.subscribers[n].events.findIndex((function(e){return t===e||t===e.event}));-1!==a&&this.subscribers[n].events.splice(a,1)}}}}]),e}();t["a"]=new i}}]);