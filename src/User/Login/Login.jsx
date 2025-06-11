import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [passwordState, setPasswordState] = useState('see password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()
    const [error, setError] = useState('')
    const [failedLogin, setFailed] = useState(false)
    const [loggedIn, setLogin] = useState(false)

    const Users = localStorage.getItem('ShopStoreUsers')
    console.log(Users.length);

    // const Fruit = [{'name': 'apple'},{'name': 'orange'}, {'name': 'grape'}]
    // const findFruit = Fruit.some(fruit => fruit.name == 'orange')
    // if (findFruit) { console.log('fruit found successful');
    // } else {
    //     console.log('na na');
        
    // }
    

       const Login = () => {
           if(email, password) {
               const Users = localStorage.getItem('ShopStoreUsers') || []
               const findUser = Users.some(user => user.email == email && user.password == password)
               if(findUser) {
                alert('logged in sucessfully')
                setLogin(true)
                const logged = JSON.stringify(loggedIn)
                localStorage.setItem('userLogin', logged)
               Navigate('/home')
               } else {
                alert('incorrect user info')
                setError('incorrect user info')
                setFailed(true)
               }
           
           } else {
               alert('Please enter all fields')
           }

       }
       
    
    const changePasswordText = () =>{
        if(passwordState == 'see password') {
            setPasswordState('hide password')
        } else {
            setPasswordState('see password')
        }
    }
  return (
    <>
        {/* login */}
        <section>
            <div className="container">
                <div className="d-flex justify-content-around align-items-center" style={{height:'90vh'}}>
                   <div className="body p-5 border rounded" style={{width:'400px'}}>
                    <h2 className="text-secondary my-3">Login to ShopStore</h2>
                    <div className="group my-3">
                        <label htmlFor="" className="label-control my-2 lead">Your email</label>
                        <input type="text" className="form-control my-2" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="group my-3">
                    <label htmlFor="" className="label-control my-2 lead">Your Password</label>
                        <div className="input-group">
                            <input type="password" className="form-control " placeholder='Your Password' onChange={(e) => setPassword(e.target.value)}/>
                            <button className="btn btn-outline-secondary " onClick={() => changePasswordText()}>{passwordState}</button>
                        </div>
                     </div>

                     {failedLogin && (
                        <span className="text-danger">{error}</span> 
                    )}
                

                     {/* navigations */}
                     <div className="text-center my-4">
                        <button to="/home" className="btn btn-success btn-lg w-50 my-2">Login</button> 
                        <h4 className="lead my-3">You dont have an account with ShopStore yet <br />
                        <Link to={'/register'}  className='my-2'>Register here</Link></h4>
                     </div>
                </div>  
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Login