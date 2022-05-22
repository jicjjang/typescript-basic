---
sidebar_position: 3
title: 타입스크립트의 사용 방법(들)
description: 타입스크립트의 사용 방법(들)
---

<head>
  <meta name="title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입스크립트의 사용 방법(들)" data-rh="true" />
  <meta property="og:title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입스크립트의 사용 방법(들)" data-rh="true" />
</head>

타입스크립트는 자바스크립트와 다르게 환경 설정이 필요합니다.

여러 인원이 함께 개발하거나 프로젝트 규모가 커질수록 디테일한 설정이 필요합니다.
그렇기 때문에 문법을 공부하기 전 기본적으로 타입스크립트르 사용할 수 있는 환경을 만드는 방법을 살펴보고 과정과 결과에 어떤 차이가 있는지 알아봅시다.

## 바벨 (babel)

바벨은 트랜스파일러(transpiler)입니다. 브라우저를 예로 들자면 각 브라우저마다의 차이는 있지만 보통 ES5 이하의 문법이 실행됩니다.
그런데 ES5 이후의 문법들이나 [tc39](https://tc39.es/)에 발제된 아직 테스트 중인 문법들로 코딩을 한 뒤,
브라우저에서 실행하고자 하면 브라우저가 해당 코드를 읽지 못합니다.
이런 코드를 브라우저가 읽을 수 있도록 compile 시점에 옵션으로 넣어줄 수 있는 것이죠.

바벨의 특징을 좀 더 살펴보겠습니다.

### 타입 체크가 불가능하다

[앞에서도 설명](/docs/why-typescript/how-when-use-typescript#nodejs)드렸지만 바벨은 타입 체크가 불가능합니다.
그렇기 때문에 타입의 에러가 발생하더라도 빠르게 compile이 동작합니다.

![babel code](/img/start/typescript-usage/babel-code.jpg)

> 작성한 코드(왼쪽)와 성공적으로 compile된 결과물(오른쪽)

### polyfill이 가능하다

polyfill은 `실행 환경(예를 들어 브라우저)에서 지원하지 않는 기능을 추가`해주는 역할 입니다.
대표적인 polyfill로 [core-js](https://github.com/zloirock/core-js), [polyfill.io](https://github.com/financial-times/polyfill-service)가 있습니다. babel에서 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env), [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) 두 모듈을 통해 쉽게 사용할 수 있습니다.

### 확장이 쉽다

typescript, react, polyfill 등 바벨은 많은 기능을 지원해줍니다. 너무 많은 기능을 지원하기에 저또한 모든 기능을 다 써보지 못한 정도입니다.

---

이제 타입스크립트이 compiler인 tsc가 어떤 특징을 가지고 있는지 한번 알아보겠습니다

## tsc

`tsc` 명령어는 `npm run typescript` 명령어로 타입스크립트 모듈을 설치하면 사용이 가능한 명령어 입니다.

### 타입체크가 가능하다

`tsc`는 타입을 체크하는 기능을 자동으로 포함하고 있습니다.
에디터에서 에러가 발생하는지 여부 또한 타입스크립트 덕분에 알 수 있습니다.

타입 체크에 성공한다면 설정된 output 경로로 결과물이 저장되는데, `noEmit` 옵션을 통해 결과물을 저장하지 않을 수 있습니다.
따라서 `tsc --noEmit` 명령어를 통해 타입만 체크할 수도 있습니다.

![tsc code](/img/start/typescript-usage/tsc-code.jpg)

### tsconfig.json

타입스크립트 컴파일을 위해서 사용되며 기본적으로 `tsc` 명령어와 같은 path에 있는 `./tsconfig.json` 파일을 설정파일로 읽습니다.
위에 설명드린 `noEmit` 옵션도 tsconfig.json에 설정이 가능합니다.

### polyfill 적용 불가 및 확장이 어렵다

transpiler가 아닌 `tsc`는 별도의 polyfill을 추가할 수 없고, 바벨처럼 확장적인 모듈들을 추가할 수 없습니다.

---

이렇게 기본적으로 많이 사용하는 babel, tsc 환경에 대해 알아보았습니다.
하지만 타입스크립트를 사용하는 많은 방법들은 더 있으니,
타입스크립트를 온전히 이해하고 프로젝트에 맞는 방법을 찾는것도 중요합니다.

## (추가) ts-node, pm2

일반적으로 node 명령어로 cli 환경에서 자바스크립트를 실행하듯, [ts-node](https://github.com/TypeStrong/ts-node)를 통해 타입스크립트 파일을 바로 실행할 수 있습니다.

[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)는 무중단 서비스 배포를 위한 서비스 관리 도구 입니다.
pm2 자체에서 추가 모듈을 설치 할 수 있는데요, 여기서 타입스크립트를 설치하고 바로 타입스크립트 프로젝트를 실행할 수 있습니다.
