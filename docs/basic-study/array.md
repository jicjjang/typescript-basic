---
sidebar_position: 2
title: Array 타입
description: Array 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Array 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Array 타입" data-rh="true" />
</head>

배열은 두가지 방식으로 사용할 수 있습니다.
두가지 방식에 차이는 없습니다.

```ts
const arrValue1: Array<string> = ["1", "2", "3"];
const arrValue2: string[] = ["1", "2", "3"];
```

이 두가지 방식의 `string` 부분은 어떤 타입이든 들어갈 수 있습니다.
자바와 같은 언어를 써보셨다면 제네릭이라느 문법을 들어보셨을 것입니다. 이는 뒤에 나올 [타입스크립트 제네릭](/docs/advanced-study/generic) 파트에서 알아보겠습니다.

순서대로 강의를 따라 해보셨다면 `@types/node` 패키지를 설치하셨을 겁니다.
Array부분을 cmd 키와 함께 클릭해볼까요?

![array type](/img/basic-study/array/array-type.jpg)

한번에 정의되어있는 곳으로 이동하지 않고 위와 같이 나옵니다.
오른쪽 네모칸과 같이 중복 정의된 definition 파일이 너무 많으며 우선수위 또한 따져야 하기 때문 입니다.

이번에는 array의 pop 함수를 사용하고 pop 함수를 cmd 클릭 해보겠습니다.

![array type 2](/img/basic-study/array/array-type2.jpg)

한번에 이동을 합니다. 그렇기 때문에 definition 파일이 중복되지 않음을 알 수 있습니다.

Array 는 제네릭으로 타입을 전달받아서 해당 제네릭 타입의 배열을 만듭니다.
length, toString, push, pop 등등 여러 타입들이 정의되어 있음을 볼 수 있습니다.

이 때, Array 타입 대신 ReadonlyArray 타입을 사용하면 push, pop 등의 기존 Array를 변화시키는 함수가 동작하지 않습니다.

---

기본적인 Array의 문법에 대해 알아봤습니다. 다음 강의에서 뵙겠습니다.
