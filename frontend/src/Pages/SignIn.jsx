import React from "react";
import { NavLink } from "react-router-dom";
import "../Pages-Style/SignIn.css";

const SignIn = () => {
  return (
    <div className="sign_in">
      <form action="http://localhost:5000/password_manager">
        <label htmlFor="email">EMAIL : </label>
        <input type="text" name="email" />
        <label htmlFor="password">PASSWORD : </label>
        <input type="text" name="password" />
        <button type="submit">LOGIN</button>
      </form>
      <NavLink to="/sign_up" className="to_signup">
        <h1>New user ? Click on me to sign up</h1>
      </NavLink>
    </div>
  );
};

export default SignIn;
