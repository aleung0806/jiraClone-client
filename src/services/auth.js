import axios from 'axios'

const login = async (email, password) => {
  const response = await axios.post('/auth/login', {email, password})
  console.log('login response', response)
  return response.data
}

const verify = async (sessionId) => {
  const response = await axios.post('/auth/verify')
  console.log('response', response)
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


const register = async (fields) => {
  const response = await axios.post('/auth/register', {fields})
  return response.data
}


export default {
  login,
  verify,
  logout,
  register,
}