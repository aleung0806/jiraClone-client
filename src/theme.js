import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: '#7e7e7e',
      main: '#3f3f3f',
      dark: '#202020',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#9e9e9e',
      main: '#8e8e8e',
      dark: '#7e7e7e',
      contrastText: '#ffffff',
    },
  },
});

export default theme