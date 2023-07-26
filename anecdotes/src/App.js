import AnectodeForm from './components/AnectodeForm'
import AnecdoteList from './components/AnectodeList'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnectodeForm />
    </div>
  )
}

export default App