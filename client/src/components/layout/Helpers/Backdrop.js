import React from 'react'
import './Blackdrop.css'

const Backdrop = props => {
  return (
    <div className="blackdrop" onClick={props.click}></div>
  )
}

export default Backdrop
