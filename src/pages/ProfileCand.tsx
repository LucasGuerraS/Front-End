import React from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import CandContent from "../components/profile/CandContent";
import Footer from "../components/footer/Footer";

const ProfileCand: React.FC = () => {
  return (
    <>
      <ProfileHeader/>
      <CandContent/>
      <Footer/>
    </>
  );
};

export default ProfileCand;
