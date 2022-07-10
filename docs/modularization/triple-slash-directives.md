---
sidebar_position: 3
title: 트리플 슬래시 지시어 (Triple-slash Directives)
description: 트리플 슬래시 지시어 (Triple-slash Directives)
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="트리플 슬래시 지시어 (Triple-slash Directives)" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="트리플 슬래시 지시어 (Triple-slash Directives)" data-rh="true" />
</head>

[namespace](/docs/modularization/namespace)에서 사용한 트리플 슬래시 지시어에 대해 알아보겠습니다.

## reference path

`/// <reference path="..." />` 형태로 사용되며 무조건 파일의 상단에서만 사용 가능합니다.

가장 일반적이며 `파일 간의 의존성 선언`에 사용됩니다.

## reference types

path와 types는 차이점이 거의 없습니다. 하지만 이 지시어는 `d.ts` 을 직접 생성할때만 사용합니다.
`/// <reference types="node" />`를 사용하는 것은 `@types/node/index.d.ts` 을 접근, 사용하는 것입니다.

## reference lib

이 지시어는 파일이 명시적으로 기존 내장 lib 파일을 포함하게 합니다.

tsc 컴파일 시 `tsc --lib [lib.d.ts]` 을 하는 것과 동일합니다. ([lib](https://www.typescriptlang.org/tsconfig/#lib)에 대한 옵션)

## reference no-default-lib

`/// <reference no-default-lib="true"/>` 는 설정하게 되면 컴파일러 기본 라이브러리 (lib.d.ts)를 포함하지 않게 됩니다.

tsc 컴파일 시, `--noLib` 옵션을 추가한것과 동일합니다.

---

감사합니다.
