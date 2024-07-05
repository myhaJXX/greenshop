import React from 'react'

import { useEffect } from 'react'

import items from '../mainPage/catalog/cards/items'

import { useParams } from 'react-router-dom'
import ViewCard from './viewCard/ViewCard'
import ViewInfo from './viewInfo/ViewInfo'

import activeClass from '../header/header.module.css'

function View({cart, setCart}) {

  useEffect(()=>{
    window.scrollTo({top: 0})
    document.querySelector(`.${activeClass['links-cont']}>button`).classList.remove(`${activeClass.activeButton}`)
  }, [])

    const params = useParams()

    const obj = items[0][Number(params.id)]
    const comments = items[3][obj.id]

  return (
    <main>
      <ViewCard cart={cart} setCart={setCart} info={obj} comments={comments}/>
      <ViewInfo comments={comments}/>
    </main>
  )
}

export default View