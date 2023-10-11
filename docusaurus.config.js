// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/themes/trickytheme');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Trickys Docs',
  tagline: 'Docs For Gamers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.trickys.gg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trickys-docs', // Usually your GitHub org/user name.
  projectName: 'trickys-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','nl','fr','de','no','pl','es','sv'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        calendar: 'gregory',
        path: 'en',
      },
      nl: {
        label: 'Dutch (Nederlands)',
        direction: 'ltr',
        htmlLang: 'nl',
        calendar: 'gregory',
        path: 'nl',
      },
      fr: {
        label: 'French (Français)',
        direction: 'ltr',
        htmlLang: 'dr',
        calendar: 'gregory',
        path: 'fr',
      },
      de: {
        label: 'German (Deutsch)',
        direction: 'ltr',
        htmlLang: 'de',
        calendar: 'gregory',
        path: 'de',
      },
      no: {
        label: 'Norwegian (Norsk Bokmål)',
        direction: 'ltr',
        htmlLang: 'no',
        calendar: 'gregory',
        path: 'no',
      },
      pl: {
        label: 'Polish (Polski)',
        direction: 'ltr',
        htmlLang: 'pl',
        calendar: 'gregory',
        path: 'pl',
      },
      es: {
        label: 'Spanish (Español)',
        direction: 'ltr',
        htmlLang: 'es',
        calendar: 'gregory',
        path: 'es',
      },
      sv: {
        label: 'Swedish (Svenska)',
        direction: 'ltr',
        htmlLang: 'sv',
        calendar: 'gregory',
        path: 'sv',
      },
  },
},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com',
        routeBasePath: '/',
        },

        blog: {
          //path: 'blogs',
          blogTitle: 'Updates',
          blogDescription: 'Updates',
          routeBasePath: 'updates', //CHANGE HERE
          include: [`**/*.{md,mdx}`],
          exclude: [`template.md`],
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarTitle: 'All Updates',
          blogSidebarCount: 'ALL',
          //blogListComponent: '@theme/BlogListPage',
          //blogPostComponent: '@theme/BlogPostPage',
          //blogTagsListComponent: '@theme/BlogTagsListPage',
          //blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          authorsMapPath: 'authors.yml',
          feedOptions: {
            type: 'all',
          },
           // Please change this to your repo.
           // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'),require.resolve('./src/css/fontawesome/css/all.min.css')],
        },
      }),
    ],
  ],
  //added for searchbox
  //themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/jpg',
      navbar: {
        title: 'Trickys.gg Docs',
        logo: {
          alt: 'TDocs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            href: '/hrplaws',
            label: 'HRP Laws',
            position: 'left',
          },
          {
            href: '/updates',
            label: 'Updates',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://translate.trickys.gg',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            href: 'https://trickys.gg',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Stormworks',
                to: '/category/stormworks',
              },
              {
                label: 'API',
                to: '/category/API',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/trickys',
              },
              {
                label: 'SW Server List',
                href: 'https://swservers.gg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Site',
                href: 'https://trickys.gg',
              },
              {
                label: 'Status',
                href: 'https://status.trickys.gg',
              },
            ],
          },
        ],
        copyright: `Copyright © Tricky's Server 2020 - ${new Date().getFullYear()} All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json'],
      },
      metadata: [
        // {name: 'generator', content: 'trickys.gg'},
        {name: 'theme-color', content: '#375a7f'},
        {property: 'og:site_name', content: 'docs.trickys.gg'},
      ],
      // announcementBar: {
      // id: 'steamwarning',
      // content: 'Steam Support does not reach out to people by Steam chat or Discord. Anyone approaching you that says they\'re from Steam Support (or Trickys) and asks for your account information or items is a scammer.',
      // backgroundColor: '#375a7f',
      //   textColor: '#fff',
      // isCloseable: false,
      // },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      //added for searchbox
      algolia: {
        // The application ID provided by Algolia
        appId: 'YUKMLE6VK3',

        // Public API key: it is safe to commit it
        apiKey: '99b616e3c75e65347301204f0ee5e0c5',

        indexName: 'trickystrickys',

        // Optional: see doc section below
        contextualSearch: true,
        //ef376cc7bf02051d179a4932e5fdafa0
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
        //from: '/docs/', // or as RegExp: /\/docs\//
        //to: '/',
        //},

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

    }),
};

module.exports = config;
