import { current, createSlice } from '@reduxjs/toolkit'

import serviceMaker from '../services/serviceMaker'

const userService = serviceMaker('user')
import authService from '../services/auth'
import projectReducer from '../reducers/project'

const initialState = {
  isLoggedIn: false,
  user: null
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => { 
      return {isLoggedIn: true, user: action.payload}
    },
    unsetLoggedInUser: (state, action) => {
      return {isLoggedIn: false, user: null}
    },
    setSessionVerified: (state, action) => {
      return {sessionVerified: true}
    },  }
})

export const { setLoggedInUser, unsetLoggedInUser, setSessionVerified } = authSlice.actions

export const login = (email, password) => async (dispatch) => {
  const user = await authService.login(email, password)
  dispatch(setLoggedInUser(user))
}

export const verify = () => async (dispatch) => {
  console.log('verifying...')
  const user = await authService.verify()
  if (user !== ''){
    console.log('verified')
    dispatch(setLoggedInUser(user))
    return true
  }else{
    console.log('unverified')
    return false
  }
}

export const logout = (id) => async (dispatch) => {
  dispatch(unsetLoggedInUser())
  const user = await authService.logout(id)
}

export default authSlice.reducer