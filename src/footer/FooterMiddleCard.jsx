import React from 'react'
import cl from './footer.module.css'

function FooterMiddleCard({icon, text}) {
  return (
    <div className={cl.middleCard}>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default FooterMiddleCard