import { createAnectode } from '../reducers/anecdoteReducer'
import { triggerNotification } from './Notification'

const AnectodeForm = () => {

  const submitAnectode = async (e) => {
		e.preventDefault()
		const anectodeName = e.target.querySelector('.anectode-name').value

		createAnectode(anectodeName)

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