(window.webpackJsonp=window.webpackJsonp||[]).push([[31,11,12,13],{282:function(e,t,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(118).default)("3237ccb9",content,!0,{sourceMap:!1})},283:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(118).default)("68d7395f",content,!0,{sourceMap:!1})},284:function(e,t,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(118).default)("24d13f99",content,!0,{sourceMap:!1})},346:function(e,t,n){"use strict";n(282)},347:function(e,t,n){var r=n(117)(!1);r.push([e.i,".menu-img{width:100%;height:100%}",""]),e.exports=r},348:function(e,t,n){"use strict";n(283)},349:function(e,t,n){var r=n(117)(!1);r.push([e.i,".menu-info-wrapper{display:flex}.menu-name{margin-top:5px}",""]),e.exports=r},350:function(e,t,n){"use strict";n(284)},351:function(e,t,n){var r=n(117)(!1);r.push([e.i,".menu-name{margin-top:10px;margin-bottom:10px}",""]),e.exports=r},352:function(e,t,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(118).default)("6c200e2e",content,!0,{sourceMap:!1})},370:function(e,t,n){"use strict";n.r(t);var r={props:["menu"]},l=(n(346),n(42)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"menu-img",attrs:{src:e.menu.picture,alt:""}})])}),[],!1,null,null,null);t.default=component.exports},371:function(e,t,n){"use strict";n.r(t);var r={props:["menu"]},l=(n(348),n(42)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-info-wrapper"},[n("p",{staticClass:"menu-size"},[e._v(e._s(e.menu.size)+" ")]),e._v(" "),n("p",{staticClass:"menu-price"},[e._v(" "+e._s(e.menu.price))])])}),[],!1,null,null,null);t.default=component.exports},372:function(e,t,n){"use strict";n.r(t);var r={props:["menu"]},l=(n(350),n(42)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"menu-name"},[e._v(e._s(e.menu.name))])])}),[],!1,null,null,null);t.default=component.exports},387:function(e,t,n){"use strict";n(352)},388:function(e,t,n){var r=n(117)(!1);r.push([e.i,".main-menu-conrainer{display:flex;justify-content:space-between;margin-bottom:60px}.main-menu-img-wrapper{width:95%;position:relative}.sub-menu-conrainer{text-align:left}",""]),e.exports=r},407:function(e,t,n){"use strict";n.r(t);n(35);var r=n(370),l=n(371),o={head:function(){return{title:"coffee"}},components:{MainMenuName:n(372).default,MainMenuImg:r.default,MainMenuInfo:l.default},props:["menus"],computed:{limitCount:function(){return this.menus.slice(0,3)}}},c=(n(387),n(42)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-menu-conrainer"},[e._l(e.limitCount,(function(menu){return[n("div",{key:menu.id},[n("div",{staticClass:"main-menu-img-wrapper"},[n("main-menu-img",{attrs:{menu:menu}})],1),e._v(" "),n("main-menu-name",{attrs:{menu:menu}}),e._v(" "),n("main-menu-info",{attrs:{menu:menu}})],1)]}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);