import React, { useEffect, useMemo } from 'react'

import cl from '../catalog.module.css'
import CatoCard from './CatoCard'

import arr from './items.js'
let items = arr[0]

let maxPrice = 10000;



let copyI = items.slice(0,items.length)

function Window({filters, cart, setCart}) {

    useMemo(()=>{

        if(filters.prices[1]) {
            maxPrice = filters.prices[1]
        } else {
            maxPrice = 10000
        }
        copyI = items.filter((e,i)=>{
            if(e.category.includes(filters.category) && e.chapter.includes(filters.chapter) && e.size.includes(filters.size)){
                if(e.price >= Number(filters.prices[0]) && e.price <= Number(maxPrice)) return e
            }
        })

        switch(filters.sort){
            case 'nameA': copyI = copyI.sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase())); break;
            case 'nameZ': copyI = copyI.sort((a,b)=>b.title.toLowerCase().localeCompare(a.title.toLowerCase())); break;
            case 'price0': copyI = copyI.sort((a,b)=>Number(a.price)-Number(b.price)); break;
            case 'price1': copyI = copyI.sort((a,b)=>Number(b.price)-Number(a.price)); break;
        }

    }, [filters])

  return (
    <div className={cl.window}>
        {copyI.length ? copyI.map((e,i)=> <CatoCard cart={cart} setCart={setCart} info={e} key={i}/>) : <h2>NOTHING HERE</h2>}
    </div>
  )
}

export default Window