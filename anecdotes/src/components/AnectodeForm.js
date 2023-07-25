import { useDispatch } from 'react-redux'
import { addAnectode } from '../reducers/anecdoteReducer'

const AnectodeForm = () => {

  const dispatch = useDispatch()

  const submitForm = (e) => {
    dispatch(addAnectode(e))
  }

  return (
		<>
			<h2>create new</h2>
			<form onSubmit={submitForm}>
				<div>
					<input className="anectode-name" />
				</div>
				<button>create</button>
			</form>
		</>
	);
}

export default AnectodeForm