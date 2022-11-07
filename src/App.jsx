import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initProjects } from './reducers/project'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'


import { 
  Routes, 
  Route,
  useMatch,
  useNavigate,
 } from 'react-router-dom'

import styled from 'styled-components'
import { CookiesProvider } from 'react-cookie';

const AppStyle = styled.div`
 height: 100vh;
 background-color: #E6E6E6;
`
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <CookiesProvider>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/project/:id" element={ <HomePage />} />
        </Routes>
    </CookiesProvider>

  )
}

export default App
