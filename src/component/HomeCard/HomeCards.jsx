import { Link } from "react-router-dom";

const HomeCards = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);

  const topFashion = getSafeData(data?.["Fashion"]).slice(0, 5);
  const topPhone = getSafeData(data?.["Phone"]).slice(0, 5);
  const topPharmacy = getSafeData(data?.["Pharmacy"]).slice(0, 5);
  const topBook = getSafeData(data?.["Book"]).slice(0, 5);
  const TopJewellery = getSafeData(data?.["Jewellery"]).slice(0, 5);
  const topFood = getSafeData(data?.["Food"]).slice(0, 5);
  const topElectronic = getSafeData(data?.["Electronic"]).slice(0, 5);

  return (
    <div>
      {[
        { title: "Top Book Items", data: topBook, link: "/book" },
        { title: "Pharmacy Items", data: topPharmacy, link: "/pharmacy" },
        { title: "Top Phone Items", data: topPhone, link: "/phone" },
        {
          title: "Top Jewellery Items",
          data: TopJewellery,
          link: "/jewellery",
        },
        { title: "Fashion Items", data: topFashion, link: "/fashion" },
        { title: "Top Food Items", data: topFood, link: "/food" },
        {
          title: "Top Electronic Items",
          data: topElectronic,
          link: "/electronic",
        },
      ].map(({ title, data, link }) => (
        <section key={title} className="bg-white text-black py-4">
          <h2 className="text-2xl text-center font-bold my-3">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-48 w-full mb-4 transform transition duration-300 ease-in-out hover:scale-125"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.details}</p>
                <p className="text-lg font-bold mb-4">${item.price}</p>
                <div className="flex justify-between">
                  <button className="btn btn-outline btn-accent">
                    Add Card!
                  </button>
                  <button className="btn btn-outline btn-warning">
                    Buy it now!
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="py-2 text-center">
            <Link to={link}>
              <button className="btn btn-outline btn-info">See More!</button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeCards;
