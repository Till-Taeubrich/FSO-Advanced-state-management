import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnectodes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createAnectode = async newAnectode => {
  const response = await axios.post(baseUrl, newAnectode)
  return response.data
}