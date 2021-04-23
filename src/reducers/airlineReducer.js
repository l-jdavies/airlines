export const initializeAirlines = (airlines) => {
  return {
    type: 'SET_AIRLINES',
    airlines,
    search: ""
  }
}

const airlineReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AIRLINES':
      return Object.assign({}, {airlines: action.airlines, search: action.search})
    case 'SET_AIRLINE_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default airlineReducer
