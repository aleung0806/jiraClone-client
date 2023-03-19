import axios from 'axios'

const login = async (email, password) => {
  const response = await axios.post('/auth/login', {email, password})
  return response.data
}

const verify = async () => {
  const response = await axios.post('/auth/verify')
  return response.data
}

const logout = async () => {
  const response = await axios.post('/auth/logout')
  if (response.status === 200){
    return response.data
  }else {
    throw new Error()
  }
}


const register = async (credentials) => {
  const response = await axios.post('/auth/register', credentials)
  return response.data
}


export default {
  login,
  verify,
  logout,
  register,
}