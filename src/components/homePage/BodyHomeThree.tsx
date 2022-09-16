import {
  TitleH1,
  Infos,
  ListInfo,
  Icons,
  ImgWrapper,
  ConentWrapperT,
} from "./styleBodyThree";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.jpeg";

const BodyHomeThree = () => {
  return (
    <>

      <ConentWrapperT>
        <TitleH1 id="contact">Contact Us</TitleH1>
        <Infos>
          <ListInfo>
            Rua Fidêncio Ramos 308 - 7th floor - Torre A - Vila Olímpia,
            04551-902
          </ListInfo>
          <ListInfo>readyjobs@fiap.com.br</ListInfo>
          <ListInfo>Tel: (11) 3456-7890</ListInfo>
        </Infos>
        <ImgWrapper>
          <Icons src={linkedin} />
          <Icons src={github} />
        </ImgWrapper>
      </ConentWrapperT>
    </>
  );
};

export default BodyHomeThree;
