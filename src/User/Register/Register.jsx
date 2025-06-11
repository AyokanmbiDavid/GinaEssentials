import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = () => {
     const [passwordState, setPasswordState] = useState('see password')
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [phoneNumber, setPhoneNumber] = useState('')
     const [password, setPassword] = useState('')
     const Navigate = useNavigate()

        const Register = () => {
            if(email, password, phoneNumber) {
                const User = []
            const user =JSON.stringify({
                name: name,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
            })
            User.push(user)
            // const Users = JSON.stringify(User)
            localStorage.setItem('ShopStoreUsers', User)
            alert('Your user account has been succefully registered')
            setTimeout(() => {
                Navigate('/home')
            }, 1000);
            } else {
                alert('Please enter all fields')
            }

        }
        
        const changePasswordText = () =>{
            if(passwordState == 'see password') {
                setPasswordState('unsee password')
            } else {
                setPasswordState('see password')
            }
        }

  return (
    <>
         {/* login */}
         <section>
            <div className="container my-5">
                <div className="d-flex justify-content-around align-items-center" style={{height:'99vh'}}>
                   <div className="body p-5 border rounded" style={{width:'500px'}}>
                    <h2 className="text-secondary my-3 text-center">Register with ShopStore</h2>
                    <div className="group my-3">
                        <label htmlFor="" className="label-control my-2 lead">Your email</label>
                        <input type="text" className="form-control " placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="group my-3">
                        <label htmlFor="" className="label-control my-2 lead">Your Name</label>
                        <input type="text" className="form-control " placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="group my-3">
                    <label htmlFor="" className="label-control my-2 lead">Your Pasword</label>
                        <div className="input-group">
                            <input type="password" className="form-control " placeholder='Password'/>
                            <button className="btn btn-outline-secondary" onClick={() => changePasswordText()}>{passwordState}</button>
                        </div>
                     </div>

                     <div className="group my-3">
                    <label htmlFor="" className="label-control my-2 lead">Confirm Pasword</label>
                        <div className="input-group">
                            <input type="password" className="form-control " placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)}/>
                            <button className="btn btn-outline-secondary" onClick={() => changePasswordText()}>{passwordState}</button>
                        </div>
                     </div>

                     <div className="group my-3">
                        <label htmlFor="" className="label-control my-2 lead">Your phone number</label>
                        <input type="text" className="form-control" placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>

                     {/* navigations */}
                     <div className="text-center my-4">
                        <Link onClick={() => Register()} className="btn btn-success btn-lg w-50 my-2">Register</Link> 
                        <h4 className="lead my-3">Already have an account with ShopStore<br />
                        <Link to={'/'} className='my-2'>back to login</Link></h4>
                     </div>
                </div>  
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Register