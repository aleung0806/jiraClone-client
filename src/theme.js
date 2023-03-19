import { createTheme,
  experimental_sx as sx, } from '@mui/material'

const theme = createTheme({

    palette: {
      primary: {
        main: '#172B4D', 
        light: '#979EAF', // medium gray
        contrast: '#FFFFFF' //white

      },
      secondary: {
        main: '#0052CC', //dark blue - for logo, accents
        light: '#F4F5F7' // very light gray
      },
      text: {
        primary: '#172B4D',
        secondary: '#5E6C84'
      },
      success: {
        main: '#00C380'
      },
      colors: {
        orangeRed: '#FF5630',
        purple: '#6554C0',
        green: '#36B37E',
        teal: '#00B8D9',
        gold: '#FFAB00'
      },
      
      grays: {
        darkest: '#172B4D',
        darker: '#5E6C84',
        medium: '#7A869A',
        light: '#DFE1E6',
        lighter: '#F4F5F7'
      },
    },

    typography: {
      darkestBold14: {
        color: '#7A869A',
        fontSize: '14px',
        fontWeight: '600'
      },
      faint: {
        fontSize: '12px',
        color: '#7A869A',

      },
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
    components: {
      MuiInput: {
        defaultProps: {
          fullWidth: true,
          disableUnderline: true,
          inputProps: {
            sx: {
              padding: 0.5
            }
          }
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '2px',
            border: `2px solid #FFFFFF`,
            '&&:hover': {
              backgroundColor: '#EBECF0',
            },
            '&.Mui-focused': {
              '&&:hover': {
                backgroundColor: '#FFFFFF',
                border: `2px solid #4C9AFF`
              },
              backgroundColor: '#FFFFFF',
              border: `2px solid #DFE1E6`
            }
          }
        },
        variants: [
          {
            props: { 
              variant: 'regular',
            },
            style: {

            }
          },
          {
            props: { 
              variant: 'outlined',

            },
            style: {
              border: `2px solid #DFE1E6`,
            },
          }
        ],
      },
      MuiIconButton: {
        defaultProps: {

        },
        styleOverrides: {

        },
        variants: [
          {
            props: { 
              variant: 'square',
            },
            style: {
                borderRadius: 1,
            }
          }
        ],
      },
      MuiModal: {
        defaultProps: {

        },
        styleOverrides: {

        },
        variants: [
          {
            props: { 
              variant: 'regular',
            },
            style: {

            }
          },
          {
            props: { 
              variant: 'outlined',

            },
            style: {
              border: `2px solid #DFE1E6`,
            },
          }
        ],
      },
    }
  
});

export default theme