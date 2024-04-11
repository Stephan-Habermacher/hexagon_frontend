import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Header from "../components/Header";
import CheckboxField from "../components/CheckboxField";
import Footer from "../components/Footer";
import Datepicker from "../components/Datepicker";
import SelectField from "../components/SelectField";
import Title from "../components/Title";

function ProjectView() {
  return (
    <div className="h-screen flex flex-col align-center">
      <Header />
      <main className="max-w-screen-lg mx-auto grid grid-cols-2 gap-6">
        <div>
          <Title text="Kunde" />
          <InputField text="Kunde" />
        </div>

        <div>
          <Title text="Projekt" />
          <InputField text="Projekt" />
        </div>

        <div>
          <Title text="Sprachen" />
          <div className="flex flex-col border-solid border-2 border-black rounded-md">
            <CheckboxField name="Deutsch" />
            <CheckboxField name="Französisch" />
            <CheckboxField name="Italienisch" />
          </div>
        </div>

        <div>
          <Title text="Auflagen" />
          <div className="flex flex-col">
            <InputField text="Auflage Deutsch" />
            <InputField text="Auflage Französisch" />
            <InputField text="Auflage Italienisch" />
            <InputField text="Auflage Total" />
          </div>
        </div>

        <div>
          <Title text="Package" />
          <div className="flex flex-col border-solid border-2 border-black rounded-md">
            <CheckboxField name="Versandcouvert" />
            <CheckboxField name="Anschreiben" />
            <CheckboxField name="Flyer" />
            <CheckboxField name="Broschüre" />
            <CheckboxField name="Karten" />
          </div>
        </div>

        <div>
          <Title text="Auflieferdatum" />
          <div>
            <Datepicker />
          </div>
        </div>

        <div>
          <Title text="Versanddienstleister" />
          <div className="flex flex-col border-solid border-2 border-black rounded-md">
            <CheckboxField name="Post" />
            <CheckboxField name="Quickmail" />
          </div>
        </div>

        <div>
          <Title text="Lettershop" />
          <div>
            <SelectField />
          </div>
        </div>
      </main>
      <div className="flex justify-center">
        <Button text="Projekt speichern" />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectView;
