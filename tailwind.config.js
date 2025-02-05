/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			rubik: ['Rubik', 'sans-serif'],
			kaushan: ['Kaushan Script', 'cursive'],
		},
		accordion: {
			styles: {
				base: {
					header: {
						icon: 'hidden',
					},
				},
			},
		},
		extend: {
			backgroundImage: () => ({
				darkOverlay: "url('/images/background_overlay_dark.png'), radial-gradient(circle at center, #391818, #210e0e 50%) fixed",
				lightOverlay: "url('/images/background_overlay_light.png'), radial-gradient(circle at center, #efeae7, #fff8ee 50%) fixed",
			}),
			colors: {
				current: 'currentColor',
				white: '#ffffff',
				black: '#000000',
				red: '#dc3545',
				green: '#28a745',
				blue: '#007bff',
				primary: {
					100: '#391818',
					200: '#481e1e',
					300: '#562424',
					400: '#622a2a',
					500: '#622a2a',
				},
				secondary: {
					100: '#efeae7',
					200: '#e7dfda',
					300: '#ded4ce',
					400: '#d6c9c2',
					500: '#cebfb6',
				},
				text: {
					100: '#fff8ee', //primary
					200: '#aa9585', //secondary
					300: '#CC9902', //active link
					400: '#FFD84B', //hover link
				},
				background: {
					100: '#210e0e', //dark
					200: '#fff8ee', //light
				},
				transparent: {
					100: 'rgba(0, 0, 0, 0.1)', //dark
					200: 'rgba(256, 256, 256, 0.1)', //light
				},
			},
			fontSize: {
				hero: [
					'48px',
					{
						letterSpacing: '-0.02em;',
						lineHeight: '96px',
						fontWeight: 500,
					},
				],
			},
			keyframes: {
				slideIn: {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(-100%)',
					},
				},
				rainbowLight: {
					'0%': {
						backgroundPosition: '0% 50%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
					},
					'100%': {
						backgroundPosition: '0% 50%',
					},
				},
			},
			animation: {
				'slide-in': 'slideIn 0.3s forwards ease-out',
				'rainbow-light': 'rainbowLight 2s linear infinite',
			},
			screens: {
				'3xl': '1600px',
			},
		},
		plugins: [require('@tailwindcss/forms')],
		corePlugins: {},
	},
}
