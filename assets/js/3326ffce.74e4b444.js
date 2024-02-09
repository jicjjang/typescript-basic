"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[676],{5788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=c(t),s=a,m=y["".concat(l,".").concat(s)]||y[s]||u[s]||p;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=t(5072),a=(t(1504),t(5788));const p={sidebar_position:10,title:"Mapped type2",description:"Mapped type2"},i=void 0,o={unversionedId:"advanced-study/mapped-type2",id:"advanced-study/mapped-type2",title:"Mapped type2",description:"Mapped type2",source:"@site/docs/advanced-study/mapped-type2.md",sourceDirName:"advanced-study",slug:"/advanced-study/mapped-type2",permalink:"/typescript-basic/docs/advanced-study/mapped-type2",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Mapped type2",description:"Mapped type2"},sidebar:"docsSidebar",previous:{title:"Mapped type1",permalink:"/typescript-basic/docs/advanced-study/mapped-type1"},next:{title:"module",permalink:"/typescript-basic/docs/modularization/module"}},l={},c=[{value:"\uc5ec\ub7ec\uac00\uc9c0 utility type \uad6c\ud604\ud558\uae30",id:"\uc5ec\ub7ec\uac00\uc9c0-utility-type-\uad6c\ud604\ud558\uae30",level:2},{value:"Pick",id:"pick",level:3},{value:"Omit",id:"omit",level:3}],d={toc:c},y="wrapper";function u(e){let{components:n,...p}=e;return(0,a.yg)(y,(0,r.c)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("head",null,(0,a.yg)("meta",{name:"title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{name:"description",content:"Mapped type2","data-rh":"true"}),(0,a.yg)("meta",{property:"og:title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.yg)("meta",{property:"og:description",content:"Mapped type2","data-rh":"true"})),(0,a.yg)("h2",{id:"\uc5ec\ub7ec\uac00\uc9c0-utility-type-\uad6c\ud604\ud558\uae30"},"\uc5ec\ub7ec\uac00\uc9c0 utility type \uad6c\ud604\ud558\uae30"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"in operator"),"\ub97c \uadf8\ub300\ub85c \ub123\uc740 \ud0c0\uc785\uc740 \uae30\ubcf8\uc801\uc73c\ub85c required \uc785\ub2c8\ub2e4.\n",(0,a.yg)("inlineCode",{parentName:"p"},"Partial<AnimalMappedType>"),"\uc73c\ub85c \ubcc0\ud658\ud574\uc8fc\uac70\ub098 mapped type\uc744 \uc120\uc5b8\ud574 \uc904 \ub54c \uc77c\ubc18\uc801\uc73c\ub85c undefined\ub97c \ud5c8\uc6a9\ud558\ub294 ",(0,a.yg)("inlineCode",{parentName:"p"},"?")," \uc5f0\uc0b0\uc790\ub97c \uc544\ub798\uc640 \uac19\uc774 \ub123\uc5b4\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"type AnimalMappedType = {\n  [id in AnimalType]?: {\n    // undefined\ub97c \uac00\ub2a5\ud558\ub3c4\ub85d ? \uc5f0\uc0b0\uc790 \ub123\uc5b4\uc918\uc57c \ud568\n    id: string;\n    age: number;\n  };\n};\n")),(0,a.yg)("p",null,"\uc774\ub97c \uc774\uc6a9\ud574 \uc5ec\ub7ec\uac00\uc9c0 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uad6c\ud604\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h3",{id:"pick"},"Pick"),(0,a.yg)("p",null,"\uae30\ubcf8\uc801\uc778 pick\uc744 \uc0ac\uc6a9\ud574\ubcf4\uace0 \ud574\ub2f9 \ud0c0\uc785\uc774 \uc5b4\ub5a4\uc9c0 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n",(0,a.yg)("img",{alt:"pick",src:t(4956).c,width:"974",height:"194"})),(0,a.yg)("p",null,"pick\uacfc \uac19\uc740 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785 \ub610\ud55c \uc790\uc8fc \uc4f0\ub294 \ud0c0\uc785\uc744 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ubbf8\ub9ac \uad6c\ud604\ud574\ub1a8\uc744 \ubfd0, \uadf8 \ub0b4\ubd80\ub294 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\ub4e4\uc758 \uc870\ud569\uc785\ub2c8\ub2e4."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type CustomPick<T, K> = {\n  [P in Extract<keyof T, K>]: T[P];\n};\n\ntype AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";\n\ntype AnimalMappedType = {\n  [id in AnimalType]: {\n    id: string;\n    age: number;\n  };\n};\n\ntype Result = CustomPick<AnimalMappedType, "bear" | "cow">;\n// \uacb0\uacfc\n// type Result = {\n//   bear: {\n//     id: string;\n//     age: number;\n//   };\n//   cow: {\n//     id: string;\n//     age: number;\n//   };\n// };\n')),(0,a.yg)("p",null,"\uc774\ubbf8\uc9c0\ub85c \ubcf8 Pick\uc758 \ud0c0\uc785\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc ",(0,a.yg)("inlineCode",{parentName:"p"},"K")," \ud0c0\uc785\uc744 T\uc758 keyof\uc5d0\uc11c \uc77c\uce58\ud558\ub294 \ud0c0\uc785\ub9cc \uace0\ub974\ub3c4\ub85d \ubcc0\uacbd\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,a.yg)("h3",{id:"omit"},"Omit"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'type CustomOmit<T, K> = {\n  [P in Exclude<keyof T, K>]: T[P];\n};\n\ntype AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";\n\ntype AnimalMappedType = {\n  [id in AnimalType]: {\n    id: string;\n    age: number;\n  };\n};\n\ntype Result = CustomOmit<AnimalMappedType, "bear" | "cow">;\n// \uacb0\uacfc\n// type Result = {\n//   lion: {\n//     id: string;\n//     age: number;\n//   };\n//   elephant: {\n//     id: string;\n//     age: number;\n//   };\n//   giraffe: {\n//     id: string;\n//     age: number;\n//   };\n// };\n')),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0},4956:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/pick-3759644b9890bb74e4829f93c1c3e973.jpg"}}]);