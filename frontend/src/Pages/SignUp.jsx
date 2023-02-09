import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../Pages-Style/SignUp.css";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    uname: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const navigate = useNavigate();

  const sub = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/sign_up", credentials);
      window.alert("Registration successful. Taking you to login page");
      navigate("/sign_in");
    } catch (err) {
      if (err.response.status === 400) {
        throw window.alert("Insufficient / Invalid input");
      } else if (err.response.status === 409) {
        throw window.alert("Username already present");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="sign_up">
      <form method="POST">
        <h1>R E G I S T E R</h1>
        <label htmlFor="uname">USERNAME : </label>
        <input
          type="text"
          name="uname"
          value={credentials.uname}
          onChange={handle}
        />
        <label htmlFor="password">PASSWORD : </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handle}
        />
        <button type="submit" onClick={sub}>
          SIGN UP
        </button>
      </form>
      <NavLink to="/sign_in" className="to_signin">
        <h1>Already registered ? Click here to sign in</h1>
      </NavLink>
    </div>
  );
};

export default SignUp;
