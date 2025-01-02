import { useEffect, useState } from "react";

const HomeSalide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    "https://i.ibb.co.com/py4YB3X/Blue-And-White-Modern-Pharmacy-Services-Banner.png",
    "https://i.ibb.co.com/SXGLHHk/Black-White-Electronic-Promo-Instagram-Post.png",
    "https://i.ibb.co.com/YpdGMdP/Black-Modern-Food-Menu-Presentation.jpg",
    "https://i.ibb.co.com/qNJZ742/Blue-Yellow-10-Awesome-Books-That-Changed-My-Mindset-Youtube-Thumbnail.jpg",
    "https://i.ibb.co.com/brvy6Xw/Beige-Jewelry-Collage-Instagram-Post.jpg",
    "https://i.ibb.co.com/nzVHS5y/Untitled-design.jpg",
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 4000); // Auto-play interval in milliseconds

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
            <div className="absolute inset-0 flex items-start justify-center p-8"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeSalide;
