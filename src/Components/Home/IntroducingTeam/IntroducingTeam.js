import React from "react";
import about from "../../images/about.jpg";
import "./IntroducingTeam.css";
import signature from "../../../img/signature.png";

const IntroducingTeam = () => {
  return (
    <>
      <section className="team_introducing_sec">
        <div className="container">
          <div className="row align-items-center introducingTeam_wrapper">
            <div className="col-lg-5">
              <div className="doctor_img" data-aos="fade-up">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="introducing_team_info" data-aos="fade-up">
                <h3 className="pt-5 ">What is the purpose of healthcare?</h3>
                <p>
                  The fundamental purpose of health care is to enhance quality
                  of life by enhancing health. Commercial businesses focus on
                  creating financial profit to support their valuation and
                  remain viable. Health care must focus on creating social
                  profit to fulfill its promise to society.
                </p>
                <img src={signature} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroducingTeam;
