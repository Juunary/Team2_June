/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				textBlack: '#222222',
				textLightBlack: '#373737',
				textGrey: '#A2A2A4',
				backgroundGrey: '#F6F6F6',
				kwRed: '#890F1F',
				darkGrey: '#D9D9D9',
			},
		},
	},
	plugins: [],
};
