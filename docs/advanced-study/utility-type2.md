---
sidebar_position: 7
title: 유틸리티 타입2
description: 유틸리티 타입2
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="유틸리티 타입2" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="유틸리티 타입2" data-rh="true" />
</head>

## Partial

Partial은 타입 전체를 옵셔널로 하여 사용할 수 있게 해줍니다.

```ts
interface IUser {
  name: string;
  age: number;
  address: string;
  friends: IFriend[];
  phone?: string;
  email?: string;
}

type ISimpletUser = Partial<IUser>;

const simpleUser: ISimpletUser = {
  name: "jed", // ok!
};
```

## Required

Partial의 반대입니다. 전체 프로퍼티를 모두 필수로 바꿔줍니다.

```ts
interface IUser {
  name: string;
  age: number;
  address: string;
  friends: IFriend[];
  phone?: string;
  email?: string;
}

type ISimpletUser = Partial<IUser>;
type IStrictUser = Required<IUser>;

const simpleUser: ISimpletUser = {
  name: "jed", // ok!
};

// error! 전체가 Required로 바뀌었으니 phone, email도 입력해줘야 함
const strictUser: IStrictUser = {
  name: "jed",
  age: 30,
  address: "Seoul",
  friends: [],
};
```

## Readonly

타입 할당 전에 Readonly로 한번 감싸면 프로퍼티들을 수정할 수 없게 됩니다.

```ts
interface IUser {
  name: string;
  age: number;
  address: string;
  friends: IFriend[];
  phone?: string;
  email?: string;
}

type ISimpletUser = Partial<IUser>;

const simpleUser: Readonly<ISimpletUser> = {
  name: "jed",
};

simpleUser.name = "tai"; // error!
simpleUser.age = 30; // error!
```

## Record

`Record<A, B>` 형태로써 Record에 Union 타입과, 값의 타입을 입력합니다.
object에 어떤 키값들만 올 수 있는지 명확하게 타입을 좁힐 수 있습니다.

```ts
type IA = {
  [key: Union 키 값]: 값의 타입
}
```

이제 예시를 보겠습니다.

```ts
type PageType = "home" | "about" | "contact";

const nav: Record<PageType, string> = {
  about: "/about",
  contact: "/contact",
  home: "/",
};
```

또한 아래처럼 특정 타입을 keyof로 뽑아내 재정의할수도 있습니다.

```ts
interface IUser {
  name: string;
  age: number;
  phone: string;
  isAuth: boolean;
}

type IStringUser = Record<keyof IUser, string>;
// interface IStringUser { // type IStringUser와 동일
//   name: string;
//   age: string;
//   phone: string;
//   isAuth: string;
// }
```

---

감사합니다
