import "./home.css";
import React from "react";
// import video from "https://sites.ey.com/:v:/r/sites/AutomateTest/SiteAssets/doc_test.mp4?csf=1&web=1&e=ecDIgl";
import reportsBgImg from "../../img/reports-bg.jpg";

function ReportsHome() {
  return (
    <>
      {/*===============| Reports Home Section |==================*/}
      <div>
        <div className="reports-bg-img image-fluid">
          <img src={reportsBgImg} alt="img not found" />
          <div className="mask"></div>
        </div>
        <div className="reports-heading-section">
          <h2 className="reports-glint-heading">
            Global Law Innovation and Technology
          </h2>
          <div className="under-line"></div>
          <h3 className="main-heading">Reports</h3>
          <h3 className="sub-heading">FY23</h3>
          <p className="sub-heading-para container">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            quam eius error molestiae est ad quidem expedita labore ut neque
            repudiandae, a sed totam non velit dlor Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni rem haut velit neque?
          </p>
        </div>
        <div className="reports-circle-section p-4 image-fluid">
          <div className="circlefirst">
            <h5>placeholder</h5>
          </div>

          <div className="circle">
            <h5>placeholder</h5>
          </div>
          <div className="circle">
            <h5>placeholder</h5>
          </div>
          <div className="circle">
            <h5>placeholder</h5>
          </div>
          <div className="circlelast">
            <h5>placeholder</h5>
          </div>
        </div>
      </div>
      {/*===============| Reports Home Section Ends |==================*/}
      <div>
        {/* <video
          src="https://sites.ey.com/sites/AutomateTest/VideoHubv2/Doc.mp4"
          controls
        /> */}
      </div>
    </>
  );
}

export default ReportsHome;
