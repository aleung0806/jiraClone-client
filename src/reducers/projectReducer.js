import { current, createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/projectService'

const projectSlice = createSlice({
  name: 'projects',
  initialState: null,
  reducers: {
    setProjects: (state, action) => {
      return action.payload
    },
    setLists: (state, action) => {
      console.log('state', current(state))
      console.log('action', action.payload)
      const oldState = current(state)
      const result = oldState.map(project => {
        console.log(project)
        return project.id === '1' ? {...project, lists: action.payload} : project
      })
      console.log('result', result)
      return result
    }

  }
})

export const { setProjects, setLists } = projectSlice.actions

export const initProjects = () => async (dispatch) => {
  const projects = await getAll()
  dispatch(setProjects(projects))
}

export default projectSlice.reducer