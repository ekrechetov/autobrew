import React from 'react'
import './button.scss'
 
const Button = (props) => {

  return(
    <div  className={`btn ${props.isActive ? 'active' : ''}`} onClick={props.onClick}>
      {props.text}
    </div>
  )
}
export default Button