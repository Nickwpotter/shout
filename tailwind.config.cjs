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
	  themes: [
		{
		  mytheme: {
			"primary": "#76c7c0", // pastel blue
			"secondary": "#ffadad", // pastel red
			"accent": "#ffda77", // pastel yellow
			"neutral": "#ffffff", // white
			"base-100": "#f0f4f8", // very light grey
			"info": "#5bc0de", // light blue
			"success": "#5cb85c", // light green
			"warning": "#f0ad4e", // light orange
			"error": "#d9534f", // light red
		  },
		},
	  ],
	},
  }
  
