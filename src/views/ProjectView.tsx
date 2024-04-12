import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Datepicker from "../components/Datepicker";
import SelectField from "../components/SelectField";
import Title from "../components/Title";
import Page from "../components/Page";

function ProjectView() {
  return (
    <Page>
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <Title text="Kunde" />
          <InputField placeholder="PFO" />
        </div>

        <div>
          <Title text="Projekt" />
          <InputField placeholder="HM 01/24.01" />
        </div>

        <div>
          <Title text="Sprachen" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
            <CheckboxField name="Deutsch" />
            <CheckboxField name="Französisch" />
            <CheckboxField name="Italienisch" />
          </div>
        </div>

        <div>
          <Title text="Auflagen" />
          <div className="flex flex-col">
            <InputField label="Auflage Deutsch" />
            <InputField label="Auflage Französisch" />
            <InputField label="Auflage Italienisch" />
            <InputField label="Auflage Total" />
          </div>
        </div>

        <div>
          <Title text="Package" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
            <CheckboxField name="Versandcouvert" />
            <CheckboxField name="Anschreiben" />
            <CheckboxField name="Flyer" />
            <CheckboxField name="Broschüre" />
            <CheckboxField name="Karten" />
          </div>
        </div>

        <div>
          <Title text="Auflieferdatum" />
          <Datepicker />
        </div>

        <div>
          <Title text="Versanddienstleister" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
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

        <div className="col-span-2 flex justify-center">
          <Button text="Projekt speichern" />
        </div>
      </div>
    </Page>
  );
}

export default ProjectView;
