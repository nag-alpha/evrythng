import React from "react";
import "../Component-style/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>EVRYTHNG : {new Date().getFullYear()}</h1>
      </div>
    </>
  );
};

export default Footer;
