import {useSelector} from 'react-redux'


export const GetAirlineById = (id) => {
  const airlines = useSelector(state => state.airlines.data)
  const selected = airlines.filter(airline => airline.id === id)[0]
  return selected.name
}

export const GetAirportByCode = (code) => {
  const airports = useSelector(state => state.airports.data)
  const selected = airports.filter(airport => airport.code === code)[0]
  return selected.name
}
