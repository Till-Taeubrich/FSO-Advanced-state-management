import { createSlice } from '@reduxjs/toolkit'

const anectodesSlice = createSlice({
  name: 'anectodes',
  initialState: [],
  reducers: {
    increaseVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anectode => 
        anectode.id !== id ? anectode : changedAnecdote
      )
    },
    addAnectode(state, action) {
      return state.concat(action.payload)
    },
    setAnectodes(state, action) {
      return action.payload
    }
  },
})

export const { increaseVote, addAnectode, setAnectodes } = anectodesSlice.actions
export default anectodesSlice.reducer