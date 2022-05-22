"use strict";(self.webpackChunktypescript_basic=self.webpackChunktypescript_basic||[]).push([[626],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,b=d["".concat(c,".").concat(y)]||d[y]||l[y]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6524:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:2,title:"Array, Tuple \ud0c0\uc785",description:"Array, Tuple \ud0c0\uc785"},c=void 0,s={unversionedId:"basic-study/array-tuple",id:"basic-study/array-tuple",title:"Array, Tuple \ud0c0\uc785",description:"Array, Tuple \ud0c0\uc785",source:"@site/docs/basic-study/array-tuple.md",sourceDirName:"basic-study",slug:"/basic-study/array-tuple",permalink:"/typescript-basic/docs/basic-study/array-tuple",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Array, Tuple \ud0c0\uc785",description:"Array, Tuple \ud0c0\uc785"},sidebar:"docsSidebar",previous:{title:"String, Number, Boolean \ud0c0\uc785",permalink:"/typescript-basic/docs/basic-study/string-number-boolean"},next:{title:"null, undefined type",permalink:"/typescript-basic/docs/basic-study/null-undefined"}},u={},l=[{value:"Array",id:"array",level:2},{value:"Tuple",id:"tuple",level:2}],d={toc:l};function y(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{name:"description",content:"Array, Tuple \ud0c0\uc785","data-rh":"true"}),(0,i.kt)("meta",{property:"og:title",content:"Basic \ud559\uc2b5 | \uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","data-rh":"true"}),(0,i.kt)("meta",{property:"og:description",content:"Array, Tuple \ud0c0\uc785","data-rh":"true"})),(0,i.kt)("h2",{id:"array"},"Array"),(0,i.kt)("p",null,"\ubc30\uc5f4\uc740 \ub450\uac00\uc9c0 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub450\uac00\uc9c0 \ubc29\uc2dd\uc5d0 \ucc28\uc774\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const arrValue1: Array<string> = ["1", "2", "3"];\nconst arrValue2: string[] = ["1", "2", "3"];\n')),(0,i.kt)("p",null,"\uc774 \ub450\uac00\uc9c0 \ubc29\uc2dd\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \ubd80\ubd84\uc740 \uc5b4\ub5a4 \ud0c0\uc785\uc774\ub4e0 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc790\ubc14\uc640 \uac19\uc740 \uc5b8\uc5b4\ub97c \uc368\ubcf4\uc168\ub2e4\uba74 \uc81c\ub124\ub9ad\uc774\ub77c\ub290 \ubb38\ubc95\uc744 \ub4e4\uc5b4\ubcf4\uc168\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ub4a4\uc5d0 \ub098\uc62c ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-study/generic"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc81c\ub124\ub9ad")," \ud30c\ud2b8\uc5d0\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc21c\uc11c\ub300\ub85c \uac15\uc758\ub97c \ub530\ub77c \ud574\ubcf4\uc168\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/node")," \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\uc168\uc744 \uac81\ub2c8\ub2e4.\nArray\ubd80\ubd84\uc744 cmd \ud0a4\uc640 \ud568\uaed8 \ud074\ub9ad\ud574\ubcfc\uae4c\uc694?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"array type",src:r(6023).Z,width:"2398",height:"794"})),(0,i.kt)("p",null,"\ud55c\ubc88\uc5d0 \uc815\uc758\ub418\uc5b4\uc788\ub294 \uacf3\uc73c\ub85c \uc774\ub3d9\ud558\uc9c0 \uc54a\uace0 \uc704\uc640 \uac19\uc774 \ub098\uc635\ub2c8\ub2e4.\n\uc624\ub978\ucabd \ub124\ubaa8\uce78\uacfc \uac19\uc774 \uc911\ubcf5 \uc815\uc758\ub41c definition \ud30c\uc77c\uc774 \ub108\ubb34 \ub9ce\uc73c\uba70 \uc6b0\uc120\uc218\uc704 \ub610\ud55c \ub530\uc838\uc57c \ud558\uae30 \ub54c\ubb38 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 array\uc758 pop \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uace0 pop \ud568\uc218\ub97c cmd \ud074\ub9ad \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"array type 2",src:r(9589).Z,width:"1746",height:"1090"})),(0,i.kt)("p",null,"\ud55c\ubc88\uc5d0 \uc774\ub3d9\uc744 \ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 definition \ud30c\uc77c\uc774 \uc911\ubcf5\ub418\uc9c0 \uc54a\uc74c\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"Array \ub294 \uc81c\ub124\ub9ad\uc73c\ub85c \ud0c0\uc785\uc744 \uc804\ub2ec\ubc1b\uc544\uc11c \ud574\ub2f9 \uc81c\ub124\ub9ad \ud0c0\uc785\uc758 \ubc30\uc5f4\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.\nlength, toString, push, pop \ub4f1\ub4f1 \uc5ec\ub7ec \ud0c0\uc785\ub4e4\uc774 \uc815\uc758\ub418\uc5b4 \uc788\uc74c\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \ub54c, Array \ud0c0\uc785 \ub300\uc2e0 ReadonlyArray \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 push, pop \ub4f1\uc758 \uae30\uc874 Array\ub97c \ubcc0\ud654\uc2dc\ud0a4\ub294 \ud568\uc218\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"tuple"},"Tuple"),(0,i.kt)("p",null,"\ud29c\ud50c\uc740 \uc6d0\ub798 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uc0dd\uc18c\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4. \ud30c\uc774\uc36c\uc5d0\uc11c \ubcf8 \uae30\uc5b5\uc740 \uc788\uc9c0\ub9cc\uc694.\n\ucd94\uac00\uc801\uc778 \uc0c8\ub85c\uc6b4 \uac1c\ub150\uc740 \uc544\ub2d9\ub2c8\ub2e4. Array\uc5d0 \ub4e4\uc5b4\uac08 \uc694\uc18c\uc640 \uac1c\uc218\ub97c \uc54c\uace0 \ud0c0\uc785\uc744 \ubbf8\ub9ac \uc9c0\uc815\ud574\ub450\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\ubb34\uc2a8\ub9d0\uc778\uc9c0 \uc608\uc81c\ub85c \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const friendList: [string, number][] = [\n  ["jed", 10],\n  ["ben", 20],\n  ["jam", 30],\n];\n')),(0,i.kt)("p",null,"\ud65c\uc6a9 \ubc29\ubc95\uc740 \ubb34\uad81\ubb34\uc9c4\ud558\uaca0\uc73c\ub098, \uac04\u3137\ub098\ud558\uac8c\ub294 \ubcf5\uc7a1\ud55c object \ud615\uc2dd\uc744 \ub300\uc2e0\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4.\nobject \ub300\uc2e0 \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace4 \ud558\uc600\uc73c\ub098, \uadf8 \uadfc\ubcf8\uc801\uc778 \uc131\uc9c8\uc740 Array\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c destructuring\uc774\ub098 rest \ubc29\uc2dd\uc774 \ubaa8\ub450 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const friendList: [string, number][] = [\n  ["jed", 10],\n  ["ben", 20],\n  ["jam", 30],\n];\n\nconst [nickname, age] = friendList[0];\n\ntype bestFriendType = [string, number, ...number[]];\nconst bestFriend1: bestFriendType = ["jed", 20];\nconst bestFriend2: bestFriendType = ["jed", 20, "t"]; // error!\nconst bestFriend3: bestFriendType = ["jed", 20, 1];\nconst bestFriend4: bestFriendType = ["jed", 20, 1, 2];\nconst bestFriend5: bestFriendType = ["jed", 20, 1, 2, 3];\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\uae30\ubcf8\uc801\uc778 Array\uc640 Tuple\uc758 \ubb38\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd24\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uac15\uc758\uc5d0\uc11c \ubd59\uaca0\uc2b5\ub2c8\ub2e4."))}y.isMDXComponent=!0},6023:function(e,t,r){t.Z=r.p+"assets/images/array-type-1a35c1dba86fb467a19c907e6c5bcf69.jpg"},9589:function(e,t,r){t.Z=r.p+"assets/images/array-type2-4d1f15fbf71d5b93cdd8f7627aecceab.jpg"}}]);