import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Data from '../Data';
import Header from '../Header/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Data.find((item) => item.id == id);

  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState('white');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('GinaEssentialsCart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('GinaEssentialsCart', JSON.stringify(cart));
  }, [cart]);

  const productToAdd = {
    id: product.id,
    title: product.title,
    formerPrice: product.formerPrice,
    category: product.category,
    price: product.price,
    desc: product.desc,
    img: product.img,
    quantity,
    color: selectedColor,
  };

  const handleAddToCart = () => {
    const loginStatus = JSON.parse(localStorage.getItem('GinaEssentialsLogin'));
    if (!loginStatus || loginStatus.login !== true) {
      alert('Please login to proceed');
      navigate('/login');
      return;
    }

    const alreadyInCart = cart.find(
      (item) => item.id === product.id && item.color === selectedColor
    );

    if (!alreadyInCart) {
      setCart([...cart, productToAdd]);
      alert('Item added to cart');
    } else {
      alert('Item already in cart');
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <>
      <Header />
      <div className="details">
        <div className="container my-4">
          <div className="head">
            <Link to="/search" className="back">
              <i className="bi bi-arrow-left"></i>
            </Link>
            <h1 className="fw-semibold">
              Product Details <i className="bi bi-backpack"></i>
            </h1>
          </div>

          <div className="body">
            <div className="left">
              <img
                src={product.img}
                alt=""
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              />
            </div>

            <div className="right">
              <h1 className="title">{product.title}</h1>
              <h1 className="price">
                <span className="text-warning price">${product.price}</span>{' '}
                <span className="former">${product.formerPrice}</span>
              </h1>

              {/* Color Selection */}
              <div className="select-color">
                {['white', 'black', 'red', 'blue'].map((clr) => (
                  <div
                    key={clr}
                    className={`colors  ${selectedColor == clr ? `${clr}` : 'colors'}`}
                    onClick={() => setSelectedColor(clr)}
                  >
                    {clr.charAt(0).toUpperCase() + clr.slice(1)}
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="quantity">
                <button className="minus btn" onClick={decreaseQuantity}>
                  -
                </button>
                <input type="text" value={quantity} readOnly />
                <button className="add btn" onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>

              {/* Description */}
              <h2 className="fs-4 text-secondary desc">{product.desc}</h2>

              <div className="d-flex but">
                <button className="btn contact">Contact Seller</button>
                <button className="btn complaint">Complaint/Feedback</button>
              </div>

              <div className="submit">
                <button className="btn add" onClick={handleAddToCart}>
                  Add to Cart <i className="bi bi-cart mx-3 text-warning"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Image
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={product.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
