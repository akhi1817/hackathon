import React from 'react'

import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Product from './Product'
import Contact from './Contact'
import Navbar from './Navbar'

const App = () => {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
   </Router>
   
   </>
  )
}

export default App
