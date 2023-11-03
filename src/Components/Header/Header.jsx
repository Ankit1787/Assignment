import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Utils } from './Utils'



const Header = () => {
    const {Navbar,Wrapper,Wrapper2}= Utils
  const [active ,setActive]=useState(false)

 
  return (
    <>
    
 <Navbar>
   
   <Wrapper>


         <div className="brand">
            BB Store
          </div>
          <div className={`navbar-toggle`} onClick={()=>setActive(!active)}>
          
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
        
          </div>
            <div className={`nav `} >
                <ul className='navlinks'>
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/products">Products</Link></li>
                    
                </ul>
 
             </div>
          
        </Wrapper>


        <Wrapper2 active={active}>
      
      <ul className='navlinks'>
          <li><Link className='navlink' to="/">Home</Link></li>
          <li><Link className='navlink' to="/products">Products</Link></li>
         
      </ul>
      
   <button  className='btn-cross' onClick={()=>setActive(!active)}>X</button>
 
</Wrapper2>
 
      
</Navbar>
        
      
   
    </>
  )
}

export default Header