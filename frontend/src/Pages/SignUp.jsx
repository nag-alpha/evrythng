import React from "react";
import { NavLink } from "react-router-dom";

import "../Pages-Style/SignUp.css";

const SignUp = () => {
  return (
    <div className="sign_up">
      <form action="http://localhost:5000/password_manager/sign_up">
        <label htmlFor="email">EMAIL : </label>
        <input type="text" name="email" />
        <label htmlFor="password">PASSWORD : </label>
        <input type="text" name="password" />
        <button type="submit">SIGN UP</button>
      </form>
      <NavLink to="/password_manager" className="to_signin">
        <h1>Already registered ? Click here to sign in</h1>
      </NavLink>
    </div>
  );
};

export default SignUp;
