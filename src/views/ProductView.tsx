import { useContext, useEffect, useRef, useState } from "react";
import Page from "../components/Page";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Datepicker from "../components/Datepicker";
import SupplierCard from "../components/SupplierCard";
import OutputField from "../components/OutputField";
import { IOuterenvelope, ISupplierCard, ProductTypes } from "../types/types";
import { BreadcrumbContext } from "../context/BreadcrumbContext";
import Button from "../components/Button";
import postProductResults from "../services/postProductResults";

function ProductView({ product }: { product: ProductTypes }) {
  const [numberOfSorts, setNumberOfSorts] = useState(1);
  const [sortsNames, setSortsNames] = useState<string[]>(["Auflage Deutsch"]);
  const [sortsQuantities, setSortsQuantities] = useState<number[]>([]);
  const [outerenvelopes, setOuterenvelopes] = useState<IOuterenvelope[]>([]);
  const [prints, setPrints] = useState<string[]>([]);
  const [selctedPrints, setSelctedPrints] = useState<string>("");
  const [selectedOuterenvelope, setSelectedOuterenvelope] =
    useState<IOuterenvelope>();
  const { breadcrumbname } = useContext(BreadcrumbContext);
  const printsFetched = useRef(false);
  const [suppliers, setSuppliers] = useState<ISupplierCard[]>([]);

  useEffect(() => {
    const fetchPrints = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/pricelist${product}`
      );
      const data = await res.json();
      setPrints(data);
      console.log(data);
      printsFetched.current = true;
    };
    fetchPrints();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      if (printsFetched.current) {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/outerenvelopes`
        );
        const data = await res.json();
        setOuterenvelopes(data);
      }
    };
    fetchProduct();
  }, [printsFetched.current]);

  const calculateTotalQuantity = () => {
    return sortsQuantities.reduce((acc, quantity) => acc + quantity, 0);
  };

  return (
    <Page>
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <OutputField label="Projektreferenz" value={breadcrumbname} />
          <OutputField
            label="Produkt"
            value={
              Object.keys(ProductTypes)[
                Object.values(ProductTypes).indexOf(product)
              ]
            }
          />
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
                value={sortsQuantities[i] || 0}
                onChange={(value) => {
                  const newValue = Number(value);
                  if (newValue >= 0) {
                    setSortsQuantities((prev) => [
                      ...prev.slice(0, i),
                      newValue,
                      ...prev.slice(i + 1),
                    ]);
                  } else {
                    alert("Wert muss mindestens 1 betragen");
                  }
                }}
                useFormat
              />
            ))}
          <OutputField
            label="Auflage Total"
            value={calculateTotalQuantity()}
            useFormat
          />
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
            onChange={(e) =>
              setSelectedOuterenvelope(
                outerenvelopes.find((outerenvelope) => {
                  return outerenvelope.id === e.target.value;
                })
              )
            }
            value={selectedOuterenvelope?.id || ""}
          />
          <OutputField
            label="Papier"
            value={
              selectedOuterenvelope
                ? selectedOuterenvelope?.paperweight +
                  ", " +
                  selectedOuterenvelope?.paper +
                  ", " +
                  selectedOuterenvelope?.paperlabel
                : ""
            }
          />
          <OutputField
            label="Preprint"
            value={selectedOuterenvelope?.preprint || ""}
          />
          <SelectField
            label="Print"
            options={prints.map((print) => ({
              value: print,
              label: print,
            }))}
            value={selctedPrints}
            onChange={(e) => {
              setSelctedPrints(e.target.value);
            }}
          />
          <OutputField
            label="Postprint"
            value={selectedOuterenvelope?.postprint || ""}
          />
          <Datepicker
            label="Lieferdatum"
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            value={""}
          />
        </div>
      </div>
      <div className="col-span-2 flex justify-center">
        <Button
          onClick={async () => {
            if (selectedOuterenvelope) {
              const results = await postProductResults(product, {
                numberOfSorts,
                quantityTotal: calculateTotalQuantity(),
                format: selectedOuterenvelope.id,
                print: selctedPrints,
              });
              setSuppliers(results.sort((a, b) => a.price - b.price));
            }
          }}
          text="Preise berechnen"
          disabled={calculateTotalQuantity() < 1}
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-6 mt-4">
        {suppliers.map((supplier) => (
          <SupplierCard
            product={
              Object.keys(ProductTypes)[
                Object.values(ProductTypes).indexOf(product)
              ]
            }
            name={supplier.name}
            price={supplier.price}
            cheapestprice={suppliers[0].price}
          />
        ))}
      </div>
    </Page>
  );
}

export default ProductView;
