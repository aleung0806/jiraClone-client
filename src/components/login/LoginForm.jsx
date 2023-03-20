import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'email-validator'

import jiraLogo from '../../icons/jira-logo.svg'
import atlassianLogoGray from '../../icons/atlassian-logo-gray.svg'
import { ReactComponent as EditFilledIcon } from '@atlaskit/icon/svgs/edit-filled.svg'
import { ReactComponent as WatchIcon } from '@atlaskit/icon/svgs/watch.svg'
import { ReactComponent as WatchIconFilled } from '@atlaskit/icon/svgs/watch-filled.svg'

import AtlasIcon from '../reusable/AtlasIcon'

import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton
} from '@mui/material'



const LoginForm = () => {
  const [ showLoginForm, setShowLoginForm ] = useState('true')
  const [ emailEntered, setEmailEntered ] = useState(false)
  const [ emailError, setEmailError ] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleCallbackResponse = (response) => {
    console.log(`JWT ID Token: ${response.credential}`)
    
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "789131590285-qd83qch1rioq37oevas6au4cpl5r78gs.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("googleForm"),
      {theme: "outline", size: "large", text: "", width: "320px"}
    )

    google.accounts.id.prompt()
  }, [])

  const loginHandler = async () => {
    await dispatch(login(email, password))
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
          src={jiraLogo}
        />
        <Typography sx={{fontSize: 16, fontWeight: 600, color: 'rgb(23, 43, 77)', paddingTop: '24px', textAlign: 'center'}}>Log in to continue</Typography>
        <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}}>
          <TextField
            sx={{borderColor: emailError ? "#AE2A19" : ""}}
            inputProps={{ sx: {color: emailEntered ? 'rgb(94, 108, 132)' : ""}}}
            InputProps={{
              variant: "login",
              endAdornment: emailEntered ? <EditFilledIcon style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}}/> : null
                
            }}
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? "Enter an email address" : ""}
            onClick={()=>{setEmailEntered(false)}}
          />
          <Button 
            disableRipple
            variant="login"
            sx={{display: emailEntered ? 'none': 'flex' }} 
            onClick={checkEmail} 
          >
            Continue
          </Button>
          <TextField
            InputProps={{
              autoFocus: true,
              variant: "login",
              endAdornment: showPassword ? 
                <WatchIcon 
                  style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}}
                  onClick={() => setShowPassword(false)}
                /> : 
                <WatchIconFilled style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}} onClick={ () => setShowPassword(true)}
                />
            }}
            sx={{display: emailEntered ? 'flex': 'none'}}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "password" : "text"}

          />
          <Button 
            variant="login"
            sx={{display: emailEntered ? 'flex': 'none'}} 
            onClick={loginHandler}
            >
           Log in
          </Button>


          <Button sx={{display: 'none', backgroundColor: 'secondary.main', color: 'secondary.light', textTransform: 'none' }} onClick={loginHandler}>
            Log in
          </Button>
        </Box>
        <Typography sx={{fontSize: 14, fontWeight: 600, color: 'rgb(94, 108, 132)', paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}>
          Or continue with Google:
        </Typography>
      
        <Box id="googleForm"/>

      <Typography 
        sx={{fontSize: 14, fontWeight: 'normal', color: "#0052cc", paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}
        onClick={() => {
          navigate('/register')
        }}>
          Create an account
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