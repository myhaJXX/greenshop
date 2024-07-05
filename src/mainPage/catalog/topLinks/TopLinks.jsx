import React, { useEffect } from 'react'

import cl from '../catalog.module.css'
import TopLinksSelect from './TopLinksSelect'

function TopLinks({filters, setFilters}) {

  useEffect(()=>{
    document.querySelectorAll(`.${cl['links-box']}>div`).forEach((e,i)=>{
      if(e.getAttribute('name')==filters.chapter){
        e.classList.add(`${cl.activeLink}`)
      } else {
        e.classList.remove(`${cl.activeLink}`)
      }
      e.addEventListener('click',()=>setFilters({...filters, chapter:e.getAttribute('name')}))
    })
  }, [filters])

  return (
    <div className={cl['links-cont']}>

        <div className={cl['links-box']}>
          <div name={'All Plants'}>All Plants</div>
          <div name={'New Arrivals'}>New Arrivals</div>
          <div name={'Sale'}>Sale</div>
        </div>

        <TopLinksSelect filters={filters} setFilters={setFilters}/>

    </div>
  )
}

export default TopLinks