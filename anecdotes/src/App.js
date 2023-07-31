import { useEffect } from 'react'
import AnectodeForm from './components/AnectodeForm'
import AnecdoteList from './components/AnectodeList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnectodes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnectodes())
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