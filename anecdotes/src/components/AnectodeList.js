import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { triggerNotification } from './Notification'

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = filter ? anecdotes.filter(anecdote => anecdote.content.includes(filter)) : anecdotes

  const sortedAnecdotes = filteredAnecdotes.toSorted((a, b) => {
    return a.votes < b.votes
  })
  
  const vote = (anecdote) => {
    dispatch(increaseVote(anecdote.id))
    triggerNotification(`You voted ${anecdote.content}`)
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
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList