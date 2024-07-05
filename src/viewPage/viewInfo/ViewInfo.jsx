import React, { useEffect, useState } from 'react'
import ViewDescription from './ViewDescription'
import ViewComments from './ViewComments'

import cl from './viewInfo.module.css'

function ViewInfo({comments}) {
    let [page, setPage] = useState(0)

    useEffect(()=>{
      document.querySelectorAll(`.${cl.link}`).forEach((e,i)=>{
        if(i == page){
          e.classList.add(`${cl.active}`)
        } else {
          e.classList.remove(`${cl.active}`)
        }
      })
    }, [page])

  return (
    <section className={cl.cont}>
      
        <div className={cl['links-cont']}>
          <button onClick={()=>setPage(0)} className={cl.link}>Product Description</button>
          <button onClick={()=>setPage(1)} className={cl.link}>Reviews ({comments.length})</button>
        </div>

        {page == 0 ? <ViewDescription/> : <ViewComments comments={comments}/>}
    </section>
  )
}

export default ViewInfo