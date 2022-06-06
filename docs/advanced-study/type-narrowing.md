---
sidebar_position: 2
title: type narrowing (타입 좁히기)
description: type narrowing (타입 좁히기)
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="type narrowing (타입 좁히기)" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="type narrowing (타입 좁히기)" data-rh="true" />
</head>

`타입 좁히기` 라는 개념은 개발을 하다보면 모르고 있더라도 어느 순간 자연스레 사용하게 됩니다.
특정 값에 여러 타입이 올 수 있도록 정의해 놨을 때, 이 값이 string이냐, number냐에 따라 내장 함수를 쓰게 된다면
분기가 필수적으로 들어가게 되기 때문입니다.

## typeof 타입 가드

알게 모르게 [union](/docs/basic-study/union) 강의에서도 사용이 되었었습니다.

```ts
function unionFunction3(id: string | number) {
  if (typeof id === "string") {
    console.log(id.split("").join(", "));
  } else {
    console.log(id);
  }
}
```

`.split`은 문자열을 분리하여 배열로 만들어주는 문자열 내장 함수입니다. 숫자 타입으로 들어온 경우엔 에러가 발생했겠죠?

## `in` operator

`in` operator를 통해서도 타입을 좁힐 수 있습니다.
이 기능은 `해당 프로퍼티가 타입 내에 있는지 체크` 해주는 기능인데요. 바로 예제로 보겠습니다.

![in operator](/img/advanced-study/type-narrowing/in-operator.jpg)

## union 구분

도형을 만들때 아래와 같은 타입을 정의할 수 있습니다.

```ts
const SHAPE_KIND = {
  CIRCLE: "circle",
  SQUARE: "square",
} as const;
type SHAPE_KIND = typeof SHAPE_KIND[keyof typeof SHAPE_KIND];

interface IShape {
  kind: SHAPE_KIND;
  radius?: number;
  sideLength?: number;
}
```

타입을 조금 더 구분하기 위해선 어떻게 해야할까요? 두 타입을 모두 직접 정의한 뒤, IShape에서 union으로 합치면 됩니다.

```ts
interface ICircle {
  kind: "circle";
  radius: number;
}
interface ISquare {
  kind: "square";
  sideLength: number;
}

type IShape = ICircle | ISquare;

function getArea(shape: IShape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}
```

이처럼 union으로 타입을 좁히기 위해선 상수값의 공통 구분자를 기준으로 조건문을 넣으면 됩니다.
위에서 배운 다른 타입 좁히기와 크게 다르지 않습니다.

## 완전한 타입 체킹

우리가 배웠던 [never](/docs/basic-study/other-return-type#never) 타입을 이용하면 완전한 타입체킹을 할 수 있습니다.

```ts
interface ICircle {
  kind: "circle";
  radius: number;
}
interface ISquare {
  kind: "square";
  sideLength: number;
}

interface ITriangle {
  kind: "triangle";
  sideLength: number;
}

type IShape = ICircle | ISquare | ITriangle;

function getArea(shape: IShape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.sideLength ** 2;
  } else {
    const undefinedShape: never = shape; // Type 'Triangle' is not assignable to type 'never'.
    // 로그 처리 && 에러 처리
    return undefinedShape;
  }
}
```

정의하지 않은 kind에 대해 else로 빠지게 되는 것이 아니라, 정의하라는 에러가 compile 전에 뜨게 되는 것입니다.

---

감사합니다. 다음 강의도 화이팅!
