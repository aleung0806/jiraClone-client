import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer'
import issueReducer from './reducers/issueReducer'
import projectReducer from './reducers/projectReducer'

const store = configureStore({
  reducer: {
    projects: projectReducer,
    issues: issueReducer,
    filters: filterReducer,
  },
})

export default store
