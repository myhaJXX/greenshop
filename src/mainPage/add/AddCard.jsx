import React from 'react'
import cl from './add.module.css'
import { useNavigate } from 'react-router-dom'

function AddCard({title, info, img}) {
  const nav = useNavigate()
  return (
    <div className={cl.card}>
        <img src={img} alt="" />
        <div className={cl['info-box']}>
            <h4>{title}</h4>
            <p>{info}</p>
            <button onClick={()=>nav('/error')}>Find More</button>
        </div>
    </div>
  )
}

export default AddCard