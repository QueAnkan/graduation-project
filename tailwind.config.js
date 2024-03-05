
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
	],
	Theme: {
		extend: {
			sm: "640px",
			// => @media (min-with: 320px) { ... }

			md: "768px", 
			// => @media (min-with: 768px) { ... }

			lg: "1024px",
			// => @media (min-with: 1024px) { ... }

			fontFamily: {
				merienda: ['Merienda', 'cursive']
		},
			
		}
	},
	plugins: [],
}