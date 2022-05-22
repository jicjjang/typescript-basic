"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[774],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),b=o,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1401:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1,title:"String, Number, Boolean \ud0c0\uc785",description:"String, Number, Boolean \ud0c0\uc785"},u=void 0,c={unversionedId:"basic-study/string-number-boolean",id:"basic-study/string-number-boolean",title:"String, Number, Boolean \ud0c0\uc785",description:"String, Number, Boolean \ud0c0\uc785",source:"@site/docs/basic-study/string-number-boolean.md",sourceDirName:"basic-study",slug:"/basic-study/string-number-boolean",permalink:"/typescript-basic/docs/basic-study/string-number-boolean",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"String, Number, Boolean \ud0c0\uc785",description:"String, Number, Boolean \ud0c0\uc785"},sidebar:"docsSidebar",previous:{title:"(\ubc88\uc678) npm\uc73c\ub85c package\ub97c \uad00\ub9ac\ud55c\ub2e4\ub294 \uac83\uc740",permalink:"/typescript-basic/docs/start/about-managing-package-with-npm"},next:{title:"Array, Tuple \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/array-tuple"}},l={},p=[],m={toc:p};function b(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{name:"description",content:"String, Number, Boolean \ud0c0\uc785","data-rh":"true"}),(0,a.kt)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{property:"og:description",content:"String, Number, Boolean \ud0c0\uc785","data-rh":"true"})),(0,a.kt)("p",null,"\uac00\uc7a5 \uc790\uc8fc\uc4f0\uc774\ub294 \ud0c0\uc785\uc778 string, number, boolean\uc5d0 \ub300\ud574 \uc54c\uc544\ubcfc\uac81\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'let stringVar: string = "value";\nconst numberVar: number = 20;\nconst booleanVar: boolean = false;\n\nstringVar = "Test the value change."; // ok\nstringVar = 10; // error\n')),(0,a.kt)("p",null,"\uc544\uc8fc \uc27d\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"[\ubcc0\uc218 \ud615\uc2dd] [\ubcc0\uc218 \uba85]: [\ud0c0\uc785] = [\ubcc0\uc218 \uac12];")," \uc21c\uc11c\uac00 \ub429\ub2c8\ub2e4.\nstring \ud0c0\uc785\uc5d0\ub294 \ubb3c\uc790\uc5f4, number \ud0c0\uc785\uc5d0\ub294 \uc22b\uc790 (\uc815\uc218, \uc2e4\uc218\ud615), boolean\uc5d0\ub294 true/false. \uc6b0\ub9ac\uac00 \uc544\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc640 \ub2e4\ub97c\ubc14 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\ub098 \ub354 \uac04\ub2e8\ud55c \uc608\uc2dc\ub97c \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const version: string = process.version; // 'v16.15.0'\nconst splitedVersion: string[] = process.version.split(\".\"); // ['v16', '15', '0']\nconst splitedNumberVersion: number[] = splitedVersion.map((eachValue: string, index: number) =>\n  parseInt(!index ? eachValue.substring(1) : eachValue, 10)\n);\n\nconst isNumArr: boolean =\n  Array.isArray(splitedNumberVersion) &&\n  splitedNumberVersion.every((eachValue: number) => typeof eachValue === \"number\");\n\nconsole.log(splitedNumberVersion); // [16, 15, 0]\nconsole.log(isNumArr);\n")),(0,a.kt)("p",null,"\uc774\ub300\ub85c \uc0ac\uc6a9\ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774 \uc5d0\ub7ec\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"/docs/basic-study/types"},"types")," \uac15\uc758\uc5d0\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isNumArr")," \ubcc0\uc218\uc640 \uac19\uc740 \uc77c\uc744 \ud560 \ud544\uc694\uac00 \uc788\uc744\uae4c\uc694?\n\uc774\ubbf8 3L\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"splitedNumberVersion")," \ubcc0\uc218\ub97c \ub9cc\ub4e4\uba74\uc11c number \ubc30\uc5f4\uc774 \uc62c \uac83\uc774\ub77c\uace0 \ud0c0\uc785\uc744 \uc9c0\uc815\ud574\ub1a8\uc2b5\ub2c8\ub2e4.\n\uc6b0\ub9ac\uac00 \uc9c0\uc815\ud574 \ub1a8\uae30 \ub54c\ubb38\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.isArray()"),"\ub85c \ud568\uc218\uc778\uc9c0 \uccb4\ud06c\ud558\uace0, \ubc30\uc5f4\uc758 \ubaa8\ub4e0 \uac12\uc774 number \ud0c0\uc785\uc778\uc9c0 \uac80\uc0ac\ud558\ub294 \uc77c\uc740 \ubd88\ud544\uc694\ud569\ub2c8\ub2e4.\n\uc624\ud788\ub824 \ub354 \uc911\uc694\ud55c \uc77c\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"splitedNumberVersion"),"\uc5d0 \uc774\ubbf8 \uc6b0\ub9ac\uac00 \uc815\uc758\ud574\uc900 number \ubc30\uc5f4\uc774 \uc544\ub2cc \uac12\uc774 \ub4e4\uc5b4\uc624\uc9c0 \ubabb\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub294 string, boolean \ubfd0\ub9cc \uc544\ub2cc \ub2e4\ub978 \uac12\ub4e4\uc5d0\ub3c4 \uc720\ud6a8\ud55c \ub0b4\uc6a9\uc774\uba70 \uc911\uc694\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ubb38\ubc95\uc744 \ucc98\uc74c \ubc30\uc6b0\ub294 \uac15\uc758\ub85c \uc544\uc8fc \uc26c\uc6b4 \ub0b4\uc6a9\uc774\uc5c8\uc8e0?\n\uc55e\uc73c\ub85c \uc9c4\ud589\ud558\uac8c \ub420 \uac15\uc758\ub3c4 \uc27d\uac8c\uc27d\uac8c \uc9c4\ud589\ud574\ubd05\uc2dc\ub2e4."))}b.isMDXComponent=!0}}]);