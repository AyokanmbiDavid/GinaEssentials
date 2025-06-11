import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../assets/img/cart.png'
import account from '../../assets/img/account.png'
import './Header.css'

const Header = () => {
  return (
   <>
    <div className="navbar fixed-top navbar-expand-lg navbar-light bg-light text-dark border-bottom">
            <div className="container">
                <Link className="navbar-brand lead fs-3 fw-bold">Gina <span className="text-warning">essentials</span></Link>
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav ms-auto" >
                    <div className="nav-item"><Link to="/home" className="nav-link">Home</Link></div>
                    <div className="nav-item"><Link className="nav-link">Men</Link></div>
                    <div className="nav-item"><Link className="nav-link">Women</Link></div>
                    <div className="nav-item"><Link className="nav-link">Contact</Link></div>
                    <div className="nav-item"><Link to='/' className="nav-link"><img src={''} alt="" className='rounded mx-1' /></Link></div>
                    <div className="nav-item"><Link to='/' className="nav-link"><img src={cart} alt="" className='rounded mx-1' /></Link></div>
                    <div className="nav-item"><Link to='/' className="nav-link"><img src={account} alt="" className='rounded mx-1' /></Link></div>
                </ul> 
                </div>
               
            </div>
    </div>
   </>
  )
}

export default Header