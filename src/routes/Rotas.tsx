import React from "react";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import ProfileRec from "../pages/ProfileRec";
import ProfileCand from "../pages/ProfileCand";
import CadastroRec from "../pages/CadastroRec";
import CadastroUser from "../pages/CadastroUser";
import { Routes, Route } from "react-router-dom";
import TalentBank from "../pages/TalentBank";
import Favoritos from "../pages/Favoritos";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profileRec" element={<ProfileRec />} />
      <Route path="/profileCand" element={<ProfileCand />} />
      <Route path="/cadastroRecrutador" element={<CadastroRec />} />
      <Route path="/cadastroUsuario" element={<CadastroUser />} />
      <Route path="/talentBank" element={<TalentBank />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
};

export default Rotas;
