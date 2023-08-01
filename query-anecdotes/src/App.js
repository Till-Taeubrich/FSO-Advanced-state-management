import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query' 
import { getAnectodes } from './requests'

const App = () => {

  const result = useQuery('anectodes', getAnectodes, { retry: 1 })
  const anecdotes = result.data
  const error = result.isError
  
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  if ( error ) {
    return (
      <div>anecdote service not available due to problems in server</div>
    )
  }

  if ( anecdotes ) {
    return (
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
