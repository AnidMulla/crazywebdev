import React from "react";
import "./Banner.css";
import Chocolate_one from "../assets/Chocolate_one.jpg";

const Banner = () => {
  return (
    <div className="row banner-img">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
        <div className="main-headings">
          <div className="heading-top">
            <h1
              className="big-font-class"
              style={{
                marginBottom: "0px",
                marginTop: "1rem",
              }}
            >
              Bakery
            </h1>
            <hr
              style={{
                width: "70%",
                border: "none",
                borderTop: "5px dotted #000",
                margin: "20px 0",
              }}
            />
          </div>
          <div className="heading-bottom d-flex justify-content-center">
            <p className="heading-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              non iure et aliquam assumenda repellat doloremque libero,
            </p>
            <h2 className="big-font-class" style={{ width: "60%" }}>
              COOKIE
            </h2>
          </div>
          <div className="heading-end">
            <h2 className="big-font-class">CHOCOLATE</h2>
          </div>
          <div className="banner-testimonial d-flex">
            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="d-flex">
              <p className="testimonial-text" style={{ marginLeft: "10px" }}>
                <span>520+</span>
                <span>Happy Customers</span>
              </p>
              <p className="testimonial-text " style={{ marginLeft: "10px" }}>
                <span>|780+</span>
                <span>Recipes</span>
              </p>
            </div>
          </div>

          <button className="my-btn">Grab a bite</button>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <img
          src={Chocolate_one}
          alt="chocolate_img"
          className="right-section-img"
        />
        <div className="cookie-cards">
          <div className="main-card">
            <h4>Cookie 🍪 </h4>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
          <div className="cookie-card-one cookie-card">
            <div className="card-box"></div>
          </div>
          <div className="cookie-card-two cookie-card"></div>
          <div className="cookie-card-three cookie-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
