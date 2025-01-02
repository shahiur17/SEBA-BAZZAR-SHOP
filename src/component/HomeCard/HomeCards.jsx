import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ data }) => {
  const getSafeData = (array) => (Array.isArray(array) ? array : []);

  const categories = [
    {
      title: "Top Book Items",
      data: getSafeData(data?.["Book"]),
      link: "/book",
    },
    {
      title: "Pharmacy Items",
      data: getSafeData(data?.["Pharmacy"]),
      link: "/pharmacy",
    },
    {
      title: "Top Phone Items",
      data: getSafeData(data?.["Phone"]),
      link: "/phone",
    },
    {
      title: "Top Jewellery Items",
      data: getSafeData(data?.["Jewellery"]),
      link: "/jewellery",
    },
    {
      title: "Fashion Items",
      data: getSafeData(data?.["Fashion"]),
      link: "/fashion",
    },
    {
      title: "Top Food Items",
      data: getSafeData(data?.["Food"]),
      link: "/food",
    },
    {
      title: "Top Electronic Items",
      data: getSafeData(data?.["Electronic"]),
      link: "/electronic",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentOffset((prevOffset) => (prevOffset + 1) % 5);
      }, 2000); // Slide every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div>
      {categories.map(({ title, data, link }) => (
        <section key={title} className="bg-white text-black py-4">
          <h2 className="text-2xl text-center font-bold my-3">{title}</h2>
          <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentOffset * 20}%)`,
              }}
            >
              {data.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-1/5 p-2 bg-white rounded-lg shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover h-48 w-full mb-4 transform transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-700 mb-2">{item.details}</p>
                  <p className="text-lg font-bold mb-4">${item.price}</p>
                  <div className="flex justify-between">
                    <button className="btn btn-outline btn-accent">
                      Add to Cart
                    </button>
                    <button className="btn btn-outline btn-warning">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
