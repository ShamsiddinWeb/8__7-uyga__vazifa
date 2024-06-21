import React from "react";
import "./Hero.css";
import hero__img from "../../assets/hero__img.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <div className="hero__card">
            <h1 className="hero__title">
              Mobile <br />
              <span>Backcover</span><br />
              <b>Tempered Glass</b>
            </h1>
            <button className="hero__btn">Shop all !</button>
          </div>
          <img className="hero__img" src={hero__img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
