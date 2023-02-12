import React from "react";
import "./Wwd.css"
const Wwd = () => {
  return <div className="wedo">

    <div className="wwdone">
      <p className="title">WHAT WE GIVE</p>
      <h1 className="header">What do You <br/>Get From Us</h1>
      <p className="lorem">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Etiam dignissim, sem non <br/>convallis molestie.</p>
    </div>


    <div className="wwdtwo">
      <div className="sect">
      <div className = "sect-image"><img src="/assets/wwd1.svg" alt="one"/><br/></div>
        
        <h4>Professional Teacher</h4><br/>
        <h6>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Etiam dignissim, sem non <br/>convallis molestie.</h6>
      </div>
      <div className="sect">
      <div className = "sect-image"><img src="/assets/wwd2.svg" alt="two"/><br/></div>
        <h4>Course Certificate</h4><br/>
        <h6>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Etiam dignissim, sem non <br/>convallis molestie.</h6>
      </div>
      <div className="sect">
      <div className = "sect-image"><img src="/assets/wwd3.svg" alt="three"/><br/></div>
        <h4>Interesting learning</h4><br/>
        <h6>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Etiam dignissim, sem non <br/>convallis molestie.</h6>
      </div>
    </div>
  </div>;
};

export default Wwd;
