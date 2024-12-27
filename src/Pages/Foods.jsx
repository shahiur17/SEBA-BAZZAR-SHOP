import FoodsCard from "../component/ProductsCard/FoodsCard";
import data from "../data/product.json";
const Foods = () => {
  return (
    <div>
      <FoodsCard data={data} />
    </div>
  );
};

export default Foods;
