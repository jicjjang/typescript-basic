---
sidebar_position: 4
title: (번외) npm으로 package를 관리한다는 것은
description: (번외) npm으로 package를 관리한다는 것은
---

<head>
  <meta name="title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="(번외) npm으로 package를 설치한다는 것은" data-rh="true" />
  <meta property="og:title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="(번외) npm으로 package를 설치한다는 것은" data-rh="true" />
</head>

Node.js는 2009년에 시작된 프로젝트로 우리가 아주 편하게 사용하는 package manager인 npm은 2011년에 출시가 되었습니다.
그런데 요즘 개발을 할땐 관성적으로 npm init 후, package들을 마구 추가합니다.

처음에는 cdn에서 링크를 가져와 body 최하단에 가장 유명했던 `jquery` 나 기타 필요한 js 파일들을 우겨넣었습니다.

![cdn jquery](/img/start/about-managing-package-with-npm/cdn-jquery.jpg)

프로젝트 규모가 커지면서 어떤 방법으로 package 관리가 진화했는지 알아보겠습니다.

- 사용방법과 코드 스타일을 위주로 봅니다. 자세한 내용은 네이버의 [JavaScript 표준을 위한 움직임: CommonJS와 AMD](https://d2.naver.com/helloworld/12864) post를 참고 부탁드립니다.

## 1. CommonJS

브라우저가 아닌 어떤 곳에서든 자바스크립트를 사용할 수 있게 하기 위한 구조를
우리가 Node.js를 사용할 때 많이 사용하는 `var a = require('...')` 문법이 바로 CommonJS 방식입니다.

```js
// A.js
var $ = require("jquery");

module.exports = $;
exports.version = "10";

// B.js

var jQuery = require("./A");

jQuery.ajax("...");
console.log(jQuery.version);
```

## 2. AMD (The Asynchronous Module Definition)

AMD 방식은 [RequireJS](https://requirejs.org/)라는 유명한 라이브러리를 통해 사용이 되었습니다.

![requie.js](/img/start/about-managing-package-with-npm/requirejs.jpg)

브라우저에서 최적화 되어있으나 다른 환경에서도 사용 가능합니다.

```js
// case 1
define(["jquery"], function ($) {
  $.ajax("...");
  console.log($.version);
});

// case 2
define(["jquery", [ajax, version]], function (ajax, version) {
  ajax("...");
  console.log(version);
});
```

위 예제와 같은 방식으로 AMD 방식이 구현 가능하며 이렇게 구현된 코드는 브라우저, Node.js 환경까지 모두 사용이 가능합니다.

조금 더 심화된 AMD 내용은 [해당 링크](https://d2.naver.com/helloworld/591319)에서 확인할 수 있습니다.

## 3. UMD (Universal Module Definition)

npm이 반 표준으로 정해진 지금은 이와같은 고민이 없겠지만, 표준이 정해지지 않았던 과거에는 자바스크립트 환경에서 라이브러리를 만들 때
CommonJS 방식으로만 만든 라이브러리가 있었고, AMD 방식으로만 만들어진 라이브러리가 있었습니다.

이를 모두 사용할 수 있도록 만들어준 방식이 UMD 방식입니다.

이 방식 또한 [프로젝트](https://github.com/umdjs/umd)로 구성이 되어있었고 아래와 같은 분기를 통해 CommonJS와 AMD 방식을 분기해주는 방식이었습니다.

```js
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jQuery"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jQuery"));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.jQuery);
  }
})(typeof self !== "undefined" ? self : this, function ($) {
  // Use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
});
```

이 분기를 통해 CommonJS, AMD, 일반 browser 등 어떤 환경에 맞춰서도 라이브러리를 사용할 수 있었습니다.

## 추가. ESModule

그동안 CommonJS 방식을 고수하던 Node.js의 v12 부터 [ES Module 방식을 공식적으로 사용](https://nodejs.org/dist./v12.12.0/docs/api/esm.html)할 수 있게 되었습니다.
어려울 것도 없이 `package.json`의 type에 `module` 이란 값만 넣어주면 끝입니다.
(CommonJS 방식도 계속 사용 가능합니다.)

CommonJS와는 어떤 차이가 있을까요?

### CommonJS load

1. 파일 시스템 형식으로 파일 로드
2. 로드할 때, 메인 스레드는 차단
3. 파일 로드 후, 분석, 인스턴스 생성, 결과값 반환
4. 모듈을 실행한 곳에 변수로 반환
5. export

### ES Module load

1. 파일의 구문을 분석하여 원하는 모듈만 가져오는 동작을 반복

- `import { a, b } from 'module';` 에서 a, b를 각각 가져온다는 것.

2. 구문 분석과 모듈을 load하는 동안 메인 스레드 유지
3. 1번의 동작을 반복하는 것이 종료되면 실행
4. export

---

지루한 역사 강의(??)같은 느낌이네요.
package 관리의 방식은 여기까지 알아보고 다음 강의로 뵙겠습니다.
