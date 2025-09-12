import React, { useState, useEffect } from 'react'
import './LoginRegister.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState([])
    const [phoneNumber, setPhoneNumber] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const UserData = JSON.parse(localStorage.getItem('GinaEssentials')) || []
        setUserData(UserData)
    }, [])
    

    const Register = () => {
        console.log(email, password);
        
        if(email != '' && password != ''){
            const UserData = JSON.parse(localStorage.getItem('GinaEssentials')) || []
            const findEmail = UserData.find(e => e.email == email)

            if(findEmail){
                alert('email i already registered')
            } else {
                const newData = [
                    ...userData, {
                        id: userData.length + 1,
                        email : email,
                        password: password,
                        phoneNumber: phoneNumber
                    }
                ] 
                const Login = {
                    login: true
                }
                localStorage.setItem('GinaEssentialsLogin', JSON.stringify(Login))
                localStorage.setItem('GinaEssentials', JSON.stringify(newData))
                alert(`registered ${email} successfully`)
                navigate('/home')
            }
    
        } else{
            alert('fill all fields')
        }
    }

  return (
    <>
        <div className="register" >
            <div className="container">
                <div className="register-body">
                <div className="head">
                        <h1>Register</h1>
                    </div>

                    <div className="login-form">
                        <div className="input-groups">
                            {/* <label htmlFor="">Email</label> */}
                            <input type="email" className="form-control" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-groups">
                            {/* <label htmlFor="">Password</label> */}
                            <input type='password' className="form-control" placeholder='Password..' />
                        </div>

                        <div className="input-groups">
                            {/* <label htmlFor="">Confirm Password</label> */}
                                <input type='password' className="form-control" placeholder=' Confirm Password..' onChange={(e) => setPassword(e.target.value)}/>
                         </div>

                        <div className="input-groups">
                            {/* <label htmlFor="">Phone number</label> */}
                            <input type="text" className="form-control" placeholder=' Phone Number..' onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>

                        <div className="submit">
                            <button className="btn" onClick={() => Register()}>Register</button>
                        </div>

                        <div className="refer text-danger ">
                            <h3>Already have an account? <Link to="/" >Login</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register