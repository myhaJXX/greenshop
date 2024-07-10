import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './viewCard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const faceBook = <FontAwesomeIcon icon={faFacebookF} className={cl.icon}/>
const twitter = <FontAwesomeIcon icon={faTwitter} className={cl.icon}/>
const ll = <FontAwesomeIcon icon={faLinkedinIn} className={cl.icon}/>
const email = <FontAwesomeIcon icon={faEnvelope} className={cl.icon}/>

const star = <FontAwesomeIcon icon={faStar} />

let average = 0;

function ViewCard({cart, setCart, info, comments}) {
  const nav = useNavigate()
  useMemo(()=>{
    let max = 0;
    comments.forEach(e=>{
      max+=e.stars
    })
    average = max / comments.length
    average = average.toFixed(1)
  },[])

  const photoss = new Array(4).fill(info.img)

  const [activeP, setActiveP] = useState(0)

  useEffect(()=>{
    document.querySelector(`.${cl.bigImg}>img`).style.opacity = '0'
    setTimeout(()=>{
      document.querySelector(`.${cl.bigImg}>img`).setAttribute('src', `${photoss[activeP]}`)
      document.querySelector(`.${cl.bigImg}>img`).style.opacity = '1'
    }, 400)
  }, [activeP])

  const [params, setParams] = useState({
    size: 'Small',
    count: 1
  })

  useEffect(()=>{
    document.querySelectorAll(`.${cl['size-box-button']}`).forEach((e,i)=>{
      if(e.textContent[0] == params.size[0]){
        e.classList.add(`${cl.activeS}`)
      } else {
        e.classList.remove(`${cl.activeS}`)
      }
    })
    info = {...info, ...params}
  }, [params, cart])

  useMemo(()=>{
    if(params.count < 1 ) params.count = 1
  }, [params])

  return (
    <section className={cl.card}>

      <div className={cl.photos}>
        {photoss.map((e,i)=><img onClick={()=>setActiveP(i)} src={e} key={i}/>)}
      </div>

      <div className={cl.bigImg}>
        <img style={{opacity:0}} src='' alt="" />
      </div>

      <article>

        <h2>{info.title}</h2>

        <div className={cl.PC}>
          <p className={cl.price}>${info.price}</p>
          <p className={cl.comments}>{average} {star} | {comments.length} Customer Review</p>
        </div>

        <div className={cl.shortInfo}>
          <h4>Short Description</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className={cl['size-box']}>
            <h4>Size:</h4>
            <div>
              <button className={cl['size-box-button']} onClick={(e)=>{setParams({...params, size:'Small'})}}>S</button>
              <button className={cl['size-box-button']} onClick={(e)=>{setParams({...params, size:'Medium'})}}>M</button>
              <button className={cl['size-box-button']} onClick={(e)=>{setParams({...params, size:'Large'})}}>L</button>
              <button className={cl['size-box-button']} onClick={(e)=>{setParams({...params, size:'XLarge'})}}>XL</button>
            </div>
        </div>

        <div className={cl['count-cont']}>
          <div className={cl['count-box']}>
              <button onClick={()=>setParams({...params, count:params.count-1})}>-</button>
              <p>{params.count}</p>
              <button onClick={()=>setParams({...params, count:params.count+1})}>+</button>
          </div>

          <button onClick={()=>nav('/error')}>Buy Now</button>
          <button onClick={()=>setCart([...cart, info])}>Add To Cart</button>
        </div>

        <div className={cl.lowInfo}>
          <p>ID: {info.ID}</p>
          <p>Category: {info.category.slice(0,info.category.length-4)}</p>
          <p>Tags: Home, Plants, Garden</p>
        </div>

        <div className={cl['links-cont']}>
          <h4>Share this products:</h4>
          {faceBook}
          {twitter}
          {ll}
          {email}
        </div>

      </article>

    </section>
  )
}

export default ViewCard