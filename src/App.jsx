import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Product from './Components/Product'
import Cart from './Components/Cart'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
         <Navbar />

         <Routes>
        
          <Route path="/" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
         </Routes>
      
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
