import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from '../../reducers/auth'
import { useCallback, useState, useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'email-validator'

import jiraLogo from '../../icons/jira-logo.svg'
import { ReactComponent as EditFilledIcon } from '@atlaskit/icon/svgs/edit-filled.svg'
import { ReactComponent as WatchIcon } from '@atlaskit/icon/svgs/watch.svg'
import { ReactComponent as WatchIconFilled } from '@atlaskit/icon/svgs/watch-filled.svg'
import Footer from './Footer'

import GoogleButton from './GoogleButton'
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
  const [ passwordError, setPasswordError ] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const passwordRef = useRef(null)

  const loginHandler = async () => {
    console.log('logging in')
    await dispatch(login(email, password))
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('activity')
      console.log(passwordRef.current)
      passwordRef.current.focus();
    }, 10);

    return () => {
      clearTimeout(timeout);
    };
  }, [emailEntered]);






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

  const checkPassword = () => {
    if (password !== ""){
      setPasswordError(false)
      loginHandler()
    }else{
      setPasswordError(true)
    }
  }



              
  return (
    <Box sx={{ width: '400px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: "32px 40px"}}>
        <Box component="img" height="40px" src={jiraLogo}/>
        <Typography variant='h1' sx={{paddingTop: '24px', marginBottom: '16px'}}>
          Log in to continue
        </Typography>
        <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TextField
              autoFocus
              InputProps={{
                className: emailEntered ? 'filled' : '',
                variant: "login",
                endAdornment: emailEntered ? <EditFilledIcon style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}}/> : null
              }}
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Enter an email address" : ""}
              onClick={()=>{setEmailEntered(false)}}
              onKeyDown={(e)=>{ e.key === 'Enter' ? checkEmail() : null}}
            />
            <Button 
              disableRipple
              variant="login"
              sx={{marginTop: "10px", display: emailEntered ? 'none': 'flex' }} 
              onClick={checkEmail} 
            >
              Continue
            </Button>
          <TextField
            InputProps={{
              variant: "login",
              endAdornment: showPassword ? 
              <WatchIconFilled 
                style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}} 
                onClick={ () => setShowPassword(false)}
              /> :
              <WatchIcon 
                style={{color: "rgb(66, 82, 110)", height: '24px', width: '24px', marginRight: "5px"}}
                onClick={() => setShowPassword(true)}
              />,
                
            }}
            inputProps={{
              ref: passwordRef
            }}
            sx={{display: emailEntered ? 'flex': 'none'}}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            error={passwordError}
            helperText={passwordError ? "Enter your password" : ""}
            onKeyDown={(e)=>{ e.key === 'Enter' ? checkPassword() : null}}
          />
          <Button 
            variant="login"
            sx={{marginTop: "10px", display: emailEntered ? 'flex': 'none'}} 
            onClick={checkPassword}
          >
           Log in
          </Button>
        </Box>
        <GoogleButton/>

      <Link 
        variant='body'
        sx={{paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}}
        href=""
        onClick={() => navigate('/register')}>
          Create an account
      </Link>
      <Footer/>
    </Box>
  )

}

export default LoginForm