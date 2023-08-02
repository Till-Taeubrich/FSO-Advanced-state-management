import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from 'react-query' 
import { getAnecdotes, updateAnecdote } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  // query
  const result = useQuery('anecdotes', getAnecdotes, { retry: 1 })
  const anecdotes = result.data
  const error = result.isError
  
  // mutation
  const voteMutation = useMutation(updateAnecdote,
    {onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')

      const updatedAnecdotes = anecdotes.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote )

      queryClient.setQueryData('anecdotes', updatedAnecdotes)
    }}
  )

  const handleVote = (anecdote) => {
    voteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
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
