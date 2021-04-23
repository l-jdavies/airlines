import React from 'react'
import {useSelector} from 'react-redux'
import {GetAirlineById, GetAirportByCode} from '../actions/dataTransformation'


const Table = () => {
  const headers = ["Airline", "Source Airport", "Destination Airport"]
  const headerCells = headers.map((header) => <th key={header}>{header}</th>)

  const routes = useSelector(state => state.routes.data).slice(0, 20)
  console.log(routes)

  const bodyCells = routes.map(routeObj => {
    return (
      <tr key={Object.values(routeObj).join(":")}>
        <td key={`airline:${routeObj.airline}`}>{GetAirlineById(routeObj.airline)}</td>
        <td key={`src:${routeObj.src}`}>{GetAirportByCode(routeObj.src)}</td>
        <td key={`dest:${routeObj.dest}`}>{GetAirportByCode(routeObj.dest)}</td>
      </tr>
    )
  })
  return (
    <div>
      <table className="routes-table">
        <thead>
          <tr>{headerCells}</tr>
        </thead>
        <tbody>{bodyCells}</tbody>
      </table>

    </div>
  );

}
export default Table

/*
 * <div className="pagination">
        <p>
          Showing {start + 1}-{start + bodyRows.length} of {rows.length} routes.
        </p>
        <p>
          <button key="previous" disabled={page === 0} onClick={previousPage}>
            Previous Page
          </button>
          <button
            key="next"
            disabled={start + perPage >= rows.length}
            onClick={nextPage}
          >
            Next Page
          </button>
        </p>
      </div>
      */
