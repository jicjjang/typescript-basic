---
sidebar_position: 5
title: 기타 return type
description: 기타 return type
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="기타 return type" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="기타 return type" data-rh="true" />
</head>

타입스크립트를 사용하기 위해 알아야 할 기본적인 타입들이 몇가지 더 있습니다.

## Any

any 타입은 말 그대로 어떤 값이든 들어가도 상관 없으며 타입 검사를 스킵하겠다는 의미의 타입입니다.

타입스크립트는 기본적으로 타입이 없다면 any 타입이 들어가도록 설정하는데 이 옵션을 추가한다면
타입이 없을 때, 타입을 지정해달라는 에러가 발생하게 됩니다.

## never

never는 나올 수 없는 상황에 대한 정의 입니다. 숫자에서 0 또한 값이 수가 없음을 의미하는 수인데, 비슷한 역할이라 할 수 있습니다.

```ts
function neverFunction(input: never) {
  throw new Error("Never Exception");
}

var numberValue: number = 10;

if (numberValue >= 10) {
  return "greater equal than 10";
} else if (numberValue < 10) {
  return "lower than 10";
} else {
  // 나올 수 없는 상황!
  return neverFunction(numberValue);
}
```

neverFunction에는 매개변수를 넘겨줘야 하는데, 아무값도 안주거나, 다른 타입, any, undefined, null 등 never가 아닌 어떤 값을 넣어도 에러가 발생합니다.

## void

아시다시피 void는 함수에서 반환이 없을 때 들어가는 타입니다.
타입으로 void가 있다면 void도 할당해줄 수 있을텐데 어떻게 사용될까요?

```ts
var provider: void = DataProvider; // error!
var provider: void; // ok
var provider: void = undefined; // ok
var provider: void = null; // ok
```

void 타입의 변수에는 undefined, null을 제외하곤 아무것도 할당을 할 수 없습니다.
그렇다면 함수에서는 어떻게 될까요?

```ts
// 1
function normalFunction(): void {
  console.log(123);
  return "undefined"; // error!
}

// 2
var arrowFunction1 = (): void => {
  console.log(123);
  return 123; // error!
};
// 3
var arrowFunction2: () => void = () => {
  console.log(123);
  return 123; // ok...?
};
```

함수에서도 역시 잘 동작합니다. 하지만 arrow 함수에서, 함수가 아닌 변수쪽에 return 타입을 함수 전체로 넣었을 때에는 에러가 발생하지 않습니다...! 왜 그런걸까요?
void는 기본적으로 `return 값을 무시한다.` 라는 의미입니다. 따라서 return을 넣어주는게 문제가 되진 않습니다.

15년도에 올라왔던 [이슈에 대한 논의](https://github.com/Microsoft/TypeScript/issues/4544), [이 문제에 대한 설명](https://github.com/microsoft/TypeScript/issues/45247#issuecomment-889808557)입니다.

## unknown

any 타입과 마찬가지로 모든 타입을 할당할 수 있는 타입입니다. 하지만 any 타입의 변수는 모든 타입의 변수에 할당이 가능하지만
unknown은 any를 제외한 어떤 타입의 변수에도 할당을 할 수 없습니다.

```ts
const unknownValue: unknown;

const anyType: any = unknownValue; // ok!
const otherType: string = unknownValue; // error!
```

추가적으로 object의 프로퍼티에 접근, 실행하려고 한다면 에러가 발생합니다. 변수가 어떤 타입인지 모르기 때문입니다.

```ts
const anyValue: any;
const unknownValue: unknown;

anyValue.a.b.c; // ok
unknownValue.a.b.c; // error!

anyValue.toString(); // ok
unknownValue.toString(); // error!

anyValue["test"]; // ok
unknownValue["test"]; // error!

new anyValue(); // ok
new unknownValue(); // error!
```

---

다음 강의도 잘 부탁드립니다~
