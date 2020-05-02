!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.FloatSidebar=n():t.FloatSidebar=n()}(window,function(){return o={},i.m=e=[function(t,n,e){"use strict";e.r(n);var i,h="START";function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r,I=(o(i={},h,[{to:"FINISH",when:function(t){return[!0===t.isSideInnerFitsPath,t.viewportTop+t.sideInnerHeight>=t.finishPoint]}},{to:"BOTTOM_FIXED",when:function(t){return[!0===t.isSideInnerFitsPath,!1===t.isSideInnerFitsViewport,t.viewportBottom>=t.sideInnerBottom+t.bottomSpacing]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerFitsPath,!0===t.isSideInnerFitsViewport,t.viewportTop>=t.startPoint-t.topSpacing]}}]),o(i,"TOP_FIXED",[{to:h,when:function(t){return[!1===t.isSideInnerFitsPath]}},{to:h,when:function(t){return[t.viewportTop<=t.startPoint-t.topSpacing]}},{to:"FINISH",when:function(t){return[t.sideInnerBottom>=t.finishPoint]}},{to:"UNFIXED",when:function(t){return["down"===t.scrollDirection,!1===t.isSideInnerFitsViewport]}}]),o(i,"UNFIXED",[{to:h,when:function(t){return[!1===t.isSideInnerFitsPath]}},{to:"TOP_FIXED",when:function(t){return[t.viewportTop<=t.sideInnerTop-t.topSpacing]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerFitsViewport,t.viewportBottom>=t.sideInnerBottom+t.bottomSpacing]}},{to:"BOTTOM_FIXED",when:function(t){return[!1===t.isSideInnerFitsViewport,t.viewportBottom>=t.sideInnerBottom+t.bottomSpacing]}}]),o(i,"BOTTOM_FIXED",[{to:h,when:function(t){return[!1===t.isSideInnerFitsPath]}},{to:"UNFIXED",when:function(t){return["up"===t.scrollDirection]}},{to:"TOP_FIXED",when:function(t){return[!0===t.isSideInnerFitsViewport]}},{to:"FINISH",when:function(t){return[t.sideInnerBottom>=t.finishPoint]}}]),o(i,"FINISH",[{to:h,when:function(t){return[!1===t.isSideInnerFitsPath]}},{to:"BOTTOM_FIXED",when:function(t){return[t.sideInnerBottom+t.bottomSpacing<=t.finishPoint,t.viewportBottom<=t.finishPoint]}},{to:"TOP_FIXED",when:function(t){return[t.viewportTop<=t.sideInnerTop-t.topSpacing]}}]),i);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function y(t,n){var e=t.getBoundingClientRect();return{top:e.top+n,bottom:e.bottom+n,height:e.height}}function w(w,t){var n,e,m=t.$viewport,v=t.$relative,g=t.$sideInner,b=t.$sideOuter,S=t.topSpacing,F=t.bottomSpacing,T={},i=(n=function(){var t,n,e,i,o,r,s,u,a,p,c,f,d,l,h,I=(e=(n=m).clientHeight||n.innerHeight,o={top:i=n.scrollTop||n.pageYOffset,bottom:i+e,height:e},r=y(g,o.top),s=y(b,o.top),u=y(v,o.top),t=o.top,a=T.viewportTop<t?"down":T.viewportTop>t?"up":"notChanged",p=s.top,c=u.bottom,f=c-p,d=r.height+S+F<o.height,l=r.height<f,h=Math.max(r.height,f),{startPoint:p,finishPoint:c,topSpacing:S,bottomSpacing:F,scrollDirection:a,isSideInnerFitsPath:l,isSideInnerFitsViewport:d,sideOuterHeight:h,viewportTop:o.top,viewportBottom:o.bottom,sideInnerTop:r.top,sideInnerBottom:r.bottom,sideInnerHeight:r.height});w(T,I),T=I},e=void 0,function(){e=e||requestAnimationFrame(function(){e=null,n()})});return{start:function(){m.addEventListener("scroll",i),m.addEventListener("resize",i),i()},stop:function(){m.removeEventListener("scroll",i),m.removeEventListener("resize",i)},tick:i}}var m=(s(r={},h,function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top="0",e.style.bottom="auto"}),s(r,"TOP_FIXED",function(t,n){var e=n.$sideInner;e.style.position="fixed",e.style.top=t.topSpacing+"px",e.style.bottom="auto"}),s(r,"UNFIXED",function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top=t.sideInnerTop-t.startPoint+"px",e.style.bottom="auto"}),s(r,"BOTTOM_FIXED",function(t,n){var e=n.$sideInner;e.style.position="fixed",e.style.top="auto",e.style.bottom=t.bottomSpacing+"px"}),s(r,"FINISH",function(t,n){var e=n.$sideInner;e.style.position="absolute",e.style.top="auto",e.style.bottom="0"}),r);n.default=function(t){var n,e,i,o,r=t.viewport||window,s=t.sidebar,u=t.sidebarInner||s.firstElementChild,a=t.relative,p=t.topSpacing||0,c=t.bottomSpacing||0,f=(e=(n={actions:m,transitions:I,initialState:h}).actions,i=n.transitions,o=n.initialState,{findTransitionFor:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return i[o].find(function(t){return t.when.apply(void 0,n).every(function(t){return t})})},performTransition:function(t){var n=t.to;return function(){e[o=n].apply(e,arguments)}}}),d=w(function(t,n){var e=f.findTransitionFor(n);e&&f.performTransition(e)(n,{$sideInner:u,$sideOuter:s,$relative:a}),l(t,n)},{$viewport:r,$sideOuter:s,$sideInner:u,$relative:a,topSpacing:p,bottomSpacing:c}),l=function(t,n){1<=Math.abs((t.sideOuterHeight||0)-n.sideOuterHeight)&&(s.style.height=n.sideOuterHeight+"px")};return requestAnimationFrame(function(){s.style.willChange="height",u.style.width="inherit",u.style.transform="translateZ(0)",u.style.willChange="transform",d.start()}),{forceUpdate:function(){d.tick()},destroy:function(){d.stop()}}}}],i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0).default;function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e,o});