(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/seJ":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("q1tI"),i=s("YFqc"),a=s.n(i),l=n.createElement;function r(t){var e=t.tag;return l(a.a,{href:"/blog?tag=".concat(e)},l("a",null,e))}},"Gpi+":function(t,e,s){"use strict";e.a=[{title:"My First post",date:"2014-07-05",post_number:0,published:!0,slug:"my-first-post"},{title:"Branch Per Feature",date:"2014-07-12",post_number:1,published:!1,tags:["git"]},{title:"Alfred: Jenkins workflow",date:"2014-09-03",post_number:2,published:!0,slug:"alfred-jenkins-workflow",tags:["alfred","jenkins"]},{title:"My .vimrc",date:"2015-01-11",post_number:3,published:!0,slug:"my-vimrc",tags:["vim"]},{title:"Update Jenkins workflow to 1.0.1",date:"2015-01-20",post_number:4,published:!0,slug:"update-jenkins-workflow--1-0-1",tags:["alfred","jenkins"]},{title:"Using Git push-to-deploy",date:"2015-02-06",post_number:5,published:!0,slug:"git-push-to-deploy",tags:["git"]},{title:"Maintaining a clean Git history",date:"2015-10-11",post_number:7,published:!0,slug:"maintaining-a-clean-git-history",tags:["git"]},{title:"Update Jenkins workflow to 1.3",date:"2016-05-15",post_number:8,published:!0,slug:"update-jenkins-workkflow--1-3",tags:["alfred","jenkins"]},{title:"Sorting Javascript imports",date:"2016-07-17",post_number:9,published:!0,slug:"js-import-sort",tags:["javascript"]},{title:"Using React with Web Components",date:"2017-07-02",post_number:10,published:!0,slug:"react-web-components",tags:["javascript","react"]},{title:"Switching from flow to TypeScript",date:"2018-12-02",post_number:11,published:!0,slug:"flow-to-typesript",tags:["javascript","typescript"]},{title:"Preventing double clicks in React",date:"2019-01-14",post_number:12,published:!0,slug:"preventing-double-clicks-in-react",tags:["javascript","react"]},{title:"React in python (Pyodide)",date:"2019-04-22",post_number:13,published:!0,slug:"react-in-python",tags:["javascript","react","python"]}]},HfOp:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return b}));var n=s("q1tI"),i=s("Gpi+"),a=s("/seJ"),l=s("nOHt"),r=s("YFqc"),o=s.n(r),u=s("gOTH"),p=s.n(u),c=s("8Kt/"),d=s.n(c),g=n.createElement,f=new Set;i.a.forEach((function(t){return(t.tags||[]).forEach((function(t){return f.add(t)}))}));var m=Array.from(f);function b(t){var e=Object(l.useRouter)().query;return t.children?t.children:g("div",null,g(d.a,null,g("title",null,"Blog | AMWAM - Amit Shah")),g("h1",null,"Blog"),g("div",{className:p.a.content},g("div",{className:p.a["post-list"]},i.a.filter((function(t){return t.published})).filter((function(t){return!e.tag||(t.tags||[]).includes(e.tag)})).sort((function(t,e){return e.post_number-t.post_number})).map((function(t){return g("div",{key:t.slug,className:p.a["post-item"]},g("strong",null,g(o.a,{href:"/blog/[slug]",as:"/blog/".concat(t.slug)},g("a",null,t.title)))," ",g("div",null,g("em",{className:p.a["post-date"]},t.date)))}))),g("div",{className:p.a["tags-list"]},g("b",null,"Tags"),g("ul",null,m.map((function(t,e){return g("li",{key:e},g(a.a,{tag:t}))}))))))}},gOTH:function(t,e,s){t.exports={tags:"style_tags__2EmJP",content:"style_content__2xggE","post-list":"style_post-list__2YrC3","tags-list":"style_tags-list__UT04h","post-item":"style_post-item__yOopD","post-date":"style_post-date__34_1W"}},uh6c:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s("HfOp")}])}},[["uh6c",0,1,2,3]]]);