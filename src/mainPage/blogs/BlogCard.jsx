import React from 'react'
import cl from './blog.module.css'

function BlogCard({title, date, info, img}) {
  return (
    <div className={cl.card}>
        <img src={img} alt="" />
        <h6 className={cl.date}>{date}</h6>
        <h5>{title}</h5>
        <h6 className={cl.info}>{info}</h6>
        <a className={cl.link} href="">Read More</a>
    </div>
  )
}

export default BlogCard