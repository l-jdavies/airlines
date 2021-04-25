import React from 'react'

const Select = ({airlines, airports, selectedAirline, selectedAirport, reset}) => {
  const airlineOptions = airlines().map(airline => {
    const value = airline.id
    const disable = !airline.display
    return (
      <option key={value} value={value} disabled={disable}>
        {airline.name}
      </option>
    )
  })
  airlineOptions.unshift(
    <option key={0} value={0}>
      All Airlines
    </option>
  )

  const airportOptions = airports().map(airport => {
    const value = airport.code
    const disable = !airport.display
    return (
      <option key={value} value={value} disabled={disable}>
        {airport.name}
      </option>
    )
  })
  airportOptions.unshift(
    <option key="all" value="all">
      All Airports
    </option>
  )

  const selectAirline = (event) => {
    event.preventDefault()
    selectedAirline(event.target.value)
  }

  const selectAirport = (event) => {
    event.preventDefault()
    selectedAirport(event.target.value)
  }

  return (
    <>
      <p>Show routes on</p>
      <select name="airline" onChange={selectAirline}>
        {airlineOptions}
      </select>
      <p>flying in or out of</p>
      <select name="airport" onChange={selectAirport}>
        {airportOptions}
      </select>
    </>
  )


}

export default Select


