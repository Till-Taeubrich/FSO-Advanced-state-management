import AnectodeForm from './components/AnectodeForm'
import AnecdoteList from './components/AnectodeList'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnectodeForm />
    </div>
  )
}

export default App