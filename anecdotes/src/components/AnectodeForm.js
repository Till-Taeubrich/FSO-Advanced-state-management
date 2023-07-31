import { useDispatch } from 'react-redux'
import { addAnectode } from '../reducers/anecdoteReducer'

const AnectodeForm = () => {

  const dispatch = useDispatch()

  const submitAnectode = (e) => {
		e.preventDefault()

		const anectodeName = e.target.querySelector('.anectode-name').value
    dispatch(addAnectode(anectodeName))
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