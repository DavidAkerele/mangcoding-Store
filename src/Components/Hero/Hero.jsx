import React from "react";
import "./Hero.css"
const Hero = () => {
  return <div className="dayo">
      <div className="dayo-inside">
          <div className="hero-left">
            <div>
              <p><span className="purp">Let’s <span className="huge">Begin</span></span></p>
            </div>
            <div>
              <h1 className="hero-title">Let's Find The <br/>Right <span className="pur">Course</span> For <br/> you</h1>
            </div>
            <div className="lore">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br/> dignissim, sem non convallis molestie.</p>
            </div>
            <div className="hero-left-dwn">
                <div className="register">
                  <p>Register</p>
                </div>
                <div className="playvid">
                  <img src="/assets/play.svg" alt="play"/>
                  <p>Play Video</p>
                </div>
            </div>
          </div>
        <div className="hero-right">
          <img src="/assets/hero.svg" alt="hero"/>
        </div>
      </div>
  </div>;
};

export default Hero;
