webpackJsonp([100],{290:function(e,t,o){var n=o(0)(o(756),o(990),null,null);e.exports=n.exports},756:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(85),r=o.n(n),s=o(84),a=o.n(s),v=o(77);t.default={directives:{TransferDom:v.a},components:{XHeader:r.a,Actionsheet:a.a},data:function(){return{menus:{menu1:"Take Photo",menu2:"Choose from photos"},showMenus:!1}}}},990:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("br"),e._v(" "),o("x-header",[e._v("This is the page title.")]),e._v(" "),o("br"),e._v(" "),o("x-header",{attrs:{"left-options":{showBack:!1}}},[e._v("do not show Back")]),e._v(" "),o("br"),e._v(" "),o("x-header",{attrs:{"left-options":{backText:""}}},[e._v("set empty back text")]),e._v(" "),o("br"),e._v(" "),o("x-header",{attrs:{"right-options":{showMore:!0}},on:{"on-click-more":function(t){e.showMenus=!0}}},[e._v("with more menu")]),e._v(" "),o("br"),e._v(" "),o("x-header",[e._v("with right link"),o("a",{slot:"right"},[e._v("Feedback")])]),e._v(" "),o("br"),e._v(" "),o("x-header",[e._v("long long long long long long long text"),o("a",{slot:"right"},[e._v("Feedback")])]),e._v(" "),o("br"),e._v(" "),o("x-header",[e._v("with left slot"),o("a",{slot:"left"},[e._v("Close")])]),e._v(" "),o("br"),e._v(" "),o("x-header",[o("span",[e._v("overwrite-left")]),e._v(" "),o("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},slot:"overwrite-left"},[o("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})])]),e._v(" "),o("br"),e._v(" "),o("x-header",{staticStyle:{"background-color":"#000"}},[e._v("custom background color")]),e._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("actionsheet",{attrs:{menus:e.menus,"show-cancel":""},model:{value:e.showMenus,callback:function(t){e.showMenus=t},expression:"showMenus"}})],1)],1)},staticRenderFns:[]}}});