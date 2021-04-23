import Data from '../data'

const initialData = {
  airports: Data.airports,
  search: ""
}

const airportReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_AIRPORT_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default airportReducer
