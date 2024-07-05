import React, { useEffect } from 'react'
import Catalog from './catalog/Catalog'
import Add from './add/add'
import Blog from './blogs/Blog'
import FirstInfo from './firstInfo/FirstInfo'

import activeClass from '../header/header.module.css'

function MainPage({cart, setCart}) {
  useEffect(()=>{
    document.querySelector(`.${activeClass['links-cont']}>button`).classList.add(`${activeClass.activeButton}`)
  }, [])
  return (
    <main>
      <FirstInfo/>
      <Catalog cart={cart} setCart={setCart}/>
      <Add/>
      <Blog/>
    </main>
  )
}

export default MainPage