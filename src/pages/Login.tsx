import React from "react";

import LoginHeader from "../components/login/LoginHeader";
import LoginContainer from "../components/login/LoginContainer";
import Footer from "../components/footer/Footer";

const Login: React.FC = () => {
  return (
    <>
        <LoginHeader />
        <LoginContainer />
        <Footer />
    </>
  );
};

export default Login;
