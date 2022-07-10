---
sidebar_position: 9
title: Mapped type1
description: Mapped type1
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Mapped type1" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Mapped type1" data-rh="true" />
</head>

## Mapped Type

동적으로 object(Map)를 생성한다고 하면 타입을 어떻게 줄 수 있을까요?
예를 들자면 아래와 같은 상황입니다.

```ts
// as-is
const users = [
  {
    id: "jed",
    age: 30,
  },
  {
    id: "tic",
    age: 20,
  },
  {
    id: "tac",
    age: 40,
  },
  {
    id: "toe",
    age: 10,
  },
];

// to-be
const userInfo = {
  jed: {
    id: "jed",
    age: 30,
  },
  tic: {
    id: "tic",
    age: 20,
  },
  tac: {
    id: "tac",
    age: 40,
  },
  toe: {
    id: "toe",
    age: 10,
  },
};
```

userInfo의 type은 어떻게 들어가야 할까요? jed, tic, tac, toe 이후에 다른 유저가 추가될 수도 있습니다.
따라서 아래와 같이 인터페이스를 구성할 수 있습니다.

```ts
interface UserInfoMap {
  [id: string]: {
    id: string;
    age: number;
  };
}
```

string, number, boolean 등이 아닌 union값은 `[id: ANIMAL_TYPE]: {...}`와 같은 방식으로 바로 사용할 수 없습니다.

```ts
type AnimalType = "lion" | "bear" | "elephant" | "giraffe";

interface AnimalMappedInterface {
  [id in AnimalType]: {
    // error! A mapped type may not declare properties or methods.
    id: string;
    age: number;
  };
}

type AnimalMappedType = {
  [id in AnimalType]: {
    id: string;
    age: number;
  };
};

const animalInfo: AnimalMappedType = {
  lion: {
    id: "1",
    age: 10,
  },
  bear: {
    id: "2",
    age: 20,
  },
  elephant: {
    id: "3",
    age: 30,
  },
  giraffe: {
    id: "4",
    age: 40,
  },
};
```

### 사용할 수 없는 패턴

mapped type에서 사용할 수 없는 패턴이 2가지가 있습니다.

1. 위와 같이 `in operator`가 들어가는 코드는 인터페이스에서 사용할 수 없습니다. 예외가 있거나 한 것이 아니기 때문에 꼭 type으로 사용해야 합니다.
2. 타입의 확장입니다.

`in operator`를 포함한 타입을 만들고 타입을 확장하려고 할 때, 추가되는 타입은 [intersection](/docs/basic-study/intersection)을 통해 확장해야 합니다.

---

감사합니다.
