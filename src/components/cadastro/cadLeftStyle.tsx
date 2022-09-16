import styled from "styled-components";

export const BlackCard = styled.div`
  width: 41%;
  height: 100%;
  background-color: #151515;
`;

export const UserNameTitle = styled.h1`
  font-size: 4rem;
  color: #ffffff;
`;
export const Descricao = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
`;
export const IntrPag = styled.h2`
  font-size: 3rem;
  color: #ffffff;
`;

export const ColoredText = styled.span`
  color: #1056e1;
`;

export const NameWrapper = styled.div`
  margin: 2rem 1rem 0 4.5rem;
`;

export const DiscWrapper = styled.div`
  text-align: center;
  margin: 13rem 15% 0 15%;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

export const StyledButton = styled.button`
    background-color: #1056E1;
    color: #E5E5E5;
    border: none;
    border-radius: 0.5em;
    padding: 0.2em 0.5em;
    width: 190px;
    height: 50px;
    font-size: 1.1em;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #1a2946;
    }
`;
