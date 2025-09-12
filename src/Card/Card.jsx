import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,price,formerPrice,id,img}) => {
  return (
      <Link to={`/details/${id}`} className="card">
            <img src={img} alt="" loading="lazy" />

            <h1 className="title">{title}</h1>

            <div className="prices">
                <h1 className="price">${price}</h1>
                <h3 className="formerPrice">${formerPrice}</h3> 
            </div>

                <button className="btn">Add To Cart</button>
        </Link>
  )
}

export default Card