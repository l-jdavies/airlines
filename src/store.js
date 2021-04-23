import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import airlineReducer from './reducers/airlineReducer'
import airportReducer from './reducers/airportReducer'
import routeReducer from './reducers/routeReducer'


const reducer = combineReducers({
  airlines: airlineReducer,
  airports: airportReducer,
  routes: routeReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)
export default store
