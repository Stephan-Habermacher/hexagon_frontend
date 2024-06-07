//const postProductBody = {
//Anzahl Sorten
//Auflage Total
//Ausgewähltes Format
//Ausgewähltes Print

interface IPostProductBody {
  numberOfSorts: number;
  quantityTotal: number;
  format: string;
  print: string;
}

import { ISupplierCard, ProductTypes } from "../types";

async function postProductResults(
  product: ProductTypes,
  postProductBody: IPostProductBody
): Promise<ISupplierCard[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/pricelist${product}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postProductBody),
    }
  );
  const results = await response.json();
  return results;
}

export default postProductResults;
