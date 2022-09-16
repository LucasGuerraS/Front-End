import { Link } from "react-router-dom";
import styled from "styled-components";

//TODO FIX HEADER FADE
interface Props {
  className?: string;
  children?: string;
  href?: string;
}

export const StyledHeader = styled.div`
  width: 100%;
  margin-top: 0;
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 6em;
  border: 1px solid;
  padding: 0.2em 0.1em;
  margin-left: 10rem;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    border-radius: 0.2em;
  }
`;

const Anchor: React.FC<Props> = ({ className, children, href }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export const StyledAnchor = styled(Anchor)`
  color: #151515;
  font-size: max(1vw, .9rem);
  text-decoration: none;
  cursor: pointer;
  padding: 0 5.3rem;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  background-color: #1056e1;
  color: #e5e5e5;
  border: none;
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  width: 180px;
  height: 40px;
  font-size: max(1vw, 1rem);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #1A2946;
  }
  &:active {
    transform: scale(0.92);
  }
`;

export const StyledLink = styled(Link)`
  color: #E5E5E5;
  font-size: 1.2em;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #1056E1;
    text-decoration: underline;
  }
`;

export const BlueLine = styled.div`
  background-color: #1A2946;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
`