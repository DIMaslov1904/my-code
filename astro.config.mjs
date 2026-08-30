// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dimaslov1904.github.io',
	base: 'my-code',
	integrations: [
		starlight({
			title: 'Мой код',
			editLink: {
				baseUrl: 'https://github.com/DIMaslov1904/my-code/blob/main/',
			},
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
			},
		}),
	],
});
