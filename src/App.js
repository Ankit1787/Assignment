import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products.jsx'
import Search from './pages/Search/Search.jsx'

import  "./index.css"
const App = () => {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/search/:text' element={<Search />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App