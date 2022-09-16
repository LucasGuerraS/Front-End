import React, { useState } from "react";
import {
  BodyTwoContainer,
  BlackBox,
  SelectButton,
  ButtonWrapper,
  FormTitle,
  FormIntro,
  TextTwo,
  FormWrapper,
} from "./styleBodyTwo";
import RecruiterForm from "./RecruiterForm";
import CandidatoForm from "./CandidatoForm";

/*Second Part of the body which contains the forms*/

let activeStyle = {borderWidth: "3px"}
let inactiveStyle = {borderWidth: "0px"}

const BodyHomeTwo: React.FC = () => {
  const [cadastro, setCadastro] = useState(true);
  const [pessoa, setPessoa] = useState("Candidato");
  const [cor1, setCor1] = useState("darkblue");
  const [cor2, setCor2] = useState("black");
  const [estilo1, setEstilo1] = useState(inactiveStyle)
  const [estilo2, setEstilo2] = useState(activeStyle)
  const MudaCandidato = () => {
    setCadastro(true);
    setPessoa("Candidato");
    setCor2("black");
    setCor1("#1056e1");
    setEstilo1(inactiveStyle)
    setEstilo2(activeStyle)
  };

  const MudaRecrutador = () => {
    setCadastro(false);
    setPessoa("Recrutador");
    setCor2("#151515");
    setCor1("darkblue");
    setEstilo1(activeStyle)
    setEstilo2(inactiveStyle)
  };
  return (
    <>
      <BodyTwoContainer id="started">
        <FormIntro>Cadastre-se para fazer uso de nossa plataforma.</FormIntro>
        <TextTwo>Esperamos por você do nosso lado!</TextTwo>
        <FormWrapper>
          <ButtonWrapper>
            <SelectButton color={cor1} onClick={MudaRecrutador} style={estilo1}>
              IBM
            </SelectButton>
            <SelectButton color={cor2} onClick={MudaCandidato} style={estilo2}>
              Candidato
            </SelectButton>
          </ButtonWrapper>
          <BlackBox>
            <FormTitle>Cadastro de {`${pessoa}`}</FormTitle>
            {cadastro ? <CandidatoForm /> : <RecruiterForm />}
          </BlackBox>
        </FormWrapper>
      </BodyTwoContainer>
    </>
  );
};

export default BodyHomeTwo;