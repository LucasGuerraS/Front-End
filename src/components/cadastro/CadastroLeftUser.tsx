import React from "react";
import {
  BlackCard,
  UserNameTitle,
  Descricao,
  IntrPag,
  ColoredText,
  NameWrapper,
  DiscWrapper,
  ButtonWrapper,
  StyledButton
} from "./cadLeftStyle";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const CadastroLeftUser = () => {
  return (
    <BlackCard>
      <NameWrapper>
        <UserNameTitle>Hello, user</UserNameTitle>
        <Descricao>
          Te esperamos ansiosamente no nosso banco de talentos
        </Descricao>
      </NameWrapper>
      <DiscWrapper>
        <IntrPag>
          <ColoredText>C</ColoredText>onclua seu cadastro e construa seu futuro
          conosco
        </IntrPag>
      </DiscWrapper>
      <ButtonWrapper>
        <Link to="/">
          <StyledButton>  <ArrowLeftIcon w={3} h={3} /> Back to Home</StyledButton>
        </Link>
      </ButtonWrapper>
    </BlackCard>
  );
};

export default CadastroLeftUser;
