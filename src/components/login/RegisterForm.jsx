import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { useState } from 'react'
import GoogleButton from './GoogleButton'
import validator from 'email-validator'
import jiraLogo from '../../icons/jira-logo.svg'

import googleLogo from '../../icons/google-logo.svg'

import Footer from './Footer'


import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import RegisterConfirmation from './RegisterConfirmation'

const RegisterForm = () => {

  const [ emailError, setEmailError ] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const signUpHandler = async (e) => {
      if (e !== undefined){
        e.preventDefault()
      }
      if (checkEmail(email)){
        grecaptcha.enterprise.ready(async () => {
          console.log("signing up")
          setSent(true)
          const token = await grecaptcha.enterprise.execute('6LeurBElAAAAAA9mmtaGQkMzR_-rieBf4xEsDHK5', {action: 'LOGIN'});
        })
        navigate('/register/sent')
      }

  }

  const checkEmail = () => {
    if (validator.validate(email)){
      console.log('is email')
      setEmailError(false)
      return true
    }else{
      console.log('not email')
      setEmailError(true)
      return false
    }
  }

              
  return (
    <Box sx={{ width: '400px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px', padding: "32px 40px"}}>
      {!sent 
      ? ( <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', }}>
            <Box 
              component="img"
              height="40px"
              src={jiraLogo}
            />
            <Typography variant="h1" sx={{paddingTop: '24px'}}>
                Sign up to continue
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
              <TextField
                autoFocus
                sx={{marginTop: "8px"}}
                InputProps={{ variant: "login" }}
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Enter an email address" : ""}
                onKeyDown={(e)=>{ e.key === 'Enter' ? signUpHandler() : null}}
              />

              <Button 
                variant="login"
                onClick={signUpHandler}
              >
              Sign up
              </Button>
            </Box>
            <GoogleButton/>
            <Link 
              variant="body"
              sx={{paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}
              href=""
              onClick={() => navigate('/login')}>
              Already have an account? Log in
            </Link>
          </Box> )
      : ( <RegisterConfirmation email={email} />)}
        <Footer/>
    </Box>
    
  )

}

export default RegisterForm