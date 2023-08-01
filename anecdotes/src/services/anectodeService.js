import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const newAnecdote = { content, votes: 0 }
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const addVote = async (content) => {
  const allNotes = await getAll()

  const noteToChange = allNotes.find(note => note.id === content)

  const updatedNote = {
    ...noteToChange,
    votes: noteToChange.votes + 1
  }

  const url = `${baseUrl}/${content}`

  const request = await axios.put(url, updatedNote)

  return request.data
}

export default { getAll, create, addVote}