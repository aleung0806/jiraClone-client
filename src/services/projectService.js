import axios from 'axios'

const baseUrl = '/projects'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

export const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const create = async (element) => {
  const response = await axios.post(baseUrl, element)
  return response.data
}

export const update = async (element) => {
  const response = await axios.push(`${baseUrl}/${element.id}`, element)
  return response.data
}

export const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}
