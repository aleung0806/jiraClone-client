import { useEffect } from 'react'
import Column from './components/List'
import Filters from './components/Filters'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

import { initIssues } from './reducers/issueReducer'
import { initProjects } from './reducers/projectReducer'
import { initFilter } from './reducers/filterReducer'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@mui/material'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initProjects())
  }, [])

  return (
    <div>
      <NavBar/>
      <Projects />

    </div>
  )
}

export default App
