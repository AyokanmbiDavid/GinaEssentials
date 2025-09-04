import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

const ProductDetails = () => {
    const {id} = useParams()
    const FilteredData = Data.filter(e => e.id == id)
    const Product = FilteredData[0] 
    const [cart, setCart] = useState([])
    const [color, setColor] = useState('white')
    const [quantity, setQuantity] = useState(1)
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('GinaEssentialsCart')) || []
        setCart(cart)
    }, [])

    useEffect(() => {
        localStorage.setItem('GinaEssentialsCart', JSON.stringify(cart))
    },[cart])
    
    
    const ProductContent = {
        id: Product.id,
        title: Product.title,
        formerPrice: Product.formerPrice,
        category: Product.category,
        price: Product.price,
        desc: Product.desc,
        img: Product.img,
        quantity: quantity,
        color: color,
    }
    
    const AddItemToCart = () => {
            const FindItem = cart.find(e => e.title == Product.title && e.price == Product.price && e.id == Product.id )

            if(!FindItem){
                setCart([...cart, ProductContent])
                console.log(cart);
            }
        }

    const minusQuantity = () => {
        if (quantity > 0){
            setQuantity(prev => prev -1)
        }
    }


  return (
    <>
    <div className="details">
        <div className="container my-4">
            <div className="head">
                <Link to={'/search'} className='back'><i className="bi bi-arrow-left"></i></Link>
                <h1 className='fw-semibold'>Product Details <i className="bi bi-backpack"></i></h1>
            </div>

           <Suspense fallback={<h1>Loading..</h1>}>
           <div className="body">
                <div className="left">
                    <img src={Product.img} alt="" data-bs-toggle="modal" data-bs-target="#loginModal"/>
                </div>

                <div className="right">
                    
                    <h1 className="title">{Product.title}</h1>
                    <h1 className="price"><span className="text-warning price">${Product.price}</span> <span className='former'>${Product.formerPrice}</span></h1>

                    {/* select colors */}
                    <div className="select-color">
                        <div className={color == 'white' ? 'colors white' : 'colors'} onClick={() => setColor('white')}>White</div>
                        <div className={color == 'black' ? 'colors black' : 'colors'} onClick={() => setColor('black')}>Black</div>
                        <div className={color == 'red' ? 'colors red' : 'colors'} onClick={() => setColor('red')}>Red</div>
                        <div className={color == 'blue' ? 'colors blue' : 'colors'} onClick={() => setColor('blue')}>Blue</div>
                    </div>

                    {/* quantity */}
                    <div className="quantity">
                        <button className="minus btn" onClick={() => minusQuantity()}>-</button>
                        <input type="text" value={quantity} />
                        <button className='add btn' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>

                    {/* desc */}
                    <h2 className='fs-4 text-secondary desc'>{Product.desc}</h2>

                    <div className="d-flex but">
                        <button className="btn contact ">Contact Seller</button>
                        <button className="btn complaint">Complaint/Feedback</button>
                    </div>

                        <div className="submit">
                        <button className="btn add" onClick={() => AddItemToCart()}>Add to Cart <i className="bi bi-cart mx-3 text-warning"></i></button>
                        </div>
                      </div>
            </div>
           </Suspense>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Image</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <img src={Product.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails