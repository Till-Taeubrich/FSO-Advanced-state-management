import { useDispatch } from 'react-redux'
import { addAnectode } from '../reducers/anecdoteReducer'
import { triggerNotification } from './Notification'
import anectodeService from '../services/anectodeService'

const AnectodeForm = () => {

  const dispatch = useDispatch()

  const submitAnectode = async (e) => {
		e.preventDefault()
		const anectodeName = e.target.querySelector('.anectode-name').value
		const newAnecdote = await anectodeService.create(anectodeName)

    dispatch(addAnectode(newAnecdote))

		triggerNotification(`You added ${anectodeName}`)
  }

  return (
		<>
			<h2>create new</h2>
			<form onSubmit={submitAnectode}>
				<div>
					<input className="anectode-name" />
				</div>
				<button>create</button>
			</form>
		</>
	);
}

export default AnectodeForm