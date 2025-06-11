import React from 'react'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import whatsapp from '../../assets/img/whatsapp.png'
import twitter from '../../assets/img/twitter.png'

const Footer = () => {
  return (
    <>
    <div className="footer text-center p-5 ">
      <div className="container">
        <div className="row g-4">
          <h2 className="my-2">You can follow us on our social media pages</h2>
          <div className="col-md-6 my-3">
            <h3>Facebook</h3>
            <p className="lead">@ginaEssential</p>
            <img src={facebook} alt="" srcset="" />
          </div>
          <div className="col-md-6 my-3">
          <h3>Twitter</h3>
            <p className="lead">@ginaEssential</p>
            <img src={twitter} alt="" srcset="" />
          </div>
        </div>
        <h3>Copyright &copy; 2025, Gina Essentials</h3>
      </div>
    </div>
    </>
  )
}

export default Footer