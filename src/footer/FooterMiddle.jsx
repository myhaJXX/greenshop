import React from 'react'
import cl from './footer.module.css'
import logo from '../static/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import FooterMiddleCard from './FooterMiddleCard'

const geo = <FontAwesomeIcon icon={faLocationDot} color='#46A358' />
const email = <FontAwesomeIcon icon={faEnvelope} color='#46A358' />
const phone = <FontAwesomeIcon icon={faPhoneVolume} color='#46A358' />

const cards = [
    {icon: geo, text:'70 West Buckingham Ave. Farmingdale, NY 11735'},
    {icon: email, text:'contact@greenshop.com'},
    {icon: phone, text:'+88 01911 717 490'}
]

function FooterMiddle() {
  return (
    <div className={cl['footer-middle']}>

        <div className={cl['img-cont']}>
            <img src={logo} alt="" />
            <h2>GREENSHOP</h2>
        </div>

        {cards.map((e,i)=><FooterMiddleCard key={i} icon={e.icon} text={e.text}/>)}

    </div>
  )
}

export default FooterMiddle