import React from 'react'
import cl from './footer.module.css'
import TopCard from './TopCard'

const topCards = [
    {title:'Garden Care', desc: 'We are an online plant shop offering a wide range of cheap and trendy plants.'},
    {title:'Plant Renovation', desc: 'We are an online plant shop offering a wide range of cheap and trendy plants.'},
    {title:'Watering Graden', desc: 'We are an online plant shop offering a wide range of cheap and trendy plants.'}
]

function FooterTop() {
  return (
    <div className={cl.top}>
            {topCards.map((e,i)=><TopCard title={e.title} desc={e.desc} key={i}/>)}
            <div className={cl['email-cont']}>
                <h4>Would you like to join newsletters?</h4>
                <div className={cl['email-box']}>
                    <input type="text" placeholder='Enter your email address...'/>
                    <div>Join</div>
                </div>
                <h5>We usually post offers and challenges in newsletter. 
                    We’re your online houseplant destination. 
                    We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours! 
                </h5>
            </div>
    </div>
  )
}

export default FooterTop