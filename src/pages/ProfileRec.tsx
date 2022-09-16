import React from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import RecContent from "../components/profile/RecContent";
import Footer from "../components/footer/Footer";

const ProfileRec: React.FC = () => {
  return (
    <>
      <ProfileHeader/>
      <RecContent/>
      <Footer/>
    </>
  );
};

export default ProfileRec;
