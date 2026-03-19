module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
  	extend: {
  		fontFamily: {
  			'jim-pam': [
  				'jim-pam'
  			],
  			'little-spark': [
  				'little-spark'
  			],
  			'boom-roasted': [
  				'boom-roasted'
  			],
  			marion: [
  				'marion'
  			],
  			raleway: [
  				'Ubuntu'
  			],
  			inconsolata: [
  				'Inconsolata'
  			],
  			montserrat: [
  				'Montserrat'
  			],
  			lobster: [
  				'Lobster'
  			],
  			merri: [
  				'Merriweather'
  			],
  			pacifico: [
  				'Pacifico'
  			],
  			arvo: [
  				'Arvo'
  			],
  			'serif-display': [
  				'DM Serif Display'
  			],
  			bitter: [
  				'Bitter'
  			],
  			// High Desert Modern Typography
  			'headline': [
  				'var(--font-fraunces)',
  				'serif'
  			],
  			'body': [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			'display': [
  				'var(--font-fraunces)',
  				'serif'
  			]
  		},
  		colors: {
  			'pink': '#e3c7b9',
  			'white': '#ffffff',
  			'powder-blue': '#e9fffeff',
  			'sky-blue': '#00c9fd',
  			'sea-green': '#cdd5beff',
  			'deep-orange': '#c56f25ff',
  			'forest-green': '#73A276',
  			'mint-cream': '#EFF8F0',
  			'cafe-noir': '#4E3822',
  			'beaver-brown': '#AB8476',
  			'emerald-green': '#4D9078',
  			'beige': '#E3E7D3',
  			'Gold-Crayola': '#F2C57C',
  			'Jet': '#353535',
  			'White': '#ffffff',
  			'Light-Gray': '#d2d7df',
  			'Gray-Gray': '#bdbbb0',
  			'dark-green': '#8A897C',
  			'Battleship-Grey': '#818479',
  			'Cambridge-Blue': '#b5cbb7',
  			'Tea-Green': '#d2e4c4',
  			'Pale-Spring-Bud': '#e4e9b2',
  			'Snow': '#F7F0F0',
  			'cultured-white': '#F9F9F9',
  			// High Desert Modern Palette (refined)
  			'adobe-cream': '#F9F7F4',      // Warmer white, less peachy
  			'adobe-light': '#EFEBE6',      // Subtle warm gray
  			'red-clay': '#B85C38',         // Sophisticated burnt sienna
  			'desert-marigold': '#C9A66B',  // Muted gold, less saturated
  			'dusty-olive': '#7D8E7A',      // Desert brush, earthy green
  			'adobe-dark': '#6B6358',       // Warm charcoal
  			'adobe-darker': '#2D2926',     // Near-black, warm
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'warm': '0 4px 24px rgba(45, 41, 38, 0.08)',
  			'warm-lg': '0 12px 48px rgba(45, 41, 38, 0.12)',
  			'subtle': '0 1px 3px rgba(45, 41, 38, 0.06)'
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/forms"),
      require("tailwindcss-animate")
],
}
