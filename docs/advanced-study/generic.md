---
sidebar_position: 1
title: Generic
description: Generic
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Generic" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Generic" data-rh="true" />
</head>

제네릭이란 타입을 변수처럼 넘기는 방식을 말합니다. 유저는 제네릭을 통해 자신만의 타입을 사용할 수 있습니다.

우선 간단한 예시로 확인해보겠습니다.

```ts
function getParam<T>(a: T): T {
  return a;
}

const param1 = getParam<number>("jed"); // error! Argument of type 'string' is not assignable to parameter of type 'number'
const param2 = getParam<string>("jed"); // ok!
```

아주 기초적인 제네릭 코드입니다. T 라는 타입이 어떤 타입인지 명시적으로 넘겨줄 수 있으며, 넘겨준 타입을 제네릭 T로 설정한 부분에 적용할 수 있습니다.

## 제약 조건

제네릭 타입 변수의 `.length` 기능을 사용하고 싶을 때는 어떻게 해야할까요?

```ts
function getParamLength<T>(a: T): T {
  return a.length; // Property 'length' does not exist on type 'T'
}
```

`extends`를 통해 타입에 제한을 둔다면 다른 타입에 대해서는 동작하지 않습니다.
따라서 다른 타입을 제네릭에 넣는다고 정상적으로 동작하지 않습니다.

```ts
function getParam<T extends number>(a: T): T {
  return a;
}

const param1 = getParam<string>("jed"); // error! Type 'string' does not satisfy the constraint 'number'
const param2 = getParam(true); // error! Type 'boolean' does not satisfy the constraint 'number'.
const param3 = getParam<number>(1); // ok!
const param4 = getParam(1); // ok!
```

## 제네릭 제약조건의 좋은 사용 방법

아무래도 복잡한 제네릭이다 보니 비슷한 사용 방법이 여러개 있습니다. 그 중 몇몇 케이스의 좋은 사용방법에 대해 구분해 보겠습니다.

### 1. 타입은 가능한 제한하지 않는것이 좋다

```ts
function getParam1<Type>(arr: Type[]) {
  return arr;
}

function getParam2<Type extends any[]>(arr: Type) {
  return arr;
}

const a = getParam1([1, 2, 3]); // a의 type은 number[]로 추론된다.
const b = getParam2([1, 2, 3]); // b의 type은 any[]로 추론된다.
```

any의 배열을 타입으로 둘거면 애초에 제네릭을 쓰는 의미조차도 없습니다.

### 2. 가능한 타입을 적게 사용하는게 좋다

```ts
function callMap1<Type, Func extends (arg: Type) => Type>(
  arr: Type[],
  func: Func,
): Type[] {
  return arr.map(func);
}

function callMap2<Type>(arr: Type[], func: (arg: Type) => Type): Type[] {
  return arr.map(func);
}
```

물론 이 예시 또한 첫번째로 알려드린 `타입은 가능한 제한하지 말라`는 것도 겹치기 때문에 타입을 줄이고 제네릭이 잘 적용되는 `callMap1` 을 사용하는 것이 좋습니다.

---

감사합니다.
