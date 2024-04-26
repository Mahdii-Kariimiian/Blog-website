import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Enter your Email"
                />
                <label>Password</label>
                <input
                    className="login-input"
                    type="password"
                    placeholder="Enter your Password"
                />
                <button className="login-button">Login</button>
                <button className="login-register-button">Register</button>
            </form>
        </div>
    );
};

export default Login;
