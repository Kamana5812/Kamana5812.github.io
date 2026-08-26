(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wg={exports:{}},rc={},Tg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Hx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Wx=Symbol.for("react.profiler"),Xx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Yx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),op=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Cg={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||bg}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rg(){}Rg.prototype=Xs.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||bg}var If=Pf.prototype=new Rg;If.constructor=Pf;Ag(If,Xs.prototype);If.isPureReactComponent=!0;var lp=Array.isArray,Ng=Object.prototype.hasOwnProperty,Lf={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&!Pg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Za,type:t,key:s,ref:a,props:r,_owner:Lf.current}}function Qx(t,e){return{$$typeof:Za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Za}function e_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cp=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e_(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Za:case Gx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Cc(a,0):i,lp(r)?(n="",t!=null&&(n=t.replace(cp,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(Df(r)&&(r=Qx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(cp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lp(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Cc(s,o);a+=nl(s,e,n,c,r)}else if(c=Jx(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Cc(s,o++),a+=nl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function lo(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},il={transition:null},n_={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:il,ReactCurrentOwner:Lf};function Lg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:lo,forEach:function(t,e,n){lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Xs;je.Fragment=Hx;je.Profiler=Wx;je.PureComponent=Pf;je.StrictMode=jx;je.Suspense=Yx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_;je.act=Lg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Ng.call(e,c)&&!Pg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Za,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xx,_context:t},t.Consumer=t};je.createElement=Ig;je.createFactory=function(t){var e=Ig.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:$x,render:t}};je.isValidElement=Df;je.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:t_}};je.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};je.unstable_act=Lg;je.useCallback=function(t,e){return ln.current.useCallback(t,e)};je.useContext=function(t){return ln.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};je.useEffect=function(t,e){return ln.current.useEffect(t,e)};je.useId=function(){return ln.current.useId()};je.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return ln.current.useMemo(t,e)};je.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};je.useRef=function(t){return ln.current.useRef(t)};je.useState=function(t){return ln.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return ln.current.useTransition()};je.version="18.3.1";Tg.exports=je;var Se=Tg.exports;const Ds=Vx(Se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_=Se,r_=Symbol.for("react.element"),s_=Symbol.for("react.fragment"),a_=Object.prototype.hasOwnProperty,o_=i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l_={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)a_.call(e,i)&&!l_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:r_,type:t,key:s,ref:a,props:r,_owner:o_.current}}rc.Fragment=s_;rc.jsx=Dg;rc.jsxs=Dg;wg.exports=rc;var l=wg.exports,Fu={},Ug={exports:{}},An={},kg={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var B=N.length;N.push(U);e:for(;0<B;){var ee=B-1>>>1,ae=N[ee];if(0<r(ae,U))N[ee]=U,N[B]=ae,B=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],B=N.pop();if(B!==U){N[0]=B;e:for(var ee=0,ae=N.length,ze=ae>>>1;ee<ze;){var $e=2*(ee+1)-1,Te=N[$e],K=$e+1,re=N[K];if(0>r(Te,B))K<ae&&0>r(re,Te)?(N[ee]=re,N[K]=B,ee=K):(N[ee]=Te,N[$e]=B,ee=$e);else if(K<ae&&0>r(re,B))N[ee]=re,N[K]=B,ee=K;else break e}}return U}function r(N,U){var B=N.sortIndex-U.sortIndex;return B!==0?B:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],p=1,h=null,f=3,m=!1,_=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(N){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=N)i(u),U.sortIndex=U.expirationTime,e(c,U);else break;U=n(u)}}function y(N){if(E=!1,S(N),!_)if(n(c)!==null)_=!0,$(b);else{var U=n(u);U!==null&&q(y,U.startTime-N)}}function b(N,U){_=!1,E&&(E=!1,d(x),x=-1),m=!0;var B=f;try{for(S(U),h=n(c);h!==null&&(!(h.expirationTime>U)||N&&!I());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var ae=ee(h.expirationTime<=U);U=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(c)&&i(c),S(U)}else i(c);h=n(c)}if(h!==null)var ze=!0;else{var $e=n(u);$e!==null&&q(y,$e.startTime-U),ze=!1}return ze}finally{h=null,f=B,m=!1}}var w=!1,C=null,x=-1,A=5,P=-1;function I(){return!(t.unstable_now()-P<A)}function L(){if(C!==null){var N=t.unstable_now();P=N;var U=!0;try{U=C(!0,N)}finally{U?W():(w=!1,C=null)}}else w=!1}var W;if(typeof g=="function")W=function(){g(L)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,z=Y.port2;Y.port1.onmessage=L,W=function(){z.postMessage(null)}}else W=function(){v(L,0)};function $(N){C=N,w||(w=!0,W())}function q(N,U){x=v(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return N()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return U()}finally{f=B}},t.unstable_scheduleCallback=function(N,U,B){var ee=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=B+ae,N={id:p++,callback:U,priorityLevel:N,startTime:B,expirationTime:ae,sortIndex:-1},B>ee?(N.sortIndex=B,e(u,N),n(c)===null&&N===n(u)&&(E?(d(x),x=-1):E=!0,q(y,B-ee))):(N.sortIndex=ae,e(c,N),_||m||(_=!0,$(b))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var U=f;return function(){var B=f;f=U;try{return N.apply(this,arguments)}finally{f=B}}}})(Fg);kg.exports=Fg;var c_=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=Se,bn=c_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,Ca={};function Wr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Og.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,d_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},dp={};function f_(t){return Ou.call(dp,t)?!0:Ou.call(up,t)?!1:d_.test(t)?dp[t]=!0:(up[t]=!0,!1)}function h_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p_(t,e,n,i){if(e===null||typeof e>"u"||h_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,kf);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,kf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,kf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p_(e,n,r,i)&&(n=null),i||r===null?f_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),fp=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Rc;function ha(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Nc=!1;function Pc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function m_(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Bu:return"Profiler";case Of:return"StrictMode";case zu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function g_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v_(t){var e=Gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=v_(t))}function Hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function ju(t,e){jg(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(pa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Wg(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x_=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){x_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function $g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var __=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(__[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,bs=null,As=null;function vp(t){if(t=eo(t)){if(typeof Zu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=cc(e),Zu(t.stateNode,t.type,e))}}function Kg(t){bs?As?As.push(t):As=[t]:bs=t}function Zg(){if(bs){var t=bs,e=As;if(As=bs=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function Jg(t,e){return t(e)}function Qg(){}var Ic=!1;function e0(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return Jg(t,e,n)}finally{Ic=!1,(bs!==null||As!==null)&&(Qg(),Zg())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ju=!1;if(Pi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Ju=!1}function y_(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ya=!1,Ml=null,El=!1,Qu=null,S_={onError:function(t){ya=!0,Ml=t}};function M_(t,e,n,i,r,s,a,o,c){ya=!1,Ml=null,y_.apply(S_,arguments)}function E_(t,e,n,i,r,s,a,o,c){if(M_.apply(this,arguments),ya){if(ya){var u=Ml;ya=!1,Ml=null}else throw Error(se(198));El||(El=!0,Qu=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(Xr(t)!==t)throw Error(se(188))}function w_(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xp(r),t;if(s===i)return xp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function n0(t){return t=w_(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var r0=bn.unstable_scheduleCallback,_p=bn.unstable_cancelCallback,T_=bn.unstable_shouldYield,b_=bn.unstable_requestPaint,At=bn.unstable_now,A_=bn.unstable_getCurrentPriorityLevel,Gf=bn.unstable_ImmediatePriority,s0=bn.unstable_UserBlockingPriority,wl=bn.unstable_NormalPriority,C_=bn.unstable_LowPriority,a0=bn.unstable_IdlePriority,sc=null,di=null;function R_(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:I_,N_=Math.log,P_=Math.LN2;function I_(t){return t>>>=0,t===0?32:31-(N_(t)/P_|0)|0}var ho=64,po=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ma(o):(s&=a,s!==0&&(i=ma(s)))}else a=n&~r,a!==0?i=ma(a):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function L_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=L_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=ho;return ho<<=1,!(ho&4194240)&&(ho=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function U_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c0,jf,u0,d0,f0,td=!1,mo=[],ir=null,rr=null,sr=null,Pa=new Map,Ia=new Map,Zi=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=eo(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F_(t,e,n,i,r){switch(e){case"focusin":return ir=Qs(ir,t,e,n,i,r),!0;case"dragenter":return rr=Qs(rr,t,e,n,i,r),!0;case"mouseover":return sr=Qs(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Qs(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,Qs(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function h0(t){var e=Cr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=eo(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function Sp(t,e,n){rl(t)&&n.delete(e)}function O_(){td=!1,ir!==null&&rl(ir)&&(ir=null),rr!==null&&rl(rr)&&(rr=null),sr!==null&&rl(sr)&&(sr=null),Pa.forEach(Sp),Ia.forEach(Sp)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,O_)))}function La(t){function e(r){return ea(r,t)}if(0<mo.length){ea(mo[0],t);for(var n=1;n<mo.length;n++){var i=mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&ea(ir,t),rr!==null&&ea(rr,t),sr!==null&&ea(sr,t),Pa.forEach(e),Ia.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&Zi.shift()}var Cs=Oi.ReactCurrentBatchConfig,bl=!0;function B_(t,e,n,i){var r=it,s=Cs.transition;Cs.transition=null;try{it=1,Wf(t,e,n,i)}finally{it=r,Cs.transition=s}}function z_(t,e,n,i){var r=it,s=Cs.transition;Cs.transition=null;try{it=4,Wf(t,e,n,i)}finally{it=r,Cs.transition=s}}function Wf(t,e,n,i){if(bl){var r=nd(t,e,n,i);if(r===null)Hc(t,e,i,Al,n),yp(t,i);else if(F_(r,t,e,n,i))i.stopPropagation();else if(yp(t,i),e&4&&-1<k_.indexOf(t)){for(;r!==null;){var s=eo(r);if(s!==null&&c0(s),s=nd(t,e,n,i),s===null&&Hc(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Al=null;function nd(t,e,n,i){if(Al=null,t=Vf(i),t=Cr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A_()){case Gf:return 1;case s0:return 4;case wl:case C_:return 16;case a0:return 536870912;default:return 16}default:return 16}}var er=null,Xf=null,sl=null;function m0(){if(sl)return sl;var t,e=Xf,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Mp(){return!1}function Cn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?go:Mp,this.isPropagationStopped=Mp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=Cn(qs),Qa=_t({},qs,{view:0,detail:0}),V_=Cn(Qa),Dc,Uc,ta,ac=_t({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Dc=t.screenX-ta.screenX,Uc=t.screenY-ta.screenY):Uc=Dc=0,ta=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Ep=Cn(ac),G_=_t({},ac,{dataTransfer:0}),H_=Cn(G_),j_=_t({},Qa,{relatedTarget:0}),kc=Cn(j_),W_=_t({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=Cn(W_),q_=_t({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$_=Cn(q_),Y_=_t({},qs,{data:0}),wp=Cn(Y_),K_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J_[t])?!!e[t]:!1}function $f(){return Q_}var ey=_t({},Qa,{key:function(t){if(t.key){var e=K_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=Cn(ey),ny=_t({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Cn(ny),iy=_t({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),ry=Cn(iy),sy=_t({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=Cn(sy),oy=_t({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Cn(oy),cy=[9,13,27,32],Yf=Pi&&"CompositionEvent"in window,Sa=null;Pi&&"documentMode"in document&&(Sa=document.documentMode);var uy=Pi&&"TextEvent"in window&&!Sa,g0=Pi&&(!Yf||Sa&&8<Sa&&11>=Sa),bp=" ",Ap=!1;function v0(t,e){switch(t){case"keyup":return cy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function dy(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(Ap=!0,bp);case"textInput":return t=e.data,t===bp&&Ap?null:t;default:return null}}function fy(t,e){if(ps)return t==="compositionend"||!Yf&&v0(t,e)?(t=m0(),sl=Xf=er=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function _0(t,e,n,i){Kg(i),e=Cl(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Da=null;function py(t){N0(t,0)}function oc(t){var e=vs(t);if(Hg(e))return t}function my(t,e){if(t==="change")return e}var y0=!1;if(Pi){var Fc;if(Pi){var Oc="oninput"in document;if(!Oc){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Oc=typeof Rp.oninput=="function"}Fc=Oc}else Fc=!1;y0=Fc&&(!document.documentMode||9<document.documentMode)}function Np(){Ma&&(Ma.detachEvent("onpropertychange",S0),Da=Ma=null)}function S0(t){if(t.propertyName==="value"&&oc(Da)){var e=[];_0(e,Da,t,Vf(t)),e0(py,e)}}function gy(t,e,n){t==="focusin"?(Np(),Ma=e,Da=n,Ma.attachEvent("onpropertychange",S0)):t==="focusout"&&Np()}function vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Da)}function xy(t,e){if(t==="click")return oc(e)}function _y(t,e){if(t==="input"||t==="change")return oc(e)}function yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:yy;function Ua(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function M0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sy(t){var e=E0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(i!==null&&Kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var a=Ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=Pi&&"documentMode"in document&&11>=document.documentMode,ms=null,id=null,Ea=null,rd=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||ms==null||ms!==Sl(i)||(i=ms,"selectionStart"in i&&Kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ea&&Ua(Ea,i)||(Ea=i,i=Cl(id,"onSelect"),0<i.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Bc={},w0={};Pi&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function lc(t){if(Bc[t])return Bc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return Bc[t]=e[n];return t}var T0=lc("animationend"),b0=lc("animationiteration"),A0=lc("animationstart"),C0=lc("transitionend"),R0=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){R0.set(t,e),Wr(e,[t])}for(var zc=0;zc<Dp.length;zc++){var Vc=Dp[zc],Ey=Vc.toLowerCase(),wy=Vc[0].toUpperCase()+Vc.slice(1);mr(Ey,"on"+wy)}mr(T0,"onAnimationEnd");mr(b0,"onAnimationIteration");mr(A0,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(C0,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,E_(i,e,void 0,t),t.currentTarget=null}function N0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Up(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Up(r,o,u),s=c}}}if(El)throw t=Qu,El=!1,Qu=null,t}function dt(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(P0(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),P0(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[xo]){t[xo]=!0,Og.forEach(function(n){n!=="selectionchange"&&(Ty.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Gc("selectionchange",!1,e))}}function P0(t,e,n,i){switch(p0(e)){case 1:var r=B_;break;case 4:r=z_;break;default:r=Wf}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Cr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}e0(function(){var u=s,p=Vf(n),h=[];e:{var f=R0.get(t);if(f!==void 0){var m=qf,_=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":m=ty;break;case"focusin":_="focus",m=kc;break;case"focusout":_="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ry;break;case T0:case b0:case A0:m=X_;break;case C0:m=ay;break;case"scroll":m=V_;break;case"wheel":m=ly;break;case"copy":case"cut":case"paste":m=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Tp}var E=(e&4)!==0,v=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var g=u,S;g!==null;){S=g;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,d!==null&&(y=Na(g,d),y!=null&&E.push(Fa(g,y,S)))),v)break;g=g.return}0<E.length&&(f=new m(f,_,null,n,p),h.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ku&&(_=n.relatedTarget||n.fromElement)&&(Cr(_)||_[Ii]))break e;if((m||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Cr(_):null,_!==null&&(v=Xr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(E=Ep,y="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=Tp,y="onPointerLeave",d="onPointerEnter",g="pointer"),v=m==null?f:vs(m),S=_==null?f:vs(_),f=new E(y,g+"leave",m,n,p),f.target=v,f.relatedTarget=S,y=null,Cr(p)===u&&(E=new E(d,g+"enter",_,n,p),E.target=S,E.relatedTarget=v,y=E),v=y,m&&_)t:{for(E=m,d=_,g=0,S=E;S;S=Zr(S))g++;for(S=0,y=d;y;y=Zr(y))S++;for(;0<g-S;)E=Zr(E),g--;for(;0<S-g;)d=Zr(d),S--;for(;g--;){if(E===d||d!==null&&E===d.alternate)break t;E=Zr(E),d=Zr(d)}E=null}else E=null;m!==null&&kp(h,f,m,E,!1),_!==null&&v!==null&&kp(h,v,_,E,!0)}}e:{if(f=u?vs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=my;else if(Cp(f))if(y0)b=_y;else{b=vy;var w=gy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=xy);if(b&&(b=b(t,u))){_0(h,b,n,p);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Wu(f,"number",f.value)}switch(w=u?vs(u):window,t){case"focusin":(Cp(w)||w.contentEditable==="true")&&(ms=w,id=u,Ea=null);break;case"focusout":Ea=id=ms=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Lp(h,n,p);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Lp(h,n,p)}var C;if(Yf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ps?v0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(g0&&n.locale!=="ko"&&(ps||x!=="onCompositionStart"?x==="onCompositionEnd"&&ps&&(C=m0()):(er=p,Xf="value"in er?er.value:er.textContent,ps=!0)),w=Cl(u,x),0<w.length&&(x=new wp(x,t,null,n,p),h.push({event:x,listeners:w}),C?x.data=C:(C=x0(n),C!==null&&(x.data=C)))),(C=uy?dy(t,n):fy(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(p=new wp("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=C))}N0(h,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Na(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Na(n,s),c!=null&&a.unshift(Fa(n,c,o))):r||(c=Na(n,s),c!=null&&a.push(Fa(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var by=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(by,`
`).replace(Ay,"")}function _o(t,e,n){if(e=Fp(e),Fp(t)!==e&&n)throw Error(se(425))}function Rl(){}var sd=null,ad=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(Ny)}:ld;function Ny(t){setTimeout(function(){throw t})}function jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),oi="__reactFiber$"+$s,Oa="__reactProps$"+$s,Ii="__reactContainer$"+$s,cd="__reactEvents$"+$s,Py="__reactListeners$"+$s,Iy="__reactHandles$"+$s;function Cr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bp(t);t!==null;){if(n=t[oi])return n;t=Bp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[oi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function cc(t){return t[Oa]||null}var ud=[],xs=-1;function gr(t){return{current:t}}function ft(t){0>xs||(t.current=ud[xs],ud[xs]=null,xs--)}function ut(t,e){xs++,ud[xs]=t.current,t.current=e}var fr={},nn=gr(fr),mn=gr(!1),Fr=fr;function ks(t,e){var n=t.type.contextTypes;if(!n)return fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Nl(){ft(mn),ft(nn)}function zp(t,e,n){if(nn.current!==fr)throw Error(se(168));ut(nn,e),ut(mn,n)}function I0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,g_(t)||"Unknown",r));return _t({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Fr=nn.current,ut(nn,t),ut(mn,mn.current),!0}function Vp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=I0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,ft(mn),ft(nn),ut(nn,t)):ft(mn),ut(mn,n)}var Ei=null,uc=!1,Wc=!1;function L0(t){Ei===null?Ei=[t]:Ei.push(t)}function Ly(t){uc=!0,L0(t)}function vr(){if(!Wc&&Ei!==null){Wc=!0;var t=0,e=it;try{var n=Ei;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,uc=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),r0(Gf,vr),r}finally{it=e,Wc=!1}}return null}var _s=[],ys=0,Il=null,Ll=0,In=[],Ln=0,Or=null,Ti=1,bi="";function Er(t,e){_s[ys++]=Ll,_s[ys++]=Il,Il=t,Ll=e}function D0(t,e,n){In[Ln++]=Ti,In[Ln++]=bi,In[Ln++]=Or,Or=t;var i=Ti;t=bi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-Kn(e)+r|n<<r|i,bi=s+t}else Ti=1<<s|n<<r|i,bi=t}function Zf(t){t.return!==null&&(Er(t,1),D0(t,1,0))}function Jf(t){for(;t===Il;)Il=_s[--ys],_s[ys]=null,Ll=_s[--ys],_s[ys]=null;for(;t===Or;)Or=In[--Ln],In[Ln]=null,bi=In[--Ln],In[Ln]=null,Ti=In[--Ln],In[Ln]=null}var Tn=null,wn=null,ht=!1,qn=null;function U0(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ti,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(ht){var e=wn;if(e){var n=e;if(!Gp(t,e)){if(dd(t))throw Error(se(418));e=ar(n.nextSibling);var i=Tn;e&&Gp(t,e)?U0(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(dd(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function yo(t){if(t!==Tn)return!1;if(!ht)return Hp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=wn)){if(dd(t))throw k0(),Error(se(418));for(;e;)U0(t,e),e=ar(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?ar(t.stateNode.nextSibling):null;return!0}function k0(){for(var t=wn;t;)t=ar(t.nextSibling)}function Fs(){wn=Tn=null,ht=!1}function Qf(t){qn===null?qn=[t]:qn.push(t)}var Dy=Oi.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function F0(t){function e(d,g){if(t){var S=d.deletions;S===null?(d.deletions=[g],d.flags|=16):S.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=ur(d,g),d.index=0,d.sibling=null,d}function s(d,g,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<g?(d.flags|=2,g):S):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,S,y){return g===null||g.tag!==6?(g=Jc(S,d.mode,y),g.return=d,g):(g=r(g,S),g.return=d,g)}function c(d,g,S,y){var b=S.type;return b===hs?p(d,g,S.props.children,y,S.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yi&&jp(b)===g.type)?(y=r(g,S.props),y.ref=na(d,g,S),y.return=d,y):(y=hl(S.type,S.key,S.props,null,d.mode,y),y.ref=na(d,g,S),y.return=d,y)}function u(d,g,S,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Qc(S,d.mode,y),g.return=d,g):(g=r(g,S.children||[]),g.return=d,g)}function p(d,g,S,y,b){return g===null||g.tag!==7?(g=Ur(S,d.mode,y,b),g.return=d,g):(g=r(g,S),g.return=d,g)}function h(d,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Jc(""+g,d.mode,S),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return S=hl(g.type,g.key,g.props,null,d.mode,S),S.ref=na(d,null,g),S.return=d,S;case fs:return g=Qc(g,d.mode,S),g.return=d,g;case Yi:var y=g._init;return h(d,y(g._payload),S)}if(pa(g)||Zs(g))return g=Ur(g,d.mode,S,null),g.return=d,g;So(d,g)}return null}function f(d,g,S,y){var b=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:o(d,g,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case co:return S.key===b?c(d,g,S,y):null;case fs:return S.key===b?u(d,g,S,y):null;case Yi:return b=S._init,f(d,g,b(S._payload),y)}if(pa(S)||Zs(S))return b!==null?null:p(d,g,S,y,null);So(d,S)}return null}function m(d,g,S,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(S)||null,o(g,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case co:return d=d.get(y.key===null?S:y.key)||null,c(g,d,y,b);case fs:return d=d.get(y.key===null?S:y.key)||null,u(g,d,y,b);case Yi:var w=y._init;return m(d,g,S,w(y._payload),b)}if(pa(y)||Zs(y))return d=d.get(S)||null,p(g,d,y,b,null);So(g,y)}return null}function _(d,g,S,y){for(var b=null,w=null,C=g,x=g=0,A=null;C!==null&&x<S.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var P=f(d,C,S[x],y);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(d,C),g=s(P,g,x),w===null?b=P:w.sibling=P,w=P,C=A}if(x===S.length)return n(d,C),ht&&Er(d,x),b;if(C===null){for(;x<S.length;x++)C=h(d,S[x],y),C!==null&&(g=s(C,g,x),w===null?b=C:w.sibling=C,w=C);return ht&&Er(d,x),b}for(C=i(d,C);x<S.length;x++)A=m(C,d,x,S[x],y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),g=s(A,g,x),w===null?b=A:w.sibling=A,w=A);return t&&C.forEach(function(I){return e(d,I)}),ht&&Er(d,x),b}function E(d,g,S,y){var b=Zs(S);if(typeof b!="function")throw Error(se(150));if(S=b.call(S),S==null)throw Error(se(151));for(var w=b=null,C=g,x=g=0,A=null,P=S.next();C!==null&&!P.done;x++,P=S.next()){C.index>x?(A=C,C=null):A=C.sibling;var I=f(d,C,P.value,y);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(d,C),g=s(I,g,x),w===null?b=I:w.sibling=I,w=I,C=A}if(P.done)return n(d,C),ht&&Er(d,x),b;if(C===null){for(;!P.done;x++,P=S.next())P=h(d,P.value,y),P!==null&&(g=s(P,g,x),w===null?b=P:w.sibling=P,w=P);return ht&&Er(d,x),b}for(C=i(d,C);!P.done;x++,P=S.next())P=m(C,d,x,P.value,y),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?x:P.key),g=s(P,g,x),w===null?b=P:w.sibling=P,w=P);return t&&C.forEach(function(L){return e(d,L)}),ht&&Er(d,x),b}function v(d,g,S,y){if(typeof S=="object"&&S!==null&&S.type===hs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case co:e:{for(var b=S.key,w=g;w!==null;){if(w.key===b){if(b=S.type,b===hs){if(w.tag===7){n(d,w.sibling),g=r(w,S.props.children),g.return=d,d=g;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Yi&&jp(b)===w.type){n(d,w.sibling),g=r(w,S.props),g.ref=na(d,w,S),g.return=d,d=g;break e}n(d,w);break}else e(d,w);w=w.sibling}S.type===hs?(g=Ur(S.props.children,d.mode,y,S.key),g.return=d,d=g):(y=hl(S.type,S.key,S.props,null,d.mode,y),y.ref=na(d,g,S),y.return=d,d=y)}return a(d);case fs:e:{for(w=S.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(d,g.sibling),g=r(g,S.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Qc(S,d.mode,y),g.return=d,d=g}return a(d);case Yi:return w=S._init,v(d,g,w(S._payload),y)}if(pa(S))return _(d,g,S,y);if(Zs(S))return E(d,g,S,y);So(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,S),g.return=d,d=g):(n(d,g),g=Jc(S,d.mode,y),g.return=d,d=g),a(d)):n(d,g)}return v}var Os=F0(!0),O0=F0(!1),Dl=gr(null),Ul=null,Ss=null,eh=null;function th(){eh=Ss=Ul=null}function nh(t){var e=Dl.current;ft(Dl),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Ul=t,eh=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Ul===null)throw Error(se(308));Ss=t,Ul.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Rr=null;function ih(t){Rr===null?Rr=[t]:Rr.push(t)}function B0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}function Wp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;a=0,p=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,E=o;switch(f=e,m=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=_t({},h,f);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=m,c=h):p=p.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=h}}function Xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var to={},fi=gr(to),Ba=gr(to),za=gr(to);function Nr(t){if(t===to)throw Error(se(174));return t}function sh(t,e){switch(ut(za,e),ut(Ba,t),ut(fi,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}ft(fi),ut(fi,e)}function Bs(){ft(fi),ft(Ba),ft(za)}function V0(t){Nr(za.current);var e=Nr(fi.current),n=qu(e,t.type);e!==n&&(ut(Ba,t),ut(fi,n))}function ah(t){Ba.current===t&&(ft(fi),ft(Ba))}var gt=gr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function oh(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var ll=Oi.ReactCurrentDispatcher,qc=Oi.ReactCurrentBatchConfig,Br=0,xt=null,Lt=null,Bt=null,Ol=!1,wa=!1,Va=0,Uy=0;function Yt(){throw Error(se(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function ch(t,e,n,i,r,s){if(Br=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?By:zy,t=n(i,r),wa){s=0;do{if(wa=!1,Va=0,25<=s)throw Error(se(301));s+=1,Bt=Lt=null,e.updateQueue=null,ll.current=Vy,t=n(i,r)}while(wa)}if(ll.current=Bl,e=Lt!==null&&Lt.next!==null,Br=0,Bt=Lt=xt=null,Ol=!1,e)throw Error(se(300));return t}function uh(){var t=Va!==0;return Va=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Bn(){if(Lt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Bt===null?xt.memoizedState:Bt.next;if(e!==null)Bt=e,Lt=t;else{if(t===null)throw Error(se(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ga(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var p=u.lane;if((Br&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=i):c=c.next=h,xt.lanes|=p,zr|=p}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Jn(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function G0(){}function H0(t,e){var n=xt,i=Bn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,dh(X0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,W0.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(se(349));Br&30||j0(n,e,r)}return r}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W0(t,e,n,i){e.value=n,e.getSnapshot=i,q0(e)&&$0(t)}function X0(t,e,n){return n(function(){q0(e)&&$0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function $0(t){var e=Li(t,1);e!==null&&Zn(e,t,1,-1)}function qp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=Oy.bind(null,xt,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Y0(){return Bn().memoizedState}function cl(t,e,n,i){var r=si();xt.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&lh(i,a.deps)){r.memoizedState=Ha(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function $p(t,e){return cl(8390656,8,t,e)}function dh(t,e){return dc(2048,8,t,e)}function K0(t,e){return dc(4,2,t,e)}function Z0(t,e){return dc(4,4,t,e)}function J0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,J0.bind(null,e,t),n)}function fh(){}function ev(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return Br&21?(Jn(n,e)||(n=o0(),xt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function ky(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{it=n,qc.transition=i}}function iv(){return Bn().memoizedState}function Fy(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rv(t))sv(e,n);else if(n=B0(t,e,n,i),n!==null){var r=an();Zn(n,t,i,r),av(n,e,i)}}function Oy(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(t))sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var c=e.interleaved;c===null?(r.next=r,ih(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=B0(t,e,r,i),n!==null&&(r=an(),Zn(n,t,i,r),av(n,e,i))}}function rv(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function sv(t,e){wa=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}var Bl={readContext:On,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},By={readContext:On,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,J0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fy.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:fh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=ky.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=si();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),zt===null)throw Error(se(349));Br&30||j0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$p(X0.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,W0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(ht){var n=bi,i=Ti;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zy={readContext:On,useCallback:ev,useContext:On,useEffect:dh,useImperativeHandle:Q0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tv,useReducer:$c,useRef:Y0,useState:function(){return $c(Ga)},useDebugValue:fh,useDeferredValue:function(t){var e=Bn();return nv(e,Lt.memoizedState,t)},useTransition:function(){var t=$c(Ga)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:H0,useId:iv,unstable_isNewReconciler:!1},Vy={readContext:On,useCallback:ev,useContext:On,useEffect:dh,useImperativeHandle:Q0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tv,useReducer:Yc,useRef:Y0,useState:function(){return Yc(Ga)},useDebugValue:fh,useDeferredValue:function(t){var e=Bn();return Lt===null?e.memoizedState=t:nv(e,Lt.memoizedState,t)},useTransition:function(){var t=Yc(Ga)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:H0,useId:iv,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=cr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(Zn(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=cr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(Zn(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=cr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(Zn(e,t,i,n),ol(e,t,i))}};function Yp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function ov(t,e,n){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=gn(e)?Fr:nn.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=gn(e)?Fr:nn.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",i=e;do n+=m_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vl||(Vl=!0,bd=i),gd(t,e)},n}function cv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nS.bind(null,t,e,n),e.then(t,t))}function Jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var Hy=Oi.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?O0(e,null,n,i):Os(e,t.child,n,i)}function em(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=ch(t,e,n,i,s,r),n=uh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ht&&n&&Zf(e),e.flags|=1,sn(t,e,i,r),e.child)}function tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uv(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function uv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return vd(t,e,n,i,r)}function dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Es,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Es,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Es,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Es,Mn),Mn|=i;return sn(t,e,r,n),e.child}function fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=gn(n)?Fr:nn.current;return s=ks(e,s),Rs(e,r),n=ch(t,e,n,i,s,r),i=uh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(ht&&i&&Zf(e),e.flags|=1,sn(t,e,n,r),e.child)}function nm(t,e,n,i,r){if(gn(n)){var s=!0;Pl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)ul(t,e),ov(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=gn(n)?Fr:nn.current,u=ks(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Kp(e,a,i,u),Ki=!1;var f=e.memoizedState;a.state=f,kl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||mn.current||Ki?(typeof p=="function"&&(pd(e,n,p,i),c=e.memoizedState),(o=Ki||Yp(e,n,o,i,f,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,z0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Wn(e.type,o),a.props=u,h=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=On(c):(c=gn(n)?Fr:nn.current,c=ks(e,c));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==c)&&Kp(e,a,i,c),Ki=!1,f=e.memoizedState,a.state=f,kl(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||mn.current||Ki?(typeof m=="function"&&(pd(e,n,m,i),_=e.memoizedState),(u=Ki||Yp(e,n,u,i,f,_,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return xd(t,e,n,i,s,r)}function xd(t,e,n,i,r,s){fv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vp(e,n,!1),Di(t,e,s);i=e.stateNode,Hy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&Vp(e,n,!0),e.child}function hv(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),sh(t,e.containerInfo)}function im(t,e,n,i,r){return Fs(),Qf(r),e.flags|=256,sn(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=mc(a,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=_d,t):hh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return jy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ur(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ur(o,s):(s=Ur(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?yd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,i){return i!==null&&Qf(i),Os(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(se(422))),Mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,t.child,null,a),e.child.memoizedState=yd(a),e.memoizedState=_d,s);if(!(e.mode&1))return Mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Kc(s,i,void 0),Mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,pn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Zn(i,t,r,-1))}return _h(),i=Kc(Error(se(421))),Mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=ar(r.nextSibling),Tn=e,ht=!0,qn=null,t!==null&&(In[Ln++]=Ti,In[Ln++]=bi,In[Ln++]=Or,Ti=t.id,bi=t.overflow,Or=e),e=hh(e,i.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function Zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function mv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wy(t,e,n){switch(e.tag){case 3:hv(e),Fs();break;case 5:V0(e);break;case 1:gn(e.type)&&Pl(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(ut(gt,gt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return mv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,dv(t,e,n)}return Di(t,e,n)}var gv,Sd,vv,xv;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(fi.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}$u(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&dt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xy(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return gn(e.type)&&Nl(),Kt(e),null;case 3:return i=e.stateNode,Bs(),ft(mn),ft(nn),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Rd(qn),qn=null))),Sd(t,e),Kt(e),null;case 5:ah(e);var r=Nr(za.current);if(n=e.type,t!==null&&e.stateNode!=null)vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Kt(e),null}if(t=Nr(fi.current),yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)dt(ga[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":hp(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":mp(i,s),dt("invalid",i)}$u(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":uo(i),pp(i,s,!0);break;case"textarea":uo(i),gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[Oa]=i,gv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Yu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)dt(ga[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":hp(t,i),r=Hu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":mp(t,i),r=Xu(t,i),dt("invalid",t);break;default:r=i}$u(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Yg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ra(t,c):typeof c=="number"&&Ra(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?c!=null&&s==="onScroll"&&dt("scroll",t):c!=null&&Ff(t,s,c,a))}switch(n){case"input":uo(t),pp(t,i,!1);break;case"textarea":uo(t),gp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Nr(za.current),Nr(fi.current),yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:_o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Kt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))k0(),Fs(),e.flags|=98560,s=!1;else if(s=yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[oi]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else qn!==null&&(Rd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):_h())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Bs(),Sd(t,e),t===null&&ka(e.stateNode.containerInfo),Kt(e),null;case 10:return nh(e.type._context),Kt(e),null;case 17:return gn(e.type)&&Nl(),Kt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ia(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fl(t),a!==null){for(e.flags|=128,ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Vs&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Kt(e),null}else 2*At()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return xh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function qy(t,e){switch(Jf(e),e.tag){case 1:return gn(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ft(mn),ft(nn),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ah(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return Bs(),null;case 10:return nh(e.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Eo=!1,Qt=!1,$y=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){Et(t,e,i)}}var sm=!1;function Yy(t,e){if(sd=bl,t=E0(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,p=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(c=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++p===i&&(c=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},bl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,v=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wn(e.type,E),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return _=sm,sm=!1,_}function Ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _v(t){var e=t.alternate;e!==null&&(t.alternate=null,_v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Oa],delete e[cd],delete e[Py],delete e[Iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yv(t){return t.tag===5||t.tag===3||t.tag===4}function am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Gt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Sv(t,e,n),n=n.sibling}function Sv(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:Qt||Ms(n,e);case 6:var i=Gt,r=Xn;Gt=null,Gi(t,e,n),Gt=i,Xn=r,Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Xn?(t=Gt,n=n.stateNode,t.nodeType===8?jc(t.parentNode,n):t.nodeType===1&&jc(t,n),La(t)):jc(Gt,n.stateNode));break;case 4:i=Gt,r=Xn,Gt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Md(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Qt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Gi(t,e,n),Qt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $y),e.forEach(function(i){var r=rS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Xn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Gt===null)throw Error(se(160));Sv(s,a,r),Gt=null,Xn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mv(e,t),e=e.sibling}function Mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{Ta(3,t,t.return),hc(3,t)}catch(E){Et(t,t.return,E)}try{Ta(5,t,t.return)}catch(E){Et(t,t.return,E)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(E){Et(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&jg(r,s),Yu(o,a);var u=Yu(o,s);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?Yg(r,h):p==="dangerouslySetInnerHTML"?qg(r,h):p==="children"?Ra(r,h):Ff(r,p,h,u)}switch(o){case"input":ju(r,s);break;case"textarea":Wg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ts(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(E){Et(t,t.return,E)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Et(t,t.return,E)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(E){Et(t,t.return,E)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=At())),i&4&&om(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||p,Vn(e,t),Qt=u):Vn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(ye=t,p=t.child;p!==null;){for(h=ye=p;ye!==null;){switch(f=ye,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ta(4,f,f.return);break;case 1:Ms(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Et(i,n,E)}}break;case 5:Ms(f,f.return);break;case 22:if(f.memoizedState!==null){cm(h);continue}}m!==null?(m.return=f,ye=m):cm(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=$g("display",a))}catch(E){Et(t,t.return,E)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){Et(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&om(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=am(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=am(t);wd(t,o,a);break;default:throw Error(se(161))}}catch(c){Et(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ky(t,e,n){ye=t,Ev(t)}function Ev(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Eo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Qt;o=Eo;var u=Qt;if(Eo=a,(Qt=c)&&!u)for(ye=r;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?um(r):c!==null?(c.return=a,ye=c):um(r);for(;s!==null;)ye=s,Ev(s),s=s.sibling;ye=r,Eo=o,Qt=u}lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):lm(t)}}function lm(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&La(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Qt||e.flags&512&&Ed(e)}catch(f){Et(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function cm(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function um(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(c){Et(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Et(e,r,c)}}var s=e.return;try{Ed(e)}catch(c){Et(e,s,c)}break;case 5:var a=e.return;try{Ed(e)}catch(c){Et(e,a,c)}}}catch(c){Et(e,e.return,c)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var Zy=Math.ceil,zl=Oi.ReactCurrentDispatcher,ph=Oi.ReactCurrentOwner,kn=Oi.ReactCurrentBatchConfig,Je=0,zt=null,Pt=null,Wt=0,Mn=0,Es=gr(0),Dt=0,ja=null,zr=0,pc=0,mh=0,ba=null,fn=null,gh=0,Vs=1/0,Mi=null,Vl=!1,bd=null,lr=null,wo=!1,tr=null,Gl=0,Aa=0,Ad=null,dl=-1,fl=0;function an(){return Je&6?At():dl!==-1?dl:dl=At()}function cr(t){return t.mode&1?Je&2&&Wt!==0?Wt&-Wt:Dy.transition!==null?(fl===0&&(fl=o0()),fl):(t=it,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function Zn(t,e,n,i){if(50<Aa)throw Aa=0,Ad=null,Error(se(185));Ja(t,n,i),(!(Je&2)||t!==zt)&&(t===zt&&(!(Je&2)&&(pc|=n),Dt===4&&Ji(t,Wt)),vn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=At()+500,uc&&vr()))}function vn(t,e){var n=t.callbackNode;D_(t,e);var i=Tl(t,t===zt?Wt:0);if(i===0)n!==null&&_p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_p(n),e===1)t.tag===0?Ly(dm.bind(null,t)):L0(dm.bind(null,t)),Ry(function(){!(Je&6)&&vr()}),n=null;else{switch(l0(i)){case 1:n=Gf;break;case 4:n=s0;break;case 16:n=wl;break;case 536870912:n=a0;break;default:n=wl}n=Pv(n,wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wv(t,e){if(dl=-1,fl=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Tl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hl(t,i);else{e=i;var r=Je;Je|=2;var s=bv();(zt!==t||Wt!==e)&&(Mi=null,Vs=At()+500,Dr(t,e));do try{eS();break}catch(o){Tv(t,o)}while(!0);th(),zl.current=s,Je=r,Pt!==null?e=0:(zt=null,Wt=0,e=Dt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=Cd(t,r))),e===1)throw n=ja,Dr(t,0),Ji(t,i),vn(t,At()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jy(r)&&(e=Hl(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=Cd(t,s))),e===1))throw n=ja,Dr(t,0),Ji(t,i),vn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:wr(t,fn,Mi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=gh+500-At(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(wr.bind(null,t,fn,Mi),e);break}wr(t,fn,Mi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zy(i/1960))-i,10<i){t.timeoutHandle=ld(wr.bind(null,t,fn,Mi),i);break}wr(t,fn,Mi);break;case 5:wr(t,fn,Mi);break;default:throw Error(se(329))}}}return vn(t,At()),t.callbackNode===n?wv.bind(null,t):null}function Cd(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=fn,fn=n,e!==null&&Rd(e)),t}function Rd(t){fn===null?fn=t:fn.push.apply(fn,t)}function Jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~mh,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function dm(t){if(Je&6)throw Error(se(327));Ns();var e=Tl(t,0);if(!(e&1))return vn(t,At()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=Cd(t,i))}if(n===1)throw n=ja,Dr(t,0),Ji(t,e),vn(t,At()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,fn,Mi),vn(t,At()),null}function vh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=At()+500,uc&&vr())}}function Vr(t){tr!==null&&tr.tag===0&&!(Je&6)&&Ns();var e=Je;Je|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,Je=e,!(Je&6)&&vr()}}function xh(){Mn=Es.current,ft(Es)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:Bs(),ft(mn),ft(nn),oh();break;case 5:ah(i);break;case 4:Bs();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:nh(i.type._context);break;case 22:case 23:xh()}n=n.return}if(zt=t,Pt=t=ur(t.current,null),Wt=Mn=e,Dt=0,ja=null,mh=pc=zr=0,fn=ba=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Rr=null}return t}function Tv(t,e){do{var n=Pt;try{if(th(),ll.current=Bl,Ol){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Br=0,Bt=Lt=xt=null,wa=!1,Va=0,ph.current=null,n===null||n.return===null){Dt=1,ja=e,Pt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Wt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=Jp(a);if(m!==null){m.flags&=-257,Qp(m,a,o,s,e),m.mode&1&&Zp(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(c),e.updateQueue=E}else _.add(c);break e}else{if(!(e&1)){Zp(s,u,e),_h();break e}c=Error(se(426))}}else if(ht&&o.mode&1){var v=Jp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Qp(v,a,o,s,e),Qf(zs(c,o));break e}}s=c=zs(c,o),Dt!==4&&(Dt=2),ba===null?ba=[s]:ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=lv(s,c,e);Wp(s,d);break e;case 1:o=c;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(lr===null||!lr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=cv(s,o,e);Wp(s,y);break e}}s=s.return}while(s!==null)}Cv(n)}catch(b){e=b,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function bv(){var t=zl.current;return zl.current=Bl,t===null?Bl:t}function _h(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(zr&268435455)&&!(pc&268435455)||Ji(zt,Wt)}function Hl(t,e){var n=Je;Je|=2;var i=bv();(zt!==t||Wt!==e)&&(Mi=null,Dr(t,e));do try{Qy();break}catch(r){Tv(t,r)}while(!0);if(th(),Je=n,zl.current=i,Pt!==null)throw Error(se(261));return zt=null,Wt=0,Dt}function Qy(){for(;Pt!==null;)Av(Pt)}function eS(){for(;Pt!==null&&!T_();)Av(Pt)}function Av(t){var e=Nv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Cv(t):Pt=e,ph.current=null}function Cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qy(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Pt=null;return}}else if(n=Xy(n,e,Mn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Dt===0&&(Dt=5)}function wr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,tS(t,e,n,i)}finally{kn.transition=r,it=i}return null}function tS(t,e,n,i){do Ns();while(tr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(U_(t,s),t===zt&&(Pt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Pv(wl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=it;it=1;var o=Je;Je|=4,ph.current=null,Yy(t,n),Mv(n,t),Sy(ad),bl=!!sd,ad=sd=null,t.current=n,Ky(n),b_(),Je=o,it=a,kn.transition=s}else t.current=n;if(wo&&(wo=!1,tr=t,Gl=r),s=t.pendingLanes,s===0&&(lr=null),R_(n.stateNode),vn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vl)throw Vl=!1,t=bd,bd=null,t;return Gl&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Ad?Aa++:(Aa=0,Ad=t):Aa=0,vr(),null}function Ns(){if(tr!==null){var t=l0(Gl),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Gl=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(ye=u;ye!==null;){var p=ye;switch(p.tag){case 0:case 11:case 15:Ta(8,p,s)}var h=p.child;if(h!==null)h.return=p,ye=h;else for(;ye!==null;){p=ye;var f=p.sibling,m=p.return;if(_v(p),p===u){ye=null;break}if(f!==null){f.return=m,ye=f;break}ye=m}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var v=E.sibling;E.sibling=null,E=v}while(E!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var g=t.current;for(ye=g;ye!==null;){a=ye;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,ye=S;else e:for(a=g;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:hc(9,o)}}catch(b){Et(o,o.return,b)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(Je=r,vr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function fm(t,e,n){e=zs(n,e),e=lv(t,e,1),t=or(t,e,1),e=an(),t!==null&&(Ja(t,1,e),vn(t,e))}function Et(t,e,n){if(t.tag===3)fm(t,t,n);else for(;e!==null;){if(e.tag===3){fm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=zs(n,t),t=cv(e,t,1),e=or(e,t,1),t=an(),e!==null&&(Ja(e,1,t),vn(e,t));break}}e=e.return}}function nS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Dt===4||Dt===3&&(Wt&130023424)===Wt&&500>At()-gh?Dr(t,0):mh|=n),vn(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=an();t=Li(t,e),t!==null&&(Ja(t,e,n),vn(t,n))}function iS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function rS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Rv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,Wy(t,e,n);pn=!!(t.flags&131072)}else pn=!1,ht&&e.flags&1048576&&D0(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=ks(e,nn.current);Rs(e,n),r=ch(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=xd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Zf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aS(i),t=Wn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=nm(null,e,i,t,n);break e;case 11:e=em(null,e,i,t,n);break e;case 14:e=tm(null,e,i,Wn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),nm(t,e,i,r,n);case 3:e:{if(hv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,z0(t,e),kl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(se(423)),e),e=im(t,e,i,n,r);break e}else if(i!==r){r=zs(Error(se(424)),e),e=im(t,e,i,n,r);break e}else for(wn=ar(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,qn=null,n=O0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Di(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return V0(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,od(i,r)?a=null:s!==null&&od(i,s)&&(e.flags|=32),fv(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&fd(e),null;case 13:return pv(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),em(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Dl,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!mn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ci(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),hd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=On(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),tm(t,e,i,r,n);case 15:return uv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),ul(t,e),e.tag=1,gn(i)?(t=!0,Pl(e)):t=!1,Rs(e,n),ov(e,i,r),md(e,i,r,n),xd(null,e,i,!0,t,n);case 19:return mv(t,e,n);case 22:return dv(t,e,n)}throw Error(se(156,e.tag))};function Pv(t,e){return r0(t,e)}function sS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new sS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bf)return 11;if(t===zf)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case Of:a=8,r|=8;break;case Bu:return t=Un(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case zu:return t=Un(13,n,e,r),t.elementType=zu,t.lanes=s,t;case Vu:return t=Un(19,n,e,r),t.elementType=Vu,t.lanes=s,t;case Vg:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:a=10;break e;case zg:a=9;break e;case Bf:a=11;break e;case zf:a=14;break e;case Yi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,s,a,o,c){return t=new oS(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(s),t}function lS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return fr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(gn(n))return I0(t,n,e)}return e}function Lv(t,e,n,i,r,s,a,o,c){return t=Sh(n,i,!0,t,r,s,a,o,c),t.context=Iv(null),n=t.current,i=an(),r=cr(n),s=Ci(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,Ja(t,r,i),vn(t,i),t}function gc(t,e,n,i){var r=e.current,s=an(),a=cr(r);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,a),t!==null&&(Zn(t,r,a,s),ol(t,r,a)),a}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function cS(){return null}var Dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}vc.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));gc(t,e,null,null)};vc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){gc(null,t,null,null)}),e[Ii]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=d0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&h0(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pm(){}function uS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=jl(a);s.call(u)}}var a=Lv(e,i,t,0,null,!1,!1,"",pm);return t._reactRootContainer=a,t[Ii]=a.current,ka(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=jl(c);o.call(u)}}var c=Sh(t,0,!1,null,null,!1,!1,"",pm);return t._reactRootContainer=c,t[Ii]=c.current,ka(t.nodeType===8?t.parentNode:t),Vr(function(){gc(e,c,n,i)}),c}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=jl(a);o.call(c)}}gc(e,a,t,r)}else a=uS(n,e,t,r,i);return jl(a)}c0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Hf(e,n|1),vn(e,At()),!(Je&6)&&(Vs=At()+500,vr()))}break;case 13:Vr(function(){var i=Li(t,1);if(i!==null){var r=an();Zn(i,t,1,r)}}),Mh(t,1)}};jf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=an();Zn(e,t,134217728,n)}Mh(t,134217728)}};u0=function(t){if(t.tag===13){var e=cr(t),n=Li(t,e);if(n!==null){var i=an();Zn(n,t,e,i)}Mh(t,e)}};d0=function(){return it};f0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Zu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(se(90));Hg(i),ju(i,r)}}}break;case"textarea":Wg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Jg=vh;Qg=Vr;var dS={usingClientEntryPoint:!1,Events:[eo,vs,cc,Kg,Zg,vh]},ra={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fS={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||cS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{sc=To.inject(fS),di=To}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(se(200));return lS(t,e,null,n)};An.createRoot=function(t,e){if(!wh(t))throw Error(se(299));var n=!1,i="",r=Dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,ka(t.nodeType===8?t.parentNode:t),new Eh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Vr(t)};An.hydrate=function(t,e,n){if(!xc(e))throw Error(se(200));return _c(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};An.render=function(t,e,n){if(!xc(e))throw Error(se(200));return _c(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!xc(t))throw Error(se(40));return t._reactRootContainer?(Vr(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};An.unstable_batchedUpdates=vh;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return _c(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(t){console.error(t)}}Uv(),Ug.exports=An;var hS=Ug.exports,mm=hS;Fu.createRoot=mm.createRoot,Fu.hydrateRoot=mm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Me=(t,e)=>{const n=Se.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},p)=>Se.createElement("svg",{ref:p,...pS,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${mS(t)}`,o].join(" "),...u},[...e.map(([h,f])=>Se.createElement(h,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Me("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Me("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Me("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Me("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=Me("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=Me("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Me("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=Me("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Me("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Me("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Me("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Me("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=Me("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=Me("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=Me("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Me("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=Me("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Me("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Me("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=Me("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Me("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=Me("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Me("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=Me("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Me("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=Me("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=Me("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Me("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Me("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=Me("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Me("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Me("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Me("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=Me("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Me("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Me("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=Me("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=Me("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=Me("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=Me("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=Me("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=Me("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=Me("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=Me("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=Me("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Me("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=Me("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=Me("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Me("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Me("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Me("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Me("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=Me("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Me("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=Me("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Me("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Me("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=Me("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Me("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Me("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Me("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=Me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qS=""+new URL("profile-CnpMYxIn.jpg",import.meta.url).href,Qe={name:"Kamana Agrawal",brandLogo:"Kamana.",eyebrow:"FULL-STACK DEVELOPER · ASPIRING AI/ML ENGINEER",primaryTitle:"Full-Stack Developer & Aspiring AI/ML Engineer",secondaryTitle:"Full-Stack Intern @ SuuSri AI · Frontend @ Dipvision Infotech",educationStatus:"B.Tech CSE Student at College of Engineering Bhubaneswar",motto:"CODE · CREATE · INNOVATE",brandMotto:"CODE • CREATE • INNOVATE",missionTagline:"Building AI, Web & IoT Solutions for a Smarter Tomorrow",valueProposition:"Turning Ideas into Intelligent Solutions.",heroHeadlineLead:"I build digital experiences that",heroHeadlineAccent:"think, scale & matter.",supportingLine:"AI/ML Enthusiast & Full-Stack Developer. Building AI, Web & IoT Solutions for a Smarter Tomorrow.",secondaryLine:"Turning ideas into intelligent solutions—from responsive full-stack applications in React and FastAPI to on-device IoT telemetry and Generative AI workflows.",aboutLead:"Developer by practice. AI/ML Engineer in the making.",aboutBody1:"I started my journey in Computer Science with a simple curiosity — how ideas can be transformed into real, usable interfaces. From HTML, CSS, and JavaScript, I moved into modern frontend development with React, REST APIs, Git/GitHub, and backend architectures.",aboutBody2:"Today, I'm working as a Full-Stack Developer Intern at SuuSri AI and as a Frontend Developer at Dipvision Infotech, gaining hands-on experience with real-world development, collaboration, and software engineering workflows.",aboutBody3:"Web development is only one part of my journey. I'm deeply passionate about AI & Machine Learning (LLMs, Prompt Engineering, and Cloud Systems) — especially in how intelligent systems solve practical problems rather than simply exist as demos.",aboutBody4:"This drive has led me to explore projects combining Full-Stack Web, AI, and IoT — including solar-energy predictive maintenance, AI career roadmaps, and peer-reviewed research in sensor networks.",college:"College of Engineering Bhubaneswar",collegeShort:"CEB, Bhubaneswar",university:"Biju Patnaik University of Technology (BPUT), Rourkela",universityShort:"BPUT, Rourkela",degree:"B.Tech — Computer Science & Engineering",yearOfStudy:"2nd Year (Batch of 2028)",duration:"September 2024 – August 2028",graduationYear:"2028",location:"Bhubaneswar, Odisha, India",cgpa:null,email:"kamanaagrawal833@gmail.com",phone:"+91 8093859132",github:"https://github.com/Kamana5812",linkedin:"https://www.linkedin.com/in/kamana-agrawal-510146281",resumeUrl:"#resume",profileImage:qS,socials:[{label:"GitHub",url:"https://github.com/Kamana5812",icon:"Github"},{label:"LinkedIn",url:"https://www.linkedin.com/in/kamana-agrawal-510146281",icon:"Linkedin"},{label:"Email",url:"mailto:kamanaagrawal833@gmail.com",icon:"Mail"},{label:"Resume",url:"#resume",icon:"FileText"}],stats:[{num:"04",label:"Internships Completed & Active",icon:"Briefcase"},{num:"01",label:"Published Research Paper",icon:"BookOpen"},{title:"AI & Full-Stack",label:"LLMs, React & Cloud",icon:"Brain"},{title:"IoT & Embedded",label:"Sensors & Telemetry",icon:"Cpu"}]};function $S({isOpen:t,onClose:e,navItems:n=[],activeSection:i="home",resumeUrl:r,onNavClick:s}){const a=Se.useRef(null);return Se.useEffect(()=>{const o=u=>{u.key==="Escape"&&t&&e()},c=u=>{t&&a.current&&!a.current.contains(u.target)&&(u.target.closest(".mobile-menu-toggle")||e())};return t&&(window.addEventListener("keydown",o),document.addEventListener("mousedown",c),document.addEventListener("touchstart",c)),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c)}},[t,e]),t?l.jsx("div",{ref:a,id:"mobile-navigation",className:"mobile-nav-dropdown",role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation",children:l.jsxs("div",{className:"mobile-nav-card",children:[l.jsx("nav",{className:"mobile-nav-list-container",children:l.jsx("ul",{className:"mobile-nav-list",children:n.map(o=>{const c=i===o.id;return l.jsx("li",{className:"mobile-nav-item",children:l.jsxs("a",{href:`#${o.id}`,className:`mobile-nav-link ${c?"active":""}`,onClick:u=>{s?s(u,o.id):e()},children:[l.jsx("span",{className:"mobile-nav-label font-body",children:o.label}),c&&l.jsx("span",{className:"mobile-active-dot","aria-hidden":"true"})]})},o.id)})})}),l.jsx("div",{className:"mobile-nav-footer",children:l.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"mobile-resume-btn font-mono",children:[l.jsx("span",{children:"Resume (PDF)"}),l.jsx(kv,{size:14})]})})]})}):null}function YS({activeSection:t="home",onOpenCommandPalette:e,soundEnabled:n=!0,onToggleSound:i}){const[r,s]=Se.useState(!1),[a,o]=Se.useState(!1);Se.useEffect(()=>{const h=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const c=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"journey",label:"Experience"},{id:"publications",label:"Research"},{id:"contact",label:"Contact"}],u=[{id:"home",label:"Home"},{id:"what-i-do",label:"Overview"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"journey",label:"Experience"},{id:"publications",label:"Research"},{id:"hackathons",label:"Honors"},{id:"certifications",label:"Certifications"},{id:"endorsements",label:"Endorsements"},{id:"contact",label:"Contact"}],p=(h,f)=>{h.preventDefault(),s(!1);const m=document.getElementById(f);if(m){const v=m.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:v,behavior:"smooth"}),window.history.pushState(null,"",`#${f}`)}};return l.jsxs(l.Fragment,{children:[l.jsx("header",{className:`navbar ${a?"navbar--scrolled":""}`,children:l.jsxs("div",{className:"navbar-container",children:[l.jsxs("a",{href:"#home",className:"navbar-brand font-heading","aria-label":"Kamana Agrawal Home",onClick:h=>p(h,"home"),children:[l.jsx("span",{className:"brand-monogram font-mono",children:"KA"}),l.jsx("span",{className:"brand-text",children:"Kamana Agrawal"})]}),l.jsx("nav",{className:"navbar-nav","aria-label":"Main Navigation",children:l.jsx("ul",{className:"nav-list",children:c.map(h=>{const f=t===h.id;return l.jsx("li",{className:"nav-item",children:l.jsxs("a",{href:`#${h.id}`,className:`nav-link font-body ${f?"active":""}`,"aria-current":f?"true":void 0,onClick:m=>p(m,h.id),children:[f&&l.jsx("span",{className:"nav-active-dot","aria-hidden":"true"}),l.jsx("span",{children:h.label})]})},h.id)})})}),l.jsxs("div",{className:"navbar-actions",children:[l.jsxs("button",{type:"button",className:"navbar-search-btn font-mono",onClick:e,title:"Open Command Palette (Ctrl + K)",children:[l.jsx(Wv,{size:14,className:"search-icon"}),l.jsx("span",{className:"search-text",children:"Search"}),l.jsx("kbd",{className:"cmd-kbd",children:"⌘K"})]}),i&&l.jsx("button",{type:"button",className:`navbar-sound-btn ${n?"sound-active":""}`,onClick:i,title:n?"Mute cyber sounds":"Enable cyber sounds","aria-label":n?"Mute audio":"Enable audio",children:n?l.jsx(WS,{size:16}):l.jsx(XS,{size:16})}),l.jsxs("a",{href:"#contact",className:"navbar-connect-btn font-body",onClick:h=>p(h,"contact"),children:[l.jsx("span",{children:"Let's Connect"}),l.jsx("span",{className:"btn-arrow-icon","aria-hidden":"true",children:"↗"})]}),l.jsx("button",{type:"button",className:"mobile-menu-toggle",onClick:()=>s(!r),"aria-expanded":r,"aria-controls":"mobile-navigation","aria-label":r?"Close menu":"Open menu",children:r?l.jsx(Xa,{size:24}):l.jsx(PS,{size:24})})]})]})}),l.jsx($S,{isOpen:r,onClose:()=>s(!1),navItems:u,activeSection:t,resumeUrl:Qe.resumeUrl,onNavClick:p})]})}function KS({onOpenAdmin:t}){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("footer",{className:"site-footer",role:"contentinfo",children:l.jsxs("div",{className:"footer-container font-mono",children:[l.jsx("div",{className:"footer-left",children:l.jsxs("span",{children:["© ",new Date().getFullYear()," ",Qe.name,". All rights reserved."]})}),l.jsxs("div",{className:"footer-center",children:[l.jsxs("span",{children:["Designed & Built by ",Qe.brandLogo]}),l.jsx("a",{href:"./admin/",className:"admin-footer-link",style:{marginLeft:"12px",color:"var(--text-muted)",textDecoration:"none",fontSize:"0.75rem"},children:"• Decap CMS (/admin)"})]}),l.jsx("div",{className:"footer-right",children:l.jsxs("button",{type:"button",className:"back-to-top-btn",onClick:e,"aria-label":"Scroll back to top of page",children:[l.jsx("span",{children:"Back to top"}),l.jsx(xS,{size:14,"aria-hidden":"true"})]})})]})})}function zn(t={threshold:.15,triggerOnce:!0}){const[e,n]=Se.useState(!1),i=Se.useRef(null);return Se.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){n(!0);return}const s=new IntersectionObserver(([o])=>{o.isIntersecting?(n(!0),t.triggerOnce&&i.current&&s.unobserve(i.current)):t.triggerOnce||n(!1)},t),a=i.current;return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[t.threshold,t.triggerOnce]),[i,e]}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="185",ZS=0,xm=1,JS=2,pl=1,QS=2,va=3,hr=0,xn=1,wi=2,Ri=0,Ps=1,Xl=2,_m=3,ym=4,eM=5,br=100,tM=101,nM=102,iM=103,rM=104,sM=200,aM=201,oM=202,lM=203,Ud=204,kd=205,cM=206,uM=207,dM=208,fM=209,hM=210,pM=211,mM=212,gM=213,vM=214,Fd=0,Od=1,Bd=2,Gs=3,zd=4,Vd=5,Gd=6,Hd=7,qv=0,xM=1,_M=2,hi=0,$v=1,Yv=2,Kv=3,Zv=4,Jv=5,Qv=6,ex=7,tx=300,Gr=301,Hs=302,eu=303,tu=304,Mc=306,jd=1e3,Ai=1001,Wd=1002,jt=1003,yM=1004,Ao=1005,en=1006,nu=1007,Pr=1008,En=1009,nx=1010,ix=1011,qa=1012,Ih=1013,mi=1014,ci=1015,Ui=1016,Lh=1017,Dh=1018,$a=1020,rx=35902,sx=35899,ax=1021,ox=1022,Yn=1023,ki=1026,Ir=1027,lx=1028,Uh=1029,Hr=1030,kh=1031,Fh=1033,ml=33776,gl=33777,vl=33778,xl=33779,Xd=35840,qd=35841,$d=35842,Yd=35843,Kd=36196,Zd=37492,Jd=37496,Qd=37488,ef=37489,ql=37490,tf=37491,nf=37808,rf=37809,sf=37810,af=37811,of=37812,lf=37813,cf=37814,uf=37815,df=37816,ff=37817,hf=37818,pf=37819,mf=37820,gf=37821,vf=36492,xf=36494,_f=36495,yf=36283,Sf=36284,$l=36285,Mf=36286,SM=3200,Ef=0,MM=1,Qi="",Pn="srgb",Yl="srgb-linear",Kl="linear",nt="srgb",Jr=7680,Sm=519,EM=512,wM=513,TM=514,Oh=515,bM=516,AM=517,Bh=518,CM=519,Mm=35044,Em="300 es",ui=2e3,Ya=2001;function RM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NM(){const t=Zl("canvas");return t.style.display="block",t}const wm={};function Tm(...t){const e="THREE."+t.shift();console.log(e,...t)}function cx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=cx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=cx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Is(...t){const e=t.join(" ");e in wm||(wm[e]=!0,Le(...t))}function PM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const IM={[Fd]:Od,[Bd]:Gd,[zd]:Hd,[Gs]:Vd,[Od]:Fd,[Gd]:Bd,[Hd]:zd,[Vd]:Gs};class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_l=Math.PI/180,wf=180/Math.PI;function no(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function LM(t,e){return(t%e+e)%e}function iu(t,e,n){return(1-n)*t+n*e}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qh=class qh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;let Ge=qh;class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],E=s[a+3];if(h!==E||c!==f||u!==m||p!==_){let v=c*f+u*m+p*_+h*E;v<0&&(f=-f,m=-m,_=-_,E=-E,v=-v);let d=1-o;if(v<.9995){const g=Math.acos(v),S=Math.sin(g);d=Math.sin(d*g)/S,o=Math.sin(o*g)/S,c=c*d+f*o,u=u*d+m*o,p=p*d+_*o,h=h*d+E*o}else{c=c*d+f*o,u=u*d+m*o,p=p*d+_*o,h=h*d+E*o;const g=1/Math.sqrt(c*c+u*u+p*p+h*h);c*=g,u*=g,p*=g,h*=g}}e[n]=c,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],p=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+p*h+c*m-u*f,e[n+1]=c*_+p*f+u*h-o*m,e[n+2]=u*_+p*m+o*f-c*h,e[n+3]=p*_-o*h-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),p=o(r/2),h=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*p*h+u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h-f*m*_;break;case"YXZ":this._x=f*p*h+u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h+f*m*_;break;case"ZXY":this._x=f*p*h-u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h-f*m*_;break;case"ZYX":this._x=f*p*h-u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h+f*m*_;break;case"YZX":this._x=f*p*h+u*m*_,this._y=u*m*h+f*p*_,this._z=u*p*_-f*m*h,this._w=u*p*h-f*m*_;break;case"XZY":this._x=f*p*h-u*m*_,this._y=u*m*h-f*p*_,this._z=u*p*_+f*m*h,this._w=u*p*h+f*m*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],p=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,p=n._w;return this._x=i*p+a*o+r*u-s*c,this._y=r*p+a*c+s*o-i*u,this._z=s*p+a*u+i*c-r*o,this._w=a*p-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),p=Math.sin(u);c=Math.sin(c*u)/p,n=Math.sin(n*u)/p,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $h=class $h{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),p=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*u+a*h-o*p,this.y=i+c*p+o*u-s*h,this.z=r+c*h+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$h.prototype.isVector3=!0;let O=$h;const ru=new O,bm=new Ys,Yh=class Yh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],p=i[4],h=i[7],f=i[2],m=i[5],_=i[8],E=r[0],v=r[3],d=r[6],g=r[1],S=r[4],y=r[7],b=r[2],w=r[5],C=r[8];return s[0]=a*E+o*g+c*b,s[3]=a*v+o*S+c*w,s[6]=a*d+o*y+c*C,s[1]=u*E+p*g+h*b,s[4]=u*v+p*S+h*w,s[7]=u*d+p*y+h*C,s[2]=f*E+m*g+_*b,s[5]=f*v+m*S+_*w,s[8]=f*d+m*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8];return n*a*p-n*o*u-i*s*p+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=p*a-o*u,f=o*c-p*s,m=u*s-a*c,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(r*u-p*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(p*n-r*c)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*c-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(e,n)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-e)),this}translate(e,n){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;let ke=Yh;const su=new ke,Am=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const t={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?Kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yl]:{primaries:e,whitePoint:i,transfer:Kl,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const Xe=DM();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class UM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=Zl("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kM=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(au(r[a].image)):s.push(au(r[a]))}else s=au(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let FM=0;const ou=new O;class on extends qr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Ai,r=Ai,s=en,a=Pr,o=Yn,c=En,u=on.DEFAULT_ANISOTROPY,p=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=no(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=tx;on.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],p=c[4],h=c[8],f=c[1],m=c[5],_=c[9],E=c[2],v=c[6],d=c[10];if(Math.abs(p-f)<.01&&Math.abs(h-E)<.01&&Math.abs(_-v)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+E)<.1&&Math.abs(_+v)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,y=(m+1)/2,b=(d+1)/2,w=(p+f)/4,C=(h+E)/4,x=(_+v)/4;return S>y&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=C/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(h-E)*(h-E)+(f-p)*(f-p));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(h-E)/g,this.z=(f-p)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let vt=Kh;class OM extends qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new zh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends OM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ux extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=class ic{constructor(e,n,i,r,s,a,o,c,u,p,h,f,m,_,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,p,h,f,m,_,E,v)}set(e,n,i,r,s,a,o,c,u,p,h,f,m,_,E,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=p,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=E,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*p,m=a*h,_=o*p,E=o*h;n[0]=c*p,n[4]=-c*h,n[8]=u,n[1]=m+_*u,n[5]=f-E*u,n[9]=-o*c,n[2]=E-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*p,m=c*h,_=u*p,E=u*h;n[0]=f+E*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*p,n[9]=-o,n[2]=m*o-_,n[6]=E+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*p,m=c*h,_=u*p,E=u*h;n[0]=f-E*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*p,n[9]=E-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*p,m=a*h,_=o*p,E=o*h;n[0]=c*p,n[4]=_*u-m,n[8]=f*u+E,n[1]=c*h,n[5]=E*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=o*c,E=o*u;n[0]=c*p,n[4]=E-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*p,n[9]=-o*p,n[2]=-u*p,n[6]=m*h+_,n[10]=f-E*h}else if(e.order==="XZY"){const f=a*c,m=a*u,_=o*c,E=o*u;n[0]=c*p,n[4]=-h,n[8]=u*p,n[1]=f*h+E,n[5]=a*p,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*p,n[10]=E*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,VM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),Co.crossVectors(yn,Hi),r[0]=Hi.x,r[4]=Co.x,r[8]=yn.x,r[1]=Hi.y,r[5]=Co.y,r[9]=yn.y,r[2]=Hi.z,r[6]=Co.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],p=i[1],h=i[5],f=i[9],m=i[13],_=i[2],E=i[6],v=i[10],d=i[14],g=i[3],S=i[7],y=i[11],b=i[15],w=r[0],C=r[4],x=r[8],A=r[12],P=r[1],I=r[5],L=r[9],W=r[13],Y=r[2],z=r[6],$=r[10],q=r[14],N=r[3],U=r[7],B=r[11],ee=r[15];return s[0]=a*w+o*P+c*Y+u*N,s[4]=a*C+o*I+c*z+u*U,s[8]=a*x+o*L+c*$+u*B,s[12]=a*A+o*W+c*q+u*ee,s[1]=p*w+h*P+f*Y+m*N,s[5]=p*C+h*I+f*z+m*U,s[9]=p*x+h*L+f*$+m*B,s[13]=p*A+h*W+f*q+m*ee,s[2]=_*w+E*P+v*Y+d*N,s[6]=_*C+E*I+v*z+d*U,s[10]=_*x+E*L+v*$+d*B,s[14]=_*A+E*W+v*q+d*ee,s[3]=g*w+S*P+y*Y+b*N,s[7]=g*C+S*I+y*z+b*U,s[11]=g*x+S*L+y*$+b*B,s[15]=g*A+S*W+y*q+b*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],p=e[2],h=e[6],f=e[10],m=e[14],_=e[3],E=e[7],v=e[11],d=e[15],g=c*m-u*f,S=o*m-u*h,y=o*f-c*h,b=a*m-u*p,w=a*f-c*p,C=a*h-o*p;return n*(E*g-v*S+d*y)-i*(_*g-v*b+d*w)+r*(_*S-E*b+d*C)-s*(_*y-E*w+v*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],p=e[10];return n*(a*p-o*u)-i*(s*p-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=e[9],f=e[10],m=e[11],_=e[12],E=e[13],v=e[14],d=e[15],g=n*o-i*a,S=n*c-r*a,y=n*u-s*a,b=i*c-r*o,w=i*u-s*o,C=r*u-s*c,x=p*E-h*_,A=p*v-f*_,P=p*d-m*_,I=h*v-f*E,L=h*d-m*E,W=f*d-m*v,Y=g*W-S*L+y*I+b*P-w*A+C*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return e[0]=(o*W-c*L+u*I)*z,e[1]=(r*L-i*W-s*I)*z,e[2]=(E*C-v*w+d*b)*z,e[3]=(f*w-h*C-m*b)*z,e[4]=(c*P-a*W-u*A)*z,e[5]=(n*W-r*P+s*A)*z,e[6]=(v*y-_*C-d*S)*z,e[7]=(p*C-f*y+m*S)*z,e[8]=(a*L-o*P+u*x)*z,e[9]=(i*P-n*L-s*x)*z,e[10]=(_*w-E*y+d*g)*z,e[11]=(h*y-p*w-m*g)*z,e[12]=(o*A-a*I-c*x)*z,e[13]=(n*I-i*A+r*x)*z,e[14]=(E*S-_*b-v*g)*z,e[15]=(p*b-h*S+f*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,p=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,p*o+i,p*c-r*a,0,u*c-r*o,p*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,p=a+a,h=o+o,f=s*u,m=s*p,_=s*h,E=a*p,v=a*h,d=o*h,g=c*u,S=c*p,y=c*h,b=i.x,w=i.y,C=i.z;return r[0]=(1-(E+d))*b,r[1]=(m+y)*b,r[2]=(_-S)*b,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+d))*w,r[6]=(v+g)*w,r[7]=0,r[8]=(_+S)*C,r[9]=(v-g)*C,r[10]=(1-(f+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),c=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const u=1/a,p=1/o,h=1/c;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=p,Gn.elements[5]*=p,Gn.elements[6]*=p,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=ui,c=!1){const u=this.elements,p=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,E;if(c)_=s/(a-s),E=a*s/(a-s);else if(o===ui)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ya)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,c=!1){const u=this.elements,p=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,E;if(c)_=1/(a-s),E=a/(a-s);else if(o===ui)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ya)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ic.prototype.isMatrix4=!0;let pt=ic;const es=new O,Gn=new pt,zM=new O(0,0,0),VM=new O(1,1,1),Hi=new O,Co=new O,yn=new O,Rm=new pt,Nm=new Ys;class pr{constructor(e=0,n=0,i=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],p=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GM=0;const Pm=new O,ts=new Ys,vi=new pt,Ro=new O,aa=new O,HM=new O,jM=new Ys,Im=new O(1,0,0),Lm=new O(0,1,0),Dm=new O(0,0,1),Um={type:"added"},WM={type:"removed"},ns={type:"childadded",child:null},lu={type:"childremoved",child:null};class tn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new O,n=new pr,i=new Ys,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ro.copy(e):Ro.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(aa,Ro,this.up):vi.lookAt(Ro,aa,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),ns.child=e,this.dispatchEvent(ns),ns.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,jM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const p=o[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new O(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const v=n.getJointPose(E,i),d=this._getHandJoint(u,E);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=p.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},No={h:0,s:0,l:0};function uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=LM(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=uu(a,s,e+1/3),this.g=uu(a,s,e),this.b=uu(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Xe.workingToColorSpace(Jt.copy(this),e),Math.round(qe(Jt.r*255,0,255))*65536+Math.round(qe(Jt.g*255,0,255))*256+Math.round(qe(Jt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const p=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=p<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Pn){Xe.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(No);const i=iu(ji.h,No.h,n),r=iu(ji.s,No.s,n),s=iu(ji.l,No.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new He;He.NAMES=fx;class hx extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hn=new O,xi=new O,du=new O,_i=new O,is=new O,rs=new O,km=new O,fu=new O,hu=new O,pu=new O,mu=new vt,gu=new vt,vu=new vt;class Dn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),xi.subVectors(i,n),du.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(xi),c=Hn.dot(du),u=xi.dot(xi),p=xi.dot(du),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(u*c-o*p)*f,_=(a*p-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return mu.setScalar(0),gu.setScalar(0),vu.setScalar(0),mu.fromBufferAttribute(e,n),gu.fromBufferAttribute(e,i),vu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mu,s.x),a.addScaledVector(gu,s.y),a.addScaledVector(vu,s.z),a}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),xi.subVectors(e,n),Hn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),fu.subVectors(e,i);const c=is.dot(fu),u=rs.dot(fu);if(c<=0&&u<=0)return n.copy(i);hu.subVectors(e,r);const p=is.dot(hu),h=rs.dot(hu);if(p>=0&&h<=p)return n.copy(r);const f=c*h-p*u;if(f<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(is,a);pu.subVectors(e,s);const m=is.dot(pu),_=rs.dot(pu);if(_>=0&&m<=_)return n.copy(s);const E=m*u-c*_;if(E<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(rs,o);const v=p*_-m*h;if(v<=0&&h-p>=0&&m-_>=0)return km.subVectors(s,r),o=(h-p)/(h-p+(m-_)),n.copy(r).addScaledVector(km,o);const d=1/(v+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class io{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Io.subVectors(this.max,oa),ss.subVectors(e.a,oa),as.subVectors(e.b,oa),os.subVectors(e.c,oa),Wi.subVectors(as,ss),Xi.subVectors(os,as),_r.subVectors(ss,os);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-_r.z,_r.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,_r.z,0,-_r.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-_r.y,_r.x,0];return!xu(n,ss,as,os,Io)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,ss,as,os,Io))?!1:(Lo.crossVectors(Wi,Xi),n=[Lo.x,Lo.y,Lo.z],xu(n,ss,as,os,Io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,Po=new io,ss=new O,as=new O,os=new O,Wi=new O,Xi=new O,_r=new O,oa=new O,Io=new O,Lo=new O,yr=new O;function xu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),u=n.dot(yr),p=i.dot(yr);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>o)return!1}return!0}const Nt=new O,Do=new Ge;let qM=0;class Fn extends qr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mm,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class px extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mx extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mt extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const $M=new io,la=new O,_u=new O;class ro{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const n=la.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(_u)),this.expandByPoint(la.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YM=0;const Nn=new pt,yu=new tn,ls=new O,Sn=new io,ca=new io,Ot=new O;class qt extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RM(e)?mx:px)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(Sn.min,ca.min),Sn.expandByPoint(Ot),Ot.addVectors(Sn.max,ca.max),Sn.expandByPoint(Ot)):(Sn.expandByPoint(ca.min),Sn.expandByPoint(ca.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Ot.fromBufferAttribute(o,u),c&&(ls.fromBufferAttribute(e,u),Ot.add(ls)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new O,c[x]=new O;const u=new O,p=new O,h=new O,f=new Ge,m=new Ge,_=new Ge,E=new O,v=new O;function d(x,A,P){u.fromBufferAttribute(i,x),p.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,P),p.sub(u),h.sub(u),m.sub(f),_.sub(f);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(E.copy(p).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),v.copy(h).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(I),o[x].add(E),o[A].add(E),o[P].add(E),c[x].add(v),c[A].add(v),c[P].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,A=g.length;x<A;++x){const P=g[x],I=P.start,L=P.count;for(let W=I,Y=I+L;W<Y;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new O,y=new O,b=new O,w=new O;function C(x){b.fromBufferAttribute(r,x),w.copy(b);const A=o[x];S.copy(A),S.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(w,A);const I=y.dot(c[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,A=g.length;x<A;++x){const P=g[x],I=P.start,L=P.count;for(let W=I,Y=I+L;W<Y;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,u=new O,p=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),E=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,v),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,v),o.add(p),c.add(p),u.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const u=o.array,p=o.itemSize,h=o.normalized,f=new u.constructor(c.length*p);let m=0,_=0;for(let E=0,v=c.length;E<v;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*p;for(let d=0;d<p;d++)f[_++]=u[m++]}return new Fn(f,p,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let p=0,h=u.length;p<h;p++){const f=u[p],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let f=0,m=h.length;f<m;f++)p.push(h[f].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KM=0;class $r extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Ps,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=kd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==kd&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new O,Su=new O,Uo=new O,qi=new O,Mu=new O,ko=new O,Eu=new O;class Vh{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Su.copy(e).add(n).multiplyScalar(.5),Uo.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(Su);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Uo),o=qi.dot(this.direction),c=-qi.dot(Uo),u=qi.lengthSq(),p=Math.abs(1-a*a);let h,f,m,_;if(p>0)if(h=a*c-o,f=a*o-c,_=s*p,h>=0)if(f>=-_)if(f<=_){const E=1/p;h*=E,f*=E,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Su).addScaledVector(Uo,f),m}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){Mu.subVectors(n,e),ko.subVectors(i,e),Eu.crossVectors(Mu,ko);let a=this.direction.dot(Eu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const c=o*this.direction.dot(ko.crossVectors(qi,ko));if(c<0)return null;const u=o*this.direction.dot(Mu.cross(qi));if(u<0||c+u>a)return null;const p=-o*qi.dot(Eu);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lr extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fm=new pt,Sr=new Vh,Fo=new ro,Om=new O,Oo=new O,Bo=new O,zo=new O,wu=new O,Vo=new O,Bm=new O,Go=new O;class Ht extends tn{constructor(e=new qt,n=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const p=o[c],h=s[c];p!==0&&(wu.fromBufferAttribute(h,e),a?Vo.addScaledVector(wu,p):Vo.addScaledVector(wu.sub(n),p))}n.add(Vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Fo.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Fo,Om)===null||Sr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const v=f[_],d=a[v.materialIndex],g=Math.max(v.start,m.start),S=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let y=g,b=S;y<b;y+=3){const w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);r=Ho(this,d,e,i,u,p,h,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let v=_,d=E;v<d;v+=3){const g=o.getX(v),S=o.getX(v+1),y=o.getX(v+2);r=Ho(this,a,e,i,u,p,h,g,S,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const v=f[_],d=a[v.materialIndex],g=Math.max(v.start,m.start),S=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let y=g,b=S;y<b;y+=3){const w=y,C=y+1,x=y+2;r=Ho(this,d,e,i,u,p,h,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let v=_,d=E;v<d;v+=3){const g=v,S=v+1,y=v+2;r=Ho(this,a,e,i,u,p,h,g,S,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function ZM(t,e,n,i,r,s,a,o){let c;if(e.side===xn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===hr,o),c===null)return null;Go.copy(o),Go.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Go);return u<n.near||u>n.far?null:{distance:u,point:Go.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Oo),t.getVertexPosition(c,Bo),t.getVertexPosition(u,zo);const p=ZM(t,e,n,i,Oo,Bo,zo,Bm);if(p){const h=new O;Dn.getBarycoord(Bm,Oo,Bo,zo,h),r&&(p.uv=Dn.getInterpolatedAttribute(r,o,c,u,h,new Ge)),s&&(p.uv1=Dn.getInterpolatedAttribute(s,o,c,u,h,new Ge)),a&&(p.normal=Dn.getInterpolatedAttribute(a,o,c,u,h,new O),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new O,materialIndex:0};Dn.getNormal(Oo,Bo,zo,f.normal),p.face=f,p.barycoord=h}return p}class JM extends on{constructor(e=null,n=1,i=1,r,s,a,o,c,u=jt,p=jt,h,f){super(null,a,o,c,u,p,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new O,QM=new O,e1=new ke;class Tr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(QM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||e1.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new ro,t1=new Ge(.5,.5),jo=new O;class Gh{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,a=new Tr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],p=s[4],h=s[5],f=s[6],m=s[7],_=s[8],E=s[9],v=s[10],d=s[11],g=s[12],S=s[13],y=s[14],b=s[15];if(r[0].setComponents(u-a,m-p,d-_,b-g).normalize(),r[1].setComponents(u+a,m+p,d+_,b+g).normalize(),r[2].setComponents(u+o,m+h,d+E,b+S).normalize(),r[3].setComponents(u-o,m-h,d-E,b-S).normalize(),i)r[4].setComponents(c,f,v,y).normalize(),r[5].setComponents(u-c,m-f,d-v,b-y).normalize();else if(r[4].setComponents(u-c,m-f,d-v,b-y).normalize(),n===ui)r[5].setComponents(u+c,m+f,d+v,b+y).normalize();else if(n===Ya)r[5].setComponents(c,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const n=t1.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(jo.x=r.normal.x>0?e.max.x:e.min.x,jo.y=r.normal.y>0?e.max.y:e.min.y,jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new O,Ql=new O,zm=new pt,ua=new Vh,Wo=new ro,bu=new O,Vm=new O;class n1 extends tn{constructor(e=new qt,n=new gx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Jl.fromBufferAttribute(n,r-1),Ql.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Jl.distanceTo(Ql);e.setAttribute("lineDistance",new mt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;zm.copy(r).invert(),ua.copy(e.ray).applyMatrix4(zm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,p=i.index,f=i.attributes.position;if(p!==null){const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let E=m,v=_-1;E<v;E+=u){const d=p.getX(E),g=p.getX(E+1),S=Xo(this,e,ua,c,d,g,E);S&&n.push(S)}if(this.isLineLoop){const E=p.getX(_-1),v=p.getX(m),d=Xo(this,e,ua,c,E,v,_-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let E=m,v=_-1;E<v;E+=u){const d=Xo(this,e,ua,c,E,E+1,E);d&&n.push(d)}if(this.isLineLoop){const E=Xo(this,e,ua,c,_-1,m,_-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Jl.fromBufferAttribute(o,r),Ql.fromBufferAttribute(o,s),n.distanceSqToSegment(Jl,Ql,bu,Vm)>i)return;bu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(bu);if(!(u<e.near||u>e.far))return{distance:u,point:Vm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Gm=new O,Hm=new O;class i1 extends n1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Gm.fromBufferAttribute(n,r),Hm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gm.distanceTo(Hm);e.setAttribute("lineDistance",new mt(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vx extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new pt,Tf=new Vh,qo=new ro,$o=new O;class r1 extends tn{constructor(e=new qt,n=new vx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;jm.copy(r).invert(),Tf.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,E=m;_<E;_++){const v=u.getX(_);$o.fromBufferAttribute(h,v),Wm($o,v,c,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,E=m;_<E;_++)$o.fromBufferAttribute(h,_),Wm($o,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wm(t,e,n,i,r,s,a){const o=Tf.distanceSqToPoint(t);if(o<n){const c=new O;Tf.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xx extends on{constructor(e=[],n=Gr,i,r,s,a,o,c,u,p){super(e,n,i,r,s,a,o,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends on{constructor(e,n,i=mi,r,s,a,o=jt,c=jt,u,p=ki,h=1){if(p!==ki&&p!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,c,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class s1 extends js{constructor(e,n=mi,i=Gr,r,s,a=jt,o=jt,c,u=ki){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _x extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends qt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],p=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(h,2));function _(E,v,d,g,S,y,b,w,C,x,A){const P=y/C,I=b/x,L=y/2,W=b/2,Y=w/2,z=C+1,$=x+1;let q=0,N=0;const U=new O;for(let B=0;B<$;B++){const ee=B*I-W;for(let ae=0;ae<z;ae++){const ze=ae*P-L;U[E]=ze*g,U[v]=ee*S,U[d]=Y,u.push(U.x,U.y,U.z),U[E]=0,U[v]=0,U[d]=w>0?1:-1,p.push(U.x,U.y,U.z),h.push(ae/C),h.push(1-B/x),q+=1}}for(let B=0;B<x;B++)for(let ee=0;ee<C;ee++){const ae=f+ee+z*B,ze=f+ee+z*(B+1),$e=f+(ee+1)+z*(B+1),Te=f+(ee+1)+z*B;c.push(ae,ze,Te),c.push(ze,$e,Te),N+=6}o.addGroup(m,N,A),m+=N,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hh extends qt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],f=[],m=[];let _=0;const E=[],v=i/2;let d=0;g(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(p),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(m,2));function g(){const y=new O,b=new O;let w=0;const C=(n-e)/i;for(let x=0;x<=s;x++){const A=[],P=x/s,I=P*(n-e)+e;for(let L=0;L<=r;L++){const W=L/r,Y=W*c+o,z=Math.sin(Y),$=Math.cos(Y);b.x=I*z,b.y=-P*i+v,b.z=I*$,h.push(b.x,b.y,b.z),y.set(z,C,$).normalize(),f.push(y.x,y.y,y.z),m.push(W,1-P),A.push(_++)}E.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const P=E[A][x],I=E[A+1][x],L=E[A+1][x+1],W=E[A][x+1];(e>0||A!==0)&&(p.push(P,I,W),w+=3),(n>0||A!==s-1)&&(p.push(I,L,W),w+=3)}u.addGroup(d,w,0),d+=w}function S(y){const b=_,w=new Ge,C=new O;let x=0;const A=y===!0?e:n,P=y===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,v*P,0),f.push(0,P,0),m.push(.5,.5),_++;const I=_;for(let L=0;L<=r;L++){const Y=L/r*c+o,z=Math.cos(Y),$=Math.sin(Y);C.x=A*$,C.y=v*P,C.z=A*z,h.push(C.x,C.y,C.z),f.push(0,P,0),w.x=z*.5+.5,w.y=$*.5*P+.5,m.push(w.x,w.y),_++}for(let L=0;L<r;L++){const W=b+L,Y=I+L;y===!0?p.push(Y,Y+1,W):p.push(Y+1,Y,W),x+=3}u.addGroup(d,x,y===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class so extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),p(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const S=new O,y=new O,b=new O;for(let w=0;w<n.length;w+=3)m(n[w+0],S),m(n[w+1],y),m(n[w+2],b),c(S,y,b,g)}function c(g,S,y,b){const w=b+1,C=[];for(let x=0;x<=w;x++){C[x]=[];const A=g.clone().lerp(y,x/w),P=S.clone().lerp(y,x/w),I=w-x;for(let L=0;L<=I;L++)L===0&&x===w?C[x][L]=A:C[x][L]=A.clone().lerp(P,L/I)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){const P=Math.floor(A/2);A%2===0?(f(C[x][P+1]),f(C[x+1][P]),f(C[x][P])):(f(C[x][P+1]),f(C[x+1][P+1]),f(C[x+1][P]))}}function u(g){const S=new O;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(g),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function p(){const g=new O;for(let S=0;S<s.length;S+=3){g.x=s[S+0],g.y=s[S+1],g.z=s[S+2];const y=v(g)/2/Math.PI+.5,b=d(g)/Math.PI+.5;a.push(y,1-b)}_(),h()}function h(){for(let g=0;g<a.length;g+=6){const S=a[g+0],y=a[g+2],b=a[g+4],w=Math.max(S,y,b),C=Math.min(S,y,b);w>.9&&C<.1&&(S<.2&&(a[g+0]+=1),y<.2&&(a[g+2]+=1),b<.2&&(a[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function m(g,S){const y=g*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function _(){const g=new O,S=new O,y=new O,b=new O,w=new Ge,C=new Ge,x=new Ge;for(let A=0,P=0;A<s.length;A+=9,P+=6){g.set(s[A+0],s[A+1],s[A+2]),S.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),w.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(g).add(S).add(y).divideScalar(3);const I=v(b);E(w,P+0,g,I),E(C,P+2,S,I),E(x,P+4,y,I)}}function E(g,S,y,b){b<0&&g.x===1&&(a[S]=g.x-1),y.x===0&&y.z===0&&(a[S]=b/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.vertices,e.indices,e.radius,e.detail)}}const Yo=new O,Ko=new O,Au=new O,Zo=new Dn;class a1 extends qt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(_l*n),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,u=[0,0,0],p=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<c;_+=3){a?(u[0]=a.getX(_),u[1]=a.getX(_+1),u[2]=a.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:E,b:v,c:d}=Zo;if(E.fromBufferAttribute(o,u[0]),v.fromBufferAttribute(o,u[1]),d.fromBufferAttribute(o,u[2]),Zo.getNormal(Au),h[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,h[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const S=(g+1)%3,y=h[g],b=h[S],w=Zo[p[g]],C=Zo[p[S]],x=`${y}_${b}`,A=`${b}_${y}`;A in f&&f[A]?(Au.dot(f[A].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(C.x,C.y,C.z)),f[A]=null):x in f||(f[x]={index0:u[g],index1:u[S],normal:Au.clone()})}}for(const _ in f)if(f[_]){const{index0:E,index1:v}=f[_];Yo.fromBufferAttribute(o,E),Ko.fromBufferAttribute(o,v),m.push(Yo.x,Yo.y,Yo.z),m.push(Ko.x,Ko.y,Ko.z)}this.setAttribute("position",new mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ka extends so{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class jh extends so{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new jh(e.radius,e.detail)}}class Ec extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,p=c+1,h=e/o,f=n/c,m=[],_=[],E=[],v=[];for(let d=0;d<p;d++){const g=d*f-a;for(let S=0;S<u;S++){const y=S*h-s;_.push(y,-g,0),E.push(0,0,1),v.push(S/o),v.push(1-d/c)}}for(let d=0;d<c;d++)for(let g=0;g<o;g++){const S=g+u*d,y=g+u*(d+1),b=g+1+u*(d+1),w=g+1+u*d;m.push(S,y,w),m.push(y,b,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(E,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const p=[],h=new O,f=new O,m=[],_=[],E=[],v=[];for(let d=0;d<=i;d++){const g=[],S=d/i,y=a+S*o,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b);let C=0;d===0&&a===0?C=.5/n:d===i&&c===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){const A=x/n,P=r+A*s;h.x=-w*Math.cos(P),h.y=b,h.z=w*Math.sin(P),_.push(h.x,h.y,h.z),f.copy(h).normalize(),E.push(f.x,f.y,f.z),v.push(A+C,1-S),g.push(u++)}p.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const S=p[d][g+1],y=p[d][g],b=p[d+1][g],w=p[d+1][g+1];(d!==0||a>0)&&m.push(S,y,w),(d!==i-1||c<Math.PI)&&m.push(y,b,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(E,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wh extends so{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wh(e.radius,e.detail)}}class Xh extends qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],p=[],h=[],f=new O,m=new O,_=new O;for(let E=0;E<=i;E++){const v=a+E/i*o;for(let d=0;d<=r;d++){const g=d/r*s;m.x=(e+n*Math.cos(v))*Math.cos(g),m.y=(e+n*Math.cos(v))*Math.sin(g),m.z=n*Math.sin(v),u.push(m.x,m.y,m.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),_.subVectors(m,f).normalize(),p.push(_.x,_.y,_.z),h.push(d/r),h.push(E/i)}}for(let E=1;E<=i;E++)for(let v=1;v<=r;v++){const d=(r+1)*E+v-1,g=(r+1)*(E-1)+v-1,S=(r+1)*(E-1)+v,y=(r+1)*E+v;c.push(d,g,y),c.push(g,S,y)}this.setIndex(c),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Xm(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Xm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function Xm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function o1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const l1={clone:Ws,merge:rn};var c1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=o1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class d1 extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cu extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ef,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f1 extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h1 extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sx extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ru=new pt,qm=new O,$m=new O;class p1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ya||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new O,Qo=new Ys,ii=new O;class Mx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Qo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Qo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Jo,Qo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Qo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new O,Ym=new Ge,Km=new Ge;class hn extends Mx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wf*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,Ym,Km),n.subVectors(Km,Ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_l*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class m1 extends p1{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Zm extends Sx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new m1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ex extends Mx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class g1 extends Sx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const cs=-90,us=1;class v1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new hn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new hn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new hn(cs,us,e,n);o.layers=this.layers,this.add(o);const c=new hn(cs,us,e,n);c.layers=this.layers,this.add(c);const u=new hn(cs,us,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class x1 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function _1(){this._document.hidden===!1&&this.reset()}const Zh=class Zh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Zh.prototype.isMatrix2=!0;let Jm=Zh;function Qm(t,e,n,i){const r=y1(i);switch(n){case ax:return t*e;case lx:return t*e/r.components*r.byteLength;case Uh:return t*e/r.components*r.byteLength;case Hr:return t*e*2/r.components*r.byteLength;case kh:return t*e*2/r.components*r.byteLength;case ox:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Fh:return t*e*4/r.components*r.byteLength;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:case Yd:return Math.max(t,16)*Math.max(e,8)/4;case Xd:case $d:return Math.max(t,8)*Math.max(e,8)/2;case Kd:case Zd:case Qd:case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jd:case ql:case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vf:case xf:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $l:case Mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y1(t){switch(t){case En:case nx:return{byteLength:1,components:1};case qa:case ix:case Ui:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case mi:case Ih:case ci:return{byteLength:4,components:1};case rx:case sx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S1(t){const e=new WeakMap;function n(o,c){const u=o.array,p=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,p),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,u){const p=c.array,h=c.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,p);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],E=h[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++f,h[f]=E)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const E=h[m];t.bufferSubData(u,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:M1,alphahash_pars_fragment:E1,alphamap_fragment:w1,alphamap_pars_fragment:T1,alphatest_fragment:b1,alphatest_pars_fragment:A1,aomap_fragment:C1,aomap_pars_fragment:R1,batching_pars_vertex:N1,batching_vertex:P1,begin_vertex:I1,beginnormal_vertex:L1,bsdfs:D1,iridescence_fragment:U1,bumpmap_pars_fragment:k1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:z1,color_fragment:V1,color_pars_fragment:G1,color_pars_vertex:H1,color_vertex:j1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:q1,displacementmap_pars_vertex:$1,displacementmap_vertex:Y1,emissivemap_fragment:K1,emissivemap_pars_fragment:Z1,colorspace_fragment:J1,colorspace_pars_fragment:Q1,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:rE,fog_vertex:sE,fog_pars_vertex:aE,fog_fragment:oE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:xE,lights_physical_fragment:_E,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:EE,lightprobes_pars_fragment:wE,logdepthbuf_fragment:TE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:CE,map_fragment:RE,map_pars_fragment:NE,map_particle_fragment:PE,map_particle_pars_fragment:IE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:DE,morphinstance_vertex:UE,morphcolor_vertex:kE,morphnormal_vertex:FE,morphtarget_pars_vertex:OE,morphtarget_vertex:BE,normal_fragment_begin:zE,normal_fragment_maps:VE,normal_pars_fragment:GE,normal_pars_vertex:HE,normal_vertex:jE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:YE,opaque_fragment:KE,packing:ZE,premultiplied_alpha_fragment:JE,project_vertex:QE,dithering_fragment:ew,dithering_pars_fragment:tw,roughnessmap_fragment:nw,roughnessmap_pars_fragment:iw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:sw,shadowmap_vertex:aw,shadowmask_pars_fragment:ow,skinbase_vertex:lw,skinning_pars_vertex:cw,skinning_vertex:uw,skinnormal_vertex:dw,specularmap_fragment:fw,specularmap_pars_fragment:hw,tonemapping_fragment:pw,tonemapping_pars_fragment:mw,transmission_fragment:gw,transmission_pars_fragment:vw,uv_pars_fragment:xw,uv_pars_vertex:_w,uv_vertex:yw,worldpos_vertex:Sw,background_vert:Mw,background_frag:Ew,backgroundCube_vert:ww,backgroundCube_frag:Tw,cube_vert:bw,cube_frag:Aw,depth_vert:Cw,depth_frag:Rw,distance_vert:Nw,distance_frag:Pw,equirect_vert:Iw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:kw,meshbasic_frag:Fw,meshlambert_vert:Ow,meshlambert_frag:Bw,meshmatcap_vert:zw,meshmatcap_frag:Vw,meshnormal_vert:Gw,meshnormal_frag:Hw,meshphong_vert:jw,meshphong_frag:Ww,meshphysical_vert:Xw,meshphysical_frag:qw,meshtoon_vert:$w,meshtoon_frag:Yw,points_vert:Kw,points_frag:Zw,shadow_vert:Jw,shadow_frag:Qw,sprite_vert:eT,sprite_frag:tT},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ai={basic:{uniforms:rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:rn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:rn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:rn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:rn([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:rn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:rn([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:rn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:rn([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:rn([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:rn([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const el={r:0,b:0,g:0},nT=new pt,bx=new ke;bx.set(-1,0,0,0,1,0,0,0,1);function iT(t,e,n,i,r,s){const a=new He(0);let o=r===!0?0:1,c,u,p=null,h=0,f=null;function m(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const y=g.backgroundBlurriness>0;S=e.get(S,y)}return S}function _(g){let S=!1;const y=m(g);y===null?v(a,o):y&&y.isColor&&(v(y,1),S=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,S){const y=m(S);y&&(y.isCubeTexture||y.mapping===Mc)?(u===void 0&&(u=new Ht(new jr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ws(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nT.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(bx),u.material.toneMapped=Xe.getTransfer(y.colorSpace)!==nt,(p!==y||h!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,p=y,h=y.version,f=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new Ec(2,2),new gi({name:"BackgroundMaterial",uniforms:Ws(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||h!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=y,h=y.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,S){g.getRGB(el,yx(t)),n.buffers.color.setClear(el.r,el.g,el.b,S,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,v(a,o)},render:_,addToRenderList:E,dispose:d}}function rT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,L,W,Y,z){let $=!1;const q=h(I,Y,W,L);s!==q&&(s=q,u(s.object)),$=m(I,Y,W,z),$&&_(I,Y,W,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(I,L,W,Y),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function p(I){return t.deleteVertexArray(I)}function h(I,L,W,Y){const z=Y.wireframe===!0;let $=i[L.id];$===void 0&&($={},i[L.id]=$);const q=I.isInstancedMesh===!0?I.id:0;let N=$[q];N===void 0&&(N={},$[q]=N);let U=N[W.id];U===void 0&&(U={},N[W.id]=U);let B=U[z];return B===void 0&&(B=f(c()),U[z]=B),B}function f(I){const L=[],W=[],Y=[];for(let z=0;z<n;z++)L[z]=0,W[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,L,W,Y){const z=s.attributes,$=L.attributes;let q=0;const N=W.getAttributes();for(const U in N)if(N[U].location>=0){const ee=z[U];let ae=$[U];if(ae===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;q++}return s.attributesNum!==q||s.index!==Y}function _(I,L,W,Y){const z={},$=L.attributes;let q=0;const N=W.getAttributes();for(const U in N)if(N[U].location>=0){let ee=$[U];ee===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),z[U]=ae,q++}s.attributes=z,s.attributesNum=q,s.index=Y}function E(){const I=s.newAttributes;for(let L=0,W=I.length;L<W;L++)I[L]=0}function v(I){d(I,0)}function d(I,L){const W=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;W[I]=1,Y[I]===0&&(t.enableVertexAttribArray(I),Y[I]=1),z[I]!==L&&(t.vertexAttribDivisor(I,L),z[I]=L)}function g(){const I=s.newAttributes,L=s.enabledAttributes;for(let W=0,Y=L.length;W<Y;W++)L[W]!==I[W]&&(t.disableVertexAttribArray(W),L[W]=0)}function S(I,L,W,Y,z,$,q){q===!0?t.vertexAttribIPointer(I,L,W,z,$):t.vertexAttribPointer(I,L,W,Y,z,$)}function y(I,L,W,Y){E();const z=Y.attributes,$=W.getAttributes(),q=L.defaultAttributeValues;for(const N in $){const U=$[N];if(U.location>=0){let B=z[N];if(B===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(B=I.instanceColor)),B!==void 0){const ee=B.normalized,ae=B.itemSize,ze=e.get(B);if(ze===void 0)continue;const $e=ze.buffer,Te=ze.type,K=ze.bytesPerElement,re=Te===t.INT||Te===t.UNSIGNED_INT||B.gpuType===Ih;if(B.isInterleavedBufferAttribute){const ie=B.data,De=ie.stride,Ue=B.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<U.locationSize;Pe++)d(U.location+Pe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<U.locationSize;Pe++)v(U.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Pe=0;Pe<U.locationSize;Pe++)S(U.location+Pe,ae/U.locationSize,Te,ee,De*K,(Ue+ae/U.locationSize*Pe)*K,re)}else{if(B.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)d(U.location+ie,B.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ie=0;ie<U.locationSize;ie++)v(U.location+ie);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ie=0;ie<U.locationSize;ie++)S(U.location+ie,ae/U.locationSize,Te,ee,ae*K,ae/U.locationSize*ie*K,re)}}else if(q!==void 0){const ee=q[N];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(U.location,ee);break;case 3:t.vertexAttrib3fv(U.location,ee);break;case 4:t.vertexAttrib4fv(U.location,ee);break;default:t.vertexAttrib1fv(U.location,ee)}}}}g()}function b(){A();for(const I in i){const L=i[I];for(const W in L){const Y=L[W];for(const z in Y){const $=Y[z];for(const q in $)p($[q].object),delete $[q];delete Y[z]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const L=i[I.id];for(const W in L){const Y=L[W];for(const z in Y){const $=Y[z];for(const q in $)p($[q].object),delete $[q];delete Y[z]}}delete i[I.id]}function C(I){for(const L in i){const W=i[L];for(const Y in W){const z=W[Y];if(z[I.id]===void 0)continue;const $=z[I.id];for(const q in $)p($[q].object),delete $[q];delete z[I.id]}}}function x(I){for(const L in i){const W=i[L],Y=I.isInstancedMesh===!0?I.id:0,z=W[Y];if(z!==void 0){for(const $ in z){const q=z[$];for(const N in q)p(q[N].object),delete q[N];delete z[$]}delete W[Y],Object.keys(W).length===0&&delete i[L]}}}function A(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:v,disableUnusedAttributes:g}}function sT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let f=0;for(let m=0;m<p;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function aT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==En&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!x)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=c(u);p!==u&&(Le("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:w}}function oT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Tr,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=p(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?p(null):u();else{const g=s?0:i,S=g*4;let y=d.clippingState||null;c.value=y,y=p(_,f,S,m);for(let b=0;b!==S;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,m,_){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=c.value,_!==!0||v===null){const d=m+E*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let S=0,y=m;S!==E;++S,y+=4)a.copy(h[S]).applyMatrix4(g,o),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const nr=4,eg=[.125,.215,.35,.446,.526,.582],Ar=20,lT=256,da=new Ex,tg=new He;let Nu=null,Pu=0,Iu=0,Lu=!1;const cT=new O;class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=cT}=s;Nu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Pu,Iu),this._renderer.xr.enabled=Lu,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ui,format:Yn,colorSpace:Yl,depthBuffer:!1},r=ig(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(s)),this._blurMaterial=fT(s,e,n),this._ggxMaterial=dT(s,e,n)}return r}_compileMaterial(e){const n=new Ht(new qt,e);this._renderer.compile(n,da)}_sceneToCubeUV(e,n,i,r,s){const c=new hn(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(tg),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new jr,new Lr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let d=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,d=!0):(v.color.copy(tg),d=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,u[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[S],s.y,s.z)):y===1?(c.up.set(0,0,u[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[S],s.z)):(c.up.set(0,u[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[S]));const b=this._cubeSize;ds(r,y*b,S>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(E,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gr||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-p*p),f=0+u*1.25,m=h*f,{_lodMax:_}=this,E=this._sizeLods[i],v=3*E*(i>_-nr?i-_+nr:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-n,ds(s,v,d,3*E,2*E),r.setRenderTarget(s),r.render(o,da),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,ds(e,v,d,3*E,2*E),r.setRenderTarget(e),r.render(o,da)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const p=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ar-1),E=s/_,v=isFinite(s)?1+Math.floor(p*E):Ar;v>Ar&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ar}`);const d=[];let g=0;for(let C=0;C<Ar;++C){const x=C/E,A=Math.exp(-x*x/2);d.push(A),C===0?g+=A:C<v&&(g+=2*A)}for(let C=0;C<d.length;C++)d[C]=d[C]/g;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const y=this._sizeLods[r],b=3*y*(r>S-nr?r-S+nr:0),w=4*(this._cubeSize-y);ds(n,b,w,3*y,2*y),c.setRenderTarget(n),c.render(h,da)}}function uT(t){const e=[],n=[],i=[];let r=t;const s=t-nr+1+eg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-nr?c=eg[a-t+nr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),p=-u,h=1+u,f=[p,p,h,p,h,h,p,p,h,h,p,h],m=6,_=6,E=3,v=2,d=1,g=new Float32Array(E*_*m),S=new Float32Array(v*_*m),y=new Float32Array(d*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,x=w>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];g.set(A,E*_*w),S.set(f,v*_*w);const P=[w,w,w,w,w,w];y.set(P,d*_*w)}const b=new qt;b.setAttribute("position",new Fn(g,E)),b.setAttribute("uv",new Fn(S,v)),b.setAttribute("faceIndex",new Fn(y,d)),i.push(new Ht(b,null)),r>nr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ig(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dT(t,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function fT(t,e,n){const i=new Float32Array(Ar),r=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function rg(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function sg(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ax extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jr(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ri});s.uniforms.tEquirect.value=n;const a=new Ht(r,s),o=n.minFilter;return n.minFilter===Pr&&(n.minFilter=en),new v1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function hT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===eu||m===tu)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const E=new Ax(_.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",u),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===eu||m===tu,E=m===Gr||m===Hs;if(_||E){let v=n.get(f);const d=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new ng(t)),v=_?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const g=f.image;return _&&g&&g.height>0||E&&g&&c(g)?(i===null&&(i=new ng(t)),v=_?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",p),v.texture):null}}}return f}function o(f,m){return m===eu?f.mapping=Gr:m===tu&&(f.mapping=Hs),f}function c(f){let m=0;const _=6;for(let E=0;E<_;E++)f[E]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(f){const m=f.target;m.removeEventListener("dispose",p);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Is("WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(h){const f=[],m=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const g=m.array;E=m.version;for(let S=0,y=g.length;S<y;S+=3){const b=g[S+0],w=g[S+1],C=g[S+2];f.push(b,w,w,C,C,b)}}else{const g=_.array;E=_.version;for(let S=0,y=g.length/3-1;S<y;S+=3){const b=S+0,w=S+1,C=S+2;f.push(b,w,w,C,C,b)}}const v=new(_.count>=65535?mx:px)(f,1);v.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,v)}function p(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:p}}function gT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function u(h,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,h*a,m),n.update(f,i,m))}function p(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let E=0;for(let v=0;v<m;v++)E+=f[v];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e,n){const i=new WeakMap,r=new vt;function s(a,o,c){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),E===!0&&(S=3);let y=o.attributes.position.count*S,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*b*4*h),C=new ux(w,y,b,h);C.type=ci,C.needsUpdate=!0;const x=S*4;for(let P=0;P<h;P++){const I=v[P],L=d[P],W=g[P],Y=y*b*4*P;for(let z=0;z<I.count;z++){const $=z*x;m===!0&&(r.fromBufferAttribute(I,z),w[Y+$+0]=r.x,w[Y+$+1]=r.y,w[Y+$+2]=r.z,w[Y+$+3]=0),_===!0&&(r.fromBufferAttribute(L,z),w[Y+$+4]=r.x,w[Y+$+5]=r.y,w[Y+$+6]=r.z,w[Y+$+7]=0),E===!0&&(r.fromBufferAttribute(W,z),w[Y+$+8]=r.x,w[Y+$+9]=r.y,w[Y+$+10]=r.z,w[Y+$+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ge(y,b)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let E=0;E<u.length;E++)m+=u[E];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function _T(t,e,n,i,r){let s=new WeakMap;function a(u){const p=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==p&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,p))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return f}function o(){s=new WeakMap}function c(u){const p=u.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const yT={[$v]:"LINEAR_TONE_MAPPING",[Yv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Zv]:"ACES_FILMIC_TONE_MAPPING",[Qv]:"AGX_TONE_MAPPING",[ex]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function ST(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new js(e,n):void 0}),o=new pi(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),c=new qt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new d1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ht(c,u),h=new Ex(-1,1,1,-1,0,1);let f=null,m=null,_=!1,E,v=null,d=[],g=!1;this.setSize=function(S,y){a.setSize(S,y),o.setSize(S,y);for(let b=0;b<d.length;b++){const w=d[b];w.setSize&&w.setSize(S,y)}},this.setEffects=function(S){d=S,g=d.length>0&&d[0].isRenderPass===!0;const y=a.width,b=a.height;for(let w=0;w<d.length;w++){const C=d[w];C.setSize&&C.setSize(y,b)}},this.begin=function(S,y){if(_||S.toneMapping===hi&&d.length===0)return!1;if(v=y,y!==null){const b=y.width,w=y.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return g===!1&&S.setRenderTarget(a),E=S.toneMapping,S.toneMapping=hi,!0},this.hasRenderPass=function(){return g},this.end=function(S,y){S.toneMapping=E,_=!0;let b=a,w=o;for(let C=0;C<d.length;C++){const x=d[C];if(x.enabled!==!1&&(x.render(S,w,b,y),x.needsSwap!==!1)){const A=b;b=w,w=A}}if(f!==S.outputColorSpace||m!==S.toneMapping){f=S.outputColorSpace,m=S.toneMapping,u.defines={},Xe.getTransfer(f)===nt&&(u.defines.SRGB_TRANSFER="");const C=yT[m];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(v),S.render(p,h),v=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),u.dispose()}}const Cx=new on,bf=new js(1,1),Rx=new ux,Nx=new BM,Px=new xx,ag=[],og=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ag[r];if(s===void 0&&(s=new Float32Array(r),ag[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=og[e];n===void 0&&(n=new Int32Array(e),og[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;ug.set(i),t.uniformMatrix2fv(this.addr,!1,ug),kt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;cg.set(i),t.uniformMatrix3fv(this.addr,!1,cg),kt(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,i))return;lg.set(i),t.uniformMatrix4fv(this.addr,!1,lg),kt(n,i)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bf.compareFunction=n.isReversedDepthBuffer()?Bh:Oh,s=bf):s=Cx,n.setTexture2D(e||s,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nx,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Px,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function VT(t){switch(t){case 5126:return MT;case 35664:return ET;case 35665:return wT;case 35666:return TT;case 35674:return bT;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return NT;case 35668:case 35672:return PT;case 35669:case 35673:return IT;case 5125:return LT;case 36294:return DT;case 36295:return UT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}function GT(t,e){t.uniform1fv(this.addr,e)}function HT(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function jT(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function XT(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qT(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function JT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function eb(t,e){t.uniform2uiv(this.addr,e)}function tb(t,e){t.uniform3uiv(this.addr,e)}function nb(t,e){t.uniform4uiv(this.addr,e)}function ib(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=bf:a=Cx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function rb(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Nx,s[a])}function sb(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Px,s[a])}function ab(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Rx,s[a])}function ob(t){switch(t){case 5126:return GT;case 35664:return HT;case 35665:return jT;case 35666:return WT;case 35674:return XT;case 35675:return qT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return JT;case 5125:return QT;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ab}}class lb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VT(n.type)}}class cb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ob(n.type)}}class ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function dg(t,e){t.seq.push(e),t.map[e.id]=e}function db(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),a=Du.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){dg(n,u===void 0?new lb(o,t,e):new cb(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new ub(o),dg(n,h)),n=h}}}class yl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);db(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fb=37297;let hb=0;function pb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const hg=new ke;function mb(t){Xe._getMatrix(hg,Xe.workingColorSpace,t);const e=`mat3( ${hg.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Kl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function pg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+pb(t.getShaderSource(e),o)}else return s}function gb(t,e){const n=mb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vb={[$v]:"Linear",[Yv]:"Reinhard",[Kv]:"Cineon",[Zv]:"ACESFilmic",[Qv]:"AgX",[ex]:"Neutral",[Jv]:"Custom"};function xb(t,e){const n=vb[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tl=new O;function _b(){Xe.getLuminanceCoefficients(tl);const t=tl.x.toFixed(4),e=tl.y.toFixed(4),n=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Sb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Mb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function mg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(t){return t.replace(Eb,Tb)}const wb=new Map;function Tb(t,e){let n=Be[e];if(n===void 0){const i=wb.get(e);if(i!==void 0)n=Be[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Af(n)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(bb,Ab)}function Ab(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Cb={[pl]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function Rb(t){return Cb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nb={[Gr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function Pb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Nb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ib={[Hs]:"ENVMAP_MODE_REFRACTION"};function Lb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Db={[qv]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[_M]:"ENVMAP_BLENDING_ADD"};function Ub(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Db[t.combine]||"ENVMAP_BLENDING_NONE"}function kb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Rb(n),u=Pb(n),p=Lb(n),h=Ub(n),f=kb(n),m=yb(n),_=Sb(s),E=r.createProgram();let v,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),d.length>0&&(d+=`
`)):(v=[xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),d=[xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Be.tonemapping_pars_fragment:"",n.toneMapping!==hi?xb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,gb("linearToOutputTexel",n.outputColorSpace),_b(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=Af(a),a=mg(a,n),a=gg(a,n),o=Af(o),o=mg(o,n),o=gg(o,n),a=vg(a),o=vg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=g+v+a,y=g+d+o,b=fg(r,r.VERTEX_SHADER,S),w=fg(r,r.FRAGMENT_SHADER,y);r.attachShader(E,b),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(I){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(w)||"",z=L.trim(),$=W.trim(),q=Y.trim();let N=!0,U=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,b,w);else{const B=pg(r,b,"vertex"),ee=pg(r,w,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+B+`
`+ee)}else z!==""?Le("WebGLProgram: Program Info Log:",z):($===""||q==="")&&(U=!1);U&&(I.diagnostics={runnable:N,programLog:z,vertexShader:{log:$,prefix:v},fragmentShader:{log:q,prefix:d}})}r.deleteShader(b),r.deleteShader(w),x=new yl(r,E),A=Mb(r,E)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,fb)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=w,this}let Ob=0;class Bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zb(e),n.set(e,i)),i}}class zb{constructor(e){this.id=Ob++,this.code=e,this.usedTimes=0}}function Vb(t){return t===Hr||t===ql||t===$l}function Gb(t,e,n,i,r,s){const a=new dx,o=new Bb,c=new Set,u=[],p=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,A,P,I,L,W){const Y=I.fog,z=L.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||$,q),U=N&&N.mapping===Mc?N.image.height:null,B=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=ee!==void 0?ee.length:0;let ze=0;z.morphAttributes.position!==void 0&&(ze=1),z.morphAttributes.normal!==void 0&&(ze=2),z.morphAttributes.color!==void 0&&(ze=3);let $e,Te,K,re;if(B){const Ee=ai[B];$e=Ee.vertexShader,Te=Ee.fragmentShader}else{$e=x.vertexShader,Te=x.fragmentShader;const Ee=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Ee,St),K=Ee.id,re=St.id}const ie=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,wt=!!x.map,We=!!x.matcap,st=!!N,et=!!x.aoMap,Ye=!!x.lightMap,Ct=!!x.bumpMap&&x.wireframe===!1,It=!!x.normalMap,Ft=!!x.displacementMap,Vt=!!x.emissiveMap,yt=!!x.metalnessMap,Rt=!!x.roughnessMap,k=x.anisotropy>0,un=x.clearcoat>0,tt=x.dispersion>0,R=x.iridescence>0,M=x.sheen>0,V=x.transmission>0,j=k&&!!x.anisotropyMap,Z=un&&!!x.clearcoatMap,oe=un&&!!x.clearcoatNormalMap,ce=un&&!!x.clearcoatRoughnessMap,J=R&&!!x.iridescenceMap,te=R&&!!x.iridescenceThicknessMap,ue=M&&!!x.sheenColorMap,Ae=M&&!!x.sheenRoughnessMap,he=!!x.specularMap,de=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Ie=V&&!!x.transmissionMap,Fe=V&&!!x.thicknessMap,D=!!x.gradientMap,le=!!x.alphaMap,Q=x.alphaTest>0,fe=!!x.alphaHash,ve=!!x.extensions;let ne=hi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ne=t.toneMapping);const be={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:Te,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:We,envMap:st,envMapMode:st&&N.mapping,envMapCubeUVHeight:U,aoMap:et,lightMap:Ye,bumpMap:Ct,normalMap:It,displacementMap:Ft,emissiveMap:Vt,normalMapObjectSpace:It&&x.normalMapType===MM,normalMapTangentSpace:It&&x.normalMapType===Ef,packedNormalMap:It&&x.normalMapType===Ef&&Vb(x.normalMap.format),metalnessMap:yt,roughnessMap:Rt,anisotropy:k,anisotropyMap:j,clearcoat:un,clearcoatMap:Z,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,dispersion:tt,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:te,sheen:M,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:he,specularColorMap:de,specularIntensityMap:Ne,transmission:V,transmissionMap:Ie,thicknessMap:Fe,gradientMap:D,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:fe,combine:x.combine,mapUv:wt&&_(x.map.channel),aoMapUv:et&&_(x.aoMap.channel),lightMapUv:Ye&&_(x.lightMap.channel),bumpMapUv:Ct&&_(x.bumpMap.channel),normalMapUv:It&&_(x.normalMap.channel),displacementMapUv:Ft&&_(x.displacementMap.channel),emissiveMapUv:Vt&&_(x.emissiveMap.channel),metalnessMapUv:yt&&_(x.metalnessMap.channel),roughnessMapUv:Rt&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:Z&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(x.sheenRoughnessMap.channel),specularMapUv:he&&_(x.specularMap.channel),specularColorMapUv:de&&_(x.specularColorMap.channel),specularIntensityMapUv:Ne&&_(x.specularIntensityMap.channel),transmissionMapUv:Ie&&_(x.transmissionMap.channel),thicknessMapUv:Fe&&_(x.thicknessMap.channel),alphaMapUv:le&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(It||k),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(wt||le),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function v(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(A,x),g(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function g(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const A=m[x.type];let P;if(A){const I=ai[A];P=l1.clone(I.uniforms)}else P=x.uniforms;return P}function y(x,A){let P=p.get(A);return P!==void 0?++P.usedTimes:(P=new Fb(t,A,x,r),u.push(P),p.set(A,P)),P}function b(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),p.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:C}}function Hb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,E,v,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:v,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=_,g.materialVariant=a(f),g.groupOrder=E,g.renderOrder=f.renderOrder,g.z=v,g.group=d),e++,g}function c(f,m,_,E,v,d){const g=o(f,m,_,E,v,d);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function u(f,m,_,E,v,d){const g=o(f,m,_,E,v,d);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function p(f,m,_){n.length>1&&n.sort(f||jb),i.length>1&&i.sort(m||_g),r.length>1&&r.sort(m||_g),_&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:h,sort:p}}function Wb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new yg,t.set(i,[a])):r>=s.length?(a=new yg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Xb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new He};break;case"SpotLight":n={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function qb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $b=0;function Yb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Kb(t){const e=new Xb,n=qb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new pt,a=new pt;function o(u){let p=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,E=0,v=0,d=0,g=0,S=0,y=0,b=0,w=0,C=0;u.sort(Yb);for(let A=0,P=u.length;A<P;A++){const I=u[A],L=I.color,W=I.intensity,Y=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hr?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)p+=L.r*W,h+=L.g*W,f+=L.b*W;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],W);C++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,N=n.get(I);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=I.shadow.matrix,g++}i.directional[m]=$,m++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(L).multiplyScalar(W),$.distance=Y,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[E]=$;const q=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,q.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[E]=q.matrix,I.castShadow){const N=n.get(I);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[E]=N,i.spotShadowMap[E]=z,y++}E++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(L).multiplyScalar(W),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=$,v++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const q=I.shadow,N=n.get(I);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=I.shadow.matrix,S++}i.point[_]=$,_++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(W),$.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[d]=$,d++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==v||x.hemiLength!==d||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==b||x.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=v,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=m,x.pointLength=_,x.spotLength=E,x.rectAreaLength=v,x.hemiLength=d,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=b,x.numLightProbes=C,i.version=$b++)}function c(u,p){let h=0,f=0,m=0,_=0,E=0;const v=p.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const S=u[d];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),h++}else if(S.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),m++}else if(S.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),a.identity(),s.copy(S.matrixWorld),s.premultiply(v),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),f++}else if(S.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(v),E++}}}return{setup:o,setupView:c,state:i}}function Sg(t){const e=new Kb(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function p(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Zb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Sg(t),e.set(r,[o])):s>=a.length?(o=new Sg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eA=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],tA=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Mg=new pt,fa=new O,Uu=new O;function nA(t,e,n){let i=new Gh;const r=new Ge,s=new Ge,a=new vt,o=new f1,c=new h1,u={},p=n.maxTextureSize,h={[hr]:xn,[xn]:hr,[wi]:wi},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Jb,fragmentShader:Qb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ht(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let d=this.type;this.render=function(w,C,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===QS&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pl);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const W=d!==this.type;W&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=w.length;Y<z;Y++){const $=w[Y],q=$.shadow;if(q===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const N=q.getFrameExtents();r.multiply(N),s.copy(q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/N.x),r.x=s.x*N.x,q.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/N.y),r.y=s.y*N.y,q.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=U,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===va){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pi(r.x,r.y,{format:Hr,type:Ui,minFilter:en,magFilter:en,generateMipmaps:!1}),q.map.texture.name=$.name+".shadowMap",q.map.depthTexture=new js(r.x,r.y,ci),q.map.depthTexture.name=$.name+".shadowMapDepth",q.map.depthTexture.format=ki,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt}else $.isPointLight?(q.map=new Ax(r.x),q.map.depthTexture=new s1(r.x,mi)):(q.map=new pi(r.x,r.y),q.map.depthTexture=new js(r.x,r.y,mi)),q.map.depthTexture.name=$.name+".shadowMap",q.map.depthTexture.format=ki,this.type===pl?(q.map.depthTexture.compareFunction=U?Bh:Oh,q.map.depthTexture.minFilter=en,q.map.depthTexture.magFilter=en):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt);q.camera.updateProjectionMatrix()}const B=q.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<B;ee++){if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(q.map),t.clear());const ae=q.getViewport(ee);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(a)}if($.isPointLight){const ae=q.camera,ze=q.matrix,$e=$.distance||ae.far;$e!==ae.far&&(ae.far=$e,ae.updateProjectionMatrix()),fa.setFromMatrixPosition($.matrixWorld),ae.position.copy(fa),Uu.copy(ae.position),Uu.add(eA[ee]),ae.up.copy(tA[ee]),ae.lookAt(Uu),ae.updateMatrixWorld(),ze.makeTranslation(-fa.x,-fa.y,-fa.z),Mg.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Mg,ae.coordinateSystem,ae.reversedDepth)}else q.updateMatrices($);i=q.getFrustum(),y(C,x,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===va&&g(q,x),q.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(A,P,I)};function g(w,C){const x=e.update(E);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(r.x,r.y,{format:Hr,type:Ui})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,m,E,null)}function S(w,C,x,A){let P=null;const I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=P.uuid,W=C.uuid;let Y=u[L];Y===void 0&&(Y={},u[L]=Y);let z=Y[W];z===void 0&&(z=P.clone(),Y[W]=z,C.addEventListener("dispose",b)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,A===va?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=t.properties.get(P);L.light=x}return P}function y(w,C,x,A,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===va)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Y=w.material;if(Array.isArray(Y)){const z=W.groups;for(let $=0,q=z.length;$<q;$++){const N=z[$],U=Y[N.materialIndex];if(U&&U.visible){const B=S(w,U,A,P);w.onBeforeShadow(t,w,C,x,W,B,N),t.renderBufferDirect(x,null,W,B,w,N),w.onAfterShadow(t,w,C,x,W,B,N)}}}else if(Y.visible){const z=S(w,Y,A,P);w.onBeforeShadow(t,w,C,x,W,z,null),t.renderBufferDirect(x,null,W,z,w,null),w.onAfterShadow(t,w,C,x,W,z,null)}}const L=w.children;for(let W=0,Y=L.length;W<Y;W++)y(L[W],C,x,A,P)}function b(w){w.target.removeEventListener("dispose",b);for(const x in u){const A=u[x],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function iA(t,e){function n(){let D=!1;const le=new vt;let Q=null;const fe=new vt(0,0,0,0);return{setMask:function(ve){Q!==ve&&!D&&(t.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ne,be,Ee,St){St===!0&&(ve*=Ee,ne*=Ee,be*=Ee),le.set(ve,ne,be,Ee),fe.equals(le)===!1&&(t.clearColor(ve,ne,be,Ee),fe.copy(le))},reset:function(){D=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,Q=null,fe=null,ve=null;return{setReversed:function(ne){if(le!==ne){const be=e.get("EXT_clip_control");ne?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const Ee=ve;ve=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(ne){ne?ie(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!D&&(t.depthMask(ne),Q=ne)},setFunc:function(ne){if(le&&(ne=IM[ne]),fe!==ne){switch(ne){case Fd:t.depthFunc(t.NEVER);break;case Od:t.depthFunc(t.ALWAYS);break;case Bd:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case zd:t.depthFunc(t.EQUAL);break;case Vd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case Hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ne}},setLocked:function(ne){D=ne},setClear:function(ne){ve!==ne&&(ve=ne,le&&(ne=1-ne),t.clearDepth(ne))},reset:function(){D=!1,Q=null,fe=null,ve=null,le=!1}}}function r(){let D=!1,le=null,Q=null,fe=null,ve=null,ne=null,be=null,Ee=null,St=null;return{setTest:function(lt){D||(lt?ie(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(lt){le!==lt&&!D&&(t.stencilMask(lt),le=lt)},setFunc:function(lt,Qn,ei){(Q!==lt||fe!==Qn||ve!==ei)&&(t.stencilFunc(lt,Qn,ei),Q=lt,fe=Qn,ve=ei)},setOp:function(lt,Qn,ei){(ne!==lt||be!==Qn||Ee!==ei)&&(t.stencilOp(lt,Qn,ei),ne=lt,be=Qn,Ee=ei)},setLocked:function(lt){D=lt},setClear:function(lt){St!==lt&&(t.clearStencil(lt),St=lt)},reset:function(){D=!1,le=null,Q=null,fe=null,ve=null,ne=null,be=null,Ee=null,St=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let p={},h={},f={},m=new WeakMap,_=[],E=null,v=!1,d=null,g=null,S=null,y=null,b=null,w=null,C=null,x=new He(0,0,0),A=0,P=!1,I=null,L=null,W=null,Y=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,N=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=N>=2);let B=null,ee={};const ae=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),$e=new vt().fromArray(ae),Te=new vt().fromArray(ze);function K(D,le,Q,fe){const ve=new Uint8Array(4),ne=t.createTexture();t.bindTexture(D,ne),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Q;be++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(le+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ne}const re={};re[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Gs),Ct(!1),It(xm),ie(t.CULL_FACE),et(Ri);function ie(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function De(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function Ue(D,le){return f[D]!==le?(t.bindFramebuffer(D,le),f[D]=le,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(D,le){let Q=_,fe=!1;if(D){Q=m.get(le),Q===void 0&&(Q=[],m.set(le,Q));const ve=D.textures;if(Q.length!==ve.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,be=ve.length;ne<be;ne++)Q[ne]=t.COLOR_ATTACHMENT0+ne;Q.length=ve.length,fe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Q)}function wt(D){return E!==D?(t.useProgram(D),E=D,!0):!1}const We={[br]:t.FUNC_ADD,[tM]:t.FUNC_SUBTRACT,[nM]:t.FUNC_REVERSE_SUBTRACT};We[iM]=t.MIN,We[rM]=t.MAX;const st={[sM]:t.ZERO,[aM]:t.ONE,[oM]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[hM]:t.SRC_ALPHA_SATURATE,[dM]:t.DST_COLOR,[cM]:t.DST_ALPHA,[lM]:t.ONE_MINUS_SRC_COLOR,[kd]:t.ONE_MINUS_SRC_ALPHA,[fM]:t.ONE_MINUS_DST_COLOR,[uM]:t.ONE_MINUS_DST_ALPHA,[pM]:t.CONSTANT_COLOR,[mM]:t.ONE_MINUS_CONSTANT_COLOR,[gM]:t.CONSTANT_ALPHA,[vM]:t.ONE_MINUS_CONSTANT_ALPHA};function et(D,le,Q,fe,ve,ne,be,Ee,St,lt){if(D===Ri){v===!0&&(De(t.BLEND),v=!1);return}if(v===!1&&(ie(t.BLEND),v=!0),D!==eM){if(D!==d||lt!==P){if((g!==br||b!==br)&&(t.blendEquation(t.FUNC_ADD),g=br,b=br),lt)switch(D){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xl:t.blendFunc(t.ONE,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _m:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}S=null,y=null,w=null,C=null,x.set(0,0,0),A=0,d=D,P=lt}return}ve=ve||le,ne=ne||Q,be=be||fe,(le!==g||ve!==b)&&(t.blendEquationSeparate(We[le],We[ve]),g=le,b=ve),(Q!==S||fe!==y||ne!==w||be!==C)&&(t.blendFuncSeparate(st[Q],st[fe],st[ne],st[be]),S=Q,y=fe,w=ne,C=be),(Ee.equals(x)===!1||St!==A)&&(t.blendColor(Ee.r,Ee.g,Ee.b,St),x.copy(Ee),A=St),d=D,P=!1}function Ye(D,le){D.side===wi?De(t.CULL_FACE):ie(t.CULL_FACE);let Q=D.side===xn;le&&(Q=!Q),Ct(Q),D.blending===Ps&&D.transparent===!1?et(Ri):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(D){I!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),I=D)}function It(D){D!==ZS?(ie(t.CULL_FACE),D!==L&&(D===xm?t.cullFace(t.BACK):D===JS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),L=D}function Ft(D){D!==W&&(q&&t.lineWidth(D),W=D)}function Vt(D,le,Q){D?(ie(t.POLYGON_OFFSET_FILL),(Y!==le||z!==Q)&&(Y=le,z=Q,a.getReversed()&&(le=-le),t.polygonOffset(le,Q))):De(t.POLYGON_OFFSET_FILL)}function yt(D){D?ie(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function Rt(D){D===void 0&&(D=t.TEXTURE0+$-1),B!==D&&(t.activeTexture(D),B=D)}function k(D,le,Q){Q===void 0&&(B===null?Q=t.TEXTURE0+$-1:Q=B);let fe=ee[Q];fe===void 0&&(fe={type:void 0,texture:void 0},ee[Q]=fe),(fe.type!==D||fe.texture!==le)&&(B!==Q&&(t.activeTexture(Q),B=Q),t.bindTexture(D,le||re[D]),fe.type=D,fe.texture=le)}function un(){const D=ee[B];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function M(){try{t.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function V(){try{t.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function oe(){try{t.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ce(){try{t.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function J(){try{t.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function te(){try{t.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ue(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function Ae(D,le){h[D]!==le&&(t.pixelStorei(D,le),h[D]=le)}function he(D){$e.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function de(D){Te.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Te.copy(D))}function Ne(D,le){let Q=u.get(le);Q===void 0&&(Q=new WeakMap,u.set(le,Q));let fe=Q.get(D);fe===void 0&&(fe=t.getUniformBlockIndex(le,D.name),Q.set(D,fe))}function Ie(D,le){const fe=u.get(le).get(D);c.get(le)!==fe&&(t.uniformBlockBinding(le,fe,D.__bindingPointIndex),c.set(le,fe))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},h={},B=null,ee={},f={},m=new WeakMap,_=[],E=null,v=!1,d=null,g=null,S=null,y=null,b=null,w=null,C=null,x=new He(0,0,0),A=0,P=!1,I=null,L=null,W=null,Y=null,z=null,$e.set(0,0,t.canvas.width,t.canvas.height),Te.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:De,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:wt,setBlending:et,setMaterial:Ye,setFlipSided:Ct,setCullFace:It,setLineWidth:Ft,setPolygonOffset:Vt,setScissorTest:yt,activeTexture:Rt,bindTexture:k,unbindTexture:un,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Ae,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:oe,texStorage3D:ce,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:j,compressedTexSubImage3D:Z,scissor:he,viewport:de,reset:Fe}}function rA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,p=new WeakMap,h=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,M){return _?new OffscreenCanvas(R,M):Zl("canvas")}function v(R,M,V){let j=1;const Z=tt(R);if((Z.width>V||Z.height>V)&&(j=V/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(j*Z.width),ce=Math.floor(j*Z.height);f===void 0&&(f=E(oe,ce));const J=M?E(oe,ce):f;return J.width=oe,J.height=ce,J.getContext("2d").drawImage(R,0,0,oe,ce),Le("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+ce+")."),J}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,M,V,j,Z,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;j&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===t.RED&&(V===t.FLOAT&&(J=t.R32F),V===t.HALF_FLOAT&&(J=t.R16F),V===t.UNSIGNED_BYTE&&(J=t.R8),V===t.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),V===t.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.R8UI),V===t.UNSIGNED_SHORT&&(J=t.R16UI),V===t.UNSIGNED_INT&&(J=t.R32UI),V===t.BYTE&&(J=t.R8I),V===t.SHORT&&(J=t.R16I),V===t.INT&&(J=t.R32I)),M===t.RG&&(V===t.FLOAT&&(J=t.RG32F),V===t.HALF_FLOAT&&(J=t.RG16F),V===t.UNSIGNED_BYTE&&(J=t.RG8),V===t.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),V===t.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RG8UI),V===t.UNSIGNED_SHORT&&(J=t.RG16UI),V===t.UNSIGNED_INT&&(J=t.RG32UI),V===t.BYTE&&(J=t.RG8I),V===t.SHORT&&(J=t.RG16I),V===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGB8UI),V===t.UNSIGNED_SHORT&&(J=t.RGB16UI),V===t.UNSIGNED_INT&&(J=t.RGB32UI),V===t.BYTE&&(J=t.RGB8I),V===t.SHORT&&(J=t.RGB16I),V===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),V===t.UNSIGNED_INT&&(J=t.RGBA32UI),V===t.BYTE&&(J=t.RGBA8I),V===t.SHORT&&(J=t.RGBA16I),V===t.INT&&(J=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),V===t.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),M===t.RGBA){const te=oe?Kl:Xe.getTransfer(Z);V===t.FLOAT&&(J=t.RGBA32F),V===t.HALF_FLOAT&&(J=t.RGBA16F),V===t.UNSIGNED_BYTE&&(J=te===nt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),V===t.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(R,M){let V;return R?M===null||M===mi||M===$a?V=t.DEPTH24_STENCIL8:M===ci?V=t.DEPTH32F_STENCIL8:M===qa&&(V=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mi||M===$a?V=t.DEPTH_COMPONENT24:M===ci?V=t.DEPTH_COMPONENT32F:M===qa&&(V=t.DEPTH_COMPONENT16),V}function w(R,M){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&p.delete(M),M.isHTMLTexture&&h.delete(M)}function x(R){const M=R.target;M.removeEventListener("dispose",x),I(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,j=m.get(V);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(R),Object.keys(j).length===0&&m.delete(V)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const V=R.source,j=m.get(V);delete j[M.__cacheKey],a.memory.textures--}function I(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let j=0,Z=V.length;j<Z;j++){const oe=i.get(V[j]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(V[j])}i.remove(R)}let L=0;function W(){L=0}function Y(){return L}function z(R){L=R}function $(){const R=L;return R>=r.maxTextures&&Le("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function q(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function N(R,M){const V=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const j=R.image;if(j===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{De(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function U(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){De(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function B(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){De(V,R,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ue(V,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const ae={[jd]:t.REPEAT,[Ai]:t.CLAMP_TO_EDGE,[Wd]:t.MIRRORED_REPEAT},ze={[jt]:t.NEAREST,[yM]:t.NEAREST_MIPMAP_NEAREST,[Ao]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},$e={[EM]:t.NEVER,[CM]:t.ALWAYS,[wM]:t.LESS,[Oh]:t.LEQUAL,[TM]:t.EQUAL,[Bh]:t.GEQUAL,[bM]:t.GREATER,[AM]:t.NOTEQUAL};function Te(R,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===nu||M.magFilter===Ao||M.magFilter===Pr||M.minFilter===en||M.minFilter===nu||M.minFilter===Ao||M.minFilter===Pr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ae[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ae[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ae[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ze[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ze[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Ao&&M.minFilter!==Pr||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const j=M.source;let Z=m.get(j);Z===void 0&&(Z={},m.set(j,Z));const oe=q(M);if(oe!==R.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[oe].usedTimes++;const ce=Z[R.__cacheKey];ce!==void 0&&(Z[R.__cacheKey].usedTimes--,ce.usedTimes===0&&P(M)),R.__cacheKey=oe,R.__webglTexture=Z[oe].texture}return V}function re(R,M,V){return Math.floor(Math.floor(R/V)/M)}function ie(R,M,V,j){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,j,M.data);else{oe.sort((Ae,he)=>Ae.start-he.start);let ce=0;for(let Ae=1;Ae<oe.length;Ae++){const he=oe[ce],de=oe[Ae],Ne=he.start+he.count,Ie=re(de.start,M.width,4),Fe=re(he.start,M.width,4);de.start<=Ne+1&&Ie===Fe&&re(de.start+de.count-1,M.width,4)===Ie?he.count=Math.max(he.count,de.start+de.count-he.start):(++ce,oe[ce]=de)}oe.length=ce+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ae=0,he=oe.length;Ae<he;Ae++){const de=oe[Ae],Ne=Math.floor(de.start/4),Ie=Math.ceil(de.count/4),Fe=Ne%M.width,D=Math.floor(Ne/M.width),le=Ie,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Fe,D,le,Q,V,j,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function De(R,M,V){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const Z=K(R,M),oe=M.source;n.bindTexture(j,R.__webglTexture,t.TEXTURE0+V);const ce=i.get(oe);if(oe.version!==ce.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=Xe.getPrimaries(Xe.workingColorSpace),fe=M.colorSpace===Qi?null:Xe.getPrimaries(M.colorSpace),ve=M.colorSpace===Qi||Q===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let te=v(M.image,!1,r.maxTextureSize);te=un(M,te);const ue=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let he=y(M.internalFormat,ue,Ae,M.normalized,M.colorSpace,M.isVideoTexture);Te(j,M);let de;const Ne=M.mipmaps,Ie=M.isVideoTexture!==!0,Fe=ce.__version===void 0||Z===!0,D=oe.dataReady,le=w(M,te);if(M.isDepthTexture)he=b(M.format===Ir,M.type),Fe&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,he,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,he,te.width,te.height,0,ue,Ae,null));else if(M.isDataTexture)if(Ne.length>0){Ie&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,he,Ne[0].width,Ne[0].height);for(let Q=0,fe=Ne.length;Q<fe;Q++)de=Ne[Q],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ae,de.data):n.texImage2D(t.TEXTURE_2D,Q,he,de.width,de.height,0,ue,Ae,de.data);M.generateMipmaps=!1}else Ie?(Fe&&n.texStorage2D(t.TEXTURE_2D,le,he,te.width,te.height),D&&ie(M,te,ue,Ae)):n.texImage2D(t.TEXTURE_2D,0,he,te.width,te.height,0,ue,Ae,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,fe=Ne.length;Q<fe;Q++)if(de=Ne[Q],M.format!==Yn)if(ue!==null)if(Ie){if(D)if(M.layerUpdates.size>0){const ve=Qm(de.width,de.height,M.format,M.type);for(const ne of M.layerUpdates){const be=de.data.subarray(ne*ve/de.data.BYTES_PER_ELEMENT,(ne+1)*ve/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ne,de.width,de.height,1,ue,be)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,he,de.width,de.height,te.depth,0,de.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,te.depth,ue,Ae,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,he,de.width,de.height,te.depth,0,ue,Ae,de.data)}else{Ie&&Fe&&n.texStorage2D(t.TEXTURE_2D,le,he,Ne[0].width,Ne[0].height);for(let Q=0,fe=Ne.length;Q<fe;Q++)de=Ne[Q],M.format!==Yn?ue!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,he,de.width,de.height,0,de.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,ue,Ae,de.data):n.texImage2D(t.TEXTURE_2D,Q,he,de.width,de.height,0,ue,Ae,de.data)}else if(M.isDataArrayTexture)if(Ie){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,te.width,te.height,te.depth),D)if(M.layerUpdates.size>0){const Q=Qm(te.width,te.height,M.format,M.type);for(const fe of M.layerUpdates){const ve=te.data.subarray(fe*Q/te.data.BYTES_PER_ELEMENT,(fe+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ue,Ae,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Ae,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,te.width,te.height,te.depth,0,ue,Ae,te.data);else if(M.isData3DTexture)Ie?(Fe&&n.texStorage3D(t.TEXTURE_3D,le,he,te.width,te.height,te.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Ae,te.data)):n.texImage3D(t.TEXTURE_3D,0,he,te.width,te.height,te.depth,0,ue,Ae,te.data);else if(M.isFramebufferTexture){if(Fe)if(Ie)n.texStorage2D(t.TEXTURE_2D,le,he,te.width,te.height);else{let Q=te.width,fe=te.height;for(let ve=0;ve<le;ve++)n.texImage2D(t.TEXTURE_2D,ve,he,Q,fe,0,ue,Ae,null),Q>>=1,fe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),h.add(M),Q.onpaint=fe=>{const ve=fe.changedElements;for(const ne of h)ve.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ve=t.RGBA,ne=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,ne,be,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ie&&Fe){const Q=tt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height)}for(let Q=0,fe=Ne.length;Q<fe;Q++)de=Ne[Q],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue,Ae,de):n.texImage2D(t.TEXTURE_2D,Q,he,ue,Ae,de);M.generateMipmaps=!1}else if(Ie){if(Fe){const Q=tt(te);n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ae,te)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,Ae,te);d(M)&&g(j),ce.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ue(R,M,V){if(M.image.length!==6)return;const j=K(R,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const oe=i.get(Z);if(Z.version!==oe.__version||j===!0){n.activeTexture(t.TEXTURE0+V);const ce=Xe.getPrimaries(Xe.workingColorSpace),J=M.colorSpace===Qi?null:Xe.getPrimaries(M.colorSpace),te=M.colorSpace===Qi||ce===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ae=M.image[0]&&M.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!ue&&!Ae?he[ne]=v(M.image[ne],!0,r.maxCubemapSize):he[ne]=Ae?M.image[ne].image:M.image[ne],he[ne]=un(M,he[ne]);const de=he[0],Ne=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type),Fe=y(M.internalFormat,Ne,Ie,M.normalized,M.colorSpace),D=M.isVideoTexture!==!0,le=oe.__version===void 0||j===!0,Q=Z.dataReady;let fe=w(M,de);Te(t.TEXTURE_CUBE_MAP,M);let ve;if(ue){D&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,de.width,de.height);for(let ne=0;ne<6;ne++){ve=he[ne].mipmaps;for(let be=0;be<ve.length;be++){const Ee=ve[be];M.format!==Yn?Ne!==null?D?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Ee.width,Ee.height,Ne,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Fe,Ee.width,Ee.height,0,Ee.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Ee.width,Ee.height,Ne,Ie,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Fe,Ee.width,Ee.height,0,Ne,Ie,Ee.data)}}}else{if(ve=M.mipmaps,D&&le){ve.length>0&&fe++;const ne=tt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){D?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ne,Ie,he[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,he[ne].width,he[ne].height,0,Ne,Ie,he[ne].data);for(let be=0;be<ve.length;be++){const St=ve[be].image[ne].image;D?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,St.width,St.height,Ne,Ie,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Fe,St.width,St.height,0,Ne,Ie,St.data)}}else{D?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Ie,he[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,Ne,Ie,he[ne]);for(let be=0;be<ve.length;be++){const Ee=ve[be];D?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ne,Ie,Ee.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Fe,Ne,Ie,Ee.image[ne])}}}d(M)&&g(t.TEXTURE_CUBE_MAP),oe.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,V,j,Z,oe){const ce=s.convert(V.format,V.colorSpace),J=s.convert(V.type),te=y(V.internalFormat,ce,J,V.normalized,V.colorSpace),ue=i.get(M),Ae=i.get(V);if(Ae.__renderTarget=M,!ue.__hasExternalTextures){const he=Math.max(1,M.width>>oe),de=Math.max(1,M.height>>oe);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,oe,te,he,de,M.depth,0,ce,J,null):n.texImage2D(Z,oe,te,he,de,0,ce,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Rt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,Ae.__webglTexture,0,yt(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(R,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,oe=b(M.stencilBuffer,Z),ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),oe,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,R)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const oe=j[Z],ce=s.convert(oe.format,oe.colorSpace),J=s.convert(oe.type),te=y(oe.internalFormat,ce,J,oe.normalized,oe.colorSpace);Rt(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),te,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,M,V){const j=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M.depthTexture);const ue=s.convert(M.depthTexture.format),Ae=s.convert(M.depthTexture.type);let he;M.depthTexture.format===ki?he=t.DEPTH_COMPONENT24:M.depthTexture.format===Ir&&(he=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,M.width,M.height,0,ue,Ae,null)}}else N(M.depthTexture,0);const oe=Z.__webglTexture,ce=yt(M),J=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,te=M.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===ki)Rt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,oe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,oe,0);else if(M.depthTexture.format===Ir)Rt(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,oe,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let j=0;j<6;j++)We(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?We(M.__webglFramebuffer[0],R,0):We(M.__webglFramebuffer,R,0)}else if(V){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),wt(M.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,oe)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),wt(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(R,M,V){const j=i.get(R);M!==void 0&&Pe(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&st(R)}function Ye(R){const M=R.texture,V=i.get(R),j=i.get(M);R.addEventListener("dispose",x);const Z=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,a.memory.textures++),oe){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let te=0;te<M.mipmaps.length;te++)V.__webglFramebuffer[J][te]=t.createFramebuffer()}else V.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)V.__webglFramebuffer[J]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ce)for(let J=0,te=Z.length;J<te;J++){const ue=i.get(Z[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Rt(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];V.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[J]);const ue=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),he=y(te.internalFormat,ue,Ae,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),de=yt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,V.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),wt(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Pe(V.__webglFramebuffer[J][te],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Pe(V.__webglFramebuffer[J],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let J=0,te=Z.length;J<te;J++){const ue=Z[J],Ae=i.get(ue);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ae.__webglTexture),Te(he,ue),Pe(V.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+J,he,0),d(ue)&&g(he)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,j.__webglTexture),Te(J,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Pe(V.__webglFramebuffer[te],R,M,t.COLOR_ATTACHMENT0,J,te);else Pe(V.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,J,0);d(M)&&g(J),n.unbindTexture()}R.depthBuffer&&st(R)}function Ct(R){const M=R.textures;for(let V=0,j=M.length;V<j;V++){const Z=M[V];if(d(Z)){const oe=S(R),ce=i.get(Z).__webglTexture;n.bindTexture(oe,ce),g(oe),n.unbindTexture()}}}const It=[],Ft=[];function Vt(R){if(R.samples>0){if(Rt(R)===!1){const M=R.textures,V=R.width,j=R.height;let Z=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),J=M.length>1;if(J)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ae=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,V,j,0,0,V,j,Z,t.NEAREST),c===!0&&(It.length=0,Ft.length=0,It.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(It.push(oe),Ft.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ft)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ae=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(R){const M=a.render.frame;p.get(R)!==M&&(p.set(R,M),R.update())}function un(R,M){const V=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Yl&&V!==Qi&&(Xe.getTransfer(V)===nt?(j!==Yn||Z!==En)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",V)),M}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=et,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sA(t,e){function n(i,r=Qi){let s;const a=Xe.getTransfer(r);if(i===En)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===nx)return t.BYTE;if(i===ix)return t.SHORT;if(i===qa)return t.UNSIGNED_SHORT;if(i===Ih)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===ax)return t.ALPHA;if(i===ox)return t.RGB;if(i===Yn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===lx)return t.RED;if(i===Uh)return t.RED_INTEGER;if(i===Hr)return t.RG;if(i===kh)return t.RG_INTEGER;if(i===Fh)return t.RGBA_INTEGER;if(i===ml||i===gl||i===vl||i===xl)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xd||i===qd||i===$d||i===Yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===ql||i===tf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kd||i===Zd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qd)return s.COMPRESSED_R11_EAC;if(i===ef)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ql)return s.COMPRESSED_RG11_EAC;if(i===tf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===af)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===of)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===df)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ff)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vf||i===xf||i===_f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vf)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yf||i===Sf||i===$l||i===Mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _x(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:aA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new Ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,p=null,h=null,f=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",v=new lA,d={},g=n.getContextAttributes();let S=null,y=null;const b=[],w=[],C=new Ge;let x=null;const A=new hn;A.viewport=new vt;const P=new hn;P.viewport=new vt;const I=[A,P],L=new x1;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=b[K];return re===void 0&&(re=new cu,b[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=b[K];return re===void 0&&(re=new cu,b[K]=re),re.getGripSpace()},this.getHand=function(K){let re=b[K];return re===void 0&&(re=new cu,b[K]=re),re.getHandSpace()};function z(K){const re=w.indexOf(K.inputSource);if(re===-1)return;const ie=b[re];ie!==void 0&&(ie.update(K.inputSource,K.frame,u||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let K=0;K<b.length;K++){const re=w[K];re!==null&&(w[K]=null,b[K].disconnect(re))}W=null,Y=null,v.reset();for(const K in d)delete d[K];e.setRenderTarget(S),m=null,f=null,h=null,r=null,y=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,De=null,Ue=null;g.depth&&(Ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?Ir:ki,De=g.stencil?$a:mi);const Pe={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:Yn,type:En,depthTexture:new js(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new pi(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(K){for(let re=0;re<K.removed.length;re++){const ie=K.removed[re],De=w.indexOf(ie);De>=0&&(w[De]=null,b[De].disconnect(ie))}for(let re=0;re<K.added.length;re++){const ie=K.added[re];let De=w.indexOf(ie);if(De===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=w.length){w.push(ie),De=Pe;break}else if(w[Pe]===null){w[Pe]=ie,De=Pe;break}if(De===-1)break}const Ue=b[De];Ue&&Ue.connect(ie)}}const N=new O,U=new O;function B(K,re,ie){N.setFromMatrixPosition(re.matrixWorld),U.setFromMatrixPosition(ie.matrixWorld);const De=N.distanceTo(U),Ue=re.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,wt=Ue[14]/(Ue[10]-1),We=Ue[14]/(Ue[10]+1),st=(Ue[9]+1)/Ue[5],et=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],Ct=(Pe[8]+1)/Pe[0],It=wt*Ye,Ft=wt*Ct,Vt=De/(-Ye+Ct),yt=Vt*-Ye;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(Vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Rt=wt+Vt,k=We+Vt,un=It-yt,tt=Ft+(De-yt),R=st*We/k*Rt,M=et*We/k*Rt;K.projectionMatrix.makePerspective(un,tt,R,M,Rt,k),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,ie=K.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(ie=v.depthFar)),L.near=P.near=A.near=re,L.far=P.far=A.far=ie,(W!==L.near||Y!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),W=L.near,Y=L.far),L.layers.mask=K.layers.mask|6,A.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const De=K.parent,Ue=L.cameras;ee(L,De);for(let Pe=0;Pe<Ue.length;Pe++)ee(Ue[Pe],De);Ue.length===2?B(L,A,P):L.projectionMatrix.copy(A.projectionMatrix),ae(K,L,De)};function ae(K,re,ie){ie===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(K){return d[K]};let ze=null;function $e(K,re){if(p=re.getViewerPose(u||a),_=re,p!==null){const ie=p.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let De=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,De=!0);for(let We=0;We<ie.length;We++){const st=ie[We];let et=null;if(m!==null)et=m.getViewport(st);else{const Ct=h.getViewSubImage(f,st);et=Ct.viewport,We===0&&(e.setRenderTargetTextures(y,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(y))}let Ye=I[We];Ye===void 0&&(Ye=new hn,Ye.layers.enable(We),Ye.viewport=new vt,I[We]=Ye),Ye.matrix.fromArray(st.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(st.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),We===0&&(L.matrix.copy(Ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),De===!0&&L.cameras.push(Ye)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const We=h.getDepthInformation(ie[0]);We&&We.isValid&&We.texture&&v.init(We,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<ie.length;We++){const st=ie[We].camera;if(st){let et=d[st];et||(et=new _x,d[st]=et);const Ye=h.getCameraImage(st);et.sourceTexture=Ye}}}}for(let ie=0;ie<b.length;ie++){const De=w[ie],Ue=b[ie];De!==null&&Ue!==void 0&&Ue.update(De,re,u||a)}ze&&ze(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Te=new Tx;Te.setAnimationLoop($e),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}}const uA=new pt,Ix=new ke;Ix.set(-1,0,0,0,1,0,0,0,1);function dA(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,yx(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,g,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),h(v,d)):d.isMeshPhongMaterial?(s(v,d),p(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&m(v,d,y)):d.isMeshMatcapMaterial?(s(v,d),_(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),E(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?c(v,d,g,S):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===xn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===xn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const g=e.get(d),S=g.envMap,y=g.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Ix),v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function c(v,d,g,S){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=S*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function p(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function m(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,d){d.matcap&&(v.matcap.value=d.matcap)}function E(v,d){const g=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const w=b.program;i.uniformBlockBinding(y,w)}function u(y,b){let w=r[y.id];w===void 0&&(v(y),w=p(y),r[y.id]=w,y.addEventListener("dispose",g));const C=b.program;i.updateUBOMapping(y,C);const x=e.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function p(y){const b=h();y.__bindingPointIndex=b;const w=t.createBuffer(),C=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=r[y.id],w=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,A=w.length;x<A;x++){const P=w[x];if(Array.isArray(P))for(let I=0,L=P.length;I<L;I++)m(P[I],x,I,C);else m(P,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,b,w,C){if(E(y,b,w,C)===!0){const x=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let I=0;I<A.length;I++){const L=A[I],W=d(L);_(L,y.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function _(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function E(y,b,w,C){const x=y.value,A=b+"_"+w;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{const P=C[A];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function v(y){const b=y.uniforms;let w=0;const C=16;for(let A=0,P=b.length;A<P;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let L=0,W=I.length;L<W;L++){const Y=I[L],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,q=z.length;$<q;$++){const N=z[$],U=d(N),B=w%C,ee=B%U.boundary,ae=B+ee;w+=ee,ae!==0&&C-ae<U.storage&&(w+=C-ae),Y.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=U.storage}}}const x=w%C;return x>0&&(w+=C-x),y.__size=w,y.__cache={},this}function d(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){const b=y.target;b.removeEventListener("dispose",g);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:u,dispose:S}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function pA(){return ri===null&&(ri=new JM(hA,16,16,Hr,Ui),ri.name="DFG_LUT",ri.minFilter=en,ri.magFilter=en,ri.wrapS=Ai,ri.wrapT=Ai,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Lx{constructor(e={}){const{canvas:n=NM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=m,v=new Set([Fh,kh,Uh]),d=new Set([En,mi,qa,$a,Lh,Dh]),g=new Uint32Array(4),S=new Int32Array(4),y=new O;let b=null,w=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,L=null,W=null,Y=null,z=null;this._outputColorSpace=Pn;let $=0,q=0,N=null,U=-1,B=null;const ee=new vt,ae=new vt;let ze=null;const $e=new He(0);let Te=0,K=n.width,re=n.height,ie=1,De=null,Ue=null;const Pe=new vt(0,0,K,re),wt=new vt(0,0,K,re);let We=!1;const st=new Gh;let et=!1,Ye=!1;const Ct=new pt,It=new O,Ft=new vt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rt(){return N===null?ie:1}let k=i;function un(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ph}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",Qn,!1),k===null){const F="webgl2";if(k=un(F,T),k===null)throw un(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ze("WebGLRenderer: "+T.message),T}let tt,R,M,V,j,Z,oe,ce,J,te,ue,Ae,he,de,Ne,Ie,Fe,D,le,Q,fe,ve,ne;function be(){tt=new pT(k),tt.init(),fe=new sA(k,tt),R=new aT(k,tt,e,fe),M=new iA(k,tt),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),W=k.createFramebuffer(),Y=k.createFramebuffer(),z=k.createFramebuffer(),V=new vT(k),j=new Hb,Z=new rA(k,tt,M,j,R,fe,V),oe=new hT(P),ce=new S1(k),ve=new rT(k,ce),J=new mT(k,ce,V,ve),te=new _T(k,J,ce,ve,V),D=new xT(k,R,Z),Ne=new oT(j),ue=new Gb(P,oe,tt,R,ve,Ne),Ae=new dA(P,j),he=new Wb,de=new Zb(tt),Fe=new iT(P,oe,M,te,_,c),Ie=new nA(P,te,R),ne=new fA(k,V,R,M),le=new sT(k,tt,V),Q=new gT(k,tt,V),V.programs=ue.programs,P.capabilities=R,P.extensions=tt,P.properties=j,P.renderLists=he,P.shadowMap=Ie,P.state=M,P.info=V}be(),E!==En&&(A=new ST(E,n.width,n.height,o,r,s));const Ee=new cA(P,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(K,re,!1))},this.getSize=function(T){return T.set(K,re)},this.setSize=function(T,F,X=!0){if(Ee.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,re=F,n.width=Math.floor(T*ie),n.height=Math.floor(F*ie),X===!0&&(n.style.width=T+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(K*ie,re*ie).floor()},this.setDrawingBufferSize=function(T,F,X){K=T,re=F,ie=X,n.width=Math.floor(T*X),n.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(E===En){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,F,X,G){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,F,X,G),M.viewport(ee.copy(Pe).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,F,X,G){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,F,X,G),M.scissor(ae.copy(wt).multiplyScalar(ie).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){M.setScissorTest(We=T)},this.setOpaqueSort=function(T){De=T},this.setTransparentSort=function(T){Ue=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let G=0;if(T){let H=!1;if(N!==null){const ge=N.texture.format;H=v.has(ge)}if(H){const ge=N.texture.type,_e=d.has(ge),me=Fe.getClearColor(),we=Fe.getClearAlpha(),Ce=me.r,Oe=me.g,Ve=me.b;_e?(g[0]=Ce,g[1]=Oe,g[2]=Ve,g[3]=we,k.clearBufferuiv(k.COLOR,0,g)):(S[0]=Ce,S[1]=Oe,S[2]=Ve,S[3]=we,k.clearBufferiv(k.COLOR,0,S))}else G|=k.COLOR_BUFFER_BIT}F&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",Qn,!1),Fe.dispose(),he.dispose(),de.dispose(),j.dispose(),oe.dispose(),te.dispose(),ve.dispose(),ne.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Qh),Ee.removeEventListener("sessionend",ep),xr.stop()};function St(T){T.preventDefault(),Tm("WebGLRenderer: Context Lost."),I=!0}function lt(){Tm("WebGLRenderer: Context Restored."),I=!1;const T=V.autoReset,F=Ie.enabled,X=Ie.autoUpdate,G=Ie.needsUpdate,H=Ie.type;be(),V.autoReset=T,Ie.enabled=F,Ie.autoUpdate=X,Ie.needsUpdate=G,Ie.type=H}function Qn(T){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){const F=T.target;F.removeEventListener("dispose",ei),Dx(F)}function Dx(T){Ux(T),j.remove(T)}function Ux(T){const F=j.get(T).programs;F!==void 0&&(F.forEach(function(X){ue.releaseProgram(X)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,G,H,ge){F===null&&(F=Vt);const _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=Ox(T,F,X,G,H);M.setMaterial(G,_e);let we=X.index,Ce=1;if(G.wireframe===!0){if(we=J.getWireframeAttribute(X),we===void 0)return;Ce=2}const Oe=X.drawRange,Ve=X.attributes.position;let Re=Oe.start*Ce,rt=(Oe.start+Oe.count)*Ce;ge!==null&&(Re=Math.max(Re,ge.start*Ce),rt=Math.min(rt,(ge.start+ge.count)*Ce)),we!==null?(Re=Math.max(Re,0),rt=Math.min(rt,we.count)):Ve!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,Ve.count));const Tt=rt-Re;if(Tt<0||Tt===1/0)return;ve.setup(H,G,me,X,we);let Mt,at=le;if(we!==null&&(Mt=ce.get(we),at=Q,at.setIndex(Mt)),H.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*Rt()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(H.isLine){let $t=G.linewidth;$t===void 0&&($t=1),M.setLineWidth($t*Rt()),H.isLineSegments?at.setMode(k.LINES):H.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else H.isPoints?at.setMode(k.POINTS):H.isSprite&&at.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $t=H._multiDrawStarts,xe=H._multiDrawCounts,_n=H._multiDrawCount,Ke=we?ce.get(we).bytesPerElement:1,Rn=j.get(G).currentProgram.getUniforms();for(let ti=0;ti<_n;ti++)Rn.setValue(k,"_gl_DrawID",ti),at.render($t[ti]/Ke,xe[ti])}else if(H.isInstancedMesh)at.renderInstances(Re,Tt,H.count);else if(X.isInstancedBufferGeometry){const $t=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,$t);at.renderInstances(Re,Tt,xe)}else at.render(Re,Tt)};function Jh(T,F,X){T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,oo(T,F,X),T.side=hr,T.needsUpdate=!0,oo(T,F,X),T.side=wi):oo(T,F,X)}this.compile=function(T,F,X=null){X===null&&(X=T),w=de.get(X),w.init(F),x.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const G=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let _e=0;_e<ge.length;_e++){const me=ge[_e];Jh(me,X,H),G.add(me)}else Jh(ge,X,H),G.add(ge)}),w=x.pop(),G},this.compileAsync=function(T,F,X=null){const G=this.compile(T,F,X);return new Promise(H=>{function ge(){if(G.forEach(function(_e){j.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){H(T);return}setTimeout(ge,10)}tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bc=null;function kx(T){bc&&bc(T)}function Qh(){xr.stop()}function ep(){xr.start()}const xr=new Tx;xr.setAnimationLoop(kx),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(T){bc=T,Ee.setAnimationLoop(T),T===null?xr.stop():xr.start()},Ee.addEventListener("sessionstart",Qh),Ee.addEventListener("sessionend",ep),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(T,F);const X=Ee.enabled===!0&&Ee.isPresenting===!0,G=A!==null&&(N===null||X)&&A.begin(P,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(F),F=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,F,N),w=de.get(T,x.length),w.init(F),w.state.textureUnits=Z.getTextureUnits(),x.push(w),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(Ct,ui,F.reversedDepth),Ye=this.localClippingEnabled,et=Ne.init(this.clippingPlanes,Ye),b=he.get(T,C.length),b.init(),C.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const _e=P.xr.getDepthSensingMesh();_e!==null&&Ac(_e,F,-1/0,P.sortObjects)}Ac(T,F,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(De,Ue,F.reversedDepth),yt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,yt&&Fe.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ne.beginShadows();const H=w.state.shadowsArray;if(Ie.render(H,T,F),et===!0&&Ne.endShadows(),(G&&A.hasRenderPass())===!1){const _e=b.opaque,me=b.transmissive;if(w.setupLights(),F.isArrayCamera){const we=F.cameras;if(me.length>0)for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce];np(_e,me,T,Ve)}yt&&Fe.render(T);for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce];tp(b,T,Ve,Ve.viewport)}}else me.length>0&&np(_e,me,T,F),yt&&Fe.render(T),tp(b,T,F)}N!==null&&q===0&&(Z.updateMultisampleRenderTarget(N),Z.updateRenderTargetMipmap(N)),G&&A.end(P),T.isScene===!0&&T.onAfterRender(P,T,F),ve.resetDefaultState(),U=-1,B=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),et===!0&&Ne.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,L!==null&&L.renderEnd()};function Ac(T,F,X,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){G&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const _e=te.update(T),me=T.material;me.visible&&b.push(T,_e,me,X,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const _e=te.update(T),me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ft.copy(_e.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(me)){const we=_e.groups;for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce],Re=me[Ve.materialIndex];Re&&Re.visible&&b.push(T,_e,Re,X,Ft.z,Ve)}}else me.visible&&b.push(T,_e,me,X,Ft.z,null)}}const ge=T.children;for(let _e=0,me=ge.length;_e<me;_e++)Ac(ge[_e],F,X,G)}function tp(T,F,X,G){const{opaque:H,transmissive:ge,transparent:_e}=T;w.setupLightsView(X),et===!0&&Ne.setGlobalState(P.clippingPlanes,X),G&&M.viewport(ee.copy(G)),H.length>0&&ao(H,F,X),ge.length>0&&ao(ge,F,X),_e.length>0&&ao(_e,F,X),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function np(T,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:Re?Ui:En,minFilter:Pr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ge=w.state.transmissionRenderTarget[G.id],_e=G.viewport||ee;ge.setSize(_e.z*P.transmissionResolutionScale,_e.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),we=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor($e),Te=P.getClearAlpha(),Te<1&&P.setClearColor(16777215,.5),P.clear(),yt&&Fe.render(X);const Oe=P.toneMapping;P.toneMapping=hi;const Ve=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),et===!0&&Ne.setGlobalState(P.clippingPlanes,G),ao(T,X,G),Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,Tt=F.length;rt<Tt;rt++){const Mt=F[rt],{object:at,geometry:$t,material:xe,group:_n}=Mt;if(xe.side===wi&&at.layers.test(G.layers)){const Ke=xe.side;xe.side=xn,xe.needsUpdate=!0,ip(at,X,G,$t,xe,_n),xe.side=Ke,xe.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,we,Ce),P.setClearColor($e,Te),Ve!==void 0&&(G.viewport=Ve),P.toneMapping=Oe}function ao(T,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ge=T.length;H<ge;H++){const _e=T[H],{object:me,geometry:we,group:Ce}=_e;let Oe=_e.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),me.layers.test(X.layers)&&ip(me,F,X,we,Oe,Ce)}}function ip(T,F,X,G,H,ge){T.onBeforeRender(P,F,X,G,H,ge),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(P,F,X,G,T,ge),H.transparent===!0&&H.side===wi&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,P.renderBufferDirect(X,F,G,H,T,ge),H.side=hr,H.needsUpdate=!0,P.renderBufferDirect(X,F,G,H,T,ge),H.side=wi):P.renderBufferDirect(X,F,G,H,T,ge),T.onAfterRender(P,F,X,G,H,ge)}function oo(T,F,X){F.isScene!==!0&&(F=Vt);const G=j.get(T),H=w.state.lights,ge=w.state.shadowsArray,_e=H.state.version,me=ue.getParameters(T,H.state,ge,F,X,w.state.lightProbeGridArray),we=ue.getProgramCacheKey(me);let Ce=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=oe.get(T.envMap||G.environment,Oe),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",ei),Ce=new Map,G.programs=Ce);let Ve=Ce.get(we);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===_e)return sp(T,me),Ve}else me.uniforms=ue.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,X,me),T.onBeforeCompile(me,P),Ve=ue.acquireProgram(me,we),Ce.set(we,Ve),G.uniforms=me.uniforms;const Re=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=Ne.uniform),sp(T,me),G.needsLights=zx(T),G.lightsStateVersion=_e,G.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Ve,G.uniformsList=null,Ve}function rp(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=yl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function sp(T,F){const X=j.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Fx(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=T.length;X<G;X++){const H=T[X];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Ox(T,F,X,G,H){F.isScene!==!0&&(F=Vt),Z.resetTextureUnits();const ge=F.fog,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,me=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Xe.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ce=oe.get(G.envMap||_e,we),Oe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let Mt=hi;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=at!==void 0?at.length:0,xe=j.get(G),_n=w.state.lights;if(et===!0&&(Ye===!0||T!==B)){const ct=T===B&&G.id===U;Ne.setState(G,T,ct)}let Ke=!1;G.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==_n.state.version||xe.outputColorSpace!==me||H.isBatchedMesh&&xe.batching===!1||!H.isBatchedMesh&&xe.batching===!0||H.isBatchedMesh&&xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&xe.instancing===!1||!H.isInstancedMesh&&xe.instancing===!0||H.isSkinnedMesh&&xe.skinning===!1||!H.isSkinnedMesh&&xe.skinning===!0||H.isInstancedMesh&&xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&xe.instancingMorph===!1&&H.morphTexture!==null||xe.envMap!==Ce||G.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ne.numPlanes||xe.numIntersection!==Ne.numIntersection)||xe.vertexAlphas!==Oe||xe.vertexTangents!==Ve||xe.morphTargets!==Re||xe.morphNormals!==rt||xe.morphColors!==Tt||xe.toneMapping!==Mt||xe.morphTargetsCount!==$t||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,xe.__version=G.version);let Rn=xe.currentProgram;Ke===!0&&(Rn=oo(G,F,H),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Rn,xe));let ti=!1,Bi=!1,Yr=!1;const ot=Rn.getUniforms(),bt=xe.uniforms;if(M.useProgram(Rn.program)&&(ti=!0,Bi=!0,Yr=!0),G.id!==U&&(U=G.id,Bi=!0),xe.needsLights){const ct=Fx(w.state.lightProbeGridArray,H);xe.lightProbeGrid!==ct&&(xe.lightProbeGrid=ct,Bi=!0)}if(ti||B!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(k,"projectionMatrix",T.projectionMatrix),ot.setValue(k,"viewMatrix",T.matrixWorldInverse);const Vi=ot.map.cameraPosition;Vi!==void 0&&Vi.setValue(k,It.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Bi=!0,Yr=!0)}if(xe.needsLights&&(_n.state.directionalShadowMap.length>0&&ot.setValue(k,"directionalShadowMap",_n.state.directionalShadowMap,Z),_n.state.spotShadowMap.length>0&&ot.setValue(k,"spotShadowMap",_n.state.spotShadowMap,Z),_n.state.pointShadowMap.length>0&&ot.setValue(k,"pointShadowMap",_n.state.pointShadowMap,Z)),H.isSkinnedMesh){ot.setOptional(k,H,"bindMatrix"),ot.setOptional(k,H,"bindMatrixInverse");const ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(k,"boneTexture",ct.boneTexture,Z))}H.isBatchedMesh&&(ot.setOptional(k,H,"batchingTexture"),ot.setValue(k,"batchingTexture",H._matricesTexture,Z),ot.setOptional(k,H,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",H._indirectTexture,Z),ot.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",H._colorsTexture,Z));const zi=X.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&D.update(H,X,Rn),(Bi||xe.receiveShadow!==H.receiveShadow)&&(xe.receiveShadow=H.receiveShadow,ot.setValue(k,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(bt.envMapIntensity.value=F.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=pA()),Bi){if(ot.setValue(k,"toneMappingExposure",P.toneMappingExposure),xe.needsLights&&Bx(bt,Yr),ge&&G.fog===!0&&Ae.refreshFogUniforms(bt,ge),Ae.refreshMaterialUniforms(bt,G,ie,re,w.state.transmissionRenderTarget[T.id]),xe.needsLights&&xe.lightProbeGrid){const ct=xe.lightProbeGrid;bt.probesSH.value=ct.texture,bt.probesMin.value.copy(ct.boundingBox.min),bt.probesMax.value.copy(ct.boundingBox.max),bt.probesResolution.value.copy(ct.resolution)}yl.upload(k,rp(xe),bt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(yl.upload(k,rp(xe),bt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(k,"center",H.center),ot.setValue(k,"modelViewMatrix",H.modelViewMatrix),ot.setValue(k,"normalMatrix",H.normalMatrix),ot.setValue(k,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const ct=G.uniformsGroups;for(let Vi=0,Kr=ct.length;Vi<Kr;Vi++){const ap=ct[Vi];ne.update(ap,Rn),ne.bind(ap,Rn)}}return Rn}function Bx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function zx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,F,X){const G=j.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=F,j.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const X=j.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,X=0){N=T,$=F,q=X;let G=null,H=!1,ge=!1;if(T){const me=j.get(T);if(me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(T.viewport),ae.copy(T.scissor),ze=T.scissorTest,M.viewport(ee),M.scissor(ae),M.setScissorTest(ze),U=-1;return}else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(me.__hasExternalTextures)Z.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(me.__boundDepthTexture!==Oe){if(Oe!==null&&j.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);const Ce=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?G=Ce[F][X]:G=Ce[F],H=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?G=j.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?G=Ce[X]:G=Ce,ee.copy(T.viewport),ae.copy(T.scissor),ze=T.scissorTest}else ee.copy(Pe).multiplyScalar(ie).floor(),ae.copy(wt).multiplyScalar(ie).floor(),ze=We;if(X!==0&&(G=W),M.bindFramebuffer(k.FRAMEBUFFER,G)&&M.drawBuffers(T,G),M.viewport(ee),M.scissor(ae),M.setScissorTest(ze),H){const me=j.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,X)}else if(ge){const me=F;for(let we=0;we<T.textures.length;we++){const Ce=j.get(T.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Ce.__webglTexture,X,me)}}else if(T!==null&&X!==0){const me=j.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(T,F,X,G,H,ge,_e,me=0){if(!(T&&T.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){M.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ce=T.textures[me],Oe=Ce.format,Ve=Ce.type;if(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Oe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&X>=0&&X<=T.height-H&&k.readPixels(F,X,G,H,fe.convert(Oe),fe.convert(Ve),ge)}finally{const Ce=N!==null?j.get(N).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,G,H,ge,_e,me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(F>=0&&F<=T.width-G&&X>=0&&X<=T.height-H){M.bindFramebuffer(k.FRAMEBUFFER,we);const Ce=T.textures[me],Oe=Ce.format,Ve=Ce.type;if(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(F,X,G,H,fe.convert(Oe),fe.convert(Ve),0);const rt=N!==null?j.get(N).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,rt);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await PM(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.deleteBuffer(Re),k.deleteSync(Tt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){const G=Math.pow(2,-X),H=Math.floor(T.image.width*G),ge=Math.floor(T.image.height*G),_e=F!==null?F.x:0,me=F!==null?F.y:0;Z.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,_e,me,H,ge),M.unbindTexture()},this.copyTextureToTexture=function(T,F,X=null,G=null,H=0,ge=0){let _e,me,we,Ce,Oe,Ve,Re,rt,Tt;const Mt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(X!==null)_e=X.max.x-X.min.x,me=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,Oe=X.min.y,Ve=X.isBox3?X.min.z:0;else{const bt=Math.pow(2,-H);_e=Math.floor(Mt.width*bt),me=Math.floor(Mt.height*bt),T.isDataArrayTexture?we=Mt.depth:T.isData3DTexture?we=Math.floor(Mt.depth*bt):we=1,Ce=0,Oe=0,Ve=0}G!==null?(Re=G.x,rt=G.y,Tt=G.z):(Re=0,rt=0,Tt=0);const at=fe.convert(F.format),$t=fe.convert(F.type);let xe;F.isData3DTexture?(Z.setTexture3D(F,0),xe=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),xe=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),xe=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const _n=M.getParameter(k.UNPACK_ROW_LENGTH),Ke=M.getParameter(k.UNPACK_IMAGE_HEIGHT),Rn=M.getParameter(k.UNPACK_SKIP_PIXELS),ti=M.getParameter(k.UNPACK_SKIP_ROWS),Bi=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),M.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Ve);const Yr=T.isDataArrayTexture||T.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const bt=j.get(T),zi=j.get(F),ct=j.get(bt.__renderTarget),Vi=j.get(zi.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,ct.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Kr=0;Kr<we;Kr++)Yr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(T).__webglTexture,H,Ve+Kr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(F).__webglTexture,ge,Tt+Kr)),k.blitFramebuffer(Ce,Oe,_e,me,Re,rt,_e,me,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||j.has(T)){const bt=j.get(T),zi=j.get(F);M.bindFramebuffer(k.READ_FRAMEBUFFER,Y),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let ct=0;ct<we;ct++)Yr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,H,Ve+ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,H),ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zi.__webglTexture,ge,Tt+ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zi.__webglTexture,ge),H!==0?k.blitFramebuffer(Ce,Oe,_e,me,Re,rt,_e,me,k.COLOR_BUFFER_BIT,k.NEAREST):ot?k.copyTexSubImage3D(xe,ge,Re,rt,Tt+ct,Ce,Oe,_e,me):k.copyTexSubImage2D(xe,ge,Re,rt,Ce,Oe,_e,me);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ot?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(xe,ge,Re,rt,Tt,_e,me,we,at,$t,Mt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(xe,ge,Re,rt,Tt,_e,me,we,at,Mt.data):k.texSubImage3D(xe,ge,Re,rt,Tt,_e,me,we,at,$t,Mt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Re,rt,_e,me,at,$t,Mt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Re,rt,Mt.width,Mt.height,at,Mt.data):k.texSubImage2D(k.TEXTURE_2D,ge,Re,rt,_e,me,at,$t,Mt);M.pixelStorei(k.UNPACK_ROW_LENGTH,_n),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Rn),M.pixelStorei(k.UNPACK_SKIP_ROWS,ti),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Bi),ge===0&&F.generateMipmaps&&k.generateMipmap(xe),M.unbindTexture()},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){$=0,q=0,N=null,M.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}function mA(){const t=Se.useRef(null),[e,n]=Se.useState("App.jsx");return Se.useEffect(()=>{const i=t.current;if(!i)return;const r=i.clientWidth||540,s=i.clientHeight||460,a=new hx,o=new hn(45,r/s,.1,1e3);o.position.set(18,16,26),o.lookAt(0,2,0);const c=new Lx({alpha:!0,antialias:!0,powerPreference:"high-performance"});c.setSize(r,s),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(c.domElement);const u=new g1(16777215,.7);a.add(u);const p=new Zm(12058368,2.5,50);p.position.set(-6,12,10),a.add(p);const h=new Zm(58879,1.2,50);h.position.set(12,8,-6),a.add(h);const f=new ws;a.add(f);const m=new Hh(3.5,3.8,.8,32),_=new Cu({color:1118481,metalness:.8,roughness:.2,transparent:!0,opacity:.85}),E=new Ht(m,_);E.position.set(-7,2,-4),f.add(E);const v=new Xh(3.6,.08,16,64),d=new Lr({color:12058368,transparent:!0,opacity:.8}),g=new Ht(v,d);g.rotation.x=Math.PI/2,g.position.set(-7,2.45,-4),f.add(g);const S=new Ka(2.4,2),y=new Lr({color:12058368,wireframe:!0,transparent:!0,opacity:.55}),b=new Ht(S,y);b.position.set(-7,6.2,-4),f.add(b);const w=new ec(1.2,16,16),C=new Lr({color:16777215,wireframe:!0,transparent:!0,opacity:.7}),x=new Ht(w,C);x.position.set(-7,6.2,-4),f.add(x);const A=[{color:6413051,label:"React",pos:[-5.5,.8,6.5],rot:[.1,.4,0]},{color:6856803,label:"Node",pos:[-2.2,.8,7.2],rot:[0,.2,0]},{color:16244510,label:"JS",pos:[1.2,.8,7.6],rot:[.05,-.2,0]},{color:3634859,label:"Python",pos:[4.6,.8,7.2],rot:[-.05,.3,0]}],P=[],I=new jr(1.6,1.6,1.6);A.forEach(Te=>{const K=new Cu({color:1447446,metalness:.7,roughness:.2}),re=new Ht(I,K);re.position.set(Te.pos[0],Te.pos[1],Te.pos[2]),re.rotation.set(Te.rot[0],Te.rot[1],Te.rot[2]);const ie=new a1(I),De=new gx({color:Te.color}),Ue=new i1(ie,De);re.add(Ue),f.add(re),P.push({mesh:re,basePos:[...Te.pos],baseRot:[...Te.rot]})});const L=new jr(3.6,.3,2.2),W=new Cu({color:1717026,metalness:.4,roughness:.6}),Y=new Ht(L,W);Y.position.set(8.5,.4,4.5),Y.rotation.y=-Math.PI/8,f.add(Y);const z=new ec(.18,8,8),$=new Lr({color:12058368}),q=new Ht(z,$);q.position.set(9.6,.7,4.2),f.add(q);let N=18,U=16;const B=Te=>{const K=i.getBoundingClientRect(),re=((Te.clientX-K.left)/K.width-.5)*2,ie=((Te.clientY-K.top)/K.height-.5)*2;N=18+re*4,U=16-ie*3};i.addEventListener("pointermove",B);const ee=()=>{if(!i)return;const Te=i.clientWidth,K=i.clientHeight;o.aspect=Te/K,o.updateProjectionMatrix(),c.setSize(Te,K)};window.addEventListener("resize",ee);let ae;const ze=new wx,$e=()=>{ae=requestAnimationFrame($e),ze.update();const Te=ze.getElapsed();o.position.x+=(N-o.position.x)*.05,o.position.y+=(U-o.position.y)*.05,o.lookAt(0,2,0),b.rotation.y=Te*.4,b.rotation.x=Math.sin(Te*.3)*.15,x.rotation.y=-Te*.6,b.position.y=6.2+Math.sin(Te*1.5)*.25,x.position.y=6.2+Math.sin(Te*1.5)*.25,$.color.setHex(Math.sin(Te*8)>0?12058368:3359744),P.forEach(({mesh:K,basePos:re},ie)=>{K.position.y=re[1]+Math.sin(Te*2+ie*1.2)*.1}),c.render(a,o)};return $e(),()=>{cancelAnimationFrame(ae),i.removeEventListener("pointermove",B),window.removeEventListener("resize",ee),i&&c.domElement&&i.removeChild(c.domElement),m.dispose(),_.dispose(),v.dispose(),d.dispose(),S.dispose(),y.dispose(),w.dispose(),C.dispose(),I.dispose(),L.dispose(),W.dispose(),z.dispose(),$.dispose(),c.dispose()}},[]),l.jsxs("div",{className:"hero-workspace-3d-stage",children:[l.jsx("div",{ref:t,className:"workspace-webgl-mount","aria-hidden":"true"}),l.jsxs("div",{className:"laptop-3d-chassis",children:[l.jsxs("div",{className:"laptop-screen-bezel",children:[l.jsxs("div",{className:"laptop-notch",children:[l.jsx("span",{className:"camera-lens"}),l.jsx("span",{className:"camera-led"})]}),l.jsxs("div",{className:"ide-window-bar font-mono",children:[l.jsxs("div",{className:"window-dots",children:[l.jsx("span",{className:"dot dot-red"}),l.jsx("span",{className:"dot dot-yellow"}),l.jsx("span",{className:"dot dot-green"})]}),l.jsxs("div",{className:"ide-tabs",children:[l.jsxs("button",{type:"button",className:`ide-tab ${e==="App.jsx"?"active":""}`,onClick:()=>n("App.jsx"),children:[l.jsx("span",{className:"tab-icon text-accent",children:"⚛"}),l.jsx("span",{children:"App.jsx"})]}),l.jsxs("button",{type:"button",className:`ide-tab ${e==="AI_Model.py"?"active":""}`,onClick:()=>n("AI_Model.py"),children:[l.jsx("span",{className:"tab-icon",children:"🐍"}),l.jsx("span",{children:"AI_Model.py"})]})]}),l.jsx("span",{className:"ide-brand-badge font-mono",children:"React 18 · AI/ML"})]}),l.jsx("div",{className:"ide-code-body font-mono",children:e==="App.jsx"?l.jsx("pre",{className:"code-block",children:l.jsxs("code",{children:[l.jsx("span",{className:"c-keyword",children:"import"})," React, { useState, useEffect } ",l.jsx("span",{className:"c-keyword",children:"from"})," ",l.jsx("span",{className:"c-string",children:"'react'"}),";",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{className:"c-keyword",children:"function"})," ",l.jsx("span",{className:"c-fn",children:"App"}),"() {",l.jsx("br",{}),"  ",l.jsx("span",{className:"c-keyword",children:"const"})," [model, setModel] = ",l.jsx("span",{className:"c-fn",children:"useState"}),"(",l.jsx("span",{className:"c-string",children:"'LLM-Agent'"}),");",l.jsx("br",{}),"  ",l.jsx("span",{className:"c-keyword",children:"const"})," [telemetry, setTelemetry] = ",l.jsx("span",{className:"c-fn",children:"useState"}),"({ status: ",l.jsx("span",{className:"c-string",children:"'Active'"})," });",l.jsx("br",{}),l.jsx("br",{}),"  ",l.jsx("span",{className:"c-fn",children:"useEffect"}),"(() => {",l.jsx("br",{}),"    ",l.jsx("span",{className:"c-fn",children:"streamRoadmap"}),"({ role: ",l.jsx("span",{className:"c-string",children:"'AI/ML Engineer'"})," });",l.jsx("br",{}),"  }, []);",l.jsx("br",{}),l.jsx("br",{}),"  ",l.jsx("span",{className:"c-keyword",children:"return"})," (",l.jsx("br",{}),"    <",l.jsx("span",{className:"c-tag",children:"div"})," ",l.jsx("span",{className:"c-attr",children:"className"}),"=",l.jsx("span",{className:"c-string",children:'"intelligent-app"'}),">",l.jsx("br",{}),"      <",l.jsx("span",{className:"c-tag",children:"h1"}),">",l.jsx("span",{className:"c-highlight",children:"Building the Future with Code"}),"</",l.jsx("span",{className:"c-tag",children:"h1"}),">",l.jsx("br",{}),"    </",l.jsx("span",{className:"c-tag",children:"div"}),">",l.jsx("br",{}),"  );",l.jsx("br",{}),"}",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{className:"c-keyword",children:"export default"})," App;"]})}):l.jsx("pre",{className:"code-block",children:l.jsxs("code",{children:[l.jsx("span",{className:"c-keyword",children:"import"})," torch",l.jsx("br",{}),l.jsx("span",{className:"c-keyword",children:"from"})," transformers ",l.jsx("span",{className:"c-keyword",children:"import"})," AutoModelForCausalLM",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{className:"c-keyword",children:"class"})," ",l.jsx("span",{className:"c-fn",children:"IntelligentAgent"}),":",l.jsx("br",{}),"  ",l.jsx("span",{className:"c-keyword",children:"def"})," ",l.jsx("span",{className:"c-fn",children:"__init__"}),"(self):",l.jsx("br",{}),"    self.model = ",l.jsx("span",{className:"c-string",children:'"Groq-LLM-Inference"'}),l.jsx("br",{}),"    self.status = ",l.jsx("span",{className:"c-string",children:'"Optimal"'}),l.jsx("br",{}),l.jsx("br",{}),"  ",l.jsx("span",{className:"c-keyword",children:"def"})," ",l.jsx("span",{className:"c-fn",children:"predict_maintenance"}),"(self, sensors):",l.jsx("br",{}),"    ",l.jsx("span",{className:"c-comment",children:"# Real-time IoT Regression"}),l.jsx("br",{}),"    ",l.jsx("span",{className:"c-keyword",children:"return"})," self.model.",l.jsx("span",{className:"c-fn",children:"stream_telemetry"}),"(sensors)",l.jsx("br",{})]})})})]}),l.jsx("div",{className:"laptop-deck-base",children:l.jsx("div",{className:"laptop-trackpad"})})]})]})}function gA(){const[t,e]=zn({threshold:.1,triggerOnce:!0});return l.jsx("section",{id:"home",ref:t,className:`hero-section ${e?"is-visible":""}`,"aria-label":"Hero Introduction",children:l.jsxs("div",{className:"hero-grid grid-12",children:[l.jsxs("div",{className:"hero-content-col",children:[l.jsxs("div",{className:"hero-greeting-pill font-mono",children:[l.jsx("span",{className:"greeting-status-dot","aria-hidden":"true"}),l.jsx("span",{children:"Hey, I'm"})]}),l.jsxs("h1",{className:"hero-main-title font-heading",children:["Kamana ",l.jsx("span",{className:"highlight-lime",children:"Agrawal"})]}),l.jsxs("p",{className:"hero-focus-subtitle font-heading",children:["AI/ML Enthusiast ",l.jsx("span",{className:"subtitle-divider",children:"|"})," Full-Stack Developer"]}),l.jsxs("div",{className:"hero-description-block font-body",children:[l.jsx("p",{children:"Building AI, Web & IoT solutions for a smarter tomorrow."}),l.jsx("p",{children:"Turning ideas into intelligent solutions."})]}),l.jsxs("div",{className:"hero-meta-badges-row font-mono",children:[l.jsxs("div",{className:"meta-badge-card",children:[l.jsx(zv,{size:18,className:"meta-icon text-accent"}),l.jsxs("div",{className:"meta-info",children:[l.jsx("span",{className:"meta-title font-heading",children:"B.Tech CSE Student"}),l.jsx("span",{className:"meta-sub",children:"College of Engineering Bhubaneswar"})]})]}),l.jsxs("div",{className:"meta-badge-card",children:[l.jsx(Hv,{size:18,className:"meta-icon text-accent"}),l.jsxs("div",{className:"meta-info",children:[l.jsx("span",{className:"meta-title font-heading",children:"Bhubaneswar, Odisha"}),l.jsx("span",{className:"meta-sub",children:"India"})]})]}),l.jsxs("div",{className:"meta-badge-card",children:[l.jsx(GS,{size:18,className:"meta-icon text-accent"}),l.jsxs("div",{className:"meta-info",children:[l.jsx("span",{className:"meta-title font-heading",children:"Aspiring"}),l.jsx("span",{className:"meta-sub",children:"AI/ML Engineer"})]})]})]}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsxs("a",{href:"#projects",className:"btn-hero-primary font-body",children:[l.jsx("span",{children:"View My Work"}),l.jsx(li,{size:18,"aria-hidden":"true"})]}),l.jsxs("a",{href:Qe.resumeUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-hero-secondary font-body",children:[l.jsx("span",{children:"Download Resume"}),l.jsx(kv,{size:16,"aria-hidden":"true"})]})]})]}),l.jsx("div",{className:"hero-visual-col",children:l.jsx(mA,{})})]})})}function vA({maxTilt:t=12,scale:e=1.02,speed:n=400,glare:i=!0}={}){const r=Se.useRef(null),[s,a]=Se.useState({}),[o,c]=Se.useState({}),[u,p]=Se.useState(!1),h=Se.useCallback(_=>{if(!r.current)return;const E=r.current.getBoundingClientRect(),v=_.clientX-E.left,d=_.clientY-E.top,g=E.width,S=E.height,y=v/g*2-1,w=-((d/S*2-1)*t).toFixed(2),C=(y*t).toFixed(2);if(a({transform:`perspective(1000px) rotateX(${w}deg) rotateY(${C}deg) scale3d(${e}, ${e}, ${e})`,transition:"transform 80ms ease-out"}),i){const x=v/g*100,A=d/S*100;c({opacity:.18,background:`radial-gradient(circle at ${x}% ${A}%, rgba(183, 255, 0, 0.45) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)`})}},[t,e,i]),f=Se.useCallback(()=>{p(!0)},[]),m=Se.useCallback(()=>{p(!1),a({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:`transform ${n}ms cubic-bezier(0.16, 1, 0.3, 1)`}),i&&c({opacity:0,transition:`opacity ${n}ms ease-out`})},[n,i]);return{ref:r,style:s,glareStyle:o,isHovered:u,bind:{onMouseMove:h,onMouseEnter:f,onMouseLeave:m}}}function Fi({children:t,className:e="",maxTilt:n=10,scale:i=1.02,glare:r=!0,...s}){const{ref:a,style:o,glareStyle:c,bind:u}=vA({maxTilt:n,scale:i,glare:r});return l.jsxs("div",{ref:a,className:`tilt-card-3d ${e}`,style:o,...u,...s,children:[r&&l.jsx("div",{className:"tilt-card-glare",style:c,"aria-hidden":"true"}),l.jsx("div",{className:"tilt-card-inner",children:t})]})}function xA(){const[t,e]=zn({threshold:.15,triggerOnce:!0}),n=[{id:"full-stack",icon:Bv,title:"Full-Stack Development",desc:"React, Node.js, FastAPI, REST APIs & Cloud Architecture"},{id:"ai-ml",icon:bh,title:"AI/ML Solutions",desc:"LLMs, Prompt Engineering, Predictive Models & Real-Time AI"},{id:"web-dev",icon:RS,title:"Web Development",desc:"Responsive, pixel-perfect, accessible & high-performance UIs"},{id:"iot",icon:Sc,title:"IoT Systems",desc:"ESP32, Raspberry Pi, Arduino telemetry & embedded sensors"},{id:"ui-ux",icon:LS,title:"UI/UX Design",desc:"Design systems, modern typography, glassmorphism & 3D"}];return l.jsx("section",{id:"what-i-do",ref:t,className:`what-i-do-section ${e?"is-visible":""}`,"aria-label":"What I Do — Core Capabilities",children:l.jsxs("div",{className:"what-i-do-container",children:[l.jsxs("div",{className:"what-i-do-anchor",children:[l.jsxs("div",{className:"anchor-header font-mono",children:[l.jsx("span",{className:"anchor-dot"}),l.jsx("span",{children:"What I Do"})]}),l.jsx("p",{className:"anchor-desc font-body",children:"I build end-to-end digital solutions that are smart, scalable, and user-focused."}),l.jsxs("a",{href:"#projects",className:"anchor-link font-body",children:[l.jsx("span",{children:"Explore All"}),l.jsx(Th,{size:16,"aria-hidden":"true"})]})]}),l.jsx("div",{className:"pillars-grid",children:n.map(i=>{const r=i.icon;return l.jsx(Fi,{maxTilt:10,scale:1.03,className:"pillar-tilt-wrap",children:l.jsxs("div",{className:"pillar-card",children:[l.jsx("div",{className:"pillar-icon-wrapper",children:l.jsx(r,{size:28,className:"pillar-icon"})}),l.jsx("h3",{className:"pillar-title font-heading",children:i.title})]})},i.id)})})]})})}const _A=[{id:"etl-1",year:"2024",month:"Sept",badge:"Foundation",label:"B.Tech CSE Begins",subtitle:"College of Engineering Bhubaneswar",detail:"BPUT, Rourkela · Batch of 2028",tags:["Data Structures","C/C++","OOP Logic"],icon:zv,color:"#b7ff00",above:!0},{id:"etl-2",year:"2025",month:"Mid",badge:"Certification",label:"IoT Specialization",subtitle:"UC Irvine · Coursera",detail:"5 Specialized Certifications",tags:["Arduino","Raspberry Pi","ESP32"],icon:FS,color:"#61dafb",above:!1},{id:"etl-3",year:"2025",month:"Late",badge:"Innovation",label:"Full-Stack & AI Projects",subtitle:"Skopos & OptiVolt AI",detail:"FastAPI, React & Embedded IoT",tags:["FastAPI","React","AWS EC2"],icon:OS,color:"#ff9800",above:!0},{id:"etl-4",year:"2026",month:"Jan",badge:"Research",label:"Research Published",subtitle:"Peer-Reviewed Journal",detail:"Sensor Network Telemetry & Analytics",tags:["IoT","Data Logging","Paper"],icon:Ch,color:"#c084fc",above:!1},{id:"etl-5",year:"2026",month:"Jun",badge:"Experience",label:"4 Industry Internships",subtitle:"SuuSri AI · Dipvision · Urban Grih · IBM",detail:"Gen AI, Cloud & Full-Stack Engineering",tags:["Gen AI","LLMs","React","Cloud"],icon:Ah,color:"#ffd700",above:!0},{id:"etl-6",year:"2028",month:"Aug",badge:"Milestone",label:"Expected Graduation",subtitle:"B.Tech — Computer Science",detail:"College of Engineering Bhubaneswar",tags:["Batch of 2028","Engineer"],icon:kr,color:"#b7ff00",above:!1,isFuture:!0}];function yA(){const[t,e]=zn({threshold:.15,triggerOnce:!0}),[n,i]=Se.useState(null),r=Se.useRef(null),s=a=>{if(r.current){const o=a==="left"?-340:340;r.current.scrollBy({left:o,behavior:"smooth"})}};return l.jsxs("div",{ref:t,className:`etl-container ${e?"is-in-view":""}`,"aria-label":"Education and Journey Timeline",children:[l.jsxs("div",{className:"etl-header-row",children:[l.jsxs("div",{className:"etl-title-group",children:[l.jsxs("div",{className:"etl-pill font-mono",children:[l.jsx("span",{className:"etl-pill-dot"}),l.jsx("span",{children:"Academic & Growth Timeline"})]}),l.jsx("p",{className:"etl-subtitle font-body",children:"From B.Tech CSE foundation to specialized IoT, published research, 4 internships & graduation."})]}),l.jsxs("div",{className:"etl-nav-controls font-mono",children:[l.jsx("span",{className:"etl-hint-text",children:"Scroll or drag"}),l.jsx("button",{onClick:()=>s("left"),className:"etl-nav-btn","aria-label":"Scroll left",children:l.jsx(MS,{size:16})}),l.jsx("button",{onClick:()=>s("right"),className:"etl-nav-btn","aria-label":"Scroll right",children:l.jsx(ES,{size:16})})]})]}),l.jsx("div",{className:"etl-scroll-stage",ref:r,children:l.jsxs("div",{className:"etl-track-canvas",children:[l.jsxs("div",{className:"etl-laser-rail",children:[l.jsx("div",{className:"etl-laser-glow"}),l.jsx("div",{className:"etl-laser-fill",style:{width:e?"100%":"0%"}})]}),l.jsx("div",{className:"etl-nodes-row",children:_A.map((a,o)=>{const c=a.icon,u=n===a.id;return l.jsxs("div",{className:`etl-station ${a.above?"etl-pos-above":"etl-pos-below"} ${u?"is-active":""} ${a.isFuture?"is-future":""}`,style:{"--node-color":a.color,"--station-delay":`${o*80}ms`},onMouseEnter:()=>i(a.id),onMouseLeave:()=>i(null),children:[l.jsxs("div",{className:`etl-card-bubble ${a.above?"etl-card-pos-top":"etl-card-pos-bottom"}`,children:[l.jsxs("div",{className:"etl-card-topbar",children:[l.jsx("div",{className:"etl-icon-badge",style:{color:a.color,borderColor:`${a.color}40`,background:`${a.color}15`},children:l.jsx(c,{size:14})}),l.jsxs("span",{className:"etl-date-badge font-mono",style:{color:a.color,borderColor:`${a.color}35`},children:[a.month," ",a.year]})]}),l.jsx("h4",{className:"etl-card-heading font-heading",children:a.label}),l.jsx("p",{className:"etl-card-org font-body",children:a.subtitle}),l.jsx("p",{className:"etl-card-detail font-mono",children:a.detail}),a.tags&&l.jsx("div",{className:"etl-tags-row",children:a.tags.map((p,h)=>l.jsx("span",{className:"etl-tag-chip font-mono",children:p},h))})]}),l.jsx("div",{className:`etl-laser-stem ${a.above?"etl-stem-pos-top":"etl-stem-pos-bottom"}`}),l.jsxs("div",{className:"etl-node-anchor",children:[l.jsx("div",{className:"etl-node-core"}),l.jsx("div",{className:"etl-node-ring"}),l.jsx("div",{className:"etl-node-pulse"})]})]},a.id)})})]})})]})}function SA(){const[t,e]=zn({threshold:.15,triggerOnce:!0}),n=[{id:"projects",num:"10+",label:"Projects Completed",icon:Pd,color:"#61dafb"},{id:"internships",num:"4+",label:"Internships Completed & Active",icon:Dd,color:"#ffd700"},{id:"experience",num:"2+",label:"Years of Coding",icon:Bv,color:"#b7ff00"},{id:"dedication",num:"100%",label:"Dedication & Consistency",icon:Vv,color:"#ff9800"}];return l.jsxs("section",{id:"about",ref:t,className:`about-section ${e?"is-visible":""}`,"aria-label":"About Me Section",children:[l.jsxs("div",{className:"about-mockup-grid",children:[l.jsx("div",{className:"about-visual-col",children:l.jsx(Fi,{maxTilt:8,scale:1.02,className:"about-study-tilt",children:l.jsxs("div",{className:"about-study-card",children:[l.jsx("div",{className:"study-avatar-container",children:l.jsxs("div",{className:"avatar-ring font-mono",children:[l.jsx("img",{src:Qe.profileImage,alt:Qe.name,className:"study-avatar-img"}),l.jsxs("div",{className:"avatar-status-badge font-mono",children:[l.jsx("span",{className:"status-dot-lime"}),l.jsx("span",{children:"Active Developer"})]})]})}),l.jsxs("div",{className:"book-stack-container font-mono",children:[l.jsxs("div",{className:"book-spine book-1",children:[l.jsx("span",{className:"book-marker"}),l.jsx("span",{className:"book-title",children:"Clean Code"})]}),l.jsxs("div",{className:"book-spine book-2",children:[l.jsx("span",{className:"book-marker"}),l.jsx("span",{className:"book-title",children:"System Design"})]}),l.jsxs("div",{className:"book-spine book-3",children:[l.jsx("span",{className:"book-marker"}),l.jsx("span",{className:"book-title",children:"The Pragmatic Programmer"})]})]})]})})}),l.jsxs("div",{className:"about-narrative-col",children:[l.jsxs("div",{className:"about-tag font-mono",children:[l.jsx("span",{children:"About Me"}),l.jsx("span",{className:"about-tag-dot"})]}),l.jsxs("h2",{className:"about-headline font-heading",children:["Passionate about building"," ",l.jsx("span",{className:"highlight-lime",children:"intelligent"})," & impactful solutions."]}),l.jsxs("p",{className:"about-summary-text font-body",children:["I'm a B.Tech CSE student at ",l.jsx("strong",{children:"College of Engineering Bhubaneswar"})," (under Biju Patnaik University of Technology, Rourkela) with a strong passion for AI/ML, full-stack web development, and IoT embedded systems."]}),l.jsx("p",{className:"about-sub-text font-body",children:"Currently developing full-stack applications with React & FastAPI, exploring LLM prompt architectures, publishing sensor network research, and engineering microcontroller telemetry."}),l.jsxs("a",{href:"#skills",className:"btn-more-about font-body",children:[l.jsx("span",{children:"Explore Skills & Stack"}),l.jsx(Th,{size:16,"aria-hidden":"true"})]})]}),l.jsx("div",{className:"about-metrics-col",children:l.jsx("div",{className:"metrics-2x2-grid",children:n.map(i=>{const r=i.icon;return l.jsx(Fi,{maxTilt:10,scale:1.04,className:"metric-tilt-wrap",children:l.jsxs("div",{className:"metric-card",children:[l.jsx("div",{className:"metric-icon-box",style:{borderColor:`${i.color}33`,background:`${i.color}14`},children:l.jsx(r,{size:22,style:{color:i.color}})}),l.jsx("span",{className:"metric-value font-heading",children:i.num}),l.jsx("span",{className:"metric-label font-body",children:i.label})]})},i.id)})})})]}),l.jsx(yA,{})]})}function MA({project:t,onSelectCaseStudy:e}){const{id:n,title:i,tagline:r,description:s,category:a,technologies:o}=t,c=()=>n==="optivolt-ai"?l.jsxs("div",{className:"card-media-graphic media-graphic--optivolt font-heading",children:[l.jsx(Sc,{size:36,className:"media-icon"}),l.jsx("span",{className:"graphic-title",children:"OptiVolt AI"}),l.jsx("span",{className:"graphic-sub font-mono",children:"SOLAR TELEMETRY & PREDICTIVE MAINTENANCE"})]}):l.jsxs("div",{className:"card-media-graphic media-graphic--skopos font-heading",children:[l.jsx(Wl,{size:36,className:"media-icon"}),l.jsx("span",{className:"graphic-title",children:"Skopos"}),l.jsx("span",{className:"graphic-sub font-mono",children:"AI CAREER & LEARNING ADVISOR"})]});return l.jsx(Fi,{maxTilt:6,scale:1.015,className:"project-card-tilt-wrap",children:l.jsxs("article",{id:`project-${n}`,className:"dark-project-card","aria-labelledby":`project-title-${n}`,children:[l.jsx("div",{className:"card-media-wrapper",onClick:()=>e(t),children:c()}),l.jsxs("div",{className:"card-info-content",children:[l.jsxs("div",{className:"card-title-row",children:[l.jsx("h3",{id:`project-title-${n}`,className:"project-card-title font-heading",children:l.jsx("button",{type:"button",onClick:()=>e(t),className:"title-link-btn",children:i})}),l.jsx("button",{type:"button",onClick:()=>e(t),className:"arrow-link-btn","aria-label":`View ${i} details`,children:l.jsx(li,{size:20})})]}),l.jsx("p",{className:"card-desc font-body",children:r||s}),l.jsx("div",{className:"card-tags-row",children:o.map(u=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:u},u))})]})]})})}const $n=[{id:"skopos",slug:"skopos",title:"Skopos — AI Career & Learning Advisor",number:"01",tagline:"Full-stack AI web application streaming personalized career and learning roadmaps in real time.",description:"Skopos is a full-stack AI web application that turns a short intake form into a personalized, AI-generated career and learning roadmap — streamed live, section by section, into a structured interface with phased timelines, skill-gap analysis, and curated resources. Built end-to-end with a FastAPI backend, Groq-powered LLM integration behind a swappable client architecture, Server-Sent Events for real-time streaming, and a fully containerized deployment on AWS EC2. Includes a 25-test automated suite and a custom-branded frontend built without any JS framework.",year:2025,category:"Full-Stack AI Web App",role:"Full-Stack & AI Engineer",status:"Deployed on AWS EC2",layout:"editorial",technologies:["Python","FastAPI","Groq API","Docker","AWS EC2","SSE Streaming","Pytest","JavaScript"],heroImage:null,problem:"CS students and career switchers experience decision paralysis when trying to navigate vast software fields without structured, personalized learning benchmarks.",solution:"Engineered a high-performance FastAPI service integrating Groq LLMs behind an isolated swappable client contract, streaming section-by-section roadmaps via Server-Sent Events.",keyFeatures:["Personalized, AI-generated learning roadmaps with phased timelines & skill-gap analysis","Real-time Server-Sent Events (SSE) streaming output parsed into structured UI components","Layered backend architecture (FastAPI, Pydantic validation, swappable AI client wrapper)","Rate limiting, structured error handling, 25-test automated pytest suite, Docker & AWS EC2 deployment"],contribution:"Designed end-to-end architecture: FastAPI backend, SSE client parser, pytest test suite, multi-stage Docker build, and AWS EC2 deployment.",learnings:"Mastered LLM structured prompt contracts, SSE streaming protocols, swappable provider abstraction layers, and containerized cloud deployment.",github:"https://github.com/Kamana5812/skopos",liveDemo:"http://16.171.69.34:8000/"},{id:"optivolt-ai",slug:"optivolt-ai",title:"OptiVolt AI — Solar Performance & Predictive Maintenance",number:"02",tagline:"IoT & AI-based solar monitoring system providing real-time environmental telemetry and local predictive maintenance alerts.",description:`OptiVolt AI is an IoT and AI-based solar monitoring system designed to identify environmental conditions that can reduce solar-panel performance and provide early maintenance alerts. The prototype uses an ESP32 with temperature, humidity, light-intensity, and particulate/dust sensing to collect real-time environmental data.

A lightweight regression-based prediction model processes these sensor readings locally to estimate a solar-panel performance score and classify operating conditions as Optimal, Moderate, or Low. The system includes LED and buzzer alerts, night-mode logic to prevent false low-performance warnings when sunlight is unavailable, and an offline web dashboard hosted directly by the ESP32.

The ESP32 operates as its own Wi-Fi access point, allowing users to connect through a phone or laptop and monitor readings without an external router, cloud service, or internet connection. The project explores an offline-first, low-cost approach to predictive solar maintenance, particularly for remote and low-connectivity environments.`,year:2025,category:"IoT & Embedded ML System",role:"Embedded Systems & ML Engineer",status:"Completed Prototype",layout:"technical",technologies:["ESP32","C/C++","Arduino Framework","IoT","Embedded Systems","Regression Modeling","HTML/CSS/JS","DHT11","LDR","GP2Y1010AU0F"],heroImage:null,problem:"Solar panels frequently lose operational efficiency in remote areas due to dust accumulation and extreme thermal conditions, while lacking internet access for cloud-based monitoring.",solution:"Built an offline-first ESP32 access point hosting a local web dashboard that runs on-device regression modeling for real-time performance classification and maintenance alerts.",keyFeatures:["Real-time environmental monitoring (Temperature, Humidity, Light Intensity, Particulate/Dust Sensing)","Local AI/ML-based regression model estimating panel performance scores (Optimal, Moderate, Low)","Dust-risk monitoring, LED/buzzer maintenance alerts, and night-mode detection","Offline ESP32 Wi-Fi Access Point dashboard operating without routers or cloud dependency"],plannedFeatures:["Direct voltage/current measurement for true electrical efficiency calculation","TinyML-based models & predictive cleaning triggers","Automatic panel cleaning & solar tracking mechanism","LoRa communication, historical data logging & hybrid offline/cloud analytics"],contribution:"Programmed ESP32 C/C++ firmware, sensor drivers (DHT11, LDR, GP2Y1010AU0F), regression inference algorithm, and HTTP web server dashboard.",learnings:"Mastered embedded C/C++ firmware development, on-device machine learning inference, and offline access point web server architectures.",github:"https://github.com/Kamana5812/optivolt-ai",liveDemo:"https://optivolt-ai.streamlit.app"}];function EA({onSelectCaseStudy:t}){const[e,n]=zn({threshold:.05,triggerOnce:!0}),[i,r]=Se.useState("All"),s=["All","AI & LLMs","IoT & Embedded","Full-Stack"],a=$n.filter(o=>i==="All"?!0:i==="AI & LLMs"?o.technologies.some(c=>c.includes("Groq")||c.includes("AI")||c.includes("LLM")||c.includes("Regression")):i==="IoT & Embedded"?o.technologies.some(c=>c.includes("ESP32")||c.includes("IoT")||c.includes("C/C++")):i==="Full-Stack"?o.technologies.some(c=>c.includes("FastAPI")||c.includes("Docker")||c.includes("AWS")||c.includes("React")):!0);return l.jsxs("section",{id:"projects",ref:e,className:`featured-projects-section ${n?"is-visible":""}`,"aria-label":"Featured Projects",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// FEATURED PROJECTS"})}),l.jsxs("div",{className:"projects-header-row",children:[l.jsxs("h2",{className:"projects-main-heading font-heading",children:["Featured ",l.jsx("span",{className:"highlight-lime",children:"Systems & Apps"})]}),l.jsx("div",{className:"projects-filter-bar font-mono",children:s.map(o=>l.jsx("button",{type:"button",className:`project-filter-pill ${i===o?"active":""}`,onClick:()=>r(o),children:l.jsx("span",{children:o})},o))})]}),l.jsx("div",{className:"featured-projects-grid",children:a.map(o=>l.jsx(MA,{project:o,onSelectCaseStudy:t},o.id))})]})}const Cf=[{category:"FRONTEND",icon:"Layout",skills:["React.js","JavaScript (ES6+)","HTML5","CSS3","Responsive Web Design"]},{category:"BACKEND",icon:"Server",skills:["Node.js","Express.js","MongoDB","FastAPI","REST APIs"]},{category:"PROGRAMMING & CORE",icon:"Terminal",skills:["C Programming","Python","Data Structures & Algorithms (DSA)","Object-Oriented Logic"]},{category:"IOT & EMBEDDED",icon:"Database",skills:["Internet of Things (IoT)","Raspberry Pi","Arduino Platform","ESP32 Sensors"]},{category:"AI & EXPLORATION",icon:"Brain",skills:["AI APIs","Prompt Engineering","Machine Learning Fundamentals","LLM Integration"]},{category:"TOOLS & DEVOPS",icon:"Wrench",skills:["Git","GitHub","Docker","AWS EC2","VS Code","Vite","Vercel"]},{category:"PROFESSIONAL & DESIGN",icon:"Figma",skills:["Communication","Active Listening","UI/UX Design","Responsive Interfaces"]}],Rf=[{topic:"Internet of Things (IoT) & Sensor Telemetry",status:"Certified / Active"},{topic:"Raspberry Pi & Python Hardware Scripts",status:"Certified"},{topic:"Arduino & C Programming Embedded Systems",status:"Certified"},{topic:"AI APIs & Predictive Analytics",status:"In Progress"},{topic:"LLM Applications & Prompt Engineering",status:"Exploring"},{topic:"Machine Learning Fundamentals",status:"Learning"}];function wA(){const[t,e]=zn({threshold:.1,triggerOnce:!0}),n=[Wa,bh,Sc,yS,IS,wS,Nh],i=Ds.useMemo(()=>{const r=localStorage.getItem("custom_ai_exploration");return r?JSON.parse(r):Rf},[]);return l.jsxs("section",{id:"ai-exploration",ref:t,className:`ai-exploration-section ${e?"is-visible":""}`,"aria-label":"AI Exploration Section",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// AI EXPLORATION"})}),l.jsxs("div",{className:"ai-header-wrapper",children:[l.jsxs("h2",{className:"ai-heading font-heading",children:["Exploring what's next in ",l.jsx("span",{className:"highlight-lime",children:"AI & Intelligent Systems"}),"."]}),l.jsx("p",{className:"ai-description font-body",children:"I'm actively expanding my engineering journey into Artificial Intelligence & Machine Learning—building real-time LLM applications, prompt workflows, and on-device intelligent telemetry."})]}),l.jsx("div",{className:"ai-areas-grid",children:i.map((r,s)=>{const a=n[s%n.length];return l.jsx(Fi,{maxTilt:8,scale:1.03,children:l.jsxs("div",{className:"ai-area-card",children:[l.jsxs("div",{className:"area-card-top font-mono",children:[l.jsx(a,{size:18,className:"area-icon"}),l.jsx("span",{className:"area-status-chip",children:r.status})]}),l.jsx("span",{className:"area-topic font-heading",children:r.topic})]})},r.topic)})})]})}const TA={Layout:jv,Server:VS,Terminal:Nh,Database:TS,Brain:bh,Wrench:Xv,Figma:DS};function bA(){const[t,e]=zn({threshold:.1,triggerOnce:!0}),n=Ds.useMemo(()=>{const i=localStorage.getItem("custom_skills");return i?JSON.parse(i):Cf},[]);return l.jsxs("section",{id:"skills",ref:t,className:`skills-section ${e?"is-visible":""}`,"aria-label":"Technical Capabilities",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// SKILLS"})}),l.jsx("h2",{className:"skills-main-heading font-heading",children:"What I work with."}),l.jsx("div",{className:"skills-capability-grid",children:n.map(i=>{const r=TA[i.icon]||jv;return l.jsxs("div",{className:"capability-column",children:[l.jsxs("div",{className:"capability-header font-heading",children:[l.jsx(r,{size:20,className:"cat-icon"}),l.jsx("h3",{className:"cat-title",children:i.category})]}),l.jsx("ul",{className:"skill-items-list font-body",children:i.skills.map(s=>l.jsxs("li",{className:"skill-item-row",children:[l.jsx("span",{className:"item-bullet font-mono",children:"•"}),l.jsx("span",{children:s})]},s))})]},i.category)})})]})}const tc=[{id:"exp-suusri",type:"Internship",title:"Full-Stack Developer Intern",organization:"SuuSri AI",location:"Bhubaneswar, Odisha, India",duration:"August 2026 – Present",isPlaceholder:!1,summary:"Selected as a Full-Stack Developer Intern at SuuSri AI, working on modern web applications, AI integration, APIs, and scalable backend services.",responsibilities:["Developing full-stack features and AI integrations for production web applications","Building robust RESTful APIs and connecting frontend interfaces with backend services","Participating in agile sprints, code reviews, and software architecture discussions"],technologies:["React.js","Python","FastAPI","REST APIs","AI/ML Integration","Git"],keyLearning:"Full-stack AI product development, production API design, and agile workflows."},{id:"exp-dipvision",type:"Internship",title:"Frontend Developer Intern",organization:"DIPVISION INFOTECH SOLUTION PRIVATE LIMITED",location:"India",duration:"June 2026 – Present",isPlaceholder:!1,summary:"Working as a Frontend Developer, building responsive and user-friendly web interfaces using React.js, JavaScript, HTML5, and CSS3.",responsibilities:["Building responsive and user-friendly web interfaces as part of the core development team","Translating wireframes and designs into semantic React UI components with cross-browser consistency","Collaborating with senior engineers to optimize frontend performance and page load speeds"],technologies:["React.js","JavaScript","HTML5","CSS3","Git","UI/UX"],keyLearning:"Production React component workflows, team collaboration, and responsive UI performance."},{id:"exp-urbangrih",type:"Internship",title:"Web Development Intern",organization:"Urban Grih",location:"India",duration:"June 2026 – August 2026",isPlaceholder:!1,summary:"Worked as a Web Development Intern, gaining hands-on experience building responsive and engaging web interfaces.",responsibilities:["Built and maintained responsive web interfaces to enhance overall user experience","Implemented reusable UI elements and optimized client-side interactivity using React and JavaScript","Participated in feature planning and design system implementations"],technologies:["React.js","JavaScript","HTML5","CSS3","UI/UX"],keyLearning:"User-centric frontend development, component modularity, and rapid feature iteration."},{id:"exp-bharatcares",type:"Internship",title:"Gen AI & Cloud Computing Intern",organization:"BharatCares (CSRBOX Group) · IBM SkillsBuild & AICTE",location:"Virtual / India",duration:"June 2026 – July 2026",isPlaceholder:!1,summary:"Completed the 6-week Virtual IBM SkillsBuild Academic Internship 2026 – Gen AI & Cloud Computing, offered in collaboration with AICTE.",responsibilities:["Built hands-on skills in Artificial Intelligence, Prompt Engineering, AI Application Development, Cloud Computing, and API Architecture","Developed, submitted, and presented a real-world AI project aligned with the UN Sustainable Development Goals (UN SDGs)","Completed IBM SkillsBuild learning curriculum and earned official IBM Credential Badge"],technologies:["Generative AI","Prompt Engineering","Large Language Models (LLM)","Cloud Computing","Amazon EC2","API Architecture"],keyLearning:"Generative AI architecture, LLM prompt engineering, cloud deployment on AWS EC2, and UN SDG-driven AI solutions."}],AA=[{id:"journey-01",period:"2026 — PRESENT",tag:"CURRENT FOCUS",title:"Full-Stack AI Engineering & Cloud Solutions",summary:"Working at SuuSri AI and Dipvision Infotech, building full-stack web applications, AI integrations, and cloud-deployed systems on AWS.",technologies:["React.js","Python","FastAPI","Gen AI / LLMs","AWS EC2","Docker"]},{id:"journey-02",period:"2026",tag:"INTERNSHIPS & CERTIFICATIONS",title:"Gen AI, Cloud & Web Development Internships",summary:"Completed IBM SkillsBuild Gen AI & Cloud Computing Internship (CSRBOX/AICTE) and web development internships at Urban Grih & Dipvision.",technologies:["Prompt Engineering","LLMs","Cloud Computing","React.js","JavaScript","UI/UX"]},{id:"journey-03",period:"2024 — PRESENT",tag:"ACADEMIC FOUNDATION",title:"B.Tech CSE & IoT Specialization",summary:"Pursuing Computer Science Engineering at College of Engineering Bhubaneswar, mastering C programming, DSA, and earning 5 IoT & Embedded Systems certifications from UC Irvine.",technologies:["C","DSA","Python","Raspberry Pi","Arduino","ESP32"]}],Eg=[{id:"hack-ibm-skillsbuild-2026",title:"IBM SkillsBuild National AI Project Showcase 2026",organizer:"IBM SkillsBuild, CSRBOX & AICTE",year:"2026",role:"Lead Developer & AI Architect",award:"Official National Project Certification",description:"Developed and presented a real-world Generative AI and cloud-deployed application aligned with the UN Sustainable Development Goals (UN SDGs). Engineered structured LLM prompt workflows and deployed scalable APIs on AWS EC2.",tags:["Generative AI","Prompt Engineering","AWS EC2","FastAPI","UN SDGs"]},{id:"hack-sih-innovation",title:"Smart Tech & IoT Innovation Challenge",organizer:"College of Engineering Bhubaneswar & Technical Society",year:"2025",role:"Embedded Systems Engineer",award:"Outstanding Prototype Award",description:"Built OptiVolt AI, an offline-first predictive solar maintenance device utilizing ESP32 microcontroller sensors and local machine learning regression modeling for remote environments without internet access.",tags:["ESP32","IoT","Embedded ML","C++","Sensors"]},{id:"hack-web-dev-hackathon",title:"Full-Stack Web Engineering Sprint",organizer:"University Technical Fest",year:"2024",role:"Full-Stack Developer",award:"Finalist & Best UI/UX Design",description:"Architected a responsive civic governance portal with real-time data visualizers and accessible React component systems.",tags:["React.js","JavaScript","UI/UX Design","REST APIs"]}];function CA(){const[t,e]=zn({threshold:.1,triggerOnce:!0}),[n,i]=Se.useState("internships"),r=Ds.useMemo(()=>{const a=localStorage.getItem("custom_experience");return a?JSON.parse(a):tc},[]),s=Ds.useMemo(()=>{const a=localStorage.getItem("custom_journey");return a?JSON.parse(a):AA},[]);return l.jsxs("section",{id:"journey",ref:t,className:`journey-section ${e?"is-visible":""}`,"aria-label":"Experience, Hackathons and Journey Section",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// EXPERIENCE & ACHIEVEMENTS"})}),l.jsxs("div",{className:"experience-header-row",children:[l.jsx("div",{children:l.jsxs("h2",{className:"journey-main-heading font-heading",children:["Practical experience. ",l.jsx("span",{className:"highlight-lime",children:"Continuous growth."})]})}),l.jsxs("div",{className:"exp-tabs-pill-bar font-mono",children:[l.jsxs("button",{type:"button",className:`exp-tab-btn ${n==="internships"?"active":""}`,onClick:()=>i("internships"),children:[l.jsx(Ah,{size:14}),l.jsxs("span",{children:["Internships (",r.length,")"]})]}),l.jsxs("button",{type:"button",className:`exp-tab-btn ${n==="hackathons"?"active":""}`,onClick:()=>i("hackathons"),children:[l.jsx(Dd,{size:14}),l.jsxs("span",{children:["Hackathons (",Eg.length,")"]})]}),l.jsxs("button",{type:"button",className:`exp-tab-btn ${n==="journey"?"active":""}`,onClick:()=>i("journey"),children:[l.jsx(Wl,{size:14}),l.jsxs("span",{children:["Growth Timeline (",s.length,")"]})]})]})]}),n==="internships"&&l.jsx("div",{className:"work-cards-grid",children:r.map(a=>l.jsx(Fi,{maxTilt:6,scale:1.015,className:"work-tilt-wrap",children:l.jsxs("div",{className:"work-experience-card",children:[l.jsxs("div",{className:"work-card-header font-mono",children:[l.jsx("span",{className:"work-type-badge",children:a.type}),l.jsxs("span",{className:"work-duration",children:[l.jsx(Ov,{size:13})," ",a.duration]})]}),l.jsx("h4",{className:"work-role-title font-heading",children:a.title}),l.jsxs("div",{className:"work-company-meta font-mono",children:[l.jsxs("span",{className:"company-name",children:[l.jsx(Fv,{size:14,className:"text-accent"})," ",a.organization]}),l.jsxs("span",{className:"company-loc",children:[l.jsx(Hv,{size:13})," ",a.location]})]}),l.jsx("p",{className:"work-summary font-body",children:a.summary}),l.jsx("ul",{className:"work-bullets-list font-body",children:a.responsibilities.map((o,c)=>l.jsxs("li",{children:["• ",o]},c))}),l.jsx("div",{className:"work-tech-chips font-mono",children:a.technologies.map(o=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:o},o))})]})},a.id))}),n==="hackathons"&&l.jsx("div",{className:"hackathons-grid",children:Eg.map(a=>l.jsx(Fi,{maxTilt:6,scale:1.015,className:"work-tilt-wrap",children:l.jsxs("article",{className:"hackathon-card",children:[l.jsxs("div",{className:"hack-card-top font-mono",children:[l.jsxs("div",{className:"hack-award-pill",children:[l.jsx(Dd,{size:14,className:"text-accent"}),l.jsx("span",{children:a.award})]}),l.jsx("span",{className:"hack-year font-mono",children:a.year})]}),l.jsx("h3",{className:"hack-title font-heading",children:a.title}),l.jsx("span",{className:"hack-organizer font-mono",children:a.organizer}),l.jsx("p",{className:"hack-desc font-body",children:a.description}),l.jsx("div",{className:"hack-tags-row font-mono",children:a.tags.map(o=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:o},o))})]})},a.id))}),n==="journey"&&l.jsx("div",{className:"journey-grid-compact font-mono",children:s.map(a=>l.jsxs("div",{className:"journey-compact-card",children:[l.jsxs("div",{className:"journey-card-header",children:[l.jsx("span",{className:"journey-period font-mono",children:a.period}),l.jsx("span",{className:"journey-tag-chip font-mono",children:a.tag})]}),l.jsx("h4",{className:"journey-item-title font-heading",children:a.title}),l.jsx("p",{className:"journey-item-summary font-body",children:a.summary}),l.jsx("div",{className:"journey-tech-chips font-mono",children:a.technologies.map(o=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:o},o))})]},a.id))})]})}const Nf=[{id:"pub-uwsn-localization",title:"A Comprehensive Survey of Recent Advances and Emerging Challenges in Underwater Sensor Network Localization",authors:["Suchismita Naik","Kamana Agrawal","Vaishnavi Bawane","Omm Prakash Das Mohapatra"],journal:"International Journal of Advanced Research",volume:"Volume 14, Issue 04",year:2026,month:"April",type:"Survey Paper",abstract:"A comprehensive survey of localization methods in underwater sensor networks (UWSNs), highlighting the significant differences between underwater and terrestrial networks. The paper discusses the challenges posed by acoustic communication — such as slow speed and low bandwidth — and explores how various localization algorithms address the requirements of emerging applications like offshore engineering.",topics:["Underwater Sensor Networks","Localization Algorithms","Acoustic Communication","IoT","Offshore Engineering"],researchGateUrl:null,journalUrl:null}],nc=[{id:"cert-ibm-skillsbuild-genai-cloud",name:"IBM SkillsBuild Gen AI & Cloud Computing Internship",organization:"BharatCares · IBM SkillsBuild & AICTE",issuer:"AICTE & IBM SkillsBuild",year:2026,credentialId:"BHIBMAC10046",documentUrl:"/certificates/ibm-skillsbuild-genai-cloud-internship.pdf",verificationUrl:"https://www.linkedin.com/in/kamana-agrawal-510146281/overlay/Certifications/843226216/treasury/?profileId=ACoAAESKy1wBcRk5c8Cm4EN_aGcJ_Ja6ddNpxG4",skillsCovered:["Generative AI","Cloud Computing","Prompt Engineering","AWS EC2","FastAPI"]},{id:"cert-intro-iot",name:"An Introduction to Programming the Internet of Things (IOT) Specialization",organization:"Coursera / UC Irvine",issuer:"University of California, Irvine",year:2025,documentUrl:"/certificates/iot-specialization-coursera.pdf",verificationUrl:"https://coursera.org/verify/specialization/CVOIUK51TF4T",skillsCovered:["IoT Architecture","Embedded Systems","Raspberry Pi","Arduino C","Microcontroller Telemetry","Sensors"]}];function RA({cert:t,onClose:e}){if(!t)return null;const n=t.documentUrl&&t.documentUrl.toLowerCase().endsWith(".pdf"),i=t.documentUrl&&(t.documentUrl.toLowerCase().endsWith(".png")||t.documentUrl.toLowerCase().endsWith(".jpg")||t.documentUrl.toLowerCase().endsWith(".jpeg")||t.documentUrl.toLowerCase().endsWith(".webp"));return l.jsx("div",{className:"cert-modal-backdrop",onClick:e,role:"dialog","aria-modal":"true",children:l.jsxs("div",{className:"cert-modal-card",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"cert-modal-header",children:[l.jsxs("div",{className:"cert-modal-badge font-mono",children:[l.jsx(Ld,{size:16,className:"text-accent"}),l.jsx("span",{children:"Verified Academic Credential"})]}),l.jsx("button",{type:"button",className:"cert-modal-close",onClick:e,"aria-label":"Close certificate modal",children:l.jsx(Xa,{size:18})})]}),l.jsxs("div",{className:"cert-modal-body",children:[l.jsx("div",{className:"cert-document-stage",children:t.documentUrl?n?l.jsx("iframe",{src:t.documentUrl,title:t.name,className:"cert-iframe-preview"}):i?l.jsx("img",{src:t.documentUrl,alt:t.name,className:"cert-image-preview"}):l.jsx("iframe",{src:t.documentUrl,title:t.name,className:"cert-iframe-preview"}):l.jsxs("div",{className:"cert-digital-certificate",children:[l.jsx("div",{className:"cert-seal-outer",children:l.jsx("div",{className:"cert-seal-inner",children:l.jsx(kr,{size:48,className:"text-accent"})})}),l.jsxs("div",{className:"cert-seal-text",children:[l.jsx("span",{className:"seal-org font-heading",children:t.organization}),l.jsx("h3",{className:"seal-course font-heading",children:t.name}),l.jsxs("span",{className:"seal-recipient font-mono",children:["Awarded to: ",l.jsx("strong",{children:"Kamana Agrawal"})]}),l.jsxs("span",{className:"seal-issuer font-mono",children:[t.issuer," · ",t.year]})]}),l.jsx("div",{className:"cert-seal-footer font-mono",children:l.jsxs("span",{className:"seal-verified-chip",children:[l.jsx(yc,{size:13}),l.jsx("span",{children:"Verified Authenticity"})]})})]})}),l.jsxs("div",{className:"cert-details-column",children:[l.jsxs("div",{className:"cert-details-top",children:[l.jsx("span",{className:"cert-issuer-label font-mono",children:t.issuer}),l.jsx("h3",{className:"cert-title font-heading",children:t.name}),l.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginTop:"4px"},children:[l.jsxs("span",{className:"cert-year-tag font-mono",children:["Issued: ",t.year]}),t.credentialId&&l.jsxs("span",{className:"cert-year-tag font-mono",style:{color:"var(--accent)"},children:["ID: ",t.credentialId]})]})]}),l.jsxs("div",{className:"cert-skills-block",children:[l.jsx("span",{className:"block-label font-mono",children:"VERIFIED COMPETENCIES"}),l.jsx("div",{className:"cert-skills-tags font-mono",children:t.skillsCovered.map(r=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:r},r))})]}),l.jsxs("div",{className:"cert-actions-row font-mono",children:[t.documentUrl&&l.jsxs("a",{href:t.documentUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-cert-download",children:[l.jsx(bS,{size:14}),l.jsx("span",{children:"Download File"})]}),t.verificationUrl&&l.jsxs("a",{href:t.verificationUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-cert-external",children:[l.jsx("span",{children:"Open Verification Link"}),l.jsx(AS,{size:14})]})]})]})]})]})})}function NA(){const[t,e]=zn({threshold:.1,triggerOnce:!0}),[n,i]=Se.useState(null),r=Ds.useMemo(()=>{const s=localStorage.getItem("custom_certifications");return s?JSON.parse(s):nc},[]);return l.jsxs(l.Fragment,{children:[l.jsxs("section",{id:"publications",ref:t,className:`publications-section ${e?"is-visible":""}`,"aria-label":"Research and Verified Credentials",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// RESEARCH & VERIFIED CREDENTIALS"})}),l.jsxs("div",{className:"publications-grid-layout",children:[l.jsxs("div",{className:"research-paper-col",children:[l.jsx("div",{className:"sub-header-row",children:l.jsxs("h2",{className:"publications-title font-heading",children:["Published ",l.jsx("span",{className:"highlight-lime",children:"Research"})]})}),l.jsx("div",{className:"publications-list",children:Nf.map(s=>l.jsx(Fi,{maxTilt:6,scale:1.015,children:l.jsxs("article",{className:"publication-card",children:[l.jsxs("div",{className:"pub-card-header",children:[l.jsxs("span",{className:"pub-type-badge font-mono",children:[l.jsx(Nd,{size:13}),l.jsx("span",{children:s.type})]}),l.jsxs("span",{className:"pub-date font-mono",children:[l.jsx(Ov,{size:12}),l.jsxs("span",{children:[s.month," ",s.year]})]})]}),l.jsx("h3",{className:"pub-title font-heading",children:s.title}),l.jsxs("div",{className:"pub-authors font-body",children:[l.jsx(jS,{size:13,className:"pub-authors-icon"}),l.jsx("span",{children:s.authors.map((a,o)=>l.jsxs("span",{children:[l.jsx("span",{className:a==="Kamana Agrawal"?"author-highlight":"",children:a}),o<s.authors.length-1&&", "]},a))})]}),l.jsxs("div",{className:"pub-journal font-mono",children:[l.jsx(_S,{size:13}),l.jsxs("span",{children:[s.journal," — ",s.volume]})]}),l.jsx("p",{className:"pub-abstract font-body",children:s.abstract}),l.jsx("div",{className:"pub-topics-row font-mono",children:s.topics.map(a=>l.jsx("span",{className:"tag-chip tag-chip--mono",children:a},a))}),l.jsxs("div",{className:"pub-links-row font-mono",children:[s.journalUrl&&l.jsxs("a",{href:s.journalUrl,target:"_blank",rel:"noopener noreferrer",className:"pub-link",children:[l.jsx(Nd,{size:13}),l.jsx("span",{children:"Journal"}),l.jsx(li,{size:12})]}),s.researchGateUrl&&l.jsxs("a",{href:s.researchGateUrl,target:"_blank",rel:"noopener noreferrer",className:"pub-link",children:[l.jsx(Ch,{size:13}),l.jsx("span",{children:"ResearchGate"}),l.jsx(li,{size:12})]})]})]})},s.id))})]}),l.jsxs("div",{className:"credentials-col",id:"certifications",children:[l.jsx("div",{className:"sub-header-row",children:l.jsxs("h2",{className:"publications-title font-heading",children:[l.jsx(kr,{size:20,className:"text-accent"}),l.jsxs("span",{children:["Verified ",l.jsx("span",{className:"highlight-lime",children:"Certifications"})]})]})}),l.jsx("div",{className:"compact-certs-list",children:r.map(s=>l.jsxs("div",{className:"compact-cert-card font-body",children:[l.jsxs("div",{className:"cert-top font-mono",children:[l.jsx("span",{className:"cert-org",children:s.organization}),l.jsx("span",{className:"cert-year",children:s.year})]}),l.jsx("h4",{className:"cert-name font-heading",children:s.name}),l.jsx("div",{className:"cert-bottom font-mono",children:l.jsxs("button",{type:"button",onClick:()=>i(s),className:"btn-open-cert font-mono",children:[l.jsx(CS,{size:12}),l.jsx("span",{children:"View Certificate & Credential"})]})})]},s.id))})]})]})]}),n&&l.jsx(RA,{cert:n,onClose:()=>i(null)})]})}const ku=[{id:"end-suusri",quote:"Kamana demonstrates exceptional agility in grasping full-stack architecture and AI integrations. Her work connecting frontends with backend LLM services is structured, clean, and reliable.",name:"Engineering Lead",role:"AI & Full-Stack Lead",company:"SuuSri AI",tag:"Full-Stack Development",initials:"SA"},{id:"end-dipvision",quote:"A dedicated frontend developer who turns Figma designs into pixel-perfect React components. Her attention to responsive performance and clean code standards made a noticeable impact on our team's delivery speed.",name:"Senior Frontend Engineer",role:"Frontend Team Lead",company:"DIPVISION INFOTECH SOLUTION",tag:"React & UI/UX",initials:"DI"},{id:"end-ibm",quote:"Demonstrated strong grasp of Prompt Engineering, Cloud Deployment on AWS EC2, and API architecture during the 6-week IBM SkillsBuild program. Submitted a stellar UN-SDG aligned final project.",name:"Technical Mentor",role:"Gen AI & Cloud Computing Specialist",company:"BharatCares · IBM SkillsBuild & AICTE",tag:"Gen AI & Cloud",initials:"IB"},{id:"end-urbangrih",quote:"Kamana demonstrated a positive attitude, eagerness to learn, and genuine interest in web development. Her contributions to frontend implementation, responsive design, and website development were appreciated. She was sincere, dedicated, receptive to feedback, and professional throughout her internship.",name:"Mentor",role:"Web Development Mentor",company:"Urban Grih",tag:"Frontend & Web Dev",initials:"UG"}];function PA(){const[t,e]=zn({threshold:.1,triggerOnce:!0});return!ku||ku.length===0?null:l.jsxs("section",{id:"endorsements",ref:t,className:`endorsements-section ${e?"is-visible":""}`,"aria-label":"Mentorship and Team Endorsements",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// MENTORSHIP & TEAM FEEDBACK"})}),l.jsxs("div",{className:"endorsements-header",children:[l.jsxs("h2",{className:"endorsements-title font-heading",children:["Mentorship & ",l.jsx("span",{className:"highlight-lime",children:"Endorsements"})]}),l.jsx("p",{className:"endorsements-subtitle font-body",children:"Feedback from technical leads and mentors across my software engineering internships."})]}),l.jsx("div",{className:"endorsements-grid",children:ku.map(n=>l.jsx(Fi,{maxTilt:8,scale:1.02,className:"endorsement-tilt-wrap",children:l.jsxs("div",{className:"endorsement-card",children:[l.jsxs("div",{className:"end-card-top",children:[l.jsx(kS,{size:24,className:"text-accent quote-icon"}),l.jsx("span",{className:"end-tag font-mono",children:n.tag})]}),l.jsxs("blockquote",{className:"end-quote font-body",children:['"',n.quote,'"']}),l.jsxs("div",{className:"end-author-row",children:[l.jsx("div",{className:"author-avatar-initials font-mono",children:n.initials}),l.jsxs("div",{className:"author-meta",children:[l.jsx("span",{className:"author-name font-heading",children:n.name}),l.jsx("span",{className:"author-role font-mono",children:n.role}),l.jsxs("span",{className:"author-company font-mono",children:[l.jsx(Fv,{size:12,className:"text-accent"}),l.jsx("span",{children:n.company})]})]})]})]})},n.id))})]})}function IA(){const[t,e]=zn({threshold:.2,triggerOnce:!0});return l.jsx("section",{ref:t,className:`philosophy-section ${e?"is-visible":""}`,"aria-label":"Brand Philosophy & Mission",children:l.jsxs("div",{className:"philosophy-content",children:[l.jsxs("div",{className:"philosophy-motto-pill font-mono",children:[l.jsx(Wa,{size:14,className:"text-accent"}),l.jsx("span",{children:Qe.brandMotto})]}),l.jsxs("h2",{className:"philosophy-main-statement font-heading",children:["Turning ideas into ",l.jsx("span",{className:"highlight-lime",children:"intelligent solutions."})]}),l.jsx("p",{className:"philosophy-sub-statement font-body",children:Qe.missionTagline})]})})}function LA(){const[t,e]=zn({threshold:.1,triggerOnce:!0}),[n,i]=Se.useState({name:"",email:"",subject:"",message:""}),[r,s]=Se.useState({}),[a,o]=Se.useState("idle"),c=h=>{const{name:f,value:m}=h.target;i(_=>({..._,[f]:m})),r[f]&&s(_=>({..._,[f]:null}))},u=()=>{const h={};return n.name.trim()||(h.name="Name is required."),n.email.trim()?/\S+@\S+\.\S+/.test(n.email)||(h.email="Please enter a valid email address."):h.email="Email is required.",n.message.trim()||(h.message="Message cannot be empty."),h},p=async h=>{h.preventDefault();const f=u();if(Object.keys(f).length>0){s(f);return}o("submitting");try{const m=fetch(`https://formsubmit.co/ajax/${Qe.email}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n.name,email:n.email,message:n.message,_subject:`🚨 New Website Inquiry from ${n.name}`})});fetch("https://kamana-portfolio-api.onrender.com/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name,email:n.email,message:n.message})}).catch(()=>{}),(await m).ok?(o("success"),i({name:"",email:"",subject:"",message:""})):o("error")}catch(m){console.error("Contact Form Submission Error:",m),o("error")}};return l.jsxs("section",{id:"contact",ref:t,className:`contact-section ${e?"is-visible":""}`,"aria-label":"Contact Section",children:[l.jsx("div",{className:"section-marker-header font-mono",children:l.jsx("span",{className:"marker-label",children:"// LET'S CONNECT"})}),l.jsxs("div",{className:"contact-main-wrapper",children:[l.jsxs("h2",{className:"contact-heading font-heading",children:["Have an idea?",l.jsx("br",{}),"Let's build ",l.jsx("span",{className:"highlight-lime",children:"something great."})]}),l.jsx("p",{className:"contact-description font-body",children:"I'm always open to discussing interesting projects, collaborations, internships and opportunities to build meaningful digital experiences."}),l.jsxs("div",{className:"contact-actions-row",children:[l.jsx("a",{href:`mailto:${Qe.email}`,className:"btn-primary-lime font-body",children:l.jsx("span",{children:"Say Hello 👋"})}),l.jsxs("div",{className:"contact-social-row font-mono",children:[l.jsxs("a",{href:Qe.github,target:"_blank",rel:"noopener noreferrer",className:"social-direct-link",children:[l.jsx(Rh,{size:18}),l.jsx("span",{children:"GitHub"}),l.jsx(li,{size:14,className:"arrow-subtle"})]}),l.jsxs("a",{href:Qe.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-direct-link",children:[l.jsx(Gv,{size:18}),l.jsx("span",{children:"LinkedIn"}),l.jsx(li,{size:14,className:"arrow-subtle"})]}),l.jsxs("a",{href:`mailto:${Qe.email}`,className:"social-direct-link",children:[l.jsx(Id,{size:18}),l.jsx("span",{children:"Email"}),l.jsx(li,{size:14,className:"arrow-subtle"})]}),l.jsxs("a",{href:"https://wa.me/918093859132?text=Hi%20Kamana!%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect.",target:"_blank",rel:"noopener noreferrer",className:"social-direct-link",style:{color:"#25D366"},children:[l.jsx("span",{style:{fontWeight:"bold"},children:"💬 WhatsApp"}),l.jsx(li,{size:14,className:"arrow-subtle"})]})]})]}),l.jsxs("div",{className:"contact-form-frame",children:[l.jsxs("div",{className:"form-frame-top font-mono",children:[l.jsx("span",{children:"DIRECT INQUIRY FORM"}),l.jsx("span",{className:"honest-placeholder",style:{borderColor:"var(--color-lime)",color:"var(--color-lime)"},children:"Direct Email Endpoint"})]}),a==="success"?l.jsxs("div",{className:"form-success-box font-body",role:"alert","aria-live":"polite",children:[l.jsx(yc,{size:24,className:"success-icon"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-heading",children:"Message Delivered!"}),l.jsxs("p",{children:["Thank you! Your message was sent to Kamana's email (",Qe.email,")."]}),l.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"1rem",flexWrap:"wrap",alignItems:"center"},children:[l.jsx("a",{href:`https://wa.me/918093859132?text=${encodeURIComponent(`Hi Kamana! My Name: ${n.name||"Visitor"} (${n.email||""}). Message: ${n.message||""}`)}`,target:"_blank",rel:"noopener noreferrer",className:"btn-primary-lime font-mono",style:{background:"#25D366",borderColor:"#25D366",color:"#000",textDecoration:"none",display:"inline-flex",alignItems:"center",padding:"8px 14px",borderRadius:"4px",fontSize:"0.85rem"},children:"💬 Also Send via WhatsApp (+91 8093859132)"}),l.jsx("button",{type:"button",className:"reset-btn font-mono",onClick:()=>o("idle"),children:"Send Another Message"})]})]})]}):l.jsxs("form",{onSubmit:p,className:"contact-form",noValidate:!0,children:[a==="error"&&l.jsxs("div",{className:"error-msg font-mono",style:{marginBottom:"1rem",color:"#ff6b6b"},role:"alert",children:[l.jsx(bo,{size:16})," Something went wrong. Please try emailing directly at ",Qe.email]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{htmlFor:"contact-name",className:"form-label font-mono",children:["YOUR NAME ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("input",{type:"text",id:"contact-name",name:"name",className:`form-input font-body ${r.name?"has-error":""}`,placeholder:"e.g. Alex Morgan",value:n.name,onChange:c,"aria-invalid":r.name?"true":"false"}),r.name&&l.jsxs("span",{className:"error-msg font-mono",role:"alert",children:[l.jsx(bo,{size:14})," ",r.name]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{htmlFor:"contact-email",className:"form-label font-mono",children:["EMAIL ADDRESS ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("input",{type:"email",id:"contact-email",name:"email",className:`form-input font-body ${r.email?"has-error":""}`,placeholder:"alex@example.com",value:n.email,onChange:c,"aria-invalid":r.email?"true":"false"}),r.email&&l.jsxs("span",{className:"error-msg font-mono",role:"alert",children:[l.jsx(bo,{size:14})," ",r.email]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{htmlFor:"contact-message",className:"form-label font-mono",children:["MESSAGE ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("textarea",{id:"contact-message",name:"message",rows:"4",className:`form-textarea font-body ${r.message?"has-error":""}`,placeholder:"Write your message here...",value:n.message,onChange:c,"aria-invalid":r.message?"true":"false"}),r.message&&l.jsxs("span",{className:"error-msg font-mono",role:"alert",children:[l.jsx(bo,{size:14})," ",r.message]})]}),l.jsxs("button",{type:"submit",disabled:a==="submitting",className:"btn-form-submit font-body",children:[l.jsx(zS,{size:16}),l.jsx("span",{children:a==="submitting"?"Sending Message...":"Send Inquiry"})]})]})]})]})]})}function DA({project:t,onCloseCaseStudy:e,onSelectCaseStudy:n}){if(Se.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t.id]),!t)return null;const i=$n.findIndex(a=>a.id===t.id),r=$n[(i-1+$n.length)%$n.length],s=$n[(i+1)%$n.length];return l.jsx("article",{className:"case-study-page","aria-label":`Project Case Study: ${t.title}`,children:l.jsxs("div",{className:"case-study-container",children:[l.jsxs("div",{className:"case-study-top-nav font-mono",children:[l.jsxs("button",{type:"button",className:"back-btn",onClick:e,children:[l.jsx(vS,{size:16}),l.jsx("span",{children:"Back to All Projects"})]}),l.jsxs("span",{className:"case-study-breadcrumbs",children:["Projects / ",l.jsx("span",{className:"current-crumb",children:t.slug})]})]}),l.jsxs("header",{className:"case-study-header",children:[l.jsxs("div",{className:"case-study-tags-top",children:[l.jsx("span",{className:"status-badge",children:t.status}),l.jsx("span",{className:"tag-chip tag-chip--mono",children:t.category}),l.jsx("span",{className:"tag-chip tag-chip--mono",children:t.year})]}),l.jsx("h1",{className:"case-study-title font-heading",children:t.title}),l.jsx("p",{className:"case-study-tagline font-body",children:t.tagline}),l.jsxs("div",{className:"case-study-actions",children:[t.liveDemo&&t.liveDemo.startsWith("http")?l.jsxs("a",{href:t.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"btn-primary-lime",children:[l.jsx("span",{children:"Visit Live App"}),l.jsx(li,{size:18})]}):l.jsx("span",{className:"honest-placeholder font-mono",children:"Live Demo [Pending]"}),t.github&&t.github.startsWith("http")?l.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary-outline",children:[l.jsx(Rh,{size:18}),l.jsx("span",{children:"View Repository"}),l.jsx(li,{size:16})]}):l.jsx("span",{className:"honest-placeholder font-mono",children:"Repository [Private]"})]})]}),l.jsx("div",{className:"case-study-hero-visual font-mono",children:l.jsxs("div",{className:"visual-banner",children:[l.jsx(Sc,{size:32,className:"text-accent"}),l.jsxs("span",{children:["CASE STUDY ARCHITECTURE — ",t.title.toUpperCase()]})]})}),l.jsxs("div",{className:"case-study-body font-body",children:[l.jsxs("section",{className:"case-study-block",children:[l.jsx("span",{className:"block-eyebrow font-mono",children:"01 // PROBLEM & CONTEXT"}),l.jsx("h2",{className:"block-heading font-heading",children:"The Challenge"}),l.jsxs("div",{className:"problem-box",children:[l.jsx(gS,{size:20,className:"box-icon danger-icon"}),l.jsx("p",{children:t.problem})]})]}),l.jsxs("section",{className:"case-study-block",children:[l.jsx("span",{className:"block-eyebrow font-mono",children:"02 // ARCHITECTURAL SOLUTION"}),l.jsx("h2",{className:"block-heading font-heading",children:"The Solution"}),l.jsx("p",{className:"block-paragraph",children:t.solution})]}),l.jsxs("section",{className:"case-study-block",children:[l.jsx("span",{className:"block-eyebrow font-mono",children:"03 // FUNCTIONAL BREAKDOWN"}),l.jsx("h2",{className:"block-heading font-heading",children:"Key Features"}),l.jsx("ul",{className:"features-list",children:t.keyFeatures.map((a,o)=>l.jsxs("li",{className:"feature-item",children:[l.jsx(yc,{size:18,className:"feature-icon"}),l.jsx("span",{children:a})]},o))})]}),l.jsxs("section",{className:"case-study-block",children:[l.jsx("span",{className:"block-eyebrow font-mono",children:"04 // ROLE & IMPLEMENTATION"}),l.jsx("h2",{className:"block-heading font-heading",children:"What I Engineered"}),l.jsx("p",{className:"block-paragraph",children:t.contribution})]}),l.jsxs("section",{className:"case-study-block reflection-block",children:[l.jsx("span",{className:"block-eyebrow font-mono",children:"05 // TECHNICAL RETROSPECTIVE"}),l.jsx("h2",{className:"block-heading font-heading",children:"What I Learned"}),l.jsxs("div",{className:"learning-card",children:[l.jsx(Vv,{size:24,className:"learning-icon"}),l.jsx("p",{className:"learning-text",children:t.learnings})]})]})]}),l.jsxs("nav",{className:"case-study-footer-nav font-mono",children:[l.jsxs("button",{type:"button",className:"prev-next-btn",onClick:()=>n(r),children:[l.jsx("span",{className:"btn-label",children:"PREVIOUS PROJECT"}),l.jsxs("span",{className:"btn-title font-heading",children:["← ",r.title]})]}),l.jsxs("button",{type:"button",className:"prev-next-btn text-right",onClick:()=>n(s),children:[l.jsx("span",{className:"btn-label",children:"NEXT PROJECT"}),l.jsxs("span",{className:"btn-title font-heading",children:[s.title," →"]})]})]})]})})}function UA({onClose:t}){const[e,n]=Se.useState(""),[i,r]=Se.useState(sessionStorage.getItem("portfolio_admin_auth")==="true"),[s,a]=Se.useState(""),[o,c]=Se.useState("personal"),[u,p]=Se.useState(()=>{const N=localStorage.getItem("custom_personal_info");return N?JSON.parse(N):{...Qe}}),[h,f]=Se.useState(()=>{const N=localStorage.getItem("custom_projects");return N?JSON.parse(N):[...$n]}),[m,_]=Se.useState(()=>{const N=localStorage.getItem("custom_skills");return N?JSON.parse(N):[...Cf]}),[E,v]=Se.useState(()=>{const N=localStorage.getItem("custom_certifications");return N?JSON.parse(N):[...nc]}),[d,g]=Se.useState(()=>{const N=localStorage.getItem("custom_experience");return N?JSON.parse(N):[...tc]}),[S,y]=Se.useState(()=>{const N=localStorage.getItem("custom_ai_exploration");return N?JSON.parse(N):[...Rf]}),[b,w]=Se.useState("idle"),C=N=>{N.preventDefault(),e==="8330"||e==="1234"?(r(!0),sessionStorage.setItem("portfolio_admin_auth","true"),a("")):a("Invalid Admin Passcode. Please try again.")},x=N=>{const{name:U,value:B}=N.target;p(ee=>({...ee,[U]:B}))},A=(N,U,B)=>{const ee=[...h];ee[N]={...ee[N],[U]:B},f(ee)},P=(N,U,B)=>{const ee=[...m];U==="skills"?ee[N].skills=B.split(",").map(ae=>ae.trim()):ee[N][U]=B,_(ee)},I=(N,U,B)=>{const ee=[...E];U==="skillsCovered"?ee[N].skillsCovered=B.split(",").map(ae=>ae.trim()):ee[N][U]=B,v(ee)},L=(N,U,B)=>{const ee=[...d];U==="technologies"||U==="responsibilities"?ee[N][U]=B.split(",").map(ae=>ae.trim()):ee[N][U]=B,g(ee)},W=(N,U,B)=>{const ee=[...S];ee[N][U]=B,y(ee)},Y=()=>{const N={id:`cert-${Date.now()}`,name:"New Certification Title",organization:"Issuer / Organization",year:new Date().getFullYear(),verificationUrl:"",skillsCovered:["Skill 1","Skill 2"]};v([...E,N])},z=N=>{window.confirm("Delete this certification card?")&&v(E.filter((U,B)=>B!==N))},$=()=>{w("saving"),localStorage.setItem("custom_personal_info",JSON.stringify(u)),localStorage.setItem("custom_projects",JSON.stringify(h)),localStorage.setItem("custom_skills",JSON.stringify(m)),localStorage.setItem("custom_certifications",JSON.stringify(E)),localStorage.setItem("custom_experience",JSON.stringify(d)),localStorage.setItem("custom_ai_exploration",JSON.stringify(S)),setTimeout(()=>{w("success"),setTimeout(()=>{w("idle"),window.location.reload()},1e3)},600)},q=()=>{window.confirm("Reset all content back to original defaults?")&&(localStorage.removeItem("custom_personal_info"),localStorage.removeItem("custom_projects"),localStorage.removeItem("custom_skills"),localStorage.removeItem("custom_certifications"),localStorage.removeItem("custom_experience"),localStorage.removeItem("custom_ai_exploration"),p({...Qe}),f([...$n]),_([...Cf]),v([...nc]),g([...tc]),y([...Rf]),w("reset"),setTimeout(()=>{w("idle"),window.location.reload()},1e3))};return i?l.jsxs("div",{className:"admin-dashboard-container font-body",children:[l.jsxs("header",{className:"admin-topbar font-mono",children:[l.jsxs("div",{className:"admin-brand",children:[l.jsx(Ld,{size:20,className:"admin-icon-lime"}),l.jsx("span",{children:"PORTFOLIO CONTENT MANAGER"}),l.jsx("span",{className:"admin-badge",children:"LIVE CMS ACTIVE"})]}),l.jsxs("div",{className:"admin-top-actions",children:[l.jsxs("button",{className:"btn-admin-secondary",onClick:q,children:[l.jsx(vm,{size:14}),l.jsx("span",{children:"Reset Defaults"})]}),l.jsxs("button",{className:"btn-admin-primary",onClick:$,disabled:b==="saving",children:[b==="saving"?l.jsx(vm,{size:14,className:"spin"}):b==="success"?l.jsx(yc,{size:14}):l.jsx(BS,{size:14}),l.jsx("span",{children:b==="saving"?"Publishing...":b==="success"?"Published!":"Publish Changes"})]}),l.jsx("button",{className:"admin-close-btn",onClick:t,"aria-label":"Exit Admin",children:l.jsx(Xa,{size:20})})]})]}),l.jsxs("div",{className:"admin-main-body",children:[l.jsxs("aside",{className:"admin-sidebar font-mono",children:[l.jsxs("button",{className:`admin-tab-btn ${o==="personal"?"active":""}`,onClick:()=>c("personal"),children:[l.jsx(gm,{size:16}),l.jsx("span",{children:"Personal Bio & Info"})]}),l.jsxs("button",{className:`admin-tab-btn ${o==="projects"?"active":""}`,onClick:()=>c("projects"),children:[l.jsx(gm,{size:16}),l.jsx("span",{children:"Featured Projects"})]}),l.jsxs("button",{className:`admin-tab-btn ${o==="skills"?"active":""}`,onClick:()=>c("skills"),children:[l.jsx(Xv,{size:16}),l.jsx("span",{children:"Skills & Tools"})]}),l.jsxs("button",{className:`admin-tab-btn ${o==="certifications"?"active":""}`,onClick:()=>c("certifications"),children:[l.jsx(kr,{size:16}),l.jsx("span",{children:"Certifications"})]}),l.jsxs("button",{className:`admin-tab-btn ${o==="experience"?"active":""}`,onClick:()=>c("experience"),children:[l.jsx(Ah,{size:16}),l.jsx("span",{children:"Work Experience"})]}),l.jsxs("button",{className:`admin-tab-btn ${o==="ai"?"active":""}`,onClick:()=>c("ai"),children:[l.jsx(Wa,{size:16}),l.jsx("span",{children:"AI Focus Areas"})]})]}),l.jsxs("main",{className:"admin-editor-panel",children:[o==="personal"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsx("h3",{className:"font-heading admin-section-title",children:"Edit Personal Details"}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"FULL NAME"}),l.jsx("input",{type:"text",name:"name",value:u.name||"",onChange:x,className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"PRIMARY TITLE"}),l.jsx("input",{type:"text",name:"primaryTitle",value:u.primaryTitle||"",onChange:x,className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"EMAIL ADDRESS"}),l.jsx("input",{type:"email",name:"email",value:u.email||"",onChange:x,className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"EDUCATION STATUS"}),l.jsx("input",{type:"text",name:"educationStatus",value:u.educationStatus||"",onChange:x,className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"SUPPORTING HERO LINE"}),l.jsx("textarea",{rows:"3",name:"supportingLine",value:u.supportingLine||"",onChange:x,className:"form-textarea"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"ABOUT ME LEAD HEADLINE"}),l.jsx("input",{type:"text",name:"aboutLead",value:u.aboutLead||"",onChange:x,className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"ABOUT ME PARAGRAPH 1"}),l.jsx("textarea",{rows:"3",name:"aboutBody1",value:u.aboutBody1||"",onChange:x,className:"form-textarea"})]})]})]}),o==="projects"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsx("h3",{className:"font-heading admin-section-title",children:"Edit Featured Projects"}),h.map((N,U)=>l.jsxs("div",{className:"admin-project-card",children:[l.jsxs("h4",{className:"font-heading project-card-title",children:["Project #",U+1,": ",N.title]}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"PROJECT TITLE"}),l.jsx("input",{type:"text",value:N.title||"",onChange:B=>A(U,"title",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"CATEGORY / TYPE"}),l.jsx("input",{type:"text",value:N.category||"",onChange:B=>A(U,"category",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"TAGLINE"}),l.jsx("input",{type:"text",value:N.tagline||"",onChange:B=>A(U,"tagline",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"DESCRIPTION"}),l.jsx("textarea",{rows:"3",value:N.description||"",onChange:B=>A(U,"description",B.target.value),className:"form-textarea"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"GITHUB URL"}),l.jsx("input",{type:"text",value:N.github||"",onChange:B=>A(U,"github",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"LIVE DEMO URL"}),l.jsx("input",{type:"text",value:N.liveDemo||"",onChange:B=>A(U,"liveDemo",B.target.value),className:"form-input"})]})]})]},N.id||U))]}),o==="skills"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsx("h3",{className:"font-heading admin-section-title",children:"Edit Skills & Tools"}),m.map((N,U)=>l.jsxs("div",{className:"admin-project-card",children:[l.jsxs("h4",{className:"font-heading project-card-title",children:["Category: ",N.category]}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"CATEGORY NAME"}),l.jsx("input",{type:"text",value:N.category||"",onChange:B=>P(U,"category",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"SKILLS LIST (COMMA SEPARATED)"}),l.jsx("input",{type:"text",value:Array.isArray(N.skills)?N.skills.join(", "):"",onChange:B=>P(U,"skills",B.target.value),className:"form-input",placeholder:"React.js, JavaScript, HTML5, CSS3"})]})]})]},N.category||U))]}),o==="certifications"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsx("h3",{className:"font-heading admin-section-title",style:{marginBottom:0},children:"Edit Certifications"}),l.jsxs("button",{className:"btn-admin-primary font-mono",onClick:Y,children:[l.jsx(US,{size:14})," ",l.jsx("span",{children:"Add Certificate"})]})]}),E.map((N,U)=>l.jsxs("div",{className:"admin-project-card",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[l.jsxs("h4",{className:"font-heading project-card-title",style:{margin:0},children:["Certificate #",U+1,": ",N.name]}),l.jsxs("button",{className:"btn-admin-secondary",onClick:()=>z(U),style:{color:"#ff6b6b",borderColor:"#ff6b6b"},children:[l.jsx(HS,{size:14})," ",l.jsx("span",{children:"Delete"})]})]}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"CERTIFICATION NAME"}),l.jsx("input",{type:"text",value:N.name||"",onChange:B=>I(U,"name",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"ISSUER / ORGANIZATION"}),l.jsx("input",{type:"text",value:N.organization||"",onChange:B=>I(U,"organization",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"YEAR"}),l.jsx("input",{type:"number",value:N.year||"",onChange:B=>I(U,"year",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"VERIFICATION URL"}),l.jsx("input",{type:"text",value:N.verificationUrl||"",onChange:B=>I(U,"verificationUrl",B.target.value),className:"form-input",placeholder:"https://coursera.org/verify/..."})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"DOCUMENT / PDF / IMAGE URL"}),l.jsx("input",{type:"text",value:N.documentUrl||"",onChange:B=>I(U,"documentUrl",B.target.value),className:"form-input",placeholder:"e.g. /certificates/coursera.pdf or image link"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"SKILLS COVERED (COMMA SEPARATED)"}),l.jsx("input",{type:"text",value:Array.isArray(N.skillsCovered)?N.skillsCovered.join(", "):"",onChange:B=>I(U,"skillsCovered",B.target.value),className:"form-input",placeholder:"Python, Linux, Hardware"})]})]})]},N.id||U))]}),o==="experience"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsx("h3",{className:"font-heading admin-section-title",children:"Edit Work Experience & Internships"}),d.map((N,U)=>l.jsxs("div",{className:"admin-project-card",children:[l.jsxs("h4",{className:"font-heading project-card-title",children:["Role #",U+1,": ",N.title," (",N.organization,")"]}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"ROLE TITLE"}),l.jsx("input",{type:"text",value:N.title||"",onChange:B=>L(U,"title",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"COMPANY / ORGANIZATION"}),l.jsx("input",{type:"text",value:N.organization||"",onChange:B=>L(U,"organization",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"DURATION"}),l.jsx("input",{type:"text",value:N.duration||"",onChange:B=>L(U,"duration",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label font-mono",children:"LOCATION"}),l.jsx("input",{type:"text",value:N.location||"",onChange:B=>L(U,"location",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"SUMMARY"}),l.jsx("textarea",{rows:"2",value:N.summary||"",onChange:B=>L(U,"summary",B.target.value),className:"form-textarea"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"TECHNOLOGIES (COMMA SEPARATED)"}),l.jsx("input",{type:"text",value:Array.isArray(N.technologies)?N.technologies.join(", "):"",onChange:B=>L(U,"technologies",B.target.value),className:"form-input"})]})]})]},N.id||U))]}),o==="ai"&&l.jsxs("div",{className:"admin-section-box",children:[l.jsx("h3",{className:"font-heading admin-section-title",children:"Edit AI Exploration Focus Areas"}),S.map((N,U)=>l.jsxs("div",{className:"admin-project-card",children:[l.jsxs("h4",{className:"font-heading project-card-title",children:["Topic #",U+1,": ",N.topic]}),l.jsxs("div",{className:"admin-form-grid",children:[l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"TOPIC NAME"}),l.jsx("input",{type:"text",value:N.topic||"",onChange:B=>W(U,"topic",B.target.value),className:"form-input"})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label font-mono",children:"STATUS BADGE"}),l.jsx("input",{type:"text",value:N.status||"",onChange:B=>W(U,"status",B.target.value),className:"form-input",placeholder:"Certified, Active, Exploring, In Progress"})]})]})]},N.topic||U))]})]})]})]}):l.jsx("div",{className:"admin-login-overlay font-body",children:l.jsxs("div",{className:"admin-login-card",children:[l.jsx("button",{className:"admin-close-btn",onClick:t,"aria-label":"Close Admin",children:l.jsx(Xa,{size:20})}),l.jsx("div",{className:"admin-icon-wrapper",children:l.jsx(Ld,{size:32,className:"admin-icon-lime"})}),l.jsx("h3",{className:"font-heading admin-login-title",children:"Content Manager Login"}),l.jsx("p",{className:"admin-login-desc font-mono",children:"Enter your secret Admin PIN to manage portfolio content live on your site."}),l.jsxs("form",{onSubmit:C,className:"admin-login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{htmlFor:"admin-pin",className:"form-label font-mono",children:["ADMIN PASSCODE ",l.jsx("span",{className:"req",children:"*"})]}),l.jsx("input",{type:"password",id:"admin-pin",className:"form-input font-mono",placeholder:"Enter PIN (Default: 8330)",value:e,onChange:N=>n(N.target.value),autoFocus:!0}),s&&l.jsx("span",{className:"error-msg font-mono",children:s})]}),l.jsxs("button",{type:"submit",className:"btn-admin-primary font-mono",children:[l.jsx(NS,{size:16}),l.jsx("span",{children:"Unlock Admin Panel"})]})]})]})})}function kA(){const t=()=>window.print(),e=()=>{window.history.pushState("","","/"),window.dispatchEvent(new HashChangeEvent("hashchange"))},n=$n.slice(0,3),i=[{label:"Languages",value:"C, C++, Python, JavaScript (ES6+), HTML5, CSS3"},{label:"Frameworks & Libraries",value:"React.js, FastAPI, Node.js, Express.js, Streamlit"},{label:"Tools & Platforms",value:"Git, GitHub, Docker, AWS EC2, Vite, Vercel, MongoDB, REST APIs"},{label:"Hardware & IoT",value:"ESP32, Raspberry Pi, Arduino (C Framework), Sensor Interfacing (DHT11, LDR, GP2Y1010AU0F)"},{label:"AI & ML",value:"Prompt Engineering, LLM Integration (Groq API), Machine Learning Fundamentals, Server-Sent Events"}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"rp-toolbar no-print",children:l.jsxs("div",{className:"rp-toolbar-inner",children:[l.jsx("span",{className:"rp-toolbar-label",children:"⚡ LIVE RESUME — auto-synced from portfolio data"}),l.jsxs("div",{className:"rp-toolbar-actions",children:[l.jsx("button",{onClick:t,className:"rp-btn-print",children:"🖨  Print / Save as PDF"}),l.jsx("button",{onClick:e,className:"rp-btn-back",children:"← Back to Portfolio"})]})]})}),l.jsxs("div",{className:"rp-page",children:[l.jsxs("div",{className:"rp-header",children:[l.jsx("h1",{className:"rp-name",children:Qe.name}),l.jsxs("div",{className:"rp-contact-row",children:[l.jsx("a",{href:`tel:${Qe.phone}`,children:Qe.phone}),l.jsx("span",{className:"rp-sep",children:"|"}),l.jsx("a",{href:`mailto:${Qe.email}`,children:Qe.email}),l.jsx("span",{className:"rp-sep",children:"|"}),l.jsx("a",{href:Qe.linkedin,target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/kamana-agrawal-510146281"}),l.jsx("span",{className:"rp-sep",children:"|"}),l.jsx("a",{href:Qe.github,target:"_blank",rel:"noopener noreferrer",children:"github.com/Kamana5812"})]})]}),l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Education"}),l.jsxs("div",{className:"rp-entry",children:[l.jsxs("div",{className:"rp-entry-row",children:[l.jsx("span",{className:"rp-bold",children:Qe.college}),l.jsx("span",{className:"rp-date",children:Qe.location})]}),l.jsxs("div",{className:"rp-entry-row",children:[l.jsxs("span",{className:"rp-italic",children:[Qe.degree,""]}),l.jsx("span",{className:"rp-date",children:Qe.duration})]}),l.jsx("div",{className:"rp-entry-row",style:{marginTop:"1pt"},children:l.jsxs("span",{className:"rp-small-muted",children:["Affiliated to ",Qe.university]})}),l.jsx("ul",{className:"rp-bullets",children:l.jsxs("li",{children:[l.jsx("strong",{children:"Relevant Coursework:"})," Data Structures & Algorithms, Object-Oriented Programming (C/C++), Operating Systems, Database Management Systems, Computer Networks, Internet of Things (IoT), Web Development."]})})]})]}),l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Experience"}),tc.map(r=>l.jsxs("div",{className:"rp-entry",children:[l.jsxs("div",{className:"rp-entry-row",children:[l.jsx("span",{className:"rp-bold",children:r.organization}),l.jsx("span",{className:"rp-date",children:r.duration})]}),l.jsxs("div",{className:"rp-entry-row",children:[l.jsx("span",{className:"rp-italic",children:r.title}),l.jsx("span",{className:"rp-date",children:r.location})]}),l.jsx("ul",{className:"rp-bullets",children:r.responsibilities.map((s,a)=>l.jsx("li",{children:s},a))})]},r.id))]}),l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Projects"}),n.map(r=>{var s;return l.jsxs("div",{className:"rp-entry",children:[l.jsxs("div",{className:"rp-entry-row",children:[l.jsxs("span",{children:[l.jsx("span",{className:"rp-bold",children:r.title}),r.github&&r.github!=="#"||r.liveDemo&&r.liveDemo!=="#"?l.jsxs("span",{className:"rp-proj-links",children:[r.github&&r.github!=="#"&&l.jsx("a",{href:r.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),r.liveDemo&&r.liveDemo!=="#"&&l.jsxs(l.Fragment,{children:[r.github&&r.github!=="#"&&l.jsx("span",{className:"rp-sep",children:"|"}),l.jsx("a",{href:r.liveDemo,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]}):null]}),l.jsx("span",{className:"rp-date",children:r.year})]}),l.jsx("div",{className:"rp-entry-row",children:l.jsx("span",{className:"rp-italic",children:(s=r.technologies)==null?void 0:s.join(", ")})}),l.jsxs("ul",{className:"rp-bullets",children:[(r.keyFeatures||[]).slice(0,4).map((a,o)=>l.jsx("li",{children:a},o)),(!r.keyFeatures||r.keyFeatures.length===0)&&r.tagline&&l.jsx("li",{children:r.tagline})]})]},r.id)})]}),l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Technical Skills"}),l.jsx("div",{className:"rp-entry",children:l.jsx("ul",{className:"rp-skills-list",children:i.map(r=>l.jsxs("li",{children:[l.jsxs("strong",{children:[r.label,":"]})," ",r.value]},r.label))})})]}),Nf.length>0&&l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Research & Publications"}),Nf.map(r=>l.jsxs("div",{className:"rp-entry",children:[l.jsxs("div",{className:"rp-entry-row",children:[l.jsx("span",{className:"rp-bold",children:r.title}),l.jsxs("span",{className:"rp-date",children:[r.month," ",r.year]})]}),l.jsx("div",{className:"rp-entry-row",children:l.jsx("span",{className:"rp-italic",children:r.journal})}),l.jsxs("ul",{className:"rp-bullets",children:[l.jsxs("li",{children:["Authors: ",r.authors.join(", ")]}),r.doi&&l.jsxs("li",{children:["DOI: ",l.jsx("a",{href:`https://doi.org/${r.doi}`,target:"_blank",rel:"noopener noreferrer",children:r.doi})]})]})]},r.id))]}),l.jsxs("div",{className:"rp-section",children:[l.jsx("div",{className:"rp-section-heading",children:"Certifications & Achievements"}),l.jsx("div",{className:"rp-entry",children:l.jsxs("ul",{className:"rp-bullets",children:[nc.map(r=>l.jsxs("li",{children:[l.jsx("strong",{children:r.name})," — ",r.issuer," (",r.year,")",r.credentialId&&l.jsxs("span",{className:"rp-cred",children:[" · ID: ",r.credentialId]})]},r.id)),l.jsxs("li",{children:[l.jsx("strong",{children:"Competitive Programming:"})," Solved 150+ DSA problems on LeetCode & HackerRank; 5-Star Gold Badge in C on HackerRank."]})]})})]})]})]})}function FA(t=["home","about","skills","projects","experience","contact"]){const[e,n]=Se.useState("home");return Se.useEffect(()=>{const i=()=>{const r=window.scrollY+200;for(const s of t){const a=document.getElementById(s);if(a){const o=a.offsetTop,c=a.offsetHeight;if(r>=o&&r<o+c){n(s);break}}}};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>{window.removeEventListener("scroll",i)}},[t]),e}function OA(){const[t,e]=Se.useState(()=>{const r=localStorage.getItem("kamana_sound_fx");return r!==null?JSON.parse(r):!0});Se.useEffect(()=>{localStorage.setItem("kamana_sound_fx",JSON.stringify(t))},[t]);const n=Se.useCallback(()=>{e(r=>!r)},[]),i=Se.useCallback(r=>{if(t)try{const s=window.AudioContext||window.webkitAudioContext;if(!s)return;const a=new s;if(r==="tick"){const o=a.createOscillator(),c=a.createGain();o.type="sine",o.frequency.setValueAtTime(800,a.currentTime),o.frequency.exponentialRampToValueAtTime(1400,a.currentTime+.04),c.gain.setValueAtTime(.04,a.currentTime),c.gain.exponentialRampToValueAtTime(.001,a.currentTime+.04),o.connect(c),c.connect(a.destination),o.start(),o.stop(a.currentTime+.04)}else if(r==="click"){const o=a.createOscillator(),c=a.createGain();o.type="triangle",o.frequency.setValueAtTime(520,a.currentTime),o.frequency.exponentialRampToValueAtTime(280,a.currentTime+.06),c.gain.setValueAtTime(.07,a.currentTime),c.gain.exponentialRampToValueAtTime(.001,a.currentTime+.06),o.connect(c),c.connect(a.destination),o.start(),o.stop(a.currentTime+.06)}else if(r==="open"){const o=a.createOscillator(),c=a.createOscillator(),u=a.createGain();o.type="sine",c.type="sine",o.frequency.setValueAtTime(650,a.currentTime),o.frequency.exponentialRampToValueAtTime(1200,a.currentTime+.14),c.frequency.setValueAtTime(880,a.currentTime),c.frequency.exponentialRampToValueAtTime(1600,a.currentTime+.14),u.gain.setValueAtTime(.06,a.currentTime),u.gain.exponentialRampToValueAtTime(.001,a.currentTime+.14),o.connect(u),c.connect(u),u.connect(a.destination),o.start(),c.start(),o.stop(a.currentTime+.14),c.stop(a.currentTime+.14)}else if(r==="success"){const o=a.createOscillator(),c=a.createGain();o.type="sine",o.frequency.setValueAtTime(587.33,a.currentTime),o.frequency.setValueAtTime(880,a.currentTime+.08),c.gain.setValueAtTime(.06,a.currentTime),c.gain.exponentialRampToValueAtTime(.001,a.currentTime+.2),o.connect(c),c.connect(a.destination),o.start(),o.stop(a.currentTime+.2)}}catch{}},[t]);return{soundEnabled:t,toggleSound:n,playTick:()=>i("tick"),playClick:()=>i("click"),playOpen:()=>i("open"),playSuccess:()=>i("success")}}function BA(){const t=Se.useRef(null);return Se.useEffect(()=>{const e=t.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=new hx,r=new hn(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=80;const s=new Lx({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(s.domElement);const a=180,o=new qt,c=new Float32Array(a*3),u=new Float32Array(a*3),p=new He(12058368),h=new He(3359761);for(let L=0;L<a;L++){c[L*3]=(Math.random()-.5)*160,c[L*3+1]=(Math.random()-.5)*160,c[L*3+2]=(Math.random()-.5)*120;const W=Math.random()>.6?p:h;u[L*3]=W.r,u[L*3+1]=W.g,u[L*3+2]=W.b}o.setAttribute("position",new Fn(c,3)),o.setAttribute("color",new Fn(u,3));const f=new vx({size:1.8,vertexColors:!0,transparent:!0,opacity:.7,blending:Xl}),m=new r1(o,f);i.add(m);const _=new ws,E=[new Ka(7,0),new jh(5,0),new Wh(6,0),new Ka(4,1)],v=[];E.forEach((L,W)=>{const Y=new Lr({color:12058368,wireframe:!0,transparent:!0,opacity:.12,blending:Xl}),z=new Ht(L,Y);z.position.set((W%2===0?1:-1)*(35+Math.random()*25),(Math.random()-.5)*60,(Math.random()-.5)*40),z.rotation.x=Math.random()*Math.PI,z.rotation.y=Math.random()*Math.PI,_.add(z),v.push({mesh:z,rotSpeedX:(Math.random()-.5)*.004,rotSpeedY:(Math.random()-.5)*.006,floatSpeed:.5+Math.random()*.8,initY:z.position.y})}),i.add(_);let d=0,g=0,S=0,y=0;const b=L=>{d=(L.clientX/window.innerWidth-.5)*2,g=(L.clientY/window.innerHeight-.5)*2};let w=0;const C=()=>{w=window.scrollY};window.addEventListener("mousemove",b,{passive:!0}),window.addEventListener("scroll",C,{passive:!0});const x=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",x);let A;const P=new wx,I=()=>{A=requestAnimationFrame(I),P.update();const L=P.getElapsed();S+=(d*8-S)*.04,y+=(-g*8-y)*.04,r.position.x=S,r.position.y=y-w*.02,r.lookAt(0,-(w*.02),0),m.rotation.y=L*.02,m.rotation.x=Math.sin(L*.01)*.1,v.forEach(({mesh:W,rotSpeedX:Y,rotSpeedY:z,floatSpeed:$,initY:q})=>{W.rotation.x+=Y,W.rotation.y+=z,W.position.y=q+Math.sin(L*$)*3}),s.render(i,r)};return I(),()=>{cancelAnimationFrame(A),window.removeEventListener("mousemove",b),window.removeEventListener("scroll",C),window.removeEventListener("resize",x),e&&s.domElement&&e.removeChild(s.domElement),o.dispose(),f.dispose(),E.forEach(L=>L.dispose()),s.dispose()}},[]),l.jsx("div",{ref:t,className:"three-bg-container","aria-hidden":"true"})}function zA({isOpen:t,onClose:e,onSelectCaseStudy:n,soundFX:i}){const[r,s]=Se.useState(""),[a,o]=Se.useState(0),[c,u]=Se.useState(!1),p=Se.useRef(null),h=[{id:"nav-home",label:"Go to Home / Hero",href:"#home",category:"Navigation",icon:Wl},{id:"nav-what-i-do",label:"Go to What I Do",href:"#what-i-do",category:"Navigation",icon:Pd},{id:"nav-about",label:"Go to About Me",href:"#about",category:"Navigation",icon:Wa},{id:"nav-projects",label:"Go to Featured Projects",href:"#projects",category:"Navigation",icon:Pd},{id:"nav-skills",label:"Go to Technical Skills",href:"#skills",category:"Navigation",icon:Nh},{id:"nav-experience",label:"Go to Experience & Internships",href:"#journey",category:"Navigation",icon:kr},{id:"nav-research",label:"Go to Research & Publications",href:"#publications",category:"Navigation",icon:Nd},{id:"nav-hackathons",label:"Go to Hackathons & Leadership",href:"#hackathons",category:"Navigation",icon:kr},{id:"nav-certifications",label:"Go to Certifications",href:"#certifications",category:"Navigation",icon:kr},{id:"nav-endorsements",label:"Go to Mentorship Endorsements",href:"#endorsements",category:"Navigation",icon:Wa},{id:"nav-contact",label:"Go to Contact Section",href:"#contact",category:"Navigation",icon:Id}],f=[{id:"act-copy-email",label:"Copy Email Address (kamanaagrawal833@gmail.com)",category:"Actions",icon:Id,action:()=>{navigator.clipboard.writeText(Qe.email),u(!0),i!=null&&i.playSuccess&&i.playSuccess(),setTimeout(()=>u(!1),2e3)}},{id:"act-resume",label:"View Live Resume (Auto-Synced)",category:"Actions",icon:Ch,action:()=>{window.location.hash="resume",window.location.reload()}},{id:"act-github",label:"Open GitHub Profile (@Kamana5812)",category:"Actions",icon:Rh,action:()=>{window.open(Qe.github,"_blank")}},{id:"act-linkedin",label:"Open LinkedIn Profile",category:"Actions",icon:Gv,action:()=>{window.open(Qe.linkedin,"_blank")}}],m=$n.map(d=>({id:`proj-${d.id}`,label:`Case Study: ${d.title}`,category:"Projects",icon:Wl,action:()=>{n&&n(d)}})),E=[...f,...m,...h].filter(d=>d.label.toLowerCase().includes(r.toLowerCase())||d.category.toLowerCase().includes(r.toLowerCase()));Se.useEffect(()=>{t&&(i!=null&&i.playOpen&&i.playOpen(),setTimeout(()=>{var d;return(d=p.current)==null?void 0:d.focus()},50),o(0),s(""))},[t,i]),Se.useEffect(()=>{if(!t)return;const d=g=>{if(g.key==="ArrowDown")g.preventDefault(),o(S=>(S+1)%(E.length||1)),i!=null&&i.playTick&&i.playTick();else if(g.key==="ArrowUp")g.preventDefault(),o(S=>(S-1+E.length)%(E.length||1)),i!=null&&i.playTick&&i.playTick();else if(g.key==="Enter"){g.preventDefault();const S=E[a];S&&v(S)}else g.key==="Escape"&&e()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,E,a,e,i]);const v=d=>{i!=null&&i.playClick&&i.playClick(),d.action?(d.action(),d.id!=="act-copy-email"&&e()):d.href&&(e(),window.location.hash=d.href)};return t?l.jsx("div",{className:"cmd-palette-backdrop",onClick:e,"aria-modal":"true",role:"dialog",children:l.jsxs("div",{className:"cmd-palette-modal",onClick:d=>d.stopPropagation(),children:[l.jsxs("div",{className:"cmd-input-wrapper",children:[l.jsx(Wv,{size:18,className:"cmd-search-icon text-accent"}),l.jsx("input",{ref:p,type:"text",className:"cmd-search-input font-body",placeholder:"Type a command, project, or section... (e.g. 'Skopos', 'Resume')",value:r,onChange:d=>{s(d.target.value),o(0)}}),l.jsx("button",{type:"button",onClick:e,className:"cmd-close-btn","aria-label":"Close command palette",children:l.jsx(Xa,{size:16})})]}),l.jsx("div",{className:"cmd-results-list font-body",children:E.length>0?E.map((d,g)=>{const S=d.icon,y=g===a;return l.jsxs("div",{className:`cmd-item-row ${y?"selected":""}`,onClick:()=>v(d),onMouseEnter:()=>o(g),children:[l.jsxs("div",{className:"cmd-item-left",children:[l.jsx("span",{className:"cmd-item-icon-box",children:l.jsx(S,{size:16,className:"text-accent"})}),l.jsx("span",{className:"cmd-item-label",children:d.label})]}),l.jsxs("div",{className:"cmd-item-right font-mono",children:[d.id==="act-copy-email"&&c?l.jsxs("span",{className:"cmd-copied-badge font-mono",children:[l.jsx(SS,{size:12})," Copied!"]}):l.jsx("span",{className:"cmd-category-tag font-mono",children:d.category}),l.jsx(Th,{size:14,className:"cmd-arrow-icon"})]})]},d.id)}):l.jsx("div",{className:"cmd-empty-state font-mono",children:l.jsxs("p",{children:['No matching commands found for "',r,'"']})})}),l.jsxs("div",{className:"cmd-footer font-mono",children:[l.jsxs("div",{className:"cmd-keys-hint",children:[l.jsxs("span",{children:[l.jsx("kbd",{children:"↑"})," ",l.jsx("kbd",{children:"↓"})," Navigate"]}),l.jsxs("span",{children:[l.jsx("kbd",{children:"↵"})," Select"]}),l.jsxs("span",{children:[l.jsx("kbd",{children:"esc"})," Close"]})]}),l.jsx("span",{className:"cmd-badge font-mono",children:"Kamana. Command OS"})]})]})}):null}function VA(){const[t,e]=Se.useState(null),[n,i]=Se.useState(!1),[r,s]=Se.useState(!1),a=OA(),o=FA(["home","what-i-do","about","projects","skills","github-stats","journey","publications","hackathons","certifications","endorsements","contact"]);Se.useEffect(()=>{const f=m=>{(m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="k"&&(m.preventDefault(),s(_=>!_))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const[c,u]=Se.useState(window.location.hash==="#resume"||window.location.pathname==="/resume");Se.useEffect(()=>{const f=()=>{window.location.hash==="#resume"||window.location.pathname==="/resume"?u(!0):u(!1)};return(window.location.search.includes("admin=true")||window.location.hash==="#admin")&&i(!0),f(),window.addEventListener("hashchange",f),()=>window.removeEventListener("hashchange",f)},[]);const p=f=>{e(f),a!=null&&a.playOpen&&a.playOpen()},h=()=>{e(null),a!=null&&a.playClick&&a.playClick()};return l.jsxs("div",{className:"app-container",children:[l.jsx(BA,{}),l.jsx(zA,{isOpen:r,onClose:()=>s(!1),onSelectCaseStudy:p,soundFX:a}),n&&l.jsx(UA,{onClose:()=>i(!1)}),l.jsx("a",{href:"#main-content",className:"skip-link font-mono",children:"Skip to main content"}),l.jsx(YS,{activeSection:t?"projects":o,onOpenCommandPalette:()=>s(!0),soundEnabled:a.soundEnabled,onToggleSound:a.toggleSound}),l.jsx("div",{className:"page-wrapper",children:l.jsx("main",{id:"main-content",className:"main-content",children:c?l.jsx(kA,{}):t?l.jsx(DA,{project:t,onCloseCaseStudy:h,onSelectCaseStudy:p}):l.jsxs(l.Fragment,{children:[l.jsx(gA,{}),l.jsx(xA,{}),l.jsx("hr",{className:"section-divider"}),l.jsx(SA,{}),l.jsx("hr",{className:"section-divider"}),l.jsx(EA,{onSelectCaseStudy:p}),l.jsx("hr",{className:"section-divider"}),l.jsx(wA,{}),l.jsx("hr",{className:"section-divider"}),l.jsx(bA,{}),l.jsx(CA,{}),l.jsx("hr",{className:"section-divider"}),l.jsx(NA,{}),l.jsx("hr",{className:"section-divider"}),l.jsx(PA,{}),l.jsx(IA,{}),l.jsx(LA,{})]})})}),l.jsx(KS,{onOpenAdmin:()=>i(!0)})]})}Fu.createRoot(document.getElementById("root")).render(l.jsx(Ds.StrictMode,{children:l.jsx(VA,{})}));
