import { useEffect } from 'react'
import Column from './components/List'
import Filters from './components/Filters'
import NavBar from './components/NavBar'


import { initIssues } from './reducers/issueReducer'
import { initProjects } from './reducers/projectReducer'
import { initFilter } from './reducers/filterReducer'

import { useDispatch, useSelector } from 'react-redux'

import ProjectPage from './components/ProjectPage'

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
import styled from 'styled-components'

const AppStyle = styled.div`
 height: 100vh;
 background-color: #E6E6E6;
`


function App() {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  const match = useMatch('./projects/:id')

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  return (
    <AppStyle >
      <NavBar/>
      <Routes>
          <Route path="/projects/:id" element={ <ProjectPage />} />
      </Routes>
    </AppStyle>

  )
}

export default App
