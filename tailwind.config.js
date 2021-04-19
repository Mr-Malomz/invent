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
				'brand-bg': '#E9E8F5',
				'brand-cancel': '#B4BBD9',
				'brand-status-done': '#E3FCEC',
				'brand-status-submitted': '#FCEBEA',
				'brand-status-active': '#B3D7C8',
				'brand-status-deactivated': '#CCBDC6',
			},
		},
		fontFamily: {
			display: ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
