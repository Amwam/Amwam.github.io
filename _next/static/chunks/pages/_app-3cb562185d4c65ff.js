(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(584)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),i=n(4532),l=n(3353),c=n(1410),u=n(9064),s=n(370),f=n(9955),d=n(4224),p=n(508),v=n(1516),h=n(4266);let _=new Set;function g(e,t,n,r,o){if(o||l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(_.has(a))return;_.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:c.formatUrl(e)}let m=a.default.forwardRef(function(e,t){let n,r;let{href:c,as:_,children:m,prefetch:b,passHref:j,replace:x,shallow:w,scroll:k,locale:M,onClick:N,onMouseEnter:C,onTouchStart:E,legacyBehavior:O=!1}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,O&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let L=!1!==b,R=a.default.useContext(f.RouterContext),S=a.default.useContext(d.AppRouterContext),A=null!=R?R:S,T=!R,{href:I,as:H}=a.default.useMemo(()=>{if(!R){let e=y(c);return{href:e,as:_?y(_):e}}let[e,t]=i.resolveHref(R,c,!0);return{href:e,as:_?i.resolveHref(R,_):t||e}},[R,c,_]),U=a.default.useRef(I),D=a.default.useRef(H);O&&(r=a.default.Children.only(n));let B=O?r&&"object"==typeof r&&r.ref:t,[G,K,q]=p.useIntersection({rootMargin:"200px"}),z=a.default.useCallback(e=>{(D.current!==H||U.current!==I)&&(q(),D.current=H,U.current=I),G(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[H,B,I,q,G]);a.default.useEffect(()=>{A&&K&&L&&g(A,I,H,{locale:M},T)},[H,I,K,M,L,null==R?void 0:R.locale,A,T]);let F={ref:z,onClick(e){O||"function"!=typeof N||N(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,o,i,c,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!l.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(v):v()}(e,A,I,H,x,w,k,M,T,L)},onMouseEnter(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(L||!T)&&g(A,I,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(L||!T)&&g(A,I,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},T)}};if(u.isAbsoluteUrl(H))F.href=H;else if(!O||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&v.getDomainLocale(H,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);F.href=t||h.addBasePath(s.addLocale(H,e,null==R?void 0:R.defaultLocale))}return O?a.default.cloneElement(r,F):a.default.createElement("a",Object.assign({},P,F),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!a,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(a){if(u||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[u,n,t,s,d.current]);let v=r.useCallback(()=>{f(!1)},[]);return[p,s,v]};var r=n(7294),o=n(29);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893);n(7294);var o=n(1664),a=n.n(o),i=n(7288),l=n.n(i);function c(e){return(0,r.jsxs)("div",{id:l()["nav-bar"],role:"navigation",children:[(0,r.jsx)("img",{id:l()["nav-display-picture"],src:"/images/me.200.png",alt:"Me (Amit)",loading:"lazy"}),(0,r.jsx)("div",{id:l().name,children:"Amit Shah"}),(0,r.jsxs)("div",{id:l()["nav-links"],children:[(0,r.jsx)("div",{className:l()["nav-link"],children:(0,r.jsx)(a(),{href:"/",children:"Home"})}),(0,r.jsx)("div",{className:l()["nav-link"],children:(0,r.jsx)(a(),{href:"/about",children:"About"})}),(0,r.jsx)("div",{className:l()["nav-link"],children:(0,r.jsx)(a(),{href:"/blog",children:"Blog"})}),(0,r.jsx)("div",{className:l()["nav-link"],children:(0,r.jsx)(a(),{href:"/contact",children:"Contact"})})]})]})}var u=n(9008),s=n.n(u),f=n(9848),d=n.n(f);function p(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"AMWAM - Amit Shah"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]},"meta-info"),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-9977N7FRG8"}),(0,r.jsx)("script",{children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-9977N7FRG8');\n        "}),(0,r.jsx)(c,{}),(0,r.jsx)("div",{id:d()["content-wrapper"],children:(0,r.jsx)("main",{id:d().content,children:(0,r.jsx)(t,{...n})})})]})}n(5996),n(4042),n(4563)},4563:function(){},5996:function(){},4042:function(){},7288:function(e){e.exports={"nav-display-picture":"Navigation_nav-display-picture__z_2_S","nav-link":"Navigation_nav-link__1_q_g","nav-bar":"Navigation_nav-bar__qBvYL",name:"Navigation_name__xoUmt","nav-links":"Navigation_nav-links__c1Wi_"}},9848:function(e){e.exports={content:"_app_content__N_c_N",container:"_app_container__HJghf","content-wrapper":"_app_content-wrapper__HNwfi"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);