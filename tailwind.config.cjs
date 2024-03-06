/** @type {import('tailwindcss').Config}*/
const tailwind_theme = require('tailwindcss/defaultTheme')
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...tailwind_theme.fontFamily.sans],
				mono: ['Fira Mono', ...tailwind_theme.fontFamily.mono],	
		    }
		}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: ["light", "dark"], 	
		logs: false, 
	}
};

module.exports = config;
