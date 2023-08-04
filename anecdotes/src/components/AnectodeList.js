import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const notificationDispatch = useNotificationDispatch()

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = filter ? anecdotes.filter(anecdote => anecdote.content.includes(filter)) : anecdotes

  const sortedAnecdotes = filteredAnecdotes.toSorted((a, b) => {
    return a.votes < b.votes
  })
  
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    notificationDispatch({ type: 'CHANGE_MESSAGE', payload: `You voted ${anecdote.content}` })
    setTimeout(() => {
      notificationDispatch({ type: 'RESET_MESSAGE' })
    }, 5000);
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