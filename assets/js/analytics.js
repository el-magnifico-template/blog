!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.galite=t():e.galite=t()}(this,function(){return r={},o.m=n=[function(e,t){Array.from=Array.from||function(){var e;return(e=Array.prototype.slice).call.apply(e,arguments)}},function(e,t,n){"use strict";n.r(t);var i={};function p(e){return i[e]}function r(e){if("undefined"==typeof navigator||!navigator.sendBeacon||!navigator.sendBeacon(e))try{var t=new window.XMLHttpRequest;t.open("GET",e,!1),t.send()}catch(t){(new window.Image).src=e}}var o="uid";function u(e,t){var n=1<arguments.length&&void 0!==t?t:[];return!e||-1<n.indexOf(void 0)?"":"&"+e+"="+n.map(encodeURIComponent).join("")}function l(e){return"boolean"==typeof e?+e:e}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={anonymizeIp:"aip",dataSource:"ds",queueTime:"qt",userId:"uid",sessionControl:"sc",referrer:"dr",campaignName:"cn",campaignSource:"cs",campaignMedium:"cm",campaignKeyword:"ck",campaignContent:"cc",campaignId:"ci",screenResolution:"sr",viewportSize:"vp",encoding:"de",screenColors:"sd",language:"ul",javaEnabled:"je",flashVersion:"fl",hitType:"t",nonInteraction:"ni",location:"dl",hostname:"dh",page:"dp",title:"dt",screenName:"cd",linkid:"linkid",appName:"an",appId:"aid",appVersion:"av",appInstallerId:"aiid",eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",currencyCode:"cu",socialNetwork:"sn",socialAction:"sa",socialTarget:"st",timingCategory:"utc",timingVar:"utv",timingValue:"utt",timingLabel:"utl",exDescription:"exd",exFatal:"exf",expId:"xid",expVar:"xvar"};function c(e,t,n,r,o){var i,a=4<arguments.length&&void 0!==o&&o,c=function(e){var t=0<arguments.length&&void 0!==e?e:{};return Object.keys(t).map(function(e){return[e,t[e]].map(l).map(encodeURIComponent).join("=")}).join("&")}((i=3<arguments.length&&void 0!==r?r:{},Object.keys(i).filter(function(e){return Object.prototype.hasOwnProperty.call(d,e)}).filter(function(e){return i[e]}).reduce(function(e,t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,s({},d[t],i[t]))},{})));return"https://www.google-analytics.com/collect?v=1&ul=en-us&de=UTF-8"+u("dl",[document.location.href])+u("dt",[document.title])+u("sd",[window.screen.colorDepth,"-bit"])+u("sr",[window.screen.availWidth,"x",window.screen.availHeight])+u("vp",[window.innerWidth,"x",window.innerHeight])+u("dr",[document.referrer])+(c?"&"+c:"")+(a?"&aip=1":"")+"&cid="+n+"&tid="+e+"&z="+t}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=(a(b.prototype,[{key:"send",value:function(e){if(a=this.fields.trackingId,!0!==window["ga-disable-".concat(a)]){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(i,!0).forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):v(i).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}({hitType:e},function(e,t){var n=1<arguments.length&&void 0!==t?t:[];if(1===n.length&&n[0].constructor===Object)return n[0];switch(e){case"pageview":return{page:y(n,1)[0]};case"event":var r=y(n,4);return{eventCategory:r[0],eventAction:r[1],eventLabel:r[2],eventValue:r[3]};case"social":var o=y(n,3);return{socialNetwork:o[0],socialAction:o[1],socialTarget:o[2]};case"timing":var i=y(n,4);return{timingCategory:i[0],timingVar:i[1],timingValue:i[2],timingLabel:i[3]};default:return{}}}(e,n),{},this.fields),i=c(this.fields.trackingId,this._getTime(),this.userId,o);this._sendTo(i)}var a}},{key:"get",value:function(e){return this.fields[e]}},{key:"set",value:function(e,t){this.fields[e]=t}}]),b);function b(e){!function(e){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}(this),this.fields={trackingId:e},this.userId=function(e){var t=window?window.localStorage:null;if(t&&t.getItem(o))return t.getItem(o);var n=Math.random()+"."+Math.random();return t&&t.setItem(o,n),n}(),this._sendTo=r,this._getTime=m}function m(){return(new Date).getTime()}var w={create:function(e,t){var n,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"t0",o=new g(e);return n=o,i[r]=n,o},getByName:function(e){return p(e)}};function h(e){if(1!==parseInt(navigator.msDoNotTrack||window.doNotTrack||navigator.doNotTrack,10)){for(var t=(f="string"==typeof(d=e)&&-1<d.indexOf(".")?d.split("."):["t0",d],s=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(f,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),n=t[0],r=t[1],o=!!w[e],i=!!g.prototype[r]&&"constructor"!==r,a=arguments.length,c=new Array(1<a?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];if(o)w[e].apply(w,c);else if(i){var l=p(n);l&&l[r].apply(l,c)}else{if("function"!=typeof e)throw new Error("Command ".concat(e," is not available in ga-lite"));e(p(n))}}var f,s,d}n(0),n.d(t,"default",function(){return h}),Object.keys(w).forEach(function(e){h[e]=w[e]}),("undefined"!=typeof window&&window.galite&&window.galite.q||[]).forEach(function(e){return h.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(t=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}());var t})}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1).default;function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});