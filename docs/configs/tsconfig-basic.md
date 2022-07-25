---
sidebar_position: 1
title: tsconfig 기본 설정
description: tsconfig 기본 설정
---

<head>
  <meta name="title" content="타입스크립트 설정 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="tsconfig 기본 설정" data-rh="true" />
  <meta property="og:title" content="타입스크립트 설정 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="tsconfig 기본 설정" data-rh="true" />
</head>

tsconfig에는 6가지 프로퍼티를 설정할 수 있습니다. `files`, `extends`, `include`, `exclude`, `references`,
그리고 마지막으로 `compilerOptions` 입니다.

그중 `compilerOptions`를 제외한 5가지를 알아보고 다음 강의에서 `compilerOptions`에 대해 알아보겠습니다.

## files

컴파일 시, 반드시 포함해야 할 파일 목록을 직접 지정합니다.

![correct-path-files-in-tsconfig](/img/configs/tsconfig-basic/correct-path-files-in-tsconfig.jpg)
![wrong-path-files-in-tsconfig](/img/configs/tsconfig-basic/wrong-path-files-in-tsconfig.jpg)

## include

프로그램에 포함할 파일 이름이나 패턴을 배열로 지정합니다.

![wrong-path-include-in-tsconfig](/img/configs/tsconfig-basic/wrong-path-include-in-tsconfig.jpg)

## exclude

exclude는 include에서 포함되는 파일, 패턴에서 포함하지 말아야 할 일부 또는 전체 파일들을 지정합니다.

## extends

말 그대로 extends 경로의 conifg를 상속합니다. 상속 시, 상속받은 옵션이 먼저 들어가게 되며 겹치게 되는 속성은 상속받는 파일의 설정이 override되어 덮어씁니다.

또한 references 설정은 상속되지 않습니다.

```ts
// configs/tsconfig.base.json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

```ts
// tsconfig.json
{
  "extends": "./configs/tsconfig.base",
  "compilerOptions": {
    "noImplicitAny": false,
    "strictNullChecks": false
  },
  "include": ["src"]
}
```

## references

extends는 프로젝트가 아닌 설정 파일만 있을 때, 해당 설정을 그대로 가져오는 용도로 사용했습니다.
references는 다른 프로젝트에 의존하는 특정 프로젝트의 tsconfig에 설정하게 됩니다.

1. 의존하는 B 프로젝트의 tsconfig의 references의 path를 A프로젝트로 지정해줍니다.

```ts
{
  ...
  references: {
    "path": { "A 프로젝트" }
  }
  ...
}
```

2. B 프로젝트는 A 프로젝트에 대한 `*.d.ts` 파일이 필요합니다.

3. A프로젝트를 미리 빌드를 해야합니다. 따라서 `--build` 옵션을 추가해 `tsc --build {A project}` 명령어를 통해 실행합니다.

참고) [stackoverflow](https://stackoverflow.com/questions/51631786/how-to-use-project-references-in-typescript-3-0)
참고) [references 예시 프로젝트](https://github.com/RyanCavanaugh/project-references-demo)

---

감사합니다.
