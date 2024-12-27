import BookCards from "../component/ProductsCard/BookCards";
import data from "../data/product.json";
const Book = () => {
  return (
    <div>
      <BookCards data={data} />
    </div>
  );
};

export default Book;
