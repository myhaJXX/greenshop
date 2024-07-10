import React from 'react'
import cl from './blog.module.css'
import { useNavigate } from 'react-router-dom'

function BlogCard({title, date, info, img}) {
  const nav = useNavigate()
  return (
    <div className={cl.card}>
        <img src={img} alt="" />
        <h6 className={cl.date}>{date}</h6>
        <h5>{title}</h5>
        <h6 className={cl.info}>{info}</h6>
        <a className={cl.link} href="" onClick={(e)=>{
          e.preventDefault()
          nav('/error')
        }}>Read More</a>
    </div>
  )
}

export default BlogCard