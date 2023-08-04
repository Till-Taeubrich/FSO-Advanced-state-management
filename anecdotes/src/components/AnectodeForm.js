import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'
import { useNotificationDispatch } from '../NotificationContext'

const AnectodeForm = () => {
	const dispatch = useDispatch()

	const notificationDispatch = useNotificationDispatch()

  const submitAnectode = async (e) => {
		e.preventDefault()

		const anectodeName = e.target.querySelector('.anectode-name').value

		if (anectodeName.length < 5) {
			notificationDispatch({ type: 'CHANGE_MESSAGE', payload: 'too short anecdote, must have length 5 or more' })
			setTimeout(() => {
				notificationDispatch({ type: 'RESET_MESSAGE' })
			}, 5000);
			return
		}

		dispatch(createAnectode(anectodeName))
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