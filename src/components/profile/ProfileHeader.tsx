import React from "react";

import { StyledHeader, StyledList, StyledLogo} from "./styleProfile";
import logo from "../../assets/placeholder.jpeg";
import { Link } from "react-router-dom";

const RecHeader: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledList>
        <Link to="/">Banco de talentos</Link>
        <Link to="/">Lista de favoritos</Link>
      </StyledList>
    </StyledHeader>
  );
};

export default RecHeader;
