import axios from 'axios'
const baseUrl = '/projects'

export const getAll = async () => {
  console.log('getting all projects')
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}
