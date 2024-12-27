import PharmacyCard from "../component/ProductsCard/PharmacyCard";
import data from "../data/product.json";
const Pharmacy = () => {
  return (
    <div>
      <PharmacyCard data={data} />
    </div>
  );
};

export default Pharmacy;
