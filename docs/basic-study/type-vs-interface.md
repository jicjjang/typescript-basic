---
sidebar_position: 9
title: type vs interface
description: type vs interface
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="type vs interface" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="type vs interface" data-rh="true" />
</head>

interface와 type은 동일한 목적을 위해 사용됩니다. 그렇기 때문에 이 둘은 서로 크게 다르지 않고, 호환 또한 가능합니다.

```ts
type IUserInfo = {
  name: string;
  age: number;
  job: string;
};

export function printUserInfo(user: IUserInfo) {
  console.log("name: " + user.name);
  console.log("age: " + user.age);
  console.log("job: " + user.job);
}

printUserInfo({ name: "jed", age: 30, job: "FE Developer" });
```

첫번째로 interface는 object만 가능하지만, type는 primitive 타입도 넣어줄 수 있다는 것입니다.

```ts
type IUserName = string;
type IUserAge = number;
type IUserJob = string;

function checkValidUser(name: IUserName, age: IUserAge, job: IUserJob) {
  return job.toLowerCase().includes('developer'));
}

checkValidUser({ name: "ben", age: 40, job: "BE Developer" });
```

두번째로 interface는 extends를 통해 타입을 확장하고, type은 & 연산자를 통해 타입을 확장합니다.
[& 연상자(intersection)](/docs/basic-study/intersection)은 바로 다음장에서 알아보도록 합시다.

```ts
interface IUserName {
  name: string;
}

// IUser는 결과적으로 name, age, job 3개의 프로퍼티를 가짐
interface IUser extends IUserName {
  age: number;
  job: string;
}

// -------------------------------------------

type IUserName = string;

// IUser는 결과적으로 name, age, job 3개의 프로퍼티를 가짐
type IUser = IUserName & {
  age: number;
  job: string;
};
```

마지막으로 interface는 재정의가 가능, type은 불가능합니다.

```ts
interface IUser {
  name: string;
}

interface IUser {
  age: number;
}

interface IUser {
  job: string;
}

// IUser => name, age, job 3개의 프로퍼티가 있음

// -------------------------------------

type IUser = {
  name: string;
};

type IUser = {
  age: numb;
}; // Duplicate identifier error!
```

---

다음 장에서 뵙겠습니다.
