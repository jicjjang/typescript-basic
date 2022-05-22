---
sidebar_position: 1
title: npm에 대해서
description: npm에 대해서
---

<head>
  <meta name="title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="npm에 대해서" data-rh="true" />
  <meta property="og:title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="npm에 대해서" data-rh="true" />
</head>

## Node.js 설치

이미 자바스크립트나 Node.js, 타입스크립트를 미리 사용해보신 개발자 분들 께서는 npm을 사용해보신 경험이 있으실 겁니다.
타입스크립트의 설치를 위해 미리 설치해줘야 합니다.

기본적으로 타입스크립트를 사용하기 위해서는 Node.js 와 npm이 설치되어 있어야 합니다.
[Node.js를 설치](https://nodejs.org/ko/)하면 npm은 함께 설치됩니다.

![node install](/img/start/about-npm/node-install.jpg)

Node.js 설치 완료 후, shell을 열어봅시다. (윈도우라면 [powershell](https://docs.microsoft.com/ko-kr/windows/dev-environment/javascript/nodejs-on-windows)) shell에서 node와 npm의 버전을 체크해봅시다.

두 버전이 모두 나온다면 설치가 성공한 것입니다.

```bash
$ node -v
# v16.15.0                # 성공적으로 설치 시
# command not found: node # 설치 실패

$ npm -v
# 8.5.5                  # 성공적으로 설치 시
# command not found: npm # 설치 실패
```

## npm이란

우선 설치부터 알아봤는데요. Node.js package manager의 약자입니다.
부가적인 기능이 이미 만들어져 package manager에 있다면 우리는 서비스를 만드는데 집중하는 것이 좋겠죠.

여러 언어들이 이러한 package manager를 가지고 있습니다.
[rust의 cargo](https://rinthel.github.io/rust-lang-book-ko/ch01-03-hello-cargo.html), [php의 composer](https://getcomposer.org/), [python의 pip](https://pypi.org/) 등등, 언어의 필수적인 기능 중 하나라고 할 수 있습니다.

![package managers](/img/start/about-npm/package-managers.jpg)

## Package manager

Node.js의 package manager는 있으나 자바스크립트만의 package manager는 없습니다.

그렇다면 Node.js가 나오기 전 javascript는 어떻게 package를 관리했을까요?  
[(번외) npm으로 package를 설치한다는 것은](/docs/start/about-managing-package-with-npm)에서 알아보겠습니다.

![javascript vs node](/img/start/about-npm/javascript-node.jpg)

### 참고

deno도 [x](https://deno.land/x) 라는 package manager가 있습니다...!!!

![deno x](/img/start/about-npm/deno-x.jpg)
