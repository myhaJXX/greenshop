import React, { useEffect } from 'react'
import cl from '../catalog.module.css'

function FilterCategory({title, links, count, filters, setFilters}) {

    useEffect(()=>{
        
        document.querySelectorAll('#filterCategory').forEach((e,i)=>{
            if(filters.category == e.getAttribute('name')){
                document.querySelectorAll('#filterCategory>p')[i*2].style.color = '#46A358'
                document.querySelectorAll('#filterCategory>p')[i*2].style.fontWeight = '700'
                document.querySelectorAll('#filterCategory>p')[i*2+1].style.color = '#46A358'
                document.querySelectorAll('#filterCategory>p')[i*2+1].style.fontWeight = '700'
            } else {
                document.querySelectorAll('#filterCategory>p')[i*2].style.color = '#3D3D3D'
                document.querySelectorAll('#filterCategory>p')[i*2].style.fontWeight = '400'
                document.querySelectorAll('#filterCategory>p')[i*2+1].style.color = '#3D3D3D'
                document.querySelectorAll('#filterCategory>p')[i*2+1].style.fontWeight = '400'
            }
        })

    },[filters.category])

  return (
    <div className={cl['filter-cont']}>

        <h4>{title}</h4>

        <div className={cl['filter-box']}>
            {links.map((e,i)=>{
                return <div name={e} id='filterCategory' key={i} onClick={()=>setFilters({...filters, category:e})}>
                    <p>{e}</p>
                    <p>{count[i]}</p>
                </div>
            })}
        </div>

    </div>
  )
}

export default FilterCategory