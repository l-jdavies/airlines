import './App.css'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Table from './components/Table'
import Select from './components/Select'

const App = () => {


  return (
    <div>
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Table />
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
