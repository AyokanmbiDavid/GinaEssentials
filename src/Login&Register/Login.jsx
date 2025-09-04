import React, {useState, useEffect, Suspense} from 'react'
import './LoginRegister.css'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [Ispassword, setIsPassword] = useState(true)
      const [loginInfo, setLoginInfo] = useState()
      const navigate = useNavigate()

      useEffect(() => {
        const LoginInfo = JSON.parse(localStorage.getItem('GinaEssentialsLogin'))
        setLoginInfo(LoginInfo.login)
      }, [])

      useEffect(() => {
        
        if(loginInfo == 'true' || loginInfo == true){
            navigate('/')
        }
      }, [loginInfo])
      
      

      const loginLogic  = () => {
          if(email != '' && password != ''){
            const userData = JSON.parse(localStorage.getItem('GinaEssentials'))
            const findEmail = userData.find(e => e.email == email && e.password == password )
            
            if(findEmail){
                const Login = {
                    login: true
                }
                setLoginInfo('true')
                localStorage.setItem('GinaEssentialsLogin', JSON.stringify(Login))
                alert('login sucessful')
               

            } else{
                alert('email not found')
            }
          }
           else{
            alert('please fill all field')
           }
      }     
      

  return (
    <>
        <div className="login">
            <div className="container">
               <Suspense>
               <div className="login-body">
                    <div className="head">
                        <h1>Login</h1>
                        <hr />
                    </div>

                    <div className="login-form">
                        <div className="input-groups">
                            {/* <label htmlFor="">Email</label> */}
                            <input type="email" className="form-control" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-groups">
                            {/* <label htmlFor="">Password</label> */}
                            <div className="d-flex pass">
                            <input type={Ispassword ? 'password': 'text'} className="form-control" placeholder='Password..' style={{width: '300px'}} onChange={(e) => setPassword(e.target.value)}/>
                            <i className={Ispassword ? 'bi bi-eye-slash' : 'bi bi-eye'} style={{fontSize: '2.2rem'}} onClick={() => setIsPassword(!Ispassword)}></i>
                            </div>
                        </div>

                        <div className="submit">
                            <Link  className="btn" onClick={() => loginLogic()}>Login</Link>
                        </div>

                        <div className="refer text-danger ">
                            <h3>Dont have an account? <Link to={'/register'}>Register</Link></h3>
                        </div>
                    </div>
                </div>
               </Suspense>
            </div>
        </div>
    </>
  )
}

export default Login