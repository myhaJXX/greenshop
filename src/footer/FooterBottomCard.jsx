import React from 'react'
import cl from './footer.module.css'
import { useNavigate } from 'react-router-dom'

function FooterBottomCard({title, links}) {
  const nav = useNavigate()
  return (
    <nav className={cl.bottomCard}>
        <h4>{title}</h4>
        {links.map((e,i)=><a key={i} onClick={(e)=>{
          e.preventDefault()
          nav('/error')
        }}>{e}</a>)}
    </nav>
  )
}

export default FooterBottomCard