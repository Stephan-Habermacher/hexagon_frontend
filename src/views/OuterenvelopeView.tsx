import React from "react";
import Page from "../components/Page";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Datepicker from "../components/Datepicker";
import SupplierCard from "../components/SupplierCard";

function OuterenvelopeView() {
  return (
    <Page>
      <div className="w-full grid grid-cols-2 gap-6">
        <InputField label="Projektreferenz" placeholder="PFO HM 01/24.01" />
        <SelectField />
        <InputField label="Produkt" />
        <SelectField />
        <InputField label="Anzahl Sorten" />
        <InputField
          label="Preprint"
          placeholder="Druckdaten werden von uns geliefert"
        />
        <InputField />
        <SelectField />
        <InputField />
        <InputField label="Postprint" placeholder="abpalettieren" />
        <InputField label="Auflage Total" />
        <Datepicker />
        <SupplierCard />
        <SupplierCard />
        <SupplierCard />
        <SupplierCard />
      </div>
    </Page>
  );
}

export default OuterenvelopeView;
