import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import cl from '../catalog.module.css'

function CatoCard({info, cart, setCart}) {

  const navigate = useNavigate()

  return (
    <div className={cl.card}>

        <div className={cl['card-img']}>
            <img src={info.img} alt="" onClick={()=>navigate(`/view/${info.id}`)} />
            <nav>

              <div onClick={()=>navigate(`/view/${info.id}`)} className={cl['card-link']}>
                {<FontAwesomeIcon icon={faMagnifyingGlass} className={cl['card-link-item']}/>}
              </div>

              <div className={cl['card-link']} onClick={()=>setCart([...cart, {...info, count:1}])}>
                {<FontAwesomeIcon icon={faCartShopping} className={cl['card-link-item']}/>}
              </div>

            </nav>
        </div>

        <div className={cl['card-info']}>
            <p>{info.title}</p>
            <p className={cl.price}>$ {info.price%1 == 0 ? `${info.price}.00` : info.price}</p>
        </div>

    </div>
  )
}

export default CatoCard