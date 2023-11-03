import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({item}) => {
    const navigate=useNavigate()
  return (
    <>
      <div className="feature-content" onClick={()=>navigate(`/product/${item.id}`)}>
                      <div className="feature-img">
                        <img src={item?.images[0].url} alt="" />
                      </div>

                      <div className="feature-details">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>

                        <span className="price">₹{item.price}</span>
                        <button className="feature-btn" onClick={()=>navigate(`/product/${item.id}`)}>Buy Now</button>
                      </div>
    </div>
    
    </>
  )
}

export default Card