import { useEffect } from 'react'
import AnectodeForm from './components/AnectodeForm'
import AnecdoteList from './components/AnectodeList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anectodeService from './services/anectodeService'
import { setAnectodes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anectodeService.getAll().then((res) => {
      dispatch(setAnectodes(res))
    })
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnectodeForm />
    </div>
  )
}

export default App