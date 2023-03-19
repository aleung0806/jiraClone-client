import axios from 'axios'

axios.defaults.withCredentials = true


const request = (elementName) => {

  const baseUrl = elementName

  const create = async (element) => {
    const response = await axios.post(`/${baseUrl}`, element)
    return response.data
  }

  const get = async (id) => {
    const response = await axios.get(`/${baseUrl}/${id}`)
    return response.data
  }

  const getByUser = async (userId) => {
    const response = await axios.get(`/${baseUrl}`)
    return response.data
  }

  const update = async (element) => {
    console.log('in update', element)
    const id = element.id
    const response = await axios.put(`/${baseUrl}/${id}`, element)
    return response.data
  }

  const remove = async (id) => {
    const response = await axios.delete(`/${baseUrl}/${id}`)
    return response.data
  }

  return {
    create,
    get,
    getByUser,
    update,
    remove
  }

}

export default request