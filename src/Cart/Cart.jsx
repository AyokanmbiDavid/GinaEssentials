import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState('9')
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('GinaEssentialsCart')) || []
        setCart(cart)
        const findTheme = JSON.parse(localStorage.getItem('GinaTheme')) || theme
        setTheme(findTheme)

        for (let i = 0; i < cart.length; i++) {
           const Price = (cart[i].price).parseInt
           console.log(cart[i].price);
           
        }
        console.log(totalPrice);
        
    }, [])

     setInterval(() => {
      const findTheme = JSON.parse(localStorage.getItem('GinaTheme'))
        setTheme(findTheme)
   }, 200);

    useEffect(() => {
        localStorage.setItem('GinaEssentialsCart', JSON.stringify(cart))
    },[cart])

    const deleteItem = (id) => {
        const FilterCart = cart.filter(e => e.id !== id)

        setCart(FilterCart)
    }    

  return (
    <>
    <Header/>
       <Suspense>
       <div className={theme? "cart": "cart dark"}>
            <div className="container">
                {/* head */}
                <div className="head">
                   <Link to={'/search'}> <i className="bi bi-arrow-left"></i></Link>
                    <h1>Cart ({cart.length})</h1>
                </div>
                <hr />

                <div className="clear">
                    <button onClick={() => setCart([])}>clear all</button>
                </div>

                {/* grid */}
                <div className="grid">
                    {cart.map((item) => (
                        <>
                            <div className="card">
                                <div className="top"><button className='.btn' onClick={() => deleteItem(item.id)}>delete x</button></div>
                                <Link to={`/details/${item.id}`}className="card-body">
                                <div className="right">
                                    <img src={item.img} alt="" />
                                </div>

                                <div className="left">
                                    <h1 className="title">{item.title}</h1>
                                    <h1 className='price'>${item.price}</h1>
                                    <h3 className='quantity'>Quantity :{item.quantity}</h3>
                                    <h3 className='color'>color: {item.color}</h3>
                                </div>
                                </Link>
                            </div>
                            </>
                    ))}
                </div>

                {/* checkout */}
                {cart.length != 0  && <div className="checkout">
                    <button className="btn">Checkout <i className="bi bi-truck"></i></button>
                </div>}
            </div>
        </div>
       </Suspense>
    </>
  )
}

export default Cart