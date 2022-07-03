import { createSlice } from '@reduxjs/toolkit'
import { create } from '../services/issueService'

const issueSlice = createSlice({
  name: 'issues',
  initialState: [],
  reducers: {
    setIssues: (state, action) => action.payload,
    appendIssue: (state, action) => state.push(action.payload),
  },
})

export const { setIssues, appendIssue } = issueSlice.actions

export const createIssue = (content) => async (dispatch) => {
  const newIssue = await create(content)
  dispatch(appendIssue(newIssue))
}

export default issueSlice.reducer
