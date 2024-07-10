import React, { useEffect,useMemo, useState } from "react";
import MainPage from "./mainPage/MainPage";

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'

import './app.css'
import View from "./viewPage/View";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState([])

  const [discount, setDiscount] = useState(0)

  useMemo(()=>{

    let cartCopy = []

    for(let i =0;i<cart.length;i++){

      let count = 0;
      let object = {...cart[i]}

      for(let j = i;j<cart.length;j++){
        if(cart[i].ID == cart[j].ID) count+=cart[j].count
      }
      object.count = count

      let flag = true;
      for(let k = 0;k<cartCopy.length;k++){
        if(object.ID == cartCopy[k].ID) flag = false
      }

      if(flag) cartCopy = [...cartCopy, object]

    }

    // console.log(cartCopy)
    setShowCart([...cartCopy])
  },[cart])

  return (
    <HashRouter basename="/">
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage cart={showCart} setCart={setCart}/>}/>
          <Route path="/view/:id" element={<View cart={showCart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={showCart} setCart={setCart} discount={discount} setDiscount={setDiscount} />}/>
          <Route path="/checkout" element={<Checkout cart={showCart} discount={discount} setCart={setCart}/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
