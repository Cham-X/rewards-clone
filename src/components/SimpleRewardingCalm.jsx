const steps = [
  {
    id: 1,
    title: 'Sign up & Connect',
    description: 'Set up your workspace in minutes',
    bg: '#ECD6FF',
    image: '/assets/signin-complete-DI0ghP4O.png',
  },
  {
    id: 2,
    title: 'Organize & Track',
    description: 'Add your tools, subscriptions, and tasks.',
    bg: '#ECD6FF',
    image: '/assets/organize-track-CepKxGUD.png',
  },
  {
    id: 3,
    title: 'Earn & Enjoy',
    description: 'Check in daily, try new tools, and watch your points grow.',
    bg: '#ECD6FF',
    coins: true,
  },
];

const StepCard = ({ step, isMain = false, showDescription = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden border border-[#0000001F] rounded-xl p-6
        ${isMain ? 'col-span-8' : 'col-span-2 flex items-center justify-center cursor-pointer'}
      `}
      style={{ backgroundColor: step.bg }}
    >
      <div className="flex flex-col justify-between h-full">
        <h2 className="font-impact text-black text-[120px] xl:text-[180px]">{step.id}</h2>

        <div>
          <h3 className="text-[20px] xl:text-[36px] text-black font-manrope font-bold xl:font-semibold">
            {step.title}
          </h3>

          {showDescription && (
            <p className="text-[20px] text-black font-manrope font-semibold">{step.description}</p>
          )}
        </div>
      </div>

      {step.image && isMain && (
        <img
          src={step.image}
          alt={step.title}
          className="absolute right-5 -top-10 w-75 rounded-4xl"
        />
      )}

      {step.coins && isMain && (
        <div className="absolute right-5 top-2 w-75 space-y-2">
          {[0, 1, 2].map((row) => (
            <div key={row} className={`flex items-center gap-1 ${row === 1 ? '-ml-20' : ''}`}>
              {[...Array(4)].map((_, i) => (
                <img key={i} src="/assets/flowva_coin-DtzxpoyE.svg" alt="coin" />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopSlide = ({ activeStep }) => {
  return (
    <div className="grid grid-cols-12 w-full h-full gap-4">
      {steps.map((step) => (
        <StepCard
          key={step.id}
          step={step}
          isMain={step.id === activeStep}
          showDescription={step.id === activeStep}
        />
      ))}
    </div>
  );
};

const MobileSteps = () => {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {steps.map((step) => (
        <div
          key={step.id}
          className="relative overflow-hidden border border-[#0000001F] rounded-xl p-6 h-101.75"
          style={{ backgroundColor: step.bg }}
        >
          <div className="flex flex-col justify-between h-full">
            <h2 className="font-impact text-black text-[120px]">{step.id}</h2>
            <div>
              <h3 className="text-[36px] text-black font-manrope font-semibold">{step.title}</h3>
              <p className="text-[20px] text-black font-manrope font-semibold">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SimpleRewardingCalm = () => {
  return (
    <section className="my-24 px-3.5">
      <h2 className="text-[56px] md:text-[64px] leading-[120%] font-impact mb-10 text-center">
        SIMPLE, REWARDING, CALM
      </h2>

      {/* Desktop */}
      <div className="hidden lg:block w-full lg:w-[80%] mx-auto h-138">
        {/* Replace with Swiper */}
        <DesktopSlide activeStep={3} />
      </div>

      {/* Mobile */}
      <MobileSteps />
    </section>
  );
};

export default SimpleRewardingCalm;
