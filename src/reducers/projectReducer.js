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
      const { lists, projectId } = action.payload
      const oldState = current(state)
      const result = oldState.map(project => {
        return project.id === projectId ? {...project, lists: lists} : project
      })
      return result
    },

    createIssue: (state, action) => {
      const { issue, listId, projectId } = action.payload
      let stateCopy = [...current(state)]
      const projectIndex = stateCopy.findIndex(project => project.id === projectId)
      const listIndex = stateCopy[projectIndex].lists.findIndex(list => list.id === listId)
      stateCopy[projectIndex].lists[listIndex].issues.push(issue)
      return stateCopy


    }

  }
})

export const { setProjects, setLists, createIssue } = projectSlice.actions

export const initProjects = () => async (dispatch) => {
  const projects = await getAll()
  dispatch(setProjects(projects))
}

export default projectSlice.reducer