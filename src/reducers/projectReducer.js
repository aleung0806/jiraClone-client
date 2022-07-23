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

      const projectIndex = state.findIndex(project => project.id === projectId)
      const listIndex = state[projectIndex].lists.findIndex(list => list.id === listId)

      const issuesCopy = [...state[projectIndex].lists[listIndex].issues]
      issuesCopy.push(issue)
      state[projectIndex].lists[listIndex].issues = issuesCopy
    },

    createList: (state, action) => {
      const { list, projectId } = action.payload
      console.log(list)
      console.log(projectId)


      const projectIndex = state.findIndex(project => project.id === projectId)
      const listsCopy = [...state[projectIndex].lists]
      listsCopy.push(list)
      state[projectIndex].lists = listsCopy

    }

  }
})

export const { setProjects, setLists, createIssue, createList } = projectSlice.actions

export const initProjects = () => async (dispatch) => {
  const projects = await getAll()
  dispatch(setProjects(projects))
}

export const createProject = () => async (dispathc) => {

}

export default projectSlice.reducer