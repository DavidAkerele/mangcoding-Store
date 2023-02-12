import React from "react";
import "./Course.css"
const Course = () => {
  return <div className="body">
      <div className="parent">
        <div className="course-left">
          <img src="/assets/course.svg" alt="course"/>
        </div>
        <div className="course-right">
        <p className="rightone">SELECTED COURSE</p>
        <h1 className="righttwo">People Taking <br/> Courses</h1>
        <p className="rightthree">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Etiam dignissim, sem non convallis<br/> molestie.</p>
          <div>
            <div className="rightdwn">
              <div className="dwn">
                <p className="tett">6,000</p>
                <p className="rightthree">People Views</p>
              </div>
              <div className="dwn">
                <p className="tett">4,000</p>
                <p className="rightthree">User</p>
              </div>
              <div className="dwn">
                <p className="tett">100</p>
                <p className="rightthree">Course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
};

export default Course;
