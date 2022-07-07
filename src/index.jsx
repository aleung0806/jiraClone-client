import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </Provider>
  </Router>

)
