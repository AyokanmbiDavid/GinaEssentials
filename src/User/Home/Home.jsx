import React from 'react'
import './Home.css'
import shoe from '../../assets/img/shoe-copy.png'
import bag from '../../assets/img/bag.jpg'
import shoe1 from '../../assets/img/shoe.jpg'
import socks from '../../assets/img/socks.jpg'
import contact from '../../assets/img/contact.png'
import account from '../../assets/img/account.png'
import cart from '../../assets/img/cart.png'
import like from '../../assets/img/like.png'
import whatsapp from '../../assets/img/whatsapp.png'

const Home = () => {
  return (
    <>
    {/* intro */}
      <div className="p-5 intro">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center flex-column">
              <h1 className="intro-title my-3">
                Wow price for new users
              </h1>
              <p className="lead intro-text my-3">
                Exclusive prices, for new users. Enjoy our services and ite,we present
              </p>

              <button className="btn btn-lg w-50 btn-danger my-5">Shop now</button>
            </div>

            <div className="col-md-6 intro-pic">
              <img src={shoe} alt="" className="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* offer */}
      <div className="my-5 p-3">
        <div className="container">
          <div className="row g-4 offer">
            <div className="col-md-4">
              <img src={account} alt="" className="rounded" />
              <h2 className='my-2' >
                Customer First
              </h2>
              <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas expedita laborum excepturi.</p>
            </div>

            <div className="col-md-4">
            <img src={contact} alt="" className="rounded-circle" />
              <h2 className='my-2' >
                Available always
              </h2>
              <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas expedita laborum excepturi.</p>
           
            </div>

            <div className="col-md-4">
            <img src={cart} alt="" className="rounded-circle" />
              <h2 className='my-2' >
                Purchase convenience
              </h2>
              <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas expedita laborum excepturi.</p>
           
            </div>
          </div>
        </div>
      </div>

      {/* products intro */}
      <div className="my-5 products p-3">
          <div className="container">
            <h1 className="product-title my-3">Newest Items</h1>
            <div className="row my-3 g-5">
              
              
            <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={bag} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">GUCCI bag</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={shoe} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">Shoe</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={shoe1} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">Shoe</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={socks} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">Socks</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={shoe} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">Shoe</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card ">
                  <img src={shoe} alt="" className="img-top rounded" />
                  <div className="card-body">
                    <h1 className="card-title my-2">Shoe</h1>
                    <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.</p>
                    <div className="d-flex justify-content-between">
                        <button className="card-btn btn btn-success w-50">Check item!</button>
                        <img src={like} alt="" className="card-like rounded" />
                    </div>
                  
                  </div>
                </div>
              </div>


            </div>
          </div>
      </div>

      {/* contact */}
      <div className="my-4 bg-secondary p-3">
        <div className="container">
          <h2 className="my-3">Feel free to message us</h2>
          <div className="row g-3">
            <div className="col-md-6">
          <form >
            <input type="text" className="form-control my-3 fs-5" placeholder='Name'/>
            <input type="email" className="form-control my-3 fs-5" placeholder='Email'/>
            <textarea type="text" className="form-control my-3 fs-5" placeholder='Feedbacks/complaints'/>
            <button className="btn btn-success fs-4 w-50">Send <img src={whatsapp} alt="" className='mx-3 rounded' style={{height: '30px'}}/></button>
          </form>
            </div>
            <div className="col-md-6 d-sm-block">
              <img src={whatsapp} className='rounded thumbnail' alt="" srcset="" style={{height:'250px'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home