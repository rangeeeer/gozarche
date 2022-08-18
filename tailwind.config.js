/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
  	extend:{
	  	colors: {
			primary: {
				100: '#fcdcd1',
		  		200: '#fab9a3',
		  		300: '#f79574',
		  		400: '#f57246',
		  		500: '#f24f18',
		  		600: '#c23f13',
		  		700: '#912f0e',
		  		800: '#61200a',
		  		900: '#301005',
			},
			   secondary:{
				  100: '#d0f7e9',
				  200: '#a2f0d3',
				  300: '#73e8bd',
				  400: '#45e1a7',
				  500: '#16d991',
				  600: '#12ae74',
				  700: '#0d8257',
				  800: '#09573a',
				  900: '#042b1d',
			       },
			},
		},
  },
  plugins: [],
}
