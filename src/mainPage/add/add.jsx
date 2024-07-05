import React from 'react'
import cl from './add.module.css'
import AddCard from './AddCard'

import add1 from '../../static/add1.png'
import add2 from '../../static/add2.png'

let adds = [
    {title: `Summer cactus & succulents`, info:'We are an online plant shop offering a wide range of cheap and trendy plants', img:add1},
    {title: `Styling Trends& much more`, info:'We are an online plant shop offering a wide range of cheap and trendy plants', img:add2},
]

function Add() {
  return (
    <section className={cl.cont}>
        {adds.map((e,i)=>
            <AddCard key={i} title={e.title} info={e.info} img={e.img}/>
        )}
    </section>
  )
}

export default Add