import React from 'react'
import Data from '../../Data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import './Product.css'
import CartData from '../Cart/CartData'

const ProductDetails = () => {
  const [carBtn, setCarBtn] = useState('Add to Cart');
  const proid = useParams()
  const proDetail = Data.filter(x => x.id == proid.id);
  const product = proDetail[0];

  const changeCart = () => {
    if (carBtn == 'Add to Cart'){
      setCarBtn('Remove from Cart')
      CartData.push({id : proid})
    } else {
      setCarBtn('Add to Cart')
      CartData.filter(x => x.id = proid)
    }
  }
  

  return (
    <>
        <div className="container my-5">
          <Link to={'/home'} className="btn btn-outline-secondary btn-lg">Back</Link>
            <h1 className="mt-5 text-secondary text-center">Product</h1>
            <hr className="m-auto mb-5 w-25" />

            <div className="bg-light rounded p-3">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6 detail text-center">
                    <img src={product.img} alt="" className="m-auto rounded" />
                  </div>

                  <div className="col-md-6">
                    <h1 className="my-3 text-secondary">Name:  {product.title}</h1>
                    <h2 className="my-5 text-secondary lead fs-2">Price:  {product.price}</h2>
                    <h2 className="my-5 text-secondary lead fs-2">Category:  coming soon</h2>
                    <div className="row my-3">
                      <div className="col-md-12 mb-3">
                    <Link className="btn btn-outline-primary btn-lg">See similar products </Link>
                      </div>
                      <div className="col-md-12 mb-3">
                    <Link to='/cart' className="btn btn-secondary btn-lg">Go to cart</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container my-5 text-center ">
              <Link onClick={() => changeCart()} className="btn btn-success btn-lg w-75">{carBtn}</Link>
            </div>
        </div>
    </>
  )
}

export default ProductDetails