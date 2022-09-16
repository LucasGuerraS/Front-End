import React from "react";
import Footer from "../components/footer/Footer";
import HeaderFavoritos from "../components/header/HeaderFavoritos";
import FavoritosDND from "../components/favoritos/FavoritosDND";

const Favoritos = () => {
  return (
    <>
      <HeaderFavoritos />
      <FavoritosDND />
      <Footer />
    </>
  );
};

export default Favoritos;
