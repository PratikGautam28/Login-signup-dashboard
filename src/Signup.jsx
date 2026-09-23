
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Account created");
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Create account</h1>

        <p className="subtitle">
          Create your account to get started
        </p>

        <form className="form" onSubmit={handleSubmit}>

          <label className="label">Name</label>

          <input
            className="input1"
            type="text"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">Email</label>

          <input
            className="input1"
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>

          <div className="password-box">

            <input
              className="input2"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <label className="label">Confirm Password</label>

          <div className="password-box">

            <input
              className="input2"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <button className="btn" type="submit">
            Create Account
          </button>

        </form>

        <p className="signup">
          Already have an account?
          <span onClick={() => navigate("/")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
};

export default Signup;
