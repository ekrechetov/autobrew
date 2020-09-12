import React from 'react'
import './dataDisplay.scss'
 
const DataDisplay = (props) => {

  return(
    <div className={`data-display ${props.temperature >= 30 && 'danger'}`}>
      {props.temperature} &deg;C
    </div>
  )
}
export default DataDisplay