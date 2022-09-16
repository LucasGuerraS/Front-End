import styled from "styled-components";

/*Styles for the second part of the body component*/

export const BodyTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30em;
`;

export const BlackBox = styled.div`
  background-color: #202020;
  width: 500px;
  height: 700px;
  margin: 0em 0px 20px 60%;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-color: #1056e1;
  border-width: 2px;
`;

export const SelectButton: any = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#343837")};
  color: #e5e5e5;
  border-radius: 10px 10px 0px 0px;
  font-size: max(1.2rem, 1.3vw);
  height: 3.75rem;
  width: 15.6rem;
  border-color: #1056e1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: 60%;
`;

export const FormWrapper = styled.div`
  margin-top: 10em;
`;

export const FormTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  font-size: max(1.1rem, 1.1vw);
`;

export const FormIntro = styled.h1`
  position: absolute;
  width: 40%;
  margin-top: 5em;
  margin-left: 100px;
  font-size: max(1rem, 2.3vw);
  text-align: center;
  font-weight: 100;
  background: -webkit-linear-gradient(#151515, #151515, #1056e1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextTwo = styled(FormIntro)`
  margin-top: 40rem;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;
