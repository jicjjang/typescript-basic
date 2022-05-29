---
sidebar_position: 7
title: Union 타입
description: Union 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Union 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Union 타입" data-rh="true" />
</head>

union 타입은 우리가 아는 `or` 와 동일합니다. (합집합의 의미라고 보긴 어렵습니다)

```ts
const unionValue1 = string | number = 10; // ok
const unionValue2 = string | number = '10'; // ok
const unionValue3 = string | number = false; // error!
```

union도 타입이기 때문에 함수에도 동일하게 적용 가능합니다.

```ts
function unionFunction(id: string | number) {
  console.log(id.length); // error!
}
```

하지만, 이런 경우에 특정 타입의 함수를 못쓰게 되는 경우가 있습니다.
이럴 땐 타입을 확인하고 특정 타입에서만 가능하도록 처리를 해줘야 합니다.

```ts
function unionFunction3(id: string | number) {
  if (typeof id === "string") {
    console.log(id.split("").join(", "));
  } else {
    console.log(id);
  }
}

function unionFunction4(ids: string | string[]) {
  if (Array.isArray(ids)) {
    console.log(ids.join(", "));
  } else {
    console.log(ids);
  }
}
```

만약 두 타입에 공통으로 속한 프로퍼티 함수라면 별도의 분기 없이 사용이 가능합니다.

```ts
function unionFunction5(ids: number[] | string) {
  console.log(ids.slice(1));
}
```

---

다음 강의도 화이팅!
