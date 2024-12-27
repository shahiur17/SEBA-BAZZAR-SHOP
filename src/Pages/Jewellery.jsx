import JewelleryCard from "../component/ProductsCard/JewelleryCard";
import data from "../data/product.json";
const Jewellery = () => {
  return (
    <div>
      <JewelleryCard data={data} />
    </div>
  );
};

export default Jewellery;
