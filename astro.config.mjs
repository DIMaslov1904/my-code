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
			sidebar: [
				{ label: 'HTML', autogenerate: { directory: 'front_html' } },
				{ label: 'CSS', autogenerate: { directory: 'front_css' } },
				{ label: 'JS', autogenerate: { directory: 'front_js' } },
				{ label: 'Python', autogenerate: { directory: 'back_python' } },
				{ label: 'PHP', autogenerate: { directory: 'back_php' } },
				{ label: 'Bitrix', autogenerate: { directory: 'back_bitrix' } },
				{ label: 'Exel', autogenerate: { directory: 'pc_exel' } },

			],
		}),
	],
});
