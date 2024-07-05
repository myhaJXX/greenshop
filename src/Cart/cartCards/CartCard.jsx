import React, { useEffect } from 'react'
import cl from '../cart.module.css'

function CartCard({info, id, setCart, cart}) {
    let copyArr = cart.slice(0,cart.length)
  return (
    <div className={cl.card}>
        <div>
            <img src={info.img} alt="" />
            <div style={{display:'grid'}}>
                <h4>{info.title}</h4>
                <h5>Size: {info.size.includes('All') ? info.size.slice(0, info.size.length-4) : info.size}</h5>
                <h5>ID: {info.ID}</h5>
            </div>
        </div>
        <h5>$ {info.price%1==0?`${info.price}.00`:info.price}</h5>
        <div>
            <button onClick={()=>{
                // copyArr[id].count = copyArr[id].count == 0 ? 0 : copyArr[id].count-1
                if(copyArr[id].count==1){
                    copyArr.splice(id,1)
                } else copyArr[id].count-=1
                setCart(copyArr)
            }}>-</button>
            <h5>{info.count}</h5>
            <button onClick={()=>{
                copyArr[id].count+=1
                setCart(copyArr)
            }}>+</button>
        </div>
        <h5>
            $ {info.price%1==0?`${info.price*info.count}.00` : info.price%1*info.count}
        </h5>
    </div>
  )
}

export default CartCard