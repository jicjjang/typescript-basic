---
sidebar_position: 8
title: interface
description: interface
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="interface" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="interface" data-rh="true" />
</head>

타입스크립트의 꽃이라고 할 수 있는 interface 입니다.
보통 object의 타입을 지정하는 용도로 사용해줍니다.

```ts
// UserInfo.ts
export interface IUserInfo {
  name: string;
  age: number;
  job: string;
}

export function printUserInfo(user: IUserInfo) {
  console.log("name: " + user.name);
  console.log("age: " + user.age);
  console.log("job: " + user.job);
}

printUserInfo({ name: "jed", age: 30, job: "FE Developer" });
```

다른 파일에서 interface를 사용할 땐 기존 모듈과 동일하게 가져옵니다.
위 예시처럼 interface도 export해야 외부에서 사용 가능합니다.

```ts
import { IUserInfo } from "./UserInfo";

const user: IUserInfo = {
  name: "ben",
  age: 40,
  job: "BE Developer",
};

function checkValidUser(user: IUserInfo) {
  return job.toLowerCase().includes('developer'));
}

checkValidUser(user);
...
```

---

다음 강의에서 뵙겠습니다.
