---
sidebar_position: 11
title: function overload
description: function overload
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="function overload" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="function overload" data-rh="true" />
</head>

이번 타입스크립트 function overload를 설명하기 전, override, overload, 가 어떤 것인지 부터 알아보겠습니다.

override는 기존에 정의되어 있던 메서드를 재정의하는 것을 말합니다.

```ts
class Animal {
  eat(food: string) {
    console.log(food);
  }
}

class Monkey extends Animal {
  eat(food: string) {
    console.log(`Monkey eat ${food}`);
  }
}

const monkey = new Monkey();
monkey.eat("banana"); // Monkey eat babana
```

위와 같은 코드는 기본적인 자바스크립트에서도 잘 동작합니다.

---

overload란 클래스 내 동일한 이름을 가진 생성자나 메서드의 매개변수 타입, 매개변수 개수를 바꿔가며 중복으로 정의하는 것입니다.

```ts
class Animal {
  eat(food: string) {
    ...
  }

  eat(foodCount: number) {
    ...
  }

  eat(mainFood: string, ...otherFoods: string[]) {
    ...
  }
}
```

위와 같은 코드가 자바스크립트에서 정상적으로 동작할까요?

![javascript class overload](/img/basic-study/function-overload/javascript-class-overload.jpg)

그렇다면 이 결과물을 타입스크립트를 사용함으로써 해결할 수 있을까요?

![typescript class overload](/img/basic-study/function-overload/typescript-class-overload.jpg)

타입스크립트로도 해결은 불가합니다.
왜 불가한지는 [해당 이슈](https://github.com/microsoft/TypeScript/issues/32102)를 봐주시면 됩니다.

---

[공식적인 문서에 function overload](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#overloaded-functions) 얘기가 있으나, 이는 기능이 있다기보단 편법에 가깝습니다.

이 방법은 위에 전달드린 [타입스크립트로 class overload가 불가능하다 말씀드린 이슈](https://github.com/microsoft/TypeScript/issues/32102#issuecomment-505829304)에도 댓글로 달렸는데요, 이를 이용해 class에서도 overload를 사용할 수 있습니다.

![typescript class overload after](/img/basic-study/function-overload/typescript-class-overload-after.jpg)

물론 일반 함수에서도 사용할 수 있습니다.

![typescript function overload](/img/basic-study/function-overload/typescript-function-overload.jpg)

이렇게 선언부, 구현부를 나눠서 관린한다면 class, function에서 모두 overload를 사용할 수 있습니다.

---

[이에 대한 논의](https://github.com/microsoft/TypeScript/issues/3442)는 이전에도 활발하게 이루어진 것으로 보입니다.

다음 시간에 뵙겠습니다.
