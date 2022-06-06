---
sidebar_position: 13
title: "?, ! 연산자"
description: "?, ! 연산자"
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="?, ! 연산자" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="?, ! 연산자" data-rh="true" />
</head>

물음표 연산자와 느낌표 연산자에 대해 알아보겠습니다.

## 물음표 연산자

말 그대로 물음표 연산자는 안전하게 나아갈 수 있도록 도와주는 연산자로, null, undefined를 처리해줍니다.

![compiled safe navigation](/img/basic-study/safe-navigation-non-null-assertion/compiled-safe-navigation.jpg)

물음표 연산자는 타입에도, 일반 값에도 사용할 수 있습니다.

### Optional(?, 물음표) 연산자

설명드리고 있던 물음표 연산자는 값에 들어가는
`ITest` 라는 타입을 하나 정의했는데요. `a` 프로퍼티에는 물음표 연산자가 붙어있습니다. 이는 아래와 같이 바꿔쓸 수 있습니다.

```ts
interface ITest {
  a:
    | {
        b: {
          c: number;
        };
      }
    | undefined;
}
```

타입에서 붙여주는 물음표 연산자는 `값이 undefined일수도 있다` 는 것을 축약해주는 것입니다.
이는 object로만 사용할 수 있는 것이 아닙니다.

![optional operator](/img/basic-study/safe-navigation-non-null-assertion/optional-operator.jpg)

### Safe navigation(?, 물음표) 연산자

이번에는 값에 들어가는 물음표 연산자 입니다.
제일 위에 보여드린 예제에서 컴파일된 결과물을 보신다면 아래와 같은 코드가 나오는데요.

```js
console.log((_a = test1.a) === null || _a === void 0 ? void 0 : _a.b.c);
```

이 코드를 보시면 아시겠지만 `test1.a`가 null이거나 undefined 일 때는 undefined를, 값이 있다면 값을 반환해줍니다.

## Non-null assertion(!, 느낌표) 연산자

느낌표 연산자는 `무조건 값이 있을 것이다` 단언하는 기능입니다. 따라서 물음표 연산자와는 다르게 값에서만 사용됩니다.
타입을 지정하는 부분에서 값이 있을 것이라는 단언은 필요가 없기 때문입니다.

런타입에 값이 결정된다는 말은 아래와 같은 user의 정보를 가져오는 api를 호출하는 sudo코드를 보며 얘기해보겠습니다.

```ts
// user.ts
import axios from 'axios';
import { LOG } from '../../log';

async function <T>getUser(): AxiosResponse<T> {
  try {
    const { data } = await axios.get<T>('...');
    return data;
  } catch (e: AxiosError) {
    LOG.ERROR(`API - getUser : ${e}`);
    throw e;
  }
}

// ------------------------------

// main.ts
const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;
type GENDER = typeof GENDER[keyof typeof GENDER];

interface IUser {
  name: string;
  age: number;
  gender: GENDER
}

const mainProcessFunction = async () => {
  const user = await getUser<IUser>();

  document.getElementById(`#${user.name}`);
}
```

`main processFunction`에서 `getUser`라는 user데이터를 호출하는 api layer의 코드를 호출하는데,
여기서 data라는 값은 Backend 개발자들과 협의한 user의 interface인 `name`, `age`, `gender`가 들어오도록 설정해놨습니다.

실제 코드를 호출하는 런타임 환경에선 어떤 값이 들어와 어떻게 실행될지 100% 장담은 할 수 없습니다.

---

감사합니다. 다음 강의에서 뵙겠습니다.
