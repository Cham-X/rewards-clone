const icons = [
  '/assets/chatgpt-BGNzlBAl.svg',
  '/assets/flowva_coin.svg',
  '/assets/asana-CMGFl365.svg',
  '/assets/flowva_coin.svg',
  '/assets/vs_code-5ANMQ9dH.svg',
  '/assets/flowva_coin.svg',
  '/assets/framer-p0HsK72y.svg',
  '/assets/flowva_coin.svg',
  '/assets/google3d-9SxgZoSW.svg',
  '/assets/flowva_coin.svg',
  '/assets/zoom-Bqbl1Gji.svg',
  '/assets/flowva_coin.svg',
  '/assets/canva-Dtq16jy0.svg',
  '/assets/flowva_coin.svg',
];

const IconScroll = ({ icons, direction = 'left' }) => {
  const animationClass = direction === 'left' ? 'animate-scrollLeft' : 'animate-scrollRight';

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className={`flex w-max ${animationClass}`}>
      {duplicatedIcons.map((icon, index) => (
        <div key={index} className="mx-4">
          <img src={icon} alt="icons" className="w-19.25 h-19.25 md:w-31.75 md:h-31.75" />
        </div>
      ))}
    </div>
  );
};

const HeroSection1 = () => {
  return (
    <>
      {/* Hero Title */}
      <h1 className="text-[40px] md:text-[72px] mt-13.75 md:mt-32.5 text-center font-[Impact] leading-[120%]">
        YOUR
        <span className="inline-flex px-5 rounded-[100px] text-white bg-[linear-gradient(90deg,#9013FE_0%,#FF8687_100%)]">
          SMART
        </span>
        SPACE <br className="md:hidden" /> TO MANAGE YOUR <br /> DIGITAL LIFE AND BE REWARDED
      </h1>

      {/* CTA Button */}
      <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-58 rounded-[100px] border border-[#9013FE1A] p-1.5 font-bold text-sm font-manrope">
        <div className="w-full text-sm whitespace-nowrap p-6 rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
          Start Earning Today
        </div>
      </button>

      <div className="overflow-hidden mt-12 md:mt-20 relative w-full">
        <IconScroll icons={icons} direction="left" />

        <div className="mt-5 md:mt-10">
          <IconScroll icons={icons} direction="right" />
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
