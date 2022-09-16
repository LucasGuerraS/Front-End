import React, { useState, useEffect} from "react";
import {
  StyledAnchor,
  StyledHeader,
  StyledLogo,
  StyledButton,
} from "./styleHeader";
import logo from "../../assets/placeholder.jpeg";
import { Link } from "react-router-dom";
import './Navbar.css';

const HeaderHome: React.FC = () => {

  const [button, setButton] = useState(true);
  const [header, setHeader] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => { showButton() }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [window.scrollY]);

  return (
    <StyledHeader className={header ? 'header active' : 'header'}>
      <StyledLogo src={logo} />
      
      <StyledAnchor className={header ? 'nav active' : 'nav'} href="#home">Home</StyledAnchor>
      <StyledAnchor  className={header ? 'nav active' : 'nav'} href="#services">Services</StyledAnchor>
      <StyledAnchor  className={header ? 'nav active' : 'nav'} href="#aboutUs">About</StyledAnchor>
      <StyledAnchor  className={header ? 'nav active' : 'nav'} href="#started">Get Started</StyledAnchor>
      <StyledAnchor  className={header ? 'nav active' : 'nav'} href="#contact">Contact Us</StyledAnchor>

      <Link to="/login">
        <StyledButton className={header ? 'button active' : 'button'}>Login</StyledButton>
      </Link>
    </StyledHeader>
  );
};

export default HeaderHome;
