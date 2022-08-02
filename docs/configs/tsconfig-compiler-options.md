---
sidebar_position: 2
title: tsconfig compilerOptions 설정
description: tsconfig compilerOptions 설정
---

<head>
  <meta name="title" content="타입스크립트 설정 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="tsconfig compilerOptions 설정" data-rh="true" />
  <meta property="og:title" content="타입스크립트 설정 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="tsconfig compilerOptions 설정" data-rh="true" />
</head>

compilerOptions에는 정말 많은 옵션이 있습니다.
tsconfig의 root 옵션들은 경로나 설정을 덮어쓸지 등을 결정해주는 것이고, 실질적인 타입스크립트의 세부 설정은 compilerOptions가 담당합니다.

![compiler options](/img/configs/tsconfig-compiler-options/compiler-options.jpg)

보이는 내용들만 해도 한가득입니다. 내용이 길어지겠지만 자주 사용되는 설정 값 위주로 알아보겠습니다.

## Type Checking

### allowUnreachableCode

코드가 갈 수 없는 부분까지 정의되어 있다면 에러가 발생합니다.

### strict

모든 strict (엄격) 관련 유형 검사 옵션을 활성화 해줍니다.

strict 관련 옵션은 아래와 같이 있습니다.

```
- alwaysStrict
- strictNullChecks
- strictBindCallApply
- strictFunctionTypes
- strictPropertyInitialization
- noImplicitAny
- noImplicitThis
- useUnknownInCatchVariab
```

### alwaysStrict

alwaysStrict은 strict이 true인 경우 기본값 true 입니다.

#### "strict": true, "alwaysStrict": true

엄격한 유형 검사가 이루어 진 뒤 모든 파일마다 `"use strcit"` 키워드가 추가됩니다.

#### "strict": true, "alwaysStrict": false

엄격한 유형 검사만 이루어지고, 파일마다 `"use strict"` 키워드가 추가되진 않습니다.

### strictNullChecks

strict을 true로 하면 기본적으로 적용됩니다.
strict 옵션은 false로, strictNullChecks 옵션은 true로 설정하면 개별적으로 설정되며
null 체크가 엄격하게 수행됩니다.

### noImplicitAny

any를 설정할 수 없습니다.

### noImplicitOverride

`noImplicitOverride` 옵션을 활성화 한다면 override할 메서드 앞에 반드시 `override` 키워드를 붙여줘야 합니다.

### noImplicitReturns

return이 없을 경우, 에러를 반환합니다.

---

## Modules

### baseUrl

모듈의 절대 경로가 아닌, 모듈이 기본적으로 위치한 디렉토리를 설정합니다.

### moduleResolution

모듈을 분석하는 방식으로 `node` 와 `classic`을 지정할 수 있습니다.
`classic`은 typescript 1.6버전 이하이며, 나머지는 `node`입니다.

### module

module은 아래와 같이 설정할 수 있습니다.

```
- none
- commonjs
- amd
- system
- umd
- es2015
- es2020
- ESNext
```

설정 방식에 따라 타입스크립트 컴파일 시, 어떤 형식의 경과물을 가지게 될 지 정할 수 있습니다.

### paths

paths는 baseUrl 설정 경로를 기본으로 합니다.

해당 설정을 함으로써 `require`, `import`를 통해 특정 경로의 파일을 가져올 때의 shortcut이 됩니다.

### rootDir

입력파일들의 root 경로를 지정합니다.

### outDir

출력 파일들의 root 경로를 지정합니다.

rootDir, ourDir의 디렉토리 구조는 기본적으로 동일합니다.

### rootDirs

가상의 파일이 생성되며, 이 파일을 통해 여러 rootDir을 import할 수 있게 해줍니다.

```
 src
 └── components
     └── component1.ts (입력파일. rootDir 중 하나)
     └── component2.ts (입력파일. rootDir 중 하나)

 generated
 └── templates
     └── views
         └── template.ts (./component1", "./component2"을 import할 수 있음)
```

### typeRoots

타입들의 root 경로를 설정할 수 있습니다.

모든 `@types` 디렉토리가 기본 경로이므로 `node_modules/@types/*`가 기본적으로 할당되지만
직접 만든 자바스크립트 모듈이나 자바스크립트 라이브러리를 가져올때는 로컬에 definition file 을 만들어두어야 하는데,
이때 타입스크립트 프로젝트가 읽을 수 있도록 경로를 설정해줘야 합니다.

### types

기본적으로는 typeRoots 경로가 모두 전역 경로로 설정되지만, types가 설정되면 types에 설정된 패키지들만 전역으로 설정됩니다.

---

## Emit

### declaration

컴파일 시, 경로 내 모든 ts, js 파일의 definition 파일을 만듭니다.

### emitDeclarationOnly

js 프로젝트를 위해 definition 파일들로만 이루어진 결과물을 만들 때 해당 옵션을 설정해준다면
결과물에 definition 파일들만 노출되게 됩니다.

우리가 보는 수많은 @types 프로젝트들이 이러한 방법으로 생성해 낸 것입니다.

### noEmit

결과물을 생성하지 않겠다는 옵션입니다.
해당 옵션을 실행하는 이유는 babel, swc 등의 다른 번들러, 트랜스파일러를 통해 결과를 emit하므로
typescript tsc를 통해 결과물을 생성하지 않겠다는 의미입니다.

### noEmitOnError

에러가 발생했을 때, 결과물을 생성하지 않겠다는 의미입니다.

### outDir

결과물이 emit될 경로입니다.

### outFile

outFile이 지정되면 해당 경로의 파일로 모든 결과물이 통합되어 emit됩니다.
outDir 경로를 기본으로 해당 파일이 생성됩니다.

---

## JavaScript Support

### allowJs

타입스크립트 파일에서 자바스크립트를 읽을 수 있도록 허용해주는 설정입니다.

### checkJs

allowJs와 함께 사용되며, 자바스크립트를 읽을 때, 에러를 검사해 알려줄지 여부입니다.

---

## Interop Constraints

### isolatedModules

컴파일 시 import, export 구문이 있는 파일을 모두 독립적인 모듈로 만듭니다.
import, export가 없다면 전역 파일로 정의됩니다.

---

## Language and Environment

### jsx

자바스크립트 결과물을 만들 때, jsx를 어떤 방식으로 컴파일할지에 대한 설정입니다.

### target

어떤 버전의 자바스크립트로 컴파일을 할지에 대한 설정입니다.

```
- es3
- es5
- es6 / es2015
- es2016
- es2017
- es2018
- es2019
- es2020
- es2021
- es2022
- esnext
```

### lib

타입스크립트 파일을 자바스크립트로 컴파일 할 때 참조되는 라이브러리의 목록입니다.
polyfill이라고 생각해주셔도 됩니다.

### noLib

라이브러리의 자동 포함을 비활성화 합니다.
이 설정이 활성화 되면 lib 설정은 무시됩니다.

---

## Completeness

### skipLibCheck

라이브러리의 타입스크립트 체크를 무시합니다.
컴파일 시간동안 라이브러리는 건너뛰게 되므로 정확도는 떨어지지만 컴파일 시간이 줄어들게 됩니다.

---

감사합니다.
