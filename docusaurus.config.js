// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "기초부터 시작하는 타입스크립트",
  tagline: `최신 버전의 타입스크립트 문서를 기반으로 차근차근 기초부터 알아봅시다!`,
  url: "https://jicjjang.github.io",
  baseUrl: "/typescript-basic/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jicjjang",
  projectName: "typescript-basic",
  customFields: {
    description: `“자바스크립트의 기초를 끝냈는데 타입스크립트가 또 있다고?!”
    타입스크립트를 처음 시작하시는 분들을 대상으로 하는 \`기초부터 시작하는 타입스크립트\` 강의 입니다.
    최신 버전의 타입스크립트 문서를 바탕으로 여러분들의 타입스크립트 학습을 도와드릴 것입니다.`,
  },

  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: process.env.NODE_ENV === "development",
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        /**
         * @TODO 채워넣기
         */
        // sitemap: {},
        // googleAnalytics: {},
        // gtag: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "기초부터 시작하는 타입스크립트",
        logo: {
          alt: "기초부터 시작하는 타입스크립트",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "docs",
          },
          {
            href: "https://github.com/jicjjang/typescript-basic",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Blog",
                href: "https://jicjjang.github.io/",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/jicjjang/",
              },
              {
                label: "Mail",
                href: "mailto:jicjjang12@gmail.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/jicjjang",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} jicjjang, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
