import React, { useState, useEffect, Suspense } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [allCart, setallCart] = useState([])
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('GinaEssentialsCart')) || []
        const findTheme = JSON.parse(localStorage.getItem('GinaTheme')) || theme
        setTheme(findTheme)
        setallCart(cart)
    }, [])

    useEffect(() => {
      localStorage.setItem('GinaTheme', JSON.stringify(theme))
    }, [theme])
    
    setInterval(() => {
        const cart = JSON.parse(localStorage.getItem('GinaEssentialsCart')) || []
        setallCart(cart)
    }, 1000);
    
  return (
    <>
        <nav className={theme ? "navbar navbar-expand-lg fixed-top": "navbar navbar-expand-lg fixed-top dark"}>
        <Suspense>
        <div className={theme == true || theme == "true" ? "container py-2": "container py-2 dark"}>
            <Link to={'/home'} className="navbar-brand fw-bold">GinaFashionWorld <span className="text-warning mx-2"><i className="bi bi-bag"></i></span></Link>
             <Link to={'/search'} className="search">
                 <input type="text" placeholder='Search..' />
             </Link>
            <div className="mobile">
            <div className="nav-item text-center ms-auto mobile-sun mx-3" onClick={() => setTheme(!theme)}>
                {theme ? <i className='bi bi-sun'></i> : <i className='bi bi-moon'></i>}           
            </div>
            <div className="nav-item text-center ms-auto mobile-cart mx-3">
                    <Link className="nav-link" to="/cart"><i className="bi bi-cart text-warning"></i> <span className="text-warning">{allCart.length}</span></Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item text-center">
                        <Link className="nav-link active" aria-current="page" to="/home">Home <i className="bi bi-house"></i></Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link className="nav-link" to="/cart"> <i className="bi bi-cart text-warning"></i> <span className="text-warning">({allCart.length})</span></Link>
                    </li>
                     <li className="nav-item text-center sun" onClick={() => setTheme(!theme)}>
                        {theme ? <i className='bi bi-sun'></i> : <i className='bi bi-moon'></i>}  
                     </li>
                </ul>
            </div>
        </div>
        </Suspense>
    </nav>
    </>
  )
}

export default Header