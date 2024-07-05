import React, { useEffect, useState } from "react";
import MainPage from "./mainPage/MainPage";

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './app.css'
import View from "./viewPage/View";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

function App() {

  const [cart, setCart] = useState([])

  const [discount, setDiscount] = useState(0)

  useEffect(()=>{
    console.log(cart)
  },[cart])

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage cart={cart} setCart={setCart}/>}/>
          <Route path="/view/:id" element={<View cart={cart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} discount={discount} setDiscount={setDiscount} />}/>
          <Route path="/checkout" element={<Checkout cart={cart} discount={discount} setCart={setCart}/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
