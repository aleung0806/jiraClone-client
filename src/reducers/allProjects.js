import { current, createSlice } from '@reduxjs/toolkit'
import serviceMaker from '../services/serviceMaker'
import _ from 'lodash'

const projectService = serviceMaker('project')


const allProjectsSlice = createSlice({
  name: 'allProjects',
  initialState: null,
  reducers: {
    setAllProjects: (state, action) => { 
      return action.payload
    },
    removeAllProjects: (state, action) => { 
      return null
    }
  }
})

export const { setAllProjects, removeAllProjects } = allProjectsSlice.actions

export const fetchAllProjects = () => async (dispatch) => {
  console.log('fetching allProjects')

  const allProjects = await projectService.getByUser()
  dispatch(setAllProjects(allProjects))
}

export default allProjectsSlice.reducer