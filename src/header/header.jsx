import React from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './header.module.css'
import logo from '../static/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Header() {
    const navigate = useNavigate()
  return (
    <header>

        <div className={cl['img-cont']}>
            <img src={logo} alt="" />
            <h2>GREENSHOP</h2>
        </div>

        <nav className={cl['links-cont']}>
            <button onClick={()=>navigate('/')}>Home</button>
        </nav>

        <div>
            <FontAwesomeIcon icon={faCartShopping} className={cl.shoppingCart} onClick={()=>navigate('/cart')}/>
        </div>

    </header>
  )
}

export default Header