import React from 'react'

import cl from '../catalog.module.css'

function ChangerPrice({title, filters, setFilters}) {
  return (
    <div className={cl['filter-cont']}>
        <h4>{title}</h4>
        <div className={cl['price-box']}>
            <input placeholder='price, $' type="number" value={filters.prices[0]} onChange={(e)=>setFilters({...filters, prices:[e.target.value, filters.prices[1]]})}/>
            <div></div>
            <input placeholder='price, $' value={filters.prices[1]} type="number" onChange={(e)=>setFilters({...filters, prices:[filters.prices[0], e.target.value]})}/>
        </div>
    </div>
  )
}

export default ChangerPrice