import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Pages-Style/SignIn.css";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign_in">
      <form method="POST">
        <label htmlFor="email">EMAIL : </label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handle}
        />
        <label htmlFor="password">PASSWORD : </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handle}
        />
        <button type="submit">LOGIN</button>
      </form>
      <NavLink to="/sign_up" className="to_signup">
        <h1>New user ? Click on me to sign up</h1>
      </NavLink>
    </div>
  );
};

export default SignIn;
