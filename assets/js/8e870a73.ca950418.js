"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[901],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(c,".").concat(y)]||d[y]||l[y]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:6,title:"types",description:"types"},c=void 0,p={unversionedId:"basic-study/types",id:"basic-study/types",title:"types",description:"types",source:"@site/docs/basic-study/types.md",sourceDirName:"basic-study",slug:"/basic-study/types",permalink:"/typescript-basic/docs/basic-study/types",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"types",description:"types"},sidebar:"docsSidebar",previous:{title:"\uae30\ud0c0 return \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/other-return-type"},next:{title:"Union \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/union"}},u={},l=[],d={toc:l};function y(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{name:"description",content:"types","data-rh":"true"}),(0,i.kt)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{property:"og:description",content:"types","data-rh":"true"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const version: string = process.version; // 'v16.15.0'\nconst splitedVersion: string[] = process.version.split(\".\"); // ['v16', '15', '0']\nconst splitedNumberVersion: number[] = splitedVersion.map(\n  (eachValue: string, index: number) =>\n    parseInt(!index ? eachValue.substring(1) : eachValue, 10),\n);\n\nconst isNumArr: boolean =\n  Array.isArray(splitedNumberVersion) &&\n  splitedNumberVersion.every(\n    (eachValue: number) => typeof eachValue === \"number\",\n  );\n\nconsole.log(splitedNumberVersion); // [16, 15, 0]\nconsole.log(isNumArr);\n")),(0,i.kt)("p",null,"\ubb54\uac00 \ud0c0\uc785\uc774 \uc794\ub729 \ub4e4\uc5b4\uac04 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. process\ub294 node\uc758 \ud658\uacbd\ubcc0\uc218\uc778\ub370\uc694. \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\ubcf4\uba74 \ub178\ub4dc\uc758 type\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0\nprocess\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/node")," \ubaa8\ub4c8\uc744 \uc124\uce58\ud558\ub77c\uace0 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"types node before",src:n(4415).Z,width:"2058",height:"626"})),(0,i.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\ub294 \uacbd\uc6b0, export\ud558\uc5ec \uc720\uc800\uac00 \uc0ac\uc6a9\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\uc758 \ud0c0\uc785\ub9cc \uc815\uc758\ud574\uc11c \uacf5\uc720\ud558\ub294 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n\ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub9cc\ub4e0 microsoft\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uc6b0\ub9ac\uc5d0\uac8c \ud544\uc694\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/node"),"\ub97c \uc124\uce58\ud574\uc90d\ub2c8\ub2e4. (",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -D @types/node"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"types node after",src:n(7012).Z,width:"1544",height:"622"})),(0,i.kt)("p",null,"process \ud658\uacbd \ubcc0\uc218\uc5d0 \ud0c0\uc785\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \ubc84\uc804\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeJS.Process.version: string")," \uac12\uc774 \ub728\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ub2e4\uc74c \uac15\uc758\ub3c4 \uae30\ub300\ud574\uc8fc\uc138\uc694!"))}y.isMDXComponent=!0},7012:function(e,t,n){t.Z=n.p+"assets/images/types-node-after-9f5eac5848e6c111062f41afcfbd2517.jpg"},4415:function(e,t,n){t.Z=n.p+"assets/images/types-node-before-b826cb051c835f5bf71c152dc834dbb5.jpg"}}]);