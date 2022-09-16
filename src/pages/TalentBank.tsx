import React from "react";
import Footer from "../components/footer/Footer";
import HeaderTalentBank from "../components/header/HeaderTalentBank";
import FiltrosBank from "../components/talentBank/FiltrosBank";
import SearchUser from "../components/talentBank/SearchUser";

const TalentBank = () => {
  return (
    <>
      <HeaderTalentBank />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FiltrosBank />
        <SearchUser />
      </div>
      <Footer />
    </>
  );
};

export default TalentBank;
