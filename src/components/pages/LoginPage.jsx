import VerifySession from './VerifySession'
import { 
  Box,
} from '@mui/material'

import LoginForm from '../login/LoginForm'

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}


const LoginPage = () => {

  return (
    <VerifySession>
      <Box sx={pageStyle}>
        <LoginForm/>
      </Box>
    </VerifySession>      
  )
}

export default LoginPage