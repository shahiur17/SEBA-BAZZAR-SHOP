import FashionCards from "../component/ProductsCard/FashionCards";
import data from "../data/product.json";

const Fashion = () => {
  return (
    <div>
      <FashionCards data={data} />
    </div>
  );
};

export default Fashion;
