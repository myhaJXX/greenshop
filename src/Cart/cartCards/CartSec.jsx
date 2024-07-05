import React from 'react'
import cl from '../cart.module.css'
import CartCard from './CartCard'

function CartSec({cart, setCart}) {
  return (
    <div className={cl['cards-box']}>
        <h4>Products</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4 className={cl.cardsTotal}>Total</h4>
        {
          cart.length ? cart.map((e,i)=><CartCard key={i} info={e} setCart={setCart} id={i} cart={cart}/>) : <h1>NOTHING HERE</h1>
        }
    </div>
  )
}

export default CartSec