import React, { useEffect, useState } from 'react'
import FormCato from './aside/FormCato'

import cl from './catalog.module.css'
import TopLinks from './topLinks/TopLinks'
import Window from './cards/Window'

import banner from '../../static/banner.png'

function Catalog({cart, setCart}) {

    const [filters, setFilters] = useState({
        chapter: 'All Plants',
        category: 'All',
        size: 'All',
        prices: ["", ""],
        sort: 'default'
    })

    useEffect(()=>{
        console.log(filters)
    }, [filters])
    
  return (
    <section id='catalog' className={cl.cont}>
        <TopLinks filters={filters} setFilters={setFilters}/>
        <FormCato filters={filters} setFilters={setFilters}/>
        <Window cart={cart} setCart={setCart} filters={filters}/>
        <img src={banner} alt="" />
    </section>
  )
}

export default Catalog