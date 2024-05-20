import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

function ProjectView() {
  const { id } = useParams();
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

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:3000/project/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProject(data);
        setInputValues(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            <CheckboxField
              name="Deutsch"
              checked={inputValues.languages.isGerman}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  languages: { ...inputValues.languages, isGerman: checked },
                });
              }}
            />
            <CheckboxField
              name="Französisch"
              checked={inputValues.languages.isFrench}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  languages: { ...inputValues.languages, isFrench: checked },
                });
              }}
            />
            <CheckboxField
              name="Italienisch"
              checked={inputValues.languages.isItalian}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  languages: { ...inputValues.languages, isItalian: checked },
                });
              }}
            />
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
            <CheckboxField
              name="Versandcouvert"
              checked={inputValues.package.isOuterenvelope}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  package: { ...inputValues.package, isOuterenvelope: checked },
                });
              }}
            />
            <CheckboxField
              name="Anschreiben"
              checked={inputValues.package.isLetter}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  package: { ...inputValues.package, isLetter: checked },
                });
              }}
            />
            <CheckboxField
              name="Flyer"
              checked={inputValues.package.isFlyer}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  package: { ...inputValues.package, isFlyer: checked },
                });
              }}
            />
            <CheckboxField
              name="Karten"
              checked={inputValues.package.isCards}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  package: { ...inputValues.package, isCards: checked },
                });
              }}
            />
          </div>
        </div>

        <div>
          <Title text="Auflieferdatum" />
          <Datepicker
            onChange={(e) => {
              setInputValues({
                ...inputValues,
                shippingDate: new Date(e.target.value).getTime(),
              });
            }}
            value={
              new Date(inputValues.shippingDate).toISOString().split("T")[0]
            }
          />
        </div>

        <div>
          <Title text="Versanddienstleister" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
            <CheckboxField
              name="Post"
              checked={inputValues.shippingProvider.isPost}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  shippingProvider: {
                    ...inputValues.shippingProvider,
                    isPost: checked,
                  },
                });
              }}
            />
            <CheckboxField
              name="Quickmail"
              checked={inputValues.shippingProvider.isQuickmail}
              onChange={(checked) => {
                setInputValues({
                  ...inputValues,
                  shippingProvider: {
                    ...inputValues.shippingProvider,
                    isQuickmail: checked,
                  },
                });
              }}
            />
          </div>
        </div>

        <div>
          <Title text="Lettershop" />
          <div>
            <SelectField
              onChange={(newVal) => {
                setInputValues({
                  ...inputValues,
                  lettershopId: String(newVal),
                });
              }}
              value={inputValues.lettershopId}
            />
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
