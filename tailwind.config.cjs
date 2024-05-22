//tailwind.config.cjs
/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: [
	  './src/**/*.{html,js,svelte,ts}',
	  './src/routes/**/*.{html,js,svelte,ts}',
	],
	theme: {
	  extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
	  themes: ["black"],
		extend: {
			colors: {
				'regal-blue': '#833ab4',
				'regal-red': '#fd1d1d',
				'regal-yellow': '#fcb045',
			},
		}
	},
  }
  
