"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[498],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1430:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:11,title:"function overload",description:"function overload"},s=void 0,l={unversionedId:"basic-study/function-overload",id:"basic-study/function-overload",title:"function overload",description:"function overload",source:"@site/docs/basic-study/function-overload.md",sourceDirName:"basic-study",slug:"/basic-study/function-overload",permalink:"/typescript-basic/docs/basic-study/function-overload",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"function overload",description:"function overload"},sidebar:"docsSidebar",previous:{title:"Intersection \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/intersection"},next:{title:"Enum",permalink:"/typescript-basic/docs/basic-study/enum"}},p={},u=[],d={toc:u};function f(t){var e=t.components,c=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{name:"description",content:"function overload","data-rh":"true"}),(0,a.kt)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{property:"og:description",content:"function overload","data-rh":"true"})),(0,a.kt)("p",null,"\uc774\ubc88 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 function overload\ub97c \uc124\uba85\ud558\uae30 \uc804, override, overload, \uac00 \uc5b4\ub5a4 \uac83\uc778\uc9c0 \ubd80\ud130 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"override\ub294 \uae30\uc874\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\ub358 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Animal {\n  eat(food: string) {\n    console.log(food);\n  }\n}\n\nclass Monkey extends Animal {\n  eat(food: string) {\n    console.log(`Monkey eat ${food}`);\n  }\n}\n\nconst monkey = new Monkey();\nmonkey.eat("banana"); // Monkey eat babana\n')),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\ub294 \uae30\ubcf8\uc801\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub3c4 \uc798 \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"overload\ub780 \ud074\ub798\uc2a4 \ub0b4 \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uac00\uc9c4 \uc0dd\uc131\uc790\ub098 \uba54\uc11c\ub4dc\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785, \ub9e4\uac1c\ubcc0\uc218 \uac1c\uc218\ub97c \ubc14\uafd4\uac00\uba70 \uc911\ubcf5\uc73c\ub85c \uc815\uc758\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  eat(food: string) {\n    ...\n  }\n\n  eat(foodCount: number) {\n    ...\n  }\n\n  eat(mainFood: string, ...otherFoods: string[]) {\n    ...\n  }\n}\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud560\uae4c\uc694?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"javascript class overload",src:n(7768).Z,width:"1072",height:"952"})),(0,a.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc774 \uacb0\uacfc\ubb3c\uc744 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \ud574\uacb0\ud560 \uc218 \uc788\uc744\uae4c\uc694?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"typescript class overload",src:n(2333).Z,width:"1392",height:"1052"})),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c\ub3c4 \ud574\uacb0\uc740 \ubd88\uac00\ud569\ub2c8\ub2e4.\n\uc65c \ubd88\uac00\ud55c\uc9c0\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/32102"},"\ud574\ub2f9 \uc774\uc288"),"\ub97c \ubd10\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#overloaded-functions"},"\uacf5\uc2dd\uc801\uc778 \ubb38\uc11c\uc5d0 function overload")," \uc598\uae30\uac00 \uc788\uc73c\ub098, \uc774\ub294 \uae30\ub2a5\uc774 \uc788\ub2e4\uae30\ubcf4\ub2e8 \ud3b8\ubc95\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubc29\ubc95\uc740 \uc704\uc5d0 \uc804\ub2ec\ub4dc\ub9b0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/32102#issuecomment-505829304"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c class overload\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4 \ub9d0\uc500\ub4dc\ub9b0 \uc774\uc288"),"\uc5d0\ub3c4 \ub313\uae00\ub85c \ub2ec\ub838\ub294\ub370\uc694, \uc774\ub97c \uc774\uc6a9\ud574 class\uc5d0\uc11c\ub3c4 overload\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"typescript class overload after",src:n(9397).Z,width:"1400",height:"860"})),(0,a.kt)("p",null,"\ubb3c\ub860 \uc77c\ubc18 \ud568\uc218\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"typescript function overload",src:n(1512).Z,width:"1376",height:"792"})),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uc120\uc5b8\ubd80, \uad6c\ud604\ubd80\ub97c \ub098\ub220\uc11c \uad00\ub9b0\ud55c\ub2e4\uba74 class, function\uc5d0\uc11c \ubaa8\ub450 overload\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/3442"},"\uc774\uc5d0 \ub300\ud55c \ub17c\uc758"),"\ub294 \uc774\uc804\uc5d0\ub3c4 \ud65c\ubc1c\ud558\uac8c \uc774\ub8e8\uc5b4\uc9c4 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c \uc2dc\uac04\uc5d0 \ubd59\uaca0\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0},7768:function(t,e,n){e.Z=n.p+"assets/images/javascript-class-overload-7b4424fef5af016b85a8c1a363e7ea11.jpg"},9397:function(t,e,n){e.Z=n.p+"assets/images/typescript-class-overload-after-531d03e53ac2d548ed446b670b64857a.jpg"},2333:function(t,e,n){e.Z=n.p+"assets/images/typescript-class-overload-884c7c6f3d19f6ed2d343a636aa40958.jpg"},1512:function(t,e,n){e.Z=n.p+"assets/images/typescript-function-overload-ef9d429b754aa9c2621f199eb733b20b.jpg"}}]);