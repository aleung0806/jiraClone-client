import { current, createSlice } from '@reduxjs/toolkit'

import userService from '../services/userService'

const sampleUsers = {
  users :  [
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
  ], 
  loggedInUser: {
    name: 'Albert Leung',
    id: 'adsfad54fd'
  },
}


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
    },
    setLoggedInUser: (state, action) => {
      const newLoggedInUser = action.payload
      const newState = action.payload
    }
  }
})

export const { setUsers, setUser} = userSlice.actions

export const initUsers = () => async (dispatch) => {
  const users = [
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
  dispatch(setUsers(users))
}

export const createUser = (issue) => async (dispatch) => {

}

export default userSlice.reducer