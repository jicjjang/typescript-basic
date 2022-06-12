---
sidebar_position: 4
title: 타입 추론 (Literal type and inference)
description: 타입 추론 (Literal type and inference)
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입 추론 (Literal type and inference)" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입 추론 (Literal type and inference)" data-rh="true" />
</head>

기본적으로 변수마다 타입을 지정해주지 않고 값을 넣어주면 해당하는 값의 타입에 따라 변수의 타입이 자동으로 추론됩니다.

```ts
let inferenceValue1 = 10; // 타입이 number로 추론됨
let inferenceValue2 = "test"; // 타입이 string로 추론됨
let inferenceValue3 = true; // 타입이 boolean으로 추론됨
```

따라서 변수에 다른 값을 넣을때도 처음에 넣은 타입에 맞춰서 값을 넣어줘야 합니다.

타입이 섞여있을 땐 들어간 모든 타입의 배열이 가능하다는 추론이 됩니다.

```ts
let inferenceArray = [1, true, "3", [], {}]; // let inferenceArray: (number | boolean | string | [] | {})[]
```

object의 키 값들에 대한 타입 추론은 조금 다른 방식으로 사용됩니다.

![type inference error](/img/advanced-study/literal-type-and-inference/type-inference-error.jpg)

이 문제를 object에 특정 프로퍼티로 들어간 값은 상수값으로 처리되지 않는것이 문제입니다. 해결하는건 어렵지 않습니다.

```ts
foodConsume(food2.apple as "apple");
foodConsume(food2.apple as FOOD_TYPE);
```

위처럼 우리가 생각했던 상수 값이나, 미리 지정해놓은 `FOOD_TYPE` 값이 들어갈 것이라고 [타입 단언](/docs/advanced-study/type-assertion)을 해주면 됩니다.

---

감사합니다.
