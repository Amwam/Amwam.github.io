(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)}},81506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},34575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},93913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},29754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(99489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},78585:function(e,t,n){var r=n(50008),o=n(81506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},99489:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},319:function(e,t,n){var r=n(23646),o=n(46860),a=n(60379),i=n(98206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},50008:function(e){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},93367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(93367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},74287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},57947:function(e,t,n){"use strict";var r=n(59713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(67294)),c=(a=n(60617))&&a.__esModule?a:{default:a},u=n(93367),s=n(74287),l=n(7845);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var p=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(p)?(f.add(p),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var v=y;t.default=v},60617:function(e,t,n){"use strict";var r=n(319),o=n(34575),a=n(93913),i=(n(81506),n(2205)),c=n(78585),u=n(29754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(67294),p=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},44837:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(85893),o=(n(67294),n(85979)),a=n.n(o);function i(e){return(0,r.jsx)("div",{className:a().list,children:e.products.map((function(e){return(0,r.jsx)("div",{className:a().productItem,children:(0,r.jsx)("strong",{children:(0,r.jsx)("a",{href:e.link,children:e.name})})},e.name)}))})}var c=n(9008),u=[{name:"Python",link:"http://www.python.org/"},{name:"Typescript",link:"http://www.typescriptlang.org/"},{name:"Javascript",link:"http://jquery.com/"},{name:"Swift",link:"https://swift.org/"},{name:"Java",link:"http://www.java.com/"},{name:"Objective-C",link:"https://developer.apple.com/library/mac/documentation/cocoa/conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html"},{name:"HTML/CSS",link:"http://www.w3.org/"},{name:"Bash/Shell (Unix)",link:"http://en.wikipedia.org/wiki/Bash_(Unix_shell)"}],s=[{name:"Git",link:"http://git-scm.com/"},{name:"iOS",link:"https://developer.apple.com/technologies/ios/"},{name:"Docker",link:"https://www.docker.com/"},{name:"IntelliJ IDEA/PyCharm",link:"http://www.jetbrains.com/idea/"},{name:"Jenkins",link:"https://jenkins-ci.org/"},{name:"Amazon Web Services (AWS)",link:"http://aws.amazon.com/"},{name:"Node.js",link:"https://nodejs.org"},{name:"Xcode",link:"https://developer.apple.com/xcode/"},{name:"PostgreSQL",link:"http://www.postgresql.org/"},{name:"SQL (MySQL, SQLite)",link:"http://en.wikipedia.org/wiki/SQL"},{name:"VIM",link:"http://vim.org"},{name:"Unix",link:"http://www.unix.org/"},{name:"OS X",link:"http://www.apple.com/osx/"}];function l(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:"About | AMWAM - Amit Shah"})}),(0,r.jsx)("h1",{children:"About"}),(0,r.jsx)("div",{children:"I graduated from the University of Warwick with a 1st in Computer Science (MEng) in July of 2013. Since then I have worked at BSkyB as a Software Developer, and am currently employed by WeGotPOP as Platform Lead. During my degree I also worked as a freelancer, specialising as an iOS developer."}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xs-12",children:(0,r.jsx)("h4",{children:"Programming languages"})}),(0,r.jsx)("div",{children:"I regularly work with a variety of languages, and am always looking to learn new ones. That said the following I would consider my main languages in which I am proficient"}),(0,r.jsx)(i,{products:u})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xs-12",children:(0,r.jsx)("h4",{children:"Tools and Platforms"})}),(0,r.jsx)("div",{children:"Again, I regularly work with many different tools and platforms, but the following is a selection of a few that come to mind"}),(0,r.jsx)(i,{products:s})]})]})}},74613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(44837)}])},85979:function(e){e.exports={list:"ProductList_list__1GVra",productItem:"ProductList_productItem__1bFF0"}},9008:function(e,t,n){e.exports=n(57947)}},function(e){e.O(0,[774],(function(){return t=74613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);