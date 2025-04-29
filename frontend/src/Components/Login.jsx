import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [loginErr, setLoginErr] = useState(null);

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true);
                    navigate('/dashboard');
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => setLoginErr(err));
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Admin Login</h2>
                {error && <div className="login-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                        className="login-input"
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                {error && <p className="forgot-text">Forgot your password?</p>}
            </div>
        </div>
    );
};

export default Login;
