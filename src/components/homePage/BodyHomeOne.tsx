import React from "react";

import {
  StyledBody,
  StyledDiv,
  StyledH1,
  StyledH1Tit,
  StyledSpan,
  StyledButton,
  StyledTemplate,
  BlueLine,
  StyledServices,
  StyledH3,
  StyledWrapper,
  StyledSmallSpan,
  TextBlock,
  BlueBox,
  TextWrapper,
  Text,
  ImgTwo,
  BlueImgWrapper,
} from "./styleBody";
import template from "../../assets/template.jpg";

const BodyHomeOne: React.FC = () => {

  return (
    <>
      {/* <StyledBody> */}
      <StyledBody>
        {/* <StyledDiv> */}
        <StyledDiv>
          {/* <StyledH1> */}
          <StyledH1 id="home">
            WordPress
            <br />
            Solutions
            <br />
            {/* <StyledSpan> */}
            <StyledSpan>Delivered</StyledSpan>
          </StyledH1>
          <StyledButton>Get Started</StyledButton>
        </StyledDiv>
        {/* <StyledTemplate> */}
        <StyledTemplate src={template} />
      </StyledBody>

      {/* <BlueLine>*/}
      <BlueLine id="services">
        {/* <StyledWrapper>*/}
        <StyledWrapper>
          {/* <StyleServices>*/}
          <StyledServices>
            Porque escolher <br />
            nosso serviço?
          </StyledServices>
        </StyledWrapper>
        {/* <StyleServices>*/}
        <StyledServices>|</StyledServices>
        <StyledServices>|</StyledServices>
        {/* <StyledWrapper>*/}
        <StyledWrapper>
          {/* <StyledSmallSpan>*/}
          <StyledSmallSpan>
            In a professional context it often happens that private or corporate
            clients corder publication to made and presented
          </StyledSmallSpan>
        </StyledWrapper>
      </BlueLine>
      {/* </StrategyandConsulting> */}
      <StyledBody>
        <TextBlock>
          <StyledH3 color="#151515">
            ---- 01 <br />
            Strategy & <br />
            Consulting
          </StyledH3>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
        </TextBlock>
        <TextBlock>
          <StyledH3 color="#151515">
            ---- 02 <br />
            Strategy & <br />
            Consulting
          </StyledH3>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
        </TextBlock>
        <TextBlock>
          <StyledH3 color="#151515">
            ---- 03 <br />
            Strategy & <br />
            Consulting
          </StyledH3>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
        </TextBlock>
        <TextBlock>
          <StyledH3 color="#151515">
            ---- 04 <br />
            Strategy & <br />
            Consulting
          </StyledH3>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAA</StyledSmallSpan>
          <StyledSmallSpan color="#151515">AAAAAAA</StyledSmallSpan>
        </TextBlock>
      </StyledBody>

      {/* </BlueBox> */}
      <BlueImgWrapper id="aboutUs">
        <BlueBox>
          <StyledH1Tit color="#ffffff">
            About Us
          </StyledH1Tit>
          <TextWrapper>
            <Text>
              Lmmy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it
            </Text>
            <Text>
              Lmmy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. Has
              survived not only five centuries, but also the leap into
              electronic typese
            </Text>
            <Text>
              Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.t
              is a long
            </Text>
          </TextWrapper>
        </BlueBox>
        <ImgTwo src={template} />
      </BlueImgWrapper>
    </>
  );
};

export default BodyHomeOne;
