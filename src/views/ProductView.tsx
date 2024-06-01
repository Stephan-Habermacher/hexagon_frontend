import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Datepicker from "../components/Datepicker";
import SupplierCard from "../components/SupplierCard";
import OutputField from "../components/OutputField";
import { IOuterenvelope } from "../types";

function ProductView({
  product,
}: {
  product: "Versandcouvert" | "Anschreiben" | "Flyer" | "Karten";
}) {
  const [numberOfSorts, setNumberOfSorts] = useState(1);
  const [sortsNames, setSortsNames] = useState<string[]>(["Auflage Deutsch"]);
  const [outerenvelopes, setOuterenvelopes] = useState<IOuterenvelope[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:3000/outerenvelopes`);
      const data = await res.json();
      setOuterenvelopes(data);
    };
    fetchProduct();
  }, []);

  return (
    <Page>
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <OutputField label="Projektreferenz" />
          <OutputField label="Produkt" value={product} />
          <InputField
            label="Anzahl Sorten"
            value={numberOfSorts}
            onChange={(value) => {
              const newValue = Number(value);
              if (newValue >= 0) {
                setNumberOfSorts(newValue);
              } else {
                alert("Wert muss mindestens 1 betragen");
              }
            }}
          />
          {Array(numberOfSorts)
            .fill("")
            .map((_, i) => (
              <InputField
                onChangeTextArea={(value) =>
                  setSortsNames([
                    ...sortsNames.slice(0, i),
                    value,
                    ...sortsNames.slice(i, sortsNames.length),
                  ])
                }
                textarea={sortsNames[i] || ""}
                value={""}
                onChange={() => {}}
              />
            ))}
          <OutputField label="Auflage Total" />
        </div>

        <div>
          <SelectField
            label="Format"
            options={outerenvelopes.map((outerenvelope) => ({
              value: outerenvelope.id,
              label:
                outerenvelope.format +
                ", " +
                outerenvelope.windowposition +
                ", " +
                outerenvelope.windowsize +
                ", " +
                outerenvelope.closure,
            }))}
            onChange={(value) => setSelectedFormat(Number(value))}
            value={""}
          />
          <SelectField label="Papier" options={[]} />
          <OutputField label="Preprint" />
          <SelectField label="Print" options={[]} />
          <OutputField label="Postprint" />
          <Datepicker label="Lieferdatum" />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-6 mt-4">
        <SupplierCard />
      </div>
    </Page>
  );
}

export default ProductView;
