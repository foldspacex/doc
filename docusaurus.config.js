const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@foldspace/types').foldspaceConfig} */
module.exports = {
  title: 'FoldSpace',
  tagline: 'The Easiest Way to Debug Microservices in Kubernetes',
  url: 'https://foldspace.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FoldSpace', // Usually your GitHub org/user name.
  projectName: 'foldspace', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'foldspace',
      logo: {
        alt: 'foldspace',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/foldspace',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/foldspace',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/wZgYvD9HgQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/foldspacex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/foldspacex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FoldSpace, Inc. Built with &#9829;`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/foldspacex/doc/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/foldspacex/doc/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
