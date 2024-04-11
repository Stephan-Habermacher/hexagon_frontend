import React from "react";
import InputField from "../components/InputField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Button from "../components/Button";

const LoginView = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto flex justify-center">
        <div className="flex flex-col p-2 border-solid border-2 border-lime-500 rounded-md">
          <Title text="HEXAGON - Login" />
          <InputField text="E-Mail" />
          <InputField text="Passwort" isPassword />
          <Button text="Login" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginView;
