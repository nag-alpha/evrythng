import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Component-style/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link exact to="/">
            <h1>EVRYTHNG</h1>
          </Link>
        </div>
        <div className="navigation " id={burgerActive ? "activated" : ""}>
          <ul>
            <li onClick={() => setBurgerActive(!burgerActive)}>
              <NavLink to="/pdf">Edit PDF</NavLink>
            </li>
            <li onClick={() => setBurgerActive(!burgerActive)}>
              <NavLink to="/">Edit Image</NavLink>
            </li>
            <li onClick={() => setBurgerActive(!burgerActive)}>
              <NavLink to="/password_manager">Password manager</NavLink>
            </li>
          </ul>
        </div>
        <div className="burger" onClick={() => setBurgerActive(!burgerActive)}>
          {burgerActive ? (
            <ImCross size="35px" color="white" />
          ) : (
            <GiHamburgerMenu size="45px" color="black" />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
