import React from "react";
import {
  StyledAnchor,
  StyledHeader,
  StyledLogo,
  StyledButton,
  StyledLink,
  BlueLine,
} from "./styleHeader";
import logo from "../../assets/placeholder.jpeg";

const HeaderFavoritos: React.FC = () => {
  return (
    <StyledHeader>
      <BlueLine>
        <StyledLogo src={logo} />

        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Talent Bank</StyledLink>
        <StyledLink to="/">Profile</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
      </BlueLine>
    </StyledHeader>
  )
}

export default HeaderFavoritos