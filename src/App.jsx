import { useDispatch } from 'react-redux'
import { 
  Routes, 
  Route,
  useNavigate,
 } from 'react-router-dom'

 import { 
  Typography,
  IconButton,
  Box, 
  ThemeProvider
} from '@mui/material'

 import { Navigate } from 'react-router-dom'
 import { useState, useEffect } from 'react'
 import { useSelector } from 'react-redux'

import ProjectPage from './components/pages/ProjectPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import RegisterConfirmation from './components/login/RegisterConfirmation'
import TroubleShoot from './components/pages/TroubleShoot'
import NotFoundPage from './components/pages/NotFoundPage'


import { fetchUser } from './reducers/auth'
import { fetchAllProjects } from './reducers/allProjects'



function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)

  const user = useSelector(state => state.auth.user)
  const verified = useSelector(state => state.auth.verified)
  const projects = useSelector(state => state.allProjects)



  return (
    <Box>
      <Routes>
        <Route path="/" element={<LoginPage/> } />
        <Route path="login" element={<LoginPage/> } />
        <Route path="register" element={<RegisterPage/> } >
          <Route path='sent' element={<RegisterConfirmation/>} />
        </Route>

        <Route path="/project/:id" element={ <ProjectPage />} />
        <Route path="/troubleShoot" element={ <TroubleShoot />} />
      </Routes>
    </Box>
  )
}

export default App
