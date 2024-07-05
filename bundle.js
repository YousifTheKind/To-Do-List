(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>f});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),u=new URL(n(210),n.b),d=new URL(n(751),n.b),l=i()(a()),m=c()(u),h=c()(d);l.push([t.id,`@font-face {\n    font-family: 'coolFont';\n    src: url(${m}),\n    url(${h});\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --color-theme: #4f46e5;\n    --white: #f8fafc;\n}\n\n.container {\n    display: flex;\n    font-family: 'coolFont', sans-serif;\n    background-color: #ecfeff;\n}\n\n/* sidebar style */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    max-width: 420px;\n    min-width: 280px;\n    height: 100vh;\n    background-color: #cbd5e1;\n    color: #0f172a;\n}\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.project-list button{\n    min-height: 34px;\n    margin-right: 20px;\n}\n.project-list div {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3fr 1fr;\n    min-height: 34px;\n    max-width: 240px;\n}\n.project-list div > button:nth-child(2) {\n    margin-right: 0;\n}\n.my-projects {\n    display: flex;\n    margin-left: 20px;\n    margin-top: 4rem;\n    flex-direction: column;\n    gap: 16px;\n}\n.add-project {\n    min-width: 36px;\n    margin-right: 20px;\n}\n.my-projects-btn-container{\n    display: flex;\n    justify-content: space-between;\n}\n.add-task{\n    min-height: 34px;\n    padding: 0 10px;\n    margin: 20px;\n    margin-top: 8rem;\n}\n\n.add-task:hover {\n  background-color: #F3F4F6;\n  text-decoration: none;\n  transition-duration: 0.1s;\n}\n\n.add-task:disabled {\n  background-color: #FAFBFC;\n  border-color: rgba(27, 31, 35, 0.15);\n  cursor: default;\n}\n\n.add-task:active {\n  background-color: #EDEFF2;\n  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;\n  transition: none 0s;\n}\n\n.add-task:focus {\n  outline: 1px transparent;\n}\n\n/* main style */\n.main {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n.current-view {\n    min-width: 58rem;\n    max-width: 64rem;\n    min-height: 32rem;\n    max-height: 48rem;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: #0f172a;\n    color: white;\n    text-align: center;\n}\n.project-name {\n    font-size: 2rem;\n    margin-bottom: 10px;\n}\n.edit-task {\n    display: none;\n}\n.task-item {\n    display: grid;\n    grid-auto-flow: column;\n    margin-bottom: 10px;\n    grid-template-columns:  25px repeat(4, 1fr);\n    justify-items: start;\n    align-items: center;\n}\n.task-item > input[type="checkbox"] {\n    transform: scale(1.5);\n}\n\n.task-edit-btn, .task-delete-btn {\n    padding: 10px 20px;\n    font-size: 16px;\n    cursor: pointer;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 4px;\n}\n.task-edit-btn:hover, .task-delete-btn:hover {\n    background-color: #3e8e41;\n}\n\n.task-edit-btn{\n    background-color: #0751ff;\n}\n\n.task-delete-btn{\n    background-color: #dc3545;\n    margin-left: 10px;\n}\n\n/* task form style */\ndialog {\n    margin: auto;\n    padding: 10px;\n}\n#add-task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n#add-task-form > fieldset {\n    padding: 10px;\n}\n\n/* project form style */\n#add-project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n#add-project-form > fieldset {\n    padding: 10px;\n}`,""]);const f=l},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},210:(t,e,n)=>{t.exports=n.p+"images/00c2ed1a3bf798b0da27.ttf"},751:(t,e,n)=>{t.exports=n.p+"images/27737e30f9f52f95ba31.ttf"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),c=n.n(s),u=n(56),d=n.n(u),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(365),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;const b={events:{},subscribe:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},publish:function(t,...e){this.events[t]&&this.events[t].forEach((t=>{t(...e)}))}},y=[],w={Inbox:[]};b.subscribe("taskRecived",((t,e,n,r,a)=>{const o={title:t,description:e,date:n,priority:r,project:a};y.push(o),b.publish("myTasksUpdated")})),b.subscribe("projectRecived",(t=>{const e={[t]:[]};Object.assign(w,e),b.publish("myProjectsUpdated")}));const v=()=>{for(const t in w)w[t]=[];for(const[t,e]of y.entries()){const n=Object.keys(w);if(e.indexInMyTasks=t,n.includes(e.project)){let t=n.find((t=>t==e.project));w[t].push(e)}else x(e.indexInMyTasks)}b.publish("listsUpdated")},x=t=>{y.splice(t,1),b.publish("myTasksUpdated")};b.subscribe("myProjectsUpdated",v),b.subscribe("myTasksUpdated",v),b.subscribe("taskEdited",((t,e)=>{Object.assign(y[e],t),b.publish("myTasksUpdated")})),b.subscribe("taskDeleted",x),b.subscribe("projectDeleted",(t=>{delete w[t],b.publish("myProjectsUpdated")}));const k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function M(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const S={date:M({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:M({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:M({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const P={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function T(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const C={ordinalNumber:(D={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(D.matchPattern);if(!n)return null;const r=n[0],a=t.match(D.parsePattern);if(!a)return null;let o=D.valueCallback?D.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var D;const O={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=k[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:S,formatRelative:(t,e,n,r)=>E[t],localize:P,match:C,options:{weekStartsOn:0,firstWeekContainsDate:1}};let W={};function q(){return W}Math.pow(10,8);const I=6048e5,L=864e5;function N(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function F(t){const e=N(t);return e.setHours(0,0,0,0),e}function A(t){const e=N(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function B(t){const e=N(t);return function(t,e){const n=F(t),r=F(e),a=+n-A(n),o=+r-A(r);return Math.round((a-o)/L)}(e,function(t){const e=N(t),n=Y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function H(t,e){const n=q(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=N(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function U(t){return H(t,{weekStartsOn:1})}function z(t){const e=N(t),n=e.getFullYear(),r=Y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=U(r),o=Y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=U(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Q(t){const e=N(t),n=+U(e)-+function(t){const e=z(t),n=Y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),U(n)}(e);return Math.round(n/I)+1}function G(t,e){const n=N(t),r=n.getFullYear(),a=q(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Y(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=H(i,e),c=Y(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=H(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function X(t,e){const n=N(t),r=+H(n,e)-+function(t,e){const n=q(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=G(t,e),o=Y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),H(o,e)}(n,e);return Math.round(r/I)+1}function $(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const R={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return $("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):$(n+1,2)},d:(t,e)=>$(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>$(t.getHours()%12||12,e.length),H:(t,e)=>$(t.getHours(),e.length),m:(t,e)=>$(t.getMinutes(),e.length),s:(t,e)=>$(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return $(Math.trunc(r*Math.pow(10,n-3)),e.length)}},J={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return R.y(t,e)},Y:function(t,e,n,r){const a=G(t,r),o=a>0?a:1-a;return"YY"===e?$(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):$(o,e.length)},R:function(t,e){return $(z(t),e.length)},u:function(t,e){return $(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return $(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return $(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return R.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return $(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=X(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):$(a,e.length)},I:function(t,e,n){const r=Q(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):$(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):R.d(t,e)},D:function(t,e,n){const r=B(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):$(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return $(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return $(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return $(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return R.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):R.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):R.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):R.s(t,e)},S:function(t,e){return R.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return V(r);case"XXXX":case"XX":return K(r);default:return K(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return V(r);case"xxxx":case"xx":return K(r);default:return K(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+_(r,":");default:return"GMT"+K(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+_(r,":");default:return"GMT"+K(r,":")}},t:function(t,e,n){return $(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return $(t.getTime(),e.length)}};function _(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+$(o,2)}function V(t,e){return t%60==0?(t>0?"-":"+")+$(Math.abs(t)/60,2):K(t,e)}function K(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+$(Math.trunc(r/60),2)+e+$(r%60,2)}const Z=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},tt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},et={p:tt,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Z(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Z(r,e)).replace("{{time}}",tt(a,e))}},nt=/^D+$/,rt=/^Y+$/,at=["D","DD","YY","YYYY"];function ot(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=N(t);return!isNaN(Number(n))}const it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,ut=/''/g,dt=/[a-zA-Z]/;function lt(t,e,n){const r=q(),a=n?.locale??r.locale??O,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=N(t);if(!ot(s))throw new RangeError("Invalid time value");let c=e.match(st).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,et[e])(t,a.formatLong):t})).join("").match(it).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:mt(t)};if(J[e])return{isToken:!0,value:t};if(e.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return rt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return nt.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),at.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,J[o[0]])(s,o,a.localize,u)})).join("")}function mt(t){const e=t.match(ct);return e?e[1].replace(ut,"'"):t}const ht=document.querySelector(".task-dialog"),ft=document.querySelector(".project-dialog"),pt=document.querySelector(".add-task"),gt=document.querySelector(".add-project"),bt=document.querySelector("#add-task-form"),yt=document.querySelector("#add-project-form"),wt=document.querySelector(".current-view"),vt=document.querySelector(".project-list"),xt=document.querySelectorAll(".cancel-btn"),kt=document.querySelector(".edit-task"),Mt=document.querySelector(".task-confirm-btn");let St="",Et="Inbox";document.addEventListener("DOMContentLoaded",(()=>{pt.addEventListener("click",(function(){ht.showModal(),bt.reset(),Mt.style.display="block",kt.style.display="none"})),gt.addEventListener("click",(function(){ft.showModal(),yt.reset()})),xt.forEach((t=>{t.addEventListener("click",(()=>{t.closest("dialog").close()}))}))})),Mt.addEventListener("click",(t=>{t.preventDefault();for(const t of bt.querySelectorAll("[required]"))if(!t.reportValidity())return void alert("All fields are required");const e=document.getElementById("taskTitle").value,n=document.getElementById("description").value,r=document.getElementById("project").value,a=document.getElementById("priority").value,o=document.getElementById("do-date").value;b.publish("taskRecived",e,n,o,a,r),bt.reset(),ht.close()})),kt.addEventListener("click",(t=>{t.preventDefault();const e={title:document.getElementById("taskTitle").value,description:document.getElementById("description").value,project:document.getElementById("project").value,priority:document.getElementById("priority").value,date:document.getElementById("do-date").value};bt.reset(),ht.close(),b.publish("taskEdited",e,St)})),yt.addEventListener("submit",(t=>{t.preventDefault();const e=document.getElementById("projectTitle").value;w.hasOwnProperty(e)?alert("Project Already Exists!"):(b.publish("projectRecived",e),ft.close())}));const jt=()=>{vt.replaceChildren(),Object.keys(w).forEach((t=>{const e=document.createElement("button"),n=document.createElement("button"),r=document.createElement("div");e.textContent=t,n.textContent="Remove",n.classList.add="project-remove-btn","Inbox"!==e.textContent?(r.append(e,n),n.addEventListener("click",(()=>{const t=e.textContent;b.publish("projectDeleted",t),Et="Inbox",b.publish("myProjectsUpdated",w)})),vt.appendChild(r)):vt.appendChild(e),e.addEventListener("click",(e=>{e.preventDefault(),Et=t,b.publish("myProjectsUpdated",w)}))}))},Pt=()=>{const t=document.querySelector("#project");t.replaceChildren(),Object.keys(w).forEach((e=>{const n=document.createElement("option");n.textContent=e,n.value=e,"inbox"==n.value&&(n.selected=selected),t.appendChild(n)}))};document.querySelector(".current-view").addEventListener("click",(t=>{"task-delete-btn"===t.target.className&&(St=t.target.closest("li").getAttribute("Index"),b.publish("taskDeleted",St)),"task-edit-btn"===t.target.className&&(St=t.target.closest("li").getAttribute("Index"),ht.showModal(),bt.reset(),document.getElementById("taskTitle").value=y[St].title,document.getElementById("description").value=y[St].description,document.getElementById("project").value=y[St].project,document.getElementById("priority").value=y[St].priority,document.getElementById("do-date").value=y[St].date,Mt.style.display="none",kt.style.display="block"),"checkbox"==t.target.type&&t.target.checked?(t.target.closest(".task-item").style.textDecoration="line-through",t.target.closest(".task-item").style.opacity="0.5"):"checkbox"!=t.target.type||t.target.checked||(t.target.closest(".task-item").style.textDecoration="none",t.target.closest(".task-item").style.opacity="1")})),b.subscribe("listsUpdated",jt),b.subscribe("listsUpdated",(()=>{wt.replaceChildren();const t=document.createElement("div");t.classList.add("project-name"),t.textContent=Et,wt.appendChild(t);const e=document.createElement("ul");e.classList.add(".task-list"),wt.append(e);const n=w[Et];for(const t in n){const r=document.createElement("li"),a=document.createElement("div"),o=document.createElement("input");o.type="checkbox";const i=document.createElement("span"),s=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div"),d=document.createElement("button"),l=document.createElement("button");a.classList.add("task-item"),d.classList.add("task-edit-btn"),l.classList.add("task-delete-btn"),r.setAttribute("index",n[t].indexInMyTasks),i.textContent=n[t].title,s.textContent=lt(new Date(n[t].date),"dd/MM/yyyy"),c.textContent=n[t].description,u.textContent=n[t].priority,d.textContent="Edit",l.textContent="Delete",e.appendChild(r),r.appendChild(a),a.append(o,i,c,u,s,d,l)}})),b.subscribe("listsUpdated",Pt),b.subscribe("listsUpdated",(()=>{!function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&"QuotaExceededError"===t.name&&e&&0!==e.length}}()?alert("something went wrong!"):(localStorage.setItem("myTasks",JSON.stringify(y)),localStorage.setItem("myProjects",JSON.stringify(w)))})),window.addEventListener("load",(()=>{if(localStorage.getItem("myProjects")&&localStorage.getItem("myTasks")){const t=JSON.parse(localStorage.getItem("myProjects")),e=JSON.parse(localStorage.getItem("myTasks"));Object.assign(w,t),Object.assign(y,e),b.publish("listsUpdated")}})),jt(),Pt()})();