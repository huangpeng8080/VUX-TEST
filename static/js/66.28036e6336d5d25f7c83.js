webpackJsonp([66],{273:function(t,e,i){var n=i(0)(i(740),i(931),null,null);t.exports=n.exports},529:function(t,e,i){"use strict";function n(){var t=window.navigator.userAgent,e=t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return e&&e[2]&&parseInt(e[2].replace(/_/g,"."),10)>=6}function r(){for(var t=["","-webkit-","-ms-","-moz-","-o-"],e="",i=0;i<t.length;i++)e+="position:"+t[i]+"sticky";var n=document.createElement("div"),r=document.body;n.style.cssText="display:none"+e,r.appendChild(n);var o=/sticky/i.test(window.getComputedStyle(n).position);return r.removeChild(n),n=null,o}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.scrollBox||window,o=e.offset||0,a=!0===e.checkStickySupport||!1;"string"==typeof i&&(i=document.getElementById(i));var s=t.offsetTop-o,c=function(){return i===window?document.documentElement.scrollTop:i.scrollTop},u=function(){c()>=s?(t.style.top=o+"px",t.classList.add("vux-fixed")):t.classList.remove("vux-fixed")};a&&(n()||r())?t.classList.add("vux-sticky"):setTimeout(function(){s=t.offsetTop-o,i.addEventListener("scroll",u)},1e3)}},538:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(529);e.default={mounted:function(){var t=this;this.$nextTick(function(){i.i(n.a)(t.$el,{scrollBox:t.scrollBox,offset:t.offset,checkStickySupport:void 0===t.checkStickySupport||t.checkStickySupport})})},props:["scrollBox","offset","checkStickySupport"]}},540:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(15);e.default={mixins:[n.a],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},541:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(15);e.default={mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},554:function(t,e,i){e=t.exports=i(304)(),e.push([t.i,".vux-sticky-box{z-index:500}.vux-sticky{width:100%;position:-webkit-sticky;position:sticky;top:0}.vux-fixed{width:100%;position:fixed;top:0}",""])},555:function(t,e,i){e=t.exports=i(304)(),e.push([t.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#f90;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#f90;border-bottom:3px solid #f90}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#f90;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}",""])},568:function(t,e,i){var n=i(554);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(305)("61f8ab6e",n,!0)},569:function(t,e,i){var n=i(555);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(305)("f7770368",n,!0)},591:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-sticky-box"},[t._t("default")],2)},staticRenderFns:[]}},592:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]}},594:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default")],2)},staticRenderFns:[]}},607:function(t,e,i){i(568);var n=i(0)(i(538),i(591),null,null);t.exports=n.exports},609:function(t,e,i){var n=i(0)(i(540),i(594),null,null);t.exports=n.exports},610:function(t,e,i){i(569);var n=i(0)(i(541),i(592),null,null);t.exports=n.exports},740:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(610),r=i.n(n),o=i(609),a=i.n(o),s=i(607),c=i.n(s);e.default={components:{Tab:r.a,TabItem:a.a,Sticky:c.a}}},931:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("br"),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("div",{staticStyle:{height:"44px"}},[i("sticky",{attrs:{"scroll-box":"vux_view_box_body",offset:46,"check-sticky-support":!1}},[i("tab",{attrs:{"line-width":1}},[i("tab-item",{attrs:{selected:""}},[t._v("正在正映")]),t._v(" "),i("tab-item",[t._v("即将上映")])],1)],1)],1),t._v(" "),t._l(100,function(e){return i("p",[t._v(t._s(e)),i("br")])})],2)},staticRenderFns:[]}}});