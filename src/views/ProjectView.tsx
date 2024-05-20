import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Datepicker from "../components/Datepicker";
import SelectField from "../components/SelectField";
import Title from "../components/Title";
import Page from "../components/Page";
import OutputField from "../components/OutputField";
import postProject from "../services/postProject";
import { IProjectInputs } from "../types";

function ProjectView() {
  const [inputValues, setInputValues] = useState<IProjectInputs>({
    customer: "",
    name: "",
    languages: { isGerman: false, isFrench: false, isItalian: false },
    quantities: { german: 0, french: 0, italian: 0 },
    package: {
      isOuterenvelope: false,
      isLetter: false,
      isFlyer: false,
      isBooklet: false,
      isCards: false,
    },
    lettershopId: "",
    shippingProvider: { isPost: false, isQuickmail: false },
    shippingDate: 0,
  });

  return (
    <Page>
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <Title text="Kunde" />
          <InputField
            placeholder="PFO"
            onChange={(newVal) => {
              setInputValues({ ...inputValues, customer: String(newVal) });
            }}
            value={inputValues.customer}
          />
        </div>

        <div>
          <Title text="Projekt" />
          <InputField
            placeholder="HM 01/24.01"
            onChange={(newVal) => {
              setInputValues({ ...inputValues, name: String(newVal) });
            }}
            value={inputValues.name}
          />
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
            <InputField
              label="Auflage Deutsch"
              onChange={(newVal) => {
                setInputValues({
                  ...inputValues,
                  quantities: {
                    ...inputValues.quantities,
                    german: Number(newVal),
                  },
                });
              }}
              value={inputValues.quantities.german}
            />
            <InputField
              label="Auflage Französisch"
              onChange={(newVal) => {
                setInputValues({
                  ...inputValues,
                  quantities: {
                    ...inputValues.quantities,
                    french: Number(newVal),
                  },
                });
              }}
              value={inputValues.quantities.french}
            />
            <InputField
              label="Auflage Italienisch"
              onChange={(newVal) => {
                setInputValues({
                  ...inputValues,
                  quantities: {
                    ...inputValues.quantities,
                    italian: Number(newVal),
                  },
                });
              }}
              value={inputValues.quantities.italian}
            />
            <OutputField
              label="Auflage Total"
              value={
                inputValues.quantities.german +
                inputValues.quantities.french +
                inputValues.quantities.italian
              }
            />
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
          <Datepicker
            onChange={(e) => console.log(new Date(e.target.value).getTime())}
          />
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
          <Button onClick={postProject} text="Projekt speichern" />
        </div>
      </div>
    </Page>
  );
}

export default ProjectView;
