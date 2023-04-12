import React from 'react'
import styles from './index.module.css';
const DateTimeContainer = ({number,type}) => {
  return (
    <div className={styles.DateTimeContainer}>
       <p className={styles.type}>{type}</p>
        <h3 className={styles.number}>{number}</h3>
       
    </div>
  )
}

export default DateTimeContainer;