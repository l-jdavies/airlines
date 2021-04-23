import Data from '../data'

const initialData = {
  data: Data.routes,
  search: ""
}

const routeReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_ROUTE_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default routeReducer
