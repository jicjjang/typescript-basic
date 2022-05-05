---
sidebar_position: 3
title: 언제, 어떻게 사용할 수 있나요?
description: 언제, 어떻게 사용할 수 있나요?
---

<head>
  <meta name="title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="언제, 어떻게 사용할 수 있나요?" data-rh="true" />
  <meta property="og:title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="언제, 어떻게 사용할 수 있나요?" data-rh="true" />
</head>

# 바닐라 자바스크립트

타입스크립트는 어떠한 자바스크립트 환경에서도 사용할 수 있습니다. 브라우저, node, deno 어디든 말이죠!

```ts
const applicationHtml: string = "<section><h1>title</h1></section><section><div>body</div></section>";
document.querySelector("#app")?.insertAdjacentHTML("beforeend", applicationHtml);
```

document에 접근하기 때문에 위 코드는 브라우저 환경임을 바로 알 수 있습니다.

```js
// 지금 이해할 필요 없는 예시!! 바벨의 결과물
"use strict";

var _document$querySelect;

var applicationHtml = "<section><h1>title</h1></section><section><div>body</div></section>";
(_document$querySelect = document.querySelector("#app")) === null || _document$querySelect === void 0
  ? void 0
  : _document$querySelect.insertAdjacentHTML("beforeend", applicationHtml);
```

> 바벨(babel)을 이용해 타입스크립트를 적용한 결과

```js
// 지금 이해할 필요 없는 예시!! tsc의 결과물
var _a;
var applicationHtml = "<section><h1>title</h1></section><section><div>body</div></section>";
(_a = document.querySelector("#app")) === null || _a === void 0
  ? void 0
  : _a.insertAdjacentHTML("beforeend", applicationHtml);
```

> tsc(타입스크립트 컴파일러)을 이용해 타입스크립트를 적용한 결과

자세한 설명은 [typescript 사용 방법(들)](https://jicjjang.github.io/typescript-basic/docs/start/typescript-usage) 를 확인해주세요.

# Node.js

Node.js에서도 복잡한 코드가 아니며, 자바스크립트와 동일한 문법으로 사용 가능합니다.

```ts
// `node -v` 로 버전 확인이 가능합니다.
const version = process.version; // 16.15.0 (강의 기준 node.js 버전)
const splitedVersion: number[] = process.version.split("."); // error! .split()의 결과는 string array

console.log(splitedVersion);
```

하지만 도구의 차이로 인해 babel은 compile 성공, tsc는 compile 실패하게 됩니다.
이 차이도 역시 [typescript 사용 방법(들)](https://jicjjang.github.io/typescript-basic/docs/start/typescript-usage) 를 참고해주세요.

# Deno

![deno](/img/why-typescript/how-when-use-typescript/deno.jpg)

Deno라는 툴이 생소하신 분들이 많으실겁니다.
Deno는 Node.js를 창시한 [라이언달, Ryan Dahl](https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9D%B4%EC%96%B8_%EB%8B%AC)이
만든 javascript + typescript run-time 환경입니다.

javascript는 동적, typescript는 정적 타입 언어, 도구인데 이 둘 모두 run-time 환경에서 실행할 수 있도록 만든 것입니다.

```ts
enum GENDER {
  MAN,
  WOMAN,
  UNKNOWN,
}

interface IHuman {
  name: string;
  age: number;
  gender: GENDER;
}

const person1: IHuman = {
  name: "jed",
  age: 32,
  gender: GENDER.MAN,
  phone: "01012345678", // error!
};

console.log(person1);
```

당장은 생소한 코드일 수 있습니다. 하지만 interface에 없는 property인 `phone`을 넣은 부분에서 에러가 발생하는걸 눈치챌 수 있습니다.

### Reference

[예시 코드 github](https://github.com/jicjjang/typescript-basic-code/tree/why-typescript/how-when-use-typescript)
