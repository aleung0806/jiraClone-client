import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import { Navigate } from 'react-router'

import { login, logout } from '../../reducers/auth'
import { fetchProjects } from '../../reducers/project'

import { 
  Box,
  Button,
  Typography
} from '@mui/material'




const LoginPage = () => {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const projects = useSelector(state => state.projects)
  const navigate = useNavigate()

  const loginHandler = async () => {
    if (!auth.isLoggedIn){
      console.log('loginHandler start')
      await dispatch(login('y@monkey.com', '123password'))
      navigate('/')
      console.log('loginHandler end')
    }
  }
  
  const fetchProjects = async () => {
    if (auth.isLoggedIn){
      console.log(`projectFetcher start ${auth.user.id}`)
      await dispatch(initProjects(auth.user.id))
      console.log(`projectFetcher end ${projects}`)
    }
  }

  const logoutHandler = async () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!auth.isLoggedIn){
    }
  }, [])

  useEffect(() => {
    if (projects !== null){
      navigate(`/projects/${projects[0].id}`)
    }
  }, [projects])



  return (
        <Box >
          <Box>
            <Button onClick={loginHandler}>
              Login
            </Button>
            <Button onClick={logoutHandler}>
              Logout
            </Button>
            <Typography>{`loggedIn: ${auth.isLoggedIn}`}</Typography>

          </Box>
        </Box> 
      )
  
  
}

export default LoginPage