import React, { useState, useEffect } from 'react';
import './LoginRegister.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem('GinaEssentialsLogin'));
    if (loginStatus?.login === true) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    const users = JSON.parse(localStorage.getItem('GinaEssentials')) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('GinaEssentialsLogin', JSON.stringify({ login: true }));
      alert('Login successful');
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login-body">
          <div className="head">
            <h1>Login</h1>
            <hr />
          </div>

          <div className="login-form">
            <div className="input-groups">
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-groups">
              <div className="d-flex pass">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '300px' }}
                />
                <i
                  className={showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}
                  style={{ fontSize: '2.2rem', cursor: 'pointer' }}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            <div className="submit">
              <button className="btn" onClick={handleLogin}>
                Login
              </button>
            </div>

            <div className="refer text-danger">
              <h3>
                Don't have an account? <Link to="/register">Register</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
