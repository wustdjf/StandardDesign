import { defineConfig } from 'dumi'
import path from 'path'
import siteStyle from './siteStyle'

let base: string | undefined
let publicPath: string | undefined

if (process.env.PREVIEW !== '1') {
	base = '/standard-design/'
	publicPath = '/standard-design/'
}

export default defineConfig({
	base,
	publicPath,
	title: 'Standard Design', // 站点名称
	outputPath: 'docs-dist', // 输出文件夹
	apiParser: {},
	resolve: {
		docDirs: ['docs'],
		atomDirs: [
			{ type: 'component', dir: '/packages/standard-design/src/components' }
		],
		codeBlockMode: 'passive',
		entryFile: './packages/standard-design/src/index.ts'
	},
	alias: {
		'@djf/standard-design': path.join(__dirname, 'packages/standard-design/src')
	},
	styles: [siteStyle],
	themeConfig: {
		name: 'Standard Design',
		carrier: 'dumi', // 设备状态栏左侧的文本内容
		hd: true,
		rtl: true,
		footer:
			'Copyright © 2000-2024 Standard Design. All Rights Reserved. Standard Design 版权所有. 沪ICP备2024018069号',

		sidebar: {
			'/components': [
				{
					title: '组件',
					children: [{ title: 'alert', link: '/components/alert' }]
				},
				{
					title: '工具库',
					children: [{ title: 'i18n', link: '/components/i18n' }]
				}
			]
		},
		nav: [
			{ title: '指南', link: '/guide' },
			{ title: '组件', link: '/components/alert' }
		]
	}
})
