import ElectronicCard from "../component/ProductsCard/ElectronicCard";
import data from "../data/product.json";
const Electronic = () => {
  return (
    <div>
      <ElectronicCard data={data} />
    </div>
  );
};

export default Electronic;
