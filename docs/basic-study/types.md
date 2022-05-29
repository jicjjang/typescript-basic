---
sidebar_position: 6
title: types
description: types
---

<head>
  <meta name="title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="types" data-rh="true" />
  <meta property="og:title" content="Basic 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="types" data-rh="true" />
</head>

```ts
const version: string = process.version; // 'v16.15.0'
const splitedVersion: string[] = process.version.split("."); // ['v16', '15', '0']
const splitedNumberVersion: number[] = splitedVersion.map((eachValue: string, index: number) =>
  parseInt(!index ? eachValue.substring(1) : eachValue, 10)
);

const isNumArr: boolean =
  Array.isArray(splitedNumberVersion) &&
  splitedNumberVersion.every((eachValue: number) => typeof eachValue === "number");

console.log(splitedNumberVersion); // [16, 15, 0]
console.log(isNumArr);
```

뭔가 타입이 잔뜩 들어간 상태입니다. process는 node의 환경변수인데요. 마우스를 올려보면 노드의 type이 없기 때문에
process를 찾을 수 없습니다. 따라서 `@types/node` 모듈을 설치하라고 알려줍니다.

![types node before](/img/basic-study/types/types-node-before.jpg)

타입스크립트에서 자바스크립트로 된 라이브러리가 있는 경우, export하여 유저가 사용하는 인터페이스 코드의 타입만 정의해서
서로서로 공유하는 프로젝트 입니다. 해당 프로젝트는 타입스크립트를 만든 microsoft에서 관리하는 것으로 알려져 있습니다.

보이지 않는 타입스크립트 타입 정의(definition) 들은 [Typescript search](https://www.typescriptlang.org/dt/search?search=)에서 확인할 수 있습니다.

vscode에서는 라이브러리에 타입이 없는 경우 `@types/*` 를 설치하라고 알려주지만, 누군가 타입을 만들어 DefinitelyTyped 프로젝트에 올려놓지 않았다면
설치에 실패할 수 있습니다.

---

우리에게 필요한 `@types/node`를 설치해줍니다. (`npm install -D @types/node`)

![types node after](/img/basic-study/types/types-node-after.jpg)

process 환경 변수에 타입이 생겼습니다. 버전에는 `NodeJS.Process.version: string` 값이 뜨게 됩니다.

---

다음 강의도 기대해주세요!
