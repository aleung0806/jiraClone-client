import { current, createSlice } from '@reduxjs/toolkit'

import userService from '../services/userService'

const sampleUsers = [
  {
    name: 'Albert Leung',
    id: 'adsfad54fd'
  },
  {
    name: 'Kyler Pettitt',
    id: 'hfap93fhiu'
  },
  {
    name: 'John Doe',
    id: '5a49d8fa'
  }
]

const userSlice = createSlice({
  name: 'user',
  initialState: sampleUsers,
  reducers: {
    setUsers: (state, action) => { 
      return action.payload
    },
    setUser: (state, action) => {
      const newUser = action.payload
      const newState = current(state).map(user => user.id === newUser.id ? newUser : user)
      return newState
    }
  }
})

export const { setUsers, setUser} = userSlice.actions

export const initUsers = () => async (dispatch) => {
  const projects = await userService.getAll()
  dispatch(setProjects(users))
}

export const createUser = (issue) => async (dispatch) => {

}

export default userSlice.reducer