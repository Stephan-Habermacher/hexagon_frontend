import { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Datepicker from "../components/Datepicker";
import SelectField from "../components/SelectField";
import Title from "../components/Title";
import Page from "../components/Page";
import OutputField from "../components/OutputField";
import postProject from "../services/postProject";
import { ILettershop, IProjectInputs } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { BreadcrumbContext } from "../context/BreadcrumbContext";

function ProjectView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBreadcrumbname } = useContext(BreadcrumbContext);
  const [lettershops, setLettershops] = useState<ILettershop[]>([]);
  const [inputValues, setInputValues] = useState<IProjectInputs>({
    customer: "",
    name: "",
    languages: { isGerman: false, isFrench: false, isItalian: false },
    quantities: { german: 0, french: 0, italian: 0 },
    package: {
      isOuterenvelope: false,
      isLetter: false,
      isFlyer: false,
      isCards: false,
    },
    lettershopId: "",
    shippingProvider: { isPost: false, isQuickmail: false },
    shippingDate: "",
  });

  const lettershopsFetched = useRef(false);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/project/${id}`);
      const data = await res.json();
      setInputValues(data);
    };
    if (id !== undefined && lettershopsFetched.current) {
      fetchProject();
    }
  }, [id, lettershopsFetched.current]);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/lettershops`);
      const data = await res.json();
      setLettershops(data);
      lettershopsFetched.current = true;
    };
    fetchProject();
  }, []);

  useEffect(() => {
    setBreadcrumbname(inputValues.customer + " " + inputValues.name);
  }, [inputValues]);

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
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  languages: {
                    ...inputValues.languages,
                    isGerman: !inputValues.languages.isGerman,
                  },
                });
              }}
            />
            <CheckboxField
              name="Französisch"
              checked={inputValues.languages.isFrench}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  languages: {
                    ...inputValues.languages,
                    isFrench: !inputValues.languages.isFrench,
                  },
                });
              }}
            />
            <CheckboxField
              name="Italienisch"
              checked={inputValues.languages.isItalian}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  languages: {
                    ...inputValues.languages,
                    isItalian: !inputValues.languages.isItalian,
                  },
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
              disabled={!inputValues.languages.isGerman}
              useFormat
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
              disabled={!inputValues.languages.isFrench}
              useFormat
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
              disabled={!inputValues.languages.isItalian}
              useFormat
            />
            <OutputField
              label="Auflage Total"
              value={
                inputValues.quantities.german +
                inputValues.quantities.french +
                inputValues.quantities.italian
              }
              useFormat
            />
          </div>
        </div>

        <div>
          <Title text="Package" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
            <CheckboxField
              name="Versandcouvert"
              checked={inputValues.package.isOuterenvelope}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  package: {
                    ...inputValues.package,
                    isOuterenvelope: !inputValues.package.isOuterenvelope,
                  },
                });
              }}
            />
            <CheckboxField
              name="Anschreiben"
              checked={inputValues.package.isLetter}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  package: {
                    ...inputValues.package,
                    isLetter: !inputValues.package.isLetter,
                  },
                });
              }}
            />
            <CheckboxField
              name="Flyer"
              checked={inputValues.package.isFlyer}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  package: {
                    ...inputValues.package,
                    isFlyer: !inputValues.package.isFlyer,
                  },
                });
              }}
            />
            <CheckboxField
              name="Karten"
              checked={inputValues.package.isCards}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  package: {
                    ...inputValues.package,
                    isCards: !inputValues.package.isCards,
                  },
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
                shippingDate: e.target.value,
              });
            }}
            value={inputValues.shippingDate}
          />
        </div>

        <div>
          <Title text="Versanddienstleister" />
          <div className="flex flex-col w-52 p-2 border-solid border-2 border-black rounded-md">
            <CheckboxField
              name="Post"
              checked={inputValues.shippingProvider.isPost}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  shippingProvider: {
                    ...inputValues.shippingProvider,
                    isPost: !inputValues.shippingProvider.isPost,
                  },
                });
              }}
            />
            <CheckboxField
              name="Quickmail"
              checked={inputValues.shippingProvider.isQuickmail}
              onClick={() => {
                setInputValues({
                  ...inputValues,
                  shippingProvider: {
                    ...inputValues.shippingProvider,
                    isQuickmail: !inputValues.shippingProvider.isQuickmail,
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
              options={lettershops.map((lettershop) => ({
                value: lettershop.id,
                label: lettershop.lettershopName,
              }))}
              value={inputValues.lettershopId}
            />
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          {id === undefined ? (
            <Button onClick={postProject} text="Projekt speichern" />
          ) : (
            <div className="col-span-2 flex justify-center gap-8">
              {inputValues.package.isOuterenvelope && (
                <Button
                  onClick={() => navigate(`/projekt/${id}/versandcouvert`)}
                  text="Versandcouvert"
                />
              )}
              {inputValues.package.isLetter && (
                <Button
                  onClick={() => navigate(`/projekt/${id}/anschreiben`)}
                  text="Anschreiben"
                />
              )}
              {inputValues.package.isFlyer && (
                <Button
                  onClick={() => navigate(`/projekt/${id}/flyer`)}
                  text="Flyer"
                />
              )}
              {inputValues.package.isCards && (
                <Button
                  onClick={() => navigate(`/projekt/${id}/karten`)}
                  text="Karten"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default ProjectView;
