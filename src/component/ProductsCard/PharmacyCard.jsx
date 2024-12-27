const PharmacyCard = ({ data }) => {
  // Helper function to filter fashion items
  const getPharmacyItems = (array) => {
    if (Array.isArray(array)) {
      return array.filter((item) => item.name.includes("Pharmacy"));
    }
    return [];
  };

  const topPharmacyItems = getPharmacyItems(data).slice(0, 20); // Get the top 10 fashion items

  return (
    <div>
      <section className="bg-black text-white py-6">
        <h2 className="text-2xl text-center font-bold my-4"> Pharmacy Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topPharmacyItems.map((item) => (
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
                {item.title || "Unknown Brand"}{" "}
                {/* 'title' could be used for brand or category */}
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
      </section>
    </div>
  );
};

export default PharmacyCard;
