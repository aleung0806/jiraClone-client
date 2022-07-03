import axios from 'axios'

const baseUrl = '/issues'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response)
  return response.data
}

export const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const create = async (issue) => {
  const response = await axios.post(baseUrl, issue)
  return response.data
}

export const update = async (issue) => {
  const response = await axios.push(`${baseUrl}/${id}`, issue)
  return response.data
}
