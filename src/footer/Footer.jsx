import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterLast from './FooterLast'
import FooterBottom from './FooterBottom'


function Footer() {

  return (
    <footer>
        <FooterTop key={'footerTop'}/>
        <FooterMiddle key={'footerMiddle'}/>
        <FooterBottom key={'footerBottom'}/>
        <FooterLast key={'footerLast'}/>
    </footer>
  )
}

export default Footer