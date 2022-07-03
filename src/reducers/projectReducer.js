import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/projectService'

const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    setProjects: (state, action) => {
      return action.payload
    }
  }
})

export const { setProjects } = projectSlice.actions

export const initProjects = () => async (dispatch) => {
  const projects = await getAll()
  dispatch(setProjects(projects))
}

export default projectSlice.reducer