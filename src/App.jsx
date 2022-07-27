import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { initProjects } from './reducers/projectReducer'
import { initUsers } from './reducers/userReducer'

import HomePage from './components/pages/HomePage'
import ProjectPage from './components/pages/ProjectPage'

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
  //const loggedInUser = useSelector(state => state.user.loggedInUser)

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  useEffect(() => {
    dispatch(initUsers())
  }, [])

  

  return (
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/projects/:id" element={ <ProjectPage />} />
        </Routes>

  )
}

export default App
