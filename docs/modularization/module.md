---
sidebar_position: 1
title: module
description: module
---

<head>
  <meta name="title" content="modularization | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="module" data-rh="true" />
  <meta property="og:title" content="modularization | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="module" data-rh="true" />
</head>

타입스크립트의 모듈화에 대한 설명은 간단히 넘어가려고 합니다.
강의 초반 [about-managing-package-with-npm](/docs/start/about-managing-package-with-npm) 강의에서도 말씀드렸지만
타입스크립트의 빌드 후 모듈은 결국 자바스크립트가 어떤 방식으로 실행될 수 있는 형태로 export 해줄 것인가에 대한 얘기입니다.

[tsc cli module](https://www.typescriptlang.org/tsconfig/#module)에서 추가하는 이 설정(`tsc --module ESNext index.ts`)을 통해
어떤 결과로 export되는지 결정이 가능합니다.

```ts title="@filename: index.ts"
import { valueOfPi } from "./constants";

export const twoPi = valueOfPi * 2;
```

```ts title="CommonJS"
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_1 = require("./constants");
exports.twoPi = constants_1.valueOfPi * 2;
```

```ts title="UMD"
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "./constants"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.twoPi = void 0;
  const constants_1 = require("./constants");
  exports.twoPi = constants_1.valueOfPi * 2;
});
```

```ts title="AMD"
define(["require", "exports", "./constants"], function (
  require,
  exports,
  constants_1,
) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.twoPi = void 0;
  exports.twoPi = constants_1.valueOfPi * 2;
});
```

```ts title="System"
System.register(["./constants"], function (exports_1, context_1) {
  "use strict";
  var constants_1, twoPi;
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [
      function (constants_1_1) {
        constants_1 = constants_1_1;
      },
    ],
    execute: function () {
      exports_1("twoPi", (twoPi = constants_1.valueOfPi * 2));
    },
  };
});
```

```ts title="ESNext"
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

```ts title="ES2020"
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

```ts title="ES2015/ES6"
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```
