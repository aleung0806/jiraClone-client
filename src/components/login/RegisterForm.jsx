import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { useState } from 'react'

import validator from 'email-validator'

import atlassianLogo from '../../icons/atlassian-logo.svg'
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
        <Box 
          component="img"
          height="40px"
          src={atlassianLogo}
        />
        <Typography sx={{fontSize: 16, fontWeight: 600, color: 'rgb(23, 43, 77)', paddingTop: '24px', textAlign: 'center'}}>Sign up to continue</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
          <Input
            sx={{borderColor: emailError ? "#AE2A19" : "", width: "320px", fontSize: 14, padding: "8px 6px", marginTop: "8px"}}
            inputProps={{sx: {padding: 0, color: emailEntered ? 'rgb(94, 108, 132)' : ""}}}
            placeholder='Enter your email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <Typography sx={{fontSize: 10, fontWeight: "normal", color: "#AE2A19", textAlign: 'left', display: emailError ? 'flex' : 'none'}}>Enter an email address</Typography>
          <Input
            sx={{display: emailEntered ? 'flex': 'none'}}
            placeholder='password'
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button 
            sx={{display: 'flex', width: "320px", backgroundColor: 'secondary.main', color: 'secondary.light', fontSize: '14px', textTransform: 'none', height: '40px', borderRadius: '3px', padding: 0}} 
            onClick={(e)=>{
              e.preventDefault()
              grecaptcha.enterprise.ready(async () => {
                console.log("ready")
                const token = await grecaptcha.enterprise.execute('6LeurBElAAAAAA9mmtaGQkMzR_-rieBf4xEsDHK5', {action: 'LOGIN'});
              })
            }}
          >
           Sign up
          </Button>



        </Box>
        <Typography sx={{fontSize: 14, fontWeight: 600, color: 'rgb(94, 108, 132)', paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}>
          Or continue with:
        </Typography>
        <Button
          sx= {{width: "320px", textTransform: 'none', border: "1px solid rgb(193, 199, 208)", color: '#42526E', fontWeight: "bold"}}
        >
          <Box 
            component="img"
            width="24px"
            sx={{marginRight: "6px"}}
            src={googleLogo}
          />
          Google
        </Button>

        <Button 
          onClick={switchHandler}
          sx={{display: 'none', }}
        >
          Sign up
        </Button>

      <Button onClick={switchHandler}>
        Already have an account? Log in
      </Button>
    </Box>
  )

}

export default LoginForm