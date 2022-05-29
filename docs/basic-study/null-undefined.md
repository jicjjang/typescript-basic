---
sidebar_position: 3
title: null, undefined 타입
description: null, undefined 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="null, undefined 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="null, undefined 타입" data-rh="true" />
</head>

null은 명시적으로 `빈 값으로 할당`하는 것이고, undefined는 `값이 정해지지 않음`을 의미합니다.

비동기로 데이터를 받을 때 데이터가 옵셔널하게 들어오지 않는 경우가 있기도 하고, 연산을 하다가 값을 비워줘야 할 때가 있습니다.
이럴 때 null, undefined 타입을 유용하게 사용할 수 있습니다.

```ts
const nullVar: null = null;
const undefinedVar: undefined = undefined;
```

아니 근데, 위에 처럼 코드를 작성한다면 다른 값을 못넣잖아요?
한가지 방법은 `strictNullChecks` 설정을 false로 두는 것입니다. (tsconfig.json `strict` 설정을 false로)
기본적으로 null, undefined는 모든 타입에 대입이 가능한 타입으로 strict 한 체크가 아니라면 어떤 값에라도 대응이 가능합니다.

```ts
// strictNullChecks false
const num: number = null;
const num: number = undefined;

// strictNullChecks true
const num: number = null; // error!
const num: number = undefined; // error!
```

하지만 strict한 타입 체크 없이는 에러가 생길 수 있습니다. 따라서 기본적으로 `strict` 설정을 true로 주어야 합니다.
그렇다면 다른 타입의 값과 동시에 사용하려면 어떻게 해야 할까요?

이 방법은 조금 뒤 [Union 타입](/docs/basic-study/union)에서 알아보겠습니다.

---

이번 강의도 수고하셨습니다. 다음 강의에서 뵙겠습니다.
