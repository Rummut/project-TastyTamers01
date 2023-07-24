var et=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var te=(e,t,n)=>(et(e,t,"read from private field"),n?n.call(e):t.get(e)),ne=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:tt}=Object.prototype,{getPrototypeOf:de}=Object,K=(e=>t=>{const n=tt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>K(t)===e),G=e=>t=>typeof t===e,{isArray:C}=Array,B=G("undefined");function nt(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ce=R("ArrayBuffer");function rt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ce(e.buffer),t}const st=G("string"),E=G("function"),Fe=G("number"),X=e=>e!==null&&typeof e=="object",ot=e=>e===!0||e===!1,q=e=>{if(K(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},it=R("Date"),at=R("File"),ct=R("Blob"),lt=R("FileList"),ut=e=>X(e)&&E(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=K(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},dt=R("URLSearchParams"),pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _e=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!B(e)&&e!==_e;function ae(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&Be(t,s)||s;q(t[o])&&q(r)?t[o]=ae(t[o],r):q(r)?t[o]=ae({},r):C(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&v(arguments[r],n);return t}const ht=(e,t,n,{allOwnKeys:r}={})=>(v(t,(s,o)=>{n&&E(s)?e[o]=Pe(s,n):e[o]=s},{allOwnKeys:r}),e),mt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Et=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),St=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Rt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},At=R("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=R("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Nt=e=>{ke(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return C(e)?r(e):r(String(e).split(t)),n},xt=()=>{},Pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),re="abcdefghijklmnopqrstuvwxyz",we="0123456789",ve={DIGIT:we,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+we},Ct=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=C(r)?[]:{};return v(r,(i,l)=>{const d=n(i,s+1);!B(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},_t=R("AsyncFunction"),Dt=e=>e&&(X(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:C,isArrayBuffer:Ce,isBuffer:nt,isFormData:ft,isArrayBufferView:rt,isString:st,isNumber:Fe,isBoolean:ot,isObject:X,isPlainObject:q,isUndefined:B,isDate:it,isFile:at,isBlob:ct,isRegExp:Tt,isFunction:E,isStream:ut,isURLSearchParams:dt,isTypedArray:wt,isFileList:lt,forEach:v,merge:ae,extend:ht,trim:pt,stripBOM:mt,inherits:yt,toFlatObject:gt,kindOf:K,kindOfTest:R,endsWith:bt,toArray:Et,forEachEntry:St,matchAll:Rt,isHTMLForm:At,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:ke,freezeMethods:Nt,toObjectSet:Lt,toCamelCase:Ot,noop:xt,toFiniteNumber:Pt,findKey:Be,global:_e,isContextDefined:De,ALPHABET:ve,generateString:Ct,isSpecCompliantForm:Ft,toJSONObject:Bt,isAsyncFn:_t,isThenable:Dt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(Ue,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ue);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const kt=null;function ce(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function vt(e){return a.isArray(e)&&!e.some(ce)}const Ut=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,A){let w=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&vt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(w=a.toArray(f)))return h=je(h),w.forEach(function(j,Ze){!(a.isUndefined(j)||j===null)&&t.append(i===!0?Se([h],Ze,o):i===null?h:h+"[]",c(j))}),!1}return ce(f)?!0:(t.append(Se(A,h,o),c(f)),!1)}const p=[],b=Object.assign(Ut,{defaultVisitor:u,convertValue:c,isVisitable:ce});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(w,x){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(x)?x.trim():x,h,b))===!0&&y(w,h?h.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const qe=pe.prototype;qe.append=function(t,n){this._pairs.push([t,n])};qe.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||Mt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=jt,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:pe,$t=typeof FormData<"u"?FormData:null,It=typeof Blob<"u"?Blob:null,Ht=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:qt,FormData:$t,Blob:It},isStandardBrowserEnv:Ht,isStandardBrowserWebWorkerEnv:zt,protocols:["http","https","file","blob","url","data"]};function Jt(e,t){return Q(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Wt(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Vt(r),s,n,0)}),n}return null}const Kt={"Content-Type":void 0};function Gt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Jt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Gt(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Y.headers[t]={}});a.forEach(["post","put","patch"],function(t){Y.headers[t]=a.merge(Kt)});const he=Y,Xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function Yt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function en(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,c){const u=F(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=$(l))}const i=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Zt(t)?i(Qt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Yt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||se(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const l=a.findKey(r,i);l&&(!n||se(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||se(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const l=t?en(o):String(o).trim();l!==o&&delete n[o],n[l]=$(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=F(i);r[l]||(tn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Z.prototype);a.freezeMethods(Z);const T=Z;function oe(e,t){const n=this||he,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function nn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rn=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function on(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Je(e,t){return e&&!sn(t)?on(e,t):t}const an=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function Te(e,t){let n=0;const r=ln(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const un=typeof XMLHttpRequest<"u",fn=un&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=Je(e.baseURL,e.url);c.open(e.method.toUpperCase(),$e(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};nn(function(w){n(w),d()},function(w){r(w),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ie;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||an(u))&&e.xsrfCookieName&&rn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Te(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Te(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=cn(u);if(b&&S.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:kt,xhr:fn};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ne(e){return ie(e),e.headers=T.from(e.headers),e.data=oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dn.getAdapter(e.adapter||he.adapter)(e).then(function(r){return ie(e),r.data=oe.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return ze(r)||(ie(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Le=e=>e instanceof T?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(Le(c),Le(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||s,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const Ve="1.4.0",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};me.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function pn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const le={assertOptions:pn,validators:me},N=le.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!d){const f=[Ne.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let y=n;for(p=0;p<b;){const f=l[p++],h=l[p++];try{y=f(y)}catch(A){h.call(this,A);break}}try{u=Ne.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=P(this.defaults,t);const n=Je(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const H=z;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new U(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}const hn=ye;function mn(e){return function(n){return e.apply(null,n)}}function yn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});const gn=ue;function We(e){const t=new H(e),n=Pe(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return We(P(e,s))},n}const g=We(he);g.Axios=H;g.CanceledError=U;g.CancelToken=hn;g.isCancel=ze;g.VERSION=Ve;g.toFormData=Q;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=mn;g.isAxiosError=yn;g.mergeConfig=P;g.AxiosHeaders=T;g.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=gn;g.default=g;const L=g;var V,W;class bn{constructor(){ne(this,V,"https://tasty-treats-backend.p.goit.global/api");ne(this,W,"/recipes/popular")}async getRecipesData(){try{return(await L.get(`${te(this,V)}${te(this,W)}`)).data}catch{console.log("Sorry, there are no recipes. Please try again.")}}}V=new WeakMap,W=new WeakMap;const En=new bn,wn={list:document.querySelector(".popular-recipes-list"),list_mobile:document.querySelector(".popular-list.popular-recipes-mobile")};async function Sn(){const t=(await En.getRecipesData()).map(n=>`<li class="popular-recipes-item" data-id="${n._id}">
      <div class="popular-recipes-wraper">
        <img
          class="popular-recipes-img"
          src="${n.preview}"
          alt="${n.title}"
          loading="slow"
        />
      </div>
      <div class="popular-container-def">
        <h3 class="popular-recipes-title">${n.title}</h3>
        <p class="popular-recipes-description">${n.description}</p>
      </div>
    </li>`).join("");wn.list.insertAdjacentHTML("beforeend",t)}Sn();const ge="https://tasty-treats-backend.p.goit.global/api/recipes";async function Rn(){try{return(await L("https://tasty-treats-backend.p.goit.global/api/areas")).data}catch{}}async function An(){try{return(await L("https://tasty-treats-backend.p.goit.global/api/ingredients")).data}catch{}}async function On(e){try{return(await L(`${ge}?title=${_}&page=1&limit=15&time=${ee}&area=${e}&ingredients=${k}`)).data.results}catch{}}async function Tn(e){try{return(await L(`${ge}?title=${_}&page=1&limit=15&time=${ee}&area=${D}&ingredient=${e}`)).data.results}catch{}}async function Nn(e){try{return(await L(`${ge}?title=${e}&page=1&limit=15&time=${ee}&area=${D}&ingredients=${k}`)).data.results}catch{}}const Ln=document.querySelector(".filter-form"),xn=document.querySelector(".filter-input");document.querySelector(".filter-time");const Ke=document.querySelector(".filter-area"),Ge=document.querySelector(".filter-ingredients"),fe=document.querySelector(".filter-list"),Pn=document.querySelector(".filter-btn-reset");let _="",ee="",D="",k="";xn.addEventListener("input",Cn(Fn,300));Ke.addEventListener("change",e=>{D=e.currentTarget.value,On(D).then(t=>{be(t)})});Ge.addEventListener("change",e=>{k=e.currentTarget.value,Tn(k).then(t=>{be(t)})});Pn.addEventListener("click",e=>{_="",ee="",D="",k="",Ln.reset()});Rn().then(e=>{e.map(t=>{const n=`<option value = "${t.name}">${t.name}</option>`;Ke.insertAdjacentHTML("beforeend",n)})}).catch(()=>{});An().then(e=>{e.map(t=>{const n=`<option value = "${t._id}">${t.name}</option>`;Ge.insertAdjacentHTML("beforeend",n)})}).catch(()=>{});function Cn(e,t){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function Fn(e){_=e.target.value.trim(),Nn(_).then(t=>{t.length!==0?be(t):fe.insertAdjacentHTML("beforeend",`<div class="filter-answer-block"> 
            <img class="filter-answer-img" src="" alt=""> 
            <h3 class="filter-answer-text">Sorry! We didn't find anything.</h3> 
        </div>`)}).catch(()=>{})}function be(e){fe.innerHTML="",e.map(t=>{const n=t.thumb,r=t.title,s=t.rating,o=t.description,i=Math.round(t.rating);fe.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${n}" alt="${r}" />
        <button class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${r}</h4>
          <p class="filter-img-text">${o}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block">
              <p class="filter-reiting">${s}</p>
              <svg class="filter-star" width="18" height="18"><use href="../img_header/svg/heart-star.svg#icon-Star-transparent"></use></svg>*${i}
              <svg class="filter-star" width="18" height="18"><use href="../img_header/svg/heart-star.svg#icon-Star-transparent"></use></svg>
              <svg class="filter-star" width="18" height="18"><use href="../img_header/svg/heart-star.svg#icon-Star-transparent"></use></svg>
              <svg class="filter-star" width="18" height="18"><use href="../img_header/svg/heart-star.svg#icon-Star-transparent"></use></svg>
              <svg class="filter-star" width="18" height="18"><use href="../img_header/svg/heart-star.svg#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})}const Xe=document.querySelector(".js-menu-container"),J=document.querySelector(".js-open-menu"),Bn=document.querySelector(".js-close-menu"),Qe=()=>{const e=J.getAttribute("aria-expanded")==="true"||!1;J.setAttribute("aria-expanded",!e),Xe.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};J.addEventListener("click",Qe);Bn.addEventListener("click",Qe);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(Xe.classList.remove("is-open"),J.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});const _n="https://tasty-treats-backend.p.goit.global/api/recipes/",Dn=document.getElementById("video"),kn=document.querySelector(".recipes-title"),vn=document.querySelector(".tags-mobile"),Un=document.querySelector(".tags-desktop"),Mn=document.querySelector(".time"),jn=document.querySelector("#btn-add");let O=null;async function qn(e){try{const t=await L.get(`${_n}${e}`);return console.log(t),t.data}catch{console.log("Sorry, there are no recipes")}}function $n(e){const t=e.youtube.split("/");Dn.innerHTML=`<iframe 
  class="iframe-modal" 
  src="https://www.youtube.com/embed/${t[t.length-1]}" 
  frameborder="0" 
  allowfullscreen>
</iframe>`}function In(e){kn.innerHTML=e.title}function Hn(e){const t=e.tags.map(n=>`<li class="recipe-tag">#${n}</li>`);vn.innerHTML=t,Un.innerHTML=t}function zn(e){Mn.innerHTML=`${e.time} min`}function Jn(){const e=JSON.parse(localStorage.getItem("favorite"));if(!e){const n=[];return n.push(O),localStorage.setItem("favorite",JSON.stringify(n))}const t=e.filter(n=>{if(n.id===O.id)return n});if(console.log(t),t.length===0){const n=[...e];return n.push(O),localStorage.setItem("favorite",JSON.stringify(n))}return console.log("Вже є такий рецепт")}const M={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backDrop:document.querySelector(".backdrop"),modal:document.querySelector("[data-modal]")};M.openModalBtn.addEventListener("click",Vn);M.closeModalBtn.addEventListener("click",Ye);M.backDrop.addEventListener("click",Ye);jn.addEventListener("click",Jn);async function Vn(e){M.modal.classList.remove("is-hidden"),O=await qn("6462a8f74c3d0ddd28897fb9"),console.log(O),$n(O),In(O),Hn(O),zn(O)}function Ye(){M.modal.classList.add("is-hidden")}
