import React from "react";

const JewelleryCard = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);
  const topDropSolder = getSafeData(data?.["Jewellery"]).slice(0, 10);

  return (
    <div>
      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4">
          Top Jewellery Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topDropSolder.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image || "fallback-image-url"} // Fallback image if none provided
                  alt={item.name || "Product Image"} // Fallback alt text
                  className="object-cover h-48 w-full mb-4 transform transition duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.name || "Unnamed Product"}
              </h3>
              <p className="text-gray-700 mb-1">
                {item.brand || "Unknown Brand"}
              </p>
              <p className="text-gray-700 mb-2">
                {item.details || "No details available"}
              </p>
              <div className="flex items-center mb-2">
                <p className="text-lg font-bold text-black">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <button className="btn btn-outline btn-accent">
                  Add to Cart
                </button>
                <button className="btn btn-outline btn-warning">
                  Buy it now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 text-center"></div>
      </section>
    </div>
  );
};

export default JewelleryCard;
