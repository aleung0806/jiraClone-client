import { useEffect } from 'react'
import Column from './components/Column'
import Filters from './components/Filters'
import { initIssues } from './reducers/issueReducer'
import { initProjects } from './reducers/projectReducer'
import { initFilter } from './reducers/filterReducer'

import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initIssues())
    dispatch(initProjects())
  }, [])

  return (
    <div>
      <Filters />
      <Column name='Brainstorm'/>
      <Column name='Finished'/>

    </div>
  )
}

export default App
