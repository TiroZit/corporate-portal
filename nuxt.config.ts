import { env } from 'node:process';
import { defineNuxtConfig } from 'nuxt/config';
import {
	em,
	fluid,
	percent,
} from './config/postcss/functions';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
	],
	colorMode: {
		classSuffix: '',
	},
	shadcn: {
		componentDir: './src/shared/ui',
	},
	ssr: false,
	devtools: { enabled: true },
	srcDir: 'src/',
	typescript: {
		strict: true,
	},
	vue: {
		propsDestructure: true,
	},
	tailwindcss: {
		cssPath: './src/app/styles/_index.css',
	},
	css: [
		'@/app/styles/_index.css',
	],
	runtimeConfig: {
		app: {
			APPWRITE_ENDPOINT: env.APPWRITE_ENDPOINT,
			APPWRITE_ID: env.APPWRITE_ID,
			APPWRITE_DB_ID: env.APPWRITE_DB_ID,
		},
	},
	postcss: {
		plugins: {
			'autoprefixer': true,
			'postcss-pxtorem': {
				propList: [
					'*',
				],
				selectorBlackList: [
					'line-height',
					'letter-spacing',
				],
			},
			'postcss-functions': {
				functions: {
					fluid,
					em,
					percent,
				},
			},
			'postcss-sort-media-queries': true,
		},
	},
	dir: {
		assets: 'app/assets',
		public: 'app/public',
		middleware: 'app/providers/router/middleware',
		plugins: 'app/plugins',
		layouts: 'shared/ui/layouts',
	},
	components: [
		{
			path: 'shared',
			extensions: ['.vue'],
			prefix: 'Shared',
		},
		{
			path: 'features',
			extensions: ['.vue'],
			prefix: 'Feature',
		},
		{
			path: 'widgets',
			extensions: ['.vue'],
			prefix: 'Widget',
		},
		{
			path: 'entities',
			extensions: ['.vue'],
			prefix: 'Entity',
		},
	],
	imports: {
		dirs: [
			'shared/**/*.ts',
			'features/**/*.ts',
			'widgets/**/*.ts',
			'entities/**/*.ts',
		],
	},
});
