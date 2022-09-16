import React from "react";
import CadastroLeftRec from "../components/cadastro/CadastroLeftRec";
import CadastroRecRight from "../components/cadastro/cadastroRec/CadastroRecRight";
import Footer from "../components/footer/Footer";

const CadastroRec = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <CadastroLeftRec />
        <CadastroRecRight />
      </div>
      <Footer />
    </>
  );
};

export default CadastroRec;