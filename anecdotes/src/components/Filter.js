import { useDispatch, useSelector } from "react-redux"
import { filterAnectodes } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)

  const handleChange = (event) => {
    dispatch(filterAnectodes(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter