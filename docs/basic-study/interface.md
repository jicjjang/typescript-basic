---
sidebar_position: 9
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
api를 조회하거나 db에서 query의 결과물을 받아 올 때, 단일 primitive 값(number, string, boolean, undefined, null)을
그대로 받아오는 경우는 거의 없습니다. 대부분 object 값을 받아오게 되는데요. 동일한 object를 여러 곳에서 사용해야 할 때,
타입을 변수처럼 저장하는 용도로 사용합니다.

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
