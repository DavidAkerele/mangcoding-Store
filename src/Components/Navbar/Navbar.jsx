import React from "react";
import './Navbar.css'
const Navbar = () => {
  return <div className="nav">
    <div className="nav-links">
      <div className="logo-sect">
        <img src="/assets/logo.svg" alt="logo"/>
        <p>mangcoding Store</p>
      </div>

     
        <ul className="toggle">
          <li><p className ="balck">Home</p></li>
          <li><p>Course</p></li>
          <li><p>About Us</p></li>
          <li><p>Article</p></li>
          <li><p>Contact</p></li>
        </ul>
   

      <div className="right">
        <div className="login">
          <p>Log in</p>
        </div>
        <div className="register">
          <p>Register</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
