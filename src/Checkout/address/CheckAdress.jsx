import React, { useEffect } from 'react'
import cl from '../checkout.module.css'
import AdressCard from './AdressCard'

const inputs = [
  {title: 'First Name', placeholder: '', imp: 1, name:'fName'},
  {title: 'Last Name', placeholder: '', imp: 1, name:'lName'},
  {title: 'Country / Region', placeholder: 'Select a country / region', imp: 1, name:'country'},
  {title: 'Town / City', placeholder: '', imp: 1, name:'city'},
  {title: 'Street Address', placeholder: 'House number and street name', imp: 1, name:'street'},
  {title: 'House Number', placeholder: 'Appartment, suite, unit, etc. (optional)', imp: 0, name:'apps'},
  {title: 'State', placeholder: 'State', imp: 1, name:'state'},
  {title: 'Zip', placeholder: '', imp: 0, name:'zip'},
  {title: 'Email address', placeholder: '', imp: 1, name:'email'},
  {title: 'Phone Number', placeholder: '+375', imp: 1, name:'phone'},
]

function CheckAdress({params, setParams}) {
  return (
    <div className={cl.addressBox}>
      {inputs.map((e,i)=><AdressCard name={e.name} title={e.title} placeholder={e.placeholder} imp={e.imp} key={i} params={params} setParams={setParams}/>)}
    </div>
  )
}

export default CheckAdress