import React from 'react'
import './dataDisplay.scss'
 
const DataDisplay = (props) => {

  return(
    <div  className= "data-display" onClick={props.onClick}>
      {props.temperature} &deg;C
    </div>
  )
}
export default DataDisplay