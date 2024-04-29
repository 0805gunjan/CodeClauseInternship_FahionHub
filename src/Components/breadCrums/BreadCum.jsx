import React from 'react'
import './BreadCum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCum = (props) => {
    const {product} = props;
  return (
    <div className='BreadCum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name} 
    </div>
  )
}

export default BreadCum
