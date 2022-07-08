import { useEffect } from 'react'
import Column from './components/List'
import Filters from './components/Filters'
import Projects from './components/Projects'
import NavBar from './components/NavBar'


import { initIssues } from './reducers/issueReducer'
import { initProjects } from './reducers/projectReducer'
import { initFilter } from './reducers/filterReducer'

import { useDispatch, useSelector } from 'react-redux'

import Project from './components/Project'

import './App.css'

import { 
  Button, 
  Box 
} from '@mui/material'

import { 
  Routes, 
  Route,
  useMatch,
  useNavigate,
 } from 'react-router-dom'

import { ConstructionOutlined, ViewHeadline } from '@mui/icons-material'



function App() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  return (
    <Box height="100vh" backgroundColor='lightgray' >
      <NavBar/>

      <Routes>
        <Route path="/" element={<Project/>} />
        <Route path="/projects/:id" element={projects !== null && <Project />} />
      </Routes>
    </Box>

  )
}

export default App
