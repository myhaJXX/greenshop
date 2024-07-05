import React from 'react'
import cl from './add.module.css'

function AddCard({title, info, img}) {
  return (
    <div className={cl.card}>
        <img src={img} alt="" />
        <div className={cl['info-box']}>
            <h4>{title}</h4>
            <p>{info}</p>
            <button>Find More</button>
        </div>
    </div>
  )
}

export default AddCard