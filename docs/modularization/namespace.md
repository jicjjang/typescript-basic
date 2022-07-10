---
sidebar_position: 2
title: namespace
description: namespace
---

<head>
  <meta name="title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="namespace" data-rh="true" />
  <meta property="og:title" content="Advanced 학습 | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="namespace" data-rh="true" />
</head>

module 강의를 간단하게 넘어간 이유는 자바스크립트를 어느정도 사용하고 있었다면 추가적으로 더 배울 내용 없이 어느정도 알고 있었을만한 내용들이기 때문입니다.

---

아래와 같은 타입스크립트가 적용된 코드가 있다고 예를 들어보겠습니다.

```ts
interface StringValidator {
  isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// 시도해 볼 샘플
let strings = ["Hello", "98052", "101"];
// 사용할 검사기
let validators: { [s: string]: StringValidator } = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// 각 문자열이 각 검사기를 통과했는지 표시
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'`);
  }
}
```

## 단일 파일 namespace

자바스크립트에는 없는 namespace 단위를 만들어 공통된 역할을 하는 Validator들을 모아주는 모듈을 만듭니다.

```ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// 시도해 볼 샘플
let strings = ["Hello", "98052", "101"];
// 사용할 검사기
let validators: { [s: string]: Validation.StringValidator } = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// 각 문자열이 각 검사기를 통과했는지 표시
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `'${s}' ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } '${name}'`,
    );
  }
}
```

namespace 내에서 export하는 함수이나 변수는 외부에서도 Validation을 통화 접근이 가능하지만, export하지 않은 함수, 변수는 외부에서 접근할 수 없습니다.

---

감사합니다.
