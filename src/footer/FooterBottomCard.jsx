import React from 'react'
import cl from './footer.module.css'

function FooterBottomCard({title, links}) {
  return (
    <nav className={cl.bottomCard}>
        <h4>{title}</h4>
        {links.map((e,i)=><a key={i}>{e}</a>)}
    </nav>
  )
}

export default FooterBottomCard