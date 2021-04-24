import './App.css'
import React, {useState} from 'react'
import Table from './components/Table'
import Select from './components/Select'
import Pagination from './components/Pagination'
import Data from './data'
import {getAirlineById, getAirportByCode} from './data'


const App = () => {
  const [pageNumber, setPageNumber] = useState(0)
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

  const displayAll = (selectedAirline === 0) && (selectedAirport === "all")

  const getSelectedRoutes = () => {
    return Data.routes.filter(route => {
      return (route.airline === selectedAirline || selectedAirline === 0) &&
        (route.src === selectedAirport || selectedAirport === "all")
    })
  }

  const getSelectedAirlines = () => {
    Data.airlines.map(airline => {
      const display = !!getSelectedRoutes().find(
        route => route.airline === airline.id
      )
      return Object.assign({}, airline, {display})
    })
  }

  const getSelectedAirports = () => {
    Data.airports.map(airport => {
      const display = !!getSelectedRoutes().find(
        route => route.src === airport.code || route.dest === airport.code
      )
      return Object.assign({}, airport, {display})
    })
  }

  const totalRoutes = getSelectedRoutes().length
  const sliceEnd = pageNumber + 1 * perPage
  const startDisplay = pageNumber * perPage
  const endDisplay = startDisplay + perPage

  const getRoutesByPage = () => {
    return getSelectedRoutes().slice(pageNumber, sliceEnd)
  }

  return (
    <div>
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Select />
          <Table
            routes={getRoutesByPage()}
            columns={columns}
            format={formatValue}
          />
          <Pagination
            pageNumber={pageNumber}
            totalRoutes={totalRoutes}
            setPageNumber={setPageNumber}
            perPage={perPage}
            start={startDisplay}
            end={endDisplay}
          />
        </section>
      </div >
    </div>
  )
}

export default App

