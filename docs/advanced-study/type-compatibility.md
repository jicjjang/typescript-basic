---
sidebar_position: 5
title: 타입 호환 (type compatibility)
description: 타입 호환 (type compatibility)
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입 호환 (type compatibility)" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입 호환 (type compatibility)" data-rh="true" />
</head>

아래 예제는 IBird 타입을 가진 animal 객체에 Animal 클래스의 인스턴스를 넣는 예제입니다.

```ts
interface IBird {
  name: string;
}
class Animal {
  name: string;
}
let animal: IBird;

animal = new Animal(); // ok! 구조적 타이핑이기 때문
```

타입스크립트의 구조적 타이핑 특성 때문에 이러한 할당이 가능합니다.

## 구조적 타이핑

자바나 c++ 같은 타입 언어(명목적 타이핑)에서는 Animal에서 IBird를 상속해 구현하지 않았기 때문에 에러가 발생하지만,
타입스크립트는 구조적 타이핑 (=덕 타이핑)구조이기 때문에 에러가 발생하지 않습니다.

```ts
interface IPage {
  size: number;
  nextId: string;
}

function showPageData(page: IPage) {
  console.log(`${page.size}, ${page.nextId}`);
}

const nextPage = { size: 20, nextId: "alksdjfnkadslnfjkadsfnkl" };
printPoint(point);
```

`nextPage`는 따로 상속받아 구현한 구조가 아닌 일반 객체지만, 구조가 동일하기 때문에 사용이 가능합니다.

이렇게 구조만 맞다면 사용 가능한 방식이 `구조적 타이핑`입니다.

## 함수 비교

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // ok!
x = y; // error!
```

우선 서로 다른 함수의 호환성을 알아볼 때 매개변수의 이름은 중요치 않습니다. 각 타입만 비교합니다. 또한 x, y의 return 타입은 동일합니다.

## Enum

열거형은 숫자와 상호 호환이 되지만 열거형끼리의 호환은 불가능합니다.

```ts
enum DUCK {
  EAT,
  LAY,
}

enum MONKEY {
  EAT,
  RUN,
  JUMP,
}

let animal = DUCK.EAT;
animal = MONKEY.EAT; // error!
```

## Class

클래스의 호환성 비교는 `static 변수, 메서드`, `생성자`를 제외하고 비교합니다.

![class type compatibility](/img/advanced-study/type-compatibility/class-type-compatibility.jpg)

## Generic

제네릭은 타입이 멤버의 타입의 일부로 사용할 때 결과만 봅니다.

```ts
interface IEmptyInterface<T> {}

let x: IEmptyInterface<number>;
let y: IEmptyInterface<string>;

x = y; // ok!
y = x; // ok!
```

`IEmptyInterface` 인터페이스에서는 서로 다른 타입의 T를 주입하였지만, T 타입을 아무곳에서 사용하지 않았기 때문에 x, y는 서로 할당이 가능합니다.

```ts
interface INotEmptyInterface<T> {
  value: T;
}

let x: INotEmptyInterface<number>;
let y: INotEmptyInterface<string>;

x = y; // error!
y = x; // error!
```

`INotEmptyInterface` 인터페이스에서는 할당받은 T가 number, string로 서로 다르며 특정 프로퍼티에 주입하였으므로 서로 할당이 불가능합니다.

---

감사합니다.
