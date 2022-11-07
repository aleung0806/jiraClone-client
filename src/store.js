import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './reducers/project'
import authReducer from './reducers/auth'

const store = configureStore({
  reducer: {
    projects: projectReducer,
    auth: authReducer
  },
})

export default store
