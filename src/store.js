import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './reducers/projectReducer'
import userReducer from './reducers/userReducer'

const store = configureStore({
  reducer: {
    projects: projectReducer,
    users: userReducer
  },
})

export default store
