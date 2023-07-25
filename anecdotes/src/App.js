import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnectode } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector((state) => {
    return state.sort((a, b) => {
      return a.votes < b.votes
    })
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  const submitForm = (e) => {
    dispatch(addAnectode(e))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
      <h2>create new</h2>
      <form onSubmit={ submitForm }>
        <div><input className='anectode-name' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App