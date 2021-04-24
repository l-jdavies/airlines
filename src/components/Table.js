import React from 'react'


const Table = ({routes, columns, format}) => {
  const headerCells = columns.map((header) => <th key={header.property}>{header.name}</th>)


  const bodyCells = routes.map(routeObj => {
    console.log(routeObj)
    return (
      <tr key={Object.values(routeObj).join(":")}>
        <td key={`airline:${routeObj.airline}`}>{format('airline', routeObj.airline)}</td>
        <td key={`src:${routeObj.src}`}>{format('airport', routeObj.src)}</td>
        <td key={`dest:${routeObj.dest}`}>{format('airport', routeObj.dest)}</td>
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
