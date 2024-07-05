import React from 'react'
import { useEffect } from 'react'

import cl from '../catalog.module.css'

function SizeCategory({title, links, count, filters, setFilters}) {

useEffect(()=>{
        
        document.querySelectorAll('#filterSize').forEach((e,i)=>{
            if(filters.size == e.getAttribute('name')){
                document.querySelectorAll('#filterSize>p')[i*2].style.color = '#46A358'
                document.querySelectorAll('#filterSize>p')[i*2].style.fontWeight = '700'
                document.querySelectorAll('#filterSize>p')[i*2+1].style.color = '#46A358'
                document.querySelectorAll('#filterSize>p')[i*2+1].style.fontWeight = '700'
            } else {
                document.querySelectorAll('#filterSize>p')[i*2].style.color = '#3D3D3D'
                document.querySelectorAll('#filterSize>p')[i*2].style.fontWeight = '400'
                document.querySelectorAll('#filterSize>p')[i*2+1].style.color = '#3D3D3D'
                document.querySelectorAll('#filterSize>p')[i*2+1].style.fontWeight = '400'
            }
        })

    },[filters.size])

  return (
    <div className={cl['filter-cont']}>

        <h4>{title}</h4>

        <div className={cl['filter-box']}>
            {links.map((e,i)=>{
                return <div name={e} id='filterSize' key={i} onClick={()=>setFilters({...filters, size:e})}>
                    <p>{e}</p>
                    <p>{count[i]}</p>
                </div>
            })}
        </div>

    </div>
  )
}

export default SizeCategory