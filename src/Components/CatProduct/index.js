import React from 'react'
import CatProductLeft from '../CatProductLeft'
import CatProductRight from '../CatProductRight'
import Style from './Style.module.css'
const CatProduct = () => {
  return (
    <div className={Style.container}>
        <CatProductLeft/>
        <CatProductRight/>
    </div>
  )
}

export default CatProduct