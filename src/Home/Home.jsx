import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img1 from './IMG-20250709-WA0036.jpg'
import img2 from './IMG-20250712-WA0171.jpg'
import img3 from './IMG-20250709-WA0078.jpg'
import img4 from './IMG-20250712-WA0124.jpg'
import img5 from './IMG-20250713-WA0088.jpg'
import { LatestData } from './LatestData'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'

const Home = () => {
    const navigate = useNavigate()
    const LoginInfo = JSON.parse(localStorage.getItem('GinaEssentialsLogin')) || false
    const hasLogin = LoginInfo.login 
    const [latest, setLatest] = useState([])

    useEffect(() => {
        localStorage.setItem('GinaLatest', JSON.stringify(LatestData))
        const allLatest = JSON.parse(localStorage.getItem('GinaLatest')) || LatestData
        setLatest(allLatest)
    }, [])
    
    const Logout = () => {
        const Login = {
            login: false
        }
        localStorage.setItem('GinaEssentialsLogin', JSON.stringify(Login))
        navigate('/')
    }
    

  return (
    <>
    <Header/>
        <div className="home">
            <div className="container">
               <Suspense>
               <div className="home-top p-2 my-3">
                <div className="login-info">
                    {!hasLogin && <>
                        <h3>Seems you have not logged in?</h3>
                    <div className="but">
                            <Link to={'/'}> <button className="btn">Login</button></Link>
                        <Link to={'/register'}> <button className="btn signup">SignUp</button></Link>     
                      </div>
                    </>}
                            {hasLogin && <>
                                <div className="but">
                            <button className="btn"  onClick={() => Logout()}>Logout </button>
                            </div>      
                            </>}
                </div>

                <div className='head'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <Link to={'/details/1'} class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..."  height='500px' />
                        </Link>
                        <Link  to={'/details/3'} class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..." height='500px' />
                        </Link>
                        <Link to={'/details/4'} class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." height='500px'/>
                        </Link>
                        <Link to={'/details/5'} class="carousel-item">
                        <img src={img4} class="d-block w-100" alt="..." height='500px'/>
                        </Link>
                        <Link to={'/details/6'} class="carousel-item">
                        <img src={img5} class="d-block w-100" alt="..." height='500px'/>
                        </Link>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
               </div>

                {/* search */}
                <Link to={'/search'} className="search p-2">
                    <input type="text" placeholder='Type here to search..' />
                </Link>

                <div className="latest my-3 ">
                    <h1 className='fw-bold head'>Latest</h1>
                    
                   <div className="grid">
                        {latest.map((item) => (
                            <>
                                <Card title={item.title} formerPrice={item.formerPrice} id={item.id} img={item.img} price={item.price} />
                            </>
                        ))}
                    </div>
                </div>

                {/* suscribe */}
                <div className="subscribe p-2 my-3">
                    <h3>Suscribe to Gina Essentials for latest update</h3>
                    <input type="email" placeholder='Email..' />
                    <button>Submit</button>
                </div>
               </Suspense>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home