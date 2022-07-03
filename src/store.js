import { configureStore } from '@reduxjs/toolkit'
import issueReducer from './reducers/issueReducer'

const store = configureStore({
  reducer: {
    issues: issueReducer,
  },
})

export default store
