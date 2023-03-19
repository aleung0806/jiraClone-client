import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import { Navigate } from 'react-router'
import RegisterForm from '../login/RegisterForm'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { fetchAllProjects } from '../../reducers/allProjects'
import { useState } from 'react'
import VerifySession from './VerifySession'
import { 
  Input,
  Box,
  Button,
  Typography,
  OutlinedInput
} from '@mui/material'

import LoginForm from '../login/LoginForm'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  height: '100vh',
  alignItems: 'center'
}

const contentStyle = {
  height: '100%',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center'
}



const headerStyle = {
  flexGrow: 1,
  display: 'flex', 
  flexDirection: 'row',
  alignItems: 'center'
}

const footerStyle = {
  flexGrow: 1,
  display: 'flex', 
  flexDirection: 'row',
}


const bodyStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const LoginPage = () => {
  const [email, setEmail] = useState('turkey@cat.com')
  const [password, setPassword] = useState('123password')

  const dispatch = useDispatch()

  const handleChange = () => {

  }


  const loginHandler = async () => {
    await dispatch(login(email, password))
  }
  
  const registerHandler = async () => {
    await dispatch(register({firstName: 'Monkey', lastName: 'Tinaza', email: 'turkey@cat.com', password: '123password'}))
  }

  return (
    <VerifySession>
          <Box sx={pageStyle}>
            <Box sx={contentStyle}>
              <Box sx={headerStyle}>
              </Box>
              <Box sx={bodyStyle}>
                <RegisterForm/>
              </Box>
              <Box sx={footerStyle}/>
            </Box>
          </Box>
    </VerifySession>      
  )
  
  
}

export default LoginPage