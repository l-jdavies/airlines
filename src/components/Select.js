import React from 'react'
import {useSelector} from 'react-redux'

const Select = () => {
  const data = useSelector(state => state)
  const keys = Object.keys(data)

  return (
    <div>
      <h2>Test</h2 >
      <p>{keys}</p>
    </div>
  )


}

export default Select

