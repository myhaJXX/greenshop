import React from 'react'
import cl from './orderCard.module.css'

function OrderCard({info}) {
  return (
    <div className={cl.cont}>
        <img src={info.img} alt="" />
        <h4 className={cl.title}>{info.title}</h4>
        <h5 className={cl.id}>ID: {info.ID}</h5>
        <h5 className={cl.count}>( x {info.count} )</h5>
        <h4 className={cl.price}>$ {info.price%1==0 ? `${info.price}.00` : info.price}</h4>
    </div>
  )
}

export default OrderCard