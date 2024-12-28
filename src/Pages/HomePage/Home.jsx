import HomeCards from "../../component/HomeCard/HomeCards";
import HomeSalide from "../../component/Salides/HomeSalide";
import data from "../../data/product.json";

const Home = () => {
  return (
    <div className="home-page">
      <HomeSalide />
      <HomeCards data={data} />
    </div>
  );
};

export default Home;
