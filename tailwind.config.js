module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
   		extend: {
        fontSize: {
             base: '1rem',
          xl: '1.25rem',
          xls: '3.438rem',
        },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
       },      
      colors: {
        red: {
          500: '#FE6C47',
        },
        orange: {
          500: '#FCAE31',
        },
        black:{
          500: '#000',
        },
        gray:{
          500: '#E4E4E4',
        },
        container: {
          // default breakpoints but with 40px removed
          screens: {
             xl: '1200px',
         },
        },
         
        
        fontSize: {
          sm: '0.875',
          base: '1rem',
        
        },
        fontweight: {
          extrabold: '900',
          base: '1rem',
        
        },
          
      },

      
    },
    
	},
	variants: {
		extend: {},
	},
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
	plugins: [     require('tw-elements/dist/plugin')  ] ,
};




