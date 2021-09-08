import React from "react";
import logo from "../../assets/imagens/Logo-Star-Wars.png"
import { LoginContainer } from "./index";
import { SignUpPage } from "./SignUpForm";

export const LoginPage = () => {

  return (
    <LoginContainer>
        <img src={logo}/>
        <SignUpPage/>
    </LoginContainer>
  );
}
