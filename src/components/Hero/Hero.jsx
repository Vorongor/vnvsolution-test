import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import style from "./Hero.module.css";
import heroPNG from "../../img/vnv.png";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  return (
    <div className={style.container}>
      <img src={heroPNG} alt="VNV Logo" className={style.img} />
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
        <h1 className={`${style.title} ${isVisible ? style.visible : ""}`}>
          <span className={style.span}> Easy, quality, IT</span>
          <span className={style.span}>- winning solutions</span>
          <span className={style.span}> for your business</span>
        </h1>
      </VisibilitySensor>
      <p className={style.text}>/ IT COMPANY</p>
      <a href="#contacts" type="button" className={style.btn}>
        Contact Us
      </a>
    </div>
  );
}
export default Hero;
