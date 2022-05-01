---
sidebar_position: 1
title: 타입스크립트를 꼭 배워야 되나요?
description: 타입스크립트를 꼭 배워야 되나요?
---

<head>
  <meta name="title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta name="description" content="타입스크립트를 꼭 배워야 되나요?" data-rh="true" />
  <meta property="og:title" content="타입스크립트란? | 기초부터 시작하는 타입스크립트" data-rh="true" />
  <meta property="og:description" content="타입스크립트를 꼭 배워야 되나요?" data-rh="true" />
</head>

# 타입스크립트

![what is typescript](/img/why-typescript/why-learn-typescript/what-is-typescript.jpg)

> 1. 자바스크립트에 타입스크립트를 추가함으로써 에디터와 강하게 결합합니다. 에디터에서 빠르게 에러를 찾을 수 있습니다.
> 2. 타입스크립트 코드는 원하는 어느곳이든 맞춰서 변환시켜줄 수 있습니다. (브라우저, nodejs, deno 등등)
> 3. 타입스크립트는 별도의 추가 코드 없이 자바스크립트를 이해하고 타입추론을 통해 유저에게 좋은 경험을 줍니다.

---

자바스크립트는 `동적 타입 언어` 입니다. 동적 타입 언어란 run-time 시 타입이 결정되는 언어입니다.

정적 언어인 자바를 예로 들어보자면 compile 시점에 타입이 결정됩니다.  
전체를 실행시켜보고 타입을 결정하는 것이 아니기 때문에  
처음부터 타입을 지정해주어야 하고, 에디터에서 타입이 맞지 않은 경우 바로바로 에러인 케이스들을 알려줍니다.

```js
class Test {
    public int param = 10;
    public Test(int param) {
        this.param = param;
        System.out.println(this.param);
    }
}

class Main {
    public static void main(String[ ] args) {
        Test test = new Test("10");
        // error: incompatible types: String cannot be converted to int Test test = new Test("10");
        System.out.println(test.param);
    }
}
```

동적 타입 언어인 자바스크립트는 타입이 run-time 시점에 결정됩니다.  
그렇기 때문에 에디터에서 프로젝트를 계속 실행할 수 없어서  
타입을 바로 알려주기 어렵습니다.

```js
var param = 10;

function test(p) {
  param = p;
}

test("ho");
console.log(param); // ho
```

# 왜 타입스크립트를 꼭 배워야 할까요?

- 협업을 할 떄, 팀원이 짠 코드의 의도를 더 분명히 알 수 있습니다.
- 안정성
  - 타입이 run time 이전에 지정되기 때문에 에디터에서 에러가 바로바로 노출됩니다.
  - 타입을 지정함으로써, 다른 타입의 값을 넣었을 때 개발자에게 문제가 생겼다는 표시를 해줍니다.
- 생산성
  - 타입스크립트는 자바스크립트이 슈퍼셋 입니다.
    - 유저가 넣고싶은 부분에만 넣으면 됩니다. (다 넣도록 강제할수도 있음)
    - 처음부터 100% 커버할 필요도 없습니다.
    - 자바스크립트와 혼용이 가능합니다.
  - `타입 정의 때문에 코드가 늘어나요`
    - 타입 정의 코드가 늘어나도 코드의 복잡도가 올라갔을 때, 타입의 양보다 훨씬 더 효율을 높일 수 있습니다.

```ts
var param = 10; // 명시적으로 10이라는 number 타입의 값을 넣어줬으므로 "타입 추론"

function test(p: number) {
  param = p;
}

test("ho"); // editor에서 에러가 발생
console.log(param);
```

타입스크립트로 타입을 미리 지정해줌으로써 유저의 의도와 다른 값이 들어올 수 없습니다.  
이러한 `안정성` 과 안정적으로 코딩을할 수 있으므로 자동으로 `생산성`이 증가하게 됩니다.

# Reference

- [타입스크립트의 목표](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals)
- 미국 개발 커뮤니티 [레딧의 타입스크립트 도입](https://medium.com/@constell99/%EC%9A%B0%EB%A6%AC%EA%B0%80-typescript%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0-b0a423654f1e)
