import Data from '../data'

const initialData = {
  data: Data.airlines,
  search: ""
}

const airlineReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_AIRLINE_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default airlineReducer
