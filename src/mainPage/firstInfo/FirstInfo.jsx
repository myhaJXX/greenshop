import React from 'react'
import cl from './firstInfo.module.css'

import main from '../../static/main.png'

function FirstInfo() {
  return (
    <div className={cl.cont}>
        <div>
            <h2>Welcome to GreenShop</h2>
            <h1>LET’S MAKE A BETTER PLANET</h1>
            <h3>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</h3>
            <a href="#catalog">Shop Now</a>
        </div>
        <img src={main} alt="" />
    </div>
  )
}

export default FirstInfo