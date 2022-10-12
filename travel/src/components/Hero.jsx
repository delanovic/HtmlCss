import React from "react";
import "./Hero.css"

const Hero = ({ imgSrc }) => {
    return (
        <div className="hero">
            <img src={imgSrc} className="hero__image" />
            <h1 className="hero__title">Travel made simple</h1>
        </div>
    );
};

export default Hero