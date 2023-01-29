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
              <NavLink to="/">Edit PDF</NavLink>
            </li>
            <li>
              <NavLink to="/image">Edit Image</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
