import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Table from './components/Table'
import Select from './components/Select'
import Data from './data'
import {initializeRoutes} from './reducers/routeReducer'
import {initializeAirlines} from './reducers/airlineReducer'
import {initializeAirports} from './reducers/airportReducer'

const App = () => {

  const routes = Data.routes
  const airlines = Data.airlines
  const airports = Data.airports
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeRoutes(routes))
    dispatch(initializeAirlines(airlines))
    dispatch(initializeAirports(airports))
  }, [])

  return (
    <div>
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Select />
        </section>
      </div >
    </div>
  )
}

export default App

/*
import React, {Component} from 'react';
import './App.css';
import Data from './data'

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
      </section>
    </div >
  )

}
export default App;
*/
