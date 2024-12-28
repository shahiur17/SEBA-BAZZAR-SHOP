import React from "react";
import { Link } from "react-router-dom";

// Assuming the data is coming from a parent component or external source
const HomeCards = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);

  // Adjusted data slices based on the IDs provided in the JSON
  const topFashion = getSafeData(data?.["Fashion"]).slice(0, 5);
  const topPhone = getSafeData(data?.["Phone"]).slice(0, 5);
  const topPharmacy = getSafeData(data?.["Pharmacy"]).slice(0, 5);
  const topBook = getSafeData(data?.["Book"]).slice(0, 5);
  const TopJewellery = getSafeData(data?.["Jewellery"]).slice(0, 5);
  const topFood = getSafeData(data?.["Food"]).slice(0, 5);
  const topElectronic = getSafeData(data?.["Electronic"]).slice(0, 5);

  return (
    <div>
      <section className="bg-gray-100 text-black py-6">
        <h2 className="text-2xl text-center font-bold my-4">Top Book Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topBook.map((item) => (
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
          <Link to="/book">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>

      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4">Pharmacy items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topPharmacy.map((item) => (
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
          <Link to="/pharmacy">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>

      <section className="bg-yellow-200 text-black py-6">
        <h2 className="text-2xl text-center font-bold my-4">Top Phone Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topPhone.map((item) => (
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
          <Link to="/phone">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>

      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4">
          Top Jewellerys Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {TopJewellery.map((item) => (
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
          <Link to="/jewellery">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>
      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4">Fashion items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topFashion.map((item) => (
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
          <Link to="/fashion">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>

      <section className="bg-yellow-200 text-black py-6">
        <h2 className="text-2xl text-center font-bold my-4">Top Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topFood.map((item) => (
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
          <Link to="/food">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>

      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4">
          Top Electronic Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topElectronic.map((item) => (
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
          <Link to="/jelectronic">
            <button className="btn btn-outline btn-info">See More!</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
