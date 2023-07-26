import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = filter ? anecdotes.filter(anecdote => anecdote.content.includes(filter)) : anecdotes

  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => {
    return a.votes < b.votes
  })
  
  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  return (
    <>
    {sortedAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList