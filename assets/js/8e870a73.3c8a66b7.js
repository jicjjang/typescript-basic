"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[496],{5788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>m});var r=n(1504);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=c(n),d=s,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[y]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(5072),s=(n(1504),n(5788));const o={sidebar_position:6,title:"types",description:"types"},i=void 0,a={unversionedId:"basic-study/types",id:"basic-study/types",title:"types",description:"types",source:"@site/docs/basic-study/types.md",sourceDirName:"basic-study",slug:"/basic-study/types",permalink:"/typescript-basic/docs/basic-study/types",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"types",description:"types"},sidebar:"docsSidebar",previous:{title:"\uae30\ud0c0 return \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/other-return-type"},next:{title:"Union \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/union"}},p={},c=[],l={toc:c},y="wrapper";function u(e){let{components:t,...o}=e;return(0,s.yg)(y,(0,r.c)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("head",null,(0,s.yg)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,s.yg)("meta",{name:"description",content:"types","data-rh":"true"}),(0,s.yg)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,s.yg)("meta",{property:"og:description",content:"types","data-rh":"true"})),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"const version: string = process.version; // 'v16.15.0'\nconst splitedVersion: string[] = process.version.split(\".\"); // ['v16', '15', '0']\nconst splitedNumberVersion: number[] = splitedVersion.map(\n  (eachValue: string, index: number) =>\n    parseInt(!index ? eachValue.substring(1) : eachValue, 10),\n);\n\nconst isNumArr: boolean =\n  Array.isArray(splitedNumberVersion) &&\n  splitedNumberVersion.every(\n    (eachValue: number) => typeof eachValue === \"number\",\n  );\n\nconsole.log(splitedNumberVersion); // [16, 15, 0]\nconsole.log(isNumArr);\n")),(0,s.yg)("p",null,"\ubb54\uac00 \ud0c0\uc785\uc774 \uc794\ub729 \ub4e4\uc5b4\uac04 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. process\ub294 node\uc758 \ud658\uacbd\ubcc0\uc218\uc778\ub370\uc694. \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\ubcf4\uba74 \ub178\ub4dc\uc758 type\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0\nprocess\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,s.yg)("inlineCode",{parentName:"p"},"@types/node")," \ubaa8\ub4c8\uc744 \uc124\uce58\ud558\ub77c\uace0 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"types node before",src:n(2324).c,width:"2058",height:"626"})),(0,s.yg)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\ub294 \uacbd\uc6b0, export\ud558\uc5ec \uc720\uc800\uac00 \uc0ac\uc6a9\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\uc758 \ud0c0\uc785\ub9cc \uc815\uc758\ud574\uc11c \uacf5\uc720\ud558\ub294 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub9cc\ub4e0 microsoft\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,s.yg)("hr",null),(0,s.yg)("p",null,"\uc6b0\ub9ac\uc5d0\uac8c \ud544\uc694\ud55c ",(0,s.yg)("inlineCode",{parentName:"p"},"@types/node"),"\ub97c \uc124\uce58\ud574\uc90d\ub2c8\ub2e4. (",(0,s.yg)("inlineCode",{parentName:"p"},"npm install -D @types/node"),")"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"types node after",src:n(828).c,width:"1544",height:"622"})),(0,s.yg)("p",null,"process \ud658\uacbd \ubcc0\uc218\uc5d0 \ud0c0\uc785\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \ubc84\uc804\uc5d0\ub294 ",(0,s.yg)("inlineCode",{parentName:"p"},"NodeJS.Process.version: string")," \uac12\uc774 \ub728\uac8c \ub429\ub2c8\ub2e4."),(0,s.yg)("hr",null),(0,s.yg)("p",null,"\ub2e4\uc74c \uac15\uc758\ub3c4 \uae30\ub300\ud574\uc8fc\uc138\uc694!"))}u.isMDXComponent=!0},828:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/types-node-after-9f5eac5848e6c111062f41afcfbd2517.jpg"},2324:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/types-node-before-b826cb051c835f5bf71c152dc834dbb5.jpg"}}]);