import styled from "styled-components";

interface Props {
  className?: string;
  children?: string;
  href?: string;
}

//LoginHeader

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 0.8rem;
  padding: 0 10rem;
`;

export const StyledLogo = styled.img`
  width: 6em;
  border: 1px solid;
  padding: 0.2em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    border-radius: 0.2em;
  }
`;

const Link: React.FC<Props> = ({ className, children, href }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export const StyledLink = styled(Link)`
  color: #151515;
  font-size: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

//LoginContainer

export const StyledMain = styled.main`
  display: flex;
  margin: 5em 0em 5em 0em;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  font-size: 2.3em;
  line-height: 3.5rem;
  color: ${(props) => (props.color ? props.color : "#151515")};
  text-align: center;
`;

export const StyledSpan = styled.span`
  font-size: 2.4em;
  color: ${(props) => (props.color ? props.color : "#1056e1")};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 0;
  width: 700px;
  height: 550px;
  border-radius: 1.25rem;
  background-color: ${(props) => (props.color ? props.color : "#1A2946;")};
`;

export const StyledH2 = styled.h2`
  font-size: 2em;
  padding-bottom: 4rem;
  color: ${(props) => (props.color ? props.color : "#e5e5e5")};
  text-align: center;
`;

export const StyledButton = styled.button`
  background-color: #1056e1;
  color: #e5e5e5;
  border: none;
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  width: 12.5rem;
  height: 3.12rem;
  font-size: 1.1em;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
    color: #1056e1;
  }
`;

