import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [createVuePlugin(/* options */)],
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
