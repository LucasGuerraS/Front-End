import React from "react";
import {
  StyledMain,
  StyledH1,
  StyledSpan,
  StyledDiv,
  StyledH2,
} from "./styleLogin";
import LoginForm from "./LoginForm"

const LoginContainer: React.FC = () => {
  return (
    <>
      <StyledMain>
        <StyledH1>
          <StyledSpan>C</StyledSpan>oloque suas<br/> informações para entrar<br/> em sua
          conta
          <br />
          Te esperamos <br/>ansiosamente<StyledSpan>!</StyledSpan>
        </StyledH1>
        <StyledDiv>
          <StyledH2>Login</StyledH2>
          <LoginForm />
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default LoginContainer;
