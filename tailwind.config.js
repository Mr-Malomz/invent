module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'brand-blue': '#1E3A8A',
				'brand-black': '#181B25',
				'brand-grey': '#5E616A',
				'brand-white': '#FDFDFF',
				'brand-blue-hover': '#0A277A',
			},
		},
		fontFamily: {
			display: ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
