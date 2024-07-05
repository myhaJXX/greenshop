import React from 'react'
import { useEffect, useMemo } from 'react'
import activeClass from '../header/header.module.css'

import cl from './cart.module.css'
import CartSec from './cartCards/CartSec'
import CartInfo from './CartInfo'

function Cart({cart, setCart, discount, setDiscount}) {

    useEffect(()=>{
        window.scrollTo({top: 0})
        document.querySelector(`.${activeClass['links-cont']}>button`).classList.remove(`${activeClass.activeButton}`)
      }, [])
  return (
    <main>
        <section className={cl.cont}>
            <CartSec setCart={setCart} cart={cart}/>
            <CartInfo discount={discount} setDiscount={setDiscount} cart={cart}/>
        </section>
    </main>
  )
}

export default Cart