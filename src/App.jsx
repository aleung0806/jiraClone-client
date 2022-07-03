import { useEffect } from 'react'
import Issues from './components/Issues'
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
      <Issues />
    </div>
  )
}

export default App
