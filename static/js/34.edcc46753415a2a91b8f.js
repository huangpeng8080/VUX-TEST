webpackJsonp([34],{238:function(t,e,n){n(855);var i=n(0)(n(707),n(961),"data-v-239fa62b",null);t.exports=i.exports},427:function(t,e){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"";e.bind=function(t,e,i,r){return t[n](s+e,i,r||!1),i},e.unbind=function(t,e,n,r){return t[i](s+e,n,r||!1),n}},437:function(t,e){e.isNumber=function(t){return"number"==typeof t},e.of=function(t,n){if(e.isNumber(t)&&e.isNumber(n))return t/100*n},e.from=function(t,n){if(e.isNumber(t)&&e.isNumber(n))return t/n*100}},452:function(t,e,n){"use strict";function i(t){var e=window.getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}function s(){o.a.apply(this,arguments),this.options.step&&this.step(i(this.slider)||this.options.initialBarWidth,i(this.handle)),this.setStart(this.options.start)}var r=n(463),o=n(464),a=n(454),u=n(437);e.a=s,n.i(r.a)(s,o.a),s.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=u.from(e-this.options.min,this.options.max-this.options.min)||0,i=u.of(n,this.slider.offsetWidth-this.handle.offsetWidth),s=this.options.step?a.find(i,this.steps):i;this.setPosition(s),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},s.prototype.setStep=function(){this.step(i(this.slider)||this.options.initialBarWidth,i(this.handle))},s.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},s.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},s.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?a.find(e,this.steps):e;e<=0?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},s.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)}},453:function(t,e,n){function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var s=n(459),r=/\s+/,o=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~s(e,t)||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===o.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=s(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},i.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},i.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),n=e.split(r);return""===n[0]&&n.shift(),n},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~s(this.array(),t)}},454:function(t,e){e.find=function(t,e){for(var n=null,i=e[0],s=0;s<e.length;s++)n=Math.abs(t-i),Math.abs(t-e[s])<n&&(i=e[s]);return i}},455:function(t,e,n){function i(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(s(t,e))return t;t=t.parentNode}return s(t,e)?t:null}var s=n(460);t.exports=i},456:function(t,e,n){var i=n(455),s=n(427);e.bind=function(t,e,n,r,o){return s.bind(t,n,function(n){var s=n.target||n.srcElement;n.delegateTarget=i(s,e,!0,t),n.delegateTarget&&r.call(t,n)},o)},e.unbind=function(t,e,n,i){s.unbind(t,e,n,i)}},457:function(t,e){function n(t){if(t)return i(t)}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,s=0;s<n.length;s++)if((i=n[s])===e||i.fn===e){n.splice(s,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,s=n.length;i<s;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},458:function(t,e,n){function i(t,e){if(!(this instanceof i))return new i(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function s(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}var r=n(427),o=n(456);t.exports=i,i.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},i.prototype.bind=function(t,e){var n=s(t),i=this.el,a=this.obj,u=n.name;e=e||"on"+u;var l=[].slice.call(arguments,2),h=function(){var t=[].slice.call(arguments).concat(l);a[e].apply(a,t)};return n.selector?h=o.bind(i,n.selector,u,h):r.bind(i,u,h),this.sub(u,e,h),h},i.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&r.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}},459:function(t,e){t.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},460:function(t,e,n){function i(t,e){if(!t||1!==t.nodeType)return!1;if(o)return o.call(t,e);for(var n=s.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1}var s=n(462),r=window.Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;t.exports=i},461:function(t,e,n){function i(t,e){this.obj=e||{},this.el=t}var s=n(457),r=n(427);t.exports=function(t,e){return new i(t,e)},s(i.prototype),i.prototype.bind=function(){function t(s){n.onmouseup&&n.onmouseup(s),r.unbind(document,"mousemove",e),r.unbind(document,"mouseup",t),i.emit("up",s)}function e(t){n.onmousemove&&n.onmousemove(t),i.emit("move",t)}var n=this.obj,i=this;return i.down=function(s){n.onmousedown&&n.onmousedown(s),r.bind(document,"mouseup",t),r.bind(document,"mousemove",e),i.emit("down",s)},r.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){r.unbind(this.el,"mousedown",this.down),this.down=null}},462:function(t,e){function n(t,e){return e.querySelector(t)}e=t.exports=function(t,e){return e=e||document,n(t,e)},e.all=function(t,e){return e=e||document,e.querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},463:function(t,e,n){"use strict";function i(){var t=o.call(arguments);if(t.length)return"function"!=typeof t[0]?i.merge(t):void i.inherits.apply(null,t)}n.d(e,"a",function(){return a});var s=n(470),r=n.n(s),o=Array.prototype.slice;i.extend=function(t,e){var n=this,s=function(){return n.apply(this,arguments)};return i.merge([s,this]),i.inherits(s,this),t&&i.merge([s.prototype,t]),e&&i.merge([s,e]),s.extend=this.extend,s},i.inherits=function(t,e){t.super_=e,r.a?t.prototype=r()(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}):(t.prototype=new e,t.prototype.constructor=t)},i.merge=function(t){for(var e=2===t.length?t.shift():{},n=null,i=0,s=t.length;i<s;i++){n=t[i];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e};var a=i.inherits},464:function(t,e,n){"use strict";function i(t,e){if(!(this instanceof i))return new i(t,e);this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init()}var s=n(461),r=n(458),o=n(453),a=n(437);e.a=i,i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=r(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=s(this.handle,this),this.mouse.bind()},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},i.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},i.prototype.setValue=function(t,e){var n=a.from(parseFloat(t),e);if("0px"===t||0===e)i=this.options.min;else{var i=a.of(n,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var s=!1;s=this.element.value!==i,this.element.value=i,this.options.callback(i),s&&this.changeEvent()},i.prototype.step=function(t,e){for(var n=t-e,i=a.from(this.checkStep(this.options.step),this.options.max-this.options.min),s=a.of(i,n),r=[],o=0;o<=n;o+=s)r.push(o);this.steps=r;for(var u=10;u>=0;u--)this.steps[r.length-u]=n-s*u;return this.steps},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),o(this.slider).add("range-bar-disabled"))},i.prototype.unselectable=function(t,e){o(this.slider).has("unselectable")||!0!==e?o(this.slider).remove("unselectable"):o(this.slider).add("unselectable")},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()}},465:function(t,e,n){"use strict";var i=n(452),s={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1};e.a=function(t,e){e=e||{};for(var n in s)null==e[n]&&(e[n]=s[n]);return new i.a(t,e)}},468:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(465);e.default={props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:0},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var n={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80};0!==t.step&&(n.step=t.step),t.range=new i.a(t.$el.querySelector(".vux-range-input"),n);var s=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+s+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px"})},methods:{update:function(){var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}}}},470:function(t,e,n){t.exports={default:n(471),__esModule:!0}},471:function(t,e,n){n(472);var i=n(11).Object;t.exports=function(t,e){return i.create(t,e)}},472:function(t,e,n){var i=n(23);i(i.S,"Object",{create:n(40)})},473:function(t,e,n){e=t.exports=n(304)(),e.push([t.i,".range-bar{background-color:#a9acb1;border-radius:15px;display:block;height:1px;position:relative;width:100%}.range-bar-disabled{opacity:.5}.range-quantity{background-color:#04be02;border-radius:15px;display:block;height:100%;width:0}.range-handle{background-color:#fff;border-radius:100%;cursor:move;height:30px;left:0;top:-13px;position:absolute;width:30px;box-shadow:0 1px 3px rgba(0,0,0,.4)}.range-max,.range-min{color:#181819;font-size:12px;position:absolute;text-align:center;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:24px}.range-min{left:-30px}.range-max{right:-30px}.unselectable{-webkit-user-select:none;user-select:none}.range-disabled{cursor:default}",""])},476:function(t,e,n){var i=n(473);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(305)("5e51d47b",i,!0)},484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},staticRenderFns:[]}},488:function(t,e,n){n(476);var i=n(0)(n(468),n(484),null,null);t.exports=i.exports},707:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(488),s=n.n(i);e.default={data:function(){return{number:10,min:0,max:250,step:1,rangeBarHeight:4,error:null}},components:{Range:s.a}}},783:function(t,e,n){e=t.exports=n(304)(),e.push([t.i,".record-component[data-v-239fa62b]{padding:10px 0 0}.value-range[data-v-239fa62b]{margin-top:20px;margin-bottom:20px;margin-right:40px!important;margin-left:40px!important}",""])},855:function(t,e,n){var i=n(783);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(305)("3290b648",i,!0)},961:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-component"},[n("div",[t._v(t._s(t.number))]),t._v(" "),n("range",{staticClass:"value-range",attrs:{min:t.min,max:t.max,step:t.step,"range-bar-height":t.rangeBarHeight,decimal:""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1)},staticRenderFns:[]}}});