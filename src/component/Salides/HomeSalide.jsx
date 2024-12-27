import { useEffect, useState } from "react";

const HomeSalide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    "https://i.postimg.cc/44VSTvW9/Best-Mens-tshirt-brands-768x644.png",
    "https://i.postimg.cc/3r6HWqnk/Whats-App-Image-2024-09-06-at-06-11-31-e7e904bf.jpg",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000); // Auto-play interval in milliseconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isPaused, slides.length]);

  return (
    <div
      className="relative h-40 md:h-80 overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <img
            src={slide}
            alt={`slide ${index + 1}`}
            className="h-40 md:h-80 w-full object-cover"
          />
          {index === 0 && (
            <div className="absolute inset-0 flex items-start justify-center p-8">
              <h2 className="text-white text-3xl md:text-5xl font-bold px-4 py-2 rounded-lg">
                Welcome to <br />
                <span className="text-red-500">MY</span>{" "}
                <span className="text-blue-500">Shop</span>
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeSalide;
