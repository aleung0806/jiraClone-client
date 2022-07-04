import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: '#E4DCCF',
      main: '#576F72',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme