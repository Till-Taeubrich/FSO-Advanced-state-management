import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'
import { triggerNotification } from '../reducers/notificationReducer'

const AnectodeForm = () => {
	const dispatch = useDispatch()

  const submitAnectode = async (e) => {
		e.preventDefault()
		const anectodeName = e.target.querySelector('.anectode-name').value

		dispatch(createAnectode(anectodeName))

		dispatch(triggerNotification(`You added ${anectodeName}`, 50))
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