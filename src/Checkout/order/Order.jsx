import React, { useMemo, useState } from 'react'
import cl from './order.module.css'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom'

function Order({cart, discount, setCart}) {
  const nav = useNavigate()

  const [total, setTotal] = useState(0)
  useMemo(()=>{
    let c = 0;
    cart.forEach((e)=>{
      c+=e.price*e.count
    })
    setTotal(c)
  },[cart])

  console.log(discount)
  return (
    <div className={cl.cont}>
      <h4>Your Order</h4>

      <div className={cl.cardsBox}>
        <div className={cl.littleBox}>
          <h4>Products</h4>
          <h4>Subtotal</h4>
        </div>

        {cart.map((e,i)=><OrderCard key={i} info={e}/>)}
      </div>
      <h5 onClick={()=>nav('/cart')}>Have a coupon?</h5>
      <div className={cl.priceBox}>
          <div>
            <h5>SubTotal</h5>
            <h4>$ {total%1==0 ? `${total}.00` : total}</h4>
          </div>

          <div>
            <h5>Coupon Discount</h5>
            <h5>{discount} %</h5>
          </div>

          <div>
            <h5>Shiping</h5>
            <h4>$ {(total*0.01).toFixed(2)}</h4>
          </div>

          <div>
            <h4>Total:</h4>
            <p>$ {(total- total*0.1 - total*discount/100) < 0 ? 0 : (total- total*0.01 - total*discount/100).toFixed(2)}</p>
          </div>

      </div>

      <button onClick={()=>{
        setCart([])
        nav('/')
      }}>Place Order</button>
      
    </div>
  )
}

export default Order