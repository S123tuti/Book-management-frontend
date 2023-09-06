import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
   console.log(input)
  const SignUp = async (e) => {
    e.preventDefault();
    
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    result = await result.json();

    if (result.status === false) {
      alert(result.message);
    } else {
      localStorage.setItem("userId", JSON.stringify(result.data.userId));
      localStorage.setItem("token", JSON.stringify(result.data.token));
      console.log(result);
      navigate("/login");
    }
  };

  return (
    <div className="signup">
      <h1>SignUp</h1>

        <form className="signup-input">
          <input
            className="inp"
            required
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />

          <input
          className="inp"
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />

          <input
            className="inp"
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />

          <input
            className="inp"
            type="tel"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />

          <input
            className="inp"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
    
          <button className="btn" type="submit" onClick={SignUp}>
            SignUp
          </button>

          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </div>
  );
};

export default SignUp;
