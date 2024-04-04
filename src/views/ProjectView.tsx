import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Header from "../components/Header";
import CheckboxField from "../components/CheckboxField";
import Footer from "../components/Footer";
import Datepicker from "../components/Datepicker";

function ProjectView() {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between">
          <InputField text="Kunde" />
          <InputField text="Projekt" />
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col border-solid border-2 border-black rounded-md">
            <CheckboxField name="Deutsch" />
            <CheckboxField name="Französisch" />
            <CheckboxField name="Italienisch" />
          </div>
          <div className="flex flex-col">
            <InputField text="Auflage Deutsch" />
            <InputField text="Auflage Französisch" />
            <InputField text="Auflage Italienisch" />
            <InputField text="Auflage Total" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col border-solid border-2 border-black rounded-md">
            <CheckboxField name="Versandcouvert" />
            <CheckboxField name="Anschreiben" />
            <CheckboxField name="Flyer" />
            <CheckboxField name="Broschüre" />
            <CheckboxField name="Karten" />
          </div>
          <div>
            <Datepicker />
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 border-black rounded-md">
          <CheckboxField name="Post" />
          <CheckboxField name="Quickmail" />
        </div>
        <div className="flex justify-center">
          <Button text="Projekt speichern" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectView;