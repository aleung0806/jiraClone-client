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

import { ViewHeadline } from '@mui/icons-material'



function App() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)

  const navigate = useNavigate()
  const match = useMatch(`/project/:id`)

  const project = (match && projects !== null)
    ? projects.find(project => project.id === Number(match.params.id))
    : null

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  useEffect(() => {
  },[project])



  return (
    <Box height="100vh" backgroundColor='lightgray' >
      <NavBar/>
      <Project/>

      {/* <Routes>
        <Route path="/" element={<Projects/>} />
        <Route path="/project/:id" element={project !== null && <Project project={project}/>} />
      </Routes> */}
    </Box>

  )
}

export default App
