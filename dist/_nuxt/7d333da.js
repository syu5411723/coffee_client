(window.webpackJsonp=window.webpackJsonp||[]).push([[51,44],{404:function(e,t,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(118).default)("1b7833da",content,!0,{sourceMap:!1})},405:function(e,t,n){"use strict";n.r(t);var r=n(402),o={components:{Header:r.Header,Footer:r.Footer,Sec1:r.Sec1,Sec2:r.Sec2,Sec3:r.Sec3,Sec4:r.Sec4,ImgWrapper:r.ImgWrapper},props:["menus","otherMenus"],name:"App"},c=n(42),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"luxy"}},[n("Header"),e._v(" "),n("Sec1"),e._v(" "),n("Sec2"),e._v(" "),n("Sec3",{attrs:{menus:e.menus,otherMenus:e.otherMenus}}),e._v(" "),n("Sec4"),e._v(" "),n("img-wrapper"),e._v(" "),n("Footer")],1)}),[],!1,null,null,null);t.default=component.exports},411:function(e,t,n){"use strict";n(404)},412:function(e,t,n){var r=n(117)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Work+Sans&display=swap);"]),r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);"]),r.push([e.i,'*{margin:0;padding:0;box-sizing:border-box}a{text-decoration:none}body{font-family:"Work Sans",sans-serif;letter-spacing:.04rem;background-color:#edece7}',""]),e.exports=r},414:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(43),n(405)),c=[{id:1,name:"パールグラス",position:"中景〜後景",picture:"/images/banner.jpg",difficulty:"Easy",addition_amount:"High",leaf_length:2,water_quality:"弱酸性～中性  軟水～弱硬水"},{id:2,name:"キューバパールグラス",position:"前景",picture:"/images/banner.jpg",difficulty:"Hard",addition_amount:"High",leaf_length:1,water_quality:"弱酸性～中性  軟水～弱硬水"},{id:3,name:"ニューラージパールグラス",position:"前景",picture:"/images/banner.jpg",difficulty:"Medium",addition_amount:"High",leaf_length:1,water_quality:"弱酸性～中性  軟水～弱硬水"}],l={components:{Home:o.default},data:function(){return{menus:[],otherMenus:[]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,e.params,t.prev=1,t.next=4,n.$get("/menu/");case 4:return r=t.sent,t.next=7,n.$get("/other-menu/");case 7:return o=t.sent,t.abrupt("return",{menus:r,otherMenus:o});case 11:return t.prev=11,t.t0=t.catch(1),data=c,t.abrupt("return",{menus:data,otherMenus:data});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},m=(n(411),n(42)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",[n("Home",{attrs:{menus:e.menus,otherMenus:e.otherMenus}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);