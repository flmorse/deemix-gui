import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

import { version } from './package.json'

export default defineConfig({
	plugins: [
		createVuePlugin(),
		replace({
			__VER__: JSON.stringify(version)
		})
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, '/src')
			},
			{
				find: '@components',
				replacement: path.resolve(__dirname, '/src/components')
			}
		]
	},
	optimizeDeps: {
		include: ['@vue/composition-api']
	}
})
