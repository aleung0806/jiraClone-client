import { useEffect } from 'react'
import NavBar from './components/NavBar'

import { initProjects } from './reducers/projectReducer'

import { useDispatch, useSelector } from 'react-redux'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import SideMenu from './components/SideMenu'

import './App.css'

import { 
  Button, 
  Box 
} from '@mui/material'
import { ConstructionOutlined, ViewHeadline } from '@mui/icons-material'


import { 
  Routes, 
  Route,
  useMatch,
  useNavigate,
 } from 'react-router-dom'

import styled from 'styled-components'

const AppStyle = styled.div`
 height: 100vh;
 background-color: #E6E6E6;
`
function App() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  const match = useMatch('./projects/:id')
  const loggedInUser = useSelector(state => state.user.loggedInUser)

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  return (
    <Box >
      <NavBar/>
      <SideMenu/>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/" element={ <HomePage />} />
            <Route path="/projects/:id" element={ <ProjectPage />} />
        </Routes>
      </Box>
    </Box>

  )
}

export default App
