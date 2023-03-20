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

      error: {
        main: "#d32f2f"
      }
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
      MuiTextField: {
        defaultProps: {
          variant: 'standard'
        }
      },
      MuiInput: {
        defaultProps: {
          fullWidth: true,
          disableUnderline: true,
        },
        styleOverrides: {
          input: {
            padding: "8px 6px"

          },
          root: {
            border: `2px solid #FFFFFF`,
            '&&:hover': {
              backgroundColor: '#EBECF0',
            },
            '&.Mui-focused': {
              border: `2px solid #4C9AFF`,
              backgroundColor: '#FFFFFF',

              '&&:hover': {
                backgroundColor: '#FFFFFF',
              },
            },
            '&.Mui-error': {
              border: `2px solid #d32f2f`,

            }

          },
        },
        variants: [
          {
            props: { 
              variant: 'login',
            },
            style: {
              padding: 0,
              border: `2px solid #DFE1E6`,
              borderRadius: "3px",
              width: "320px", 
              fontSize: 14, 
              
              marginTop: "8px",

            }
          },
          {
            props: { 
              variant: 'outlined',

            },
            style: {
            },
          }
        ],
      },
      MuiButton: {
        defaultProps: {

        },
        variants: [
          {
            props: { 
              variant: 'login',
            },
            style: {
              width: "320px",
              borderRadius: "3px",
              backgroundColor: '#0052CC', 
              color: '#FFFFFF', 
              fontSize: '14px', 
              textTransform: 'none', 
              height: '40px', 
              padding: 0,
              '&&:hover': {
                backgroundColor: '#0065FF',
              },

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