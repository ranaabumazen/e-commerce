import React from 'react'
import Style from './Style.module.css'
const DateTimeContainer = ({number,type}) => {
  return (
    <div className={Style.DateTimeContainer}>
        <h3 className={Style.number}>{number}</h3>
        <p className={Style.type}>{type}</p>
    </div>
  )
}

export default DateTimeContainer