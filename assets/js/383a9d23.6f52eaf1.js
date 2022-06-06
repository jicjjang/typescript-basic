"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[261],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,c(c({ref:t},l),{},{components:n})):o.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:12,title:"Enum",description:"Enum"},u=void 0,s={unversionedId:"basic-study/enum",id:"basic-study/enum",title:"Enum",description:"Enum",source:"@site/docs/basic-study/enum.md",sourceDirName:"basic-study",slug:"/basic-study/enum",permalink:"/typescript-basic/docs/basic-study/enum",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Enum",description:"Enum"},sidebar:"docsSidebar",previous:{title:"function overload",permalink:"/typescript-basic/docs/basic-study/function-overload"},next:{title:"?, ! \uc5f0\uc0b0\uc790",permalink:"/typescript-basic/docs/basic-study/safe-navigation-non-null-assertion"}},l={},p=[],m={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{name:"description",content:"Enum","data-rh":"true"}),(0,a.kt)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,a.kt)("meta",{property:"og:description",content:"Enum","data-rh":"true"})),(0,a.kt)("p",null,"enum\uc740 grouping\ub41c \uc0c1\uc218\uac12\uc758 \ubb36\uc74c\uc73c\ub85c \uc4f0\uae30 \uc88b\ub2e4\uace0 \ud45c\ud604\ud560 \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum API_STATUS {\n  PENDING, // 0\n  WAIT, // 1\n  ERROR, // 2\n}\n\n...\n\nif (status === API_STATUS.PENDING) {\n  ...\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c value\uac00 \uc5c6\uc774 key\uac12\ub9cc \ub098\uc5f4\ud55c\ub2e4\uba74 \uc21c\uc11c\ub300\ub85c 0, 1, 2 \uac12\uc774 \ub4e4\uc5b4\uac00\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'enum FOOD {\n  APPLE = "APPLE",\n  BANANA = "BANANA",\n  MELON = "MELON",\n}\n\nconsole.log(`${FOOD.MELON} is good`); // MELON is good\n')),(0,a.kt)("p",null,"\ube44\uad50\ub97c \uc704\ud55c \uac12\uc774 \uc544\ub2cc \uadf8 \uac12 \uc790\uccb4\uac00 \uc911\uc694\ud560 \ub54c\uc5d0\ub294 \uc9c1\uc811 \ubb38\uc790\uc5f4\uc744 \ud560\ub2f9\ud574\uc918\uc57c \ud569\ub2c8\ub2e4.\n(\ubb3c\ub860 number, boolean\ub4f1 \uc5ec\ub7ec \ud0c0\uc785\uc5d0 \ub300\ud55c \uc124\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.)"),(0,a.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 enum \uc790\uccb4\ub97c \ucd9c\ub825\ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"enum log",src:n(5103).Z,width:"1726",height:"512"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uc0ac\uc2e4 enum\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc5b4\ub835\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc6b0\ub9ac\ub294 \uadf8\ub0e5 object\ub97c \uc4f0\uba74 \ub420\ud150\ub370 \uc65c enum\uc774\ub77c\ub294 \ubcc4\ub3c4\uc758 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c\uc694?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"object type",src:n(4833).Z,width:"1762",height:"600"})),(0,a.kt)("p",null,"object\ub85c \uc0ac\uc6a9\ud574\ub3c4 \ubb38\uc81c\ub294 \uc5c6\uc73c\ub098, \uc0c1\uc218\ub97c \uc0ac\uc6a9\ud558\uace0\uc790 \ud558\ub294 \ub2c8\uc988\ub294 \ucc44\uc6b8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"enum type",src:n(3259).Z,width:"1764",height:"604"})),(0,a.kt)("p",null,"enum\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \ud0c0\uc785\uc774 \uc544\ub2cc \uac12\uc774 \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4. \ub610\ud55c compile \uc2dc \uac12\uc774 \uace0\uc815\ub418\uae30 \ub54c\ubb38\uc5d0 \uac12\ub3c4 \uc218\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 object\ub97c \uc0c1\uc218\ud654 \ud574\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"object type assertion",src:n(9852).Z,width:"1752",height:"596"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"as const")," \ud0a4\uc6cc\ub4dc\ub97c \ud1b5\ud574 object\ub294 \uc0c1\uc218\ud654 \ub418\uace0, \uac12\uc744 \ubc14\ub85c \uc54c \uc218 \uc788\uac8c \ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub807\uac8c\ub9cc object\ub97c \uc4f0\uba74 \ud0c0\uc785 \ucd94\ub860\uc774 \ubd88\uac00\ub2a5\ud558\ubbc0\ub85c \uc544\ub798\uc640 \uac19\uc774 \ubcc0\uc218\uc758 \ud0c0\uc785\uc73c\ub85c \uc9c0\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const OFood = {\n  apple: "1",\n  banana: "2",\n} as const;\n\nfunction foodConsume(food: OFood) { // error!\n  ...\n}\n')),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \ucd94\uac00\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const OFood = {\n  apple: "1",\n  banana: "2",\n} as const;\ntype OFood = typeof OFood[keyof typeof OFood]; // "1" | "2"\n\nfunction foodConsume(food: OFood) { // ok!\n  ...\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uadf8\ub7f0\ub370 enum\uc5d0 \ub300\ud574 \ubc30\uc6b0\ub824\uace0 \ub4e4\uc5b4\uc628\uac74\ub370 \uc8fc\uc81c\uc5d0 \uc5b4\uae0b\ub09c \uc598\uae30\ub4e4\uc744 \ud558\uace0\uc788\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uc65c \uadf8\ub7ac\uc744\uae4c\uc694?\n\ubc14\ub85c enum\uc744 \uc0ac\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c \ud55c\ub2e4\ub294 \uc8fc\uc7a5\uc774 \ub04a\uc784\uc5c6\uc774 \ub098\uc654\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8 \uc774\uc720\ub294 tree shaking \ub54c\ubb38\uc785\ub2c8\ub2e4. enum\ub3c4 \uacb0\uad6d \uac1d\uccb4\uc785\ub2c8\ub2e4. compile\uc774 \ub41c\ub2e4\uba74 enum\uc740 \uac1d\uccb4\ub85c \ub098\uc624\uac8c \ub418\ub294\ub370, \uc77c\ubc18 \uac1d\uccb4\uac00 \uc544\ub2cc IIFE(Immediately Invoked Function Expressions)\ud615\uc2dd\uc758 \uacb0\uacfc\uac00 \ub098\uc624\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"compiled enum",src:n(700).Z,width:"1660",height:"644"})),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c \ubb38\uc81c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"const enum")," \uc744 \uc0ac\uc6a9\ud558\uba74 \ud574\uacb0\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"compiled const enum",src:n(5129).Z,width:"1584",height:"588"})),(0,a.kt)("p",null,"\ub2e8\uc810\uc73c\ub85c\ub294 enum \uc790\uccb4\uc5d0 \uc811\uadfc\ud558\uc9c0 \ubabb\ud558\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub2e8\uc810 \ub9d0\uace0\ub294 enum \uac1d\uccb4\uac00 \ubb34\uc758\ubbf8\ud55c IIFE\ub85c \uc0dd\uc131\ub418\uc9c0 \uc54a\uace0\n\uc0ac\uc6a9\ub418\ub294 \ubd80\ubd84\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\ub9cc \ub4e4\uc5b4\uac00\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc const enum\uc5d0\ub3c4 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ubc14\ub85c tsconfig\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"--isolatedModules")," \uc635\uc158\uc744 true\ub85c \uc124\uc815\ud558\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"compiled const enum after",src:n(3804).Z,width:"1572",height:"702"})),(0,a.kt)("p",null,"\uacb0\uad6d \uc81c\uc77c \ubca0\uc2a4\ud2b8 \uc2dc\ub098\ub9ac\uc624\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"as const (\ud0c0\uc785 \ub2e8\uc5b8) object\uc640 union type")," \uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc0c1\uc218\ud615 \uc77c\ubc18 object\ub97c \uc0ac\uc6a9\ud558\uba70 \ud0c0\uc785\ub3c4 \uc54c \uc218 \uc788\ub294 \ud615\uc2dd\uc778 \uac83\uc774\uc8e0."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"as const union type",src:n(5424).Z,width:"1582",height:"588"})),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uaddc\ubaa8\uac00 \ucee4\uc9d0\uc5d0 \ub530\ub77c enum\ub97c \uc815\ub9d0 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774 \ub54c \uc815\uc758\ub3c4 \ub9ce\uace0 \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\ub3c4 \ub9ce\ub2e4\uba74\n\ud504\ub85c\uc81d\ud2b8\uc5d0 \ub9e4\uc6b0 \uc545\uc601\ud5a5\uc744 \ub07c\uce58\uac8c \ub418\uaca0\uc8e0. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 enum, const enum\uc744 \uc9c0\uc591\ud558\ub294 \uac83\uc774 \uc11c\ube44\uc2a4\uc5d0 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},5424:function(e,t,n){t.Z=n.p+"assets/images/as-const-union-type-d538eb3be68325f1655502338a84fc71.jpg"},3804:function(e,t,n){t.Z=n.p+"assets/images/compiled-const-enum-after-324bd70c3079f4999219fca96ac86a99.jpg"},5129:function(e,t,n){t.Z=n.p+"assets/images/compiled-const-enum-3d204bca215ec982db9ac0f79d69d20d.jpg"},700:function(e,t,n){t.Z=n.p+"assets/images/compiled-enum-2b2afbfdf5837cc30968291f44c7ad1b.jpg"},5103:function(e,t,n){t.Z=n.p+"assets/images/enum-log-a90748014a888c6a7dd86a1f19fc2eb0.jpg"},3259:function(e,t,n){t.Z=n.p+"assets/images/enum-type-70a0979ee83632313d8dd2a0374eb939.jpg"},9852:function(e,t,n){t.Z=n.p+"assets/images/object-type-assertion-1bc5be26c2b86e5cf6c4f630ffb10e05.jpg"},4833:function(e,t,n){t.Z=n.p+"assets/images/object-type-dac59b571bf6b4ac4701bcbb031f20ca.jpg"}}]);