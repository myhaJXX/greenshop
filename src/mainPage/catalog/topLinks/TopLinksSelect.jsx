import React from 'react'

import cl from '../catalog.module.css'

const changeSort = (value, filters, setFilters, text)=>{
  setFilters({...filters, sort:value})
  document.querySelector('#firstSort').textContent = text
}

function TopLinksSelect({filters, setFilters}) {
  return (
    <div 
    style={{height:'30px'}}
    onClick={()=>{
    document.querySelector(`.${cl['select-cont']}`).style.height = document.querySelector(`.${cl['select-cont']}`).style.height == '30px' ? '200px' : '30px'
    }} name="" className={cl['select-cont']}>
        <div id='firstSort' onClick={(e)=>changeSort(filters.sort, filters, setFilters, e.target.textContent)}>Sort by...</div>
        <div onClick={(e)=>changeSort('nameA', filters, setFilters, e.target.textContent)}>Sort by name A - Z</div>
        <div onClick={(e)=>changeSort('nameZ', filters, setFilters, e.target.textContent)}>Sort by name Z - A</div>
        <div onClick={(e)=>changeSort('price0', filters, setFilters, e.target.textContent)}>Sort by price 0 - 1</div>
        <div onClick={(e)=>changeSort('price1', filters, setFilters, e.target.textContent)}>Sort by price 1 - 0</div>
    </div>
  )
}

export default TopLinksSelect