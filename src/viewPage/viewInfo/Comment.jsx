import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import cl from './viewInfo.module.css'
const star = <FontAwesomeIcon icon={faStar} color='#c2c2c2'/>
const person = <FontAwesomeIcon icon={faUser} size='2x' color='#c2c2c2'/>

function Comment({comment}) {
  return (
    <div className={cl.comment}>
        <div className={cl.icon}>{person}</div>
        <h4>{comment.name}</h4>
        <div className={cl.stars}>
            <h4 style={{justifySelf:'flex-end', color:'#c2c2c2'}}>{comment.stars} {star}</h4>
        </div>
        <p className={cl['comment-desc']}>{comment.comment}</p>
        <p className={cl.date}>{comment.date}</p>
    </div>
  )
}

export default Comment