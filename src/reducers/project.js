import { current, createSlice } from '@reduxjs/toolkit'
import serviceMaker from '../services/serviceMaker'
import _ from 'lodash'
const listService = serviceMaker('list')
const issueService = serviceMaker('issue')
const projectService = serviceMaker('project')
const roleService = serviceMaker('role')

import { fetchAllProjects } from './allProjects'

const projectSlice = createSlice({
  name: 'project',
  initialState: null,
  reducers: {
    setProject: (state, action) => { 
      return action.payload
    },
    removeProject: (state, action) => { 
      return null
    }
  }
})

export const { setProject, removeProject } = projectSlice.actions

export const fetchProject = (projectId) => async (dispatch) => {
  console.log('fetching project')
  const project = await projectService.get(projectId)
  dispatch(setProject(project))
}

export const createProject = (project) => async (dispatch) => {
  const createdProject = await projectService.create(project)
  dispatch(fetchAllProjects())

}

export const updateProject = (project) => async (dispatch) => {
  await projectService.update(project)
  dispatch(fetchProject(project.id))
  dispatch(fetchAllProjects())

}

export const deleteProject = (id) => async (dispatch) => {
  await projectService.remove(id)
  dispatch(fetchAllProjects())

}
//LIST-------------------------------------------------------------------------------------------------------------------------
export const createList = (list) => async (dispatch) => {
  await listService.create(list)
  dispatch(fetchProject(list.projectId))

}

export const updateList = (list) => async (dispatch) => {
  await listService.update(list)
  dispatch(fetchProject(list.projectId))

}

export const deleteList = (list) => async (dispatch) => {
  await listService.remove(list.id)
  dispatch(fetchProject(list.projectId))
}
//ISSUE-------------------------------------------------------------------------------------------------------------------------

export const createIssue = (issue) => async (dispatch) => {
  await issueService.create(issue)
  dispatch(fetchProject(issue.projectId))
}

export const updateIssue = (issue) => async (dispatch) => {
  console.log('updating issue')
  await issueService.update(issue)
  dispatch(fetchProject(issue.projectId))
}

export const deleteIssue = (issue) => async (dispatch) => {
  await issueService.remove(issue.id)
  dispatch(fetchProject(issue.projectId))
}

export const moveIssue = (result, project) => async (dispatch) => {
  
  console.log(result)

  if (result.destination === null){
    return 
  }

  const issueId = parseInt(result.draggableId)
  const sourceListId = parseInt(result.source.droppableId)
  const sourceIndex = parseInt(result.source.index)
  const destListId =  parseInt(result.destination.droppableId)
  const destIndex = parseInt(result.destination.index)

  let lists = _.cloneDeep(project.lists)
  console.log('lists', lists)

  if (sourceListId === destListId && sourceIndex === destIndex){
    return 
  }

  let sourceList =  lists.find(list => list.id === sourceListId)
  sourceList.issueOrder.splice(sourceIndex, 1)

  let destList = lists.find(list => list.id === destListId)
  if (destList.issueOrder === null){
    destList.issueOrder = [issueId]
  }else{
    destList.issueOrder.splice(destIndex, 0, issueId)
  }

  await listService.update({
    id: sourceList.id,
    projectId: sourceList.projectId,
    issueOrder: sourceList.issueOrder
  })
  
  if (sourceListId !== destListId){
    await listService.update({
      id: destList.id,
      projectId: destList.projectId,
      issueOrder: destList.issueOrder
    })
  }

  await issueService.update({
    id: issueId,
    listId: destList.id,
    projectId: destList.projectId
  })
  
  dispatch(fetchProject(project.id))

}

export const createRole = (role) => async (dispatch) => {
  const createdRole = await roleService.create(role)
  dispatch(fetchProject(role.projectId))
}



export default projectSlice.reducer



    // addList: (state, action) => {
    //   const list = action.payload
    //   const projectId = list.projectId

    //   let projects = _.cloneDeep(state)
    //   projects
    //     .find(project => project.id === projectId)
    //     .lists.push(list)
    //   return projects
    // },

    // removeList: (state, action) => {
    //   const list = action.payload
    //   const listId = list.id
    //   const projectId = list.projectId

    //   return state.map(project => {
    //     return project.id === projectId 
    //       ? {...project, lists: project.lists.filter(list => list.id !== listId)}
    //       : project
    //   })

    // },

    // addIssue: (state, action) => {
    //   const issue = action.payload
    //   const listId = issue.listId
    //   const projectId = issue.projectId

    //   let projects = _.cloneDeep(state)
    //   projects
    //     .find(project => project.id === projectId)
    //     .lists.find(list => list.id === listId)
    //     .issues.push(issue)

    //   return projects
    // },

    // removeIssue: (state, action) => {
    //   const issue = action.payload
    //   const issueId = issue.id
    //   const listId = issue.listId
    //   const projectId = issue.projectId

    //   return state.map(project => {
    //     return project.id === projectId 
    //       ? {...project, lists: project.lists.map(list => {
    //         return list.id === listId
    //           ? {...list, issues: list.issues.filter(issue => issue.id !== issueId)}
    //           : list
    //         }
    //       )}
    //       : project
    //   })
    // }