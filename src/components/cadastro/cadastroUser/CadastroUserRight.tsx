import React from "react";
import {
  FormBox,
  StepsWrapper,
  FormWrapper,
  InsideBoxWrapper,
  FormTitle,
} from "./cadastroUserStyle";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Step01, Step02, Step03, Step04 } from "./cadastroUserForms/formIndex";

const CadastroUserRight = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const steps = [1, 2, 3, 4];

  const handleStep = () => {
    switch (activeStep) {
      case 0:
        return <Step01 changeStep={nextStep} />;
      case 1:
        return <Step02 changeStep={nextStep} />;
      case 2:
        return <Step03 changeStep={nextStep} />;
      case 3:
        return <Step04 changeStep={nextStep} />;
    }
  };
  return (
    <FormWrapper>
      <FormBox>
        <InsideBoxWrapper>
          <Steps activeStep={activeStep}>
            {steps.map((item) => (
              <Step key={item} label={`Step ${item}`}>
                <StepsWrapper>{handleStep()}</StepsWrapper>
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <StepsWrapper>
              <FormTitle>
                Cadastro Feito com sucesso! Você será redirecionado para a sua
                página de perfil em breve!
              </FormTitle>
            </StepsWrapper>
          ) : null}
        </InsideBoxWrapper>
      </FormBox>
    </FormWrapper>
  );
};

export default CadastroUserRight;
