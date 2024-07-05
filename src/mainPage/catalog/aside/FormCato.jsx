import React from 'react'
import FilterCategory from './FilterCategory'
import SizeCategory from './SizeCategory'
import ChangerPrice from './ChangerPrice'

import cl from '../catalog.module.css'
import items from '../cards/items.js'
let cc = items[1]
let cs = items[2]


function FormCato({filters, setFilters}) {

    const filterLinks = [
        {
        title: 'Categories', 
        links:['House Plants','Potter Plants','Seeds','Small Plants','Big Plants','Succulents','Trerrariums','Gardening','Accessories', 'All'],
        count:cc
        },
        {
          title: 'Size', 
          links:['Small','Medium','Large', 'All'],
          count:cs
        },
        {title: 'Price Range'}
    ]

  return (
    <aside className={cl['filter-cont']}>
        <FilterCategory title={filterLinks[0].title} links={filterLinks[0].links} count={filterLinks[0].count} filters={filters} setFilters={setFilters}/>
        <ChangerPrice title={filterLinks[2].title} filters={filters} setFilters={setFilters}/>
        <SizeCategory title={filterLinks[1].title} links={filterLinks[1].links} count={filterLinks[1].count} filters={filters} setFilters={setFilters}/>
    </aside>
  )
}

export default FormCato