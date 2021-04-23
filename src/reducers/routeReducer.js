export const initializeRoutes = (routes) => {
  return {
    type: 'SET_ROUTES',
    routes,
    search: ""
  }
}

const routeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ROUTES':
      return Object.assign({}, {routes: action.routes, search: action.search})
    case 'SET_ROUTE_SEARCH':
      return Object.assign({}, state, {search: action.search})
    default:
      return state
  }
}

export default routeReducer
