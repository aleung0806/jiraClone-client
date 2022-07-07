import axios from 'axios'
const baseUrl = '/projects'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
