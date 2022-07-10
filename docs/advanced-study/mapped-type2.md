---
sidebar_position: 10
title: Mapped type2
description: Mapped type2
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Mapped type2" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Mapped type2" data-rh="true" />
</head>

## 여러가지 utility type 구현하기

`in operator`를 그대로 넣은 타입은 기본적으로 required 입니다.
`Partial<AnimalMappedType>`으로 변환해주거나 mapped type을 선언해 줄 때 일반적으로 undefined를 허용하는 `?` 연산자를 아래와 같이 넣어줘야 합니다.

```ts
type AnimalMappedType = {
  [id in AnimalType]?: {
    // undefined를 가능하도록 ? 연산자 넣어줘야 함
    id: string;
    age: number;
  };
};
```

이를 이용해 여러가지 유틸리티 타입을 구현해 보겠습니다.

### Pick

기본적인 pick을 사용해보고 해당 타입이 어떤지 살펴보았습니다.
![pick](/img/advanced-study/mapped-type2/pick.jpg)

pick과 같은 유틸리티 타입 또한 자주 쓰는 타입을 타입스크립트에서 미리 구현해놨을 뿐, 그 내부는 유틸리티 타입들의 조합입니다.

```ts
type CustomPick<T, K> = {
  [P in Extract<keyof T, K>]: T[P];
};

type AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";

type AnimalMappedType = {
  [id in AnimalType]: {
    id: string;
    age: number;
  };
};

type Result = CustomPick<AnimalMappedType, "bear" | "cow">;
// 결과
// type Result = {
//   bear: {
//     id: string;
//     age: number;
//   };
//   cow: {
//     id: string;
//     age: number;
//   };
// };
```

이미지로 본 Pick의 타입과 비슷하지만 `K` 타입을 T의 keyof에서 일치하는 타입만 고르도록 변경해봤습니다.

### Omit

```ts
type CustomOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type AnimalType = "lion" | "bear" | "elephant" | "giraffe" | "cow";

type AnimalMappedType = {
  [id in AnimalType]: {
    id: string;
    age: number;
  };
};

type Result = CustomOmit<AnimalMappedType, "bear" | "cow">;
// 결과
// type Result = {
//   lion: {
//     id: string;
//     age: number;
//   };
//   elephant: {
//     id: string;
//     age: number;
//   };
//   giraffe: {
//     id: string;
//     age: number;
//   };
// };
```

---

감사합니다.
