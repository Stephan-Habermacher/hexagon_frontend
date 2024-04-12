import React from "react";
import Title from "./Title";
import Button from "./Button";

function SupplierCard() {
  return (
    <div className="flex flex-col p-2 border-solid border-2 border-black rounded-md">
      <Title text="Lieferant 1" />
      <p>{`Die Kosten für ${"das Versandcouvert"} belaufen sich bei ${"Zurwerra"} auf:`}</p>
      <p className="flex justify-end text-red-500 ">{`Differenz zum günstigsten Lieferanten ${"360.00 "}CHF`}</p>
      <Button text="Bestellung erstellen" />
    </div>
  );
}

export default SupplierCard;
