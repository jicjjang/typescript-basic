"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=l(n),y=a,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||i;return n?r.createElement(m,p(p({ref:t},d),{},{components:n})):r.createElement(m,p({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],o={sidebar_position:10,title:"Mapped type2",description:"Mapped type2"},c=void 0,l={unversionedId:"advanced-study/mapped-type2",id:"advanced-study/mapped-type2",title:"Mapped type2",description:"Mapped type2",source:"@site/docs/advanced-study/mapped-type2.md",sourceDirName:"advanced-study",slug:"/advanced-study/mapped-type2",permalink:"/typescript-basic/docs/advanced-study/mapped-type2",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Mapped type2",description:"Mapped type2"},sidebar:"docsSidebar",previous:{title:"Mapped type1",permalink:"/typescript-basic/docs/advanced-study/mapped-type1"},next:{title:"\ud0c0\uc785 \ubaa8\ub4c8\ud654 (type modularization)",permalink:"/typescript-basic/docs/advanced-study/type-modularization"}},d={},u=[{value:"\uc5ec\ub7ec\uac00\uc9c0 utility type \uad6c\ud604\ud558\uae30",id:"\uc5ec\ub7ec\uac00\uc9c0-utility-type-\uad6c\ud604\ud558\uae30",level:2},{value:"Pick",id:"pick",level:3},{value:"Omit",id:"omit",level:3}],s={toc:u};function y(e){var t=e.components,o=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{name:"description",content:"Mapped type2","data-rh":"true"}),(0,i.kt)("meta",{property:"og:title",content:"Advanced \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{property:"og:description",content:"Mapped type2","data-rh":"true"})),(0,i.kt)("h2",{id:"\uc5ec\ub7ec\uac00\uc9c0-utility-type-\uad6c\ud604\ud558\uae30"},"\uc5ec\ub7ec\uac00\uc9c0 utility type \uad6c\ud604\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"in operator"),"\ub97c \uadf8\ub300\ub85c \ub123\uc740 \ud0c0\uc785\uc740 \uae30\ubcf8\uc801\uc73c\ub85c required \uc785\ub2c8\ub2e4.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Partial<AnimalMappedType>"),"\uc73c\ub85c \ubcc0\ud658\ud574\uc8fc\uac70\ub098 mapped type\uc744 \uc120\uc5b8\ud574 \uc904 \ub54c \uc77c\ubc18\uc801\uc73c\ub85c undefined\ub97c \ud5c8\uc6a9\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," \uc5f0\uc0b0\uc790\ub97c \uc544\ub798\uc640 \uac19\uc774 \ub123\uc5b4\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type AnimalMappedType = {\n  [id in AnimalType]?: {\n    // undefined\ub97c \uac00\ub2a5\ud558\ub3c4\ub85d ? \uc5f0\uc0b0\uc790 \ub123\uc5b4\uc918\uc57c \ud568\n    id: string;\n    age: number;\n  };\n};\n")),(0,i.kt)("p",null,"\uc774\ub97c \uc774\uc6a9\ud574 \uc5ec\ub7ec\uac00\uc9c0 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uad6c\ud604\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"pick"},"Pick"),(0,i.kt)("p",null,"\uae30\ubcf8\uc801\uc778 pick\uc744 \uc0ac\uc6a9\ud574\ubcf4\uace0 \ud574\ub2f9 \ud0c0\uc785\uc774 \uc5b4\ub5a4\uc9c0 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"pick",src:n(4826).Z,width:"974",height:"194"})),(0,i.kt)("p",null,"pick\uacfc \uac19\uc740 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785 \ub610\ud55c \uc790\uc8fc \uc4f0\ub294 \ud0c0\uc785\uc744 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ubbf8\ub9ac \uad6c\ud604\ud574\ub1a8\uc744 \ubfd0, \uadf8 \ub0b4\ubd80\ub294 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\ub4e4\uc758 \uc870\ud569\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type CustomPick<T, K> = {\n  [P in Extract<keyof T, K>]: T[P];\n};\n\ntype AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";\n\ntype AnimalMappedType = {\n  [id in AnimalType]: {\n    id: string;\n    age: number;\n  };\n};\n\ntype Result = CustomPick<AnimalMappedType, "bear" | "cow">;\n// \uacb0\uacfc\n// type Result = {\n//   bear: {\n//     id: string;\n//     age: number;\n//   };\n//   cow: {\n//     id: string;\n//     age: number;\n//   };\n// };\n')),(0,i.kt)("p",null,"\uc774\ubbf8\uc9c0\ub85c \ubcf8 Pick\uc758 \ud0c0\uc785\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc ",(0,i.kt)("inlineCode",{parentName:"p"},"K")," \ud0c0\uc785\uc744 T\uc758 keyof\uc5d0\uc11c \uc77c\uce58\ud558\ub294 \ud0c0\uc785\ub9cc \uace0\ub974\ub3c4\ub85d \ubcc0\uacbd\ud574\ubd24\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"omit"},"Omit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type CustomOmit<T, K> = {\n  [P in Exclude<keyof T, K>]: T[P];\n};\n\ntype AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";\n\ntype AnimalMappedType = {\n  [id in AnimalType]: {\n    id: string;\n    age: number;\n  };\n};\n\ntype Result = CustomOmit<AnimalMappedType, "bear" | "cow">;\n// \uacb0\uacfc\n// type Result = {\n//   lion: {\n//     id: string;\n//     age: number;\n//   };\n//   elephant: {\n//     id: string;\n//     age: number;\n//   };\n//   giraffe: {\n//     id: string;\n//     age: number;\n//   };\n// };\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."))}y.isMDXComponent=!0},4826:function(e,t,n){t.Z=n.p+"assets/images/pick-3759644b9890bb74e4829f93c1c3e973.jpg"}}]);