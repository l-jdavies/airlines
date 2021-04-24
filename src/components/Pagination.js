import React from 'react'

const Pagination = ({pageNumber, totalRoutes, setPageNumber, perPage, start, end}) => {

  const prevPage = (event) => {
    event.preventDefault()
    setPageNumber(pageNumber - 1)
  }

  const nextPage = (event) => {
    event.preventDefault()
    setPageNumber(pageNumber + 1)
  }

  start = start ? start : 1

  return (
    <div className="pagination">
      <p>
        Showing {start}-{end} of {totalRoutes} routes.
    </p>
      <p>
        <button key="previous" disabled={pageNumber === 1} onClick={prevPage}>
          Previous Page
        </button>
        <button key="next" disabled={pageNumber + perPage >= totalRoutes.length} onClick={nextPage}>
          Next Page
        </button>
      </p>
    </div>

  )
}

export default Pagination
