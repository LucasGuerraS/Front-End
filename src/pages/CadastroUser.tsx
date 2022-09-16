import React from "react";
import CadastroLeftUser from "../components/cadastro/CadastroLeftUser";
import CadastroUserRight from "../components/cadastro/cadastroUser/CadastroUserRight";
import Footer from "../components/footer/Footer";

const CadastroUser = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <CadastroLeftUser />
        <CadastroUserRight />
      </div>
      <Footer />
    </>
  );
};

export default CadastroUser;
