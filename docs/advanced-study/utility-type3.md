---
sidebar_position: 8
title: 유틸리티 타입3
description: 유틸리티 타입3
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="유틸리티 타입3" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="유틸리티 타입3" data-rh="true" />
</head>

## ReturnType

함수의 반환값이 어떤 타입을 가지는지 나타낼 때 사용합니다.

```ts
type fn1Type = ReturnType<() => number>;
const fn1 = (v: boolean): fn1Type => (v ? 1 : 2);
```

ReturnType은 제네릭으로 함수형 타입을 가지고, 해당 결과를 함수의 반환 타입으로 지정해줄 수 있습니다.

![return type without typeof](/img/advanced-study/utility-type3/return-type-without-typeof.jpg)

하지만, 이런식으로 지정할 것이라면 그냥 number로 넣으면 되지 않을까요?

![return type with typeof](/img/advanced-study/utility-type3/return-type-with-typeof.jpg)

union에 값들이 전부 string들이라고 string 과 동일하지 않는것과 동일한 것입니다.

typeof는 enum, union을 배우면서 계속 얘기가 나오고 있습니다.
일반 자바스크립트에서는 string으로 어떤 타입인지 알려주는 역할을 했었는데, 타입스크립트에서 그 역할이 확장되었음을 알 수 있습니다.

## Parameters

typeof를 통해 반환 타입을 추출한것처럼 파라미터 타입도 추출하고 싶습니다.

```ts
const fn = (key: string, options: { a: number; b: string }) => (v ? 1 : 2);
type fnParamType = Parameters<typeof fn>; // [key: string, options: { a: number, b: string }]
```

## NonNullable

null, undefined를 제거해줍니다. Required와 조합으로 유용하게 사용할 수 있습니다.

![non nullable](/img/advanced-study/utility-type3/non-nullable.jpg)

NonNullable을 ReturnType에도 함께 사용할수도 있습니다.

```ts
const fn = (v?: boolean) => (v ? undefined : 2);
type fnType = ReturnType<typeof fn>; // undefuned | 2

type NonNullFnType = NonNullable<fnType>; // 2
```

---

감사합니다
