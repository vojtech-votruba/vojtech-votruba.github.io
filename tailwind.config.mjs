/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
					smoke: '#e2e8f0',
					darkish: '#080807',
					lightish: '#f1f5f9',
					emerald: '#059669',
					cyan: '#22d3ee',
					redish: '#940d0d'
				  },
			fontFamily: {
			  libre: "'Libre Baskerville', serif",
			}
		},
	  },
	plugins: [],
}
