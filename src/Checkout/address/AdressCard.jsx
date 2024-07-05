import React from 'react'
import cl from './adressCard.module.css'

function AdressCard({title, placeholder, imp, params, setParams, name}) {

  return (
    <div className={cl.cont}>
        <h5>{title} {imp ? '*' : ''}</h5>
        <input value={params[`${name}`]} type="text" placeholder={placeholder} onInput={(e)=>setParams({...params, [`${name}`]: e.target.value})}/>
    </div>
  )
}

export default AdressCard