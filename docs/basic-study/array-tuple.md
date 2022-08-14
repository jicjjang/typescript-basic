---
sidebar_position: 2
title: Array, Tuple 타입
description: Array, Tuple 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Array, Tuple 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Array, Tuple 타입" data-rh="true" />
</head>

## Array

배열은 두가지 방식으로 사용할 수 있습니다.
두가지 방식에 차이는 없습니다.

```ts
const arrValue1: Array<string> = ["1", "2", "3"];
const arrValue2: string[] = ["1", "2", "3"];
```

순서대로 강의를 따라 해보셨다면 `@types/node` 패키지를 설치하셨을 겁니다.
Array부분을 cmd 키와 함께 클릭해볼까요?

![array type](/img/basic-study/array/array-type.jpg)

한번에 정의되어있는 곳으로 이동하지 않고 위와 같이 나옵니다.

이번에는 array의 pop 함수를 사용하고 pop 함수를 cmd 클릭 해보겠습니다.

![array type 2](/img/basic-study/array/array-type2.jpg)

한번에 이동을 합니다. 그렇기 때문에 definition 파일이 중복되지 않음을 알 수 있습니다.

Array 는 제네릭으로 타입을 전달받아서 해당 제네릭 타입의 배열을 만듭니다.
length, toString, push, pop 등등 여러 타입들이 정의되어 있음을 볼 수 있습니다.

## Tuple

추가적인 새로운 개념은 아닙니다. Array에 들어갈 요소와 개수를 알고 타입을 미리 지정해두는 방법입니다.
무슨말인지 예제로 알아봅시다.

```ts
const friendList: [string, number][] = [
  ["jed", 10],
  ["ben", 20],
  ["jam", 30],
];
```

활용 방법은 무궁무진하겠으나, 간단하게는 복잡한 object 형식을 대신하여 사용할 수 있을 것입니다.
object 대신 간단하게 사용할 수 있다곤 하였으나, 그 근본적인 성질은 Array와 동일합니다. 따라서 destructuring이나 rest 방식이 모두 가능합니다.

```ts
const friendList: [string, number][] = [
  ["jed", 10],
  ["ben", 20],
  ["jam", 30],
];

const [nickname, age] = friendList[0];

type bestFriendType = [string, number, ...number[]];
const bestFriend1: bestFriendType = ["jed", 20];
const bestFriend2: bestFriendType = ["jed", 20, "t"]; // error!
const bestFriend3: bestFriendType = ["jed", 20, 1];
const bestFriend4: bestFriendType = ["jed", 20, 1, 2];
const bestFriend5: bestFriendType = ["jed", 20, 1, 2, 3];
```

---

기본적인 Array와 Tuple의 문법에 대해 알아봤습니다. 다음 강의에서 뵙겠습니다.
