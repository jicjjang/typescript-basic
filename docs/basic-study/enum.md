---
sidebar_position: 12
title: Enum
description: Enum
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="Enum" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="Enum" data-rh="true" />
</head>

enum은 grouping된 상수값의 묶음으로 쓰기 좋다고 표현할 수 있을 것 같습니다.

```ts
enum API_STATUS {
  PENDING, // 0
  WAIT, // 1
  ERROR, // 2
}

...

if (status === API_STATUS.PENDING) {
  ...
}
```

이렇게 value가 없이 key값만 나열한다면 순서대로 0, 1, 2 값이 들어가게 됩니다.

```ts
enum FOOD {
  APPLE = "APPLE",
  BANANA = "BANANA",
  MELON = "MELON",
}

console.log(`${FOOD.MELON} is good`); // MELON is good
```

비교를 위한 값이 아닌 그 값 자체가 중요할 때에는 직접 문자열을 할당해줘야 합니다.
(물론 number, boolean등 여러 타입에 대한 설정이 가능합니다.)

그렇다면 enum 자체를 출력하면 어떻게 될까요?

![enum log](/img/basic-study/enum/enum-log.jpg)

---

사실 enum을 사용하는 것은 어렵지 않습니다. 그런데 우리는 그냥 object를 쓰면 될텐데 왜 enum이라는 별도의 기능을 사용해야 할까요?

![object type](/img/basic-study/enum/object-type.jpg)

object로 사용해도 문제는 없으나, 상수를 사용하고자 하는 니즈는 채울 수 없습니다.

![enum type](/img/basic-study/enum/enum-type.jpg)

enum을 사용한다면 타입이 아닌 값이 보여집니다. 또한 compile 시 값이 고정되기 때문에 값도 수정할 수 없습니다.

그렇다면 object를 상수화 해서 사용하려면 어떻게 해야할까요?

![object type assertion](/img/basic-study/enum/object-type-assertion.jpg)

`as const` 키워드를 통해 object는 상수화 되고, 값을 바로 알 수 있게 된다는 것입니다.

하지만 이렇게만 object를 쓰면 타입 추론이 불가능하므로 아래와 같이 변수의 타입으로 지정할 수 없습니다.

```ts
const OFood = {
  apple: "1",
  banana: "2",
} as const;

function foodConsume(food: OFood) { // error!
  ...
}
```

따라서 아래와 같은 코드가 추가되어야 합니다.

```ts
const OFood = {
  apple: "1",
  banana: "2",
} as const;
type OFood = typeof OFood[keyof typeof OFood]; // "1" | "2"

function foodConsume(food: OFood) { // ok!
  ...
}
```

---

그런데 enum에 대해 배우려고 들어온건데 주제에 어긋난 얘기들을 하고있는 것 같습니다. 왜 그랬을까요?
바로 enum을 사용하지 말아야 한다는 주장이 끊임없이 나왔기 때문입니다.

그 이유는 tree shaking 때문입니다. enum도 결국 객체입니다. compile이 된다면 enum은 객체로 나오게 되는데, 일반 객체가 아닌 IIFE(Immediately Invoked Function Expressions)형식의 결과가 나오게 됩니다.

![compiled enum](/img/basic-study/enum/compiled-enum.jpg)

하지만 이러한 문제는 `const enum` 을 사용하면 해결됩니다.

![compiled const enum](/img/basic-study/enum/compiled-const-enum.jpg)

단점으로는 enum 자체에 접근하지 못하게 되는 것입니다. 이러한 단점 말고는 enum 객체가 무의미한 IIFE로 생성되지 않고
사용되는 부분에 해당하는 값만 들어가게 됩니다.

하지만 const enum에도 문제가 있습니다. 바로 tsconfig의 `--isolatedModules` 옵션을 true로 설정하면 정상적으로 동작하지 않게 됩니다.

![compiled const enum after](/img/basic-study/enum/compiled-const-enum-after.jpg)

결국 제일 베스트 시나리오는 `as const (타입 단언) object와 union type` 을 사용하는 것입니다.
상수형 일반 object를 사용하며 타입도 알 수 있는 형식인 것이죠.

![as const union type](/img/basic-study/enum/as-const-union-type.jpg)

프로젝트 규모가 커짐에 따라 enum를 정말 많이 사용하게 됩니다. 이 때 정의도 많고 사용하는 부분도 많다면
프로젝트에 매우 악영향을 끼치게 되겠죠. 그렇기 때문에 enum, const enum을 지양하는 것이 서비스에 도움이 됩니다.

---

감사합니다.
