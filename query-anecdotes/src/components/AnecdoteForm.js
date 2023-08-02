import { useMutation, useQueryClient } from "react-query"
import { createAnectode } from "../requests"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const anectodeMutation = useMutation(createAnectode, {
    onSuccess: () => {
      queryClient.invalidateQueries('anectodes')
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    anectodeMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
