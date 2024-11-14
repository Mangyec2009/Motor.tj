/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
	screens: {
		'3xl': { max: '1920px' },
		'2xl': { max: '1535px' },
		xl: { max: '1279px' },
		lg: { max: '1023px' },
		md: { max: '767px' },
		sm: { max: '639px' },
		xs: { max: '400px' },
	},
	extend: {
		borderRadius: {
		//   lg: 'var(--radius)',
		//   md: 'calc(var(--radius) - 2px)',
		//   sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'var(--background)',
		  card: {
		  DEFAULT: 'hsl(var(--card))',
		  primary: 'var(--primary)',
		  Primary_outlined: 'var(--Primary_outlined)',
		  Secondary_outlined: 'var(--Secondary_outlined)',
		  Secondary: 'var(--Secondary)',
		  textColor: 'var(--textColor)',
		  textWhite: 'var(--textWhite)',
		  hover: 'var(--hover)',
		  focus: 'var(--focus)',
		  },
		}
		}
  },
  plugins: [require("tailwindcss-animate")],
}

