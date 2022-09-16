import styled from "styled-components";

interface Props {
  className?: string;
  children?: string;
  href?: string;
}

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.75em;
  width: 100%;
  font-size: 1em;
  background-color: ${(props) => (props.color ? props.color : "#151515")};
  color: ${(props) => (props.color ? props.color : "#e5e5e5")};
`;

export const StyledCopy = styled.img`
  font-size: 1em;
  color: ${(props) => (props.color ? props.color : "#1056e1")};
`

