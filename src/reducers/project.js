import { current, createSlice } from '@reduxjs/toolkit'
// import issueService from '../services/issueService'
// import listService from '../services/listService'
import processDragDrop from '../services/dragDropService'
import serviceMaker from '../services/serviceMaker'
import _ from 'lodash'
import projectService from '../services/project'

const listService = serviceMaker('list')
const issueService = serviceMaker('issue')


const projectSlice = createSlice({
  name: 'projects',
  initialState: null,
  reducers: {
    setProjects: (state, action) => { 
      return action.payload
    },

    addProject: (state, action) => { 
      state.push(action.payload)
    },

    removeProject: (state, action) => { 
      const projectId = action.payload
      return state.filter(project => project.id !== projectId)
    },

    addList: (state, action) => {
      const list = action.payload
      const projectId = list.projectId

      let projects = _.cloneDeep(state)
      projects
        .find(project => project.id === projectId)
        .lists.push(list)
      return projects
    },

    removeList: (state, action) => {
      const list = action.payload
      const listId = list.id
      const projectId = list.projectId

      return state.map(project => {
        return project.id === projectId 
          ? {...project, lists: project.lists.filter(list => list.id !== listId)}
          : project
      })

    },

    addIssue: (state, action) => {
      const issue = action.payload
      const listId = issue.listId
      const projectId = issue.projectId

      let projects = _.cloneDeep(state)
      projects
        .find(project => project.id === projectId)
        .lists.find(list => list.id === listId)
        .issues.push(issue)

      return projects
    },

    removeIssue: (state, action) => {
      const issue = action.payload
      const issueId = issue.id
      const listId = issue.listId
      const projectId = issue.projectId

      return state.map(project => {
        return project.id === projectId 
          ? {...project, lists: project.lists.map(list => {
            return list.id === listId
              ? {...list, issues: list.issues.filter(issue => issue.id !== issueId)}
              : list
            }
          )}
          : project
      })
    }

  }
})

export const { setProjects, addProject, removeProject, addList, removeList, addIssue, removeIssue } = projectSlice.actions

export const fetchProjects = (userId) => async (dispatch) => {
  const projects = await projectService.getByUser(userId)
  dispatch(setProjects(projects))
}

export const createProject = (project) => async (dispatch) => {
  const createdProject = await projectService.create(project)
  dispatch(addProject(createdProject))
}

export const deleteProject = (id) => async (dispatch) => {
  await projectService.remove(id)
  dispatch(removeProject(id))
}
//-------------------------------------------------------------------------------------------------------------------------
export const createList = (list) => async (dispatch) => {
  const createdList = await listService.create(list)
  dispatch(addList(createdList))
}

export const deleteList = (list) => async (dispatch) => {
  await listService.remove(list.id)
  dispatch(removeList(list))
}
//-------------------------------------------------------------------------------------------------------------------------


export const createIssue = (issue) => async (dispatch) => {
  const createdIssue = await issueService.create(issue)
  dispatch(addIssue(createdIssue))
}

export const deleteIssue = (issue) => async (dispatch) => {
  await issueService.remove(issue.id)
  dispatch(removeIssue(issue))
}

export const updateIssue = (issue) => async (dispatch) => {

}







export const moveIssue = (dragDropResult, project) => async (dispatch) => {
  const updatedLists = processDragDrop(dragDropResult, project.lists)
  const updatedProject = {
    ...project,
    lists: updatedLists
  }
  await projectService.put(project.id, updatedProject)
  dispatch(setLists({lists: updatedLists,  projectId: projectId}))
}

export default projectSlice.reducer