import PhoneCards from "../component/ProductsCard/PhoneCards";
import data from "../data/product.json";
const Phones = () => {
  return (
    <div>
      <PhoneCards data={data} />
    </div>
  );
};

export default Phones;
