import React from "react";
import "./Available.css"
const Available = () => {
  return <div className="toppar">
    <div className="midpar">
      <div className="avaleft">
        <img src="/assets/ava1.svg" alt="avaaa"/>
        <img src="/assets/ava2.svg" alt="avaaa"/> 
        <img src="/assets/ava3.svg" alt="avaaa"/>
        <img src="/assets/ava4.svg" alt="avaaa"/>
      </div>
      <div className="avaright">
        <p className="title">AVAILABLE FOR YOU</p>
        <h1 className="head">Available Courses</h1>
        <p className="content">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Etiam dignissim, sem non <br/>convallis molestie.</p>
        <p className="hehe">See all</p>
      </div>
    </div>
  </div>;
};

export default Available;
