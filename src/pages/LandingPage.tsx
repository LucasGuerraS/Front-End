import React from "react";
import HeaderHome from "../components/header/HeaderHome";
import { Fade } from "../components/homePage/styleBody";
import BodyHome from "../components/homePage/BodyHome";
import Footer from "../components/footer/Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Fade>
        <HeaderHome />
        <BodyHome />
      </Fade>
      <Footer />
    </div>
  );
};

export default LandingPage;
