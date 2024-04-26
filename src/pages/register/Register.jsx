import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div>
     <div className="register">
            <span className="register-title">Register</span>
            <form className="register-form">
                <label>Username</label>
                <input
                    className="register-input"
                    type="text"
                    placeholder="Enter your Username"
                />
                <label>Email</label>
                <input
                    className="register-input"
                    type="text"
                    placeholder="Enter your Email"
                />
                <label>Password</label>
                <input
                    className="register-input"
                    type="password"
                    placeholder="Enter your Password"
                />
                <button className="register-button">Register</button>
                <button className="register-login-button">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Register
