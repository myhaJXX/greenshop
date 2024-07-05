import React from 'react'

import cl from './viewInfo.module.css'
import Comment from './Comment'

function ViewComments({comments}) {
  return (
    <div className={cl['comments-cont']}>
        {comments.map((e,i)=><Comment comment={e} key={i}/>)}
    </div>
  )
}

export default ViewComments