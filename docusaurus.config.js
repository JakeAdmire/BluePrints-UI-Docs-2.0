module.exports = {
  title: 'blueprints-ui',
  tagline: 'A cleaner, better design system for ReactJS',
  url: 'https://blueprints-ui.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'JakeAdmire', // Usually your GitHub org/user name.
  projectName: 'BluePrints-UI-Docs-2.0', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'blueprints-ui',
      logo: {
        alt: 'BluePrints-UI logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: '/',
          label: 'Home',
          position: 'right',
        },
        {
          to: 'docs/getting-started/installation',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'right',
        },
        {
          to: 'docs/about/introduction',
          activeBasePath: 'docs',
          label: 'About',
          position: 'right',
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JakeAdmire/BluePrints-UI'
            },
            {
              label: 'Bug Report',
              href: 'https://github.com/JakeAdmire/BluePrints-UI/issues/new?assignees=JakeAdmire&labels=bug&template=bug_report.md&title=%F0%9F%90%9BBug%20Report:%20[YOUR%20PROBLEM%20HERE]',
            },
            {
              label: 'Request A Feature',
              href: 'https://github.com/JakeAdmire/BluePrints-UI/issues/new?assignees=JakeAdmire&labels=enhancement&template=feature_request.md&title=%E2%AD%90Feature:%20YOUR%20REQUEST%20HERE',
            },
          ],
        },
        {
          title: 'Contact Info',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jakeadmire/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JakeAdmire',
            },
            {
              label: 'Email',
              href: 'mailto:Jake@blueprints-ui.com',
            }
          ],
        },
        {
          title: 'Extras',
          items: [
            {
              label: 'Hire Me!',
              href: 'mailto:Jake@blueprints-ui.com?Subject=Hi Jake,%20I%20like%20your%20BluePrints-UI%20project!',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jake Admire. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/JakeAdmire/BluePrints-UI-Docs-2.0/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
