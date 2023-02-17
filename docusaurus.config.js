// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/themes/trickytheme');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Trickys Docs',
  tagline: 'Docs For Everyone',
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
    locales: ['en', 'nl', 'fr','de', 'jp', 'no', 'pl', 'es'],
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
        label: 'Dutch',
        direction: 'ltr',
        htmlLang: 'nl',
        calendar: 'gregory',
        path: 'nl',
      },
      fr: {
        label: 'French',
        direction: 'ltr',
        htmlLang: 'dr',
        calendar: 'gregory',
        path: 'fr',
      },
      de: {
        label: 'German',
        direction: 'ltr',
        htmlLang: 'de',
        calendar: 'gregory',
        path: 'de',
      },
      jp: {
        label: 'Japanese',
        direction: 'ltr',
        htmlLang: 'ja',
        calendar: 'gregorian',
        path: 'ja',
      },
      no: {
        label: 'Norwegian (Norsk Bokmål)',
        direction: 'ltr',
        htmlLang: 'no',
        calendar: 'gregory',
        path: 'no',
      },
      pl: {
        label: 'Polish',
        direction: 'ltr',
        htmlLang: 'pl',
        calendar: 'gregory',
        path: 'pl',
      },
      es: {
        label: 'Spanish',
        direction: 'ltr',
        htmlLang: 'es',
        calendar: 'gregory',
        path: 'es',
      },
  },
},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com',
        // },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'),require.resolve('./src/css/fontawesome/css/all.min.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/jpg',
      navbar: {
        title: 'Trickys.gg Docs',
        logo: {
          alt: 'My Site Logo',
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
            href: '/hrpgovdocs',
            label: 'HRP Gov',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
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
                to: '/docs/category/stormworks',
              },
              {
                label: 'API',
                to: '/docs/category/API',
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
      announcementBar: {
        id: 'beta',
        content:
          'New Docs for Trickys Server, if you have any suggestions or feedback please let us know',
        backgroundColor: '#375a7f',
        textColor: '#fff',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
