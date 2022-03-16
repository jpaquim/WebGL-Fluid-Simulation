import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			server: {
				fs: {
					allow: ['packages']
				}
			}
		}
	}
};

export default config;
