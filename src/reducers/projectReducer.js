import { current, createSlice } from '@reduxjs/toolkit'
import projectService from '../services/projectService'
import issueService from '../services/issueService'
import listService from '../services/listService'


const projectSlice = createSlice({
  name: 'projects',
  initialState: null,
  reducers: {
    setProjects: (state, action) => { 
      return action.payload
    },
    setProject: (state, action) => {
      const newProject = action.payload
      console.log('np', newProject)
      const newState = current(state).map(project => project.id === newProject.id ? newProject : project)
      console.log('ns', newState)
      return newState
    },
    setLists: (state, action) => {
      const { lists, projectId } = action.payload
      const oldState = current(state)
      const result = oldState.map(project => {
        return project.id === projectId ? {...project, lists: lists} : project
      })
      return result
    },

    addIssue: (state, action) => {
      const { issue, listId, projectId } = action.payload

      const projectIndex = state.findIndex(project => project.id === projectId)
      const listIndex = state[projectIndex].lists.findIndex(list => list.id === listId)

      const issuesCopy = [...state[projectIndex].lists[listIndex].issues]
      issuesCopy.push(issue)
      state[projectIndex].lists[listIndex].issues = issuesCopy
    },

    addList: (state, action) => {
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

export const { setProjects, setProject, setLists, addIssue, addList } = projectSlice.actions

export const initProjects = () => async (dispatch) => {
  const projects = await projectService.getAll()
  dispatch(setProjects(projects))
}

export const createProject = () => async (dispathc) => {

}

export const createIssue = (issue) => async (dispatch) => {
  const updatedProject = await issueService.create(issue)
  console.log(updatedProject)
  dispatch(setProject(updatedProject))
}

export const deleteIssue = (id) => async (dispatch) => {
  const updatedProject = await issueService.remove(id)
  console.log(updatedProject)
  dispatch(setProject(updatedProject))
}


export const deleteList = (id) => async (dispatch) => {
  const updatedProject = await listService.remove(id)
  console.log(updatedProject)
  dispatch(setProject(updatedProject))
}

export const createList = (list) => async (dispatch) => {
  const updatedProject = await listService.create(list)
  console.log(updatedProject)
  dispatch(setProject(updatedProject))
}



export default projectSlice.reducer