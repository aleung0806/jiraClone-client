import { createTheme } from '@mui/material'

const theme = createTheme({

    palette: {
      primary: {
        main: '#333F63', // dark blue/black - for main text/icons
        light: '#979EAF', // medium gray 

      },
      secondary: {
        main: '#2900CC', //dark blue - for logo, accents
        light: '#F4F5F7' // very light gray
      },
      text: {
        primary: '#172B4D',
        secondary: '#5E6C84'
        
      },
      success: {
        main: '#00C380'
      }
    },


    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  
  
});

export default theme