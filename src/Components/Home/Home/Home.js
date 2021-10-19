import React from "react";
import ExperiencedDoctors from "../DoctorTeam/DoctorTeam";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroducingTeam from "../IntroducingTeam/IntroducingTeam";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <IntroducingTeam></IntroducingTeam>
      <Services></Services>
      <ExperiencedDoctors></ExperiencedDoctors>
    </>
  );
};

export default Home;
