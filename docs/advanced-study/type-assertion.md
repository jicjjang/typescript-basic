---
sidebar_position: 3
title: 타입 단언(type assertion)
description: 타입 단언(type assertion)
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입 단언(type assertion)" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입 단언(type assertion)" data-rh="true" />
</head>

타입 단언은 `타입 좁히기`의 일종입니다. 타입이 여러개로 들어올 수 있는 상황에서 타입을 특정하는 기능입니다.

```ts
interface IAnimalCommon {
  eat: () => void;
}

interface IFish extends IAnimalCommon {
  type: "FISH";
  swim: () => void;
}

interface IBird extends IAnimalCommon {
  type: "BIRD";
  fly: () => void;
}

type IAnimal = IFish | IBird;

function isFish(pet: IAnimal): pet is IFish {
  return (pet as IFish).swim !== undefined;
}
```

여기서 `is`와 `as` 키워드를 확인해보겠습니다.

## is

`is` 키워드는 `<Value> is <Type>` 형태로 사용하며 value가 해당 type과 동일한지에 대한 결과를 boolean으로 준다는 의미입니다.

```ts
function isFish(pet: IAnimal): pet is IFish;
```

## as

as키워드는 타입을 강제로 지정하는 방법으로 [enum](/docs/basic-study/enum) 강의에서 enum 강의에서 const object를 만들때 사용했습니다.

```ts
const divElement = document.querySelector("div"); // HTMLDivElement | null
```

태그 이름을 명확하게 넣는 경우에는 타입이 `HTMLDivElement | null` 로 명확히 지정됩니다. div태그가 없을 수 있기 때문에 null이 들어갈 수 있다는 가정 또한 해줍니다.

하지만 태그 이름이 아닌 클래스, id 값을 넣는다면 어떻게 될까요?

```ts
const imageWrapperElement = document.querySelector(".image-wrapper"); // Element | null
```

querySelector도 어떤 타입인지 지정할 수 없기 때문에 `Element | null` 이라는 타입을 지정해줍니다.

```ts
// 두 방식은 동일합니다.
const imageWrapperElement = <HTMLDivElement>(
  document.querySelector(".image-wrapper")
);

const imageWrapperElement = document.querySelector(
  ".image-wrapper",
) as HTMLDivElement;
```

```ts
const value = 10 as string; // error!
```

따라서 위와 같은 코드는 에러가 발생하게 되니 사용에 주의해야 합니다.

---

감사합니다.
