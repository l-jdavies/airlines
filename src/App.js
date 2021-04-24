import './App.css'
import React, {useState} from 'react'
import Table from './components/Table'
import Select from './components/Select'
import Pagination from './components/Pagination'
import Data from './data'
import {getAirlineById, getAirportByCode} from './data'


const App = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [perPage, setPerPage] = useState(25)
  const [selectedAirline, setSelectedAirline] = useState(0)
  const [selectedAirport, setSelectedAirport] = useState("all")

  const formatValue = (property, value) => {
    if (property === "airline") {
      return getAirlineById(value)
    } else {
      return getAirportByCode(value)
    }
  }
  const columns = [
    {name: "Airline", property: "airline"},
    {name: "Source Airport", property: "src"},
    {name: "Destination Airport", property: "dest"}
  ]

  const getSelectedRoutes = () => {
    return Data.routes.filter(route => {
      return (route.airline === selectedAirline || selectedAirline === 0) &&
        (route.src === selectedAirport || selectedAirport === "all")
    })
  }
  return (
    <div>
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Table
            routes={getSelectedRoutes}
            columns={columns}
            format={formatValue}
          />
        </section>
      </div >
    </div>
  )
}

export default App

