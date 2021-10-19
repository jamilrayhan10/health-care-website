import React from "react";
import "./DoctorTeam.css";
import doctor1 from "../../images/doctors/doctor1.jpg";
import doctor2 from "../../images/doctors/doctor2.jpg";
import doctor3 from "../../images/doctors/doctor3.jpg";
import doctor4 from "../../images/doctors/doctor4.jpg";
import doctor5 from "../../images/doctors/doctor5.jpg";
import doctor6 from "../../images/doctors/doctor6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const DoctorTeam = () => {
  const doctorsData = [
    {
      id: 1,
      imgUrl: doctor1,
      name: "Dr. Sabilullah",
      title: "CEO/ Founder",
      fbIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faFacebookF} />{" "}
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
    {
      id: 2,
      imgUrl: doctor2,
      name: "Dr. Didarul Alom",
      title: "Pediatrician",
      fbIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faFacebookF} />{" "}
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
    {
      id: 3,
      imgUrl: doctor3,
      name: "Dr. Ersad Alom",
      title: "Laboratory",
      fbIcon: (
        <a href="/">
          <FontAwesomeIcon icon={faFacebookF} />{" "}
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
    {
      id: 4,
      imgUrl: doctor4,
      name: "Dr. Jamela Begum",
      title: "Emergency Physician",
      fbIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faFacebookF} />{" "}
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
    {
      id: 4,
      imgUrl: doctor5,
      name: "Dr. Kairunnesa",
      title: "Emergency Physician",
      fbIcon: (
        <a href="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
    {
      id: 4,
      imgUrl: doctor6,
      name: "Dr. Tasnim",
      title: "Emergency Physician",
      fbIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faFacebookF} />{" "}
        </a>
      ),
      linkedinIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
      ),
      twitterIcon: (
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
      ),
    },
  ];
  return (
    <>
      <section className="experience_doctors" data-aos="fade-up">
        <div className="container">
          <div className="sec_title">
            <h2>
              Our <span className="text-danger">Doctors Team</span>{" "}
            </h2>
          </div>
          <div className="row mt-5 pt-5">
            {doctorsData.map((doctor) => {
              return (
                <div key={doctor.id} className="col-lg-4">
                  <div className="doctor_details mb-3">
                    <img src={doctor.imgUrl} alt="" />
                    <div className="social_link">
                      <ul className="d-flex">
                        <li>
                          <i>{doctor.fbIcon}</i>
                        </li>
                        <li>
                          <i>{doctor.linkedinIcon}</i>
                        </li>
                        <li>
                          <i>{doctor.twitterIcon}</i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctor_info text-center">
                    <h3>{doctor.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorTeam;
