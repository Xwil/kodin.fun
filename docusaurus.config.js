module.exports = {
	title: 'cuvii的游乐场',
	// tagline: 'The tagline of my site',
	url: 'https://kodin.fun',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'cuvii', // Usually your GitHub org/user name.
	projectName: 'kodin.fun', // Usually your repo name.
	themeConfig: {
		hideableSidebar: true,
		navbar: {
			title: 'cuvii的游乐场',
			items: [
				{ label: 'HTML/CSS', to: 'htmlcss' },
				{ label: 'JavaScript', to: 'javascript' },
				{ label: '框架' },
				{ label: '浏览器' },
				{ label: '网络' },
				{ label: '工程化' },
				{ label: '读书笔记', to: 'books' },
				{ to: 'blog', label: 'Blog', position: 'right' },
				{
					href: 'https://github.com/Xwil/kodin.fun',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'light',
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} cuvii. Built with Docusaurus.`,
		},
		prism: {
			theme: require('prism-react-renderer/themes/dracula'),
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					routeBasePath: '/',
					editUrl: 'https://github.com/Xwil/kodin.fun/edit/master',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/Xwil/kodin.fun/edit/master',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				sitemap: {
					cacheTime: 600 * 1000, // 600 sec - cache purge period
					changefreq: 'weekly',
					priority: 0.5,
					trailingSlash: false,
				},
			},
		],
	],
	themes: ['@docusaurus/theme-live-codeblock'],
};
