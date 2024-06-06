import { env } from 'node:process';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxt/image',
		'@nuxtjs/supabase',
		'nuxt-icon',
		'@vueuse/nuxt',
	],
	ssr: true,
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
	},
	dir: {
		assets: 'app/assets',
		public: 'app/public',
		middleware: 'app/providers/router/middleware',
		plugins: 'app/plugins',
		layouts: 'layouts',
	},
	components: [
		{
			path: 'widgets',
			pathPrefix: false,
		},
		{
			path: 'features',
			pathPrefix: false,
		},
		{
			path: 'entities',
			pathPrefix: false,
		},
		{
			path: 'shared',
			pathPrefix: false,
		},
	],
	pinia: {
		storesDirs: [
			'./src/widgets/**/model/*.ts',
			'./src/features/**/model/*.ts',
			'./src/entities/**/model/*.ts',
			'./src/shared/**/model/*.ts',
		],
	},
	runtimeConfig: {
		app: {
			supabaseServiceKey: env.SUPABASE_SERVICE_KEY,
		},
	},
});
