!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(function(){return(()=>{var e={688:(e,t,r)=>{e.exports=r(749)},749:(e,t)=>{"use strict";t.makeApiCall=void 0,t.makeApiCall=function(e,t,o,n){var a=r(e,t,o,n),i=new XMLHttpRequest;return new Promise((function(e,t){i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300?e(JSON.parse(i.responseText)):t(i))},i.open("GET",a,!0),i.send()}))};var r=function(e,t,r,o){if(!t)throw new Error("No api key is set.");var n="";"string"==typeof r?n="&".concat(r):Array.isArray(r)&&r.forEach((function(e){n+="&".concat(e)}));var a="";return"string"==typeof o&&(a="/".concat(o)),"https://".concat(e,".abstractapi.com/v1").concat(a,"?api_key=").concat(t).concat(n,"&lang=js")}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";r.r(o),r.d(o,{AbstractExchangeRates:()=>n});var e=r(688);function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};t(n,"apiKey",void 0),t(n,"configure",(function(e){n.apiKey=e})),t(n,"live",(function(t,r){if(!t)throw new Error("Base is not provided.");var o="base=".concat(t);return r&&""!==r&&(o+="&target=".concat(r)),e.makeApiCall("exchange-rates",n.apiKey,o,"live")})),t(n,"historical",(function(t,r,o){if(!t)throw new Error("Base is not provided.");if(!r)throw new Error("Date is not provided.");var a="base=".concat(t,"&date=").concat(r);return o&&""!==o&&(a+="&target=".concat(o)),e.makeApiCall("exchange-rates",n.apiKey,a,"historical")})),t(n,"convert",(function(t,r,o,a){if(!t)throw new Error("Base is not provided.");if(!r)throw new Error("Target is not provided.");var i="base=".concat(t,"&target=").concat(r);return o&&""!==o&&(i+="&date=".concat(o)),a&&""!==a&&(i+="&base_amount=".concat(a)),e.makeApiCall("exchange-rates",n.apiKey,i,"convert")}))})(),o})()}));