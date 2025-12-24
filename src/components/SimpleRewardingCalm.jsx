import { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: 'Sign up & Connect',
    description: 'Set up your workspace in minutes',
    image: '/assets/signin-complete.png',
  },
  {
    id: 2,
    title: 'Organize & Track',
    description: 'Add your tools, subscriptions, and tasks.',
    image: '/assets/organize-track.png',
  },
  {
    id: 3,
    title: 'Earn & Enjoy',
    description: 'Check in daily, try new tools, and watch your points grow.',
    coins: true,
  },
];

const StepCard = ({ step, active = false, showDescription = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden border border-[#0000001F] rounded-xl p-6 transition-all duration-700 ease-in-out
        ${
          active
            ? 'col-span-8 bg-[#ECD6FF]'
            : 'col-span-2 bg-[#F5EBFF] cursor-pointer flex items-center justify-center'
        }
      `}
    >
      <div className="flex flex-col justify-between h-full transition-all duration-700">
        <h2 className="font-[impact] text-black text-[120px] xl:text-[180px]">{step.id}</h2>

        <div>
          <h3 className="text-[20px] xl:text-[36px] text-black font-manrope font-bold xl:font-semibold">
            {step.title}
          </h3>

          {showDescription && (
            <p className="text-[20px] text-black font-manrope font-semibold transition-opacity duration-700 opacity-100">
              {step.description}
            </p>
          )}
        </div>
      </div>

      {active && step.image && (
        <img
          src={step.image}
          alt={step.title}
          className="absolute right-5 -top-10 w-75 rounded-4xl  transition-opacity duration-700 opacity-100"
        />
      )}

      {active && step.coins && (
        <div className="absolute right-5 top-2 w-75 space-y-2 transition-opacity duration-700 opacity-100">
          {[0, 1, 2].map((row) => (
            <div key={row} className={`flex gap-1 ${row === 1 ? '-ml-20' : ''}`}>
              {[...Array(4)].map((_, i) => (
                <img key={i} src="/assets/flowva_coin.svg" alt="coin" />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopSlide = ({ activeIndex }) => {
  return (
    <div className="grid grid-cols-12 w-full h-full gap-4">
      {steps.map((step, index) => (
        <StepCard
          key={step.id}
          step={step}
          active={index === activeIndex}
          showDescription={index === activeIndex}
        />
      ))}
    </div>
  );
};

const DotController = ({ activeIndex }) => {
  return (
    <div className="h-13 w-26 bg-[#F1F1F1] flex justify-center items-center rounded-[100px] px-4">
      <div className="flex items-center gap-3 w-full">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`
              h-2 rounded-full transition-all duration-300
              ${index === activeIndex ? 'flex-1 bg-gray-200' : 'w-2 bg-[#5F5F5F]'}
            `}
          >
            {index === activeIndex && (
              <div className="h-full bg-black transition-all duration-200 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileSteps = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
    {steps.map((step) => (
      <div
        key={step.id}
        className="relative overflow-hidden bg-[#ECD6FF] border border-[#0000001F] rounded-xl p-6 h-101.75"
      >
        <div className="flex flex-col justify-between h-full">
          <h2 className="font-[impact] text-black text-[120px]">{step.id}</h2>
          <div>
            <h3 className="text-[36px] text-black font-manrope font-semibold">{step.title}</h3>
            <p className="text-[20px] text-black font-manrope font-semibold">{step.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const SimpleRewardingCalm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  return (
    <section className="my-24 px-3.5">
      <h2 className="text-[56px] md:text-[64px] leading-[120%] font-[impact] mb-10 text-center">
        SIMPLE, REWARDING, CALM
      </h2>

      <div className="hidden lg:block w-full lg:w-[80%] mx-auto h-138">
        <DesktopSlide activeIndex={activeIndex} />
      </div>

      <div className="hidden lg:flex justify-center items-center mt-6 gap-4">
        <button
          onClick={togglePlayPause}
          className="h-13.25 w-13  rounded-full flex items-center justify-center bg-[#F1F1F1] transition-colors text-black text-xl"
        >
          {!isPlaying ? '▶' : '❚❚'}
        </button>
        <DotController activeIndex={activeIndex} onDotClick={handleDotClick} />
      </div>

      <MobileSteps />
    </section>
  );
};

export default SimpleRewardingCalm;
