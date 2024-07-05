import React from 'react'
import cl from './blog.module.css'
import BlogCard from './BlogCard'

import bl1 from '../../static/blog1.png'
import bl2 from '../../static/blog2.png'
import bl3 from '../../static/blog3.png'
import bl4 from '../../static/blog4.png'

const items = [
    {title:'Cactus & Succulent Care Tips', date:'September 12  I Read in 6 minutes', 
    info:'Cacti are succulents are easy care plants for any home or patio.', img:bl1},
    {title:'Cactus & Succulent Care Tips', date:'September 12  I Read in 6 minutes', 
    info:'Cacti are succulents are easy care plants for any home or patio.', img:bl2},
    {title:'Cactus & Succulent Care Tips', date:'September 12  I Read in 6 minutes', 
    info:'Cacti are succulents are easy care plants for any home or patio.', img:bl3},
    {title:'Cactus & Succulent Care Tips', date:'September 12  I Read in 6 minutes', 
    info:'Cacti are succulents are easy care plants for any home or patio.', img:bl4},
]

function Blog() {
  return (
    <section className={cl.cont}>
        <div>
            <h2>Our Blog Posts</h2>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className={cl.box}>
            {items.map((e,i)=>{
                return <BlogCard title={e.title} date={e.date} info={e.info} img={e.img} key={i}/>
            })}
        </div>
    </section>
  )
}

export default Blog