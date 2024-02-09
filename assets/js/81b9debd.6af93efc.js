"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[250],{5788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>d});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,d=u["".concat(p,".").concat(g)]||u[g]||y[g]||o;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(5072),a=(t(1504),t(5788));const o={sidebar_position:1,title:"Generic",description:"Generic"},c=void 0,i={unversionedId:"advanced-study/generic",id:"advanced-study/generic",title:"Generic",description:"Generic",source:"@site/docs/advanced-study/generic.md",sourceDirName:"advanced-study",slug:"/advanced-study/generic",permalink:"/typescript-basic/docs/advanced-study/generic",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Generic",description:"Generic"},sidebar:"docsSidebar",previous:{title:"?, ! \uc5f0\uc0b0\uc790",permalink:"/typescript-basic/docs/basic-study/safe-navigation-non-null-assertion"},next:{title:"type narrowing (\ud0c0\uc785 \uc881\ud788\uae30)",permalink:"/typescript-basic/docs/advanced-study/type-narrowing"}},p={},l=[{value:"\uc81c\uc57d \uc870\uac74",id:"\uc81c\uc57d-\uc870\uac74",level:2},{value:"\uc81c\ub124\ub9ad \uc81c\uc57d\uc870\uac74\uc758 \uc88b\uc740 \uc0ac\uc6a9 \ubc29\ubc95",id:"\uc81c\ub124\ub9ad-\uc81c\uc57d\uc870\uac74\uc758-\uc88b\uc740-\uc0ac\uc6a9-\ubc29\ubc95",level:2},{value:"1. \ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \uc81c\ud55c\ud558\uc9c0 \uc54a\ub294\uac83\uc774 \uc88b\ub2e4",id:"1-\ud0c0\uc785\uc740-\uac00\ub2a5\ud55c-\uc81c\ud55c\ud558\uc9c0-\uc54a\ub294\uac83\uc774-\uc88b\ub2e4",level:3},{value:"2. \uac00\ub2a5\ud55c \ud0c0\uc785\uc744 \uc801\uac8c \uc0ac\uc6a9\ud558\ub294\uac8c \uc88b\ub2e4",id:"2-\uac00\ub2a5\ud55c-\ud0c0\uc785\uc744-\uc801\uac8c-\uc0ac\uc6a9\ud558\ub294\uac8c-\uc88b\ub2e4",level:3}],s={toc:l},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("head",null,(0,a.yg)("meta",{name:"title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{name:"description",content:"Generic","data-rh":"true"}),(0,a.yg)("meta",{property:"og:title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{property:"og:description",content:"Generic","data-rh":"true"})),(0,a.yg)("p",null,"\uc81c\ub124\ub9ad\uc774\ub780 \ud0c0\uc785\uc744 \ubcc0\uc218\ucc98\ub7fc \ub118\uae30\ub294 \ubc29\uc2dd\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc720\uc800\ub294 \uc81c\ub124\ub9ad\uc744 \ud1b5\ud574 \uc790\uc2e0\ub9cc\uc758 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc6b0\uc120 \uac04\ub2e8\ud55c \uc608\uc2dc\ub85c \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function getParam<T>(a: T): T {\n  return a;\n}\n\nconst param1 = getParam<number>(\"jed\"); // error! Argument of type 'string' is not assignable to parameter of type 'number'\nconst param2 = getParam<string>(\"jed\"); // ok!\n")),(0,a.yg)("p",null,"\uc544\uc8fc \uae30\ucd08\uc801\uc778 \uc81c\ub124\ub9ad \ucf54\ub4dc\uc785\ub2c8\ub2e4. T \ub77c\ub294 \ud0c0\uc785\uc774 \uc5b4\ub5a4 \ud0c0\uc785\uc778\uc9c0 \uba85\uc2dc\uc801\uc73c\ub85c \ub118\uaca8\uc904 \uc218 \uc788\uc73c\uba70, \ub118\uaca8\uc900 \ud0c0\uc785\uc744 \uc81c\ub124\ub9ad T\ub85c \uc124\uc815\ud55c \ubd80\ubd84\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"\uc81c\uc57d-\uc870\uac74"},"\uc81c\uc57d \uc870\uac74"),(0,a.yg)("p",null,"\uc81c\ub124\ub9ad \ud0c0\uc785 \ubcc0\uc218\uc758 ",(0,a.yg)("inlineCode",{parentName:"p"},".length")," \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\ub294 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function getParamLength<T>(a: T): T {\n  return a.length; // Property 'length' does not exist on type 'T'\n}\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"extends"),"\ub97c \ud1b5\ud574 \ud0c0\uc785\uc5d0 \uc81c\ud55c\uc744 \ub454\ub2e4\uba74 \ub2e4\ub978 \ud0c0\uc785\uc5d0 \ub300\ud574\uc11c\ub294 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ub2e4\ub978 \ud0c0\uc785\uc744 \uc81c\ub124\ub9ad\uc5d0 \ub123\ub294\ub2e4\uace0 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function getParam<T extends number>(a: T): T {\n  return a;\n}\n\nconst param1 = getParam<string>(\"jed\"); // error! Type 'string' does not satisfy the constraint 'number'\nconst param2 = getParam(true); // error! Type 'boolean' does not satisfy the constraint 'number'.\nconst param3 = getParam<number>(1); // ok!\nconst param4 = getParam(1); // ok!\n")),(0,a.yg)("h2",{id:"\uc81c\ub124\ub9ad-\uc81c\uc57d\uc870\uac74\uc758-\uc88b\uc740-\uc0ac\uc6a9-\ubc29\ubc95"},"\uc81c\ub124\ub9ad \uc81c\uc57d\uc870\uac74\uc758 \uc88b\uc740 \uc0ac\uc6a9 \ubc29\ubc95"),(0,a.yg)("p",null,"\uc544\ubb34\ub798\ub3c4 \ubcf5\uc7a1\ud55c \uc81c\ub124\ub9ad\uc774\ub2e4 \ubcf4\ub2c8 \ube44\uc2b7\ud55c \uc0ac\uc6a9 \ubc29\ubc95\uc774 \uc5ec\ub7ec\uac1c \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc911 \uba87\uba87 \ucf00\uc774\uc2a4\uc758 \uc88b\uc740 \uc0ac\uc6a9\ubc29\ubc95\uc5d0 \ub300\ud574 \uad6c\ubd84\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h3",{id:"1-\ud0c0\uc785\uc740-\uac00\ub2a5\ud55c-\uc81c\ud55c\ud558\uc9c0-\uc54a\ub294\uac83\uc774-\uc88b\ub2e4"},"1. \ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \uc81c\ud55c\ud558\uc9c0 \uc54a\ub294\uac83\uc774 \uc88b\ub2e4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function getParam1<Type>(arr: Type[]) {\n  return arr;\n}\n\nfunction getParam2<Type extends any[]>(arr: Type) {\n  return arr;\n}\n\nconst a = getParam1([1, 2, 3]); // a\uc758 type\uc740 number[]\ub85c \ucd94\ub860\ub41c\ub2e4.\nconst b = getParam2([1, 2, 3]); // b\uc758 type\uc740 any[]\ub85c \ucd94\ub860\ub41c\ub2e4.\n")),(0,a.yg)("p",null,"any\uc758 \ubc30\uc5f4\uc744 \ud0c0\uc785\uc73c\ub85c \ub458\uac70\uba74 \uc560\ucd08\uc5d0 \uc81c\ub124\ub9ad\uc744 \uc4f0\ub294 \uc758\ubbf8\uc870\ucc28\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h3",{id:"2-\uac00\ub2a5\ud55c-\ud0c0\uc785\uc744-\uc801\uac8c-\uc0ac\uc6a9\ud558\ub294\uac8c-\uc88b\ub2e4"},"2. \uac00\ub2a5\ud55c \ud0c0\uc785\uc744 \uc801\uac8c \uc0ac\uc6a9\ud558\ub294\uac8c \uc88b\ub2e4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function callMap1<Type, Func extends (arg: Type) => Type>(\n  arr: Type[],\n  func: Func,\n): Type[] {\n  return arr.map(func);\n}\n\nfunction callMap2<Type>(arr: Type[], func: (arg: Type) => Type): Type[] {\n  return arr.map(func);\n}\n")),(0,a.yg)("p",null,"\ubb3c\ub860 \uc774 \uc608\uc2dc \ub610\ud55c \uccab\ubc88\uc9f8\ub85c \uc54c\ub824\ub4dc\ub9b0 ",(0,a.yg)("inlineCode",{parentName:"p"},"\ud0c0\uc785\uc740 \uac00\ub2a5\ud55c \uc81c\ud55c\ud558\uc9c0 \ub9d0\ub77c"),"\ub294 \uac83\ub3c4 \uacb9\uce58\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc785\uc744 \uc904\uc774\uace0 \uc81c\ub124\ub9ad\uc774 \uc798 \uc801\uc6a9\ub418\ub294 ",(0,a.yg)("inlineCode",{parentName:"p"},"callMap1")," \uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);