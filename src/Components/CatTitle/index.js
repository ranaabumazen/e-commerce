import React from 'react'
import Style from './Style.module.css'
const catTitle = ({title}) => {
  return (
    <h2 className={Style.catTitle}>
        {title}
    </h2>
  )
}

export default catTitle