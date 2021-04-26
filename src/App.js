import './App.css'
import React, {useState} from 'react'
import Table from './components/Table'
import Select from './components/Select'
import Pagination from './components/Pagination'
import Map from './components/Map'
import Data from './data'
import {getAirlineById, getAirportByCode} from './data'


const App = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [perPage, _] = useState(25)
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

  const getSelectedAirlines = () => {
    let arr = []
    Data.airlines.forEach(airline => {
      const display = !!getSelectedRoutes().find(
        route => route.airline === airline.id
      )
      arr.push(Object.assign({}, airline, {display}))
    })
    return arr
  }

  const getSelectedAirports = () => {
    let arr = []
    Data.airports.forEach(airport => {
      const display = !!getSelectedRoutes().find(
        route => route.src === airport.code || route.dest === airport.code
      )
      arr.push(Object.assign({}, airport, {display}))
    })
    return arr
  }

  const totalRoutes = getSelectedRoutes().length
  const sliceEnd = pageNumber + 1 * perPage
  const startDisplay = pageNumber * perPage
  const endDisplay = startDisplay + perPage

  const getRoutesByPage = () => {
    return getSelectedRoutes().slice(pageNumber, sliceEnd)
  }

  const airlineSelected = (value) => {
    if (value > 0) {
      setSelectedAirline(Number(value))
    }
  }

  const airportSelected = (value) => setSelectedAirport(value)

  const resetFilters = () => {
    setSelectedAirline(0)
    setSelectedAirport("all")
  }

  const defaultsSelected = () => {
    return selectedAirline === 0 && selectedAirport === "all"
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Map
          routes={getSelectedRoutes()}
          format={formatValue}
        />
        <Select
          airlines={getSelectedAirlines}
          airports={getSelectedAirports}
          selectedAirline={airlineSelected}
          selectedAirport={airportSelected}
          enableReset={resetFilters}
          disableReset={defaultsSelected()}
        />
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
  )
}

export default App

