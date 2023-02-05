import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../Pages-Style/SignUp.css";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(value);

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign_up">
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
        <button type="submit">SIGN UP</button>
      </form>
      <NavLink to="/password_manager" className="to_signin">
        <h1>Already registered ? Click here to sign in</h1>
      </NavLink>
    </div>
  );
};

export default SignUp;
