import React from "react";
import {
    StyledMain,
    StyledH1,
    StyledSpan,
    StyledDiv,
    StyledTemplate,
    StyledBlackBox,
    StyledBlackDiv,
} from "./styleProfile";
import profilePhoto from "../../assets/suits.jpg";

const RecContent: React.FC = () => {
    return (
      <>
        <StyledMain>
          <StyledH1>
            <StyledSpan>V</StyledSpan>ocê está<br/> visualizando<br/>o seu perfil de<br/>
            recrutador
            <br />
          </StyledH1>
          <StyledDiv>
                    <StyledTemplate src={profilePhoto} />
                    <StyledBlackBox>
                        <StyledBlackDiv style={{ borderTop: "None"} }>Name: Lucas Guerra de Azevedo</StyledBlackDiv>
                        <StyledBlackDiv>Job Role: Tech Recruiter</StyledBlackDiv>
                        <StyledBlackDiv style={{ borderBottom: ".3rem solid #151515"} }> Consulting: Human Resources
                        </StyledBlackDiv>
                    </StyledBlackBox>
          </StyledDiv>
        </StyledMain>
      </>
    );
  };
  
  export default RecContent;