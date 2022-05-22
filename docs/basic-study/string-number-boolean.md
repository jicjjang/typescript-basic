---
sidebar_position: 1
title: String, Number, Boolean 타입
description: String, Number, Boolean 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="String, Number, Boolean 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="String, Number, Boolean 타입" data-rh="true" />
</head>

가장 자주쓰이는 타입인 string, number, boolean에 대해 알아볼겁니다.

```ts
let stringVar: string = "value";
const numberVar: number = 20;
const booleanVar: boolean = false;

stringVar = "Test the value change."; // ok
stringVar = 10; // error
```

아주 쉽습니다. `[변수 형식] [변수 명]: [타입] = [변수 값];` 순서가 됩니다.
string 타입에는 물자열, number 타입에는 숫자 (정수, 실수형), boolean에는 true/false. 우리가 아는 자바스크립트와 다를바 없습니다.

하나 더 간단한 예시를 보겠습니다.

```ts
const version: string = process.version; // 'v16.15.0'
const splitedVersion: string[] = process.version.split("."); // ['v16', '15', '0']
const splitedNumberVersion: number[] = splitedVersion.map((eachValue: string, index: number) =>
  parseInt(!index ? eachValue.substring(1) : eachValue, 10)
);

const isNumArr: boolean =
  Array.isArray(splitedNumberVersion) &&
  splitedNumberVersion.every((eachValue: number) => typeof eachValue === "number");

console.log(splitedNumberVersion); // [16, 15, 0]
console.log(isNumArr);
```

이대로 사용하면 에러가 발생하게 됩니다. 이 에러에 대해서는 [types](/docs/basic-study/types) 강의에서 알아보겠습니다.

`isNumArr` 변수와 같은 일을 할 필요가 있을까요?
이미 3L에서 `splitedNumberVersion` 변수를 만들면서 number 배열이 올 것이라고 타입을 지정해놨습니다.
우리가 지정해 놨기 때문에 `Array.isArray()`로 함수인지 체크하고, 배열의 모든 값이 number 타입인지 검사하는 일은 불필요합니다.
오히려 더 중요한 일은 `splitedNumberVersion`에 이미 우리가 정의해준 number 배열이 아닌 값이 들어오지 못하게 만드는 것이 중요합니다.

이는 string, boolean 뿐만 아닌 다른 값들에도 유효한 내용이며 중요한 부분입니다.

---

타입스크립트 문법을 처음 배우는 강의로 아주 쉬운 내용이었죠?
앞으로 진행하게 될 강의도 쉽게쉽게 진행해봅시다.
