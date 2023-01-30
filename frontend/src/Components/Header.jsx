import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Component-style/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link exact to="/">
            <h1>EVRYTHNG</h1>
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/pdf">Edit PDF</NavLink>
            </li>
            <li>
              <NavLink to="/">Edit Image</NavLink>
            </li>
            <li>
              <NavLink to="/password_manager">Password manager</NavLink>
            </li>
          </ul>
        </div>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
