/*! For license information please see 445.c84abd79.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksocial_media=self.webpackChunksocial_media||[]).push([[445],{8445:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(7689),u=r(9434),s=r(4722),l=r(7781),f=r(7974),h=r(3680),d=r(1892),p=r(184);var v=function(t){var e=(0,u.v9)((function(t){return t})),r=e.userLogin,v=e.api,y=(0,c.s0)(),m=t.singlePlace,g=m.title,x=m.image,w=m.descrition,b=m.address,j=m._id,E=m.userID,L=(0,h.x)(),k=L.loading,N=L.sendRequest,Z=(0,a.useState)(!1),_=(0,i.Z)(Z,2),O=_[0],P=_[1],S=(0,u.I0)(),C=(0,l.DE)(s,S),T=C.activateAlert,G=C.removeAlert,I=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!window.confirm("Are to sure to delete this place. We can't able to undo this process!!!")){t.next=12;break}return t.prev=3,t.next=6,N("api/places/".concat(j),"DELETE",null,{Authorization:"Breare "+r.token});case 6:(o=t.sent).sucess?(T(o.message,"Success"),setTimeout((function(){G()}),2e3),y("/")):(T(o.message,"Danger"),setTimeout((function(){G()}),2e3)),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(3);case 12:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){P(r.userId===E)}),[]),(0,p.jsxs)("div",{className:"card text-center my-3",children:[k&&(0,p.jsx)(d.Z,{}),(0,p.jsx)("div",{className:"card-header",children:(0,p.jsx)("img",{src:"".concat(v).concat(x),alt:g,className:"w-100"})}),(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsx)("h2",{className:"card-title",children:g}),(0,p.jsx)("h5",{children:b}),(0,p.jsx)("p",{className:"card-text",children:w})]}),(0,p.jsxs)("div",{className:"card-footer",children:[(0,p.jsx)(f.Z,{name:"Visit on Map",type:"dark m-2",outline:!0,onClick:function(){T("Now map is not aviable, Sorry!!","Success"),setTimeout((function(){G()}),2e3)}}),r.userId&&O&&(0,p.jsx)(f.Z,{onClick:I,name:"Delete",type:"danger m-2"}),r.userId&&O&&(0,p.jsx)(f.Z,{onClick:function(){y("/places/".concat(j))},name:"Edit",type:"secondary m-2"})]})]})};var y=function(t){var e=(0,c.s0)(),r=t.places,n=r.findedPlaces;return r.success?r&&(0,p.jsx)("div",{className:"container col-md-7",children:n.map((function(t){return(0,p.jsx)(v,{singlePlace:t},t._id)}))}):(0,p.jsxs)("div",{className:"container text-center",children:[(0,p.jsx)("h1",{className:"mb-3",children:"No places found. Do you want add one?"}),(0,p.jsx)(f.Z,{name:"Add",type:"success",onClick:function(){e("/places/addPlace")}})]})};var m=function(){var t=(0,a.useState)(null),e=(0,i.Z)(t,2),r=e[0],u=e[1],s=(0,h.x)(),l=s.loading,f=s.sendRequest,v=(0,c.UO)().userID;return(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f("api/places/users/".concat(v));case 3:return e=t.sent,t.next=6,e;case 6:r=t.sent,u(r),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),l&&!r?(0,p.jsx)(d.Z,{}):(0,p.jsx)("div",{className:"container",children:!l&&r&&(0,p.jsx)(y,{places:r})})}},7974:function(t,e,r){r(2791);var n=r(184);e.Z=function(t){var e=t.name,r=t.type,o=t.onClick;return!0===t.outline?(0,n.jsx)("button",{type:"reset",className:"btn btn-outline-".concat(r," mx-1"),onClick:function(){o()},children:e}):(0,n.jsx)("button",{type:"reset",className:"btn btn-".concat(r," mx-2"),onClick:function(){o()},children:e})}},3680:function(t,e,r){r.d(e,{x:function(){return u}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(9434),u=function(){var t=(0,a.useState)(!1),e=(0,i.Z)(t,2),r=e[0],u=e[1],s=(0,c.v9)((function(t){return t})).api,l=(0,a.useRef)([]),f=(0,a.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,i,a,c,f,h=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.length>1&&void 0!==h[1]?h[1]:"GET",o=h.length>2&&void 0!==h[2]?h[2]:null,i=h.length>3&&void 0!==h[3]?h[3]:{},u(!0),a=new AbortController,l.current.push(a),t.prev=6,t.next=9,fetch("".concat(s).concat(e),{method:r,headers:i,body:o,signal:a.signal});case 9:return c=t.sent,t.next=12,c.json();case 12:return f=t.sent,l.current=l.current.filter((function(t){return t!==a})),u(!1),t.abrupt("return",f);case 18:throw t.prev=18,t.t0=t.catch(6),u(!1),t.t0;case 22:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}(),[]);return(0,a.useEffect)((function(){return function(){l.current.forEach((function(t){return t.abort()}))}}),[]),{loading:r,sendRequest:f}}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new Z(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(_([])));x&&x!==e&&r.call(x,c)&&(m=x);var w=y.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=445.c84abd79.chunk.js.map