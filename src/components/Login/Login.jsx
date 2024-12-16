import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <div className="wrap-container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>

          <div className="third-pary-auth">
            <span>or continue with</span>
            <div className="auth-container">
              <div className="auth-btn">
                <img
                  width="30px"
                  height="30px"
                  src="https://img.icons8.com/color/40/google-logo.png"
                  alt="google-logo"
                />
              </div>
              <div className="auth-btn">
                <img
                  width="30px"
                  height="30px"
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="mac-os"
                />
              </div>
            </div>
          </div>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
