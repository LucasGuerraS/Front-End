import React from "react";
import {
  StyledMain,
  StyledGrid,
  StyledGridItemOne,
  StyledGridItemTwo,
  StyledGridItemThree,
  StyledGridItemFour,
  StyledGridItemFive,
  StyledDiv,
  StyledTemplate,
  StyledBlackBox,
  StyledBlackDiv,
} from "./styleProfile";
import profilePhoto from "../../assets/suits.jpg";

const CandContent: React.FC = () => {
  return (
    <>
      <StyledMain>
        <StyledDiv>
          <StyledTemplate src={profilePhoto} />
          <StyledBlackBox>
            <StyledBlackDiv style={{ borderTop: "None" }}>
              Name: Lucas Guerra de Azevedo
            </StyledBlackDiv>
            <StyledBlackDiv>Job Role: Tech Recruiter</StyledBlackDiv>
            <StyledBlackDiv style={{ borderBottom: ".3rem solid #151515" }}>
              {" "}
              Consulting: Human Resources
            </StyledBlackDiv>
          </StyledBlackBox>
        </StyledDiv>

        <StyledGrid>
          <StyledGridItemOne>About me</StyledGridItemOne>
          <StyledGridItemTwo>1</StyledGridItemTwo>
          <StyledGridItemThree>2</StyledGridItemThree>
          <StyledGridItemFour>3</StyledGridItemFour>
          <StyledGridItemFive>4</StyledGridItemFive>
        </StyledGrid>
      </StyledMain>
    </>
  );
};

export default CandContent;
