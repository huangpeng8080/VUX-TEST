webpackJsonp([65],{1042:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("group",{attrs:{title:e.$t("Basic Usage")}},[i("x-switch",{attrs:{title:e.$t("default false")}}),e._v(" "),i("x-switch",{attrs:{title:e.$t("default true"),"inline-desc":e.value1+""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),i("group",{attrs:{title:e.$t("disabled")}},[i("x-switch",{attrs:{title:e.$t("default false"),disabled:""}}),e._v(" "),i("x-switch",{attrs:{title:e.$t("default true"),value:!0,disabled:""}})],1),e._v(" "),i("group",{attrs:{title:e.$t("html title")}},[i("x-switch",{attrs:{disabled:"",title:e.$t("switch red")}})],1)],1)},staticRenderFns:[]}},298:function(e,t,i){var r=i(0)(i(764),i(1042),null,null);e.exports=r.exports},323:function(e,t,i){i(330);var r=i(0)(null,i(331),null,null);e.exports=r.exports},324:function(e,t,i){i(327);var r=i(0)(i(325),i(328),null,null);e.exports=r.exports},325:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},326:function(e,t,i){t=e.exports=i(304)(),t.push([e.i,'.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-blank-half:before{content:"\\2002";speak:none}.vux-blank-full:before{content:"\\2003";speak:none}.vux-no-group-title{margin-top:.77em}',""])},327:function(e,t,i){var r=i(326);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(305)("03037608",r,!0)},328:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("div",{staticClass:"weui-cells__title",style:{color:e.titleColor},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!e.title},style:{marginTop:"number"==typeof e.gutter?e.gutter+"px":e.gutter}},[e._t("after-title"),e._v(" "),e._t("default")],2)])},staticRenderFns:[]}},329:function(e,t,i){t=e.exports=i(304)(),t.push([e.i,".vux-label-desc{font-size:14px;color:#666}",""])},330:function(e,t,i){var r=i(329);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(305)("1ac74252",r,!0)},331:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-label-desc"},[e._t("default")],2)},staticRenderFns:[]}},373:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(323),o=i.n(r);t.default={components:{InlineDesc:o.a},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title);return{display:"block",width:Math.min(e?5:this.title.length+1,14)+"em"}}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number]},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)},value:function(e){this.currentValue=e}}}},374:function(e,t,i){t=e.exports=i(304)(),t.push([e.i,'.weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-cell_switch{padding-top:6px;padding-bottom:6px}.weui-switch{-webkit-appearance:none;appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;-webkit-transition:background-color .1s,border .1s;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:" ";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;-webkit-transition:-webkit-transform .35s cubic-bezier(.45,1,.4,1);transition:-webkit-transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1),-webkit-transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:" ";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);-webkit-transition:-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35);transition:-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35),-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#ffe26d;background-color:#ffe26d}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-cell_switch .weui-cell__ft{font-size:0}input.weui-switch[disabled]{opacity:.6}.vux-x-switch.weui-cell_switch{padding-top:6px;padding-bottom:6px}',""])},375:function(e,t,i){var r=i(374);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(305)("a6e3c4e4",r,!0)},376:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[i("label",{staticClass:"weui-label",style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{__c:function(t){var i=e.currentValue,r=t.target,o=!!r.checked;if(Array.isArray(i)){var l=e._i(i,null);o?l<0&&(e.currentValue=i.concat(null)):l>-1&&(e.currentValue=i.slice(0,l).concat(i.slice(l+1)))}else e.currentValue=o}}})])])},staticRenderFns:[]}},377:function(e,t,i){i(375);var r=i(0)(i(373),i(376),null,null);e.exports=r.exports},764:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(377),o=i.n(r),l=i(324),n=i.n(l);t.default={components:{XSwitch:o.a,Group:n.a},data:function(){return{value1:!0}}}}});