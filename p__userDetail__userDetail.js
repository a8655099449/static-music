(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0bdg":function(e,t,n){"use strict";var a=n("q1tI");t["a"]=Object(a["createContext"])()},"2yZ0":function(e,t,n){e.exports={nothing:"nothing___21qjH"}},"6mnD":function(e,t,n){e.exports={"base-image":"base-image___3KPub"}},F5qy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("NsG5"),i=n.n(c),u=n("9kvl"),o=n("Vn/K"),s=n("Ng/0"),l=function(e){u["a"].push({pathname:"/playlist",query:{id:e}})};t["a"]=function(e){var t=e.item;return t.playCount=Object(o["k"])(t.playCount),r.a.createElement("div",{className:"".concat(i.a["list-item"]),onClick:function(){l(t.id)}},r.a.createElement("div",{className:"".concat(i.a["img-warp"])},r.a.createElement(s["a"],{src:t.coverImgUrl+"?param=140y140"}),r.a.createElement("div",{className:"".concat(i.a["img-buttom-bar"])},r.a.createElement("div",null,r.a.createElement("i",{className:"iconfont icon-erji"}," ",r.a.createElement("span",null,t.playCount))),r.a.createElement("div",null,r.a.createElement("i",{className:"iconfont icon-ziyuan"})))),r.a.createElement("p",{className:"".concat(i.a["name-text"]," text-row-2"),dangerouslySetInnerHTML:{__html:t.name}}))}},F9YG:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("2yZ0"),i=n.n(c),u=n("Ng/0");t["a"]=function(e){var t=e.hintText;return r.a.createElement("div",{className:"".concat(i.a["nothing"])},r.a.createElement(u["a"],{src:"//image.woai996.com/picGo/20210210092240.png"}),r.a.createElement("h3",{dangerouslySetInnerHTML:{__html:t}}))}},"Ng/0":function(e,t,n){"use strict";var a=n("tJVT"),r=n("q1tI"),c=n.n(r),i=n("6mnD"),u=n.n(i);t["a"]=function(e){var t=e.src,n=e.alt,i=void 0===n?"\u56fe\u7247\u63cf\u8ff0":n,o=e.height,s=e.width,l=Object(r["useState"])(!1),f=Object(a["a"])(l,2),m=f[0],d=f[1],p="//photo.tuituisoft.com/picgo/20210114103900.png",v={height:o,width:s,display:m?"block":"none"},b={height:o,width:s,display:m?"none":"block"};function h(){d(!0)}return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:p,alt:"\u5360\u4f4d\u56fe\u7247",style:b,className:"".concat(u.a["base-image"])}),c.a.createElement("img",{src:t,alt:i,style:v,className:"".concat(u.a["base-image"]),onLoad:h}))}},NsG5:function(e,t,n){e.exports={"list-item":"list-item___2PceP","img-warp":"img-warp___3WOmS","img-buttom-bar":"img-buttom-bar___2Yh6g","name-text":"name-text___3KJw5"}},OmIA:function(e,t,n){"use strict";n.r(t);var a=n("9og8"),r=n("tJVT"),c=n("WmNS"),i=n.n(c),u=n("q1tI"),o=n.n(u),s=n("mysY"),l=n.n(s),f=n("PioQ"),m=n("/MKj"),d=n("0bdg"),p=n("Ctmj"),v=n("jbwE"),b=n("Ng/0"),h=n("Vn/K"),g=function(e){var t=Object(u["useContext"])(d["a"]),n=(t.id,t.userInfo);return o.a.createElement("div",{className:"".concat(l.a["user-info"])},o.a.createElement("div",{className:"".concat(l.a["avatar"])},o.a.createElement(b["a"],{src:"".concat(n.profile.avatarUrl,"?param=180y180")})),o.a.createElement("div",{className:"".concat(l.a["desc"])},o.a.createElement("div",{className:"".concat(l.a["uname"])},o.a.createElement("div",null,n.profile.nickname),o.a.createElement("div",null,"lv. ",n.level," "),o.a.createElement(h["a"],{type:n.profile.gender}),o.a.createElement("div",{className:"btn btn-gray"},o.a.createElement("i",{className:"".concat(l.a["classname"]," icon-youjian1 iconfont")})," ","\u53d1\u79c1\u4fe1"),o.a.createElement("div",{className:"btn btn-blue"},o.a.createElement("i",{className:"".concat(l.a["classname"]," icon-jiahaocu iconfont")})," ","\u5173\u6ce8")),o.a.createElement("div",{className:"".concat(l.a["fans"])},o.a.createElement("div",{className:"".concat(l.a["item"])},o.a.createElement("div",null,n.profile.eventCount),o.a.createElement("div",null,"\u52a8\u6001")),o.a.createElement("div",{className:"".concat(l.a["item"])},o.a.createElement("div",null,n.profile.follows),o.a.createElement("div",null,"\u5173\u6ce8")),o.a.createElement("div",{className:"".concat(l.a["item"])},o.a.createElement("div",null,n.profile.followeds),o.a.createElement("div",null,"\u7c89\u4e1d"))),o.a.createElement("div",{className:"".concat(l.a["signature"])},"\u4e2a\u4eba\u4ecb\u7ecd: ",n.profile.signature||n.profile.description)))},E=n("F9YG"),_=n("sOOk"),y=o.a.createElement("div",{style:{height:"400px"}},o.a.createElement(p["a"],null)),N=function(e){var t={singerName:e.song.ar[0].name,songId:e.song.id,songName:e.song.name,dt:e.song.dt};Object(h["m"])(t)},O=function(e){var t,n,c=Object(u["useContext"])(d["a"]),s=c.id,f=c.userInfo,m=Object(u["useState"])(1),p=Object(r["a"])(m,2),b=p[0],h=p[1],g=Object(u["useState"])([]),_=Object(r["a"])(g,2),N=_[0],O=_[1],j=Object(u["useState"])(!0),x=Object(r["a"])(j,2),k=x[0],I=x[1],D=function(){setTimeout((function(){I(!1)}),500)},S=function(){var e=Object(a["a"])(i.a.mark((function e(t){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,e.next=4,Object(v["c"])({type:t,uid:s});case 4:if(n=e.sent,D(),200==n.code){e.next=8;break}return e.abrupt("return");case 8:if(1!=t){e.next=10;break}return e.abrupt("return",O(n.weekData));case 10:O(n.allData),e.next=15;break;case 13:e.prev=13,e.t0=e["catch"](1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(u["useEffect"])((function(){S(b)}),[b]),t=1==b?o.a.createElement("div",null,o.a.createElement("span",{className:"".concat(l.a["active"]),onClick:function(){return h(1)}},"\u6700\u8fd1\u4e00\u5468"),"| ",o.a.createElement("span",{onClick:function(){return h(0)}},"\u6240\u6709\u65f6\u95f4")):o.a.createElement("div",null,o.a.createElement("span",{onClick:function(){return h(1)}},"\u6700\u8fd1\u4e00\u5468")," |",o.a.createElement("span",{className:"".concat(l.a["active"]),onClick:function(){return h(0)}},"\u6240\u6709\u65f6\u95f4")),n=k?y:N.length>0?N.map((function(e,t){if(t<10)return o.a.createElement(w,{item:e,key:t,index:t+1})})):o.a.createElement(E["a"],{hintText:"\u6682\u65e0\u8bb0\u5f55..."}),o.a.createElement("div",{className:"".concat(l.a["listen-top"])},o.a.createElement("header",{className:"".concat(l.a["common-header"])},o.a.createElement("div",null,"\u542c\u6b4c\u6392\u884c ",o.a.createElement("span",null,"\u7d2f\u8ba1\u542c\u6b4c",f.listenSongs,"\u9996")),t),o.a.createElement("div",null,n))},w=function(e){var t=e.item,n=e.index;return o.a.createElement("div",{className:"".concat(l.a["top-item"])},o.a.createElement("div",null,n,"."),o.a.createElement("div",{className:"iconfont icon-ziyuan",onClick:function(){N(t)}}),o.a.createElement("div",null,o.a.createElement("span",{className:"underline",onClick:function(){return Object(_["e"])(t.song.id)}},t.song.name)," ","-"," ",o.a.createElement("span",{className:"underline",onClick:function(){return Object(_["d"])(t.song.ar[0].id)}},t.song.ar[0].name)),o.a.createElement("div",{className:"".concat(l.a["progress"])},o.a.createElement("div",{style:{width:"".concat(t.score,"%")}})))},j=n("F5qy"),x=function(e){var t=e.title,n=void 0===t?"\u9ed8\u8ba4\u6807\u9898":t,a=e.list;return o.a.createElement("div",{className:"".concat(l.a["user-play-list"])},o.a.createElement("header",null,n," \uff08",a.length,"\uff09"),o.a.createElement("div",{className:"".concat(l.a["list-wrap"])},a.map((function(e,t){return o.a.createElement("div",{key:t,className:"".concat(l.a["list-item"])},o.a.createElement(j["a"],{item:e}))}))))},k=o.a.createElement("div",{style:{height:"400px"}},o.a.createElement(p["a"],null)),I=function(e){var t=e.location.query,n=488910132;t.id&&!isNaN(t.id)&&(n=parseInt(t.id));var c=Object(u["useState"])(null),s=Object(r["a"])(c,2),f=s[0],m=s[1],p=Object(u["useState"])([]),b=Object(r["a"])(p,2),E=b[0],_=b[1],y=Object(u["useState"])([]),N=Object(r["a"])(y,2),w=N[0],j=N[1],I=function(){var e=Object(a["a"])(i.a.mark((function e(t){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["a"])({uid:t});case 2:if(n=e.sent,200==n.code){e.next=5;break}return e.abrupt("return");case 5:document.title="".concat(n.profile.nickname," - \u7528\u6237"),m(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(a["a"])(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["e"])({uid:n});case 2:if(t=e.sent,200===t.code){e.next=5;break}return e.abrupt("return");case 5:a=[],r=[],t.playlist.forEach((function(e){e.userId==n?a.push(e):r.push(e)})),_(a),j(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u["useEffect"])((function(){I(n),D(),Object(h["n"])(0)}),[]);var S={id:n,userInfo:f,collectList:w,createList:E};return f?o.a.createElement("div",{className:"".concat(l.a["user-detail"]," content-box page-content")},o.a.createElement(d["a"].Provider,{value:S},o.a.createElement(g,null),o.a.createElement(O,null),o.a.createElement(x,{title:"".concat(f.profile.nickname,"\u521b\u5efa\u7684\u6b4c\u5355"),list:E}),o.a.createElement(x,{title:"".concat(f.profile.nickname,"\u6536\u85cf\u7684\u6b4c\u5355"),list:w}))):k};t["default"]=Object(m["b"])(f["b"],f["a"])(I)},PioQ:function(e,t,n){"use strict";function a(e){return{userInfo:e.userData,isLogin:e.isLogin,isH5:e.isH5}}function r(e){return{setUserData:function(t){e({type:"setUserInfo",data:t})},logout:function(){e({type:"logout"})},setDevice:function(t){e({type:"setDevice",data:t})}}}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},"Vn/K":function(e,t,n){"use strict";n.d(t,"l",(function(){return f})),n.d(t,"q",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"k",(function(){return b})),n.d(t,"o",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return E})),n.d(t,"h",(function(){return _})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return N})),n.d(t,"p",(function(){return O})),n.d(t,"b",(function(){return w})),n.d(t,"m",(function(){return j})),n.d(t,"n",(function(){return x})),n.d(t,"c",(function(){return k})),n.d(t,"a",(function(){return I})),n.d(t,"r",(function(){return D})),n.d(t,"s",(function(){return S}));n("miYZ");var a=n("tsqr"),r=n("k1fw"),c=(n("2qtc"),n("kLXV")),i=n("q1tI"),u=n.n(i),o=n("x5H0"),s=n("vu0G"),l=c["a"].confirm;function f(e){var t=parseInt(e/60);t=t<10?"0"+t:t;var n=parseInt(e-60*t);return n=n<10?"0"+n:n,t+":"+n}var m={title:"\u9ed8\u8ba4\u6807\u9898",content:"\u9ed8\u8ba4\u5185\u5bb9",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"};function d(e){for(var t in m)e[t]||(e[t]=m[t]);return new Promise((function(t,n){l(Object(r["a"])(Object(r["a"])({},e),{},{onOk:function(){t()},onCancel:function(){n()}}))}))}function p(){document.documentElement.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top="0px",document.body.style.width="100%"}function v(){document.documentElement.style.overflowY="scroll",document.body.style.position="static"}function b(e){return e=parseInt(e),e<=1e4?e:e>1e4&&e<99999999?parseInt(e/1e4)+" \u4e07":parseInt(e/1e8)+" \u4ebf"}function h(e,t){var n=Date.parse(new Date)/1e3,a={data:t,time:n};window.localStorage.setItem(e,JSON.stringify(a))}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Date.parse(new Date)/1e3,a=JSON.parse(window.localStorage.getItem(e));return!!(a&&t&&n-t<a.time||a&&0===t)&&a.data}function E(e){for(var t=e.split(/\n/),n=0;n<t.length;n++){var a="",r="",c=!1;t[n]&&(a=t[n].split("]")[0].split("[")[1],a=a.slice(0,5),r=t[n].split("]")[1]),t[n]={time:a,content:r,select:c}}return t}var _=function(e,t){if(!e)return"is not time";if("number"==typeof e&&(e=new Date(e)),/(y+)/.test(t)){var n=e.getFullYear()+"";t=t.replace(RegExp.$1,n.substr(4-RegExp.$1.length))}var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(t)){var c=a[r]+"";t=t.replace(RegExp.$1,1==RegExp.$1.length?c:("00"+c).substr(c.length))}return t};function y(e){if(isNaN(e))return[];for(var t=[],n=0;n<e;n++)t.push(n);return t}var N=function(e,t){var n=null;return function(){var a=arguments,r=this;clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t)}},O=function(){return o["a"].emit(s["e"])},w=function(e){return o["a"].emit(s["b"],e)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"playSong";return o["a"].emit(s["a"],e,t)},x=function(e){window.scrollTo({behavior:"smooth",top:e})},k=function(e,t){var n=new RegExp(e,"is");return t.replace(n,"<b>$&</b>")},I=function(e){var t=e.type;return 1==t?u.a.createElement("i",{className:"iconfont icon-nan"}):2==t?u.a.createElement("i",{className:"iconfont icon-nv"}):u.a.createElement("i",{className:"iconfont icon-siglyphalien"})},D=function(e){a["default"].success(e)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u656c\u8bf7\u671f\u5f85\uff01";a["default"].warning(e)}},aiZx:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l}));var a="USER_DATA",r="HOME_DATA",c="COOKIE",i="PLAY_SONG_NAME",u="NOW_PLAY_ID",o="NEW_DVDS",s="PROFILE_PALYLIST_ID",l="SEARCH_KEYWORDS"},jbwE:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return f}));var a=n("o1iF");function r(e){return Object(a["a"])({url:"/login/cellphone?time="+e.time,method:"post",data:e})}function c(){var e=Date.parse(new Date)/1e3;return Object(a["a"])({url:"/user/level?time=".concat(e),iscookie:!0})}function i(){return Object(a["a"])({url:"/logout"})}function u(){return Object(a["a"])({url:"/login/status",iscookie:!0})}function o(e){return Object(a["a"])({url:"/user/detail",params:e,iscookie:!0})}function s(){return Object(a["a"])({url:"/user/subcount",iscookie:!0})}function l(e){return Object(a["a"])({url:"/user/playlist",iscookie:!0,params:e})}function f(e){return Object(a["a"])({url:"/user/record",iscookie:!0,params:e})}},mysY:function(e,t,n){e.exports={"user-info":"user-info___1xwaZ",avatar:"avatar___i0I54",desc:"desc___3tbCA",uname:"uname___1U06A",fans:"fans___WAC-F",item:"item___8AN2s",signature:"signature___205ey","user-detail":"user-detail___2dAoz","common-header":"common-header___1WYcQ","listen-top":"listen-top___wn3ZI",active:"active___1a1b1","top-item":"top-item___1NNDB",mov:"mov___1rpi8","user-play-list":"user-play-list___1PLJv","list-wrap":"list-wrap___2ClKE","list-item":"list-item___ylA3I"}},o1iF:function(e,t,n){"use strict";var a=n("vDqi"),r=n.n(a),c=n("aiZx"),i="http://47.107.81.99:3000";function u(e){if(e.iscookie&&localStorage.getItem(c["a"])){var t="cookie=".concat(localStorage.getItem(c["a"])),n=/=/.test(e.url)?"&":"?";e.url+="".concat(n).concat(t)}var a=r.a.create({baseURL:i,timeout:1e4,withCredentials:!1});return a.interceptors.response.use((function(e){return e.data}),(function(e){return e})),a(e)}t["a"]=u},sOOk:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n("9kvl"),r=function(e){a["a"].push({pathname:"/songDetail",query:{songId:e}})},c=function(e){a["a"].push({pathname:"/userDetail",query:{id:e}})},i=function(e){a["a"].push({pathname:"/album",query:{id:e}})},u=function(e){a["a"].push({pathname:"/singer",query:{id:e}})},o=function(e){a["a"].push({pathname:"/mv",query:{id:e}})},s=function(e){a["a"].push({pathname:"/playlist",query:{id:e}})}},vu0G:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a="SHOW_LOGIN",r="SHOW_LOADING",c="HIDE_LOADING",i="addNewSong",u="addPlayList"},x5H0:function(e,t,n){"use strict";var a=n("oBTY"),r=n("fWQN"),c=n("mtLc"),i=function(){function e(){Object(r["a"])(this,e),this.subscribers=[]}return Object(c["a"])(e,[{key:"on",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n){var a=this.subscribers[n].events.findIndex((function(e){return t===e}));-1===a&&this.subscribers[n].events.push(t)}else{var r={funName:e,events:[t]};this.subscribers.push(r)}}}},{key:"once",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n)this.subscribers[n].events.push({event:t,isonce:!0});else{var a={funName:e,events:[{event:t,isonce:!0}]};this.subscribers.push(a)}}}},{key:"emit",value:function(){var e=arguments;if(0!==arguments.length){var t=this.subscribers.findIndex((function(t){return t.funName===e[0]}));if(-1!==t&&0!==this.subscribers[t].events.length){var n=Array.prototype.slice.call(arguments);n.splice(0,1);var r=-1;this.subscribers[t].events.forEach((function(e,t){e.isonce?(r=t,e.event.apply(e,Object(a["a"])(n))):e.apply(void 0,Object(a["a"])(n))})),-1!==r&&this.subscribers[t].events.splice(r,1)}}}},{key:"off",value:function(e,t){if("function"===typeof t){var n=this.subscribers.findIndex((function(t){return t.funName===e}));if(-1!==n){var a=this.subscribers[n].events.findIndex((function(e){return t===e||t===e.event}));-1!==a&&this.subscribers[n].events.splice(a,1)}}}}]),e}();t["a"]=new i}}]);