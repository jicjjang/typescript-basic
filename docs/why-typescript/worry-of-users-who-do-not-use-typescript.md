---
sidebar_position: 2
title: 타입스크립트를 사용하지 않는 유저들의 걱정
description: 타입스크립트를 사용하지 않는 유저들의 걱정
---

<head>
  <meta name="title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입스크립트를 사용하지 않는 유저들의 걱정" data-rh="true" />
  <meta property="og:title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입스크립트를 사용하지 않는 유저들의 걱정" data-rh="true" />
</head>

## 1. 러닝커브가 크지 않나요?

타입스크립트는 하나하나 적용해줄 수 있습니다. 즉시 모든 변수, 함수에 모든 타입을 지정해줄 필요는 없습니다.

```ts
var wheel1 = "";
var wheel2 = "";

// 여기선 타입을 지정하고
function car1(param: string) {
  wheel1 = param;
}

car1(10); // 에러!

// 여기선 타입을 지정하지 않고
function car2(param) {
  wheel2 = param;
}

car2(20); // 정상 동작
```

위 예제코드처럼 특정 함수에는 타입 지정을, 특정 함수에는 타입을 지정하지 않는 방식으로 개발을 진행하면 됩니다.

## 2. 자바처럼 타입 체크를 하게되면 run-time 언어인 자바스크립트의 장점이 없어지지 않나요?

타입스크립트를 사용한다는 것이 `동적 타입 언어`로써의 특징을 버린다는 것은 아닙니다.

```ts
var wheel1 = "";
var wheel2 = "";

// 여기선 타입을 지정하고
function car1(param: string) {
  wheel1 = param;
}

car1(10); // 에러!

// 여기선 타입을 지정하지 않고
function car2(param) {
  wheel2 = param;
}

car2(20); // 정상 동작

console.log(wheel1);
console.log(wheel2);
```

에러는 발생하지만 타입스크립트 build 후에 자바스크립트가 되기 때문에 run time의 속성을 가지고 있으며
wheel1, wheel2의 값이 정상적으로 출력됩니다.

## 3. 업데이트는 잘 되고 있나요?

[타입스크립트 release note](https://github.com/microsoft/TypeScript/releases) 를 보면
v4.6까지 나왔으며 v4.7 beta 또한 개발이 진행 중입니다.
업데이트는 매우 빈번히 진행되고 있습니다. 또한 업데이트에 맞춰 문서도 잘 정리되어 있습니다.

![stable version](/img/why-typescript/worry-of-users-who-do-not-use-typescript/stable-version.jpg)

## 4. 자바스크립트로 이미 다 만들어 왔는데, 타입스크립트를 어떻게 적용하나요?

**타입스크립트 적용 (.ts) or declaration 파일 (\*.d.ts) 생성**

declaration 파일은 타입스크립트를 적용시키지 않은 코드의 타입을 추론할 수 있게 도와주는 방법입니다.
아래 그림에서의 interface 역할을 합니다.

![interface](/img/why-typescript/worry-of-users-who-do-not-use-typescript/interface.jpg)

## 5. 다른 타입 체킹 도구는 없는지

### 1. JSDoc

유사한 역할을 하는 도구로는 jsdoc이 있습니다. type을 주석으로 넣어 체크를 하는 방식입니다.

```js
/**
 * @type {number}
 */
let num;
```

### 2 . Flow

React를 사용한다면 [Flow](https://flow.org/) 를 사용할 수 있습니다.
이는 [React 문서](https://ko.reactjs.org/docs/static-type-checking.html)에서 살펴볼 수 있습니다.

![flow](/img/why-typescript/worry-of-users-who-do-not-use-typescript/flow.jpg)
