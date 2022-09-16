import React from "react";
import {
  StyledHeader,
  StyledLogo,
  StyledLink,  
} from "./styleLogin";
import logo from "../../assets/placeholder.jpeg";
import { Link } from "react-router-dom";

const LoginHeader: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo src={logo} /> 
            <Link to="/">Home</Link>
        </StyledHeader>
    );
}

export default LoginHeader;