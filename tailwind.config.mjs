/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ["Palanquin", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'lightbrown': '#f7f5f2',
			},
		},
		
	},
	plugins: [],
}
