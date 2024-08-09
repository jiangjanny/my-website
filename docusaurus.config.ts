import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
    title: "Janny's Blog",
    tagline: 'Frontend Engineer',
    favicon: 'img/favicon.ico',
    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    // staticDirectories: ['options'],
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/jiangjanny/my-website/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/jiangjanny/my-website/tree/master/',
                },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/main.css'],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Janny Site',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                { to: '/about', label: 'About', position: 'left' },
                { to: '/docs/網路安全/檔案上傳安全', label: 'Docs', position: 'left' },
                { to: '/blog/gitgnore', label: 'Blog', position: 'left' },

                {
                    href: 'https://github.com/jiangjanny',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://www.linkedin.com/in/%E5%AE%9C%E6%BD%94-%E8%94%A3-382825172/',
                    label: 'Linkedin',
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
                            href: '/docs/share',
                            label: '文章分享',
                        },
                    ],
                },
                {
                    title: 'Blog',
                    items: [
                        {
                            href: '/blog/Job',
                            label: '面試準備',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            href: 'https://github.com/jiangjanny',
                            label: 'GitHub',
                        },
                        {
                            href: 'https://www.linkedin.com/in/%E5%AE%9C%E6%BD%94-%E8%94%A3-382825172/',
                            label: 'Linkedin',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Janny jie.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config
