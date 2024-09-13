import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'
const path = require('path')
const fs = require('fs')

const packagesDir = path.resolve(__dirname, '../../packages')
const packageAliases = {}

fs.readdirSync(packagesDir).forEach((dir) => {
  if (dir.startsWith('.')) {
    return
  }

  const packagePath = path.resolve(packagesDir, dir)
  if (fs.statSync(packagePath).isDirectory()) {
    packageAliases[`@midas-ds/${dir}`] = path.resolve(
      packagePath,
      'src/index.ts'
    )
  }
})

const config: Config = {
  title: 'MIDAS',
  tagline: 'Migrationsverket Designsystem',
  url: 'https://migrationsverket.github.io',
  baseUrl: '/midas/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'migrationsverket', // Usually your GitHub org/user name.
  projectName: 'midas', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },
  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: packageAliases,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', '@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //We don't want people to edit our sites! 
          // editUrl:
          //   'https://github.com/migrationsverket/midas/edit/main/apps/docs',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Alla inlägg',
          blogSidebarCount: 'ALL',
          // // Please change this to your repo.
          //We don't want people to edit our sites! 
          // editUrl:
          //   'https://github.com/migrationsverket/midas/edit/main/apps/docs/blog',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ],
        },
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'open_source',
      content:
        'MIDAS är nu open sourced! <a href="/midas/blog/midas-open-source">Läs mer om vad det innebär.</a>',
      isCloseable: false,
    },

    navbar: {
      title: 'MIDAS',
      logo: {
        alt: 'Midas Logo',
        src: 'img/MIDAS_crown.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'components/index',
          position: 'left',
          label: 'Designsystem',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Nyheter',
        },
        {
          to: '/about',
          position: 'left',
          label: 'Om',
        },
        {
          href: 'https://github.com/migrationsverket/midas',
          label: 'GitHub',
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
              label: 'Kom igång',
              to: 'get-started',
            },
            {
              label: 'Grunderna',
              to: 'basics',
            },
            {
              label: 'Komponenter',
              to: 'components',
            },
            {
              label: 'Designmönster',
              to: 'design-patterns',
            },
          ],
        },
        {
          title: 'Övrigt',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/migrationsverket/midas',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/org/midas-ds',
            },
          ],
        },
      ],
      copyright: `Migrationsverkets designsystem - MIDAS`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      //darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
