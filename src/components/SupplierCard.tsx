import Title from "./Title";
import Button from "./Button";

function SupplierCard({
  product,
  name,
  price,
  cheapestprice,
}: {
  product: string;
  name: string;
  price: number;
  cheapestprice: number;
}) {
  const priceDifference = (price / cheapestprice - 1) * 100;
  return (
    <div className="flex flex-col p-2 border-solid border-2 border-black rounded-md justify-between">
      <Title text={name} />
      <p>{`Die Kosten für ${product} belaufen sich bei ${name} auf: ${(
        (Math.ceil(price / 5) * 5) /
        100
      ).toFixed(2)} CHF`}</p>
      {priceDifference > 0 && (
        <p className="flex justify-end text-red-500 ">{`Differenz zum günstigsten Lieferanten ${priceDifference.toFixed(
          2
        )}%`}</p>
      )}
      <Button text="Bestellung erstellen" />
    </div>
  );
}

export default SupplierCard;
