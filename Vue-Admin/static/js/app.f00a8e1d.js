(function(e){function t(t){for(var n,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o={app:0},c=[];function i(e){return s.p+"Vue-Admin/static/js/"+({}[e]||e)+"."+{"chunk-08f75405":"7d70932e","chunk-16394177":"07137269","chunk-23ceb335":"7434a4bc","chunk-3db27820":"2bfcb587","chunk-45a4c2e8":"956cd7a5","chunk-4fedb2dc":"01b1b352","chunk-532944e2":"c6e9c9f7","chunk-53440e1c":"3620b76b","chunk-55793324":"97fe9f3f","chunk-593fc17b":"219c03a6","chunk-5ec8316c":"3c2a0ba6","chunk-5f933a78":"eb509c1a","chunk-75b80875":"02a7ff9e","chunk-7fbdbaef":"d2ccbca0","chunk-8b98aea4":"67656327","chunk-8c6205fe":"5272ee59","chunk-d629dbf4":"55248ee0","chunk-d89bc5d2":"be2d14db","chunk-2d224b0e":"5579f4b1","chunk-f5310e00":"da908fd8","chunk-ff49374e":"bf42c5d9"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-08f75405":1,"chunk-16394177":1,"chunk-3db27820":1,"chunk-45a4c2e8":1,"chunk-4fedb2dc":1,"chunk-532944e2":1,"chunk-53440e1c":1,"chunk-55793324":1,"chunk-593fc17b":1,"chunk-5ec8316c":1,"chunk-5f933a78":1,"chunk-75b80875":1,"chunk-7fbdbaef":1,"chunk-8b98aea4":1,"chunk-8c6205fe":1,"chunk-d629dbf4":1,"chunk-d89bc5d2":1,"chunk-f5310e00":1,"chunk-ff49374e":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="Vue-Admin/static/css/"+({}[e]||e)+"."+{"chunk-08f75405":"81e6ed41","chunk-16394177":"d728e0ed","chunk-23ceb335":"31d6cfe0","chunk-3db27820":"fb00d19a","chunk-45a4c2e8":"fb00d19a","chunk-4fedb2dc":"899a3861","chunk-532944e2":"85b9b2c4","chunk-53440e1c":"f92e993e","chunk-55793324":"da3810c6","chunk-593fc17b":"da3810c6","chunk-5ec8316c":"f92e993e","chunk-5f933a78":"81e6ed41","chunk-75b80875":"05888028","chunk-7fbdbaef":"9bf51319","chunk-8b98aea4":"6d56f06f","chunk-8c6205fe":"6d56f06f","chunk-d629dbf4":"a6c94407","chunk-d89bc5d2":"94d5c61b","chunk-2d224b0e":"31d6cfe0","chunk-f5310e00":"05888028","chunk-ff49374e":"899a3861"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.request=n,delete r[e],h.parentNode.removeChild(h),a(c)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");c.type=n,c.request=r,a[1](c)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"11cf":function(e,t,a){},1997:function(e,t,a){},"2a68":function(e,t,a){var n={"./views/Test":["78c1","chunk-7fbdbaef"],"./views/Test.vue":["78c1","chunk-7fbdbaef"],"./views/charts/barchart":["70e6","chunk-55793324"],"./views/charts/barchart/":["70e6","chunk-55793324"],"./views/charts/barchart/BarChart":["e670","chunk-593fc17b"],"./views/charts/barchart/BarChart.vue":["e670","chunk-593fc17b"],"./views/charts/barchart/index":["70e6","chunk-55793324"],"./views/charts/barchart/index.js":["70e6","chunk-55793324"],"./views/charts/linechart":["b5ab","chunk-8b98aea4"],"./views/charts/linechart/":["b5ab","chunk-8b98aea4"],"./views/charts/linechart/LineChart":["1411","chunk-8c6205fe"],"./views/charts/linechart/LineChart.vue":["1411","chunk-8c6205fe"],"./views/charts/linechart/index":["b5ab","chunk-8b98aea4"],"./views/charts/linechart/index.js":["b5ab","chunk-8b98aea4"],"./views/charts/piechart":["aa83","chunk-5ec8316c"],"./views/charts/piechart/":["aa83","chunk-5ec8316c"],"./views/charts/piechart/PieChart":["f18f","chunk-53440e1c"],"./views/charts/piechart/PieChart.vue":["f18f","chunk-53440e1c"],"./views/charts/piechart/index":["aa83","chunk-5ec8316c"],"./views/charts/piechart/index.js":["aa83","chunk-5ec8316c"],"./views/charts/radarchart":["cde3","chunk-45a4c2e8"],"./views/charts/radarchart/":["cde3","chunk-45a4c2e8"],"./views/charts/radarchart/RadarChart":["ad94","chunk-3db27820"],"./views/charts/radarchart/RadarChart.vue":["ad94","chunk-3db27820"],"./views/charts/radarchart/index":["cde3","chunk-45a4c2e8"],"./views/charts/radarchart/index.js":["cde3","chunk-45a4c2e8"],"./views/charts/scatterchart":["19ea","chunk-5f933a78"],"./views/charts/scatterchart/":["19ea","chunk-5f933a78"],"./views/charts/scatterchart/ScatterChart":["fe51","chunk-08f75405"],"./views/charts/scatterchart/ScatterChart.vue":["fe51","chunk-08f75405"],"./views/charts/scatterchart/index":["19ea","chunk-5f933a78"],"./views/charts/scatterchart/index.js":["19ea","chunk-5f933a78"],"./views/components":["61b2"],"./views/components/":["61b2"],"./views/components/Content":["7dfc"],"./views/components/Content.vue":["7dfc"],"./views/components/Search":["79e6"],"./views/components/Search.vue":["79e6"],"./views/components/index":["61b2"],"./views/components/index.js":["61b2"],"./views/config/configuration":["dffb","chunk-4fedb2dc"],"./views/config/configuration/":["dffb","chunk-4fedb2dc"],"./views/config/configuration/Configuration":["812c","chunk-ff49374e"],"./views/config/configuration/Configuration.vue":["812c","chunk-ff49374e"],"./views/config/configuration/index":["dffb","chunk-4fedb2dc"],"./views/config/configuration/index.js":["dffb","chunk-4fedb2dc"],"./views/dashboard":["059d","chunk-f5310e00"],"./views/dashboard/":["059d","chunk-f5310e00"],"./views/dashboard/Dashboard":["5c3a","chunk-75b80875"],"./views/dashboard/Dashboard.vue":["5c3a","chunk-75b80875"],"./views/dashboard/index":["059d","chunk-f5310e00"],"./views/dashboard/index.js":["059d","chunk-f5310e00"],"./views/manage/users":["e0e2","chunk-d89bc5d2","chunk-2d224b0e"],"./views/manage/users/":["e0e2","chunk-d89bc5d2","chunk-2d224b0e"],"./views/manage/users/UserEdit":["febd","chunk-23ceb335"],"./views/manage/users/UserEdit.vue":["febd","chunk-23ceb335"],"./views/manage/users/Users":["5fa2","chunk-d89bc5d2"],"./views/manage/users/Users.vue":["5fa2","chunk-d89bc5d2"],"./views/manage/users/index":["e0e2","chunk-d89bc5d2","chunk-2d224b0e"],"./views/manage/users/index.js":["e0e2","chunk-d89bc5d2","chunk-2d224b0e"]};function r(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id="2a68",e.exports=r},4360:function(e,t,a){"use strict";var n=a("2b0e"),r=a("2f62"),o=a("f499"),c=a.n(o),i=a("4328"),s=a.n(i),u=a("db49"),l={title:document.title,loading:!1,userInfo:JSON.parse(sessionStorage.getItem("userInfo"))||"",resError:""},d={getUserInfo:function(e){return e.userInfo},getResError:function(e){return e.resError}},h={TITLE:function(e,t){document.title="production"===u["a"].env?"".concat(e.title," | ").concat(t):"".concat(u["a"].env," ) ").concat(e.title," | ").concat(t)},LOADING:function(e,t){e.loading=t},USER_INFO:function(e,t){e.userInfo=t,sessionStorage.setItem("userInfo",c()(t))},RES_ERROR:function(e,t){e.resError=t?{status:t.status,statusText:t.statusText,statusCode:"".concat(t.status," ").concat(t.statusText),error:{"Response Data":t.data,"Request URL":t.config.url,"Request Method":t.config.method.toUpperCase(),"Form Data":s.a.parse(t.config.data)}}:""}},m={state:l,getters:d,mutations:h},f=(a("28a5"),a("a18c")),p=a("ed08"),b=a("c695"),g={menu:JSON.parse(sessionStorage.getItem("menu"))||[],menuActive:sessionStorage.getItem("menuActive")||"/",menuOpened:sessionStorage.getItem("menuOpened")||"",routes:!sessionStorage.getItem("menu")},v={getMenu:function(e){return e.menu},getMenuActive:function(e){return e.menuActive},getMenuOpened:function(e){return e.menuOpened}},k={MENU:function(e,t){if(e.routes){var a=p["a"].getRoutes(t);f["a"].addRoutes(a),e.routes=!1}e.menu=t,sessionStorage.setItem("menu",c()(t))},MENU_SELECT:function(e,t){f["a"].push(t),e.menuActive=t,e.menuOpened="/".concat(t.split("/")[1]),sessionStorage.setItem("menuActive",t),sessionStorage.setItem("menuOpened",e.menuOpened)},MENU_RESET:function(e){e.menu=[],e.menuActive="/",e.menuOpened="",sessionStorage.clear()}},y={handleMenu:function(e){var t=e.commit;Object(b["b"])().then(function(e){t("MENU",e.data),t("MENU_SELECT","/")})}},x={state:g,getters:v,mutations:k,actions:y},w=(a("7f7f"),{tabs:JSON.parse(sessionStorage.getItem("tabs"))||[]}),S={getTabs:function(e){return e.tabs}},_={NEW_TABS:function(e,t){var a=JSON.parse(sessionStorage.getItem("menu"));if(!a||e.tabs.some(function(e){return e["path"]===t})||"/"===t)return!1;var n,r="/".concat(t.split("/")[1]),o=a.filter(function(e){return e["path"]===r})[0]["children"];n=o?o.filter(function(e){return e["path"]===t})[0]:a.filter(function(e){return e["path"]===t})[0],e.tabs.push({name:n["name"],path:n["path"]}),sessionStorage.setItem("tabs",c()(e.tabs))},CLOSE_TABS:function(e,t){switch(t[0]){case"closeAllTabs":e.tabs=[];break;case"closeOtherTabs":e.tabs=e.tabs.filter(function(e){return e["path"]===t[1]});break;default:e.tabs=e.tabs.filter(function(e){return e["path"]!==t})}sessionStorage.setItem("tabs",c()(e.tabs))},TABS_RESET:function(e){e.tabs=[]}},E={state:w,getters:S,mutations:_};n["default"].use(r["a"]);t["a"]=new r["a"].Store({modules:{app:m,menus:x,tabs:E}})},4570:function(e,t,a){"use strict";var n=a("fd54"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("85f2"),r=a.n(n),o=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},i=[],s={name:"App"},u=s,l=(a("a5d2"),a("2877")),d=Object(l["a"])(u,c,i,!1,null,null,null),h=d.exports,m=a("a18c"),f=a("4360"),p=a("e069"),b=a.n(p),g=(a("dcad"),a("a4bb")),v=a.n(g),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"i-form"},[a("Form",{ref:"form",style:e.formWidth,attrs:{model:e.model,rules:e.rules,inline:e.inline,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit("form")}}},[e._t("head"),e._l(e.elem,function(t,n){return a("FormItem",{key:n,style:t.width,attrs:{prop:t.prop,label:t.label,"label-width":t.labelWidth}},[t.element?e._e():a("Input",{style:t.elemWidth,attrs:{type:t.type,placeholder:t.placeholder,size:t.size,disabled:t.disabled,readonly:t.readonly,icon:t.icon,prefix:t.prefix,suffix:t.suffix,number:t.number,rows:t.rows,autosize:t.autosize},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}}),"number"===t.element?a("InputNumber",{style:t.elemWidth,attrs:{max:t.max,min:t.min,placeholder:t.placeholder,size:t.size,disabled:t.disabled},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}}):e._e(),"select"===t.element?a("Select",{style:t.elemWidth,attrs:{placeholder:t.placeholder,size:t.size,disabled:t.disabled,filterable:t.filterable,multiple:t.multiple},on:{"on-change":e.handleSelectChange},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}},e._l(t.option,function(n,r){return a("Option",{key:r,attrs:{value:t.events?t.events+"-"+n.value:n.value,disabled:n.disabled}},[e._v(e._s(n.label))])}),1):e._e(),"cascader"===t.element?a("Cascader",{attrs:{data:t.data,disabled:e.opt.disabled,filterable:t.filterable},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}}):e._e(),"date"===t.element?a("DatePicker",{style:t.elemWidth,attrs:{type:t.type,options:t.options,format:t.format,placeholder:t.placeholder,size:t.size,disabled:t.disabled},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}}):e._e(),"time"===t.element?a("TimePicker",{style:t.elemWidth,attrs:{type:t.type,format:t.format,placeholder:t.placeholder,size:t.size,disabled:t.disabled},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}}):e._e(),"radio"===t.element?a("RadioGroup",{attrs:{type:t.type,size:t.size,vertical:t.vertical},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}},e._l(t.option,function(n,r){return a("Radio",{key:r,attrs:{label:n.value,size:t.size,disabled:n.disabled}},[e._v(e._s(n.label))])}),1):e._e(),"checkbox"===t.element?a("CheckboxGroup",{attrs:{size:t.size},model:{value:e.model[t.prop],callback:function(a){e.$set(e.model,t.prop,a)},expression:"model[item.prop]"}},e._l(t.option,function(n,r){return a("Checkbox",{key:r,attrs:{label:n.value,size:t.size,disabled:n.disabled}},[e._v(e._s(n.label))])}),1):e._e()],1)}),e._t("default"),a("FormItem",{attrs:{"label-width":e.btnLabelWidth}},[a("Button",{attrs:{type:e.okType,icon:e.okIcon,long:e.btnLong,loading:e.btnLoading},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(e._s(e.submitText))]),e.reset?a("Button",{staticClass:"button",attrs:{type:e.btnType,icon:e.btnIcon,long:e.btnLong},on:{click:function(t){return e.handleReset("form")}}},[e._v(e._s(e.resetText))]):e._e(),e.button?a("Button",{staticClass:"button",attrs:{type:e.btnType,icon:e.btnIcon,long:e.btnLong},on:{click:function(t){return e.handleClick("form")}}},[e._v(e._s(e.buttonText))]):e._e(),e._t("button")],2)],2),e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)},y=[],x=(a("28a5"),a("7f7f"),a("e814")),w=a.n(x),S=(a("c5f6"),{name:"IForm",props:{elem:Array,model:Object,rules:Object,width:Number,labelWidth:Number,labelPosition:{validator:function(e){for(var t=["left","right","top"],a=0;a<t.length;a++)if(e===t[a])return!0;return!1},default:"right"},inline:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},btnLabelWidth:Number,reset:{type:Boolean,default:!1},button:{type:Boolean,default:!1},submitText:{type:String,default:"Submit"},resetText:{type:String,default:"Reset"},buttonText:{type:String,default:"Button"},okType:{type:String,default:"primary"},btnType:String,btnLong:Boolean,okIcon:String,btnIcon:String,btnLoading:{type:Boolean,default:!1}},computed:{formWidth:function(){var e={};return this.width&&(e.maxWidth="".concat(this.width,"px")),e}},mounted:function(){if(this.elem)for(var e=this.elem,t=0;t<e.length;t++){var a=e[t].width,n=e[t].elemWidth;w()(a)&&(e[t].width={width:"".concat(a,"px")}),w()(n)&&(e[t].elemWidth={width:"".concat(n,"px")})}},methods:{validateField:function(e){this.$refs["form"].validateField(e)},handleSubmit:function(e){var t=this;this.elem?this.$refs[e].validate(function(e){e&&t.$emit("on-submit")}):this.$emit("on-submit")},handleReset:function(){this.$refs["form"].resetFields(),this.$emit("on-reset")},handleClick:function(){this.$emit("on-click")},handleSelectChange:function(e){var t=e.split("-");this.$emit("on-".concat(t[0]),t[1])}}}),_=S,E=(a("cf2c"),Object(l["a"])(_,k,y,!1,null,"3c3f520b",null)),C=E.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"i-table"},[a("Table",{ref:"table",attrs:{stripe:e.stripe,border:e.border,height:e.height,"row-class-name":e.rowClassName,loading:e.loading,columns:e.columns,data:e.data},on:{"on-selection-change":e.handleSelectionChange}}),e._t("default"),e.total>10?a("Page",{staticClass:"page",attrs:{"show-elevator":"","show-total":"","show-sizer":"",placement:"top",total:e.total,current:e.current,"page-size":e.pageSize},on:{"on-change":e.handlePageChange,"on-page-size-change":e.handlePageSizeChange}}):e._e()],2)},I=[],O={name:"ITable",props:{stripe:Boolean,border:Boolean,height:String,rowClassName:Function,loading:Boolean,columns:Array,data:Array,total:Number},data:function(){return{current:1,pageSize:10}},methods:{exportCsv:function(e){this.$refs["table"].exportCsv(e)},selectAll:function(e){this.$refs["table"].selectAll(e)},handleSelectionChange:function(e){this.$emit("on-selection-change",e)},handlePage:function(e){return this.current=e?1:this.current,{current:this.current,pageSize:this.pageSize}},handlePageChange:function(e){this.current=e,this.$emit("on-page-change")},handlePageSizeChange:function(e){this.pageSize=e,1===this.current&&this.$emit("on-page-change")}}},T=O,P=(a("4570"),Object(l["a"])(T,A,I,!1,null,"473bd9f0",null)),N=P.exports,L=function(e){for(var t={IForm:C,ITable:N},a=v()(t),n=0;n<a.length;n++){var r=a[n];e.component(r,t[r])}},R=a("ed08"),z=a("61b2"),M=a("96eb"),j=a.n(M),$=a("4328"),B=a.n($),U=function(){j.a.mock(/\/login/,function(e){var t=B.a.parse(e.body),a=t.user,n=t.pwd;return"admin"===a&&"admin"===n?{data:{user_id:j.a.mock("@guid"),auth_token:j.a.mock("@guid"),real_name:"Admin"},error:{code:0,msg:"Login success"}}:{error:{code:4e3,msg:"您的帐户用户名或密码不正确"}}}),j.a.mock(/\/menu/,{data:[{path:"/",name:"首页",icon:"md-speedometer",compName:"首页",compPath:"/dashboard"},{path:"/config",name:"配置指南",icon:"md-chatbubbles",children:[{path:"/config/configuration",name:"配置指南",icon:"md-text",compName:"基础配置",compPath:"/config/configuration"}]},{path:"/manage",name:"管理",icon:"md-folder-open",children:[{path:"/manage/users",name:"用户",icon:"md-people",compName:"用户",compPath:"/manage/users"}]},{path:"/charts",name:"图表",icon:"md-folder-open",children:[{path:"/charts/linechart",name:"折线图",icon:"md-folder-open",compName:"折线图",compPath:"/charts/linechart"},{path:"/charts/barchart",name:"柱状图",icon:"md-folder-open",compName:"柱状图",compPath:"/charts/barchart"},{path:"/charts/piechart",name:"饼图",icon:"md-folder-open",compName:"饼图",compPath:"/charts/piechart"},{path:"/charts/scatterchart",name:"散点图",icon:"md-folder-open",compName:"散点图",compPath:"/charts/scatterchart"},{path:"/charts/radarchart",name:"雷达图图",icon:"md-folder-open",compName:"雷达图图",compPath:"/charts/radarchart"}]},{path:"/test",name:"测试",icon:"md-document",compName:"测试",compPath:"/Test"}],error:{code:0,msg:"Get menu success"}}),j.a.mock(/\/edit-password/,function(e){var t=B.a.parse(e.body),a=t.currentPassword;return"admin"===a?{error:{code:0,msg:"修改密码成功"}}:{error:{code:4e3,msg:"您当前的密码不正确"}}})},W=(a("6762"),a("2fdb"),function(){var e={110100:"北京",350000:"福州",310100:"上海",440100:"广州",518000:"深圳",330100:"杭州",330200:"宁波"},t={eat:"美食",sleep:"宅",run:"运动",movie:"电影"},a=j.a.mock({"users|11-87":[{id:"@guid",name:"@name","age|18-55":1,"gender|0-1":1,email:"@email",birth:"@date","city|1":e,"hobby|1-3":t,desc:"@paragraph"}]}),n=a.users,r=function(a,n){var r={};a&&(r[a]=e[a]);var o={};if(n)for(var c=n.length,i=0;i<c;i++){var s=n[i];o[s]=t[s]}return{city:r,hobby:o}};j.a.mock(/\/user-list/,function(e){var t=B.a.parse(e.url.split("?")[1]),a=t.pagePara,r=t.name,o=JSON.parse(a),c=o.current,i=o.pageSize,s=n.filter(function(e){return!r||-1!==e.name.indexOf(r)}),u=s.length,l=Math.ceil(u/i);return c=c>l?l:c,s=s.filter(function(e,t){return t<i*c&&t>=i*(c-1)}),{data:{total:u,users:s},error:{code:0,msg:"Get users success"}}}),j.a.mock(/\/user-delete/,function(e){var t=B.a.parse(e.body),a=t.id;return n=n.filter(function(e){return e.id!==a}),{error:{code:0,msg:"删除成功"}}}),j.a.mock(/\/user-batch-delete/,function(e){var t=B.a.parse(e.body),a=t.ids;return a=a.split(","),n=n.filter(function(e){return!a.includes(e.id)}),{error:{code:0,msg:"删除成功"}}}),j.a.mock(/\/user-edit/,function(e){var t=B.a.parse(e.body),a=t.id,o=t.name,c=t.age,i=t.gender,s=t.email,u=t.birth,l=t.city,d=t.hobby,h=t.desc,m=r(l,d);return n.some(function(e){e.id===a&&(e.name=o,e.age=w()(c),e.gender=w()(i),e.email=s,e.birth=u,e.city=m.city,e.hobby=m.hobby,e.desc=h)}),{error:{code:0,msg:"修改成功"}}}),j.a.mock(/\/user-create/,function(e){var t=B.a.parse(e.body),a=t.name,o=t.age,c=t.gender,i=t.email,s=t.birth,u=t.city,l=t.hobby,d=t.desc,h=r(u,l);return n.unshift({id:j.a.mock("@guid"),name:a,age:w()(o),gender:w()(c),email:i,birth:s,city:h.city,hobby:h.hobby,desc:d}),{error:{code:0,msg:"新增成功"}}})}),F=function(){j.a.mock(/\/test/,function(){return{data:"测试1 页面",error:{code:0,msg:"Get test success"}}})},D=(a("313e"),function(){j.a.mock(/\/chart/,function(){return{data:"图表 ",linechart:{title:"折线图 Line",option:{tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]}},barchart:{title:"柱状图 Bar",option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"广告",data:[150,232,201,154,190,330,410]},{name:"搜索引擎",type:"bar",data:[862,1018,964,1026,1679,1600,1570],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"百度",type:"bar",barWidth:5,stack:"搜索引擎",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",type:"bar",stack:"搜索引擎",data:[120,132,101,134,290,230,220]},{name:"必应",type:"bar",stack:"搜索引擎",data:[60,72,71,74,190,130,110]},{name:"其他",type:"bar",stack:"搜索引擎",data:[62,82,91,84,109,110,120]}]}},piechart:{title:"饼图 Pie",option:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]}},scatterchart:{title:"散点图 Scatter",option:{title:{text:"男性女性身高体重分布",subtext:"抽样调查来自: Heinz  2003"},grid:{left:"3%",right:"7%",bottom:"3%",containLabel:!0},tooltip:{showDelay:0,formatter:function(e){return e.value.length>1?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{feature:{dataZoom:{},brush:{type:["rect","polygon","clear"]}}},brush:{},legend:{data:["女性","男性"],left:"center"},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} cm"},splitLine:{show:!1}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} kg"},splitLine:{show:!1}}],series:[{name:"女性",type:"scatter",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markArea:{silent:!0,itemStyle:{normal:{color:"transparent",borderWidth:1,borderType:"dashed"}},data:[[{name:"女性分布区间",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{normal:{type:"solid"}},data:[{type:"average",name:"平均值"},{xAxis:160}]}},{name:"男性",type:"scatter",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markArea:{silent:!0,itemStyle:{normal:{color:"transparent",borderWidth:1,borderType:"dashed"}},data:[[{name:"男性分布区间",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{normal:{type:"solid"}},data:[{type:"average",name:"平均值"},{xAxis:170}]}}]}},radarchart:{title:"多雷达图",option:{title:{text:"浏览器占比变化",subtext:"纯属虚构",top:10,left:10},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,250,0.2)"},legend:{type:"scroll",bottom:10,data:function(){for(var e=[],t=1;t<=28;t++)e.push(t+2e3+"");return e}()},visualMap:{top:"middle",right:10,color:["red","yellow"],calculable:!0},radar:{indicator:[{text:"IE8-",max:400},{text:"IE9+",max:400},{text:"Safari",max:400},{text:"Firefox",max:400},{text:"Chrome",max:400}]},series:function(){for(var e=[],t=1;t<=28;t++)e.push({name:"浏览器（数据纯属虚构）",type:"radar",symbol:"none",lineStyle:{width:1},emphasis:{areaStyle:{color:"rgba(0,250,0,0.3)"}},data:[{value:[10*(40-t),4*(38-t)+60,5*t+10,9*t,t*t/2],name:t+2e3+""}]});return e}()}},error:{code:0,msg:"Get test success"}}})}),G=function(){U(),W(),F(),D()};G(),o["default"].use(b.a),o["default"].use(L),o["default"].use(z["default"]),r()(o["default"].prototype,"$Utils",{value:R["a"]}),o["default"].config.productionTip=!1,new o["default"]({router:m["a"],store:f["a"],render:function(e){return e(h)}}).$mount("#app")},"61b2":function(e,t,a){"use strict";a.r(t);var n=a("a4bb"),r=a.n(n),o=a("7dfc"),c=a("79e6");t["default"]=function(e){for(var t={Content:o["default"],Search:c["default"]},a=r()(t),n=0;n<a.length;n++){var i=a[n];e.component(i,t[i])}}},6768:function(e,t,a){"use strict";var n=a("11cf"),r=a.n(n);r.a},"6a6a":function(e,t,a){},"79e6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("IForm",{staticClass:"i-search",attrs:{inline:"",model:e.model,elem:e.elem,loading:e.loading,"btn-loading":e.btnLoading,"label-width":e.labelWidth,"btn-label-width":4,reset:"","submit-text":"搜索","reset-text":"重置","ok-icon":"md-search","btn-icon":"md-refresh"},on:{"on-submit":e.handleSearch,"on-reset":e.handleSearch}},[e._t("head",null,{slot:"head"}),e._t("default"),e._t("button",null,{slot:"button"})],2)},r=[],o=(a("c5f6"),{name:"Search",props:{model:Object,elem:Array,loading:Boolean,btnLoading:Boolean,labelWidth:Number},data:function(){return{}},methods:{handleSearch:function(){this.$emit("on-search",!0)}}}),c=o,i=(a("6768"),a("2877")),s=Object(i["a"])(c,n,r,!1,null,null,null);t["default"]=s.exports},"7dfc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",{staticClass:"i-content",attrs:{bordered:!1,"dis-hover":""}},[e._t("header"),a("div",{staticClass:"i-search-bar"},[e._t("search"),e._t("extra")],2),e._t("default")],2)},r=[],o={name:"Content",data:function(){return{}}},c=o,i=(a("8434"),a("2877")),s=Object(i["a"])(c,n,r,!1,null,null,null);t["default"]=s.exports},8434:function(e,t,a){"use strict";var n=a("1997"),r=a.n(n);r.a},a18c:function(e,t,a){"use strict";var n=a("2b0e"),r=a("8c4f"),o=[{path:"/login",name:"Login",component:function(){return a.e("chunk-d629dbf4").then(a.bind(null,"74db"))}},{path:"*",name:"NotFound",component:function(){return a.e("chunk-532944e2").then(a.bind(null,"11a1"))}}],c=a("4360"),i=a("ed08");n["default"].use(r["a"]);var s=new r["a"]({routes:o}),u=c["a"].state.menus.menu;if(u.length){var l=i["a"].getRoutes(u);s.addRoutes(l)}s.beforeEach(function(e,t,a){"/login"===e.path&&(c["a"].commit("MENU_RESET"),c["a"].commit("TABS_RESET"));var n=c["a"].state.app.userInfo;n||"/login"===e.path?a():a("/login")});t["a"]=s},a27e:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n),o=a("4328"),c=a.n(o),i=a("e069"),s=a("db49"),u=a("4360"),l=s["a"].env,d=s["a"].baseURL,h=s["a"].timeout,m=r.a.create({withCredentials:!0,baseURL:localStorage.getItem("newBaseAPI")||d,transformRequest:[function(e){return c.a.stringify(e)}],timeout:h});m.interceptors.response.use(function(e){var t=e.data,a=t["error"],n=a.code,r=a.msg;if(3e3===n&&u["a"].commit("MENU_RESET"),"development"===l||"test"===l){if(0===n)return console.log(1111),console.log(t),t;u["a"].commit("RES_ERROR",e)}else{if(0===n)return t;i["Message"].error(r)}},function(e){var t=e.response,a=e.message,n=e.config;t?u["a"].commit("RES_ERROR",t):i["Message"].error({content:a}),console.log(n)});var f=function(e){m.defaults.headers.common["Authorization"]=e},p=sessionStorage.getItem("userInfo");p&&f(JSON.parse(p)["auth_token"]),t["a"]=m},a5d2:function(e,t,a){"use strict";var n=a("f809"),r=a.n(n);r.a},c695:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return c});var n=a("a27e"),r=function(e){return n["a"].post("/login",e)},o=function(){return n["a"].get("/menu")},c=function(e){return n["a"].post("/edit-password",e)}},cf2c:function(e,t,a){"use strict";var n=a("6a6a"),r=a.n(n);r.a},db49:function(e,t,a){"use strict";var n="3.2.1",r=1e4,o={development:"http://dev.xx.com/api",test:"https://test.xx.com/api",release:"https://release.xx.com/api",production:"https://prod.xx.com/api"},c=localStorage.getItem("env")||"production",i=localStorage.getItem("newBaseAPI")||o[c];"production"!==c&&(console.log("VUE_APP_ENV",c),console.log("API_URL",i)),t["a"]={version:n,timeout:r,baseAPI:o,env:c,baseURL:i}},ed08:function(e,t,a){"use strict";var n=a("e814"),r=a.n(n),o=(a("4917"),a("a481"),a("5d73")),c=a.n(o),i=/([yMdhsm])(\1*)/g,s="yyyy-MM-dd";function u(e,t){t-=(e+"").length;for(var a=0;a<t;a++)e="0"+e;return e}t["a"]={getRoutes:function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var i,s=c()(e);!(n=(i=s.next()).done);n=!0){var u=i.value;if(u.children){var l=!0,d=!1,h=void 0;try{for(var m,f=c()(u.children);!(l=(m=f.next()).done);l=!0){var p=m.value;t.push(p)}}catch(y){d=!0,h=y}finally{try{l||null==f.return||f.return()}finally{if(d)throw h}}}else t.push(u)}}catch(y){r=!0,o=y}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}for(var b=[{path:"/",name:"Layouts",redirect:"/",component:function(){return a.e("chunk-16394177").then(a.bind(null,"680a"))},children:[]}],g=t,v=function(){var e=g[k];b[0]["children"].push({path:e.path,name:e.compName,component:function(){return a("2a68")("./views".concat(e.compPath))},meta:{keepAlive:!0}})},k=0;k<g.length;k++)v();return b},formatDate:{format:function(e,t){return t=t||s,t.replace(i,function(t){switch(t.charAt(0)){case"y":return u(e.getFullYear(),t.length);case"M":return u(e.getMonth()+1,t.length);case"d":return u(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return u(e.getHours(),t.length);case"m":return u(e.getMinutes(),t.length);case"s":return u(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(i),n=e.match(/(\d)+/g);if(a.length===n.length){for(var o=new Date(1970,0,1),c=0;c<a.length;c++){var s=r()(n[c]),u=a[c];switch(u.charAt(0)){case"y":o.setFullYear(s);break;case"M":o.setMonth(s-1);break;case"d":o.setDate(s);break;case"h":o.setHours(s);break;case"m":o.setMinutes(s);break;case"s":o.setSeconds(s);break}}return o}return null}}}},f809:function(e,t,a){},fd54:function(e,t,a){}});