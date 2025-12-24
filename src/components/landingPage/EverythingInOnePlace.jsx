import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    image: '/assets/org_tools-7DWlPw6L.png',
    title: 'Organize your tools',
    description: 'Keep your apps, subscriptions, and tech stack in one simple space.',
  },
  {
    id: 2,
    image: '/assets/discover_tools-DZ0lYYtv.png',
    title: 'Discover what works',
    description:
      'Find new tools tailored to your workflow, curated for freelancers and remote workers.',
  },
  {
    id: 3,
    image: '/assets/get_rewarded-CI6jGT9Z.png',
    title: 'Get Rewarded',
    description: 'Earn perks, gift cards and cashback just for staying productive.',
  },
];

const SlideCard = ({ slide, isActive, isPrev, isNext }) => {
  const getTransform = () => {
    if (isActive) return 'translate3d(0px, 0px, 0px) rotateY(0deg) scale(1)';
    if (isPrev) return 'translate3d(-50px, 0px, -100px) rotateY(50deg) scale(0.9)';
    if (isNext) return 'translate3d(50px, 0px, -100px) rotateY(-50deg) scale(0.9)';
    return 'translate3d(0px, 0px, -200px) rotateY(100deg) scale(0.8)';
  };

  const getOpacity = () => {
    if (isActive) return '1';
    if (isPrev || isNext) return '0.7';
    return '0.3';
  };

  const getZIndex = () => {
    if (isActive) return '10';
    if (isPrev || isNext) return '5';
    return '1';
  };

  return (
    <div
      className="flex flex-col rounded-xl overflow-visible transition-all duration-500 ease-out"
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        zIndex: getZIndex(),
      }}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-auto object-contain rounded-xl"
      />
      <div className="mt-2">
        <h3 className="text-lg font-bold mb-2 font-manrope">{slide.title}</h3>
        <p className="text-sm text-gray-700 font-manrope">{slide.description}</p>
      </div>
    </div>
  );
};

const PaginationDots = ({ total, activeIndex, onDotClick }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`
            h-2 w-2 rounded-full transition-all duration-300
            ${index === activeIndex ? 'bg-black w-2' : 'bg-gray-400'}
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

function EverythingInOnePlace() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle slide
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }

    setStartX(0);
    setCurrentX(0);
  };

  return (
    <section className="px-3.5">
      <div
        className="w-full md:max-w-[80%] p-4 pb-20 pt-14 rounded-2xl md:rounded-4xl h-fit mx-auto my-24 transition-colors duration-500"
        style={{ backgroundColor: 'rgb(236, 214, 255)' }}
      >
        <h2 className="text-[48px] md:text-[64px] font-[impact] mb-10 text-center">
          EVERYTHING IN ONE PLACE
        </h2>

        <div
          ref={containerRef}
          className="relative overflow-hidden perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center items-center gap-8 px-4 md:px-20">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  ${index === activeIndex ? 'flex-1 max-w-100' : 'hidden md:block flex-none w-50'}
                `}
              >
                <SlideCard
                  slide={slide}
                  isActive={index === activeIndex}
                  isPrev={index === (activeIndex - 1 + slides.length) % slides.length}
                  isNext={index === (activeIndex + 1) % slides.length}
                />
              </div>
            ))}
          </div>
        </div>

        <PaginationDots
          total={slides.length}
          activeIndex={activeIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}

export default EverythingInOnePlace;
