// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "typescript basic",
  tagline: "",
  url: "https://jicjjang.github.io",
  baseUrl: "/typescript-basic/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jicjjang",
  projectName: "typescript-basic",

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
          customCss: require.resolve("./src/css/custom.css"),
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
        title: "typescript basic",
        logo: {
          alt: "typescript basic",
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
