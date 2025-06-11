import React, { useState } from 'react'
import shoe from '../../assets/img/shoe.jpg'
import './Cart.css'
import CartData from './CartData'
import Data from '../../Data'

const Cart = () => {
    const [num, setNum] = useState(1)

    const addNum = () => {
        setNum(num + 1)
    }

    const remNum = () => {
        if(num != 0) {
           setNum(num - 1) 
        }
    }

    const allCart = () => {
        CartData.map(item => {
            const Product = Data.filter(product => product.id == item.id)
            const product = Product[0]


        return (
            <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 cart text-center">
                            <img src={product.img} alt="" />
                        </div>

                        <div className="col-lg-6 text-center">
                                <h1 className="text-secondary my-4">{product.title}</h1>
                                <h3 className="my-5 text-secondary">Price: {product.price}</h3>

                                <div className="my-5 d-flex w-100 justify-content-center">
                                    <button onClick={() => remNum()} className="btn btn-outline-primary btn-lg">-</button>
                                    <h4 className="p-2 mx-5">{num}</h4>
                                    <button onClick={() => addNum()} className="btn btn-outline-primary btn-lg">+</button>
                                </div>

                                <button className="btn btn-danger btn-lg">Remove</button>
                        </div>
                    </div>
                </div>
        )
        })
    }

  return (
    <>
        <div className="container">
            <h1 className="my-5 text-secondary text-center">Cart</h1>
            <hr className="m-auto w-25 mb-5"  />

            {/* Cart Products */}
           <div className="row my-5 bg-light rounded p-3">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 cart text-center">
                            <img src={shoe} alt="" />
                        </div>

                        <div className="col-lg-6 text-center">
                                <h1 className="text-secondary my-4">Shoe</h1>
                                <h3 className="my-5 text-secondary">Price: 12000</h3>

                                <div className="my-5 d-flex w-100 justify-content-center">
                                    <button onClick={() => remNum()} className="btn btn-outline-primary btn-lg">-</button>
                                    <h4 className="p-2 mx-5">{num}</h4>
                                    <button onClick={() => addNum()} className="btn btn-outline-primary btn-lg">+</button>
                                </div>

                                <button className="btn btn-danger btn-lg">Remove</button>
                        </div>
                    </div>
                </div>

                {/* {CartData.length !== 0 && allCart()} */}
           </div>

           <div className="my-4 text-center">
            <button className="btn btn-success btn-lg w-50">Proceed to Checkout</button>
           </div>
        </div>
    </>
  )
}

export default Cart