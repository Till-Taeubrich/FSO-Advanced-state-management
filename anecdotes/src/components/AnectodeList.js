import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { triggerNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = filter ? anecdotes.filter(anecdote => anecdote.content.includes(filter)) : anecdotes

  const sortedAnecdotes = filteredAnecdotes.toSorted((a, b) => {
    return a.votes < b.votes
  })
  
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(triggerNotification(`You voted ${anecdote.content}`, 50))
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