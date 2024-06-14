import React from "react";
import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <div>
      <img className="p-4" src={hero} alt="Hero Image" />
    </div>
  );
};

export default Hero;
