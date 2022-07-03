import { createSlice } from '@reduxjs/toolkit'
import { getAll, create } from '../services/issueService'

const issueSlice = createSlice({
  name: 'issues',
  initialState: [],
  reducers: {
    setIssues: (state, action) => {
      console.log(action.payload)
      return action.payload
    },
    appendIssue: (state, action) => state.push(action.payload),
  },
})

export const { setIssues, appendIssue } = issueSlice.actions

export const initIssues = () => async (dispatch) => {
  const issues = await getAll()
  dispatch(setIssues(issues))
}

export const createIssue = (content) => async (dispatch) => {
  const newIssue = await create(content)
  dispatch(appendIssue(newIssue))
}

export default issueSlice.reducer
