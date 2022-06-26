---
sidebar_position: 6
title: 유틸리티 타입1
description: 유틸리티 타입1
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="유틸리티 타입1" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="유틸리티 타입1" data-rh="true" />
</head>

## Omit

`Omit<A, B>` 형식으로 할당이 되는데, A에 선택된 요소들에서 B에 선택된 요소들을 제외합니다.

```ts
interface IUser {
  name: string;
  age: number;
  address: string;
  firesnd: IFriend[];
}

type ISimpleUser = Omit<IUser, "address" | "friends">; // name, age
```

이렇게 사용이 가능하며 비슷한 유형의 타입으로 확장할 일이 많을 때 유용하게 사용이 가능합니다.

## Pick

`Pick<A, B>` 형식으로 할당이 되는데, A에 선택된 요소들에서 B에 선택된 요소들만 선택합니다.

```ts
interface IUser {
  name: string;
  age: number;
  address: string;
  firesnd: IFriend[];
}

type ISimpleUser = Pick<IUser, "name" | "age">; // name, age
```

## Exclude

Exclude는 Omit과 비슷합니다. 하지만 일반적인 interface 형식의 타입을 넣는 것이 아니라 union한 타입과 제외할 값을 넣어줍니다.

```ts
type ExcludeType  = <"a" | "b" | "c", "a">; // "b" | "c"
```

## Extract

Exclude의 반대라 Include이려나 했지만, Pick과 비슷한 기능이며 union 타입을 넣어주는 기능의 이름은 Exctract 입니다.

```ts
const OBJECT_VALUE = {
  a: "a",
  b: "b",
  c: "c",
} as const;
type OBJECT_VALUE = typeof OBJECT_VALUE[keyof typeof OBJECT_VALUE]; // "a" | "b" | "c"

type ExtractType  = <"a" | "b" | "c", "b" | "d">; // "a" | "c" // "d"는 없는 값이므로 무시됨.
```

## Pick vs Extract

이들이 가지는 차이점은 뭘까요?

```ts
enum ENUM_VALUE {
  a = "a",
  b = "b",
  c = "c",
}
type OBJECT_VALUE = "a" | "b" | "c";

interface ICommonInterface {
  a: string;
  b: number;
  c: boolean;
}

// Extract
type ExtractEnumType = Extract<ENUM_VALUE, "a" | "b" | "d">; // never
type ExtractObjectType = Extract<OBJECT_VALUE, "a" | "b" | "d">; // "a" | "b"
type IExtractInterfaceType = Extract<ICommonInterface, "a" | "b" | "d">; // never

// Pick
type PickEnumType1 = Pick<ENUM_VALUE, "a" | "b" | "d">; // error!
type PickEnumType2 = Pick<ENUM_VALUE, "a" | "b">; // error!
type PickObjectType1 = Pick<OBJECT_VALUE, "a" | "b" | "d">; // error!
type PickObjectType2 = Pick<OBJECT_VALUE, "a" | "b">; // error!
type IPickInterfaceType1 = Pick<ICommonInterface, "a" | "b">;
type IPickInterfaceType2 = Pick<ICommonInterface, "a" | "b" | "d">; // error!
```

Extract는 첫번째 재네릭으로 enum, union, 인터페이스 모두를 받을 수 있습니다.
하지만 union 티입에만 적용할 수 있습니다.
따라서 매칭하는 값이 없는 enum, 인터페이스는 `never` 라는 결과를 가지게 됩니다.

Pick은 애초에 첫번째 제네릭으로 인터페이스만을 받습니다. 따라서 enum, union 값들 모두 에러가 발생하게 됩니다.

---

감사합니다
