import React from "react";

export interface IFeatureItem {
  title?: string;
  description?: JSX.Element;
}

export const mainFeature: IFeatureItem = {
  description: (
    <>
      <b>“자바스크립트의 기초를 끝냈는데 타입스크립트가 또 있다고?!”</b>
      <br />
      타입스크립트를 처음 시작하시는 분들을 대상으로 하는 "기초부터 시작하는 타입스크립트" 강의 입니다. 최신
      타입스크립트 문서를 바탕으로 여러분들의 타입스크립트 학습을 도와드릴 것입니다.
      <br />
      간단한 예제를 바닐라 자바스크립트, 타입스크립트에 적용하는 예제를 보여드리며, 향후 어떻게 프로젝트에 적용할 수
      있는지 함께 알아봅시다.
    </>
  ),
};

const featureList: IFeatureItem[] = [
  {
    title: "강의 대상",
    description: (
      <>
        <ul>
          <li>자바스크립트의 기본적인 사용 방법을 알고있는 개발자</li>
          <li>
            타입스크립트가 처음이거나, 타입스크립트 문서에 있는 내용을 모두 파악하지 못하고 기본기만 사용하고 있는
            개발자
          </li>
          <li>
            항상 CRA와 같은 bootstrap 툴만 이용하여 번들러(bundler)에 타입스크립트를 어떻게 설정하는지 모르는 개발자
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "강의 목표",
    description: (
      <>
        <ul>
          <li>복잡한 프로젝트에서 자바스크립트를 썼을 때의 문제를 줄일 수 있다.</li>
          <ul>
            <li>모호한 이름의 변수가 어떤 타입의 값을 받는지 특정 가능</li>
            <li>협업하며 불어난 코드 정리가 쉬워진다.</li>
          </ul>
          <li>타입스크립트를 기존에 사용하던 프로젝트에 적용할 수 있다.</li>
          <ul>
            <li>바닐라 자바스크립트 프로젝트에 타입스크립트 적용 예제를 통해 쉽게 따라하며 배울 수 있다.</li>
            <li>기존에 만들어놓은 자바스크립트 코드도 쉽게 타입스크립트 프로젝트로 바꿀 수 있다.</li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    title: "강의 안내",
    description: (
      <>
        <ul>
          <li>타입스크립트를 왜 써야하는지</li>
          <li>기초 개념 설명</li>
          <ul>
            <li>String, Number, null, undefined Array... 어떻게 사용해야 하나?</li>
            <li>Object들의 수많은 property들. 어떻게 type을 지정해줄까</li>
          </ul>
          <li>고급 개념 설명</li>
          <ul>
            <li>여러 Object들의 타입을 합치고 나누고 더하고 빼고!</li>
          </ul>
          <li>tsconfig의 수많은 옵션들</li>
          <li>bundler</li>
          <ul>
            <li>bundler와 transpiler, polyfill... 이게 뭘까?</li>
            <li>타입스크립트를 bundler와 함께 사용해보자.</li>
            <ul>
              <li>vite, webpack, parcel, rollup과 함께하는 코딩 예제</li>
            </ul>
          </ul>
        </ul>
      </>
    ),
  },
];

export default featureList;
