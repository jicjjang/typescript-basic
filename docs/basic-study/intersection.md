---
sidebar_position: 10
title: Intersection 타입
description: Intersection 타입
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Intersection 타입" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Intersection 타입" data-rh="true" />
</head>

union 타입과 반대인 `and`의 의미를 갖습니다. (교집합의 의미라고 보긴 어렵습니다)
`and` 이기 때문에 타입을 합치게 됩니다.

```ts
type IUserName = {
  name: string;
};

type IUserAge = {
  age: number;
};

type IUserJob = {
  job: string;
};

type IUser = IUserName & IUserAge & IUserJob;

function intersectionFunction(user: IUser) {
  console.log(`${user.name}, ${user.age}, ${user.job}`);
}
```

또한 [type vs interface](/docs/basic-study/type-vs-interface)에서 말씀드린 것처럼
interface에서 extends를 써서 intersection을 구현할 수 있습니다.

```ts
interface IUserName {
  name: string;
}

interface IUserAge {
  age: number;
}

interface IUserJob {
  job: string;
}

// OOP 언어들과 달리 여러개의 extends가 가능합니다.
interface IUser extends IUserName, IUserAge, IUserJob {}

function intersectionFunction(user: IUser) {
  console.log(`${user.name}, ${user.age}, ${user.job}`);
}
```

이런 방법은 api가 파편화되는, 프로젝트가 커지는 과정에서 많이 사용되게 됩니다.
api가 많아질 때, 항상 공통으로 들어가는 프로퍼티를 합성해서 보낼 수도 있습니다.

```ts
interface IPagination {
  current: number; // 현재 페이지 정보
  next: number; // 다음 페이지 정보
  size: number; // 페이지 당 post 개수
  ...
}

interface IPage extends IPagination {
  title: string;
  posts: IPost[];
  ...
}
```

---

다음 강에서 뵙겠습니다!
