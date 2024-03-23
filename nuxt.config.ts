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
	],
	ssr: false,
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
		layouts: 'shared/ui/layout',
	},
	components: [],
	imports: {
		dirs: [],
		autoImport: true,
	},
});
