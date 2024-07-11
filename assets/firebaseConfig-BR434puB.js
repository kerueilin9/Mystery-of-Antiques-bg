var Cc={};/**
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
 */const ih={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(n,e){if(!n)throw Nn(e)},Nn=function(n){return new Error("Firebase Database ("+ih.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const sh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$p=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=r>>2,_=(r&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,a||(m=64)),i.push(t[f],t[_],t[m],t[A])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$p(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||h==null||_==null)throw new Gp;const m=r<<2|l>>4;if(i.push(m),h!==64){const A=l<<4&240|h>>2;if(i.push(A),_!==64){const S=h<<6&192|_;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rh=function(n){const e=sh(n);return ia.encodeByteArray(e,!0)},xs=function(n){return rh(n).replace(/\./g,"")},vo=function(n){try{return ia.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zp(n){return oh(void 0,n)}function oh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hp(t)||(n[t]=oh(n[t],e[t]));return n}function Hp(n){return n!=="__proto__"}/**
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
 */function Kp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qp=()=>Kp().__FIREBASE_DEFAULTS__,Yp=()=>{if(typeof process>"u"||typeof Cc>"u")return;const n=Cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vo(n[1]);return e&&JSON.parse(e)},sa=()=>{try{return Qp()||Yp()||Xp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jp=n=>{var e,t;return(t=(e=sa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ra=n=>{const e=Jp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ah=()=>{var n;return(n=sa())===null||n===void 0?void 0:n.config};/**
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
 */class Bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function lh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xs(JSON.stringify(t)),xs(JSON.stringify(a)),""].join(".")}/**
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
 */function ch(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ch())}function Zp(){var n;const e=(n=sa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hh(){return ih.NODE_ADMIN===!0}function t_(){return!Zp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function i_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const s_="FirebaseError";class Zt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=s_,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dh.prototype.create)}}class dh{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?r_(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Zt(s,l,i)}}function r_(n,e){return n.replace(o_,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const o_=/\{\$([^}]+)}/g;/**
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
 */function Ii(n){return JSON.parse(n)}function me(n){return JSON.stringify(n)}/**
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
 */const fh=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ii(vo(r[0])||""),t=Ii(vo(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},a_=function(n){const e=fh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},l_=function(n){const e=fh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function gn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Os(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Eo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(Sc(r)&&Sc(a)){if(!Eo(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Sc(n){return n!==null&&typeof n=="object"}/**
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
 */function c_(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class u_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const m=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,f;for(let _=0;_<80;_++){_<40?_<20?(h=l^r&(a^l),f=1518500249):(h=r^a^l,f=1859775393):_<60?(h=r&a|l&(r|a),f=2400959708):(h=r^a^l,f=3395469782);const m=(s<<5|s>>>27)+h+u+f+i[_]&4294967295;u=l,l=a,a=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}else for(;s<t;)if(r[a]=e[s],++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function sr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const h_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,N(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(r<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class d_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Bi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p_(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f_(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f_(n){return n===Ut?void 0:n}function p_(n){return n.instantiationMode==="EAGER"}/**
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
 */class __{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new d_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const m_={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},g_=H.INFO,y_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},v_=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=y_[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=g_,this._logHandler=v_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const E_=(n,e)=>e.some(t=>n instanceof t);let Pc,bc;function T_(){return Pc||(Pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I_(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ph=new WeakMap,To=new WeakMap,_h=new WeakMap,io=new WeakMap,aa=new WeakMap;function w_(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(It(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ph.set(t,n)}).catch(()=>{}),aa.set(e,n),e}function A_(n){if(To.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});To.set(n,e)}let Io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return To.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_h.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function C_(n){Io=n(Io)}function R_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(so(this),e,...t);return _h.set(i,e.sort?e.sort():[e]),It(i)}:I_().includes(n)?function(...e){return n.apply(so(this),e),It(ph.get(this))}:function(...e){return It(n.apply(so(this),e))}}function S_(n){return typeof n=="function"?R_(n):(n instanceof IDBTransaction&&A_(n),E_(n,T_())?new Proxy(n,Io):n)}function It(n){if(n instanceof IDBRequest)return w_(n);if(io.has(n))return io.get(n);const e=S_(n);return e!==n&&(io.set(n,e),aa.set(e,n)),e}const so=n=>aa.get(n);function P_(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),l=It(a);return i&&a.addEventListener("upgradeneeded",u=>{i(It(a.result),u.oldVersion,u.newVersion,It(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const b_=["get","getKey","getAll","getAllKeys","count"],N_=["put","add","delete","clear"],ro=new Map;function Nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ro.get(e))return ro.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=N_.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||b_.includes(t)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return ro.set(e,r),r}C_(n=>({...n,get:(e,t,i)=>Nc(e,t)||n.get(e,t,i),has:(e,t)=>!!Nc(e,t)||n.has(e,t)}));/**
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
 */class D_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(k_(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function k_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wo="@firebase/app",Dc="0.10.6";/**
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
 */const zt=new oa("@firebase/app"),V_="@firebase/app-compat",x_="@firebase/analytics-compat",O_="@firebase/analytics",M_="@firebase/app-check-compat",L_="@firebase/app-check",F_="@firebase/auth",U_="@firebase/auth-compat",B_="@firebase/database",q_="@firebase/database-compat",j_="@firebase/functions",W_="@firebase/functions-compat",$_="@firebase/installations",G_="@firebase/installations-compat",z_="@firebase/messaging",H_="@firebase/messaging-compat",K_="@firebase/performance",Q_="@firebase/performance-compat",Y_="@firebase/remote-config",X_="@firebase/remote-config-compat",J_="@firebase/storage",Z_="@firebase/storage-compat",em="@firebase/firestore",tm="@firebase/vertexai-preview",nm="@firebase/firestore-compat",im="firebase",sm="10.12.3";/**
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
 */const Ao="[DEFAULT]",rm={[wo]:"fire-core",[V_]:"fire-core-compat",[O_]:"fire-analytics",[x_]:"fire-analytics-compat",[L_]:"fire-app-check",[M_]:"fire-app-check-compat",[F_]:"fire-auth",[U_]:"fire-auth-compat",[B_]:"fire-rtdb",[q_]:"fire-rtdb-compat",[j_]:"fire-fn",[W_]:"fire-fn-compat",[$_]:"fire-iid",[G_]:"fire-iid-compat",[z_]:"fire-fcm",[H_]:"fire-fcm-compat",[K_]:"fire-perf",[Q_]:"fire-perf-compat",[Y_]:"fire-rc",[X_]:"fire-rc-compat",[J_]:"fire-gcs",[Z_]:"fire-gcs-compat",[em]:"fire-fst",[nm]:"fire-fst-compat",[tm]:"fire-vertex","fire-js":"fire-js",[im]:"fire-js-all"};/**
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
 */const Ms=new Map,om=new Map,Co=new Map;function kc(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yn(n){const e=n.name;if(Co.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,n);for(const t of Ms.values())kc(t,n);for(const t of om.values())kc(t,n);return!0}function la(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new dh("app","Firebase",am);/**
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
 */class lm{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const mh=sm;function gh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ao,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(t||(t=ah()),!t)throw wt.create("no-options");const r=Ms.get(s);if(r){if(Eo(t,r.options)&&Eo(i,r.config))return r;throw wt.create("duplicate-app",{appName:s})}const a=new __(s);for(const u of Co.values())a.addComponent(u);const l=new lm(t,i,a);return Ms.set(s,l),l}function ca(n=Ao){const e=Ms.get(n);if(!e&&n===Ao&&ah())return gh();if(!e)throw wt.create("no-app",{appName:n});return e}function Je(n,e,t){var i;let s=(i=rm[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(l.join(" "));return}yn(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cm="firebase-heartbeat-database",um=1,wi="firebase-heartbeat-store";let oo=null;function yh(){return oo||(oo=P_(cm,um,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wi)}catch(t){console.warn(t)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),oo}async function hm(n){try{const t=(await yh()).transaction(wi),i=await t.objectStore(wi).get(vh(n));return await t.done,i}catch(e){if(e instanceof Zt)zt.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function Vc(n,e){try{const i=(await yh()).transaction(wi,"readwrite");await i.objectStore(wi).put(e,vh(n)),await i.done}catch(t){if(t instanceof Zt)zt.warn(t.message);else{const i=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(i.message)}}}function vh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dm=1024,fm=30*24*60*60*1e3;class pm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mm(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=fm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:i,unsentEntries:s}=_m(this._heartbeatsCache.heartbeats),r=xs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xc(){return new Date().toISOString().substring(0,10)}function _m(n,e=dm){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Oc(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?i_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oc(n){return xs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function gm(n){yn(new Gt("platform-logger",e=>new D_(e),"PRIVATE")),yn(new Gt("heartbeat",e=>new pm(e),"PRIVATE")),Je(wo,Dc,n),Je(wo,Dc,"esm2017"),Je("fire-js","")}gm("");var ym="firebase",vm="10.12.3";/**
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
 */Je(ym,vm,"app");var Mc={};const Lc="@firebase/database",Fc="1.0.6";/**
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
 */let Eh="";function Em(n){Eh=n}/**
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
 */class Tm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ii(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Im{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Th=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tm(e)}}catch{}return new Im},qt=Th("localStorage"),wm=Th("sessionStorage");/**
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
 */const pn=new oa("@firebase/database"),Am=function(){let n=1;return function(){return n++}}(),Ih=function(n){const e=h_(n),t=new u_;t.update(e);const i=t.digest();return ia.encodeByteArray(i)},qi=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qi.apply(null,i):typeof i=="object"?e+=me(i):e+=i,e+=" "}return e};let fi=null,Uc=!0;const Cm=function(n,e){N(!e,"Can't turn on custom loggers persistently."),pn.logLevel=H.VERBOSE,fi=pn.log.bind(pn)},we=function(...n){if(Uc===!0&&(Uc=!1,fi===null&&wm.get("logging_enabled")===!0&&Cm()),fi){const e=qi.apply(null,n);fi(e)}},ji=function(n){return function(...e){we(n,...e)}},Ro=function(...n){const e="FIREBASE INTERNAL ERROR: "+qi(...n);pn.error(e)},ht=function(...n){const e=`FIREBASE FATAL ERROR: ${qi(...n)}`;throw pn.error(e),new Error(e)},Fe=function(...n){const e="FIREBASE WARNING: "+qi(...n);pn.warn(e)},Rm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ua=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sm=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ht="[MIN_NAME]",St="[MAX_NAME]",en=function(n,e){if(n===e)return 0;if(n===Ht||e===St)return-1;if(e===Ht||n===St)return 1;{const t=Bc(n),i=Bc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Pm=function(n,e){return n===e?0:n<e?-1:1},ii=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+me(e))},ha=function(n){if(typeof n!="object"||n===null)return me(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=me(e[i]),t+=":",t+=ha(n[e[i]]);return t+="}",t},wh=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ah=function(n){N(!ua(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,a,l,u;n===0?(r=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(u=t;u;u-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let _="";for(u=0;u<64;u+=8){let m=parseInt(f.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),_=_+m}return _.toLowerCase()},bm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dm(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const km=new RegExp("^-?(0*)\\d{1,10}$"),Vm=-2147483648,xm=2147483647,Bc=function(n){if(km.test(n)){const e=Number(n);if(e>=Vm&&e<=xm)return e}return null},Dn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Om=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Mm{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Lm{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Ss{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ss.OWNER="owner";/**
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
 */const da="5",Ch="v",Rh="s",Sh="r",Ph="f",bh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nh="ls",Dh="p",So="ac",kh="websocket",Vh="long_polling";/**
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
 */class xh{constructor(e,t,i,s,r=!1,a="",l=!1,u=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fm(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Oh(n,e,t){N(typeof e=="string","typeof type must == string"),N(typeof t=="object","typeof params must == object");let i;if(e===kh)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Vh)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fm(n)&&(t.ns=n.namespace);const s=[];return Re(t,(r,a)=>{s.push(r+"="+a)}),i+s.join("&")}/**
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
 */class Um{constructor(){this.counters_={}}incrementCounter(e,t=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return zp(this.counters_)}}/**
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
 */const ao={},lo={};function fa(n){const e=n.toString();return ao[e]||(ao[e]=new Um),ao[e]}function Bm(n,e){const t=n.toString();return lo[t]||(lo[t]=e()),lo[t]}/**
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
 */class qm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Dn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qc="start",jm="close",Wm="pLPCommand",$m="pRTLPCB",Mh="id",Lh="pw",Fh="ser",Gm="cb",zm="seg",Hm="ts",Km="d",Qm="dframe",Uh=1870,Bh=30,Ym=Uh-Bh,Xm=25e3,Jm=3e4;class fn{constructor(e,t,i,s,r,a,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ji(e),this.stats_=fa(t),this.urlFn=u=>(this.appCheckToken&&(u[So]=this.appCheckToken),Oh(t,Vh,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jm)),Sm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pa((...r)=>{const[a,l,u,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===qc)this.id=l,this.password=u;else if(a===jm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[qc]="t",i[Fh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Gm]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ch]=da,this.transportSessionId&&(i[Rh]=this.transportSessionId),this.lastSessionId&&(i[Nh]=this.lastSessionId),this.applicationId&&(i[Dh]=this.applicationId),this.appCheckToken&&(i[So]=this.appCheckToken),typeof location<"u"&&location.hostname&&bh.test(location.hostname)&&(i[Sh]=Ph);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bm()&&!Nm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=rh(t),s=wh(i,Ym);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Qm]="t",i[Mh]=e,i[Lh]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=me(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pa{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Am(),window[Wm+this.uniqueCallbackIdentifier]=e,window[$m+this.uniqueCallbackIdentifier]=t,this.myIFrame=pa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mh]=this.myID,e[Lh]=this.myPW,e[Fh]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bh+i.length<=Uh;){const a=this.pendingSegs.shift();i=i+"&"+zm+s+"="+a.seg+"&"+Hm+s+"="+a.ts+"&"+Km+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Xm)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Zm=16384,eg=45e3;let Ls=null;typeof MozWebSocket<"u"?Ls=MozWebSocket:typeof WebSocket<"u"&&(Ls=WebSocket);class He{constructor(e,t,i,s,r,a,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ji(this.connId),this.stats_=fa(t),this.connURL=He.connectionURL_(t,a,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const a={};return a[Ch]=da,typeof location<"u"&&location.hostname&&bh.test(location.hostname)&&(a[Sh]=Ph),t&&(a[Rh]=t),i&&(a[Nh]=i),s&&(a[So]=s),r&&(a[Dh]=r),Oh(e,kh,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let i;hh(),this.mySock=new Ls(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ls!==null&&!He.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ii(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=wh(t,Zm);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2;He.healthyTimeout=3e4;/**
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
 */class Ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,He]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=He&&He.isAvailable();let i=t&&!He.previouslyFailed();if(e.webSocketOnly&&(t||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[He];else{const s=this.transports_=[];for(const r of Ai.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ai.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ai.globalTransportInitialized_=!1;/**
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
 */const tg=6e4,ng=5e3,ig=10*1024,sg=100*1024,co="t",jc="d",rg="s",Wc="r",og="e",$c="o",Gc="a",zc="n",Hc="p",ag="h";class lg{constructor(e,t,i,s,r,a,l,u,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ji("c:"+this.id+":"),this.transportManager_=new Ai(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ig?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(co in e){const t=e[co];t===Gc?this.upgradeIfSecondaryHealthy_():t===Wc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$c&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ii("t",e),i=ii("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ii("t",e),i=ii("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ii(co,e);if(jc in e){const i=e[jc];if(t===ag){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===zc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rg?this.onConnectionShutdown_(i):t===Wc?this.onReset_(i):t===og?Ro("Server Error: "+i):t===$c?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ro("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),da!==i&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ng))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qh{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class jh{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){N(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Fs extends jh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fs}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Kc=32,Qc=768;class Z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Y(){return new Z("")}function q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Z(n.pieces_,e)}function _a(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function cg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ci(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wh(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Z(e,0)}function ce(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Z)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Z(t,0)}function j(n){return n.pieceNum_>=n.pieces_.length}function Le(n,e){const t=q(n),i=q(e);if(t===null)return e;if(t===i)return Le(ne(n),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ug(n,e){const t=Ci(n,0),i=Ci(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=en(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function ma(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function $e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class hg{constructor(e,t){this.errorPrefix_=t,this.parts_=Ci(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=rr(this.parts_[i]);$h(this)}}function dg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rr(e),$h(n)}function fg(n){const e=n.parts_.pop();n.byteLength_-=rr(e),n.parts_.length>0&&(n.byteLength_-=1)}function $h(n){if(n.byteLength_>Qc)throw new Error(n.errorPrefix_+"has a key path longer than "+Qc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Kc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kc+") or object contains a cycle "+Bt(n))}function Bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ga extends jh{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ga}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const si=1e3,pg=60*5*1e3,Yc=30*1e3,_g=1.3,mg=3e4,gg="server_kill",Xc=3;class ct extends qh{constructor(e,t,i,s,r,a,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=ct.nextPersistentConnectionId_++,this.log_=ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=si,this.maxReconnectDelay_=pg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!hh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ga.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(me(r)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Bi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,l=>{const u=l.d,h=l.s;ct.warnOnListenWarnings_(u,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&it(e,"w")){const i=gn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||l_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=a_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,a=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";s&&(r.q=i,r.t=s),this.sendRequest(a,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const a={p:t,d:i};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ro("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mg&&(this.reconnectDelay_=si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_g)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let a=!1,l=null;const u=function(){l?l.close():(a=!0,i())},h=function(_){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(_)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=m&&m.token,l=new lg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,A=>{Fe(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(gg)},r))}catch(_){this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&Fe(_),u())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rc(this.interruptReasons_)&&(this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ha(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Z(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){we("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xc&&(this.reconnectDelay_=Yc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){we("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Eh.replace(/\./g,"-")]=1,uh()?e["framework.cordova"]=1:e_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fs.getInstance().currentlyOnline();return Rc(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
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
 */class W{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new W(e,t)}}/**
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
 */class or{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new W(Ht,e),s=new W(Ht,t);return this.compare(i,s)!==0}minPost(){return W.MIN}}/**
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
 */let Ts;class Gh extends or{static get __EMPTY_NODE(){return Ts}static set __EMPTY_NODE(e){Ts=e}compare(e,t){return en(e.name,t.name)}isDefinedOn(e){throw Nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return W.MIN}maxPost(){return new W(St,Ts)}makePost(e,t){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Ts)}toString(){return".key"}}const Wt=new Gh;/**
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
 */let Is=class{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},je=class li{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??li.RED,this.left=s??Xe.EMPTY_NODE,this.right=r??Xe.EMPTY_NODE}copy(e,t,i,s,r){return new li(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,li.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};je.RED=!0;je.BLACK=!1;class yg{copy(e,t,i,s,r){return this}insert(e,t,i){return new je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Xe=class Ps{constructor(e,t=Ps.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ps(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new Ps(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}};Xe.EMPTY_NODE=new yg;/**
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
 */function vg(n,e){return en(n.name,e.name)}function ya(n,e){return en(n,e)}/**
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
 */let Po;function Eg(n){Po=n}const zh=function(n){return typeof n=="number"?"number:"+Ah(n):"string:"+n},Hh=function(n){if(n.isLeafNode()){const e=n.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else N(n===Po||n.isEmpty(),"priority of unexpected type.");N(n===Po||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jc;class ye{constructor(e,t=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hh(this.priorityNode_)}static set __childrenNodeConstructor(e){Jc=e}static get __childrenNodeConstructor(){return Jc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:q(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(N(i!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ah(this.value_):e+=this.value_,this.lazyHash_=Ih(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ye.VALUE_TYPE_ORDER.indexOf(t),r=ye.VALUE_TYPE_ORDER.indexOf(i);return N(s>=0,"Unknown leaf type: "+t),N(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Kh,Qh;function Tg(n){Kh=n}function Ig(n){Qh=n}class wg extends or{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?en(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return W.MIN}maxPost(){return new W(St,new ye("[PRIORITY-POST]",Qh))}makePost(e,t){const i=Kh(e);return new W(t,new ye("[PRIORITY-POST]",i))}toString(){return".priority"}}const oe=new wg;/**
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
 */const Ag=Math.log(2);class Cg{constructor(e){const t=r=>parseInt(Math.log(r)/Ag,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Us=function(n,e,t,i){n.sort(e);const s=function(u,h){const f=h-u;let _,m;if(f===0)return null;if(f===1)return _=n[u],m=t?t(_):_,new je(m,_.node,je.BLACK,null,null);{const A=parseInt(f/2,10)+u,S=s(u,A),V=s(A+1,h);return _=n[A],m=t?t(_):_,new je(m,_.node,je.BLACK,S,V)}},r=function(u){let h=null,f=null,_=n.length;const m=function(S,V){const D=_-S,G=_;_-=S;const K=s(D+1,G),J=n[D],ue=t?t(J):J;A(new je(ue,J.node,V,null,K))},A=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<u.count;++S){const V=u.nextBitIsOne(),D=Math.pow(2,u.count-(S+1));V?m(D,je.BLACK):(m(D,je.BLACK),m(D,je.RED))}return f},a=new Cg(n.length),l=r(a);return new Xe(i||e,l)};/**
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
 */let uo;const cn={};class lt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return N(cn&&oe,"ChildrenNode.ts has not been loaded"),uo=uo||new lt({".priority":cn},{".priority":oe}),uo}get(e){const t=gn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xe?t:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,t){N(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(W.Wrap);let a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=r.getNext();let l;s?l=Us(i,e.getCompare()):l=cn;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const f=Object.assign({},this.indexes_);return f[u]=l,new lt(f,h)}addToIndexes(e,t){const i=Os(this.indexes_,(s,r)=>{const a=gn(this.indexSet_,r);if(N(a,"Missing index implementation for "+r),s===cn)if(a.isDefinedOn(e.node)){const l=[],u=t.getIterator(W.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),Us(l,a.getCompare())}else return cn;else{const l=t.get(e.name);let u=s;return l&&(u=u.remove(new W(e.name,l))),u.insert(e,e.node)}});return new lt(i,this.indexSet_)}removeFromIndexes(e,t){const i=Os(this.indexes_,s=>{if(s===cn)return s;{const r=t.get(e.name);return r?s.remove(new W(e.name,r)):s}});return new lt(i,this.indexSet_)}}/**
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
 */let ri;class L{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Hh(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ri||(ri=new L(new Xe(ya),null,lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ri}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ri:t}}getChild(e){const t=q(e);return t===null?this:this.getImmediateChild(t).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(N(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new W(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?ri:this.priorityNode_;return new L(s,a,r)}}updateChild(e,t){const i=q(e);if(i===null)return t;{N(q(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ne(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(oe,(a,l)=>{t[a]=l.val(e),i++,r&&L.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):r=!1}),!e&&r&&s<2*i){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zh(this.getPriority().val())+":"),this.forEachChild(oe,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ih(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new W(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new W(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new W(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,W.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wi?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(oe),s=t.getIterator(oe);let r=i.getNext(),a=s.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=i.getNext(),a=s.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rg extends L{constructor(){super(new Xe(ya),L.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Wi=new Rg;Object.defineProperties(W,{MIN:{value:new W(Ht,L.EMPTY_NODE)},MAX:{value:new W(St,Wi)}});Gh.__EMPTY_NODE=L.EMPTY_NODE;ye.__childrenNodeConstructor=L;Eg(Wi);Ig(Wi);/**
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
 */const Sg=!0;function _e(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ye(t,_e(e))}if(!(n instanceof Array)&&Sg){const t=[];let i=!1;if(Re(n,(a,l)=>{if(a.substring(0,1)!=="."){const u=_e(l);u.isEmpty()||(i=i||!u.getPriority().isEmpty(),t.push(new W(a,u)))}}),t.length===0)return L.EMPTY_NODE;const r=Us(t,vg,a=>a.name,ya);if(i){const a=Us(t,oe.getCompare());return new L(r,_e(e),new lt({".priority":a},{".priority":oe}))}else return new L(r,_e(e),lt.Default)}else{let t=L.EMPTY_NODE;return Re(n,(i,s)=>{if(it(n,i)&&i.substring(0,1)!=="."){const r=_e(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(_e(e))}}Tg(_e);/**
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
 */class va extends or{constructor(e){super(),this.indexPath_=e,N(!j(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?en(e.name,t.name):r}makePost(e,t){const i=_e(e),s=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new W(t,s)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Wi);return new W(St,e)}toString(){return Ci(this.indexPath_,0).join("/")}}/**
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
 */class Pg extends or{compare(e,t){const i=e.node.compareTo(t.node);return i===0?en(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,t){const i=_e(e);return new W(t,i)}toString(){return".value"}}const Yh=new Pg;/**
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
 */function Xh(n){return{type:"value",snapshotNode:n}}function vn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ri(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Si(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function bg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ea{constructor(e){this.index_=e}updateChild(e,t,i,s,r,a){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(Ri(t,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(vn(t,i)):a.trackChildChange(Si(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,r)=>{t.hasChild(s)||i.trackChildChange(Ri(s,r))}),t.isLeafNode()||t.forEachChild(oe,(s,r)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(r)||i.trackChildChange(Si(s,r,a))}else i.trackChildChange(vn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Pi{constructor(e){this.indexedFilter_=new Ea(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pi.getStartPost_(e),this.endPost_=Pi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,a){return this.matches(new W(t,i))||(i=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=L.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(L.EMPTY_NODE);const r=this;return t.forEachChild(oe,(a,l)=>{r.matches(new W(a,l))||(s=s.updateImmediateChild(a,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ng{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Pi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,a){return this.rangedFilter_.matches(new W(t,i))||(i=L.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,a):this.fullLimitUpdateChild_(e,t,i,r,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;r.hasNext()&&a<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let a=0;for(;r.hasNext();){const l=r.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:s=s.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let a;if(this.reverse_){const _=this.index_.getCompare();a=(m,A)=>_(A,m)}else a=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const u=new W(t,i),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(l.hasChild(t)){const _=l.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const A=m==null?1:a(m,u);if(f&&!i.isEmpty()&&A>=0)return r!=null&&r.trackChildChange(Si(t,i,_)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Ri(t,_));const V=l.updateImmediateChild(t,L.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(vn(m.name,m.node)),V.updateImmediateChild(m.name,m.node)):V}}else return i.isEmpty()?e:f&&a(h,u)>=0?(r!=null&&(r.trackChildChange(Ri(h.name,h.node)),r.trackChildChange(vn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(h.name,L.EMPTY_NODE)):e}}/**
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
 */class Ta{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ht}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:St}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Ta;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dg(n){return n.loadsAllData()?new Ea(n.getIndex()):n.hasLimit()?new Ng(n):new Pi(n)}function kg(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function Vg(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function xg(n,e){const t=n.copy();return t.index_=e,t}function Zc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===oe?t="$priority":n.index_===Yh?t="$value":n.index_===Wt?t="$key":(N(n.index_ instanceof va,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=me(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=me(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+me(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=me(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+me(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function eu(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==oe&&(e.i=n.index_.toString()),e}/**
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
 */class Bs extends qh{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=Bs.getListenId_(e,i),l={};this.listens_[a]=l;const u=Zc(e._queryParams);this.restRequest_(r+".json",u,(h,f)=>{let _=f;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(r,_,!1,i),gn(this.listens_,a)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",s(m,null)}})}unlisten(e,t){const i=Bs.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Zc(e._queryParams),i=e._path.toString(),s=new Bi;return this.restRequest_(i+".json",t,(r,a)=>{let l=a;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+c_(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=Ii(l.responseText)}catch{Fe("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,u)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
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
 */class Og{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function qs(){return{value:null,children:new Map}}function Jh(n,e,t){if(j(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=q(e);n.children.has(i)||n.children.set(i,qs());const s=n.children.get(i);e=ne(e),Jh(s,e,t)}}function bo(n,e,t){n.value!==null?t(e,n.value):Mg(n,(i,s)=>{const r=new Z(e.toString()+"/"+i);bo(s,r,t)})}function Mg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Lg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Re(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const tu=10*1e3,Fg=30*1e3,Ug=5*60*1e3;class Bg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lg(e);const i=tu+(Fg-tu)*Math.random();pi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Re(e,(s,r)=>{r>0&&it(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ug))}}/**
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
 */var Ke;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function Ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Aa(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class js{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ke.ACK_USER_WRITE,this.source=Ia()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Z(e));return new js(Y(),t,this.revert)}}else return N(q(this.path)===e,"operationForChild called for unrelated child."),new js(ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class bi{constructor(e,t){this.source=e,this.path=t,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new bi(this.source,Y()):new bi(this.source,ne(this.path))}}/**
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
 */class Kt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ke.OVERWRITE}operationForChild(e){return j(this.path)?new Kt(this.source,Y(),this.snap.getImmediateChild(e)):new Kt(this.source,ne(this.path),this.snap)}}/**
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
 */class En{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ke.MERGE}operationForChild(e){if(j(this.path)){const t=this.children.subtree(new Z(e));return t.isEmpty()?null:t.value?new Kt(this.source,Y(),t.value):new En(this.source,Y(),t)}else return N(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new En(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const t=q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class qg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jg(n,e,t,i){const s=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(bg(a.childName,a.snapshotNode))}),oi(n,s,"child_removed",e,i,t),oi(n,s,"child_added",e,i,t),oi(n,s,"child_moved",r,i,t),oi(n,s,"child_changed",e,i,t),oi(n,s,"value",e,i,t),s}function oi(n,e,t,i,s,r){const a=i.filter(l=>l.type===t);a.sort((l,u)=>$g(n,l,u)),a.forEach(l=>{const u=Wg(n,l,r);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(u,n.query_))})})}function Wg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function $g(n,e,t){if(e.childName==null||t.childName==null)throw Nn("Should only compare child_ events.");const i=new W(e.childName,e.snapshotNode),s=new W(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function ar(n,e){return{eventCache:n,serverCache:e}}function _i(n,e,t,i){return ar(new bt(e,t,i),n.serverCache)}function Zh(n,e,t,i){return ar(n.eventCache,new bt(e,t,i))}function Ws(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ho;const Gg=()=>(ho||(ho=new Xe(Pm)),ho);class te{constructor(e,t=Gg()){this.value=e,this.children=t}static fromObject(e){let t=new te(null);return Re(e,(i,s)=>{t=t.set(new Z(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Y(),value:this.value};if(j(e))return null;{const i=q(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ne(e),t);return r!=null?{path:ce(new Z(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const t=q(e),i=this.children.get(t);return i!==null?i.subtree(ne(e)):new te(null)}}set(e,t){if(j(e))return new te(t,this.children);{const i=q(e),r=(this.children.get(i)||new te(null)).set(ne(e),t),a=this.children.insert(i,r);return new te(this.value,a)}}remove(e){if(j(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const t=q(e),i=this.children.get(t);if(i){const s=i.remove(ne(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const t=q(e),i=this.children.get(t);return i?i.get(ne(e)):null}}setTree(e,t){if(j(e))return t;{const i=q(e),r=(this.children.get(i)||new te(null)).setTree(ne(e),t);let a;return r.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,r),new te(this.value,a)}}fold(e){return this.fold_(Y(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ce(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Y(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(j(e))return null;{const r=q(e),a=this.children.get(r);return a?a.findOnPath_(ne(e),ce(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Y(),t)}foreachOnPath_(e,t,i){if(j(e))return this;{this.value&&i(t,this.value);const s=q(e),r=this.children.get(s);return r?r.foreachOnPath_(ne(e),ce(t,s),i):new te(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ce(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new te(null))}}function mi(n,e,t){if(j(e))return new Qe(new te(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const a=Le(s,e);return r=r.updateChild(a,t),new Qe(n.writeTree_.set(s,r))}else{const s=new te(t),r=n.writeTree_.setTree(e,s);return new Qe(r)}}}function No(n,e,t){let i=n;return Re(t,(s,r)=>{i=mi(i,ce(e,s),r)}),i}function nu(n,e){if(j(e))return Qe.empty();{const t=n.writeTree_.setTree(e,new te(null));return new Qe(t)}}function Do(n,e){return tn(n,e)!=null}function tn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Le(t.path,e)):null}function iu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(oe,(i,s)=>{e.push(new W(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new W(i,s.value))}),e}function At(n,e){if(j(e))return n;{const t=tn(n,e);return t!=null?new Qe(new te(t)):new Qe(n.writeTree_.subtree(e))}}function ko(n){return n.writeTree_.isEmpty()}function Tn(n,e){return ed(Y(),n.writeTree_,e)}function ed(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(N(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=ed(ce(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ce(n,".priority"),i)),t}}/**
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
 */function lr(n,e){return sd(e,n)}function zg(n,e,t,i,s){N(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=mi(n.visibleWrites,e,t)),n.lastWriteId=i}function Hg(n,e,t,i){N(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=No(n.visibleWrites,e,t),n.lastWriteId=i}function Kg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Qg(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);N(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&Yg(l,i.path)?s=!1:$e(i.path,l.path)&&(r=!0)),a--}if(s){if(r)return Xg(n),!0;if(i.snap)n.visibleWrites=nu(n.visibleWrites,i.path);else{const l=i.children;Re(l,u=>{n.visibleWrites=nu(n.visibleWrites,ce(i.path,u))})}return!0}else return!1}function Yg(n,e){if(n.snap)return $e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$e(ce(n.path,t),e))return!0;return!1}function Xg(n){n.visibleWrites=td(n.allWrites,Jg,Y()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jg(n){return n.visible}function td(n,e,t){let i=Qe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const a=r.path;let l;if(r.snap)$e(t,a)?(l=Le(t,a),i=mi(i,l,r.snap)):$e(a,t)&&(l=Le(a,t),i=mi(i,Y(),r.snap.getChild(l)));else if(r.children){if($e(t,a))l=Le(t,a),i=No(i,l,r.children);else if($e(a,t))if(l=Le(a,t),j(l))i=No(i,Y(),r.children);else{const u=gn(r.children,q(l));if(u){const h=u.getChild(ne(l));i=mi(i,Y(),h)}}}else throw Nn("WriteRecord should have .snap or .children")}}return i}function nd(n,e,t,i,s){if(!i&&!s){const r=tn(n.visibleWrites,e);if(r!=null)return r;{const a=At(n.visibleWrites,e);if(ko(a))return t;if(t==null&&!Do(a,Y()))return null;{const l=t||L.EMPTY_NODE;return Tn(a,l)}}}else{const r=At(n.visibleWrites,e);if(!s&&ko(r))return t;if(!s&&t==null&&!Do(r,Y()))return null;{const a=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&($e(h.path,e)||$e(e,h.path))},l=td(n.allWrites,a,e),u=t||L.EMPTY_NODE;return Tn(l,u)}}}function Zg(n,e,t){let i=L.EMPTY_NODE;const s=tn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(r,a)=>{i=i.updateImmediateChild(r,a)}),i;if(t){const r=At(n.visibleWrites,e);return t.forEachChild(oe,(a,l)=>{const u=Tn(At(r,new Z(a)),l);i=i.updateImmediateChild(a,u)}),iu(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const r=At(n.visibleWrites,e);return iu(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function ey(n,e,t,i,s){N(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ce(e,t);if(Do(n.visibleWrites,r))return null;{const a=At(n.visibleWrites,r);return ko(a)?s.getChild(t):Tn(a,s.getChild(t))}}function ty(n,e,t,i){const s=ce(e,t),r=tn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const a=At(n.visibleWrites,s);return Tn(a,i.getNode().getImmediateChild(t))}else return null}function ny(n,e){return tn(n.visibleWrites,e)}function iy(n,e,t,i,s,r,a){let l;const u=At(n.visibleWrites,e),h=tn(u,Y());if(h!=null)l=h;else if(t!=null)l=Tn(u,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],_=a.getCompare(),m=r?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let A=m.getNext();for(;A&&f.length<s;)_(A,i)!==0&&f.push(A),A=m.getNext();return f}else return[]}function sy(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function $s(n,e,t,i){return nd(n.writeTree,n.treePath,e,t,i)}function Ca(n,e){return Zg(n.writeTree,n.treePath,e)}function su(n,e,t,i){return ey(n.writeTree,n.treePath,e,t,i)}function Gs(n,e){return ny(n.writeTree,ce(n.treePath,e))}function ry(n,e,t,i,s,r){return iy(n.writeTree,n.treePath,e,t,i,s,r)}function Ra(n,e,t){return ty(n.writeTree,n.treePath,e,t)}function id(n,e){return sd(ce(n.treePath,e),n.writeTree)}function sd(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oy{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;N(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),N(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Si(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ri(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,vn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Si(i,e.snapshotNode,s.oldSnap));else throw Nn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ay{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const rd=new ay;class Sa{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ra(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qt(this.viewCache_),r=ry(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function ly(n){return{filter:n}}function cy(n,e){N(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function uy(n,e,t,i,s){const r=new oy;let a,l;if(t.type===Ke.OVERWRITE){const h=t;h.source.fromUser?a=Vo(n,e,h.path,h.snap,i,s,r):(N(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!j(h.path),a=zs(n,e,h.path,h.snap,i,s,l,r))}else if(t.type===Ke.MERGE){const h=t;h.source.fromUser?a=dy(n,e,h.path,h.children,i,s,r):(N(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=xo(n,e,h.path,h.children,i,s,l,r))}else if(t.type===Ke.ACK_USER_WRITE){const h=t;h.revert?a=_y(n,e,h.path,i,s,r):a=fy(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===Ke.LISTEN_COMPLETE)a=py(n,e,t.path,i,r);else throw Nn("Unknown operation type: "+t.type);const u=r.getChanges();return hy(e,a,u),{viewCache:a,changes:u}}function hy(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ws(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Xh(Ws(e)))}}function od(n,e,t,i,s,r){const a=e.eventCache;if(Gs(i,t)!=null)return e;{let l,u;if(j(t))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Qt(e),f=h instanceof L?h:L.EMPTY_NODE,_=Ca(i,f);l=n.filter.updateFullNode(e.eventCache.getNode(),_,r)}else{const h=$s(i,Qt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=q(t);if(h===".priority"){N(Pt(t)===1,"Can't have a priority with additional path components");const f=a.getNode();u=e.serverCache.getNode();const _=su(i,t,f,u);_!=null?l=n.filter.updatePriority(f,_):l=a.getNode()}else{const f=ne(t);let _;if(a.isCompleteForChild(h)){u=e.serverCache.getNode();const m=su(i,t,a.getNode(),u);m!=null?_=a.getNode().getImmediateChild(h).updateChild(f,m):_=a.getNode().getImmediateChild(h)}else _=Ra(i,h,e.serverCache);_!=null?l=n.filter.updateChild(a.getNode(),h,_,f,s,r):l=a.getNode()}}return _i(e,l,a.isFullyInitialized()||j(t),n.filter.filtersNodes())}}function zs(n,e,t,i,s,r,a,l){const u=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(j(t))h=f.updateFullNode(u.getNode(),i,null);else if(f.filtersNodes()&&!u.isFiltered()){const A=u.getNode().updateChild(t,i);h=f.updateFullNode(u.getNode(),A,null)}else{const A=q(t);if(!u.isCompleteForPath(t)&&Pt(t)>1)return e;const S=ne(t),D=u.getNode().getImmediateChild(A).updateChild(S,i);A===".priority"?h=f.updatePriority(u.getNode(),D):h=f.updateChild(u.getNode(),A,D,S,rd,null)}const _=Zh(e,h,u.isFullyInitialized()||j(t),f.filtersNodes()),m=new Sa(s,_,r);return od(n,_,t,s,m,l)}function Vo(n,e,t,i,s,r,a){const l=e.eventCache;let u,h;const f=new Sa(s,e,r);if(j(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,a),u=_i(e,h,!0,n.filter.filtersNodes());else{const _=q(t);if(_===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),u=_i(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=ne(t),A=l.getNode().getImmediateChild(_);let S;if(j(m))S=i;else{const V=f.getCompleteChild(_);V!=null?_a(m)===".priority"&&V.getChild(Wh(m)).isEmpty()?S=V:S=V.updateChild(m,i):S=L.EMPTY_NODE}if(A.equals(S))u=e;else{const V=n.filter.updateChild(l.getNode(),_,S,m,f,a);u=_i(e,V,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function ru(n,e){return n.eventCache.isCompleteForChild(e)}function dy(n,e,t,i,s,r,a){let l=e;return i.foreach((u,h)=>{const f=ce(t,u);ru(e,q(f))&&(l=Vo(n,l,f,h,s,r,a))}),i.foreach((u,h)=>{const f=ce(t,u);ru(e,q(f))||(l=Vo(n,l,f,h,s,r,a))}),l}function ou(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function xo(n,e,t,i,s,r,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;j(t)?h=i:h=new te(null).setTree(t,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((_,m)=>{if(f.hasChild(_)){const A=e.serverCache.getNode().getImmediateChild(_),S=ou(n,A,m);u=zs(n,u,new Z(_),S,s,r,a,l)}}),h.children.inorderTraversal((_,m)=>{const A=!e.serverCache.isCompleteForChild(_)&&m.value===null;if(!f.hasChild(_)&&!A){const S=e.serverCache.getNode().getImmediateChild(_),V=ou(n,S,m);u=zs(n,u,new Z(_),V,s,r,a,l)}}),u}function fy(n,e,t,i,s,r,a){if(Gs(s,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(i.value!=null){if(j(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return zs(n,e,t,u.getNode().getChild(t),s,r,l,a);if(j(t)){let h=new te(null);return u.getNode().forEachChild(Wt,(f,_)=>{h=h.set(new Z(f),_)}),xo(n,e,t,h,s,r,l,a)}else return e}else{let h=new te(null);return i.foreach((f,_)=>{const m=ce(t,f);u.isCompleteForPath(m)&&(h=h.set(f,u.getNode().getChild(m)))}),xo(n,e,t,h,s,r,l,a)}}function py(n,e,t,i,s){const r=e.serverCache,a=Zh(e,r.getNode(),r.isFullyInitialized()||j(t),r.isFiltered());return od(n,a,t,i,rd,s)}function _y(n,e,t,i,s,r){let a;if(Gs(i,t)!=null)return e;{const l=new Sa(i,e,s),u=e.eventCache.getNode();let h;if(j(t)||q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=$s(i,Qt(e));else{const _=e.serverCache.getNode();N(_ instanceof L,"serverChildren would be complete if leaf node"),f=Ca(i,_)}f=f,h=n.filter.updateFullNode(u,f,r)}else{const f=q(t);let _=Ra(i,f,e.serverCache);_==null&&e.serverCache.isCompleteForChild(f)&&(_=u.getImmediateChild(f)),_!=null?h=n.filter.updateChild(u,f,_,ne(t),l,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(u,f,L.EMPTY_NODE,ne(t),l,r):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=$s(i,Qt(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=e.serverCache.isFullyInitialized()||Gs(i,Y())!=null,_i(e,h,a,n.filter.filtersNodes())}}/**
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
 */class my{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ea(i.getIndex()),r=Dg(i);this.processor_=ly(r);const a=t.serverCache,l=t.eventCache,u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),h=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),f=new bt(u,a.isFullyInitialized(),s.filtersNodes()),_=new bt(h,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ar(_,f),this.eventGenerator_=new qg(this.query_)}get query(){return this.query_}}function gy(n){return n.viewCache_.serverCache.getNode()}function yy(n){return Ws(n.viewCache_)}function vy(n,e){const t=Qt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!j(e)&&!t.getImmediateChild(q(e)).isEmpty())?t.getChild(e):null}function au(n){return n.eventRegistrations_.length===0}function Ey(n,e){n.eventRegistrations_.push(e)}function lu(n,e,t){const i=[];if(t){N(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const a=r.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const a=n.eventRegistrations_[r];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function cu(n,e,t,i){e.type===Ke.MERGE&&e.source.queryId!==null&&(N(Qt(n.viewCache_),"We should always have a full cache before handling merges"),N(Ws(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=uy(n.processor_,s,e,t,i);return cy(n.processor_,r.viewCache),N(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ad(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ty(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(oe,(r,a)=>{i.push(vn(r,a))}),t.isFullyInitialized()&&i.push(Xh(t.getNode())),ad(n,i,t.getNode(),e)}function ad(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return jg(n.eventGenerator_,e,t,s)}/**
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
 */let Hs;class ld{constructor(){this.views=new Map}}function Iy(n){N(!Hs,"__referenceConstructor has already been defined"),Hs=n}function wy(){return N(Hs,"Reference.ts has not been loaded"),Hs}function Ay(n){return n.views.size===0}function Pa(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return N(r!=null,"SyncTree gave us an op for an invalid query."),cu(r,e,t,i)}else{let r=[];for(const a of n.views.values())r=r.concat(cu(a,e,t,i));return r}}function cd(n,e,t,i,s){const r=e._queryIdentifier,a=n.views.get(r);if(!a){let l=$s(t,s?i:null),u=!1;l?u=!0:i instanceof L?(l=Ca(t,i),u=!1):(l=L.EMPTY_NODE,u=!1);const h=ar(new bt(l,u,!1),new bt(i,s,!1));return new my(e,h)}return a}function Cy(n,e,t,i,s,r){const a=cd(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),Ey(a,t),Ty(a,t)}function Ry(n,e,t,i){const s=e._queryIdentifier,r=[];let a=[];const l=Nt(n);if(s==="default")for(const[u,h]of n.views.entries())a=a.concat(lu(h,t,i)),au(h)&&(n.views.delete(u),h.query._queryParams.loadsAllData()||r.push(h.query));else{const u=n.views.get(s);u&&(a=a.concat(lu(u,t,i)),au(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||r.push(u.query)))}return l&&!Nt(n)&&r.push(new(wy())(e._repo,e._path)),{removed:r,events:a}}function ud(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ct(n,e){let t=null;for(const i of n.views.values())t=t||vy(i,e);return t}function hd(n,e){if(e._queryParams.loadsAllData())return cr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function dd(n,e){return hd(n,e)!=null}function Nt(n){return cr(n)!=null}function cr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ks;function Sy(n){N(!Ks,"__referenceConstructor has already been defined"),Ks=n}function Py(){return N(Ks,"Reference.ts has not been loaded"),Ks}let by=1;class uu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=sy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fd(n,e,t,i,s){return zg(n.pendingWriteTree_,e,t,i,s),s?kn(n,new Kt(Ia(),e,t)):[]}function Ny(n,e,t,i){Hg(n.pendingWriteTree_,e,t,i);const s=te.fromObject(t);return kn(n,new En(Ia(),e,s))}function Et(n,e,t=!1){const i=Kg(n.pendingWriteTree_,e);if(Qg(n.pendingWriteTree_,e)){let r=new te(null);return i.snap!=null?r=r.set(Y(),!0):Re(i.children,a=>{r=r.set(new Z(a),!0)}),kn(n,new js(i.path,r,t))}else return[]}function $i(n,e,t){return kn(n,new Kt(wa(),e,t))}function Dy(n,e,t){const i=te.fromObject(t);return kn(n,new En(wa(),e,i))}function ky(n,e){return kn(n,new bi(wa(),e))}function Vy(n,e,t){const i=Na(n,t);if(i){const s=Da(i),r=s.path,a=s.queryId,l=Le(r,e),u=new bi(Aa(a),l);return ka(n,r,u)}else return[]}function Qs(n,e,t,i,s=!1){const r=e._path,a=n.syncPointTree_.get(r);let l=[];if(a&&(e._queryIdentifier==="default"||dd(a,e))){const u=Ry(a,e,t,i);Ay(a)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=u.removed;if(l=u.events,!s){const f=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(r,(m,A)=>Nt(A));if(f&&!_){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const A=My(m);for(let S=0;S<A.length;++S){const V=A[S],D=V.query,G=gd(n,V);n.listenProvider_.startListening(gi(D),Ni(n,D),G.hashFn,G.onComplete)}}}!_&&h.length>0&&!i&&(f?n.listenProvider_.stopListening(gi(e),null):h.forEach(m=>{const A=n.queryToTagMap.get(ur(m));n.listenProvider_.stopListening(gi(m),A)}))}Ly(n,h)}return l}function pd(n,e,t,i){const s=Na(n,i);if(s!=null){const r=Da(s),a=r.path,l=r.queryId,u=Le(a,e),h=new Kt(Aa(l),u,t);return ka(n,a,h)}else return[]}function xy(n,e,t,i){const s=Na(n,i);if(s){const r=Da(s),a=r.path,l=r.queryId,u=Le(a,e),h=te.fromObject(t),f=new En(Aa(l),u,h);return ka(n,a,f)}else return[]}function Oo(n,e,t,i=!1){const s=e._path;let r=null,a=!1;n.syncPointTree_.foreachOnPath(s,(m,A)=>{const S=Le(m,s);r=r||Ct(A,S),a=a||Nt(A)});let l=n.syncPointTree_.get(s);l?(a=a||Nt(l),r=r||Ct(l,Y())):(l=new ld,n.syncPointTree_=n.syncPointTree_.set(s,l));let u;r!=null?u=!0:(u=!1,r=L.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((A,S)=>{const V=Ct(S,Y());V&&(r=r.updateImmediateChild(A,V))}));const h=dd(l,e);if(!h&&!e._queryParams.loadsAllData()){const m=ur(e);N(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const A=Fy();n.queryToTagMap.set(m,A),n.tagToQueryMap.set(A,m)}const f=lr(n.pendingWriteTree_,s);let _=Cy(l,e,t,f,r,u);if(!h&&!a&&!i){const m=hd(l,e);_=_.concat(Uy(n,e,m))}return _}function ba(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,l)=>{const u=Le(a,e),h=Ct(l,u);if(h)return h});return nd(s,e,r,t,!0)}function Oy(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(h,f)=>{const _=Le(h,t);i=i||Ct(f,_)});let s=n.syncPointTree_.get(t);s?i=i||Ct(s,Y()):(s=new ld,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,a=r?new bt(i,!0,!1):null,l=lr(n.pendingWriteTree_,e._path),u=cd(s,e,l,r?a.getNode():L.EMPTY_NODE,r);return yy(u)}function kn(n,e){return _d(e,n.syncPointTree_,null,lr(n.pendingWriteTree_,Y()))}function _d(n,e,t,i){if(j(n.path))return md(n,e,t,i);{const s=e.get(Y());t==null&&s!=null&&(t=Ct(s,Y()));let r=[];const a=q(n.path),l=n.operationForChild(a),u=e.children.get(a);if(u&&l){const h=t?t.getImmediateChild(a):null,f=id(i,a);r=r.concat(_d(l,u,h,f))}return s&&(r=r.concat(Pa(s,n,i,t))),r}}function md(n,e,t,i){const s=e.get(Y());t==null&&s!=null&&(t=Ct(s,Y()));let r=[];return e.children.inorderTraversal((a,l)=>{const u=t?t.getImmediateChild(a):null,h=id(i,a),f=n.operationForChild(a);f&&(r=r.concat(md(f,l,u,h)))}),s&&(r=r.concat(Pa(s,n,i,t))),r}function gd(n,e){const t=e.query,i=Ni(n,t);return{hashFn:()=>(gy(e)||L.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Vy(n,t._path,i):ky(n,t._path);{const r=Dm(s,t);return Qs(n,t,null,r)}}}}function Ni(n,e){const t=ur(e);return n.queryToTagMap.get(t)}function ur(n){return n._path.toString()+"$"+n._queryIdentifier}function Na(n,e){return n.tagToQueryMap.get(e)}function Da(n){const e=n.indexOf("$");return N(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Z(n.substr(0,e))}}function ka(n,e,t){const i=n.syncPointTree_.get(e);N(i,"Missing sync point for query tag that we're tracking");const s=lr(n.pendingWriteTree_,e);return Pa(i,t,s,null)}function My(n){return n.fold((e,t,i)=>{if(t&&Nt(t))return[cr(t)];{let s=[];return t&&(s=ud(t)),Re(i,(r,a)=>{s=s.concat(a)}),s}})}function gi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Py())(n._repo,n._path):n}function Ly(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ur(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Fy(){return by++}function Uy(n,e,t){const i=e._path,s=Ni(n,e),r=gd(n,t),a=n.listenProvider_.startListening(gi(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)N(!Nt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((h,f,_)=>{if(!j(h)&&f&&Nt(f))return[cr(f).query];{let m=[];return f&&(m=m.concat(ud(f).map(A=>A.query))),Re(_,(A,S)=>{m=m.concat(S)}),m}});for(let h=0;h<u.length;++h){const f=u[h];n.listenProvider_.stopListening(gi(f),Ni(n,f))}}return a}/**
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
 */class Va{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Va(t)}node(){return this.node_}}class xa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new xa(this.syncTree_,t)}node(){return ba(this.syncTree_,this.path_)}}const By=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},hu=function(n,e,t){if(!n||typeof n!="object")return n;if(N(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return qy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return jy(n[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},qy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:N(!1,"Unexpected server value: "+n)}},jy=function(n,e,t){n.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&N(!1,"Unexpected increment value: "+i);const s=e.node();if(N(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},yd=function(n,e,t,i){return Oa(e,new xa(t,n),i)},vd=function(n,e,t){return Oa(n,new Va(e),t)};function Oa(n,e,t){const i=n.getPriority().val(),s=hu(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,l=hu(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new ye(l,_e(s)):n}else{const a=n;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new ye(s))),a.forEachChild(oe,(l,u)=>{const h=Oa(u,e.getImmediateChild(l),t);h!==u&&(r=r.updateImmediateChild(l,h))}),r}}/**
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
 */class Ma{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function La(n,e){let t=e instanceof Z?e:new Z(e),i=n,s=q(t);for(;s!==null;){const r=gn(i.node.children,s)||{children:{},childCount:0};i=new Ma(s,i,r),t=ne(t),s=q(t)}return i}function Vn(n){return n.node.value}function Ed(n,e){n.node.value=e,Mo(n)}function Td(n){return n.node.childCount>0}function Wy(n){return Vn(n)===void 0&&!Td(n)}function hr(n,e){Re(n.node.children,(t,i)=>{e(new Ma(t,n,i))})}function Id(n,e,t,i){t&&!i&&e(n),hr(n,s=>{Id(s,e,!0,i)}),t&&i&&e(n)}function $y(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Gi(n){return new Z(n.parent===null?n.name:Gi(n.parent)+"/"+n.name)}function Mo(n){n.parent!==null&&Gy(n.parent,n.name,n)}function Gy(n,e,t){const i=Wy(t),s=it(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Mo(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Mo(n))}/**
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
 */const zy=/[\[\].#$\/\u0000-\u001F\u007F]/,Hy=/[\[\].#$\u0000-\u001F\u007F]/,fo=10*1024*1024,Fa=function(n){return typeof n=="string"&&n.length!==0&&!zy.test(n)},wd=function(n){return typeof n=="string"&&n.length!==0&&!Hy.test(n)},Ky=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wd(n)},Lo=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ua(n)||n&&typeof n=="object"&&it(n,".sv")},zi=function(n,e,t,i){i&&e===void 0||dr(sr(n,"value"),e,t)},dr=function(n,e,t){const i=t instanceof Z?new hg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Bt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Bt(i)+" with contents = "+e.toString());if(ua(e))throw new Error(n+"contains "+e.toString()+" "+Bt(i));if(typeof e=="string"&&e.length>fo/3&&rr(e)>fo)throw new Error(n+"contains a string greater than "+fo+" utf8 bytes "+Bt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Re(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!Fa(a)))throw new Error(n+" contains an invalid key ("+a+") "+Bt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dg(i,a),dr(n,l,i),fg(i)}),s&&r)throw new Error(n+' contains ".value" child '+Bt(i)+" in addition to actual children.")}},Qy=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Ci(i);for(let a=0;a<r.length;a++)if(!(r[a]===".priority"&&a===r.length-1)){if(!Fa(r[a]))throw new Error(n+"contains an invalid key ("+r[a]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ug);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&$e(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Yy=function(n,e,t,i){const s=sr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Re(e,(a,l)=>{const u=new Z(a);if(dr(s,l,ce(t,u)),_a(u)===".priority"&&!Lo(l))throw new Error(s+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(u)}),Qy(s,r)},Ua=function(n,e,t,i){if(!wd(t))throw new Error(sr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xy=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ua(n,e,t)},Ad=function(n,e){if(q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ky(t))throw new Error(sr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ma(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Cd(n,e,t){fr(n,t),Rd(n,i=>ma(i,e))}function Ge(n,e,t){fr(n,t),Rd(n,i=>$e(i,e)||$e(e,i))}function Rd(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(ev(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ev(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();fi&&we("event: "+t.toString()),Dn(i)}}}/**
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
 */const tv="repo_interrupt",nv=25;class iv{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qs(),this.transactionQueueTree_=new Ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sv(n,e,t){if(n.stats_=fa(n.repoInfo_),n.forceRestClient_||Om())n.server_=new Bs(n.repoInfo_,(i,s,r,a)=>{du(n,i,s,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>fu(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ct(n.repoInfo_,e,(i,s,r,a)=>{du(n,i,s,r,a)},i=>{fu(n,i)},i=>{rv(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Bm(n.repoInfo_,()=>new Bg(n.stats_,n.server_)),n.infoData_=new Og,n.infoSyncTree_=new uu({startListening:(i,s,r,a)=>{let l=[];const u=n.infoData_.getNode(i._path);return u.isEmpty()||(l=$i(n.infoSyncTree_,i._path,u),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Ba(n,"connected",!1),n.serverSyncTree_=new uu({startListening:(i,s,r,a)=>(n.server_.listen(i,r,s,(l,u)=>{const h=a(l,u);Ge(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Sd(n){const t=n.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pr(n){return By({timestamp:Sd(n)})}function du(n,e,t,i,s){n.dataUpdateCount++;const r=new Z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const u=Os(t,h=>_e(h));a=xy(n.serverSyncTree_,r,u,s)}else{const u=_e(t);a=pd(n.serverSyncTree_,r,u,s)}else if(i){const u=Os(t,h=>_e(h));a=Dy(n.serverSyncTree_,r,u)}else{const u=_e(t);a=$i(n.serverSyncTree_,r,u)}let l=r;a.length>0&&(l=In(n,r)),Ge(n.eventQueue_,l,a)}function fu(n,e){Ba(n,"connected",e),e===!1&&cv(n)}function rv(n,e){Re(e,(t,i)=>{Ba(n,t,i)})}function Ba(n,e,t){const i=new Z("/.info/"+e),s=_e(t);n.infoData_.updateSnapshot(i,s);const r=$i(n.infoSyncTree_,i,s);Ge(n.eventQueue_,i,r)}function qa(n){return n.nextWriteId_++}function ov(n,e,t){const i=Oy(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=_e(s).withIndex(e._queryParams.getIndex());Oo(n.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=$i(n.serverSyncTree_,e._path,r);else{const l=Ni(n.serverSyncTree_,e);a=pd(n.serverSyncTree_,e._path,r,l)}return Ge(n.eventQueue_,e._path,a),Qs(n.serverSyncTree_,e,t,null,!0),r},s=>(Hi(n,"get for query "+me(e)+" failed: "+s),Promise.reject(new Error(s))))}function av(n,e,t,i,s){Hi(n,"set",{path:e.toString(),value:t,priority:i});const r=pr(n),a=_e(t,i),l=ba(n.serverSyncTree_,e),u=vd(a,l,r),h=qa(n),f=fd(n.serverSyncTree_,e,u,h,!0);fr(n.eventQueue_,f),n.server_.put(e.toString(),a.val(!0),(m,A)=>{const S=m==="ok";S||Fe("set at "+e+" failed: "+m);const V=Et(n.serverSyncTree_,h,!S);Ge(n.eventQueue_,e,V),Fo(n,s,m,A)});const _=Wa(n,e);In(n,_),Ge(n.eventQueue_,_,[])}function lv(n,e,t,i){Hi(n,"update",{path:e.toString(),value:t});let s=!0;const r=pr(n),a={};if(Re(t,(l,u)=>{s=!1,a[l]=yd(ce(e,l),_e(u),n.serverSyncTree_,r)}),s)we("update() called with empty data.  Don't do anything."),Fo(n,i,"ok",void 0);else{const l=qa(n),u=Ny(n.serverSyncTree_,e,a,l);fr(n.eventQueue_,u),n.server_.merge(e.toString(),t,(h,f)=>{const _=h==="ok";_||Fe("update at "+e+" failed: "+h);const m=Et(n.serverSyncTree_,l,!_),A=m.length>0?In(n,e):e;Ge(n.eventQueue_,A,m),Fo(n,i,h,f)}),Re(t,h=>{const f=Wa(n,ce(e,h));In(n,f)}),Ge(n.eventQueue_,e,[])}}function cv(n){Hi(n,"onDisconnectEvents");const e=pr(n),t=qs();bo(n.onDisconnect_,Y(),(s,r)=>{const a=yd(s,r,n.serverSyncTree_,e);Jh(t,s,a)});let i=[];bo(t,Y(),(s,r)=>{i=i.concat($i(n.serverSyncTree_,s,r));const a=Wa(n,s);In(n,a)}),n.onDisconnect_=qs(),Ge(n.eventQueue_,Y(),i)}function uv(n,e,t){let i;q(e._path)===".info"?i=Oo(n.infoSyncTree_,e,t):i=Oo(n.serverSyncTree_,e,t),Cd(n.eventQueue_,e._path,i)}function hv(n,e,t){let i;q(e._path)===".info"?i=Qs(n.infoSyncTree_,e,t):i=Qs(n.serverSyncTree_,e,t),Cd(n.eventQueue_,e._path,i)}function dv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tv)}function Hi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),we(t,...e)}function Fo(n,e,t,i){e&&Dn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const a=new Error(r);a.code=s,e(a)}})}function Pd(n,e,t){return ba(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function ja(n,e=n.transactionQueueTree_){if(e||_r(n,e),Vn(e)){const t=Nd(n,e);N(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&fv(n,Gi(e),t)}else Td(e)&&hr(e,t=>{ja(n,t)})}function fv(n,e,t){const i=t.map(h=>h.currentWriteId),s=Pd(n,e,i);let r=s;const a=s.hash();for(let h=0;h<t.length;h++){const f=t[h];N(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const _=Le(e,f.path);r=r.updateChild(_,f.currentOutputSnapshotRaw)}const l=r.val(!0),u=e;n.server_.put(u.toString(),l,h=>{Hi(n,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const _=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Et(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&_.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();_r(n,La(n.transactionQueueTree_,e)),ja(n,n.transactionQueueTree_),Ge(n.eventQueue_,e,f);for(let m=0;m<_.length;m++)Dn(_[m])}else{if(h==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{Fe("transaction at "+u.toString()+" failed: "+h);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=h}In(n,e)}},a)}function In(n,e){const t=bd(n,e),i=Gi(t),s=Nd(n,t);return pv(n,s,i),i}function pv(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],h=Le(t,u.path);let f=!1,_;if(N(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,_=u.abortReason,s=s.concat(Et(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=nv)f=!0,_="maxretry",s=s.concat(Et(n.serverSyncTree_,u.currentWriteId,!0));else{const m=Pd(n,u.path,a);u.currentInputSnapshot=m;const A=e[l].update(m.val());if(A!==void 0){dr("transaction failed: Data returned ",A,u.path);let S=_e(A);typeof A=="object"&&A!=null&&it(A,".priority")||(S=S.updatePriority(m.getPriority()));const D=u.currentWriteId,G=pr(n),K=vd(S,m,G);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=K,u.currentWriteId=qa(n),a.splice(a.indexOf(D),1),s=s.concat(fd(n.serverSyncTree_,u.path,K,u.currentWriteId,u.applyLocally)),s=s.concat(Et(n.serverSyncTree_,D,!0))}else f=!0,_="nodata",s=s.concat(Et(n.serverSyncTree_,u.currentWriteId,!0))}Ge(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(_==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(_),!1,null))))}_r(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Dn(i[l]);ja(n,n.transactionQueueTree_)}function bd(n,e){let t,i=n.transactionQueueTree_;for(t=q(e);t!==null&&Vn(i)===void 0;)i=La(i,t),e=ne(e),t=q(e);return i}function Nd(n,e){const t=[];return Dd(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Dd(n,e,t){const i=Vn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);hr(e,s=>{Dd(n,s,t)})}function _r(n,e){const t=Vn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ed(e,t.length>0?t:void 0)}hr(e,i=>{_r(n,i)})}function Wa(n,e){const t=Gi(bd(n,e)),i=La(n.transactionQueueTree_,e);return $y(i,s=>{po(n,s)}),po(n,i),Id(i,s=>{po(n,s)}),t}function po(n,e){const t=Vn(e);if(t){const i=[];let s=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(N(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(N(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(Et(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ed(e,void 0):t.length=r+1,Ge(n.eventQueue_,Gi(e),s);for(let a=0;a<i.length;a++)Dn(i[a])}}/**
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
 */function _v(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function mv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const pu=function(n,e){const t=gv(n),i=t.namespace;t.domain==="firebase.com"&&ht(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Rm();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new xh(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Z(t.pathString)}},gv=function(n){let e="",t="",i="",s="",r="",a=!0,l="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(f,_)),f<_&&(s=_v(n.substring(f,_)));const m=mv(n.substring(Math.min(n.length,_)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const A=e.slice(0,h);if(A.toLowerCase()==="localhost")t="localhost";else if(A.split(".").length<=2)t=A;else{const S=e.indexOf(".");i=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:u,domain:t,subdomain:i,secure:a,scheme:l,pathString:s,namespace:r}};/**
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
 */const _u="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yv=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=_u.charAt(t%64),t=Math.floor(t/64);N(t===0,"Cannot push at time == 0");let a=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=_u.charAt(e[s]);return N(a.length===20,"nextPushId: Length should be 20."),a}}();/**
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
 */class vv{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class Ev{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xn{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return j(this._path)?null:_a(this._path)}get ref(){return new _t(this._repo,this._path)}get _queryIdentifier(){const e=eu(this._queryParams),t=ha(e);return t==="{}"?"default":t}get _queryObject(){return eu(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof xn))return!1;const t=this._repo===e._repo,i=ma(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cg(this._path)}}function Tv(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function $a(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Wt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Ht)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==St)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===oe){if(e!=null&&!Lo(e)||t!=null&&!Lo(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(N(n.getIndex()instanceof va||n.getIndex()===Yh,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Vd(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class _t extends xn{constructor(e,t){super(e,t,new Ta,!1)}get parent(){const e=Wh(this._path);return e===null?null:new _t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Di{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Z(e),i=ki(this.ref,e);return new Di(this._node.getChild(t),i,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Di(s,ki(this.ref,i),oe)))}hasChild(e){const t=new Z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rw(n,e){return n=pe(n),n._checkNotDeleted("ref"),e!==void 0?ki(n._root,e):n._root}function ki(n,e){return n=pe(n),q(n._path)===null?Xy("child","path",e):Ua("child","path",e),new _t(n._repo,ce(n._path,e))}function ow(n,e){n=pe(n),Ad("push",n._path),zi("push",e,n._path,!0);const t=Sd(n._repo),i=yv(t),s=ki(n,i),r=ki(n,i);let a;return a=Promise.resolve(r),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function aw(n,e){n=pe(n),Ad("set",n._path),zi("set",e,n._path,!1);const t=new Bi;return av(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function lw(n,e){Yy("update",e,n._path);const t=new Bi;return lv(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function cw(n){n=pe(n);const e=new kd(()=>{}),t=new mr(e);return ov(n._repo,n,t).then(i=>new Di(i,new _t(n._repo,n._path),n._queryParams.getIndex()))}class mr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new vv("value",this,new Di(e.snapshotNode,new _t(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ev(this,e,t):null}matches(e){return e instanceof mr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Iv(n,e,t,i,s){const r=new kd(t,void 0),a=new mr(r);return uv(n._repo,n,a),()=>hv(n._repo,n,a)}function uw(n,e,t,i){return Iv(n,"value",e)}let gr=class{};class wv extends gr{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){zi("endAt",this._value,e._path,!0);const t=Vg(e._queryParams,this._value,this._key);if(Vd(t),$a(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xn(e._repo,e._path,t,e._orderByCalled)}}class Av extends gr{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){zi("startAt",this._value,e._path,!0);const t=kg(e._queryParams,this._value,this._key);if(Vd(t),$a(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xn(e._repo,e._path,t,e._orderByCalled)}}class Cv extends gr{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Tv(e,"orderByChild");const t=new Z(this._path);if(j(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new va(t),s=xg(e._queryParams,i);return $a(s),new xn(e._repo,e._path,s,!0)}}function dw(n){return Ua("orderByChild","path",n),new Cv(n)}class Rv extends gr{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(zi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new wv(this._value,this._key)._apply(new Av(this._value,this._key)._apply(e))}}function fw(n,e){return new Rv(n,e)}function pw(n,...e){let t=pe(n);for(const i of e)t=i._apply(t);return t}Iy(_t);Sy(_t);/**
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
 */const Sv="FIREBASE_DATABASE_EMULATOR_HOST",Uo={};let Pv=!1;function bv(n,e,t,i){n.repoInfo_=new xh(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Nv(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=pu(r,s),l=a.repoInfo,u;typeof process<"u"&&Mc&&(u=Mc[Sv]),u?(r=`http://${u}?ns=${l.namespace}`,a=pu(r,s),l=a.repoInfo):a.repoInfo.secure;const h=new Lm(n.name,n.options,e);Jy("Invalid Firebase Database URL",a),j(a.path)||ht("Database URL must point to the root of a Firebase Database (not including a child path).");const f=kv(l,n,h,new Mm(n.name,t));return new Vv(f,n)}function Dv(n,e){const t=Uo[e];(!t||t[n.key]!==n)&&ht(`Database ${e}(${n.repoInfo_}) has already been deleted.`),dv(n),delete t[n.key]}function kv(n,e,t,i){let s=Uo[e.name];s||(s={},Uo[e.name]=s);let r=s[n.toURLString()];return r&&ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iv(n,Pv,t,i),s[n.toURLString()]=r,r}class Vv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _t(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ht("Cannot call "+e+" on a deleted database.")}}function xv(n=ca(),e){const t=la(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ra("database");i&&Ov(t,...i)}return t}function Ov(n,e,t,i={}){n=pe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ht("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ss(Ss.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:lh(i.mockUserToken,n.app.options.projectId);r=new Ss(a)}bv(s,e,t,r)}/**
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
 */function Mv(n){Em(mh),yn(new Gt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nv(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Je(Lc,Fc,n),Je(Lc,Fc,"esm2017")}ct.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ct.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Mv();var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,xd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,T,C){for(var y=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)y[rt-2]=arguments[rt];return g.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)E[T]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],T=I.g[2];var C=I.g[3],y=g+(C^v&(T^C))+E[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=C+(T^g&(v^T))+E[1]+3905402710&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(v^C&(g^v))+E[2]+606105819&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(g^T&(C^g))+E[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(C^v&(T^C))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(T^g&(v^T))+E[5]+1200080426&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(v^C&(g^v))+E[6]+2821735955&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(g^T&(C^g))+E[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(C^v&(T^C))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(T^g&(v^T))+E[9]+2336552879&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(v^C&(g^v))+E[10]+4294925233&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(g^T&(C^g))+E[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(C^v&(T^C))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(T^g&(v^T))+E[13]+4254626195&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(v^C&(g^v))+E[14]+2792965006&4294967295,T=C+(y<<17&4294967295|y>>>15),y=v+(g^T&(C^g))+E[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=g+(T^C&(v^T))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(g^v))+E[6]+3225465664&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(C^g))+E[11]+643717713&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(T^C))+E[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(v^T))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(g^v))+E[10]+38016083&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(C^g))+E[15]+3634488961&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(T^C))+E[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(v^T))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(g^v))+E[14]+3275163606&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(C^g))+E[3]+4107603335&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(T^C))+E[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(v^T))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^T&(g^v))+E[2]+4243563512&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^v&(C^g))+E[7]+1735328473&4294967295,T=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(T^C))+E[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=g+(v^T^C)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^T)+E[8]+2272392833&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^v)+E[11]+1839030562&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^g)+E[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^C)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^T)+E[4]+1272893353&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^v)+E[7]+4139469664&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^g)+E[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^C)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^T)+E[0]+3936430074&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^v)+E[3]+3572445317&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^g)+E[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(v^T^C)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^T)+E[12]+3873151461&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^v)+E[15]+530742520&4294967295,T=C+(y<<16&4294967295|y>>>16),y=v+(T^C^g)+E[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=g+(T^(v|~C))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~T))+E[7]+1126891415&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~v))+E[14]+2878612391&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~g))+E[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~C))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~T))+E[3]+2399980690&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~v))+E[10]+4293915773&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~g))+E[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~C))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~T))+E[15]+4264355552&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~v))+E[6]+2734768916&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~g))+E[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=g+(T^(v|~C))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~T))+E[11]+3174756917&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~v))+E[2]+718787259&4294967295,T=C+(y<<15&4294967295|y>>>17),y=v+(C^(T|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+C&4294967295}i.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,E=this.B,T=this.h,C=0;C<g;){if(T==0)for(;C<=v;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<g;)if(E[T++]=I.charCodeAt(C++),T==this.blockSize){s(this,E),T=0;break}}else for(;C<g;)if(E[T++]=I[C++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=g},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)I[v++]=this.g[g]>>>E&255;return I};function r(I,g){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function a(I,g){this.h=g;for(var v=[],E=!0,T=I.length-1;0<=T;T--){var C=I[T]|0;E&&C==g||(v[T]=C,E=!1)}this.g=v}var l={};function u(I){return-128<=I&&128>I?r(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return D(h(-I));for(var g=[],v=1,E=0;I>=v;E++)g[E]=I/v|0,v*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=_,T=0;T<I.length;T+=8){var C=Math.min(8,I.length-T),y=parseInt(I.substring(T,T+C),g);8>C?(C=h(Math.pow(g,C)),E=E.j(C).add(h(y))):(E=E.j(v),E=E.add(h(y)))}return E}var _=u(0),m=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(V(this))return"-"+D(this).toString(I);for(var g=h(Math.pow(I,6)),v=this,E="";;){var T=ue(v,g).g;v=G(v,T.j(g));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=T,S(v))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=G(this,I),V(I)?-1:S(I)?0:1};function D(I){for(var g=I.g.length,v=[],E=0;E<g;E++)v[E]=~I.g[E];return new a(v,~I.h).add(m)}n.abs=function(){return V(this)?D(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0,T=0;T<=g;T++){var C=E+(this.i(T)&65535)+(I.i(T)&65535),y=(C>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=y>>>16,C&=65535,y&=65535,v[T]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function G(I,g){return I.add(D(g))}n.j=function(I){if(S(this)||S(I))return _;if(V(this))return V(I)?D(this).j(D(I)):D(D(this).j(I));if(V(I))return D(this.j(D(I)));if(0>this.l(A)&&0>I.l(A))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var C=this.i(E)>>>16,y=this.i(E)&65535,rt=I.i(T)>>>16,Un=I.i(T)&65535;v[2*E+2*T]+=y*Un,K(v,2*E+2*T),v[2*E+2*T+1]+=C*Un,K(v,2*E+2*T+1),v[2*E+2*T+1]+=y*rt,K(v,2*E+2*T+1),v[2*E+2*T+2]+=C*rt,K(v,2*E+2*T+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function K(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function J(I,g){this.g=I,this.h=g}function ue(I,g){if(S(g))throw Error("division by zero");if(S(I))return new J(_,_);if(V(I))return g=ue(D(I),g),new J(D(g.g),D(g.h));if(V(g))return g=ue(I,D(g)),new J(D(g.g),g.h);if(30<I.g.length){if(V(I)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(I);)v=st(v),E=st(E);var T=Ee(v,1),C=Ee(E,1);for(E=Ee(E,2),v=Ee(v,2);!S(E);){var y=C.add(E);0>=y.l(I)&&(T=T.add(v),C=y),E=Ee(E,1),v=Ee(v,1)}return g=G(I,T.j(g)),new J(T,g)}for(T=_;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(v),y=C.j(g);V(y)||0<y.l(I);)v-=E,C=h(v),y=C.j(g);S(C)&&(C=m),T=T.add(C),I=G(I,y)}return new J(T,I)}n.A=function(I){return ue(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function st(I){for(var g=I.g.length+1,v=[],E=0;E<g;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function Ee(I,g){var v=g>>5;g%=32;for(var E=I.g.length-v,T=[],C=0;C<E;C++)T[C]=0<g?I.i(C+v)>>>g|I.i(C+v+1)<<32-g:I.i(C+v);return new a(T,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,xd=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,$t=a}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Od,Md,ci,Ld,bs,Bo,Fd,Ud,Bd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ws=="object"&&ws];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(o,c){if(c)e:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in d))break e;d=d[w]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function r(o,c){o instanceof String&&(o+="");var d=0,p=!1,w={next:function(){if(!p&&d<o.length){var R=d++;return{value:c(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return r(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function _(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,m.apply(null,arguments)}function A(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,w,R){for(var k=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)k[ee-2]=arguments[ee];return c.prototype[w].apply(p,k)}}function V(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function D(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const w=o.length||0,R=p.length||0;o.length=w+R;for(let k=0;k<R;k++)o[w+k]=p[k]}else o.push(p)}}class G{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ue(o){return ue[" "](o),o}ue[" "]=function(){};var st=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function Ee(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function I(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)o[d]=p[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Vr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class rt{constructor(){this.h=this.g=null}add(c,d){const p=Un.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Un=new G(()=>new cp,o=>o.reset());class cp{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Bn,qn=!1,Vr=new rt,Cl=()=>{const o=l.Promise.resolve(void 0);Bn=()=>{o.then(up)}};var up=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){C(d)}var c=Un;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}qn=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var hp=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function jn(o,c){if(Se.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(st){e:{try{ue(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:dp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jn.aa.h.call(this)}}S(jn,Se);var dp={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var is="closure_listenable_"+(1e6*Math.random()|0),fp=0;function pp(o,c,d,p,w){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=w,this.key=++fp,this.da=this.fa=!1}function ss(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rs(o){this.src=o,this.g={},this.h=0}rs.prototype.add=function(o,c,d,p,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=Or(o,c,p,w);return-1<k?(c=o[k],d||(c.fa=!1)):(c=new pp(c,this.src,R,!!p,w),c.fa=d,o.push(c)),c};function xr(o,c){var d=c.type;if(d in o.g){var p=o.g[d],w=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(p,w,1),R&&(ss(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Or(o,c,d,p){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==p)return w}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),Lr={};function Rl(o,c,d,p,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Rl(o,c[R],d,p,w);return null}return d=bl(d),o&&o[is]?o.K(c,d,h(p)?!!p.capture:!!p,w):_p(o,c,d,!1,p,w)}function _p(o,c,d,p,w,R){if(!c)throw Error("Invalid event type");var k=h(w)?!!w.capture:!!w,ee=Ur(o);if(ee||(o[Mr]=ee=new rs(o)),d=ee.add(c,d,p,k,R),d.proxy)return d;if(p=mp(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)hp||(w=k),w===void 0&&(w=!1),o.addEventListener(c.toString(),p,w);else if(o.attachEvent)o.attachEvent(Pl(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mp(){function o(d){return c.call(o.src,o.listener,d)}const c=gp;return o}function Sl(o,c,d,p,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)Sl(o,c[R],d,p,w);else p=h(p)?!!p.capture:!!p,d=bl(d),o&&o[is]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],d=Or(R,d,p,w),-1<d&&(ss(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ur(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Or(c,d,p,w)),(d=-1<o?c[o]:null)&&Fr(d))}function Fr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[is])xr(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Pl(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ur(c))?(xr(d,o),d.h==0&&(d.src=null,c[Mr]=null)):ss(o)}}}function Pl(o){return o in Lr?Lr[o]:Lr[o]="on"+o}function gp(o,c){if(o.da)o=!0;else{c=new jn(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Fr(o),o=d.call(p,c)}return o}function Ur(o){return o=o[Mr],o instanceof rs?o:null}var Br="__closure_events_fn_"+(1e9*Math.random()>>>0);function bl(o){return typeof o=="function"?o:(o[Br]||(o[Br]=function(c){return o.handleEvent(c)}),o[Br])}function Pe(){mt.call(this),this.i=new rs(this),this.M=this,this.F=null}S(Pe,mt),Pe.prototype[is]=!0,Pe.prototype.removeEventListener=function(o,c,d,p){Sl(this,o,c,d,p)};function Oe(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Se(c,o);else if(c instanceof Se)c.target=c.target||o;else{var w=c;c=new Se(p,o),E(c,w)}if(w=!0,d)for(var R=d.length-1;0<=R;R--){var k=c.g=d[R];w=os(k,p,!0,c)&&w}if(k=c.g=o,w=os(k,p,!0,c)&&w,w=os(k,p,!1,c)&&w,d)for(R=0;R<d.length;R++)k=c.g=d[R],w=os(k,p,!1,c)&&w}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)ss(d[p]);delete o.g[c],o.h--}}this.F=null},Pe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},Pe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function os(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==d){var ee=k.listener,Te=k.ha||k.src;k.fa&&xr(o.i,k),w=ee.call(Te,p)!==!1&&w}}return w&&!p.defaultPrevented}function Nl(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Dl(o){o.g=Nl(()=>{o.g=null,o.i&&(o.i=!1,Dl(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class yp extends mt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Dl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(o){mt.call(this),this.h=o,this.g={}}S(Wn,mt);var kl=[];function Vl(o){Ee(o.g,function(c,d){this.g.hasOwnProperty(d)&&Fr(c)},o),o.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),Vl(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=l.JSON.stringify,vp=l.JSON.parse,Ep=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function jr(){}jr.prototype.h=null;function xl(o){return o.h||(o.h=o.i())}function Ol(){}var $n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wr(){Se.call(this,"d")}S(Wr,Se);function $r(){Se.call(this,"c")}S($r,Se);var Ot={},Ml=null;function as(){return Ml=Ml||new Pe}Ot.La="serverreachability";function Ll(o){Se.call(this,Ot.La,o)}S(Ll,Se);function Gn(o){const c=as();Oe(c,new Ll(c))}Ot.STAT_EVENT="statevent";function Fl(o,c){Se.call(this,Ot.STAT_EVENT,o),this.stat=c}S(Fl,Se);function Me(o){const c=as();Oe(c,new Fl(c,o))}Ot.Ma="timingevent";function Ul(o,c){Se.call(this,Ot.Ma,o),this.size=c}S(Ul,Se);function zn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function Tp(o,c,d,p,w,R){o.info(function(){if(o.g)if(R)for(var k="",ee=R.split("&"),Te=0;Te<ee.length;Te++){var Q=ee[Te].split("=");if(1<Q.length){var be=Q[0];Q=Q[1];var Ne=be.split("_");k=2<=Ne.length&&Ne[1]=="type"?k+(be+"="+Q+"&"):k+(be+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+c+`
`+d+`
`+k})}function Ip(o,c,d,p,w,R,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+c+`
`+d+`
`+R+" "+k})}function rn(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ap(o,d)+(p?" "+p:"")})}function wp(o,c){o.info(function(){return"TIMEOUT: "+c})}Hn.prototype.info=function(){};function Ap(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return qr(d)}catch{return c}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gr;function cs(){}S(cs,jr),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},Gr=new cs;function gt(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var jl={},zr={};function Hr(o,c,d){o.L=1,o.v=fs(ot(c)),o.m=d,o.P=!0,Wl(o,null)}function Wl(o,c){o.F=Date.now(),us(o),o.A=ot(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ic(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ql,o.g=Tc(o.j,d?c:null,!o.m),0<o.O&&(o.M=new yp(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(kl[0]=w.toString()),w=kl);for(var R=0;R<w.length;R++){var k=Rl(d,w[R],p||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Gn(),Tp(o.i,o.u,o.A,o.l,o.R,o.m)}gt.prototype.ca=function(o){o=o.target;const c=this.M;c&&at(o)==3?c.j():this.Y(o)},gt.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=at(this.g);var c=this.g.Ba();const ln=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||uc(this.g)))){this.J||Ne!=4||c==7||(c==8||0>=ln?Gn(3):Gn(2)),Kr(this);var d=this.g.Z();this.X=d;t:if($l(this)){var p=uc(this.g);o="";var w=p.length,R=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Kn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(R&&c==w-1)});p.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,Ip(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,Te=this.g;if((ee=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ee)){var Q=ee;break t}}Q=null}if(d=Q)rn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qr(this,d);else{this.o=!1,this.s=3,Me(12),Mt(this),Kn(this);break e}}if(this.P){d=!0;let ze;for(;!this.J&&this.C<k.length;)if(ze=Cp(this,k),ze==zr){Ne==4&&(this.s=4,Me(14),d=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==jl){this.s=4,Me(15),rn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else rn(this.i,this.l,ze,null),Qr(this,ze);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||k.length!=0||this.h.h||(this.s=1,Me(16),d=!1),this.o=this.o&&d,!d)rn(this.i,this.l,k,"[Invalid Chunked Response]"),Mt(this),Kn(this);else if(0<k.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),to(be),be.M=!0,Me(11))}}else rn(this.i,this.l,k,null),Qr(this,k);Ne==4&&Mt(this),this.o&&!this.J&&(Ne==4?gc(this.j,this):(this.o=!1,us(this)))}else jp(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),Mt(this),Kn(this)}}}catch{}finally{}};function $l(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cp(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?zr:(d=Number(c.substring(d,p)),isNaN(d)?jl:(p+=1,p+d>c.length?zr:(c=c.slice(p,p+d),o.C=p+d,c)))}gt.prototype.cancel=function(){this.J=!0,Mt(this)};function us(o){o.S=Date.now()+o.I,Gl(o,o.I)}function Gl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zn(m(o.ba,o),c)}function Kr(o){o.B&&(l.clearTimeout(o.B),o.B=null)}gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wp(this.i,this.A),this.L!=2&&(Gn(),Me(17)),Mt(this),this.s=2,Kn(this)):Gl(this,this.S-o)};function Kn(o){o.j.G==0||o.J||gc(o.j,o)}function Mt(o){Kr(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Vl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Qr(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Yr(d.h,o))){if(!o.K&&Yr(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ys(d),ms(d);else break e;eo(d),Me(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=zn(m(d.Za,d),6e3));if(1>=Kl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ft(d,11)}else if((o.K||d.g==o)&&ys(d),!K(c))for(w=d.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(d.T=Q[0],Q=Q[1],d.G==2)if(Q[0]=="c"){d.K=Q[1],d.ia=Q[2];const be=Q[3];be!=null&&(d.la=be,d.j.info("VER="+d.la));const Ne=Q[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const ln=Q[5];ln!=null&&typeof ln=="number"&&0<ln&&(p=1.5*ln,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const ze=o.g;if(ze){const Es=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Es){var R=p.h;R.g||Es.indexOf("spdy")==-1&&Es.indexOf("quic")==-1&&Es.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Xr(R,R.h),R.h=null))}if(p.D){const no=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(p.ya=no,se(p.I,p.D,no))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var k=o;if(p.qa=Ec(p,p.J?p.ia:null,p.W),k.K){Ql(p.h,k);var ee=k,Te=p.L;Te&&(ee.I=Te),ee.B&&(Kr(ee),us(ee)),p.g=k}else _c(p);0<d.i.length&&gs(d)}else Q[0]!="stop"&&Q[0]!="close"||Ft(d,7);else d.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Ft(d,7):Zr(d):Q[0]!="noop"&&d.l&&d.l.ta(Q),d.v=0)}}Gn(4)}catch{}}var Rp=class{constructor(o,c){this.g=o,this.map=c}};function zl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kl(o){return o.h?1:o.g?o.g.size:0}function Yr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Xr(o,c){o.g?o.g.add(c):o.h=c}function Ql(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}zl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return V(o.i)}function Sp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function Pp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Xl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Pp(o),p=Sp(o),w=p.length,R=0;R<w;R++)c.call(void 0,p[R],d&&d[R],o)}var Jl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bp(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),w=null;if(0<=p){var R=o[d].substring(0,p);w=o[d].substring(p+1)}else R=o[d];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Lt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Lt){this.h=o.h,hs(this,o.j),this.o=o.o,this.g=o.g,ds(this,o.s),this.l=o.l;var c=o.i,d=new Xn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Zl(this,d),this.m=o.m}else o&&(c=String(o).match(Jl))?(this.h=!1,hs(this,c[1]||"",!0),this.o=Qn(c[2]||""),this.g=Qn(c[3]||"",!0),ds(this,c[4]),this.l=Qn(c[5]||"",!0),Zl(this,c[6]||"",!0),this.m=Qn(c[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Lt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Yn(c,ec,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Yn(c,ec,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yn(d,d.charAt(0)=="/"?kp:Dp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yn(d,xp)),o.join("")};function ot(o){return new Lt(o)}function hs(o,c,d){o.j=d?Qn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ds(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Zl(o,c,d){c instanceof Xn?(o.i=c,Op(o.i,o.h)):(d||(c=Yn(c,Vp)),o.i=new Xn(c,o.h))}function se(o,c,d){o.i.set(c,d)}function fs(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Np),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Np(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ec=/[#\/\?@]/g,Dp=/[#\?:]/g,kp=/[#\?]/g,Vp=/[#\?@]/g,xp=/#/g;function Xn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function yt(o){o.g||(o.g=new Map,o.h=0,o.i&&bp(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Xn.prototype,n.add=function(o,c){yt(this),this.i=null,o=on(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function tc(o,c){yt(o),c=on(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function nc(o,c){return yt(o),c=on(o,c),o.g.has(c)}n.forEach=function(o,c){yt(this),this.g.forEach(function(d,p){d.forEach(function(w){o.call(c,w,p,this)},this)},this)},n.na=function(){yt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const w=o[p];for(let R=0;R<w.length;R++)d.push(c[p])}return d},n.V=function(o){yt(this);let c=[];if(typeof o=="string")nc(this,o)&&(c=c.concat(this.g.get(on(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return yt(this),this.i=null,o=on(this,o),nc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ic(o,c,d){tc(o,c),0<d.length&&(o.i=null,o.g.set(on(o,c),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const R=encodeURIComponent(String(p)),k=this.V(p);for(p=0;p<k.length;p++){var w=R;k[p]!==""&&(w+="="+encodeURIComponent(String(k[p]))),o.push(w)}}return this.i=o.join("&")};function on(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Op(o,c){c&&!o.j&&(yt(o),o.i=null,o.g.forEach(function(d,p){var w=p.toLowerCase();p!=w&&(tc(this,p),ic(this,w,d))},o)),o.j=c}function Mp(o,c){const d=new Hn;if(l.Image){const p=new Image;p.onload=A(vt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(vt,d,"TestLoadImage: error",!1,c,p),p.onabort=A(vt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(vt,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Lp(o,c){const d=new Hn,p=new AbortController,w=setTimeout(()=>{p.abort(),vt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(w),R.ok?vt(d,"TestPingServer: ok",!0,c):vt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),vt(d,"TestPingServer: error",!1,c)})}function vt(o,c,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function Fp(){this.g=new Ep}function Up(o,c,d){const p=d||"";try{Xl(o,function(w,R){let k=w;h(w)&&(k=qr(w)),c.push(p+R+"="+encodeURIComponent(k))})}catch(w){throw c.push(p+"type="+encodeURIComponent("_badmap")),w}}function Jn(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Jn,jr),Jn.prototype.g=function(){return new ps(this.l,this.j)},Jn.prototype.i=function(o){return function(){return o}}({});function ps(o,c){Pe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ps,Pe),n=ps.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ei(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function sc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Zn(this):ei(this),this.readyState==3&&sc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Zn(this))},n.Qa=function(o){this.g&&(this.response=o,Zn(this))},n.ga=function(){this.g&&Zn(this)};function Zn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ei(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function ei(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rc(o){let c="";return Ee(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Jr(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=rc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,c,d))}function le(o){Pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(le,Pe);var Bp=/^https?$/i,qp=["POST","PUT"];n=le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gr.g(),this.v=this.o?xl(this.o):xl(Gr),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){oc(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qp,c,void 0))||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of d)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){oc(this,R)}};function oc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ac(o),_s(o)}function ac(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),_s(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_s(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lc(this):this.bb())},n.bb=function(){lc(this)};function lc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Nl(o.Ea,0,o);else if(Oe(o,"readystatechange"),at(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=k===0){var w=String(o.D).match(Jl)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),p=!Bp.test(w?w.toLowerCase():"")}d=p}if(d)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var R=2<at(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ac(o)}}finally{_s(o)}}}}function _s(o,c){if(o.g){cc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Oe(o,"ready");try{d.onreadystatechange=p}catch{}}}function cc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),vp(c)}};function uc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jp(o){const c={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var d=T(o[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[w]||[];c[w]=R,R.push(d)}I(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function hc(o){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,o),this.cb=ti("retryDelaySeedMs",1e4,o),this.Wa=ti("forwardChannelMaxRetries",2,o),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zl(o&&o.concurrentRequestLimit),this.Da=new Fp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hc.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Me(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ec(this,null,this.W),gs(this)};function Zr(o){if(dc(o),o.G==3){var c=o.U++,d=ot(o.I);if(se(d,"SID",o.K),se(d,"RID",c),se(d,"TYPE","terminate"),ni(o,d),c=new gt(o,o.j,c),c.L=2,c.v=fs(ot(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Tc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),us(c)}vc(o)}function ms(o){o.g&&(to(o),o.g.cancel(),o.g=null)}function dc(o){ms(o),o.u&&(l.clearTimeout(o.u),o.u=null),ys(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function gs(o){if(!Hl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Bn||Cl(),qn||(Bn(),qn=!0),Vr.add(c,o),o.B=0}}function Wp(o,c){return Kl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zn(m(o.Ga,o,c),yc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new gt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=pc(this,w,c),d=ot(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),ni(this,d),R&&(this.O?c="headers="+encodeURIComponent(String(rc(R)))+"&"+c:this.m&&Jr(d,this.m,R)),Xr(this.h,w),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",c),se(d,"SID","null"),w.T=!0,Hr(w,d,null)):Hr(w,d,c),this.G=2}}else this.G==3&&(o?fc(this,o):this.i.length==0||Hl(this.h)||fc(this))};function fc(o,c){var d;c?d=c.l:d=o.U++;const p=ot(o.I);se(p,"SID",o.K),se(p,"RID",d),se(p,"AID",o.T),ni(o,p),o.m&&o.o&&Jr(p,o.m,o.o),d=new gt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=pc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xr(o.h,d),Hr(d,p,c)}function ni(o,c){o.H&&Ee(o.H,function(d,p){se(c,p,d)}),o.l&&Xl({},function(d,p){se(c,p,d)})}function pc(o,c,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const k=["count="+d];R==-1?0<d?(R=w[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let ee=!0;for(let Te=0;Te<d;Te++){let Q=w[Te].g;const be=w[Te].map;if(Q-=R,0>Q)R=Math.max(0,w[Te].g-100),ee=!1;else try{Up(be,k,"req"+Q+"_")}catch{p&&p(be)}}if(ee){p=k.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function _c(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Bn||Cl(),qn||(Bn(),qn=!0),Vr.add(c,o),o.v=0}}function eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zn(m(o.Fa,o),yc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zn(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),ms(this),mc(this))};function to(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function mc(o){o.g=new gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ot(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),ni(o,c),o.m&&o.o&&Jr(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=fs(ot(c)),d.m=null,d.P=!0,Wl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ms(this),eo(this),Me(19))};function ys(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function gc(o,c){var d=null;if(o.g==c){ys(o),to(o),o.g=null;var p=2}else if(Yr(o.h,c))d=c.D,Ql(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;p=as(),Oe(p,new Ul(p,d)),gs(o)}else _c(o);else if(w=c.s,w==3||w==0&&0<c.X||!(p==1&&Wp(o,c)||p==2&&eo(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),w){case 1:Ft(o,5);break;case 4:Ft(o,10);break;case 3:Ft(o,6);break;default:Ft(o,2)}}}function yc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Ft(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),p=o.Xa;const w=!p;p=new Lt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||hs(p,"https"),fs(p),w?Mp(p.toString(),d):Lp(p.toString(),d)}else Me(2);o.G=0,o.l&&o.l.sa(c),vc(o),dc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function vc(o){if(o.G=0,o.ka=[],o.l){const c=Yl(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Ec(o,c,d){var p=d instanceof Lt?ot(d):new Lt(d);if(p.g!="")c&&(p.g=c+"."+p.g),ds(p,p.s);else{var w=l.location;p=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Lt(null);p&&hs(R,p),c&&(R.g=c),w&&ds(R,w),d&&(R.l=d),p=R}return d=o.D,c=o.ya,d&&c&&se(p,d,c),se(p,"VER",o.la),ni(o,p),p}function Tc(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new le(new Jn({eb:d})):new le(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}n=Ic.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vs(){}vs.prototype.g=function(o,c){return new qe(o,c)};function qe(o,c){Pe.call(this),this.g=new hc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!K(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new an(this)}S(qe,Pe),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Zr(this.g)},qe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=qr(o),o=d);c.i.push(new Rp(c.Ya++,o)),c.G==3&&gs(c)},qe.prototype.N=function(){this.g.l=null,delete this.j,Zr(this.g),delete this.g,qe.aa.N.call(this)};function wc(o){Wr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(wc,Wr);function Ac(){$r.call(this),this.status=1}S(Ac,$r);function an(o){this.g=o}S(an,Ic),an.prototype.ua=function(){Oe(this.g,"a")},an.prototype.ta=function(o){Oe(this.g,new wc(o))},an.prototype.sa=function(o){Oe(this.g,new Ac)},an.prototype.ra=function(){Oe(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,Bd=function(){return new vs},Ud=function(){return as()},Fd=Ot,Bo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,bs=ls,Bl.COMPLETE="complete",Ld=Bl,Ol.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,ci=Ol,Md=Jn,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,Od=le}).apply(typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{});const gu="@firebase/firestore";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let On="10.12.3";/**
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
 */const Yt=new oa("@firebase/firestore");function ai(){return Yt.logLevel}function O(n,...e){if(Yt.logLevel<=H.DEBUG){const t=e.map(Ga);Yt.debug(`Firestore (${On}): ${n}`,...t)}}function dt(n,...e){if(Yt.logLevel<=H.ERROR){const t=e.map(Ga);Yt.error(`Firestore (${On}): ${n}`,...t)}}function wn(n,...e){if(Yt.logLevel<=H.WARN){const t=e.map(Ga);Yt.warn(`Firestore (${On}): ${n}`,...t)}}function Ga(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+n;throw dt(e),new Error(e)}function ie(n,e){n||F()}function B(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class qd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class Fv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Uv{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ie(typeof i.accessToken=="string"),new qd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new ke(e)}}class Bv{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qv{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Bv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.R;return this.R=r.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new jv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $v(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=$v(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function An(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ge(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ge(0,0))}static max(){return new U(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vi{constructor(e,t,i){t===void 0?t=0:t>e.length&&F(),i===void 0?i=e.length-t:i>e.length-t&&F(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),a=t.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends Vi{construct(e,t,i){return new re(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Gv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Vi{construct(e,t,i){return new Ae(e,t,i)}static isValidIdentifier(e){return Gv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(re.fromString(e))}static fromName(e){return new M(re.fromString(e).popFirst(5))}static empty(){return new M(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new re(e.slice()))}}function zv(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(i===1e9?new ge(t+1,0):new ge(t,i));return new Dt(s,M.empty(),e)}function Hv(n){return new Dt(n.readTime,n.key,-1)}class Dt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Dt(U.min(),M.empty(),-1)}static max(){return new Dt(U.max(),M.empty(),-1)}}function Kv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const Qv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ki(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Qv)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,i)=>{t(e)})}static reject(e){return new b((t,i)=>{i(e)})}static waitFor(e){return new b((t,i)=>{let s=0,r=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&t()},u=>i(u))}),a=!0,r===s&&t()})}static or(e){let t=b.resolve(!1);for(const i of e)t=t.next(s=>s?b.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new b((i,s)=>{const r=e.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===r&&i(a)},f=>s(f))}})}static doWhile(e,t){return new b((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function Xv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}za.oe=-1;function yr(n){return n==null}function Ys(n){return n===0&&1/n==-1/0}function Jv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function yu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ie.RED,this.left=s??Ie.EMPTY,this.right=r??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ie(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vu(this.data.getIterator())}getIteratorFrom(e){return new vu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class vu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class We{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new We([])}unionWith(e){let t=new Ce(Ae.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class $d extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new $d("Invalid base64 string: "+r):r}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const Zv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(ie(!!n),typeof n=="string"){let e=0;const t=Zv.exec(n);if(ie(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
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
 */function Ha(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ka(n){const e=n.mapValue.fields.__previous_value__;return Ha(e)?Ka(e):e}function xi(n){const e=kt(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class eE{constructor(e,t,i,s,r,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Oi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ha(n)?4:tE(n)?9007199254740991:10:F()}function nt(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xi(n).isEqual(xi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=kt(s.timestampValue),l=kt(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Xt(s.bytesValue).isEqual(Xt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=de(s.doubleValue),l=de(r.doubleValue);return a===l?Ys(a)===Ys(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(yu(a)!==yu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!nt(a[u],l[u])))return!1;return!0}(n,e);default:return F()}}function Mi(n,e){return(n.values||[]).find(t=>nt(t,e))!==void 0}function Cn(n,e){if(n===e)return 0;const t=Jt(n),i=Jt(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(r,a){const l=de(r.integerValue||r.doubleValue),u=de(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Eu(n.timestampValue,e.timestampValue);case 4:return Eu(xi(n),xi(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(r,a){const l=Xt(r),u=Xt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=X(l[h],u[h]);if(f!==0)return f}return X(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,a){const l=X(de(r.latitude),de(a.latitude));return l!==0?l:X(de(r.longitude),de(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,a){const l=r.values||[],u=a.values||[];for(let h=0;h<l.length&&h<u.length;++h){const f=Cn(l[h],u[h]);if(f)return f}return X(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,a){if(r===Cs.mapValue&&a===Cs.mapValue)return 0;if(r===Cs.mapValue)return 1;if(a===Cs.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const m=X(u[_],f[_]);if(m!==0)return m;const A=Cn(l[u[_]],h[f[_]]);if(A!==0)return A}return X(u.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function Eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=kt(n),i=kt(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function Rn(n){return qo(n)}function qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=kt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=qo(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${qo(t.fields[a])}`;return s+"}"}(n.mapValue):F()}function Tu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jo(n){return!!n&&"integerValue"in n}function Qa(n){return!!n&&"arrayValue"in n}function Iu(n){return!!n&&"nullValue"in n}function wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ns(n){return!!n&&"mapValue"in n}function yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return nn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=yi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(t)}setAll(e){let t=Ae.emptyPath(),i={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=l.popLast()}a?i[l.lastSegment()]=yi(a):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ns(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){nn(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Be(yi(this.value))}}function Gd(n){const e=[];return nn(n.fields,(t,i)=>{const s=new Ae([t]);if(Ns(i)){const r=Gd(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)}),new We(e)}/**
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
 */class Ve{constructor(e,t,i,s,r,a,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ve(e,0,U.min(),U.min(),U.min(),Be.empty(),0)}static newFoundDocument(e,t,i,s){return new Ve(e,1,t,U.min(),i,s,0)}static newNoDocument(e,t){return new Ve(e,2,t,U.min(),U.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,U.min(),U.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xs{constructor(e,t){this.position=e,this.inclusive=t}}function Au(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=M.comparator(M.fromName(a.referenceValue),t.key):i=Cn(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Cu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Js{constructor(e,t="asc"){this.field=e,this.dir=t}}function nE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zd{}class fe extends zd{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new sE(e,t,i):t==="array-contains"?new aE(e,i):t==="in"?new lE(e,i):t==="not-in"?new cE(e,i):t==="array-contains-any"?new uE(e,i):new fe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new rE(e,i):new oE(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Cn(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends zd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ye(e,t)}matches(e){return Hd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hd(n){return n.op==="and"}function Kd(n){return iE(n)&&Hd(n)}function iE(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function Wo(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Rn(n.value);if(Kd(n))return n.filters.map(e=>Wo(e)).join(",");{const e=n.filters.map(t=>Wo(t)).join(",");return`${n.op}(${e})`}}function Qd(n,e){return n instanceof fe?function(i,s){return s instanceof fe&&i.op===s.op&&i.field.isEqual(s.field)&&nt(i.value,s.value)}(n,e):n instanceof Ye?function(i,s){return s instanceof Ye&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&Qd(a,s.filters[l]),!0):!1}(n,e):void F()}function Yd(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Rn(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"}(n):"Filter"}class sE extends fe{constructor(e,t,i){super(e,t,i),this.key=M.fromName(i.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class rE extends fe{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class oE extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>M.fromName(i.referenceValue))}class aE extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qa(t)&&Mi(t.arrayValue,this.value)}}class lE extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mi(this.value.arrayValue,t)}}class cE extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mi(this.value.arrayValue,t)}}class uE extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Mi(this.value.arrayValue,i))}}/**
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
 */class hE{constructor(e,t=null,i=[],s=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.ue=null}}function Ru(n,e=null,t=[],i=[],s=null,r=null,a=null){return new hE(n,e,t,i,s,r,a)}function Ya(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Wo(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Rn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Rn(i)).join(",")),e.ue=t}return e.ue}function Xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cu(n.startAt,e.startAt)&&Cu(n.endAt,e.endAt)}function $o(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Yi{constructor(e,t=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dE(n,e,t,i,s,r,a,l){return new Yi(n,e,t,i,s,r,a,l)}function Ja(n){return new Yi(n)}function Su(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jd(n){return n.collectionGroup!==null}function vi(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ce(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Js(r,i))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new Js(Ae.keyField(),i))}return e.ce}function Ze(n){const e=B(n);return e.le||(e.le=fE(e,vi(n))),e.le}function fE(n,e){if(n.limitType==="F")return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Js(s.field,r)});const t=n.endAt?new Xs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Xs(n.startAt.position,n.startAt.inclusive):null;return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Go(n,e){const t=n.filters.concat([e]);return new Yi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zo(n,e,t){return new Yi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vr(n,e){return Xa(Ze(n),Ze(e))&&n.limitType===e.limitType}function Zd(n){return`${Ya(Ze(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>Yd(s)).join(", ")}]`),yr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Rn(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Rn(s)).join(",")),`Target(${i})`}(Ze(n))}; limitType=${n.limitType})`}function Er(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):M.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of vi(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=Au(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,vi(i),s)||i.endAt&&!function(a,l,u){const h=Au(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,vi(i),s))}(n,e)}function pE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ef(n){return(e,t)=>{let i=!1;for(const s of vi(n)){const r=_E(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function _E(n,e,t){const i=n.field.isKeyField()?M.comparator(e.key,t.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?Cn(u,h):F()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
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
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Wd(this.inner)}size(){return this.innerSize}}/**
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
 */const mE=new ae(M.comparator);function ft(){return mE}const tf=new ae(M.comparator);function ui(...n){let e=tf;for(const t of n)e=e.insert(t.key,t);return e}function nf(n){let e=tf;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function jt(){return Ei()}function sf(){return Ei()}function Ei(){return new Mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const gE=new ae(M.comparator),yE=new Ce(M.comparator);function $(...n){let e=yE;for(const t of n)e=e.add(t);return e}const vE=new Ce(X);function EE(){return vE}/**
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
 */function rf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(e)?"-0":e}}function of(n){return{integerValue:""+n}}function af(n,e){return Jv(e)?of(e):rf(n,e)}/**
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
 */class Tr{constructor(){this._=void 0}}function TE(n,e,t){return n instanceof Zs?function(s,r){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ha(r)&&(r=Ka(r)),r&&(a.fields.__previous_value__=r),{mapValue:a}}(t,e):n instanceof Li?cf(n,e):n instanceof Fi?uf(n,e):function(s,r){const a=lf(s,r),l=Pu(a)+Pu(s.Pe);return jo(a)&&jo(s.Pe)?of(l):rf(s.serializer,l)}(n,e)}function IE(n,e,t){return n instanceof Li?cf(n,e):n instanceof Fi?uf(n,e):t}function lf(n,e){return n instanceof Ui?function(i){return jo(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Zs extends Tr{}class Li extends Tr{constructor(e){super(),this.elements=e}}function cf(n,e){const t=hf(e);for(const i of n.elements)t.some(s=>nt(s,i))||t.push(i);return{arrayValue:{values:t}}}class Fi extends Tr{constructor(e){super(),this.elements=e}}function uf(n,e){let t=hf(e);for(const i of n.elements)t=t.filter(s=>!nt(s,i));return{arrayValue:{values:t}}}class Ui extends Tr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Pu(n){return de(n.integerValue||n.doubleValue)}function hf(n){return Qa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class wE{constructor(e,t){this.field=e,this.transform=t}}function AE(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Li&&s instanceof Li||i instanceof Fi&&s instanceof Fi?An(i.elements,s.elements,nt):i instanceof Ui&&s instanceof Ui?nt(i.Pe,s.Pe):i instanceof Zs&&s instanceof Zs}(n.transform,e.transform)}class CE{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ir{}function df(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pf(n.key,et.none()):new Xi(n.key,n.data,et.none());{const t=n.data,i=Be.empty();let s=new Ce(Ae.comparator);for(let r of e.fields)if(!s.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new xt(n.key,i,new We(s.toArray()),et.none())}}function RE(n,e,t){n instanceof Xi?function(s,r,a){const l=s.value.clone(),u=Nu(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof xt?function(s,r,a){if(!Ds(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Nu(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(ff(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ti(n,e,t,i){return n instanceof Xi?function(r,a,l,u){if(!Ds(r.precondition,a))return l;const h=r.value.clone(),f=Du(r.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,i):n instanceof xt?function(r,a,l,u){if(!Ds(r.precondition,a))return l;const h=Du(r.fieldTransforms,u,a),f=a.data;return f.setAll(ff(r)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(_=>_.field))}(n,e,t,i):function(r,a,l){return Ds(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function SE(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=lf(i.transform,s||null);r!=null&&(t===null&&(t=Be.empty()),t.set(i.field,r))}return t||null}function bu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&An(i,s,(r,a)=>AE(r,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xi extends Ir{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xt extends Ir{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ff(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Nu(n,e,t){const i=new Map;ie(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,l=e.data.field(r.field);i.set(r.field,IE(a,l,t[s]))}return i}function Du(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,TE(r,a,e))}return i}class pf extends Ir{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Ir{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bE{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&RE(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ti(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ti(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=sf();return this.mutations.forEach(s=>{const r=e.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(s.key)?null:l;const u=df(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,i)=>bu(t,i))&&An(this.baseMutations,e.baseMutations,(t,i)=>bu(t,i))}}class Za{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ie(e.mutations.length===i.length);let s=function(){return gE}();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new Za(e,t,i,s)}}/**
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
 */class NE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,z;function kE(n){switch(n){default:return F();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function _f(n){if(n===void 0)return dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case he.OK:return P.OK;case he.CANCELLED:return P.CANCELLED;case he.UNKNOWN:return P.UNKNOWN;case he.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case he.INTERNAL:return P.INTERNAL;case he.UNAVAILABLE:return P.UNAVAILABLE;case he.UNAUTHENTICATED:return P.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case he.NOT_FOUND:return P.NOT_FOUND;case he.ALREADY_EXISTS:return P.ALREADY_EXISTS;case he.PERMISSION_DENIED:return P.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case he.ABORTED:return P.ABORTED;case he.OUT_OF_RANGE:return P.OUT_OF_RANGE;case he.UNIMPLEMENTED:return P.UNIMPLEMENTED;case he.DATA_LOSS:return P.DATA_LOSS;default:return F()}}(z=he||(he={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VE(){return new TextEncoder}/**
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
 */const xE=new $t([4294967295,4294967295],0);function ku(n){const e=VE().encode(n),t=new xd;return t.update(e),new Uint8Array(t.digest())}function Vu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new $t([t,i],0),new $t([s,r],0)]}class el{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new hi(`Invalid padding: ${t}`);if(i<0)throw new hi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new hi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=$t.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply($t.fromNumber(i)));return s.compare(xE)===1&&(s=new $t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ku(e),[i,s]=Vu(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);if(!this.de(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new el(r,s,t);return i.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=ku(e),[i,s]=Vu(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new wr(U.min(),s,new ae(X),ft(),$())}}class Ji{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ji(i,t,$(),$(),$())}}/**
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
 */class ks{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class mf{constructor(e,t){this.targetId=e,this.me=t}}class gf{constructor(e,t,i=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class xu{constructor(){this.fe=0,this.ge=Mu(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=$(),t=$(),i=$();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:F()}}),new Ji(this.pe,this.ye,e,t,i)}ve(){this.we=!1,this.ge=Mu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class OE{constructor(e){this.Le=e,this.Be=new Map,this.ke=ft(),this.qe=Ou(),this.Qe=new ae(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const r=s.target;if($o(r))if(i===0){const a=new M(r.path);this.Ue(t,a,Ve.newNoDocument(a,U.min()))}else ie(i===1);else{const a=this.Ye(t);if(a!==i){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let a,l;try{a=Xt(i).toUint8Array()}catch(u){if(u instanceof $d)return wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new el(a,s,r)}catch(u){return wn(u instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((r,a)=>{const l=this.Je(a);if(l){if(r.current&&$o(l.target)){const u=new M(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ve.newNoDocument(u,e))}r.be&&(t.set(a,r.Ce()),r.ve())}});let i=$();this.qe.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,a)=>a.setReadTime(e));const s=new wr(e,t,this.Qe,this.ke,i);return this.ke=ft(),this.qe=Ou(),this.Qe=new ae(X),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new xu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ce(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new ae(M.comparator)}function Mu(){return new ae(M.comparator)}const ME={asc:"ASCENDING",desc:"DESCENDING"},LE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FE={and:"AND",or:"OR"};class UE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ho(n,e){return n.useProto3Json||yr(e)?e:{value:e}}function er(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function BE(n,e){return er(n,e.toTimestamp())}function tt(n){return ie(!!n),U.fromTimestamp(function(t){const i=kt(t);return new ge(i.seconds,i.nanos)}(n))}function tl(n,e){return Ko(n,e).canonicalString()}function Ko(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vf(n){const e=re.fromString(n);return ie(Af(e)),e}function Qo(n,e){return tl(n.databaseId,e.path)}function _o(n,e){const t=vf(e);if(t.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Tf(t))}function Ef(n,e){return tl(n.databaseId,e)}function qE(n){const e=vf(n);return e.length===4?re.emptyPath():Tf(e)}function Yo(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tf(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lu(n,e,t){return{name:Qo(n,e),fields:t.value.mapValue.fields}}function jE(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(h,f){return h.useProto3Json?(ie(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?P.UNKNOWN:_f(h.code);return new x(f,h.message||"")}(a);t=new gf(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=_o(n,i.document.name),r=tt(i.document.updateTime),a=i.document.createTime?tt(i.document.createTime):U.min(),l=new Be({mapValue:{fields:i.document.fields}}),u=Ve.newFoundDocument(s,r,a,l),h=i.targetIds||[],f=i.removedTargetIds||[];t=new ks(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=_o(n,i.document),r=i.readTime?tt(i.readTime):U.min(),a=Ve.newNoDocument(s,r),l=i.removedTargetIds||[];t=new ks([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=_o(n,i.document),r=i.removedTargetIds||[];t=new ks([],r,s,null)}else{if(!("filter"in e))return F();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new DE(s,r),l=i.targetId;t=new mf(l,a)}}return t}function WE(n,e){let t;if(e instanceof Xi)t={update:Lu(n,e.key,e.value)};else if(e instanceof pf)t={delete:Qo(n,e.key)};else if(e instanceof xt)t={update:Lu(n,e.key,e.data),updateMask:JE(e.fieldMask)};else{if(!(e instanceof PE))return F();t={verify:Qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Li)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ui)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw F()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:BE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(n,e.precondition)),t}function $E(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(s,r){let a=s.updateTime?tt(s.updateTime):tt(r);return a.isEqual(U.min())&&(a=tt(r)),new CE(a,s.transformResults||[])}(t,e))):[]}function GE(n,e){return{documents:[Ef(n,e.path)]}}function zE(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Ef(n,s);const r=function(h){if(h.length!==0)return wf(Ye.create(h,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:hn(m.field),direction:QE(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function HE(n){let e=qE(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ie(i===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(_){const m=If(_);return m instanceof Ye&&Kd(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(m=>function(S){return new Js(dn(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(_){let m;return m=typeof _=="object"?_.value:_,yr(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(_){const m=!!_.before,A=_.values||[];return new Xs(A,m)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const m=!_.before,A=_.values||[];return new Xs(A,m)}(t.endAt)),dE(e,s,a,r,l,"F",u,h)}function KE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function If(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=dn(t.unaryFilter.field);return fe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dn(t.unaryFilter.field);return fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(i=>If(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function QE(n){return ME[n]}function YE(n){return LE[n]}function XE(n){return FE[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return Ae.fromServerFormat(n.fieldPath)}function wf(n){return n instanceof fe?function(t){if(t.op==="=="){if(wu(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(Iu(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wu(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(Iu(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:YE(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const i=t.getFilters().map(s=>wf(s));return i.length===1?i[0]:{compositeFilter:{op:XE(t.op),filters:i}}}(n):F()}function JE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Af(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Tt{constructor(e,t,i,s,r=U.min(),a=U.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ZE{constructor(e){this.ct=e}}function eT(n){const e=HE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zo(e,e.limit,"L"):e}/**
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
 */class tT{constructor(){this._n=new nT}addToCollectionParentIndex(e,t){return this._n.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Dt.min())}updateCollectionGroup(e,t,i){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class nT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(re.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(re.comparator)).toArray()}}/**
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
 */class Sn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Sn(0)}static Ln(){return new Sn(-1)}}/**
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
 */class iT{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?b.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Ti(i.mutation,s,We.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,$()).next(()=>i))}getLocalViewOfDocuments(e,t,i=$()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let a=ui();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const i=jt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,$()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,i,s){let r=ft();const a=Ei(),l=function(){return Ei()}();return t.forEach((u,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof xt)?r=r.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ti(f.mutation,h,f.mutation.getFieldMask(),ge.now())):a.set(h.key,We.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return l.set(h,new sT(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const i=Ei();let s=new ae((a,l)=>a-l),r=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=i.get(u)||We.empty();f=l.applyToLocalView(h,f),i.set(u,f);const _=(s.get(l.batchId)||$()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,_=sf();f.forEach(m=>{if(!r.has(m)){const A=df(t.get(m),i.get(m));A!==null&&_.set(m,A),r=r.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return b.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):b.resolve(jt());let l=-1,u=r;return a.next(h=>b.forEach(h,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),r.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,u,h,$())).next(f=>({batchId:l,changes:nf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(i=>{let s=ui();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let a=ui();return this.indexManager.getCollectionParents(e,r).next(l=>b.forEach(l,u=>{const h=function(_,m){return new Yi(m,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next(f=>{f.forEach((_,m)=>{a=a.insert(_,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(a=>{r.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ve.newInvalidDocument(f)))});let l=ui();return a.forEach((u,h)=>{const f=r.get(u);f!==void 0&&Ti(f.mutation,h,We.empty(),ge.now()),Er(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class oT{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return b.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:tt(s.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:eT(s.bundledQuery),readTime:tt(s.readTime)}}(t)),b.resolve()}}/**
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
 */class aT{constructor(){this.overlays=new ae(M.comparator),this.hr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const i=jt();return b.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),b.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),b.resolve()}getOverlaysForCollection(e,t,i){const s=jt(),r=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new ae((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let f=r.get(h.largestBatchId);f===null&&(f=jt(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=jt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return b.resolve(l)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new NE(t,i));let r=this.hr.get(t);r===void 0&&(r=$(),this.hr.set(t,r)),this.hr.set(t,r.add(i.key))}}/**
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
 */class nl{constructor(){this.Pr=new Ce(ve.Ir),this.Tr=new Ce(ve.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new ve(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Ar(new ve(e,t))}Rr(e,t){e.forEach(i=>this.removeReference(i,t))}Vr(e){const t=new M(new re([])),i=new ve(t,e),s=new ve(t,e+1),r=[];return this.Tr.forEachInRange([i,s],a=>{this.Ar(a),r.push(a.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new M(new re([])),i=new ve(t,e),s=new ve(t,e+1);let r=$();return this.Tr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new ve(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ve{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return M.comparator(e.key,t.key)||X(e.pr,t.pr)}static Er(e,t){return X(e.pr,t.pr)||M.comparator(e.key,t.key)}}/**
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
 */class lT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Ce(ve.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bE(r,t,i,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new ve(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.br(i),r=s<0?0:s;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],a=>{const l=this.Sr(a.pr);r.push(l)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(X);return t.forEach(s=>{const r=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,a],l=>{i=i.add(l.pr)})}),b.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;M.isDocumentKey(r)||(r=r.child(""));const a=new ve(new M(r),0);let l=new Ce(X);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.pr)),!0)},a),b.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(i=>{const s=this.Sr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return b.forEach(t.mutations,s=>{const r=new ve(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,t){const i=new ve(t,0),s=this.wr.firstAfterOrEqual(i);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cT{constructor(e){this.vr=e,this.docs=function(){return new ae(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return b.resolve(i?i.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let i=ft();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ve.newInvalidDocument(s))}),b.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=ft();const a=t.path,l=new M(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Kv(Hv(f),i)<=0||(s.has(f.key)||Er(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,t,i,s){F()}Fr(e,t){return b.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new uT(this)}getSize(e){return b.resolve(this.size)}}class uT extends iT{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(i)}),b.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class hT{constructor(e){this.persistence=e,this.Mr=new Mn(t=>Ya(t),Xa),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new nl,this.targetCount=0,this.Lr=Sn.Nn()}forEachTarget(e,t){return this.Mr.forEach((i,s)=>t(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),b.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.qn(t),b.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Mr.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),b.waitFor(r).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return b.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),b.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return b.resolve(i)}containsKey(e,t){return b.resolve(this.Nr.containsKey(t))}}/**
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
 */class dT{constructor(e,t){this.Br={},this.overlays={},this.kr=new za(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new hT(this),this.indexManager=new tT,this.remoteDocumentCache=function(s){return new cT(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new ZE(t),this.$r=new oT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new lT(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){O("MemoryPersistence","Starting transaction:",e);const s=new fT(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(e,t){return b.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class fT extends Yv{constructor(e){super(),this.currentSequenceNumber=e}}class il{constructor(e){this.persistence=e,this.zr=new nl,this.jr=null}static Hr(e){return new il(e)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),b.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),b.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,i=>{const s=M.fromPath(i);return this.Yr(e,s).next(r=>{r||t.removeEntry(s,U.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return b.or([()=>b.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class sl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=s}static Ki(e,t){let i=$(),s=$();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new sl(e,t.fromCache,i,s)}}/**
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
 */class pT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _T{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return t_()?8:Xv(ch())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ji(e,t).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.Hi(e,t,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new pT;return this.Ji(e,t,a).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>r.result)}Yi(e,t,i,s){return i.documentReadCount<this.Wi?(ai()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(ai()<=H.DEBUG&&O("QueryEngine","Query:",un(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(ai()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):b.resolve())}ji(e,t){if(Su(t))return b.resolve(null);let i=Ze(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=zo(t,null,"F"),i=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const a=$(...r);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,i).next(u=>{const h=this.Zi(t,l);return this.Xi(t,h,a,u.readTime)?this.ji(e,zo(t,null,"F")):this.es(e,h,t,u)}))})))}Hi(e,t,i,s){return Su(t)||s.isEqual(U.min())?b.resolve(null):this.zi.getDocuments(e,i).next(r=>{const a=this.Zi(t,r);return this.Xi(t,a,i,s)?b.resolve(null):(ai()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.es(e,a,t,zv(s,-1)).next(l=>l))})}Zi(e,t){let i=new Ce(ef(e));return t.forEach((s,r)=>{Er(e,r)&&(i=i.add(r))}),i}Xi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(e,t,i){return ai()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",un(t)),this.zi.getDocumentsMatchingQuery(e,t,Dt.min(),i)}es(e,t,i,s){return this.zi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */class mT{constructor(e,t,i,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new ae(X),this.rs=new Mn(r=>Ya(r),Xa),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function gT(n,e,t,i){return new mT(n,e,t,i)}async function Cf(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t._s(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=$();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(i,u).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function yT(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const _=h.batch,m=_.keys();let A=b.resolve();return m.forEach(S=>{A=A.next(()=>f.getEntry(u,S)).next(V=>{const D=h.docVersions.get(S);ie(D!==null),V.version.compareTo(D)<0&&(_.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=$();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Rf(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function vT(n,e){const t=B(n),i=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((f,_)=>{const m=s.get(_);if(!m)return;l.push(t.Qr.removeMatchingKeys(r,f.removedDocuments,_).next(()=>t.Qr.addMatchingKeys(r,f.addedDocuments,_)));let A=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(xe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,i)),s=s.insert(_,A),function(V,D,G){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(m,A,f)&&l.push(t.Qr.updateTargetData(r,A))});let u=ft(),h=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(ET(r,a,e.documentUpdates).next(f=>{u=f.cs,h=f.ls})),!i.isEqual(U.min())){const f=t.Qr.getLastRemoteSnapshotVersion(r).next(_=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return b.waitFor(l).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(t.ns=s,r))}function ET(n,e,t){let i=$(),s=$();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let a=ft();return t.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{cs:a,ls:s}})}function TT(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function IT(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Qr.getTargetData(i,e).next(r=>r?(s=r,b.resolve(s)):t.Qr.allocateTargetId(i).next(a=>(s=new Tt(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i})}async function Xo(n,e,t){const i=B(n),s=i.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Qi(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.ns=i.ns.remove(e),i.rs.delete(s.target)}function Fu(n,e,t){const i=B(n);let s=U.min(),r=$();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const _=B(u),m=_.rs.get(f);return m!==void 0?b.resolve(_.ns.get(m)):_.Qr.getTargetData(h,f)}(i,a,Ze(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.ts.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?r:$())).next(l=>(wT(i,pE(e),l),{documents:l,hs:r})))}function wT(n,e,t){let i=n.ss.get(e)||U.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(e,i)}class Uu{constructor(){this.activeTargetIds=EE()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AT{constructor(){this.no=new Uu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Uu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CT{io(e){}shutdown(){}}/**
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
 */class Bu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rs=null;function mo(){return Rs===null?Rs=function(){return 268435456+Math.round(2147483648*Math.random())}():Rs++,"0x"+Rs.toString(16)}/**
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
 */const RT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ST{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const De="WebChannelConnection";class PT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+t.host,this.So=`projects/${s}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Do(){return!1}Co(t,i,s,r,a){const l=mo(),u=this.vo(t,i.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,r,a),this.Mo(t,u,h,s).then(f=>(O("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw wn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}xo(t,i,s,r,a,l){return this.Co(t,i,s,r,a)}Fo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+On}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,a)=>t[a]=r),s&&s.headers.forEach((r,a)=>t[a]=r)}vo(t,i){const s=RT[t];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,i,s){const r=mo();return new Promise((a,l)=>{const u=new Od;u.setWithCredentials(!0),u.listenOnce(Ld.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bs.NO_ERROR:const f=u.getResponseJson();O(De,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),a(f);break;case bs.TIMEOUT:O(De,`RPC '${e}' ${r} timed out`),l(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const _=u.getStatus();if(O(De,`RPC '${e}' ${r} failed with status:`,_,"response text:",u.getResponseText()),_>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const S=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(A.status);l(new x(S,A.message))}else l(new x(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new x(P.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(De,`RPC '${e}' ${r} completed.`)}});const h=JSON.stringify(s);O(De,`RPC '${e}' ${r} sending request:`,s),u.send(t,"POST",h,i,15)})}Oo(e,t,i){const s=mo(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bd(),l=Ud(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new Md({})),this.Fo(u.initMessageHeaders,t,i),u.encodeInitMessageHeaders=!0;const f=r.join("");O(De,`Creating RPC '${e}' stream ${s}: ${f}`,u);const _=a.createWebChannel(f,u);let m=!1,A=!1;const S=new ST({lo:D=>{A?O(De,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(O(De,`Opening RPC '${e}' stream ${s} transport.`),_.open(),m=!0),O(De,`RPC '${e}' stream ${s} sending:`,D),_.send(D))},ho:()=>_.close()}),V=(D,G,K)=>{D.listen(G,J=>{try{K(J)}catch(ue){setTimeout(()=>{throw ue},0)}})};return V(_,ci.EventType.OPEN,()=>{A||(O(De,`RPC '${e}' stream ${s} transport opened.`),S.mo())}),V(_,ci.EventType.CLOSE,()=>{A||(A=!0,O(De,`RPC '${e}' stream ${s} transport closed`),S.po())}),V(_,ci.EventType.ERROR,D=>{A||(A=!0,wn(De,`RPC '${e}' stream ${s} transport errored:`,D),S.po(new x(P.UNAVAILABLE,"The operation could not be completed")))}),V(_,ci.EventType.MESSAGE,D=>{var G;if(!A){const K=D.data[0];ie(!!K);const J=K,ue=J.error||((G=J[0])===null||G===void 0?void 0:G.error);if(ue){O(De,`RPC '${e}' stream ${s} received error:`,ue);const st=ue.status;let Ee=function(v){const E=he[v];if(E!==void 0)return _f(E)}(st),I=ue.message;Ee===void 0&&(Ee=P.INTERNAL,I="Unknown error status: "+st+" with message "+ue.message),A=!0,S.po(new x(Ee,I)),_.close()}else O(De,`RPC '${e}' stream ${s} received:`,K),S.yo(K)}}),V(l,Fd.STAT_EVENT,D=>{D.stat===Bo.PROXY?O(De,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Bo.NOPROXY&&O(De,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function go(){return typeof document<"u"?document:null}/**
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
 */function Ar(n){return new UE(n,!0)}/**
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
 */class Sf{constructor(e,t,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=i,this.Lo=s,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Pf{constructor(e,t,i,s,r,a,l,u){this.oi=e,this.Go=i,this.zo=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Sf(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(dt(t.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===t&&this.u_(i,s)},i=>{e(()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(e,t){const i=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bT extends Pf{constructor(e,t,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=jE(this.serializer,e),i=function(r){if(!("targetChange"in r))return U.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?tt(a.readTime):U.min()}(e);return this.listener.h_(t,i)}P_(e){const t={};t.database=Yo(this.serializer),t.addTarget=function(r,a){let l;const u=a.target;if(l=$o(u)?{documents:GE(r,u)}:{query:zE(r,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=yf(r,a.resumeToken);const h=Ho(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=er(r,a.snapshotVersion.toTimestamp());const h=Ho(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const i=KE(this.serializer,e);i&&(t.labels=i),this.i_(t)}I_(e){const t={};t.database=Yo(this.serializer),t.removeTarget=e,this.i_(t)}}class NT extends Pf{constructor(e,t,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=$E(e.writeResults,e.commitTime),i=tt(e.commitTime);return this.listener.A_(i,t)}return ie(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Yo(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>WE(this.serializer,i))};this.i_(t)}}/**
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
 */class DT extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Co(e,Ko(t,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(P.UNKNOWN,r.toString())})}xo(e,t,i,s,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,Ko(t,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class kT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(dt(t),this.y_=!1):O("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class VT{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(a=>{i.enqueueAndForget(async()=>{sn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=B(u);h.M_.add(4),await Zi(h),h.N_.set("Unknown"),h.M_.delete(4),await Cr(h)}(this))})}),this.N_=new kT(i,s)}}async function Cr(n){if(sn(n))for(const e of n.x_)await e(!0)}async function Zi(n){for(const e of n.x_)await e(!1)}function bf(n,e){const t=B(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ll(t)?al(t):Ln(t).Xo()&&ol(t,e))}function rl(n,e){const t=B(n),i=Ln(t);t.F_.delete(e),i.Xo()&&Nf(t,e),t.F_.size===0&&(i.Xo()?i.n_():sn(t)&&t.N_.set("Unknown"))}function ol(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).P_(e)}function Nf(n,e){n.L_.xe(e),Ln(n).I_(e)}function al(n){n.L_=new OE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.N_.w_()}function ll(n){return sn(n)&&!Ln(n).Zo()&&n.F_.size>0}function sn(n){return B(n).M_.size===0}function Df(n){n.L_=void 0}async function xT(n){n.N_.set("Online")}async function OT(n){n.F_.forEach((e,t)=>{ol(n,e)})}async function MT(n,e){Df(n),ll(n)?(n.N_.D_(e),al(n)):n.N_.set("Unknown")}async function LT(n,e,t){if(n.N_.set("Online"),e instanceof gf&&e.state===2&&e.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await tr(n,i)}else if(e instanceof ks?n.L_.Ke(e):e instanceof mf?n.L_.He(e):n.L_.We(e),!t.isEqual(U.min()))try{const i=await Rf(n.localStore);t.compareTo(i)>=0&&await function(r,a){const l=r.L_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=r.F_.get(h);f&&r.F_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=r.F_.get(u);if(!f)return;r.F_.set(u,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Nf(r,u);const _=new Tt(f.target,u,h,f.sequenceNumber);ol(r,_)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await tr(n,i)}}async function tr(n,e,t){if(!Qi(e))throw e;n.M_.add(1),await Zi(n),n.N_.set("Offline"),t||(t=()=>Rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Cr(n)})}function kf(n,e){return e().catch(t=>tr(n,t,e))}async function Rr(n){const e=B(n),t=Vt(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;FT(e);)try{const s=await TT(e.localStore,i);if(s===null){e.v_.length===0&&t.n_();break}i=s.batchId,UT(e,s)}catch(s){await tr(e,s)}Vf(e)&&xf(e)}function FT(n){return sn(n)&&n.v_.length<10}function UT(n,e){n.v_.push(e);const t=Vt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Vf(n){return sn(n)&&!Vt(n).Zo()&&n.v_.length>0}function xf(n){Vt(n).start()}async function BT(n){Vt(n).V_()}async function qT(n){const e=Vt(n);for(const t of n.v_)e.d_(t.mutations)}async function jT(n,e,t){const i=n.v_.shift(),s=Za.from(i,e,t);await kf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Rr(n)}async function WT(n,e){e&&Vt(n).E_&&await async function(i,s){if(function(a){return kE(a)&&a!==P.ABORTED}(s.code)){const r=i.v_.shift();Vt(i).t_(),await kf(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Rr(i)}}(n,e),Vf(n)&&xf(n)}async function qu(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=sn(t);t.M_.add(3),await Zi(t),i&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Cr(t)}async function $T(n,e){const t=B(n);e?(t.M_.delete(2),await Cr(t)):e||(t.M_.add(2),await Zi(t),t.N_.set("Unknown"))}function Ln(n){return n.B_||(n.B_=function(t,i,s){const r=B(t);return r.f_(),new bT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:xT.bind(null,n),To:OT.bind(null,n),Ao:MT.bind(null,n),h_:LT.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ll(n)?al(n):n.N_.set("Unknown")):(await n.B_.stop(),Df(n))})),n.B_}function Vt(n){return n.k_||(n.k_=function(t,i,s){const r=B(t);return r.f_(),new NT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:BT.bind(null,n),Ao:WT.bind(null,n),R_:qT.bind(null,n),A_:jT.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Rr(n)):(await n.k_.stop(),n.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class cl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,l=new cl(e,t,a,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ul(n,e){if(dt("AsyncQueue",`${e}: ${n}`),Qi(n))return new x(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class _n{constructor(e){this.comparator=e?(t,i)=>e(t,i)||M.comparator(t.key,i.key):(t,i)=>M.comparator(t.key,i.key),this.keyedMap=ui(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new _n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new _n;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class ju{constructor(){this.q_=new ae(M.comparator)}track(e){const t=e.doc.key,i=this.q_.get(t);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(t,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(t):e.type===1&&i.type===2?this.q_=this.q_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):F():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Pn{constructor(e,t,i,s,r,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Pn(e,t,_n.emptySet(t),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class GT{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class zT{constructor(){this.queries=new Mn(e=>Zd(e),vr),this.onlineState="Unknown",this.z_=new Set}}async function Of(n,e){const t=B(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.W_()&&e.G_()&&(i=2):(r=new GT,i=e.G_()?0:1);try{switch(i){case 0:r.K_=await t.onListen(s,!0);break;case 1:r.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ul(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.U_.push(e),e.j_(t.onlineState),r.K_&&e.H_(r.K_)&&hl(t)}async function Mf(n,e){const t=B(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const a=r.U_.indexOf(e);a>=0&&(r.U_.splice(a,1),r.U_.length===0?s=e.G_()?0:1:!r.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function HT(n,e){const t=B(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const l of a.U_)l.H_(s)&&(i=!0);a.K_=s}}i&&hl(t)}function KT(n,e,t){const i=B(n),s=i.queries.get(e);if(s)for(const r of s.U_)r.onError(t);i.queries.delete(e)}function hl(n){n.z_.forEach(e=>{e.next()})}var Jo,Wu;(Wu=Jo||(Jo={})).J_="default",Wu.Cache="cache";class Lf{constructor(e,t,i){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Pn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const i=t!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Jo.Cache}}/**
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
 */class Ff{constructor(e){this.key=e}}class Uf{constructor(e){this.key=e}}class QT{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=$(),this.mutatedKeys=$(),this.Ia=ef(e),this.Ta=new _n(this.Ia)}get Ea(){return this.la}da(e,t){const i=t?t.Aa:new ju,s=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const m=s.get(f),A=Er(this.query,_)?_:null,S=!!m&&this.mutatedKeys.has(m.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;m&&A?m.data.isEqual(A.data)?S!==V&&(i.track({type:3,doc:A}),D=!0):this.Ra(m,A)||(i.track({type:2,doc:A}),D=!0,(u&&this.Ia(A,u)>0||h&&this.Ia(A,h)<0)&&(l=!0)):!m&&A?(i.track({type:0,doc:A}),D=!0):m&&!A&&(i.track({type:1,doc:m}),D=!0,(u||h)&&(l=!0)),D&&(A?(a=a.add(A),r=V?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{Ta:a,Aa:i,Xi:l,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,_)=>function(A,S){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(A)-V(S)}(f.type,_.type)||this.Ia(f.doc,_.doc)),this.Va(i),s=s!=null&&s;const l=t&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,h=u!==this.ha;return this.ha=u,a.length!==0||h?{snapshot:new Pn(this.query,e.Ta,r,a,e.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ju,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=$(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const t=[];return e.forEach(i=>{this.Pa.has(i)||t.push(new Uf(i))}),this.Pa.forEach(i=>{e.has(i)||t.push(new Ff(i))}),t}pa(e){this.la=e.hs,this.Pa=$();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Pn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class YT{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class XT{constructor(e){this.key=e,this.wa=!1}}class JT{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Mn(l=>Zd(l),vr),this.Da=new Map,this.Ca=new Set,this.va=new ae(M.comparator),this.Fa=new Map,this.Ma=new nl,this.xa={},this.Oa=new Map,this.Na=Sn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ZT(n,e,t=!0){const i=Gf(n);let s;const r=i.ba.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ya()):s=await Bf(i,e,t,!0),s}async function eI(n,e){const t=Gf(n);await Bf(t,e,!0,!1)}async function Bf(n,e,t,i){const s=await IT(n.localStore,Ze(e)),r=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return i&&(l=await tI(n,e,r,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&bf(n.remoteStore,s),l}async function tI(n,e,t,i,s){n.Ba=(_,m,A)=>async function(V,D,G,K){let J=D.view.da(G);J.Xi&&(J=await Fu(V.localStore,D.query,!1).then(({documents:I})=>D.view.da(I,J)));const ue=K&&K.targetChanges.get(D.targetId),st=K&&K.targetMismatches.get(D.targetId)!=null,Ee=D.view.applyChanges(J,V.isPrimaryClient,ue,st);return Gu(V,D.targetId,Ee.fa),Ee.snapshot}(n,_,m,A);const r=await Fu(n.localStore,e,!0),a=new QT(e,r.hs),l=a.da(r.documents),u=Ji.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);Gu(n,t,h.fa);const f=new YT(e,t,a);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function nI(n,e,t){const i=B(n),s=i.ba.get(e),r=i.Da.get(s.targetId);if(r.length>1)return i.Da.set(s.targetId,r.filter(a=>!vr(a,e))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Xo(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&rl(i.remoteStore,s.targetId),Zo(i,s.targetId)}).catch(Ki)):(Zo(i,s.targetId),await Xo(i.localStore,s.targetId,!0))}async function iI(n,e){const t=B(n),i=t.ba.get(e),s=t.Da.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),rl(t.remoteStore,i.targetId))}async function sI(n,e,t){const i=hI(n);try{const s=await function(a,l){const u=B(a),h=ge.now(),f=l.reduce((A,S)=>A.add(S.key),$());let _,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=ft(),V=$();return u.os.getEntries(A,f).next(D=>{S=D,S.forEach((G,K)=>{K.isValidDocument()||(V=V.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,S)).next(D=>{_=D;const G=[];for(const K of l){const J=SE(K,_.get(K.key).overlayedDocument);J!=null&&G.push(new xt(K.key,J,Gd(J.value.mapValue),et.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,G,l)}).next(D=>{m=D;const G=D.applyToLocalDocumentSet(_,V);return u.documentOverlayCache.saveOverlays(A,D.batchId,G)})}).then(()=>({batchId:m.batchId,changes:nf(_)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.xa[a.currentUser.toKey()];h||(h=new ae(X)),h=h.insert(l,u),a.xa[a.currentUser.toKey()]=h}(i,s.batchId,t),await es(i,s.changes),await Rr(i.remoteStore)}catch(s){const r=ul(s,"Failed to persist write");t.reject(r)}}async function qf(n,e){const t=B(n);try{const i=await vT(t.localStore,e);e.targetChanges.forEach((s,r)=>{const a=t.Fa.get(r);a&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?ie(a.wa):s.removedDocuments.size>0&&(ie(a.wa),a.wa=!1))}),await es(t,i,e)}catch(i){await Ki(i)}}function $u(n,e,t){const i=B(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ba.forEach((r,a)=>{const l=a.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=B(a);u.onlineState=l;let h=!1;u.queries.forEach((f,_)=>{for(const m of _.U_)m.j_(l)&&(h=!0)}),h&&hl(u)}(i.eventManager,e),s.length&&i.Sa.h_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function rI(n,e,t){const i=B(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Fa.get(e),r=s&&s.key;if(r){let a=new ae(M.comparator);a=a.insert(r,Ve.newNoDocument(r,U.min()));const l=$().add(r),u=new wr(U.min(),new Map,new ae(X),a,l);await qf(i,u),i.va=i.va.remove(r),i.Fa.delete(e),dl(i)}else await Xo(i.localStore,e,!1).then(()=>Zo(i,e,t)).catch(Ki)}async function oI(n,e){const t=B(n),i=e.batch.batchId;try{const s=await yT(t.localStore,e);Wf(t,i,null),jf(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await es(t,s)}catch(s){await Ki(s)}}async function aI(n,e,t){const i=B(n);try{const s=await function(a,l){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(_=>(ie(_!==null),f=_.keys(),u.mutationQueue.removeMutationBatch(h,_))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,e);Wf(i,e,t),jf(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await es(i,s)}catch(s){await Ki(s)}}function jf(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Wf(n,e,t){const i=B(n);let s=i.xa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.xa[i.currentUser.toKey()]=s}}function Zo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Da.get(e))n.ba.delete(i),t&&n.Sa.ka(i,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(i=>{n.Ma.containsKey(i)||$f(n,i)})}function $f(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(rl(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),dl(n))}function Gu(n,e,t){for(const i of t)i instanceof Ff?(n.Ma.addReference(i.key,e),lI(n,i)):i instanceof Uf?(O("SyncEngine","Document no longer in limbo: "+i.key),n.Ma.removeReference(i.key,e),n.Ma.containsKey(i.key)||$f(n,i.key)):F()}function lI(n,e){const t=e.key,i=t.path.canonicalString();n.va.get(t)||n.Ca.has(i)||(O("SyncEngine","New document in limbo: "+t),n.Ca.add(i),dl(n))}function dl(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new M(re.fromString(e)),i=n.Na.next();n.Fa.set(i,new XT(t)),n.va=n.va.insert(t,i),bf(n.remoteStore,new Tt(Ze(Ja(t.path)),i,"TargetPurposeLimboResolution",za.oe))}}async function es(n,e,t){const i=B(n),s=[],r=[],a=[];i.ba.isEmpty()||(i.ba.forEach((l,u)=>{a.push(i.Ba(u,e,t).then(h=>{var f;if((h||t)&&i.isPrimaryClient){const _=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(h){s.push(h);const _=sl.Ki(u.targetId,h);r.push(_)}}))}),await Promise.all(a),i.Sa.h_(s),await async function(u,h){const f=B(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>b.forEach(h,m=>b.forEach(m.qi,A=>f.persistence.referenceDelegate.addReference(_,m.targetId,A)).next(()=>b.forEach(m.Qi,A=>f.persistence.referenceDelegate.removeReference(_,m.targetId,A)))))}catch(_){if(!Qi(_))throw _;O("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const m=_.targetId;if(!_.fromCache){const A=f.ns.get(m),S=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(m,V)}}}(i.localStore,r))}async function cI(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const i=await Cf(t.localStore,e);t.currentUser=e,function(r,a){r.Oa.forEach(l=>{l.forEach(u=>{u.reject(new x(P.CANCELLED,a))})}),r.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await es(t,i.us)}}function uI(n,e){const t=B(n),i=t.Fa.get(e);if(i&&i.wa)return $().add(i.key);{let s=$();const r=t.Da.get(e);if(!r)return s;for(const a of r){const l=t.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Gf(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rI.bind(null,e),e.Sa.h_=HT.bind(null,e.eventManager),e.Sa.ka=KT.bind(null,e.eventManager),e}function hI(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aI.bind(null,e),e}class zu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ar(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return gT(this.persistence,new _T,e.initialUser,this.serializer)}createPersistence(e){return new dT(il.Hr,this.serializer)}createSharedClientState(e){return new AT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>$u(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cI.bind(null,this.syncEngine),await $T(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zT}()}createDatastore(e){const t=Ar(e.databaseInfo.databaseId),i=function(r){return new PT(r)}(e.databaseInfo);return function(r,a,l,u){return new DT(r,a,l,u)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,a,l){return new VT(i,s,r,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$u(this.syncEngine,t,0),function(){return Bu.D()?new Bu:new CT}())}createSyncEngine(e,t){return function(s,r,a,l,u,h,f){const _=new JT(s,r,a,l,u,h);return f&&(_.La=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(i){const s=B(i);O("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Zi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fI{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ul(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function yo(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Cf(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _I(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>qu(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>qu(e.remoteStore,s)),n._onlineComponents=e}function pI(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function _I(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!pI(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await yo(n,new zu)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await yo(n,new zu);return n._offlineComponents}async function Hf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Hu(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Hu(n,new dI))),n._onlineComponents}function mI(n){return Hf(n).then(e=>e.syncEngine)}async function Kf(n){const e=await Hf(n),t=e.eventManager;return t.onListen=ZT.bind(null,e.syncEngine),t.onUnlisten=nI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iI.bind(null,e.syncEngine),t}function gI(n,e,t={}){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,u,h){const f=new zf({next:m=>{a.enqueueAndForget(()=>Mf(r,_));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Lf(Ja(l.path),f,{includeMetadataChanges:!0,ra:!0});return Of(r,_)}(await Kf(n),n.asyncQueue,e,t,i)),i.promise}function yI(n,e,t={}){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,u,h){const f=new zf({next:m=>{a.enqueueAndForget(()=>Mf(r,_)),m.fromCache&&u.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),_=new Lf(l,f,{includeMetadataChanges:!0,ra:!0});return Of(r,_)}(await Kf(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Qf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ku=new Map;/**
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
 */function Yf(n,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vI(n,e,t,i){if(e===!0&&i===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qu(n){if(!M.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yu(n){if(M.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sr(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Xu{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qf((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pr{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Lv;switch(i.type){case"firstParty":return new qv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Ku.get(t);i&&(O("ComponentProvider","Removing Datastore"),Ku.delete(t),i.terminate())}(this),Promise.resolve()}}function EI(n,e,t,i={}){var s;const r=(n=pt(n,Pr))._getSettings(),a=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:a,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=ke.MOCK_USER;else{l=lh(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ke(h)}n._authCredentials=new Fv(new qd(l,u))}}/**
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
 */class Fn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class Ue{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Rt extends Fn{constructor(e,t,i){super(e,t,Ja(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new M(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function yw(n,e,...t){if(n=pe(n),Yf("collection","path",e),n instanceof Pr){const i=re.fromString(e,...t);return Yu(i),new Rt(n,null,i)}{if(!(n instanceof Ue||n instanceof Rt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(re.fromString(e,...t));return Yu(i),new Rt(n.firestore,null,i)}}function vw(n,e,...t){if(n=pe(n),arguments.length===1&&(e=jd.newId()),Yf("doc","path",e),n instanceof Pr){const i=re.fromString(e,...t);return Qu(i),new Ue(n,null,new M(i))}{if(!(n instanceof Ue||n instanceof Rt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(re.fromString(e,...t));return Qu(i),new Ue(n.firestore,n instanceof Rt?n.converter:null,new M(i))}}/**
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
 */class TI{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Sf(this,"async_queue_retry"),this.hu=()=>{const t=go();t&&O("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=go();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new ut;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Qi(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(i=>{this.au=i,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw dt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=t,t}enqueueAfterDelay(e,t,i){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=cl.createAndSchedule(this,e,t,i,r=>this.Eu(r));return this._u.push(s),s}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class ts extends Pr{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new TI}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xf(this),this._firestoreClient.terminate()}}function II(n,e){const t=typeof n=="object"?n:ca(),i=typeof n=="string"?n:"(default)",s=la(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ra("firestore");r&&EI(s,...r)}return s}function fl(n){return n._firestoreClient||Xf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Xf(n){var e,t,i;const s=n._freezeSettings(),r=function(l,u,h,f){return new eE(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new fI(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(xe.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class br{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nr{constructor(e){this._methodName=e}}/**
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
 */class pl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const wI=/^__.*__$/;class AI{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xi(e,this.data,t,this.fieldTransforms)}}class Jf{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class _l{constructor(e,t,i,s,r,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new _l(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:i,yu:!1});return s.wu(e),s}Su(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return nr(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Zf(this.fu)&&wI.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class CI{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Ar(e)}Fu(e,t,i,s=!1){return new _l({fu:e,methodName:t,vu:i,path:Ae.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ml(n){const e=n._freezeSettings(),t=Ar(n._databaseId);return new CI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function RI(n,e,t,i,s,r={}){const a=n.Fu(r.merge||r.mergeFields?2:0,e,t,s);yl("Data must be an object, but it was:",a,i);const l=ep(i,a);let u,h;if(r.merge)u=new We(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const f=[];for(const _ of r.mergeFields){const m=ea(e,_,t);if(!a.contains(m))throw new x(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);np(f,m)||f.push(m)}u=new We(f),h=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,h=a.fieldTransforms;return new AI(new Be(l),u,h)}class Dr extends Nr{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dr}}class gl extends Nr{constructor(e,t){super(e),this.xu=t}_toFieldTransform(e){const t=new Ui(e.serializer,af(e.serializer,this.xu));return new wE(e.path,t)}isEqual(e){return e instanceof gl&&this.xu===e.xu}}function SI(n,e,t,i){const s=n.Fu(1,e,t);yl("Data must be an object, but it was:",s,i);const r=[],a=Be.empty();nn(i,(u,h)=>{const f=vl(e,u,t);h=pe(h);const _=s.Su(f);if(h instanceof Dr)r.push(f);else{const m=ns(h,_);m!=null&&(r.push(f),a.set(f,m))}});const l=new We(r);return new Jf(a,l,s.fieldTransforms)}function PI(n,e,t,i,s,r){const a=n.Fu(1,e,t),l=[ea(e,i,t)],u=[s];if(r.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)l.push(ea(e,r[m])),u.push(r[m+1]);const h=[],f=Be.empty();for(let m=l.length-1;m>=0;--m)if(!np(h,l[m])){const A=l[m];let S=u[m];S=pe(S);const V=a.Su(A);if(S instanceof Dr)h.push(A);else{const D=ns(S,V);D!=null&&(h.push(A),f.set(A,D))}}const _=new We(h);return new Jf(f,_,a.fieldTransforms)}function bI(n,e,t,i=!1){return ns(t,n.Fu(i?4:3,e))}function ns(n,e){if(tp(n=pe(n)))return yl("Unsupported field value:",e,n),ep(n,e);if(n instanceof Nr)return function(i,s){if(!Zf(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=ns(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=pe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return af(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ge.fromDate(i);return{timestampValue:er(s.serializer,r)}}if(i instanceof ge){const r=new ge(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:er(s.serializer,r)}}if(i instanceof pl)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof bn)return{bytesValue:yf(s.serializer,i._byteString)};if(i instanceof Ue){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:tl(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Sr(i)}`)}(n,e)}function ep(n,e){const t={};return Wd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(n,(i,s)=>{const r=ns(s,e.pu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function tp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof pl||n instanceof bn||n instanceof Ue||n instanceof Nr)}function yl(n,e,t){if(!tp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=Sr(t);throw i==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+i)}}function ea(n,e,t){if((e=pe(e))instanceof br)return e._internalPath;if(typeof e=="string")return vl(n,e);throw nr("Field path arguments must be of type string or ",n,!1,void 0,t)}const NI=new RegExp("[~\\*/\\[\\]]");function vl(n,e,t){if(e.search(NI)>=0)throw nr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new br(...e.split("."))._internalPath}catch{throw nr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function nr(n,e,t,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new x(P.INVALID_ARGUMENT,l+n+u)}function np(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ip{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(El("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DI extends ip{data(){return super.data()}}function El(n,e){return typeof e=="string"?vl(n,e):e instanceof br?e._internalPath:e._delegate._internalPath}/**
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
 */function kI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tl{}class VI extends Tl{}function Ew(n,e,...t){let i=[];e instanceof Tl&&i.push(e),i=i.concat(t),function(r){const a=r.filter(u=>u instanceof Il).length,l=r.filter(u=>u instanceof kr).length;if(a>1||a>0&&l>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class kr extends VI{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new kr(e,t,i)}_apply(e){const t=this._parse(e);return sp(e._query,t),new Fn(e.firestore,e.converter,Go(e._query,t))}_parse(e){const t=ml(e.firestore);return function(r,a,l,u,h,f,_){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Zu(_,f);const A=[];for(const S of _)A.push(Ju(u,r,S));m={arrayValue:{values:A}}}else m=Ju(u,r,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Zu(_,f),m=bI(l,a,_,f==="in"||f==="not-in");return fe.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tw(n,e,t){const i=e,s=El("where",n);return kr._create(s,i,t)}class Il extends Tl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Il(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)sp(a,u),a=Go(a,u)}(e._query,t),new Fn(e.firestore,e.converter,Go(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ju(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jd(e)&&t.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(re.fromString(t));if(!M.isDocumentKey(i))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Tu(n,new M(i))}if(t instanceof Ue)return Tu(n,t._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sr(t)}.`)}function Zu(n,e){if(!Array.isArray(n)||n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sp(n,e){const t=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xI{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return nn(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new pl(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ka(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const t=kt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=re.fromString(e);ie(Af(i));const s=new Oi(i.get(1),i.get(3)),r=new M(i.popFirst(5));return s.isEqual(t)||dt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function OI(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class di{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rp extends ip{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(El("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Vs extends rp{data(e={}){return super.data(e)}}class MI{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new di(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Vs(this._firestore,this._userDataWriter,i.key,i,new di(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:LI(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function Iw(n){n=pt(n,Ue);const e=pt(n.firestore,ts);return gI(fl(e),n._key).then(t=>FI(e,n,t))}class op extends xI{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function ww(n){n=pt(n,Fn);const e=pt(n.firestore,ts),t=fl(e),i=new op(e);return kI(n._query),yI(t,n._query).then(s=>new MI(e,i,n,s))}function Aw(n,e,t){n=pt(n,Ue);const i=pt(n.firestore,ts),s=OI(n.converter,e,t);return ap(i,[RI(ml(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,et.none())])}function Cw(n,e,t,...i){n=pt(n,Ue);const s=pt(n.firestore,ts),r=ml(s);let a;return a=typeof(e=pe(e))=="string"||e instanceof br?PI(r,"updateDoc",n._key,e,t,i):SI(r,"updateDoc",n._key,e),ap(s,[a.toMutation(n._key,et.exists(!0))])}function ap(n,e){return function(i,s){const r=new ut;return i.asyncQueue.enqueueAndForget(async()=>sI(await mI(i),s,r)),r.promise}(fl(n),e)}function FI(n,e,t){const i=t.docs.get(e._key),s=new op(n);return new rp(n,s,e._key,i,new di(t.hasPendingWrites,t.fromCache),e.converter)}function Rw(n){return new gl("increment",n)}(function(e,t=!0){(function(s){On=s})(mh),yn(new Gt("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new ts(new Uv(i.getProvider("auth-internal")),new Wv(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(h.options.projectId,f)}(a,s),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Je(gu,"4.6.4",e),Je(gu,"4.6.4","esm2017")})();/**
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
 */const UI="type.googleapis.com/google.protobuf.Int64Value",BI="type.googleapis.com/google.protobuf.UInt64Value";function lp(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function ta(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>ta(e));if(typeof n=="function"||typeof n=="object")return lp(n,e=>ta(e));throw new Error("Data cannot be encoded in JSON: "+n)}function ir(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case UI:case BI:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>ir(e)):typeof n=="function"||typeof n=="object"?lp(n,e=>ir(e)):n}/**
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
 */const wl="functions";/**
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
 */const eh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mn extends Zt{constructor(e,t,i){super(`${wl}/${e}`,t||""),this.details=i}}function qI(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function jI(n,e){let t=qI(n),i=t,s;try{const r=e&&e.error;if(r){const a=r.status;if(typeof a=="string"){if(!eh[a])return new mn("internal","internal");t=eh[a],i=a}const l=r.message;typeof l=="string"&&(i=l),s=r.details,s!==void 0&&(s=ir(s))}}catch{}return t==="ok"?null:new mn(t,i,s)}/**
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
 */class WI{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const na="us-central1";function $I(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new mn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class GI{constructor(e,t,i,s,r=na,a){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new WI(t,i,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(r);this.customDomain=l.origin,this.region=na}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function zI(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function HI(n,e,t){return i=>QI(n,e,i,{})}async function KI(n,e,t,i){t["Content-Type"]="application/json";let s;try{s=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function QI(n,e,t,i){const s=n._url(e);return YI(n,s,t,i)}async function YI(n,e,t,i){t=ta(t);const s={data:t},r={},a=await n.contextProvider.getContext(i.limitedUseAppCheckTokens);a.authToken&&(r.Authorization="Bearer "+a.authToken),a.messagingToken&&(r["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=a.appCheckToken);const l=i.timeout||7e4,u=$I(l),h=await Promise.race([KI(e,s,r,n.fetchImpl),u.promise,n.cancelAllRequests]);if(u.cancel(),!h)throw new mn("cancelled","Firebase Functions instance was deleted.");const f=jI(h.status,h.json);if(f)throw f;if(!h.json)throw new mn("internal","Response is not valid JSON object.");let _=h.json.data;if(typeof _>"u"&&(_=h.json.result),typeof _>"u")throw new mn("internal","Response is missing data field.");return{data:ir(_)}}const th="@firebase/functions",nh="0.11.6";/**
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
 */const XI="auth-internal",JI="app-check-internal",ZI="messaging-internal";function ew(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),a=i.getProvider(XI),l=i.getProvider(ZI),u=i.getProvider(JI);return new GI(r,a,l,u,s,n)};yn(new Gt(wl,t,"PUBLIC").setMultipleInstances(!0)),Je(th,nh,e),Je(th,nh,"esm2017")}/**
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
 */function tw(n=ca(),e=na){const i=la(pe(n),wl).getImmediate({identifier:e}),s=ra("functions");return s&&nw(i,...s),i}function nw(n,e,t){zI(pe(n),e,t)}function Sw(n,e,t){return HI(pe(n),e)}ew(fetch.bind(self));const iw={apiKey:"AIzaSyBAvXQpAM-_XCHU_RIzZVWEw4CXtn4kyDA",authDomain:"mystery-of-antiques-bg.firebaseapp.com",databaseURL:"https://mystery-of-antiques-bg-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mystery-of-antiques-bg",storageBucket:"mystery-of-antiques-bg.appspot.com",messagingSenderId:"1057764106695",appId:"1:1057764106695:web:e8ce1a4bd6d907ad1779e2",measurementId:"G-3BXG6DXH55"},Al=gh(iw),Pw=tw(Al),bw=II(Al),Nw=xv(Al);export{bw as a,Nw as b,yw as c,vw as d,pw as e,Pw as f,ww as g,Sw as h,fw as i,uw as j,Iw as k,Rw as l,aw as m,cw as n,dw as o,ow as p,Ew as q,rw as r,Aw as s,lw as t,Cw as u,Tw as w};
