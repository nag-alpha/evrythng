import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../Pages-Style/SignIn.css";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    uname: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };
  const sub = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/password_manager", credentials);
      window.alert("Success. Logging you in");
    } catch (err) {
      if (err.response.status === 400) {
        throw window.alert("Insufficient details");
      } else if (err.response.status === 409) {
        throw window.alert("Invalid credentials");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div className="sign_in">
      <form method="POST">
        <h1>L O G I N</h1>
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
          LOGIN
        </button>
      </form>
      <NavLink to="/sign_up" className="to_signup">
        <h1>New user ? Click on me to sign up</h1>
      </NavLink>
    </div>
  );
};

export default SignIn;
