(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo1-demo1~pages-demos-demo2-demo2~pages-demos-demo3-demo3~pages-demos-demo4-demo4~page~121e1205"],{"0ba8":function(t,e,a){var i=a("b9c7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2aba9062",i,!0,{sourceMap:!1,shadowMode:!1})},"1bfd":function(t,e,a){"use strict";a.r(e);var i=a("788f"),n=a("8f21");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("7753");var o,b=a("f0c5"),s=Object(b["a"])(n["default"],i["b"],i["c"],!1,null,"7b9721c5",null,!1,i["a"],o);e["default"]=s.exports},2416:function(t,e,a){"use strict";a("7db0"),a("c975"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("e455"),n=34,r={props:{value:[String,Number],height:{type:String,default:"50px"},iconSize:{type:String,default:"22px"},textSize:{type:String,default:"12px"},textHeight:{type:String,default:"18px"},dotColor:{type:String,default:"#F56C6C"},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean,default:!0},animate:String,closeAnimateOnRaisede:{type:Boolean,default:!0},border:{type:Boolean,default:!0},borderColor:{type:String,default:"#DCDFE6"},bgColor:{type:String,default:"#FFF"},inactiveColor:{type:String,default:"#909399"},activeColor:{type:String,default:"#409EFF"},inactiveTextColor:String,activeTextColor:String,safeAreaInsetBottom:{type:Boolean,default:!0},hideTabbar:{type:Boolean,default:!0}},data:function(){return{active:this.value,activeItem:{},tabbarItems:[],hasRaisede:!1,isIphoneX:!1}},computed:{tabbarItemsLength:function(){return this.tabbarItems.length},safeAreaHeight:function(){return this.isIphoneX&&this.safeAreaInsetBottom?n:0},tabbarHeight:function(){var t=(0,i.getPx)(this.height),e=this.hasRaisede?(0,i.getPx)(this.iconSize):0,a=t+this.safeAreaHeight+e;return a}},provide:function(){return{tabbar:this}},created:function(){this.hideTabbar&&uni.hideTabBar();var t=uni.getSystemInfoSync(),e=t.model,a=t.safeArea;(e.indexOf("iPhone")>-1&&a&&a.top>20||e.indexOf("iPhone X")>-1||e.indexOf("iPhone 1")>-1)&&(this.isIphoneX=!0),this.getTabbarHeight()},methods:{getTabbarHeight:function(){return this.tabbarHeight}},watch:{value:function(t){this.active=t},active:function(t){this.activeItem=this.tabbarItems.find((function(e){return e.name===t})),this.$emit("input",t),this.$emit("change",this.activeItem)},tabbarItemsLength:function(){if(!this.hasRaisede)for(var t=0;t<this.tabbarItems.length;t++){var e=this.tabbarItems[t];if(e.raisede){this.hasRaisede=!0;break}}}}};e.default=r},5509:function(t,e,a){var i=a("98bb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9139df5c",i,!0,{sourceMap:!1,shadowMode:!1})},"572e":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"lb-tabbar"},[a("v-uni-view",{class:["lb-tabbar-content",t.fixed?"lb-tabbar--fixed":""],style:{backgroundColor:t.bgColor,paddingBottom:t.safeAreaHeight+"px"}},[t._t("default"),t.border?a("v-uni-view",{staticClass:"lb-tabbar-border",style:{backgroundColor:t.borderColor}}):t._e()],2),t.placeholder?a("v-uni-view",{staticClass:"lb-tabbar-placeholder",style:{height:t.tabbarHeight+"px"}}):t._e()],1)},r=[]},"632a":function(t,e,a){"use strict";a.r(e);var i=a("2416"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},7753:function(t,e,a){"use strict";var i=a("5509"),n=a.n(i);n.a},"788f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["lb-tabbar-item","animate__animated",t.isActive?"lb-tabbar-item--active":""],style:{height:t.tabbarInfo.height},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTap.apply(void 0,arguments)}}},[a("v-uni-view",{class:["lb-tabbar-item__icon","lb-tabbar-item__icon--"+(t.raisede?"raisede":"default"),t.isAnimate?"animate__animated animate__"+t.tabbarInfo.animate:""],style:{transform:t.raisede?"translateY(-"+t.ty+"px) scale(2)":""}},[t.isImage?a("v-uni-image",{staticClass:"lb-tabbar-item__image",style:{width:t.tabbarInfo.iconSize,height:t.tabbarInfo.iconSize},attrs:{src:t.icon}}):a("v-uni-text",{class:["lb-tabbar-icon",t.iconPrefix,t.iconPrefix+"-"+t.icon,t.isActive?"lb-tabbar-item__icon--active":""],style:{width:t.tabbarInfo.iconSize,height:t.tabbarInfo.iconSize,lineHeight:t.tabbarInfo.iconSize,fontSize:t.tabbarInfo.iconSize,color:t.isActive?t.tabbarInfo.activeColor:t.tabbarInfo.inactiveColor}},[t._v(t._s(t.iconCode))]),t.dot?a("v-uni-text",{class:["lb-tabbar-item__dot",t.info||0===t.info?"lb-tabbar-item__dot--info":""],style:{backgroundColor:t.tabbarInfo.dotColor}},[t._v(t._s(t.info||0===t.info?t.info:""))]):t._e()],1),a("v-uni-view",{class:["lb-tabbar-item__text",t.isActive?"lb-tabbar-item__text--active":""],style:{fontSize:t.tabbarInfo.textSize,lineHeight:t.tabbarInfo.textHeight,color:t.isActive?t.tabbarInfo.activeTextColor||t.tabbarInfo.activeColor:t.tabbarInfo.inactiveTextColor||t.tabbarInfo.inactiveColor}},[t._t("default")],2)],1)},r=[]},"88f7":function(t,e,a){"use strict";var i=a("0ba8"),n=a.n(i);n.a},"8f21":function(t,e,a){"use strict";a.r(e);var i=a("c7a7"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"939a":function(t,e,a){"use strict";a.r(e);var i=a("572e"),n=a("632a");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("88f7");var o,b=a("f0c5"),s=Object(b["a"])(n["default"],i["b"],i["c"],!1,null,"d1031f2a",null,!1,i["a"],o);e["default"]=s.exports},"98bb":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.lb-tabbar-content[data-v-7b9721c5]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-tabbar--fixed[data-v-7b9721c5]{position:fixed;left:0;right:0;bottom:0}.lb-tabbar-border[data-v-7b9721c5]{height:1px;position:absolute;left:0;right:0;top:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}\nlb-tabbar-item[data-v-7b9721c5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.lb-tabbar-item[data-v-7b9721c5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.lb-tabbar-item__text--active[data-v-7b9721c5]{-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-tabbar-item__icon[data-v-7b9721c5]{position:relative}.lb-tabbar-icon[data-v-7b9721c5]{position:relative;\r\nline-height:1;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased\n}.lb-tabbar-item__icon--active[data-v-7b9721c5]{-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-tabbar-item__icon--raisede[data-v-7b9721c5]{background-color:#fff;border-radius:9999px;position:relative;\r\nz-index:1\n}.lb-tabbar-item__dot[data-v-7b9721c5]{width:8px;height:8px;border-radius:9999px;position:absolute;top:0;right:0}.lb-tabbar-item__dot--info[data-v-7b9721c5]{\r\nwidth:inherit;height:inherit;line-height:1.2;\r\n\r\n\r\nmargin-top:5px;font-size:12px;padding-left:4px;padding-right:4px;text-align:center;color:#fff;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.animate__animated[data-v-7b9721c5]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes zoomIn-data-v-7b9721c5{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn-data-v-7b9721c5{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn[data-v-7b9721c5]{-webkit-animation-name:zoomIn-data-v-7b9721c5;animation-name:zoomIn-data-v-7b9721c5}@-webkit-keyframes bounce-data-v-7b9721c5{from,\r\n  20%,\r\n  53%,\r\n  to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,\r\n  43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes bounce-data-v-7b9721c5{from,\r\n  20%,\r\n  53%,\r\n  to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,\r\n  43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce[data-v-7b9721c5]{-webkit-animation-name:bounce-data-v-7b9721c5;animation-name:bounce-data-v-7b9721c5;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes rubberBand-data-v-7b9721c5{from{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand-data-v-7b9721c5{from{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__rubberBand[data-v-7b9721c5]{-webkit-animation-name:rubberBand-data-v-7b9721c5;animation-name:rubberBand-data-v-7b9721c5}@-webkit-keyframes bounceIn-data-v-7b9721c5{from,\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80%,\r\n  to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn-data-v-7b9721c5{from,\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80%,\r\n  to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__bounceIn[data-v-7b9721c5]{-webkit-animation-name:bounceIn-data-v-7b9721c5;animation-name:bounceIn-data-v-7b9721c5}@-webkit-keyframes fadeIn-data-v-7b9721c5{from{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-7b9721c5{from{opacity:0}to{opacity:1}}.animate__fadeIn[data-v-7b9721c5]{-webkit-animation-name:fadeIn-data-v-7b9721c5;animation-name:fadeIn-data-v-7b9721c5}',""]),t.exports=e},b9c7:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.lb-tabbar-content[data-v-d1031f2a]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-tabbar--fixed[data-v-d1031f2a]{position:fixed;left:0;right:0;bottom:0}.lb-tabbar-border[data-v-d1031f2a]{height:1px;position:absolute;left:0;right:0;top:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}\nlb-tabbar-item[data-v-d1031f2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n.lb-tabbar-item[data-v-d1031f2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.lb-tabbar-item__text--active[data-v-d1031f2a]{-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-tabbar-item__icon[data-v-d1031f2a]{position:relative}.lb-tabbar-icon[data-v-d1031f2a]{position:relative;\r\nline-height:1;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased\n}.lb-tabbar-item__icon--active[data-v-d1031f2a]{-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-tabbar-item__icon--raisede[data-v-d1031f2a]{background-color:#fff;border-radius:9999px;position:relative;\r\nz-index:1\n}.lb-tabbar-item__dot[data-v-d1031f2a]{width:8px;height:8px;border-radius:9999px;position:absolute;top:0;right:0}.lb-tabbar-item__dot--info[data-v-d1031f2a]{\r\nwidth:inherit;height:inherit;line-height:1.2;\r\n\r\n\r\nmargin-top:5px;font-size:12px;padding-left:4px;padding-right:4px;text-align:center;color:#fff;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}',""]),t.exports=e},c7a7:function(t,e,a){"use strict";a("c975"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("e455"),n={props:{name:[String,Number],text:[String,Number],icon:String,iconPrefix:String,dot:Boolean,info:[String,Number],raisede:Boolean},inject:["tabbar"],data:function(){return{height:"",tabbarInfo:{}}},computed:{isImage:function(){return this.icon&&this.icon.indexOf("/")>-1},isActive:function(){return this.tabbarInfo.value===this.name},isAnimate:function(){return this.isActive&&this.tabbarInfo.animate&&!(this.raisede&&this.tabbarInfo.closeAnimateOnRaisede)},ty:function(){var t=(0,i.getPx)(this.tabbarInfo.height),e=(0,i.getPx)(this.tabbarInfo.textHeight);return t/2-e/2},iconCode:function(){var t="";return t}},created:function(){this.tabbarInfo=this.tabbar._props,this.tabbar.tabbarItems.push(this._props)},methods:{handleTap:function(){this.tabbar.active=this.name,this.$emit("click",this._props)}}};e.default=n},e455:function(t,e,a){"use strict";function i(t){return t?(t.indexOf("rpx")>-1?(t=+t.replace("rpx",""),t=uni.upx2px(t)):t=+t.replace("px",""),t):0}a("c975"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.getPx=i}}]);