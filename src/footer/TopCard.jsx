import React from 'react'
import cl from './footer.module.css'

function TopCard({title, desc}) {
  return (
    <div className={cl.topCard}>
        <h4>{title}</h4>
        <h5>{desc}</h5>
    </div>
  )
}

export default TopCard