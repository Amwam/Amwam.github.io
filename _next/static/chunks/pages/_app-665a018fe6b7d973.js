(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{76363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(61756)}])},31551:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=t(67294))&&a.__esModule?a:{default:a},c=t(41003),l=t(80880),u=t(69246);var f={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var n=o(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var _=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,b=o(u.useIntersection({rootMargin:"200px"}),2),j=b[0],x=b[1],w=i.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);i.default.useEffect((function(){var e=x&&t&&c.isLocalURL(d),n="undefined"!==typeof g?g:r&&r.locale,o=f[d+"%"+p+(n?"%"+n:"")];e&&!o&&s(r,d,p,{locale:n})}),[p,d,x,g,t,r]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,h,y,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof g?g:r&&r.locale,A=r&&r.isLocaleDomain&&c.getDomainLocale(p,N,r&&r.locales,r&&r.domainLocales);k.href=A||c.addBasePath(c.addLocale(p,N,r&&r.defaultLocale))}return i.default.cloneElement(n,k)};n.default=d},69246:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],v=o(a.useState(n?n.current:null),2),h=v[0],y=v[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=l.get(r):(n=l.get(t),u.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[r,h,t,d]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&y(n.current)}),[n]),[m,d]};var a=t(67294),i=t(44686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},61756:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(85893),o=(t(67294),t(41664)),a=t(7059),i=t.n(a);function c(e){return(0,r.jsxs)("div",{id:i()["nav-bar"],role:"navigation",children:[(0,r.jsx)("img",{id:i()["nav-display-picture"],src:"/images/me.jpg",alt:"Me (Amit)",loading:"lazy"}),(0,r.jsx)("div",{id:i().name,children:"Amit Shah"}),(0,r.jsxs)("div",{id:i()["nav-links"],children:[(0,r.jsx)("div",{className:i()["nav-link"],children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("div",{className:i()["nav-link"],children:(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})}),(0,r.jsx)("div",{className:i()["nav-link"],children:(0,r.jsx)(o.default,{href:"/blog",children:(0,r.jsx)("a",{children:"Blog"})})}),(0,r.jsx)("div",{className:i()["nav-link"],children:(0,r.jsx)(o.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Contact"})})})]})]})}var l=t(9008),u=t(81865),f=t.n(u);t(10535),t(38401);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function p(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"AMWAM - Amit Shah"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]},"meta-info"),(0,r.jsx)(c,{}),(0,r.jsx)("div",{id:f()["content-wrapper"],children:(0,r.jsx)("main",{id:f().content,children:(0,r.jsx)(n,d({},t))})})]})}},7059:function(e){e.exports={"nav-display-picture":"Navigation_nav-display-picture__z_2_S","nav-link":"Navigation_nav-link__1_q_g","nav-bar":"Navigation_nav-bar__qBvYL",name:"Navigation_name__xoUmt","nav-links":"Navigation_nav-links__c1Wi_"}},81865:function(e){e.exports={content:"_app_content__N_c_N",container:"_app_container__HJghf","content-wrapper":"_app_content-wrapper__HNwfi"}},10535:function(){},38401:function(){},9008:function(e,n,t){e.exports=t(83121)},41664:function(e,n,t){e.exports=t(31551)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(76363),n(80880)}));var t=e.O();_N_E=t}]);