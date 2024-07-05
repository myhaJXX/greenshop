import React, { useMemo, useState } from 'react'
import cl from './checkout.module.css'
import CheckAdress from './address/CheckAdress'
import Order from './order/Order'

function Checkout({cart, discount, setCart}) {
    const [params, setParams] = useState({
        fName:'',
        lName:'',
        country:'',
        city:'',
        street:'',
        apps: '',
        state: '',
        email: '',
        phone:'',
        zip:''
    })

    useMemo(()=>{
        console.log(params)
    },[params])
  return (
    <main className={cl.cont}>
        <CheckAdress params={params} setParams={setParams}/>
        <Order cart={cart} discount={discount} setCart={setCart} />
    </main>
  )
}

export default Checkout