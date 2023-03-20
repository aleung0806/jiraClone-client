import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { useState } from 'react'

import mailImage from '../../icons/mail-image.png'

import validator from 'email-validator'

import atlassianLogoGray from '../../icons/atlassian-logo-gray.svg'

import googleLogo from '../../icons/google-logo.svg'


import { 
  Input,
  Box,
  Button,
  Typography,
  OutlinedInput
} from '@mui/material'


const loginFormStyle = (showLoginForm) => {
  return {
    display: showLoginForm ? 'flex' : 'none',
    flexDirection: 'column',
    flexGrow: 4,
  }
}

const registerFormStyle = (showLoginForm) => {
  return {
    display: showLoginForm ? 'none' : 'flex',
    flexDirection: 'column',
    flexGrow: 4,
    gap: 1
  }
}


const LoginForm = () => {
  const [ showLoginForm, setShowLoginForm ] = useState('true')
  const [ emailEntered, setEmailEntered ] = useState(false)
  const [ emailError, setEmailError ] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('Turkey')
  const [lastName, setLastName] = useState('Tinaza')
  const theme = useTheme()

  const dispatch = useDispatch()

  const handleChange = () => {

  }


  const loginHandler = async () => {
    await dispatch(login(email, password))
  }

  const registerHandler = async () => {
    await dispatch(register({firstName, lastName, email, password}))
  }
  
  const switchHandler = async () => {
    setShowLoginForm(!showLoginForm)
  }


  const checkEmail = () => {
    if (validator.validate(email)){
      console.log('is email')
      setEmailError(false)

      setEmailEntered(true)
    }else{
      console.log('not email')
      setEmailError(true)
    }
  }

              
  return (
    <Box sx={{ width: '400px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: "32px 40px"}}>

        <Typography sx={{fontSize: 16, fontWeight: 600, color: 'rgb(23, 43, 77)', paddingTop: '24px', textAlign: 'center', marginBottom: '16px'}}>
          Check your inbox to log in
        </Typography>
        <Box 
          sx={{marginTop: "8px", marginBottom: "16px"}}
          component="img"
          height="88px"
          src={mailImage}
        />
        <Typography sx={{fontSize: 14, fontWeight: "normal", color: 'rgb(94, 108, 132)', textAlign: 'left'}}>
          To complete setup and log in, click the verification link in the email we’ve sent to
        </Typography>
        <Typography sx={{fontSize: 16, fontWeight: "600", color: '#172B4D', textAlign: 'left', marginTop: "4px"}}>
          turkey@cat.com
        </Typography>
        <Typography 
          sx={{fontSize: 14, fontWeight: 'normal', color: "#0052cc", paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}
          onClick={() => {
            navigate('/register')
          }}>
          Resend verification email
        </Typography>
        <Box sx={{width: "320px", borderTop: "1px solid rgb(193, 199, 208)", paddingTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box 
            component="img"
            height="24px"
            src={atlassianLogoGray}
          />
          <Box sx={{display: "flex", flexDirection: "row", paddingTop: "8px"}}>
            <Typography sx={{color: "rgb(23, 43, 77)", fontSize: "11px", }}>
              Jira clone made by 
            </Typography>
            <Typography sx={{color: "rgb(0, 82, 204)", fontSize: "11px", paddingLeft: "4px"}}>
              aleung0806@github.com
            </Typography>
          </Box>
        </Box>
    </Box>
  )

}

export default LoginForm