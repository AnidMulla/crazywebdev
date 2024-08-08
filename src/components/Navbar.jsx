import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="row justify-content-around align-items-center nav-div">
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
          <span className="logo-span">Logo</span>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
          <ul className="d-flex justify-content-around ul-styled">
            <li className="active-nav">Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
          <button className="my-btn">SHOP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
