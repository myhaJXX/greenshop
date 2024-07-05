import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import cl from './cart.module.css'
import { useNavigate } from 'react-router-dom'

let coupons = [
    {title:'PateevUrod', discount:100},
    {title: 'a', discount:1}
]

function CartInfo({cart, discount, setDiscount}) {
    const navigate = useNavigate()
    const checkCoupons = (coupon)=>{
        coupons.forEach((e,i)=>{
            if(e.title == coupon) setDiscount(discount+e.discount)
        })
    }

    useEffect(()=>{
        let total = 0
        cart.forEach((e)=>{
            total+=e.price*e.count
        })
        setTotal(total)
    }, [cart])

    const [total, setTotal] = useState(0)

  return (
    <div className={cl.cartInfo}>
        <h2>Carts Total</h2>

        <div>
            <h4>Coupon Apply</h4>
            <div className={cl['input-cont']}>
                <input placeholder='Enter coupon code here...' type="text" />
                <button onClick={()=>checkCoupons(document.querySelector(`.${cl['input-cont']}>input`).value)}>Apply</button>
            </div>
        </div>

        <div>

            <div className={cl['cartInfo-little']}>
                <h4>Subtotal</h4>
                <p>$ {total}</p>
            </div>

            <div className={cl['cartInfo-little']}>
                <h4>Coupon Discount</h4>
                <h4>- {discount} %</h4>
            </div>

            <div className={cl['cartInfo-little']}>
                <h4>Shop discount</h4>
                <p>$ {(total*0.01).toFixed(2)}</p>
            </div>

        </div>

        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
            <h4>Total:</h4>
            <p>$ {(total- total*0.1 - total*discount/100) < 0 ? 0 : total- total*0.01 - total*discount/100}</p>
        </div>

        <div className={cl.lowerButtons}>
            <button onClick={()=>navigate('/checkout')}>Proceed To Checkout</button>
            <button onClick={()=>navigate('/')}>Continue Shopping</button>
        </div>

    </div>
  )
}

export default CartInfo