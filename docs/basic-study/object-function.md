---
sidebar_position: 4
title: object, Function 타입
description: object, Function 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="object, Function 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="object, Function 타입" data-rh="true" />
</head>

## object

object를 할당하기 위해서는
`{}`, `object`, `Object` 3가지 방식이 있습니다. 하지만 이 중 `object` 방식만 사용해야 합니다.

우선 `{}` 는 빈 객체를 나타냅니다. 따라서 `object` 와는 다르다고 할 수 있습니다.

다음으로 `Object` 는 전역 객체를 나타냅니다. 다른 여러 object에 영향을 주고싶지 않다면 건드리지 말아야 합니다.

```ts
const objectValue1: objectValue {
  name: "jed",
  age: 30,
  job: "FE Developer",
};
```

하지만 보통 위처럼 `object` 라는 타입만 정의해주는 경우는 실무에서 경험한 바가 드뭅니다.

```ts
const objectValue2: {
  name: string;
  age: number;
  job: string;
} = {
  name: "jed",
  age: 30,
  job: "FE Developer",
};
```

이러한 방식으로 많이 사용하곤 하는데 프로퍼티가 많아질수록 타입 정의와 실제 코드가 두번씩 반복되게 되는 문제가 있습니다. 이는 뒤에 알려드릴 [interface, type](/docs/basic-study/interface)을 이용해 변수처럼 사용할 수 있습니다.

## Function

함수가 기본적으로 가지는 메소드들을 담고있습니다. 그렇다면 이 또한 `Object`와 비슷한 사유로 사용하지 않는 것이 좋겠죠?

이처럼 Function도 object 처럼 Function을 그대로 사용하기 보단 `() => void`와 같은 구조를 사용해야 합니다.

```ts
// 1번
const functionValue1: (name: string, age: number) => string = (name, age) => {
  const result = `${name} is ${age} years old.`;
  console.log(result);
  return result;
};

// 2번
const functionValue2 = (name: string, age: number): string => {
  const result = `${name} is ${age} years old.`;
  console.log(result);
  return result;
};

// 3번
function normalFunction(name: string, age: number): number {
  return 3;
}
```

함수를 구현할 수 있는 방법은 일반 함수가 아닌 arrow 함수도 있지만, 타입스크립트를 사용하는 방법은 총 3가지 입니다.

이 3가지 방법 중 조심해야 하는 케이스 또한 있습니다.
이는 바로 다음장인 [기타 return type](/docs/basic-study/other-return-type)에서 알아보겠습니다.

---

다음 강의도 잘 부탁드립니다!
