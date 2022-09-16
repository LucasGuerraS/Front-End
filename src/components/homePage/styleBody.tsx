import styled from "styled-components";

export const Fade = styled.div`
  background-image: linear-gradient(90deg, #27349364 0%, #ffffff95 100%);
  margin: 0px;
`;

export const StyledBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  min-height: 90%;
  width: 100%;
  padding-top: 10em;
  margin-bottom: 1em;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledH1 = styled.h1`
  font-size: 5em;
  line-height: 6rem;
  color: ${(props) => (props.color ? props.color : "#151515")};
  text-align: center;
`;

export const StyledSpan = styled.span`
  font-size: 1em;
  color: ${(props) => (props.color ? props.color : "#1056e1")};
`;

export const StyledButton = styled.button`

margin-top: 3.5em;
  margin-left: 7em;
  background-color: #1056e1;
  color: #e5e5e5;
  border: none;
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  width: 12.5rem;
  height: 3.12rem;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
    color: #1056e1;
  }
  &:active {
    transform: scale(0.92);
  }
`;

export const StyledTemplate = styled.img`
  width: 36em;
  height: 24em;
  border: 1px solid;
  border-radius: 0.8em;
  padding: 0.2em 0.1em;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    border-radius: 0.8em;
  }
`;

export const BlueLine = styled.div`
  background-color: #1a2946;
  width: 100%;
  height: 14em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25em;
`;

export const StyledServices = styled.h3`
  margin-top: 0.5em;
  font-size: 2.2em;
  text-align: justify;
  color: ${(props) => (props.color ? props.color : "#e5e5e5")};
  text-align: center;
`;

export const StyledH3 = styled.h3`
  margin-top: -9em;
  font-size: 1.5em;
  color: ${(props) => (props.color ? props.color : "#e5e5e5")};
  text-align: center;
`;

export const StyledWrapper = styled.div`
  width: 20em;
`;

export const StyledSmallSpan = styled.span`
  margin-top: 1em;
  color: ${(props) => (props.color ? props.color : "#e5e5e5")};
  font-size: 1em;
`;

export const TextBlock = styled.div`
  margin-top: 10em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 20em;
  height: 20em;
`;

export const BlueBox = styled.div`
  background-color: #1a2946;
  width: 50%;
  height: 71.6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 8em;
`;

export const StyledH1Tit = styled(StyledH1)`
  font-size: max(3.2vw, 1.2rem)
`;

export const TextWrapper = styled.div`
  width: 60%;
  margin-left: 8em;
  padding-left: 5em;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 1.2em;
  margin: 25px ;
  text-align: center;
`;

export const ImgTwo = styled(StyledTemplate)`
  width: 50%;
  height: 45em;
  margin-top: 8em;
  border-style: none;
  border-radius: 0px;
  padding: 0px;
  &:hover {
    border-style: none;
    border-radius: 0px;
  }
`;

export const BlueImgWrapper = styled.div`
  margin-top: -5em;
  display: flex;
  height: 20em;
`;
