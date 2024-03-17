import { env } from 'node:process';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxt/image',
		'nuxt-appwrite',
		'nuxt-icon',
	],
	ssr: false,
	appwrite: {
		endpoint: env.APPWRITE_ENDPOINT,
		project: env.APPWRITE_ID,
	},
	colorMode: {
		classSuffix: '',
	},
	shadcn: {
		componentDir: './src/shared/ui',
	},
	tailwindcss: {
		cssPath: './src/app/styles/_index.css',
	},
	css: [
		'@/app/styles/_index.css',
	],
	devtools: { enabled: true },
	srcDir: 'src/',
	typescript: {
		strict: true,
		// typeCheck: true,
	},
	dir: {
		assets: 'app/assets',
		public: 'app/public',
		middleware: 'app/providers/router/middleware',
		plugins: 'app/plugins',
		layouts: 'shared/ui/layout',
	},
	components: [],
	imports: {
		dirs: [],
		autoImport: true,
	},
});
