const reducer = (state = null, action) => {
  switch (action.type) {
    case 'FILTER_ANECTODES':
      return action.payload

      
    default:
      return state
  }

}

export const filterAnectodes = (filterString) => {
  return ({
    type: 'FILTER_ANECTODES',
    payload: filterString,
  })
}

export default reducer