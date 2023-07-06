/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				quicksand: [
					"Quicksand, sans-serif" // 3,4,5,6,7
				],
				arabic: [
					"Scheherazade New, serif" // 4,5,6,7
				],
			},
			colors: {
				primary_app: '#0d9488',
				light_app: '#e5e5e5',
				dark_app: '#262626'
			},
		}
	},
	plugins: [
		require('prettier-plugin-tailwindcss'),
		require("daisyui"),
	],
}

