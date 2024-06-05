import React from "react";
import InputField from "../components/InputField";
import Title from "../components/Title";
import Button from "../components/Button";
import Page from "../components/Page";

function LoginView() {
  return (
    <Page>
      <div className="flex flex-col items-center p-2 border-solid border-2 border-lime-500 rounded-md">
        <Title text="HEXAGON - Login" />
        <InputField label="E-Mail" placeholder="E-Mail" />
        <InputField label="Passwort" placeholder="Passwort" isPassword />
        <Button text="Login" />
      </div>
    </Page>
  );
}

export default LoginView;
