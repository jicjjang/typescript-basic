"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[748],{5788:(e,t,n)=>{n.d(t,{Iu:()=>y,yg:()=>m});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return n?r.createElement(m,i(i({ref:t},y),{},{components:n})):r.createElement(m,i({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var r=n(5072),a=(n(1504),n(5788));const c={sidebar_position:6,title:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851",description:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851"},i=void 0,p={unversionedId:"advanced-study/utility-type1",id:"advanced-study/utility-type1",title:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851",description:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851",source:"@site/docs/advanced-study/utility-type1.md",sourceDirName:"advanced-study",slug:"/advanced-study/utility-type1",permalink:"/typescript-basic/docs/advanced-study/utility-type1",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851",description:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851"},sidebar:"docsSidebar",previous:{title:"\ud0c0\uc785 \ud638\ud658 (type compatibility)",permalink:"/typescript-basic/docs/advanced-study/type-compatibility"},next:{title:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7852",permalink:"/typescript-basic/docs/advanced-study/utility-type2"}},o={},l=[{value:"Omit",id:"omit",level:2},{value:"Pick",id:"pick",level:2},{value:"Exclude",id:"exclude",level:2},{value:"Extract",id:"extract",level:2},{value:"Pick vs Extract",id:"pick-vs-extract",level:2}],y={toc:l},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("head",null,(0,a.yg)("meta",{name:"title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{name:"description",content:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851","data-rh":"true"}),(0,a.yg)("meta",{property:"og:title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{property:"og:description",content:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc7851","data-rh":"true"})),(0,a.yg)("h2",{id:"omit"},"Omit"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Omit<A, B>")," \ud615\uc2dd\uc73c\ub85c \ud560\ub2f9\uc774 \ub418\ub294\ub370, A\uc5d0 \uc120\ud0dd\ub41c \uc694\uc18c\ub4e4\uc5d0\uc11c B\uc5d0 \uc120\ud0dd\ub41c \uc694\uc18c\ub4e4\uc744 \uc81c\uc678\ud569\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'interface IUser {\n  name: string;\n  age: number;\n  address: string;\n  firesnd: IFriend[];\n}\n\ntype ISimpleUser = Omit<IUser, "address" | "friends">; // name, age\n')),(0,a.yg)("p",null,"\uc774\ub807\uac8c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uba70 \ube44\uc2b7\ud55c \uc720\ud615\uc758 \ud0c0\uc785\uc73c\ub85c \ud655\uc7a5\ud560 \uc77c\uc774 \ub9ce\uc744 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"pick"},"Pick"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Pick<A, B>")," \ud615\uc2dd\uc73c\ub85c \ud560\ub2f9\uc774 \ub418\ub294\ub370, A\uc5d0 \uc120\ud0dd\ub41c \uc694\uc18c\ub4e4\uc5d0\uc11c B\uc5d0 \uc120\ud0dd\ub41c \uc694\uc18c\ub4e4\ub9cc \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'interface IUser {\n  name: string;\n  age: number;\n  address: string;\n  firesnd: IFriend[];\n}\n\ntype ISimpleUser = Pick<IUser, "name" | "age">; // name, age\n')),(0,a.yg)("h2",{id:"exclude"},"Exclude"),(0,a.yg)("p",null,"Exclude\ub294 Omit\uacfc \ube44\uc2b7\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc77c\ubc18\uc801\uc778 interface \ud615\uc2dd\uc758 \ud0c0\uc785\uc744 \ub123\ub294 \uac83\uc774 \uc544\ub2c8\ub77c union\ud55c \ud0c0\uc785\uacfc \uc81c\uc678\ud560 \uac12\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type ExcludeType  = <"a" | "b" | "c", "a">; // "b" | "c"\n')),(0,a.yg)("h2",{id:"extract"},"Extract"),(0,a.yg)("p",null,"Exclude\uc758 \ubc18\ub300\ub77c Include\uc774\ub824\ub098 \ud588\uc9c0\ub9cc, Pick\uacfc \ube44\uc2b7\ud55c \uae30\ub2a5\uc774\uba70 union \ud0c0\uc785\uc744 \ub123\uc5b4\uc8fc\ub294 \uae30\ub2a5\uc758 \uc774\ub984\uc740 Exctract \uc785\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const OBJECT_VALUE = {\n  a: "a",\n  b: "b",\n  c: "c",\n} as const;\ntype OBJECT_VALUE = typeof OBJECT_VALUE[keyof typeof OBJECT_VALUE]; // "a" | "b" | "c"\n\ntype ExtractType  = <"a" | "b" | "c", "b" | "d">; // "a" | "c" // "d"\ub294 \uc5c6\ub294 \uac12\uc774\ubbc0\ub85c \ubb34\uc2dc\ub428.\n')),(0,a.yg)("h2",{id:"pick-vs-extract"},"Pick vs Extract"),(0,a.yg)("p",null,"\uc774\ub4e4\uc774 \uac00\uc9c0\ub294 \ucc28\uc774\uc810\uc740 \ubb58\uae4c\uc694?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'enum ENUM_VALUE {\n  a = "a",\n  b = "b",\n  c = "c",\n}\ntype OBJECT_VALUE = "a" | "b" | "c";\n\ninterface ICommonInterface {\n  a: string;\n  b: number;\n  c: boolean;\n}\n\n// Extract\ntype ExtractEnumType = Extract<ENUM_VALUE, "a" | "b" | "d">; // never\ntype ExtractObjectType = Extract<OBJECT_VALUE, "a" | "b" | "d">; // "a" | "b"\ntype IExtractInterfaceType = Extract<ICommonInterface, "a" | "b" | "d">; // never\n\n// Pick\ntype PickEnumType1 = Pick<ENUM_VALUE, "a" | "b" | "d">; // error!\ntype PickEnumType2 = Pick<ENUM_VALUE, "a" | "b">; // error!\ntype PickObjectType1 = Pick<OBJECT_VALUE, "a" | "b" | "d">; // error!\ntype PickObjectType2 = Pick<OBJECT_VALUE, "a" | "b">; // error!\ntype IPickInterfaceType1 = Pick<ICommonInterface, "a" | "b">;\ntype IPickInterfaceType2 = Pick<ICommonInterface, "a" | "b" | "d">; // error!\n')),(0,a.yg)("p",null,"Extract\ub294 \uccab\ubc88\uc9f8 \uc7ac\ub124\ub9ad\uc73c\ub85c enum, union, \uc778\ud130\ud398\uc774\uc2a4 \ubaa8\ub450\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc union \ud2f0\uc785\uc5d0\ub9cc \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ub9e4\uce6d\ud558\ub294 \uac12\uc774 \uc5c6\ub294 enum, \uc778\ud130\ud398\uc774\uc2a4\ub294 ",(0,a.yg)("inlineCode",{parentName:"p"},"never")," \ub77c\ub294 \uacb0\uacfc\ub97c \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,a.yg)("p",null,"Pick\uc740 \uc560\ucd08\uc5d0 \uccab\ubc88\uc9f8 \uc81c\ub124\ub9ad\uc73c\ub85c \uc778\ud130\ud398\uc774\uc2a4\ub9cc\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c enum, union \uac12\ub4e4 \ubaa8\ub450 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4"))}s.isMDXComponent=!0}}]);