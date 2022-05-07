---
sidebar_position: 2
title: 타입스크립트 설치
description: 타입스크립트 설치
---

<head>
  <meta name="title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입스크립트 설치" data-rh="true" />
  <meta property="og:title" content="시작해보기 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입스크립트 설치" data-rh="true" />
</head>

## 타입스크립트 다운로드

타입스크립트를 설치해봅시다. [타입스크립트 홈페이지의 다운로드 페이지](https://www.typescriptlang.org/download)를 확인하면 되는데요.

![typescript download](/img/start/install-typescript/typescript-download.jpg)

앞에서 알아본 npm을 통해 package를 설치할 수 있습니다.

잠깐, 이미지에서 `npx tsc` 명령어는 뭐길래 빨간색 박스를 그려놨을까요?  
[npx](https://docs.npmjs.com/cli/v8/commands/npx) 명령어는 현재 디렉토리에 설치되지 않은 패키지거나
npm global에 설치되지 않은 패키지도 바로 사용가능하도록 임시적으로 받아오는 명령어 입니다.

![tsc](/img/start/install-typescript/tsc.jpg)

하지만 tsc를 바로 실행할 수 있다는 타입스크립트 문서와는 다르게 tsc 명령어가 실행되지 않습니다.  
우리는 프로젝트를 지속적으로 개발해야 하니 일반적인 테스트는 playground를 통해 진행하고
`npm install typescrt --save-dev` 명령어로 프로젝트를 설치해줍시다.

![package.json](/img/start/install-typescript/package-json.jpg)

### node_modules

우리가 추가한 package들은 node_modules라는 디렉토리 밑에 관리됩니다.  
프로젝트를에 package를 설치해서 나오는 node_modules는 github에 올리지 않고 제외하도록
.gitignore에 node_modules를 추가해주세요.

### .gitignore

[gitignore.io](https://gitignore.io/) 라는 사이트가 있습니다.  
해당 사이트에 내가 사용하는 언어나 라이브러리, 프레임워크를 넣으면 자동으로 gitignore 기본셋을 생성해줍니다.  
프로젝트 시작 시 사용해봅시다.

![gitignore](/img/start/install-typescript/gitignore.jpg)

## Reference

[코드 예시 - https://github.com/jicjjang/typescript-basic-code/tree/start/install-typescript](https://github.com/jicjjang/typescript-basic-code/tree/start/install-typescript)
