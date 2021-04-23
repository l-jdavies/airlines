export const initializeAirports = (airports) => {
  return {
    type: 'SET_AIRPORTS',
    airports,
    search: ""
  }
}

const airportReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AIRPORTS':
      return Object.assign({}, {airports: action.airports, search: action.search})
    case 'SET_AIRPORT_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default airportReducer
