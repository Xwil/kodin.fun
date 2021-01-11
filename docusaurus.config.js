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
		navbar: {
			title: 'cuvii的游乐场',
			items: [
				{ label: 'HTML/CSS', to: 'htmlcss' },
				{ label: 'JavaScript', to: 'javascript' },
				{ label: '框架' },
				{ label: '浏览器' },
				{ label: '网络' },
				{ label: '工程化' },

				{ to: 'blog', label: 'Blog', position: 'right' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} cuvii. Built with Docusaurus.`,
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
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/Xwil/kodin.fun/edit/master',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
