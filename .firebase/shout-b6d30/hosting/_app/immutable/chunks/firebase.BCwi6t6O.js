var ho={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Bl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],c=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return t.join("")},fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],c=s+1<n.length,u=c?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,E=o>>2,A=(o&3)<<4|u>>4;let S=(u&15)<<2|f>>6,C=f&63;h||(C=64,c||(S=64)),r.push(e[E],e[A],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(da(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Bl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||A==null)throw new jl;const S=o<<2|u>>4;if(r.push(S),f!==64){const C=u<<4&240|f>>2;if(r.push(C),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $l=function(n){const t=da(n);return fa.encodeByteArray(t,!0)},ur=function(n){return $l(n).replace(/\./g,"")},pa=function(n){try{return fa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=()=>Hl().__FIREBASE_DEFAULTS__,zl=()=>{if(typeof process>"u"||typeof ho>"u")return;const n=ho.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pa(n[1]);return t&&JSON.parse(t)},br=()=>{try{return ql()||zl()||Gl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ga=n=>{var t,e;return(e=(t=br())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Wl=n=>{const t=ga(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ma=()=>{var n;return(n=br())===null||n===void 0?void 0:n.config},_a=n=>{var t;return(t=br())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ur(JSON.stringify(e)),ur(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Xl(){var n;const t=(n=br())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tu(){const n=ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eu(){return!Xl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nu(){try{return typeof indexedDB=="object"}catch{return!1}}function ru(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="FirebaseError";class jt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=iu,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],c=o?su(o,r):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new jt(s,u,r)}}function su(n,t){return n.replace(ou,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ou=/\{\$([^}]+)}/g;function au(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function hr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],c=t[s];if(fo(o)&&fo(c)){if(!hr(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function fo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function cu(n,t){const e=new lu(n,t);return e.subscribe.bind(e)}class lu{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");uu(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=hi),s.error===void 0&&(s.error=hi),s.complete===void 0&&(s.complete=hi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function hi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return n&&n._delegate?n._delegate:n}class pe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Kl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fu(t))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=le){return this.instances.has(t)}getOptions(t=le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:du(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=le){return this.component?this.component.multipleInstances?t:le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function du(n){return n===le?void 0:n}function fu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const gu={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},mu=x.INFO,_u={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},yu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=_u[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xi{constructor(t){this.name=t,this._logLevel=mu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const vu=(n,t)=>t.some(e=>n instanceof e);let po,go;function Eu(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iu(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ya=new WeakMap,Ii=new WeakMap,va=new WeakMap,di=new WeakMap,Ui=new WeakMap;function Tu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(Yt(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&ya.set(e,n)}).catch(()=>{}),Ui.set(t,n),t}function wu(n){if(Ii.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Ii.set(n,t)}let Ti={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ii.get(n);if(t==="objectStoreNames")return n.objectStoreNames||va.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Au(n){Ti=n(Ti)}function Ru(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(fi(this),t,...e);return va.set(r,t.sort?t.sort():[t]),Yt(r)}:Iu().includes(n)?function(...t){return n.apply(fi(this),t),Yt(ya.get(this))}:function(...t){return Yt(n.apply(fi(this),t))}}function Su(n){return typeof n=="function"?Ru(n):(n instanceof IDBTransaction&&wu(n),vu(n,Eu())?new Proxy(n,Ti):n)}function Yt(n){if(n instanceof IDBRequest)return Tu(n);if(di.has(n))return di.get(n);const t=Su(n);return t!==n&&(di.set(n,t),Ui.set(t,n)),t}const fi=n=>Ui.get(n);function Pu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const c=indexedDB.open(n,t),u=Yt(c);return r&&c.addEventListener("upgradeneeded",h=>{r(Yt(c.result),h.oldVersion,h.newVersion,Yt(c.transaction),h)}),e&&c.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const bu=["get","getKey","getAll","getAllKeys","count"],Cu=["put","add","delete","clear"],pi=new Map;function mo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(pi.get(t))return pi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Cu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bu.includes(e)))return;const o=async function(c,...u){const h=this.transaction(c,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return pi.set(t,o),o}Au(n=>({...n,get:(t,e,r)=>mo(t,e)||n.get(t,e,r),has:(t,e)=>!!mo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Du(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Du(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",_o="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new xi("@firebase/app"),Nu="@firebase/app-compat",Ou="@firebase/analytics-compat",Vu="@firebase/analytics",Mu="@firebase/app-check-compat",Lu="@firebase/app-check",xu="@firebase/auth",Uu="@firebase/auth-compat",Fu="@firebase/database",Bu="@firebase/database-compat",ju="@firebase/functions",$u="@firebase/functions-compat",Hu="@firebase/installations",qu="@firebase/installations-compat",zu="@firebase/messaging",Gu="@firebase/messaging-compat",Wu="@firebase/performance",Ku="@firebase/performance-compat",Qu="@firebase/remote-config",Ju="@firebase/remote-config-compat",Xu="@firebase/storage",Yu="@firebase/storage-compat",Zu="@firebase/firestore",th="@firebase/vertexai-preview",eh="@firebase/firestore-compat",nh="firebase",rh="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]",ih={[wi]:"fire-core",[Nu]:"fire-core-compat",[Vu]:"fire-analytics",[Ou]:"fire-analytics-compat",[Lu]:"fire-app-check",[Mu]:"fire-app-check-compat",[xu]:"fire-auth",[Uu]:"fire-auth-compat",[Fu]:"fire-rtdb",[Bu]:"fire-rtdb-compat",[ju]:"fire-fn",[$u]:"fire-fn-compat",[Hu]:"fire-iid",[qu]:"fire-iid-compat",[zu]:"fire-fcm",[Gu]:"fire-fcm-compat",[Wu]:"fire-perf",[Ku]:"fire-perf-compat",[Qu]:"fire-rc",[Ju]:"fire-rc-compat",[Xu]:"fire-gcs",[Yu]:"fire-gcs-compat",[Zu]:"fire-fst",[eh]:"fire-fst-compat",[th]:"fire-vertex","fire-js":"fire-js",[nh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Map,sh=new Map,Ri=new Map;function yo(n,t){try{n.container.addComponent(t)}catch(e){ge.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function De(n){const t=n.name;if(Ri.has(t))return ge.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,n);for(const e of gn.values())yo(e,n);for(const e of sh.values())yo(e,n);return!0}function Fi(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Xt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new An("app","Firebase",oh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=rh;function Ea(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(e||(e=ma()),!e)throw Zt.create("no-options");const o=gn.get(s);if(o){if(hr(e,o.options)&&hr(r,o.config))return o;throw Zt.create("duplicate-app",{appName:s})}const c=new pu(s);for(const h of Ri.values())c.addComponent(h);const u=new ah(e,r,c);return gn.set(s,u),u}function Ia(n=Ai){const t=gn.get(n);if(!t&&n===Ai&&ma())return Ea();if(!t)throw Zt.create("no-app",{appName:n});return t}function vo(){return Array.from(gn.values())}function te(n,t,e){var r;let s=(r=ih[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&u.push("and"),c&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ge.warn(u.join(" "));return}De(new pe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="firebase-heartbeat-database",lh=1,mn="firebase-heartbeat-store";let gi=null;function Ta(){return gi||(gi=Pu(ch,lh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),gi}async function uh(n){try{const e=(await Ta()).transaction(mn),r=await e.objectStore(mn).get(wa(n));return await e.done,r}catch(t){if(t instanceof jt)ge.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ge.warn(e.message)}}}async function Eo(n,t){try{const r=(await Ta()).transaction(mn,"readwrite");await r.objectStore(mn).put(t,wa(n)),await r.done}catch(e){if(e instanceof jt)ge.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ge.warn(r.message)}}}function wa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=1024,dh=30*24*60*60*1e3;class fh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Io();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const u=new Date(c.date).valueOf();return Date.now()-u<=dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Io(),{heartbeatsToSend:r,unsentEntries:s}=ph(this._heartbeatsCache.heartbeats),o=ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Io(){return new Date().toISOString().substring(0,10)}function ph(n,t=hh){const e=[];let r=n.slice();for(const s of n){const o=e.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),To(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class gh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nu()?ru().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await uh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function To(n){return ur(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){De(new pe("platform-logger",t=>new ku(t),"PRIVATE")),De(new pe("heartbeat",t=>new fh(t),"PRIVATE")),te(wi,_o,n),te(wi,_o,"esm2017"),te("fire-js","")}mh("");var _h="firebase",yh="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(_h,yh,"app");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Aa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(_,y,T){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return p.prototype[y].apply(_,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var y=0;16>y;++y)_[y]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],y=v.g[2];var T=v.g[3],g=p+(T^m&(y^T))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[2]+606105819&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[3]+3250441966&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[6]+2821735955&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[7]+4249261313&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[10]+4294925233&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[11]+2304563134&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(T^m&(y^T))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=T+(y^p&(m^y))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=y+(m^T&(p^m))+_[14]+2792965006&4294967295,y=T+(g<<17&4294967295|g>>>15),g=m+(p^y&(T^p))+_[15]+1236535329&4294967295,m=y+(g<<22&4294967295|g>>>10),g=p+(y^T&(m^y))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[11]+643717713&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[0]+3921069994&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[15]+3634488961&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[4]+3889429448&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[3]+4107603335&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[8]+1163531501&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(y^T&(m^y))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=T+(m^y&(p^m))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=y+(p^m&(T^p))+_[7]+1735328473&4294967295,y=T+(g<<14&4294967295|g>>>18),g=m+(T^p&(y^T))+_[12]+2368359562&4294967295,m=y+(g<<20&4294967295|g>>>12),g=p+(m^y^T)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[11]+1839030562&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[14]+4259657740&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[7]+4139469664&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[10]+3200236656&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[3]+3572445317&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[6]+76029189&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(m^y^T)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=T+(p^m^y)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=y+(T^p^m)+_[15]+530742520&4294967295,y=T+(g<<16&4294967295|g>>>16),g=m+(y^T^p)+_[2]+3299628645&4294967295,m=y+(g<<23&4294967295|g>>>9),g=p+(y^(m|~T))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[14]+2878612391&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[5]+4237533241&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[10]+4293915773&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[1]+2240044497&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[6]+2734768916&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[13]+1309151649&4294967295,m=y+(g<<21&4294967295|g>>>11),g=p+(y^(m|~T))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=T+(m^(p|~y))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=y+(p^(T|~m))+_[2]+718787259&4294967295,y=T+(g<<15&4294967295|g>>>17),g=m+(T^(y|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,_=this.B,y=this.h,T=0;T<p;){if(y==0)for(;T<=m;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<p;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)v[m++]=this.g[p]>>>_&255;return v};function o(v,p){var m=u;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function c(v,p){this.h=p;for(var m=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==p||(m[y]=T,_=!1)}this.g=m}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new c([p|0],0>p?-1:0)}):new c([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return N(f(-v));for(var p=[],m=1,_=0;v>=m;_++)p[_]=v/m|0,m*=4294967296;return new c(p,0)}function E(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return N(E(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=A,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),g=parseInt(v.substring(y,y+T),p);8>T?(T=f(Math.pow(p,T)),_=_.j(T).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var A=h(0),S=h(1),C=h(16777216);n=c.prototype,n.m=function(){if(L(this))return-N(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+N(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,_="";;){var y=Y(m,p).g;m=q(m,y.j(p));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=y,k(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=q(this,v),L(v)?-1:k(v)?0:1};function N(v){for(var p=v.g.length,m=[],_=0;_<p;_++)m[_]=~v.g[_];return new c(m,~v.h).add(S)}n.abs=function(){return L(this)?N(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0,y=0;y<=p;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),g=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=g>>>16,T&=65535,g&=65535,m[y]=g<<16|T}return new c(m,m[m.length-1]&-2147483648?-1:0)};function q(v,p){return v.add(N(p))}n.j=function(v){if(k(this)||k(v))return A;if(L(this))return L(v)?N(this).j(N(v)):N(N(this).j(v));if(L(v))return N(this.j(N(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,g=this.i(_)&65535,kt=v.i(y)>>>16,$e=v.i(y)&65535;m[2*_+2*y]+=g*$e,$(m,2*_+2*y),m[2*_+2*y+1]+=T*$e,$(m,2*_+2*y+1),m[2*_+2*y+1]+=g*kt,$(m,2*_+2*y+1),m[2*_+2*y+2]+=T*kt,$(m,2*_+2*y+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new c(m,0)};function $(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function z(v,p){this.g=v,this.h=p}function Y(v,p){if(k(p))throw Error("division by zero");if(k(v))return new z(A,A);if(L(v))return p=Y(N(v),p),new z(N(p.g),N(p.h));if(L(p))return p=Y(v,N(p)),new z(N(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=p;0>=_.l(v);)m=St(m),_=St(_);var y=Z(m,1),T=Z(_,1);for(_=Z(_,2),m=Z(m,2);!k(_);){var g=T.add(_);0>=g.l(v)&&(y=y.add(m),T=g),_=Z(_,1),m=Z(m,1)}return p=q(v,y.j(p)),new z(y,p)}for(y=A;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=f(m),g=T.j(p);L(g)||0<g.l(v);)m-=_,T=f(m),g=T.j(p);k(T)&&(T=S),y=y.add(T),v=q(v,g)}return new z(y,v)}n.A=function(v){return Y(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&v.i(_);return new c(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|v.i(_);return new c(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^v.i(_);return new c(m,this.h^v.h)};function St(v){for(var p=v.g.length+1,m=[],_=0;_<p;_++)m[_]=v.i(_)<<1|v.i(_-1)>>>31;return new c(m,v.h)}function Z(v,p){var m=p>>5;p%=32;for(var _=v.g.length-m,y=[],T=0;T<_;T++)y[T]=0<p?v.i(T+m)>>>p|v.i(T+m+1)<<32-p:v.i(T+m);return new c(y,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=E,Aa=c}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ra,Sa,ln,Pa,rr,Si,ba,Ca,ka;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},u=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function E(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(a,I)}}return function(){return i.apply(a,arguments)}}function S(i,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,S.apply(null,arguments)}function C(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,w){for(var b=Array(arguments.length-2),j=2;j<arguments.length;j++)b[j-2]=arguments[j];return a.prototype[I].apply(d,b)}}function L(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function N(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,w=d.length||0;i.length=I+w;for(let b=0;b<w;b++)i[I+b]=d[b]}else i.push(d)}}class q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var St=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function Z(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function v(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function p(i){const a={};for(const l in i)a[l]=i[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let w=0;w<m.length;w++)l=m[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function y(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function T(i){u.setTimeout(()=>{throw i},0)}function g(){var i=jr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const d=$e.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var $e=new q(()=>new sl,i=>i.reset());class sl{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let He,qe=!1,jr=new kt,hs=()=>{const i=u.Promise.resolve(void 0);He=()=>{i.then(ol)}};var ol=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){T(l)}var a=$e;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}qe=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var al=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return i}();function ze(i,a){if(lt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(St){t:{try{Y(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:cl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ze.aa.h.call(this)}}k(ze,lt);var cl={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),ll=0;function ul(i,a,l,d,I){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++ll,this.da=this.fa=!1}function Vn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Mn(i){this.src=i,this.g={},this.h=0}Mn.prototype.add=function(i,a,l,d,I){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=Hr(i,a,d,I);return-1<b?(a=i[b],l||(a.fa=!1)):(a=new ul(a,this.src,w,!!d,I),a.fa=l,i.push(a)),a};function $r(i,a){var l=a.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(Vn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Hr(i,a,l,d){for(var I=0;I<i.length;++I){var w=i[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),zr={};function ds(i,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ds(i,a[w],l,d,I);return null}return l=gs(l),i&&i[On]?i.K(a,l,f(d)?!!d.capture:!!d,I):hl(i,a,l,!1,d,I)}function hl(i,a,l,d,I,w){if(!a)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,j=Wr(i);if(j||(i[qr]=j=new Mn(i)),l=j.add(a,l,d,b,w),l.proxy)return l;if(d=dl(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)al||(I=b),I===void 0&&(I=!1),i.addEventListener(a.toString(),d,I);else if(i.attachEvent)i.attachEvent(ps(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function dl(){function i(l){return a.call(i.src,i.listener,l)}const a=fl;return i}function fs(i,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)fs(i,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=gs(l),i&&i[On]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=Hr(w,l,d,I),-1<l&&(Vn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Wr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Hr(a,l,d,I)),(l=-1<i?a[i]:null)&&Gr(l))}function Gr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[On])$r(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(ps(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Wr(a))?($r(l,i),l.h==0&&(l.src=null,a[qr]=null)):Vn(i)}}}function ps(i){return i in zr?zr[i]:zr[i]="on"+i}function fl(i,a){if(i.da)i=!0;else{a=new ze(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&Gr(i),i=l.call(d,a)}return i}function Wr(i){return i=i[qr],i instanceof Mn?i:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(i){return typeof i=="function"?i:(i[Kr]||(i[Kr]=function(a){return i.handleEvent(a)}),i[Kr])}function ut(){$t.call(this),this.i=new Mn(this),this.M=this,this.F=null}k(ut,$t),ut.prototype[On]=!0,ut.prototype.removeEventListener=function(i,a,l,d){fs(this,i,a,l,d)};function _t(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new lt(a,i);else if(a instanceof lt)a.target=a.target||i;else{var I=a;a=new lt(d,i),_(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var b=a.g=l[w];I=Ln(b,d,!0,a)&&I}if(b=a.g=i,I=Ln(b,d,!0,a)&&I,I=Ln(b,d,!1,a)&&I,l)for(w=0;w<l.length;w++)b=a.g=l[w],I=Ln(b,d,!1,a)&&I}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)Vn(l[d]);delete i.g[a],i.h--}}this.F=null},ut.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},ut.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function Ln(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==l){var j=b.listener,it=b.ha||b.src;b.fa&&$r(i.i,b),I=j.call(it,d)!==!1&&I}}return I&&!d.defaultPrevented}function ms(i,a,l){if(typeof i=="function")l&&(i=S(i,l));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(i,a||0)}function _s(i){i.g=ms(()=>{i.g=null,i.i&&(i.i=!1,_s(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class pl extends $t{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:_s(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){$t.call(this),this.h=i,this.g={}}k(Ge,$t);var ys=[];function vs(i){Z(i.g,function(a,l){this.g.hasOwnProperty(l)&&Gr(a)},i),i.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),vs(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=u.JSON.stringify,gl=u.JSON.parse,ml=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Jr(){}Jr.prototype.h=null;function Es(i){return i.h||(i.h=i.i())}function Is(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){lt.call(this,"d")}k(Xr,lt);function Yr(){lt.call(this,"c")}k(Yr,lt);var se={},Ts=null;function xn(){return Ts=Ts||new ut}se.La="serverreachability";function ws(i){lt.call(this,se.La,i)}k(ws,lt);function Ke(i){const a=xn();_t(a,new ws(a))}se.STAT_EVENT="statevent";function As(i,a){lt.call(this,se.STAT_EVENT,i),this.stat=a}k(As,lt);function yt(i){const a=xn();_t(a,new As(a,i))}se.Ma="timingevent";function Rs(i,a){lt.call(this,se.Ma,i),this.size=a}k(Rs,lt);function Qe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},a)}function Je(){this.g=!0}Je.prototype.xa=function(){this.g=!1};function _l(i,a,l,d,I,w){i.info(function(){if(i.g)if(w)for(var b="",j=w.split("&"),it=0;it<j.length;it++){var B=j[it].split("=");if(1<B.length){var ht=B[0];B=B[1];var dt=ht.split("_");b=2<=dt.length&&dt[1]=="type"?b+(ht+"="+B+"&"):b+(ht+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+b})}function yl(i,a,l,d,I,w,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+b})}function Ie(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+El(i,l)+(d?" "+d:"")})}function vl(i,a){i.info(function(){return"TIMEOUT: "+a})}Je.prototype.info=function(){};function El(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Qr(l)}catch{return a}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ss={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function Fn(){}k(Fn,Jr),Fn.prototype.g=function(){return new XMLHttpRequest},Fn.prototype.i=function(){return{}},Zr=new Fn;function Ht(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ps}function Ps(){this.i=null,this.g="",this.h=!1}var bs={},ti={};function ei(i,a,l){i.L=1,i.v=Hn(Dt(a)),i.m=l,i.P=!0,Cs(i,null)}function Cs(i,a){i.F=Date.now(),Bn(i),i.A=Dt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Hs(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Ps,i.g=ao(i.j,l?a:null,!i.m),0<i.O&&(i.M=new pl(S(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(ys[0]=I.toString()),I=ys);for(var w=0;w<I.length;w++){var b=ds(l,I[w],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ke(),_l(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const dt=Nt(this.g);var a=this.g.Ba();const Ae=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Js(this.g)))){this.J||dt!=4||a==7||(a==8||0>=Ae?Ke(3):Ke(2)),ni(this);var l=this.g.Z();this.X=l;e:if(ks(this)){var d=Js(this.g);i="";var I=d.length,w=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Xe(this);var b="";break e}this.h.i=new u.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,yl(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var j,it=this.g;if((j=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(j)){var B=j;break e}}B=null}if(l=B)Ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ri(this,l);else{this.o=!1,this.s=3,yt(12),oe(this),Xe(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<b.length;)if(It=Il(this,b),It==ti){dt==4&&(this.s=4,yt(14),l=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(It==bs){this.s=4,yt(15),Ie(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else Ie(this.i,this.l,It,null),ri(this,It);if(ks(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||b.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)Ie(this.i,this.l,b,"[Invalid Chunked Response]"),oe(this),Xe(this);else if(0<b.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),li(ht),ht.M=!0,yt(11))}}else Ie(this.i,this.l,b,null),ri(this,b);dt==4&&oe(this),this.o&&!this.J&&(dt==4?ro(this.j,this):(this.o=!1,Bn(this)))}else Ul(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),oe(this),Xe(this)}}}catch{}finally{}};function ks(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Il(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?ti:(l=Number(a.substring(l,d)),isNaN(l)?bs:(d+=1,d+l>a.length?ti:(a=a.slice(d,d+l),i.C=d+l,a)))}Ht.prototype.cancel=function(){this.J=!0,oe(this)};function Bn(i){i.S=Date.now()+i.I,Ds(i,i.I)}function Ds(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(S(i.ba,i),a)}function ni(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(vl(this.i,this.A),this.L!=2&&(Ke(),yt(17)),oe(this),this.s=2,Xe(this)):Ds(this,this.S-i)};function Xe(i){i.j.G==0||i.J||ro(i.j,i)}function oe(i){ni(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,vs(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function ri(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ii(l.h,i))){if(!i.K&&ii(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Kn(l),Gn(l);else break t;ci(l),yt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Qe(S(l.Za,l),6e3));if(1>=Vs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ce(l,11)}else if((i.K||l.g==i)&&Kn(l),!$(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let B=I[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ht=B[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=B[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const Ae=B[5];Ae!=null&&typeof Ae=="number"&&0<Ae&&(d=1.5*Ae,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const It=i.g;if(It){const Jn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var w=d.h;w.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(si(w,w.h),w.h=null))}if(d.D){const ui=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;ui&&(d.ya=ui,G(d.I,d.D,ui))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=oo(d,d.J?d.ia:null,d.W),b.K){Ms(d.h,b);var j=b,it=d.L;it&&(j.I=it),j.B&&(ni(j),Bn(j)),d.g=b}else eo(d);0<l.i.length&&Wn(l)}else B[0]!="stop"&&B[0]!="close"||ce(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?ce(l,7):ai(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Ke(4)}catch{}}var Tl=class{constructor(i,a){this.g=i,this.map=a}};function Ns(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Os(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vs(i){return i.h?1:i.g?i.g.size:0}function ii(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function si(i,a){i.g?i.g.add(a):i.h=a}function Ms(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Ns.prototype.cancel=function(){if(this.i=Ls(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ls(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return L(i.i)}function wl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function Al(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function xs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=Al(i),d=wl(i),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],i)}var Us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rl(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var w=i[l].substring(0,d);I=i[l].substring(d+1)}else w=i[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ae){this.h=i.h,jn(this,i.j),this.o=i.o,this.g=i.g,$n(this,i.s),this.l=i.l;var a=i.i,l=new tn;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Fs(this,l),this.m=i.m}else i&&(a=String(i).match(Us))?(this.h=!1,jn(this,a[1]||"",!0),this.o=Ye(a[2]||""),this.g=Ye(a[3]||"",!0),$n(this,a[4]),this.l=Ye(a[5]||"",!0),Fs(this,a[6]||"",!0),this.m=Ye(a[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}ae.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ze(a,Bs,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ze(a,Bs,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ze(l,l.charAt(0)=="/"?bl:Pl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ze(l,kl)),i.join("")};function Dt(i){return new ae(i)}function jn(i,a,l){i.j=l?Ye(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function $n(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Fs(i,a,l){a instanceof tn?(i.i=a,Dl(i.i,i.h)):(l||(a=Ze(a,Cl)),i.i=new tn(a,i.h))}function G(i,a,l){i.i.set(a,l)}function Hn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ye(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ze(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Sl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Sl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Bs=/[#\/\?@]/g,Pl=/[#\?:]/g,bl=/[#\?]/g,Cl=/[#\?@]/g,kl=/#/g;function tn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Rl(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=tn.prototype,n.add=function(i,a){qt(this),this.i=null,i=Te(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function js(i,a){qt(i),a=Te(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function $s(i,a){return qt(i),a=Te(i,a),i.g.has(a)}n.forEach=function(i,a){qt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(a,I,d,this)},this)},this)},n.na=function(){qt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=i[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},n.V=function(i){qt(this);let a=[];if(typeof i=="string")$s(this,i)&&(a=a.concat(this.g.get(Te(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return qt(this),this.i=null,i=Te(this,i),$s(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Hs(i,a,l){js(i,a),0<l.length&&(i.i=null,i.g.set(Te(i,a),L(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=w;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),i.push(I)}}return this.i=i.join("&")};function Te(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Dl(i,a){a&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(js(this,d),Hs(this,I,l))},i)),i.j=a}function Nl(i,a){const l=new Je;if(u.Image){const d=new Image;d.onload=C(zt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(zt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(zt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(zt,l,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Ol(i,a){const l=new Je,d=new AbortController,I=setTimeout(()=>{d.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),zt(l,"TestPingServer: error",!1,a)})}function zt(i,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Vl(){this.g=new ml}function Ml(i,a,l){const d=l||"";try{xs(i,function(I,w){let b=I;f(I)&&(b=Qr(I)),a.push(d+w+"="+encodeURIComponent(b))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function en(i){this.l=i.Ub||null,this.j=i.eb||!1}k(en,Jr),en.prototype.g=function(){return new qn(this.l,this.j)},en.prototype.i=function(i){return function(){return i}}({});function qn(i,a){ut.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(qn,ut),n=qn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function qs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?nn(this):rn(this),this.readyState==3&&qs(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,nn(this))},n.Qa=function(i){this.g&&(this.response=i,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rn(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zs(i){let a="";return Z(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function oi(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=zs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):G(i,a,l))}function Q(i){ut.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Q,ut);var Ll=/^https?$/i,xl=["POST","PUT"];n=Q.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?Es(this.o):Es(Zr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Gs(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(xl,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Gs(this,w)}};function Gs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Ws(i),zn(i)}function Ws(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ks(this):this.bb())},n.bb=function(){Ks(this)};function Ks(i){if(i.h&&typeof c<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)ms(i.Ea,0,i);else if(_t(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var I=String(i.D).match(Us)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!Ll.test(I?I.toLowerCase():"")}l=d}if(l)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var w=2<Nt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Ws(i)}}finally{zn(i)}}}}function zn(i,a){if(i.g){Qs(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||_t(i,"ready");try{l.onreadystatechange=d}catch{}}}function Qs(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),gl(a)}};function Js(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ul(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if($(i[d]))continue;var l=y(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Xs(i){this.Aa=0,this.i=[],this.j=new Je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,i),this.cb=sn("retryDelaySeedMs",1e4,i),this.Wa=sn("forwardChannelMaxRetries",2,i),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ns(i&&i.concurrentRequestLimit),this.Da=new Vl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xs.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){yt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=oo(this,null,this.W),Wn(this)};function ai(i){if(Ys(i),i.G==3){var a=i.U++,l=Dt(i.I);if(G(l,"SID",i.K),G(l,"RID",a),G(l,"TYPE","terminate"),on(i,l),a=new Ht(i,i.j,a),a.L=2,a.v=Hn(Dt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.v,l=!0),l||(a.g=ao(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Bn(a)}so(i)}function Gn(i){i.g&&(li(i),i.g.cancel(),i.g=null)}function Ys(i){Gn(i),i.u&&(u.clearTimeout(i.u),i.u=null),Kn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Wn(i){if(!Os(i.h)&&!i.s){i.s=!0;var a=i.Ga;He||hs(),qe||(He(),qe=!0),jr.add(a,i),i.B=0}}function Fl(i,a){return Vs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(S(i.Ga,i,a),io(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Ht(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=to(this,I,a),l=Dt(this.I),G(l,"RID",i),G(l,"CVER",22),this.D&&G(l,"X-HTTP-Session-Id",this.D),on(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(zs(w)))+"&"+a:this.m&&oi(l,this.m,w)),si(this.h,I),this.Ua&&G(l,"TYPE","init"),this.P?(G(l,"$req",a),G(l,"SID","null"),I.T=!0,ei(I,l,null)):ei(I,l,a),this.G=2}}else this.G==3&&(i?Zs(this,i):this.i.length==0||Os(this.h)||Zs(this))};function Zs(i,a){var l;a?l=a.l:l=i.U++;const d=Dt(i.I);G(d,"SID",i.K),G(d,"RID",l),G(d,"AID",i.T),on(i,d),i.m&&i.o&&oi(d,i.m,i.o),l=new Ht(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=to(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),si(i.h,l),ei(l,d,a)}function on(i,a){i.H&&Z(i.H,function(l,d){G(a,d,l)}),i.l&&xs({},function(l,d){G(a,d,l)})}function to(i,a,l){l=Math.min(i.i.length,l);var d=i.l?S(i.l.Na,i.l,i):null;t:{var I=i.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=I[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let j=!0;for(let it=0;it<l;it++){let B=I[it].g;const ht=I[it].map;if(B-=w,0>B)w=Math.max(0,I[it].g-100),j=!1;else try{Ml(ht,b,"req"+B+"_")}catch{d&&d(ht)}}if(j){d=b.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function eo(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;He||hs(),qe||(He(),qe=!0),jr.add(a,i),i.v=0}}function ci(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(S(i.Fa,i),io(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,no(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Gn(this),no(this))};function li(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function no(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),on(i,a),i.m&&i.o&&oi(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Hn(Dt(a)),l.m=null,l.P=!0,Cs(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Gn(this),ci(this),yt(19))};function Kn(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ro(i,a){var l=null;if(i.g==a){Kn(i),li(i),i.g=null;var d=2}else if(ii(i.h,a))l=a.D,Ms(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=i.B;d=xn(),_t(d,new Rs(d,l)),Wn(i)}else eo(i);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Fl(i,a)||d==2&&ci(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),I){case 1:ce(i,5);break;case 4:ce(i,10);break;case 3:ce(i,6);break;default:ce(i,2)}}}function io(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ce(i,a){if(i.j.info("Error code "+a),a==2){var l=S(i.fb,i),d=i.Xa;const I=!d;d=new ae(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||jn(d,"https"),Hn(d),I?Nl(d.toString(),l):Ol(d.toString(),l)}else yt(2);i.G=0,i.l&&i.l.sa(a),so(i),Ys(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function so(i){if(i.G=0,i.ka=[],i.l){const a=Ls(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function oo(i,a,l){var d=l instanceof ae?Dt(l):new ae(l);if(d.g!="")a&&(d.g=a+"."+d.g),$n(d,d.s);else{var I=u.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ae(null);d&&jn(w,d),a&&(w.g=a),I&&$n(w,I),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&G(d,l,a),G(d,"VER",i.la),on(i,d),d}function ao(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Q(new en({eb:l})):new Q(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function co(){}n=co.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qn(){}Qn.prototype.g=function(i,a){return new Et(i,a)};function Et(i,a){ut.call(this),this.g=new Xs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!$(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new we(this)}k(Et,ut),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ai(this.g)},Et.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Qr(i),i=l);a.i.push(new Tl(a.Ya++,i)),a.G==3&&Wn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,ai(this.g),delete this.g,Et.aa.N.call(this)};function lo(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(lo,Xr);function uo(){Yr.call(this),this.status=1}k(uo,Yr);function we(i){this.g=i}k(we,co),we.prototype.ua=function(){_t(this.g,"a")},we.prototype.ta=function(i){_t(this.g,new lo(i))},we.prototype.sa=function(i){_t(this.g,new uo)},we.prototype.ra=function(){_t(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,ka=function(){return new Qn},Ca=function(){return xn()},ba=se,Si={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,rr=Un,Ss.COMPLETE="complete",Pa=Ss,Is.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",ut.prototype.listen=ut.prototype.K,ln=Is,Sa=en,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,Ra=Q}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new xi("@firebase/firestore");function an(){return me.logLevel}function D(n,...t){if(me.logLevel<=x.DEBUG){const e=t.map(Bi);me.debug(`Firestore (${Fe}): ${n}`,...e)}}function _e(n,...t){if(me.logLevel<=x.ERROR){const e=t.map(Bi);me.error(`Firestore (${Fe}): ${n}`,...e)}}function dr(n,...t){if(me.logLevel<=x.WARN){const e=t.map(Bi);me.warn(`Firestore (${Fe}): ${n}`,...e)}}function Bi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const t=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: `+n;throw _e(t),new Error(t)}function rt(n,t){n||U()}function W(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends jt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Eh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ih{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new he;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new he,t.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new he)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new Da(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new pt(t)}}class Th{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Th(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ah{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new Ah(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Sh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Ne(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new nt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new nt(0,0))}static max(){return new K(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(),r===void 0?r=t.length-e:r>t.length-e&&U(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return _n.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _n?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),c=e.get(s);if(o<c)return-1;if(o>c)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends _n{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Ph=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends _n{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Ph.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(c=!c,s++):u!=="."||c?(r+=u,s++):(o(),s++)}if(o(),c)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}function bh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new ne(s,M.empty(),t)}function Ch(n){return new ne(n.readTime,n.key,-1)}class ne{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ne(K.min(),M.empty(),-1)}static max(){return new ne(K.max(),M.empty(),-1)}}function kh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Dh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,c=!1;t.forEach(u=>{++s,u.next(()=>{++o,c&&o===s&&e()},h=>r(h))}),c=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,c=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(E=>{c[f]=E,++u,u===o&&r(c)},E=>s(E))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Oh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Cr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Va.oe=-1;function ji(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function Vh(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ma(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new st(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,r,s,o){return this}insert(t,e,r){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new So(this.data.getIterator())}getIteratorFrom(t){return new So(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class So{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new At([])}unionWith(t){let e=new mt(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Mh("Invalid base64 string: "+o):o}}(t);return new Ut(e)}static fromUint8Array(t){const e=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(t);return new Ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(n){if(rt(!!n),typeof n=="string"){let t=0;const e=Lh.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function La(n){const t=n.mapValue.fields.__previous_value__;return $i(t)?La(t):t}function pr(n){const t=ye(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,r,s,o,c,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class gr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$i(n)?4:Uh(n)?9007199254740991:10:U()}function Ct(n,t){if(n===t)return!0;const e=Oe(n);if(e!==Oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pr(n).isEqual(pr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=ye(s.timestampValue),u=ye(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return yn(s.bytesValue).isEqual(yn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ot(s.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ot(s.integerValue)===ot(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const c=ot(s.doubleValue),u=ot(o.doubleValue);return c===u?fr(c)===fr(u):isNaN(c)&&isNaN(u)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:return function(s,o){const c=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Ro(c)!==Ro(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!Ct(c[h],u[h])))return!1;return!0}(n,t);default:return U()}}function vn(n,t){return(n.values||[]).find(e=>Ct(e,t))!==void 0}function Ve(n,t){if(n===t)return 0;const e=Oe(n),r=Oe(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,c){const u=ot(o.integerValue||o.doubleValue),h=ot(c.integerValue||c.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Po(n.timestampValue,t.timestampValue);case 4:return Po(pr(n),pr(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,c){const u=yn(o),h=yn(c);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const u=o.split("/"),h=c.split("/");for(let f=0;f<u.length&&f<h.length;f++){const E=H(u[f],h[f]);if(E!==0)return E}return H(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const u=H(ot(o.latitude),ot(c.latitude));return u!==0?u:H(ot(o.longitude),ot(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,c){const u=o.values||[],h=c.values||[];for(let f=0;f<u.length&&f<h.length;++f){const E=Ve(u[f],h[f]);if(E)return E}return H(u.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,c){if(o===Zn.mapValue&&c===Zn.mapValue)return 0;if(o===Zn.mapValue)return 1;if(c===Zn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=c.fields||{},E=Object.keys(f);h.sort(),E.sort();for(let A=0;A<h.length&&A<E.length;++A){const S=H(h[A],E[A]);if(S!==0)return S;const C=Ve(u[h[A]],f[E[A]]);if(C!==0)return C}return H(h.length,E.length)}(n.mapValue,t.mapValue);default:throw U()}}function Po(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=ye(n),r=ye(t),s=H(e.seconds,r.seconds);return s!==0?s:H(e.nanos,r.nanos)}function Me(n){return Pi(n)}function Pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ye(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return yn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Pi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const c of r)o?o=!1:s+=",",s+=`${c}:${Pi(e.fields[c])}`;return s+"}"}(n.mapValue):U()}function bi(n){return!!n&&"integerValue"in n}function Hi(n){return!!n&&"arrayValue"in n}function ir(n){return!!n&&"mapValue"in n}function un(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=un(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=un(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Uh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=un(e)}setAll(t){let e=at.emptyPath(),r={},s=[];t.forEach((c,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}c?r[u.lastSegment()]=un(c):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Sn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(un(this.value))}}function xa(n){const t=[];return Sn(n.fields,(e,r)=>{const s=new at([e]);if(ir(r)){const o=xa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const c of o)t.push(s.child(c))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new Tt(t,0,K.min(),K.min(),K.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,K.min(),K.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,K.min(),K.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.position=t,this.inclusive=e}}function bo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],c=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),e.key):r=Ve(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Co(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ct(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{}class et extends Ua{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new jh(t,e,r):e==="array-contains"?new qh(t,r):e==="in"?new zh(t,r):e==="not-in"?new Gh(t,r):e==="array-contains-any"?new Wh(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new $h(t,r):new Hh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&Oe(this.value)===Oe(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Ua{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new re(t,e)}matches(t){return Fa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fa(n){return n.op==="and"}function Ba(n){return Bh(n)&&Fa(n)}function Bh(n){for(const t of n.filters)if(t instanceof re)return!1;return!0}function Ci(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Me(n.value);if(Ba(n))return n.filters.map(t=>Ci(t)).join(",");{const t=n.filters.map(e=>Ci(e)).join(",");return`${n.op}(${t})`}}function ja(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Ct(r.value,s.value)}(n,t):n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,c,u)=>o&&ja(c,s.filters[u]),!0):!1}(n,t):void U()}function $a(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`}(n):n instanceof re?function(e){return e.op.toString()+" {"+e.getFilters().map($a).join(" ,")+"}"}(n):"Filter"}class jh extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class $h extends et{constructor(t,e){super(t,"in",e),this.keys=Ha("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Hh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Ha("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ha(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class qh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hi(e)&&vn(e.arrayValue,this.value)}}class zh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class Gh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vn(this.value.arrayValue,e)}}class Wh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e=null,r=[],s=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=c,this.endAt=u,this.ue=null}}function ko(n,t=null,e=[],r=[],s=null,o=null,c=null){return new Kh(n,t,e,r,s,o,c)}function qi(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ci(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ji(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Me(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Me(r)).join(",")),t.ue=e}return t.ue}function zi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ja(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Co(n.startAt,t.startAt)&&Co(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e=null,r=[],s=[],o=null,c="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qh(n,t,e,r,s,o,c,u){return new kr(n,t,e,r,s,o,c,u)}function Jh(n){return new kr(n)}function Do(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xh(n){return n.collectionGroup!==null}function hn(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new mt(at.comparator);return c.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new _r(o,r))}),e.has(at.keyField().canonicalString())||t.ce.push(new _r(at.keyField(),r))}return t.ce}function de(n){const t=W(n);return t.le||(t.le=Yh(t,hn(n))),t.le}function Yh(n,t){if(n.limitType==="F")return ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const e=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ki(n,t,e){return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function qa(n,t){return zi(de(n),de(t))&&n.limitType===t.limitType}function za(n){return`${qi(de(n))}|lt:${n.limitType}`}function cn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>$a(s)).join(", ")}]`),ji(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Me(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Me(s)).join(",")),`Target(${r})`}(de(n))}; limitType=${n.limitType})`}function Gi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(c,u,h){const f=bo(c,u,h);return c.inclusive?f<=0:f<0}(r.startAt,hn(r),s)||r.endAt&&!function(c,u,h){const f=bo(c,u,h);return c.inclusive?f>=0:f>0}(r.endAt,hn(r),s))}(n,t)}function Zh(n){return(t,e)=>{let r=!1;for(const s of hn(n)){const o=td(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function td(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,c,u){const h=c.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Ve(h,f):U()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Sn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ma(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new vt(M.comparator);function yr(){return ed}const Ga=new vt(M.comparator);function tr(...n){let t=Ga;for(const e of n)t=t.insert(e.key,e);return t}function Wa(n){let t=Ga;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ue(){return dn()}function Ka(){return dn()}function dn(){return new Be(n=>n.toString(),(n,t)=>n.isEqual(t))}const nd=new vt(M.comparator),rd=new mt(M.comparator);function gt(...n){let t=rd;for(const e of n)t=t.add(e);return t}const id=new mt(H);function sd(){return id}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function Ja(n){return{integerValue:""+n}}function od(n,t){return Vh(t)?Ja(t):Qa(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this._=void 0}}function ad(n,t,e){return n instanceof vr?function(s,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$i(o)&&(o=La(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(e,t):n instanceof En?Ya(n,t):n instanceof In?Za(n,t):function(s,o){const c=Xa(s,o),u=No(c)+No(s.Pe);return bi(c)&&bi(s.Pe)?Ja(u):Qa(s.serializer,u)}(n,t)}function cd(n,t,e){return n instanceof En?Ya(n,t):n instanceof In?Za(n,t):e}function Xa(n,t){return n instanceof Er?function(r){return bi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class vr extends Dr{}class En extends Dr{constructor(t){super(),this.elements=t}}function Ya(n,t){const e=tc(t);for(const r of n.elements)e.some(s=>Ct(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Dr{constructor(t){super(),this.elements=t}}function Za(n,t){let e=tc(t);for(const r of n.elements)e=e.filter(s=>!Ct(s,r));return{arrayValue:{values:e}}}class Er extends Dr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function No(n){return ot(n.integerValue||n.doubleValue)}function tc(n){return Hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ld(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof En&&s instanceof En||r instanceof In&&s instanceof In?Ne(r.elements,s.elements,Ct):r instanceof Er&&s instanceof Er?Ct(r.Pe,s.Pe):r instanceof vr&&s instanceof vr}(n.transform,t.transform)}class ud{constructor(t,e){this.version=t,this.transformResults=e}}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Nr{}function ec(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new rc(n.key,Lt.none()):new Pn(n.key,n.data,Lt.none());{const e=n.data,r=wt.empty();let s=new mt(at.comparator);for(let o of t.fields)if(!s.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),s=s.add(o)}return new Ee(n.key,r,new At(s.toArray()),Lt.none())}}function hd(n,t,e){n instanceof Pn?function(s,o,c){const u=s.value.clone(),h=Vo(s.fieldTransforms,o,c.transformResults);u.setAll(h),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ee?function(s,o,c){if(!sr(s.precondition,o))return void o.convertToUnknownDocument(c.version);const u=Vo(s.fieldTransforms,o,c.transformResults),h=o.data;h.setAll(nc(s)),h.setAll(u),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof Pn?function(o,c,u,h){if(!sr(o.precondition,c))return u;const f=o.value.clone(),E=Mo(o.fieldTransforms,h,c);return f.setAll(E),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ee?function(o,c,u,h){if(!sr(o.precondition,c))return u;const f=Mo(o.fieldTransforms,h,c),E=c.data;return E.setAll(nc(o)),E.setAll(f),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,c,u){return sr(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,t,e)}function dd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Xa(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Oo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ne(r,s,(o,c)=>ld(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Nr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ee extends Nr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Vo(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],c=o.transform,u=t.data.field(o.field);r.set(o.field,cd(c,u,e[s]))}return r}function Mo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,c=e.data.field(s.field);r.set(s.field,ad(o,c,t))}return r}class rc extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fd extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&hd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ka();return this.mutations.forEach(s=>{const o=t.get(s.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(s.key)?null:u;const h=ec(c,u);h!==null&&r.set(s.key,h),c.isValidDocument()||c.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),gt())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>Oo(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>Oo(e,r))}}class Wi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return nd}();const o=t.mutations;for(let c=0;c<o.length;c++)s=s.insert(o[c].key,r[c].version);return new Wi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,F;function md(n){switch(n){default:return U();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function _d(n){if(n===void 0)return _e("GRPC error has no .code"),P.UNKNOWN;switch(n){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return U()}}(F=X||(X={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Aa([4294967295,4294967295],0);class yd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Di(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ed(n,t){return Di(n,t.toTimestamp())}function Pe(n){return rt(!!n),K.fromTimestamp(function(e){const r=ye(e);return new nt(r.seconds,r.nanos)}(n))}function ic(n,t){return Ni(n,t).canonicalString()}function Ni(n,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Id(n){const t=J.fromString(n);return rt(Cd(t)),t}function Oi(n,t){return ic(n.databaseId,t.path)}function Td(n){const t=Id(n);return t.length===4?J.emptyPath():Ad(t)}function wd(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ad(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lo(n,t,e){return{name:Oi(n,t),fields:e.value.mapValue.fields}}function Rd(n,t){let e;if(t instanceof Pn)e={update:Lo(n,t.key,t.value)};else if(t instanceof rc)e={delete:Oi(n,t.key)};else if(t instanceof Ee)e={update:Lo(n,t.key,t.data),updateMask:bd(t.fieldMask)};else{if(!(t instanceof fd))return U();e={verify:Oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,c){const u=c.transform;if(u instanceof vr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof En)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof In)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Er)return{fieldPath:c.field.canonicalString(),increment:u.Pe};throw U()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ed(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,t.precondition)),e}function Sd(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let c=s.updateTime?Pe(s.updateTime):Pe(o);return c.isEqual(K.min())&&(c=Pe(o)),new ud(c,s.transformResults||[])}(e,t))):[]}function Pd(n){let t=Td(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const E=e.from[0];E.allDescendants?s=E.collectionId:t=t.child(E.collectionId)}let o=[];e.where&&(o=function(A){const S=sc(A);return S instanceof re&&Ba(S)?S.getFilters():[S]}(e.where));let c=[];e.orderBy&&(c=function(A){return A.map(S=>function(k){return new _r(Re(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(A){let S;return S=typeof A=="object"?A.value:A,ji(S)?null:S}(e.limit));let h=null;e.startAt&&(h=function(A){const S=!!A.before,C=A.values||[];return new mr(C,S)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const S=!A.before,C=A.values||[];return new mr(C,S)}(e.endAt)),Qh(t,s,c,o,u,"F",h,f)}function sc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Re(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Re(e.unaryFilter.field);return et.create(c,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return et.create(Re(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return re.create(e.compositeFilter.filters.map(r=>sc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function Re(n){return at.fromServerFormat(n.fieldPath)}function bd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Cd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.ct=t}}function Dd(n){const t=Pd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ki(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this._n=new Od}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(ne.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(ne.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Od{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(J.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Le(0)}static Ln(){return new Le(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.changes=new Be(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&fn(r.mutation,s,At.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,gt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=gt()){const s=ue();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let c=tr();return o.forEach((u,h)=>{c=c.insert(u,h.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,gt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((c,u)=>{e.set(c,u)})})}computeViews(t,e,r,s){let o=yr();const c=dn(),u=function(){return dn()}();return e.forEach((h,f)=>{const E=r.get(f.key);s.has(f.key)&&(E===void 0||E.mutation instanceof Ee)?o=o.insert(f.key,f):E!==void 0?(c.set(f.key,E.mutation.getFieldMask()),fn(E.mutation,f,E.mutation.getFieldMask(),nt.now())):c.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,E)=>c.set(f,E)),e.forEach((f,E)=>{var A;return u.set(f,new Md(E,(A=c.get(f))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(t,e){const r=dn();let s=new vt((c,u)=>c-u),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const u of c)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let E=r.get(h)||At.empty();E=u.applyToLocalView(f,E),r.set(h,E);const A=(s.get(u.batchId)||gt()).add(h);s=s.insert(u.batchId,A)})}).next(()=>{const c=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,E=h.value,A=Ka();E.forEach(S=>{if(!o.has(S)){const C=ec(e.get(S),r.get(S));C!==null&&A.set(S,C),o=o.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(c){return M.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const c=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(ue());let u=-1,h=o;return c.next(f=>R.forEach(f,(E,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(E)?R.resolve():this.remoteDocumentCache.getEntry(t,E).next(S=>{h=h.insert(E,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,gt())).next(E=>({batchId:u,changes:Wa(E)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=tr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let c=tr();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const f=function(A,S){return new kr(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(E=>{E.forEach((A,S)=>{c=c.insert(A,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(c=>{o.forEach((h,f)=>{const E=f.getKey();c.get(E)===null&&(c=c.insert(E,Tt.newInvalidDocument(E)))});let u=tr();return c.forEach((h,f)=>{const E=o.get(h);E!==void 0&&fn(E.mutation,f,At.empty(),nt.now()),Gi(e,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Dd(s.bundledQuery),readTime:Pe(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.overlays=new vt(M.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=ue(),o=e.length+1,c=new M(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new vt((f,E)=>f-E);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let E=o.get(f.largestBatchId);E===null&&(E=ue(),o=o.insert(f.largestBatchId,E)),E.set(f.getKey(),f)}}const u=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,E)=>u.set(f,E)),!(u.size()>=s)););return R.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const c=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new gd(e,r));let o=this.hr.get(e);o===void 0&&(o=gt(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.Pr=new mt(tt.Ir),this.Tr=new mt(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new tt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new tt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new J([])),r=new tt(e,t),s=new tt(e,t+1),o=[];return this.Tr.forEachInRange([r,s],c=>{this.Ar(c),o.push(c.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new J([])),r=new tt(e,t),s=new tt(e,t+1);let o=gt();return this.Tr.forEachInRange([r,s],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new tt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class tt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new mt(tt.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new pd(o,e,r,s);this.mutationQueue.push(c);for(const u of s)this.wr=this.wr.add(new tt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(c)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],c=>{const u=this.Sr(c.pr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(H);return e.forEach(s=>{const o=new tt(s,0),c=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,c],u=>{r=r.add(u.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new tt(new M(o),0);let u=new mt(H);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.pr)),!0)},c),R.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new tt(e,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.vr=t,this.docs=function(){return new vt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,c=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=yr();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=yr();const c=e.path,u=new M(c.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:E}}=h.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||kh(Ch(E),r)<=0||(s.has(E.key)||Gi(e,E))&&(o=o.insert(E.key,E.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){U()}Fr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new jd(this)}getSize(t){return R.resolve(this.size)}}class jd extends Vd{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this.persistence=t,this.Mr=new Be(e=>qi(e),zi),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ki,this.targetCount=0,this.Lr=Le.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Le(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Mr.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(c=>{o.push(s.markPotentiallyOrphaned(t,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e){this.Br={},this.overlays={},this.kr=new Va(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new $d(this),this.indexManager=new Nd,this.remoteDocumentCache=function(s){return new Bd(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new kd(e),this.$r=new xd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ud,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Fd(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new qd(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class qd extends Nh{constructor(t){super(),this.currentSequenceNumber=t}}class Qi{constructor(t){this.persistence=t,this.zr=new Ki,this.jr=null}static Hr(t){return new Qi(t)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=M.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=gt(),s=gt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ji(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eu()?8:Oh(ct())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new zd;return this.Ji(t,e,c).next(u=>{if(o.result=u,this.Ui)return this.Yi(t,e,c,u.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(an()<=x.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",cn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(an()<=x.DEBUG&&D("QueryEngine","Query:",cn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(an()<=x.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",cn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,de(e))):R.resolve())}ji(t,e){if(Do(e))return R.resolve(null);let r=de(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ki(e,null,"F"),r=de(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=gt(...o);return this.zi.getDocuments(t,c).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,u);return this.Xi(e,f,c,h.readTime)?this.ji(t,ki(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,s){return Do(e)||s.isEqual(K.min())?R.resolve(null):this.zi.getDocuments(t,r).next(o=>{const c=this.Zi(e,o);return this.Xi(e,c,r,s)?R.resolve(null):(an()<=x.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cn(e)),this.es(t,c,e,bh(s,-1)).next(u=>u))})}Zi(t,e){let r=new mt(Zh(t));return e.forEach((s,o)=>{Gi(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return an()<=x.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",cn(e)),this.zi.getDocumentsMatchingQuery(t,e,ne.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new vt(H),this.rs=new Be(o=>qi(o),zi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ld(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Kd(n,t,e,r){return new Wd(n,t,e,r)}async function oc(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],u=[];let h=gt();for(const f of s){c.push(f.batchId);for(const E of f.mutations)h=h.add(E.key)}for(const f of o){u.push(f.batchId);for(const E of f.mutations)h=h.add(E.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:c,addedBatchIds:u}))})})}function Qd(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(u,h,f,E){const A=f.batch,S=A.keys();let C=R.resolve();return S.forEach(k=>{C=C.next(()=>E.getEntry(h,k)).next(L=>{const N=f.docVersions.get(k);rt(N!==null),L.version.compareTo(N)<0&&(A.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),E.addEntry(L)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=gt();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Jd(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Xd(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class xo{constructor(){this.activeTargetIds=sd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.no=new xo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new xo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er=null;function mi(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class nf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,c){const u=mi(),h=this.vo(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,c),this.Mo(e,h,f,s).then(E=>(D("RestConnection",`Received RPC '${e}' ${u}: `,E),E),E=>{throw dr("RestConnection",`RPC '${e}' ${u} failed with error: `,E,"url: ",h,"request:",s),E})}xo(e,r,s,o,c,u){return this.Co(e,r,s,o,c)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>e[c]=o),s&&s.headers.forEach((o,c)=>e[c]=o)}vo(e,r){const s=tf[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=mi();return new Promise((c,u)=>{const h=new Ra;h.setWithCredentials(!0),h.listenOnce(Pa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case rr.NO_ERROR:const E=h.getResponseJson();D(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(E)),c(E);break;case rr.TIMEOUT:D(ft,`RPC '${t}' ${o} timed out`),u(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const A=h.getStatus();if(D(ft,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(C.status);u(new O(k,C.message))}else u(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(P.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{D(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(ft,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=mi(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=ka(),u=Ca(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new Sa({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const E=o.join("");D(ft,`Creating RPC '${t}' stream ${s}: ${E}`,h);const A=c.createWebChannel(E,h);let S=!1,C=!1;const k=new ef({lo:N=>{C?D(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(D(ft,`Opening RPC '${t}' stream ${s} transport.`),A.open(),S=!0),D(ft,`RPC '${t}' stream ${s} sending:`,N),A.send(N))},ho:()=>A.close()}),L=(N,q,$)=>{N.listen(q,z=>{try{$(z)}catch(Y){setTimeout(()=>{throw Y},0)}})};return L(A,ln.EventType.OPEN,()=>{C||(D(ft,`RPC '${t}' stream ${s} transport opened.`),k.mo())}),L(A,ln.EventType.CLOSE,()=>{C||(C=!0,D(ft,`RPC '${t}' stream ${s} transport closed`),k.po())}),L(A,ln.EventType.ERROR,N=>{C||(C=!0,dr(ft,`RPC '${t}' stream ${s} transport errored:`,N),k.po(new O(P.UNAVAILABLE,"The operation could not be completed")))}),L(A,ln.EventType.MESSAGE,N=>{var q;if(!C){const $=N.data[0];rt(!!$);const z=$,Y=z.error||((q=z[0])===null||q===void 0?void 0:q.error);if(Y){D(ft,`RPC '${t}' stream ${s} received error:`,Y);const St=Y.status;let Z=function(m){const _=X[m];if(_!==void 0)return _d(_)}(St),v=Y.message;Z===void 0&&(Z=P.INTERNAL,v="Unknown error status: "+St+" with message "+Y.message),C=!0,k.po(new O(Z,v)),A.close()}else D(ft,`RPC '${t}' stream ${s} received:`,$),k.yo($)}}),L(u,ba.STAT_EVENT,N=>{N.stat===Si.PROXY?D(ft,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Si.NOPROXY&&D(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function _i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return new yd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,r,s,o,c,u,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ac(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(_e(e.toString()),_e("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sf extends rf{constructor(t,e,r,s,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,c),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Sd(t.writeResults,t.commitTime),r=Pe(t.commitTime);return this.listener.A_(r,e)}return rt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=wd(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Rd(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(t,Ni(e,r),s,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.xo(t,Ni(e,r),s,c,u,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new O(P.UNKNOWN,c.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class af{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(_e(e),this.y_=!1):D("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(c=>{r.enqueueAndForget(async()=>{Cn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=W(h);f.M_.add(4),await bn(f),f.N_.set("Unknown"),f.M_.delete(4),await Vr(f)}(this))})}),this.N_=new af(r,s)}}async function Vr(n){if(Cn(n))for(const t of n.x_)await t(!0)}async function bn(n){for(const t of n.x_)await t(!1)}function Cn(n){return W(n).M_.size===0}async function cc(n,t,e){if(!Cr(t))throw t;n.M_.add(1),await bn(n),n.N_.set("Offline"),e||(e=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Vr(n)})}function lc(n,t){return t().catch(e=>cc(n,e,t))}async function Mr(n){const t=W(n),e=ie(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;lf(t);)try{const s=await Xd(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,uf(t,s)}catch(s){await cc(t,s)}uc(t)&&hc(t)}function lf(n){return Cn(n)&&n.v_.length<10}function uf(n,t){n.v_.push(t);const e=ie(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function uc(n){return Cn(n)&&!ie(n).Zo()&&n.v_.length>0}function hc(n){ie(n).start()}async function hf(n){ie(n).V_()}async function df(n){const t=ie(n);for(const e of n.v_)t.d_(e.mutations)}async function ff(n,t,e){const r=n.v_.shift(),s=Wi.from(r,t,e);await lc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mr(n)}async function pf(n,t){t&&ie(n).E_&&await async function(r,s){if(function(c){return md(c)&&c!==P.ABORTED}(s.code)){const o=r.v_.shift();ie(r).t_(),await lc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Mr(r)}}(n,t),uc(n)&&hc(n)}async function Fo(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Cn(e);e.M_.add(3),await bn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Vr(e)}async function gf(n,t){const e=W(n);t?(e.M_.delete(2),await Vr(e)):t||(e.M_.add(2),await bn(e),e.N_.set("Unknown"))}function ie(n){return n.k_||(n.k_=function(e,r,s){const o=W(e);return o.f_(),new sf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:hf.bind(null,n),Ao:pf.bind(null,n),R_:df.bind(null,n),A_:ff.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Mr(n)):(await n.k_.stop(),n.v_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const c=Date.now()+r,u=new Xi(t,e,c,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(n,t){if(_e("AsyncQueue",`${t}: ${n}`),Cr(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}class mf{constructor(){this.queries=new Be(t=>za(t),qa),this.onlineState="Unknown",this.z_=new Set}}function _f(n){n.z_.forEach(t=>{t.next()})}var Bo,jo;(jo=Bo||(Bo={})).J_="default",jo.Cache="cache";class yf{constructor(t,e,r,s,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Sa={},this.ba=new Be(u=>za(u),qa),this.Da=new Map,this.Ca=new Set,this.va=new vt(M.comparator),this.Fa=new Map,this.Ma=new Ki,this.xa={},this.Oa=new Map,this.Na=Le.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vf(n,t,e){const r=wf(n);try{const s=await function(c,u){const h=W(c),f=nt.now(),E=u.reduce((C,k)=>C.add(k.key),gt());let A,S;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=yr(),L=gt();return h.os.getEntries(C,E).next(N=>{k=N,k.forEach((q,$)=>{$.isValidDocument()||(L=L.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(N=>{A=N;const q=[];for(const $ of u){const z=dd($,A.get($.key).overlayedDocument);z!=null&&q.push(new Ee($.key,z,xa(z.value.mapValue),Lt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,q,u)}).next(N=>{S=N;const q=N.applyToLocalDocumentSet(A,L);return h.documentOverlayCache.saveOverlays(C,N.batchId,q)})}).then(()=>({batchId:S.batchId,changes:Wa(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(c,u,h){let f=c.xa[c.currentUser.toKey()];f||(f=new vt(H)),f=f.insert(u,h),c.xa[c.currentUser.toKey()]=f}(r,s.batchId,e),await Lr(r,s.changes),await Mr(r.remoteStore)}catch(s){const o=dc(s,"Failed to persist write");e.reject(o)}}function $o(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,c)=>{const u=c.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(c,u){const h=W(c);h.onlineState=u;let f=!1;h.queries.forEach((E,A)=>{for(const S of A.U_)S.j_(u)&&(f=!0)}),f&&_f(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ef(n,t){const e=W(n),r=t.batch.batchId;try{const s=await Qd(e.localStore,t);pc(e,r,null),fc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(e,s)}catch(s){await Oa(s)}}async function If(n,t,e){const r=W(n);try{const s=await function(c,u){const h=W(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let E;return h.mutationQueue.lookupMutationBatch(f,u).next(A=>(rt(A!==null),E=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,E,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,E)).next(()=>h.localDocuments.getDocuments(f,E))})}(r.localStore,t);pc(r,t,e),fc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Lr(r,s)}catch(s){await Oa(s)}}function fc(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function pc(n,t,e){const r=W(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}async function Lr(n,t,e){const r=W(n),s=[],o=[],c=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{c.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const E=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=Ji.Ki(h.targetId,f);o.push(E)}}))}),await Promise.all(c),r.Sa.h_(s),await async function(h,f){const E=W(h);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,S=>R.forEach(S.qi,C=>E.persistence.referenceDelegate.addReference(A,S.targetId,C)).next(()=>R.forEach(S.Qi,C=>E.persistence.referenceDelegate.removeReference(A,S.targetId,C)))))}catch(A){if(!Cr(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const S=A.targetId;if(!A.fromCache){const C=E.ns.get(S),k=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(k);E.ns=E.ns.insert(S,L)}}}(r.localStore,o))}async function Tf(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await oc(e.localStore,t);e.currentUser=t,function(o,c){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new O(P.CANCELLED,c))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Lr(e,r.us)}}function wf(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=If.bind(null,t),t}class Ho{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Or(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Kd(this.persistence,new Gd,t.initialUser,this.serializer)}createPersistence(t){return new Hd(Qi.Hr,this.serializer)}createSharedClientState(t){return new Yd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Af{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$o(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await gf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mf}()}createDatastore(t){const e=Or(t.databaseInfo.databaseId),r=function(o){return new nf(o)}(t.databaseInfo);return function(o,c,u,h){return new of(o,c,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,c,u){return new cf(r,s,o,c,u)}(this.localStore,this.datastore,t.asyncQueue,e=>$o(this.syncEngine,e,0),function(){return Uo.D()?new Uo:new Zd}())}createSyncEngine(t,e){return function(s,o,c,u,h,f,E){const A=new yf(s,o,c,u,h,f);return E&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=W(r);D("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await bn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=dc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yi(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await oc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Pf(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Fo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Fo(t.remoteStore,s)),n._onlineComponents=t}function Sf(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Pf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await yi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Sf(e))throw e;dr("Error using user provided cache. Falling back to memory cache: "+e),await yi(n,new Ho)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await yi(n,new Ho);return n._offlineComponents}async function bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await qo(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await qo(n,new Af))),n._onlineComponents}function Cf(n){return bf(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function kf(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Go(n){if(!M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wo(n){if(M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U()}function _c(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Yi(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ko({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ko(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vh;switch(r.type){case"firstParty":return new wh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=zo.get(e);r&&(D("ComponentProvider","Removing Datastore"),zo.delete(e),r.terminate())}(this),Promise.resolve()}}function Df(n,t,e,r={}){var s;const o=(n=_c(n,xr))._getSettings(),c=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=pt.MOCK_USER;else{u=Ql(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new pt(f)}n._authCredentials=new Eh(new Da(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zi(this.firestore,t,this._query)}}class xt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class ee extends Zi{constructor(t,e,r){super(t,e,Jh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new M(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function Jg(n,t,...e){if(n=Rt(n),mc("collection","path",t),n instanceof xr){const r=J.fromString(t,...e);return Wo(r),new ee(n,null,r)}{if(!(n instanceof xt||n instanceof ee))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Wo(r),new ee(n.firestore,null,r)}}function Nf(n,t,...e){if(n=Rt(n),arguments.length===1&&(t=Na.newId()),mc("doc","path",t),n instanceof xr){const r=J.fromString(t,...e);return Go(r),new xt(n,null,new M(r))}{if(!(n instanceof xt||n instanceof ee))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Go(r),new xt(n.firestore,n instanceof ee?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ac(this,"async_queue_retry"),this.hu=()=>{const e=_i();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=_i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=_i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new he;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Cr(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(c){let u=c.message||"";return c.stack&&(u=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),u}(r);throw _e("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Xi.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&U()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class yc extends xr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Of}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vc(this),this._firestoreClient.terminate()}}function Vf(n,t){const e=typeof n=="object"?n:Ia(),r=typeof n=="string"?n:"(default)",s=Fi(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Wl("firestore");o&&Df(s,...o)}return s}function Mf(n){return n._firestoreClient||vc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function vc(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,E){return new xh(u,h,f,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,gc(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Rf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tn(Ut.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Tn(Ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=/^__.*__$/;class xf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}function wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ts{constructor(t,e,r,s,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ir(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(wc(this.fu)&&Lf.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Uf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Or(t)}Fu(t,e,r,s=!1){return new ts({fu:t,methodName:e,vu:r,path:at.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ff(n){const t=n._freezeSettings(),e=Or(n._databaseId);return new Uf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Bf(n,t,e,r,s,o={}){const c=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Pc("Data must be an object, but it was:",c,r);const u=Rc(r,c);let h,f;if(o.merge)h=new At(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const E=[];for(const A of o.mergeFields){const S=jf(t,A,e);if(!c.contains(S))throw new O(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);qf(E,S)||E.push(S)}h=new At(E),f=c.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=c.fieldTransforms;return new xf(new wt(u),h,f)}function Ac(n,t){if(Sc(n=Rt(n)))return Pc("Unsupported field value:",t,n),Rc(n,t);if(n instanceof Ic)return function(r,s){if(!wc(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let c=0;for(const u of r){let h=Ac(u,s.bu(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return od(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Di(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Di(s.serializer,o)}}if(r instanceof Tc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tn)return{bytesValue:vd(s.serializer,r._byteString)};if(r instanceof xt){const o=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw s.Du(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ic(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Yi(r)}`)}(n,t)}function Rc(n,t){const e={};return Ma(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sn(n,(r,s)=>{const o=Ac(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Sc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Tc||n instanceof Tn||n instanceof xt||n instanceof Ic)}function Pc(n,t,e){if(!Sc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Yi(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function jf(n,t,e){if((t=Rt(t))instanceof Ec)return t._internalPath;if(typeof t=="string")return Hf(n,t);throw Ir("Field path arguments must be of type string or ",n,!1,void 0,e)}const $f=new RegExp("[~\\*/\\[\\]]");function Hf(n,t,e){if(t.search($f)>=0)throw Ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ec(...t.split("."))._internalPath}catch{throw Ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ir(n,t,e,r,s){const o=r&&!r.isEmpty(),c=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||c)&&(h+=" (found",o&&(h+=` in field ${r}`),c&&(h+=` in document ${s}`),h+=")"),new O(P.INVALID_ARGUMENT,u+n+h)}function qf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function Xg(n,t){const e=_c(n.firestore,yc),r=Nf(n),s=zf(n.converter,t);return Gf(e,[Bf(Ff(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Gf(n,t){return function(r,s){const o=new he;return r.asyncQueue.enqueueAndForget(async()=>vf(await Cf(r),s,o)),o.promise}(Mf(n),t)}(function(t,e=!0){(function(s){Fe=s})(Ue),De(new pe("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new yc(new Ih(r.getProvider("auth-internal")),new Rh(r.getProvider("app-check-internal")),function(f,E){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(f.options.projectId,E)}(c,s),c);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),te(Ao,"4.6.3",t),te(Ao,"4.6.3","esm2017")})();function es(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function bc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wf=bc,Cc=new An("auth","Firebase",bc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new xi("@firebase/auth");function Kf(n,...t){Tr.logLevel<=x.WARN&&Tr.warn(`Auth (${Ue}): ${n}`,...t)}function or(n,...t){Tr.logLevel<=x.ERROR&&Tr.error(`Auth (${Ue}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,...t){throw ns(n,...t)}function Pt(n,...t){return ns(n,...t)}function kc(n,t,e){const r=Object.assign(Object.assign({},Wf()),{[t]:e});return new An("auth","Firebase",r).create(t,{appName:n.name})}function fe(n){return kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ns(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Cc.create(n,...t)}function V(n,t,...e){if(!n)throw ns(t,...e)}function Ot(n){const t="INTERNAL ASSERTION FAILED: "+n;throw or(t),new Error(t)}function Bt(n,t){n||Ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qf(){return Qo()==="http:"||Qo()==="https:"}function Qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qf()||Yl()||"connection"in navigator)?navigator.onLine:!0}function Xf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.shortDelay=t,this.longDelay=e,Bt(e>t,"Short delay should be less than long delay!"),this.isMobile=Jl()||Zl()}get(){return Jf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,t){Bt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new kn(3e4,6e4);function is(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function je(n,t,e,r,s={}){return Nc(n,s,async()=>{let o={},c={};r&&(t==="GET"?c=r:o={body:JSON.stringify(r)});const u=Rn(Object.assign({key:n.config.apiKey},c)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),Dc.fetch()(Oc(n,n.config.apiHost,e,u),Object.assign({method:t,headers:h,referrerPolicy:"no-referrer"},o))})}async function Nc(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yf),t);try{const s=new ep(n),o=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw nr(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const u=o.ok?c.errorMessage:c.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw nr(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw nr(n,"user-disabled",c);const E=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw kc(n,E,f);Ft(n,E)}}catch(s){if(s instanceof jt)throw s;Ft(n,"network-request-failed",{message:String(s)})}}async function tp(n,t,e,r,s={}){const o=await je(n,t,e,r,s);return"mfaPendingCredential"in o&&Ft(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Oc(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?rs(n.config,s):`${n.config.apiScheme}://${s}`}class ep{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),Zf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Pt(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,t){return je(n,"POST","/v1/accounts:delete",t)}async function Vc(n,t){return je(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function rp(n,t=!1){const e=Rt(n),r=await e.getIdToken(t),s=ss(r);V(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:pn(vi(s.auth_time)),issuedAtTime:pn(vi(s.iat)),expirationTime:pn(vi(s.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function vi(n){return Number(n)*1e3}function ss(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const s=pa(e);return s?JSON.parse(s):(or("Failed to decode base64 JWT payload"),null)}catch(s){return or("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jo(n){const t=ss(n);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof jt&&ip(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ip({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n){var t;const e=n.auth,r=await n.getIdToken(),s=await wn(n,Vc(e,{idToken:r}));V(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const c=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Mc(o.providerUserInfo):[],u=ap(n.providerData,c),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),E=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Mi(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,A)}async function op(n){const t=Rt(n);await wr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ap(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Mc(n){return n.map(t=>{var{providerId:e}=t,r=es(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(n,t){const e=await Nc(n,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,c=Oc(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Dc.fetch()(c,{method:"POST",headers:u,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function lp(n,t){return je(n,"POST","/v2/accounts:revokeToken",is(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jo(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){V(t.length!==0,"internal-error");const e=Jo(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:o}=await cp(t,e);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:o}=e,c=new be;return r&&(V(typeof r=="string","internal-error",{appName:t}),c.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),c.accessToken=s),o&&(V(typeof o=="number","internal-error",{appName:t}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,t){V(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Vt{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,o=es(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Mi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await wn(this,this.stsTokenManager.getToken(this.auth,t));return V(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return rp(this,t)}reload(){return op(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Vt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(fe(this.auth));const t=await this.getIdToken();return await wn(this,np(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,o,c,u,h,f,E;const A=(r=e.displayName)!==null&&r!==void 0?r:void 0,S=(s=e.email)!==null&&s!==void 0?s:void 0,C=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,k=(c=e.photoURL)!==null&&c!==void 0?c:void 0,L=(u=e.tenantId)!==null&&u!==void 0?u:void 0,N=(h=e._redirectEventId)!==null&&h!==void 0?h:void 0,q=(f=e.createdAt)!==null&&f!==void 0?f:void 0,$=(E=e.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:z,emailVerified:Y,isAnonymous:St,providerData:Z,stsTokenManager:v}=e;V(z&&v,t,"internal-error");const p=be.fromJSON(this.name,v);V(typeof z=="string",t,"internal-error"),Gt(A,t.name),Gt(S,t.name),V(typeof Y=="boolean",t,"internal-error"),V(typeof St=="boolean",t,"internal-error"),Gt(C,t.name),Gt(k,t.name),Gt(L,t.name),Gt(N,t.name),Gt(q,t.name),Gt($,t.name);const m=new Vt({uid:z,auth:t,email:S,emailVerified:Y,displayName:A,isAnonymous:St,photoURL:k,phoneNumber:C,tenantId:L,stsTokenManager:p,createdAt:q,lastLoginAt:$});return Z&&Array.isArray(Z)&&(m.providerData=Z.map(_=>Object.assign({},_))),N&&(m._redirectEventId=N),m}static async _fromIdTokenResponse(t,e,r=!1){const s=new be;s.updateFromServerResponse(e);const o=new Vt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await wr(o),o}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];V(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Mc(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new be;u.updateFromIdToken(r);const h=new Vt({uid:s.localId,auth:t,stsTokenManager:u,isAnonymous:c}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Mi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map;function Mt(n){Bt(n instanceof Function,"Expected a class definition");let t=Xo.get(n);return t?(Bt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Xo.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Lc.type="NONE";const Yo=Lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,t,e){return`firebase:${n}:${t}:${e}`}class Ce{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ar(this.userKey,s.apiKey,o),this.fullPersistenceKey=ar("persistence",s.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ce(Mt(Yo),t,r);const s=(await Promise.all(e.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||Mt(Yo);const c=ar(r,t.config.apiKey,t.name);let u=null;for(const f of e)try{const E=await f._get(c);if(E){const A=Vt._fromJSON(t,E);f!==o&&(u=A),o=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Ce(o,t,r):(o=h[0],u&&await o._set(c,u.toJSON()),await Promise.all(e.map(async f=>{if(f!==o)try{await f._remove(c)}catch{}})),new Ce(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jc(t))return"Blackberry";if($c(t))return"Webos";if(os(t))return"Safari";if((t.includes("chrome/")||Uc(t))&&!t.includes("edge/"))return"Chrome";if(Bc(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xc(n=ct()){return/firefox\//i.test(n)}function os(n=ct()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Uc(n=ct()){return/crios\//i.test(n)}function Fc(n=ct()){return/iemobile/i.test(n)}function Bc(n=ct()){return/android/i.test(n)}function jc(n=ct()){return/blackberry/i.test(n)}function $c(n=ct()){return/webos/i.test(n)}function Ur(n=ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function up(n=ct()){var t;return Ur(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hp(){return tu()&&document.documentMode===10}function Hc(n=ct()){return Ur(n)||Bc(n)||$c(n)||jc(n)||/windows phone/i.test(n)||Fc(n)}function dp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,t=[]){let e;switch(n){case"Browser":e=Zo(ct());break;case"Worker":e=`${Zo(ct())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ue}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((c,u)=>{try{const h=t(o);c(h)}catch(h){u(h)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(n,t={}){return je(n,"GET","/v2/passwordPolicy",is(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=6;class mp{constructor(t){var e,r,s,o;const c=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=c.minPasswordLength)!==null&&e!==void 0?e:gp,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,o,c,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(e=h.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ta(this),this.idTokenSubscription=new ta(this),this.beforeStateQueue=new fp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Mt(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ce.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Vc(this,{idToken:t}),r=await Vt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Xt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(t);(!c||c===u)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await wr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Xf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xt(this.app))return Promise.reject(fe(this));const e=t?Rt(t):null;return e&&V(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xt(this.app)?Promise.reject(fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pp(this),e=new mp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new An("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await lp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Mt(t)||this._popupRedirectResolver;V(e,this,"argument-error"),this.redirectPersistenceManager=await Ce.create(this,[Mt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(u,this,"internal-error"),u.then(()=>{c||o(this.currentUser)}),typeof e=="function"){const h=t.addObserver(e,r,s);return()=>{c=!0,h()}}else{const h=t.addObserver(e);return()=>{c=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Kf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function as(n){return Rt(n)}class ta{constructor(t){this.auth=t,this.observer=null,this.addObserver=cu(e=>this.observer=e)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yp(n){cs=n}function vp(n){return cs.loadJS(n)}function Ep(){return cs.gapiScript}function Ip(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,t){const e=Fi(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),o=e.getOptions();if(hr(o,t??{}))return s;Ft(s,"already-initialized")}return e.initialize({options:t})}function wp(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Mt);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ap(n,t,e){const r=as(n);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,o=zc(t),{host:c,port:u}=Rp(t),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${c}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),Sp()}function zc(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Rp(n){const t=zc(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ea(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:ea(c)}}}function ea(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Sp(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ot("not implemented")}_getIdTokenResponse(t){return Ot("not implemented")}_linkToIdToken(t,e){return Ot("not implemented")}_getReauthenticationResolver(t){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(n,t){return tp(n,"POST","/v1/accounts:signInWithIdp",is(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="http://localhost";class ve extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ve(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ft("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,o=es(e,["providerId","signInMethod"]);if(!r||!s)return null;const c=new ve(r,s);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(t){const e=this.buildRequest();return ke(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,ke(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ke(t,e)}buildRequest(){const t={requestUri:Pp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Rn(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Wc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Dn{constructor(){super("facebook.com")}static credential(t){return ve._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Dn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ve._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Kt.credential(e,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Dn{constructor(){super("github.com")}static credential(t){return ve._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Dn{constructor(){super("twitter.com")}static credential(t,e){return ve._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Jt.credential(e,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const o=await Vt._fromIdTokenResponse(t,r,s),c=na(r);return new xe({user:o,providerId:c,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=na(r);return new xe({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function na(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends jt{constructor(t,e,r,s){var o;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ar.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ar(t,e,r,s)}}function Kc(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ar._fromErrorAndOperation(n,o,t,r):o})}async function bp(n,t,e=!1){const r=await wn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return xe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,t,e=!1){const{auth:r}=n;if(Xt(r.app))return Promise.reject(fe(r));const s="reauthenticate";try{const o=await wn(n,Kc(r,s,t,n),e);V(o.idToken,r,"internal-error");const c=ss(o.idToken);V(c,r,"internal-error");const{sub:u}=c;return V(n.uid===u,r,"user-mismatch"),xe._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n,t,e=!1){if(Xt(n.app))return Promise.reject(fe(n));const r="signIn",s=await Kc(n,r,t),o=await xe._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(o.user),o}function Dp(n,t,e,r){return Rt(n).onIdTokenChanged(t,e,r)}function Np(n,t,e){return Rt(n).beforeAuthStateChanged(t,e)}const Rr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Rr,"1"),this.storage.removeItem(Rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){const n=ct();return os(n)||Ur(n)}const Vp=1e3,Mp=10;class Jc extends Qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Op()&&dp(),this.fallbackToPolling=Hc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((c,u,h)=>{this.notifyListeners(c,h)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(t.newValue!==c)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const s=()=>{const c=this.storage.getItem(r);!e&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);hp()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Mp):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jc.type="LOCAL";const Lp=Jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Xc.type="SESSION";const Yc=Xc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Fr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:o}=e.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(c).map(async f=>f(e.origin,o)),h=await xp(u);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,c;return new Promise((u,h)=>{const f=ls("",20);s.port1.start();const E=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:s,onMessage(A){const S=A;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(E),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(S.data.response);break;default:clearTimeout(E),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:f,data:e},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function Fp(n){bt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function Bp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $p(){return Zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="firebaseLocalStorageDb",Hp=1,Sr="firebaseLocalStorage",el="fbase_key";class Nn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Br(n,t){return n.transaction([Sr],t?"readwrite":"readonly").objectStore(Sr)}function qp(){const n=indexedDB.deleteDatabase(tl);return new Nn(n).toPromise()}function Li(){const n=indexedDB.open(tl,Hp);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Sr,{keyPath:el})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Sr)?t(r):(r.close(),await qp(),t(await Li()))})})}async function ra(n,t,e){const r=Br(n,!0).put({[el]:t,value:e});return new Nn(r).toPromise()}async function zp(n,t){const e=Br(n,!1).get(t),r=await new Nn(e).toPromise();return r===void 0?null:r.value}function ia(n,t){const e=Br(n,!0).delete(t);return new Nn(e).toPromise()}const Gp=800,Wp=3;class nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Li(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Wp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance($p()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Bp(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Li();return await ra(t,Rr,"1"),await ia(t,Rr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ra(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>zp(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ia(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const o=Br(s,!1).getAll();return new Nn(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:o}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nl.type="LOCAL";const Kp=nl;new kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,t){return t?Mt(t):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Gc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ke(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ke(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ke(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Jp(n){return kp(n.auth,new us(n),n.bypassAuthState)}function Xp(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),Cp(e,new us(n),n.bypassAuthState)}async function Yp(n){const{auth:t,user:e}=n;return V(e,t,"internal-error"),bp(e,new us(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:o,error:c,type:u}=t;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Jp;case"linkViaPopup":case"linkViaRedirect":return Yp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:Ft(this.auth,"internal-error")}}resolve(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new kn(2e3,1e4);class Se extends rl{constructor(t,e,r,s,o){super(t,e,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Se.currentPopupAction&&Se.currentPopupAction.cancel(),Se.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const t=ls();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Se.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Zp.get())};t()}}Se.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="pendingRedirect",cr=new Map;class eg extends rl{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=cr.get(this.auth._key());if(!t){try{const r=await ng(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}cr.set(this.auth._key(),t)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ng(n,t){const e=sg(t),r=ig(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function rg(n,t){cr.set(n._key(),t)}function ig(n){return Mt(n._redirectPersistence)}function sg(n){return ar(tg,n.config.apiKey,n.name)}async function og(n,t,e=!1){if(Xt(n.app))return Promise.reject(fe(n));const r=as(n),s=Qp(r,t),c=await new eg(r,s,e).execute();return c&&!e&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=10*60*1e3;class cg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lg(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!il(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Pt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ag&&this.cachedEventUids.clear(),this.cachedEventUids.has(sa(t))}saveEventToCache(t){this.cachedEventUids.add(sa(t)),this.lastProcessedEventTime=Date.now()}}function sa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function il({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return il(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(n,t={}){return je(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dg=/^https?/;async function fg(n){if(n.config.emulator)return;const{authorizedDomains:t}=await ug(n);for(const e of t)try{if(pg(e))return}catch{}Ft(n,"unauthorized-domain")}function pg(n){const t=Vi(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===r}if(!dg.test(e))return!1;if(hg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new kn(3e4,6e4);function oa(){const n=bt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function mg(n){return new Promise((t,e)=>{var r,s,o;function c(){oa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oa(),e(Pt(n,"network-request-failed"))},timeout:gg.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((o=bt().gapi)===null||o===void 0)&&o.load)c();else{const u=Ip("iframefcb");return bt()[u]=()=>{gapi.load?c():e(Pt(n,"network-request-failed"))},vp(`${Ep()}?onload=${u}`).catch(h=>e(h))}}).catch(t=>{throw lr=null,t})}let lr=null;function _g(n){return lr=lr||mg(n),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new kn(5e3,15e3),vg="__/auth/iframe",Eg="emulator/auth/iframe",Ig={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wg(n){const t=n.config;V(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?rs(t,Eg):`https://${n.config.authDomain}/${vg}`,r={apiKey:t.apiKey,appName:n.name,v:Ue},s=Tg.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${Rn(r).slice(1)}`}async function Ag(n){const t=await _g(n),e=bt().gapi;return V(e,n,"internal-error"),t.open({where:document.body,url:wg(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ig,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const c=Pt(n,"network-request-failed"),u=bt().setTimeout(()=>{o(c)},yg.get());function h(){bt().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sg=500,Pg=600,bg="_blank",Cg="http://localhost";class aa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kg(n,t,e,r=Sg,s=Pg){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Rg),{width:r.toString(),height:s.toString(),top:o,left:c}),f=ct().toLowerCase();e&&(u=Uc(f)?bg:e),xc(f)&&(t=t||Cg,h.scrollbars="yes");const E=Object.entries(h).reduce((S,[C,k])=>`${S}${C}=${k},`,"");if(up(f)&&u!=="_self")return Dg(t||"",u),new aa(null);const A=window.open(t||"",u,E);V(A,n,"popup-blocked");try{A.focus()}catch{}return new aa(A)}function Dg(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="__/auth/handler",Og="emulator/auth/handler",Vg=encodeURIComponent("fac");async function ca(n,t,e,r,s,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Ue,eventId:s};if(t instanceof Wc){t.setDefaultLanguage(n.languageCode),c.providerId=t.providerId||"",au(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,A]of Object.entries({}))c[E]=A}if(t instanceof Dn){const E=t.getScopes().filter(A=>A!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const E of Object.keys(u))u[E]===void 0&&delete u[E];const h=await n._getAppCheckToken(),f=h?`#${Vg}=${encodeURIComponent(h)}`:"";return`${Mg(n)}?${Rn(u).slice(1)}${f}`}function Mg({config:n}){return n.emulator?rs(n,Og):`https://${n.authDomain}/${Ng}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yc,this._completeRedirectFn=og,this._overrideRedirectResult=rg}async _openPopup(t,e,r,s){var o;Bt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await ca(t,e,r,Vi(),s);return kg(t,c,ls())}async _openRedirect(t,e,r,s){await this._originValidation(t);const o=await ca(t,e,r,Vi(),s);return Fp(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:o}=this.eventManagers[e];return s?Promise.resolve(s):(Bt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Ag(t),r=new cg(t);return e.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ei,{type:Ei},s=>{var o;const c=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ei];c!==void 0&&e(!!c),Ft(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=fg(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Hc()||os()||Ur()}}const xg=Lg;var la="@firebase/auth",ua="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bg(n){De(new pe("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=r.options;V(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qc(n)},f=new _p(r,s,o,h);return wp(f,e),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),De(new pe("auth-internal",t=>{const e=as(t.getProvider("auth").getImmediate());return(r=>new Ug(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(la,ua,Fg(n)),te(la,ua,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=5*60,$g=_a("authIdTokenMaxAge")||jg;let ha=null;const Hg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>$g)return;const s=e==null?void 0:e.token;ha!==s&&(ha=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qg(n=Ia()){const t=Fi(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Tp(n,{popupRedirectResolver:xg,persistence:[Kp,Lp,Yc]}),r=_a("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=Hg(o.toString());Np(e,c,()=>c(e.currentUser)),Dp(e,u=>c(u))}}const s=ga("auth");return s&&Ap(e,`http://${s}`),e}function zg(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}yp({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const o=Pt("internal-error");o.customData=s,e(o)},r.type="text/javascript",r.charset="UTF-8",zg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bg("Browser");const Gg={apiKey:"AIzaSyB2efwm8mCxqz22cZIdl0ta1OOzRx64I2g",authDomain:"shout-b6d30.firebaseapp.com",projectId:"shout-b6d30",storageBucket:"shout-b6d30.appspot.com",messagingSenderId:"1000075306721",appId:"1:1000075306721:web:dbf101f4ce6cb9447639a0",measurementId:"G-FN8908EZ1F"};let Pr;vo().length?Pr=vo()[0]:Pr=Ea(Gg);const Yg=Vf(Pr);qg(Pr);export{Xg as a,Jg as c,Yg as d};
