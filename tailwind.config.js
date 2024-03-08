
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		colors: {
			'lightgray': '#F8F8F4',
			'darkgray': '#A5A5A5',
			'white': '#FFFFF9',
			'lightwhite': '#F2F2F2',
			'darkblue': '#180F4A',
			'green': '#92D050',
			'lightblue': '#00B0F0',
			'brown': "#B67100",
			'yellow': '#FFFF00',
			'pink': '#FF99CC',
			'red': '#FF0000',
			'black': '#1C1B1F',
			'transparent': 'transparent'
		},
		screens: {
			
			sm: "640px",
			// => @media (min-with: 640px) { ... }
	
			md: "768px", 
			// => @media (min-with: 768px) { ... }
	
			lg: "1024px",
			// => @media (min-with: 1024px) { ... }
			},
		
		extend: {
		}
	},
	plugins: [],
}

