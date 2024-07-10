import React from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './footer.module.css'
import FooterBottomCard from './FooterBottomCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube, faCcPaypal, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'

const links = [
    {title: 'My Account', links:['My Account', 'Our stores', 'Contact us', 'Career', 'Specials']},
    {title: 'Help & Guide', links:['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Policy', 'How to Return']},
    {title: 'Categories', links:['House Plants', 'Potter Plants', 'Seeds', 'Small Plants', 'Accessories']}
]

function FooterBottom() {
    const nav = useNavigate()
  return (
    <div className={cl['footer-bottom']}>
        {links.map((e,i)=><FooterBottomCard title={e.title} links={e.links} key={i} />)}

        <div className={cl.bottomCardLast}>
            <div>
                <h4>Social Media</h4>
                <nav>
                    <FontAwesomeIcon icon={faFacebookF} color='#46A358' className={cl.icon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faInstagram} color='#46A358' className={cl.icon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faTwitter} color='#46A358' className={cl.icon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faLinkedinIn} color='#46A358' className={cl.icon} onClick={()=>nav('/error')}/>
                    <FontAwesomeIcon icon={faYoutube} color='#46A358' className={cl.icon} onClick={()=>nav('/error')}/>
                </nav>
            </div>

            <div>
                <h4>We accept</h4>
                <nav>
                    <FontAwesomeIcon icon={faCcPaypal} size='2x'/>
                    <FontAwesomeIcon icon={faCcMastercard} size='2x'/>
                    <FontAwesomeIcon icon={faCcVisa} size='2x'/>
                </nav>
            </div>
        </div>

    </div>
  )
}

export default FooterBottom