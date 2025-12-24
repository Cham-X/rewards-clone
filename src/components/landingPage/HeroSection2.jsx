const HeroSection2 = () => {
  return (
    <>
      <h1 className="text-[40px] md:text-[72px] mt-13.75 md:mt-32.5 text-center font-[Impact] leading-[120%]">
        CONNECT WITH{' '}
        <span className="inline-flex px-5 rounded-[100px] text-white bg-[linear-gradient(90deg,#9013FE_0%,#FF8687_100%)]">
          TECH
        </span>
        <br /> PROFESSIONALS WHO ACTUALLY ENGAGE
      </h1>
      <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-58 rounded-[100px] border border-[#9013FE1A] p-1.5 font-bold text-sm font-manrope">
        <div className="w-full text-sm whitespace-nowrap p-6 rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
          Start Your 3-Day Free Trial
        </div>
      </button>
    </>
  );
};

export default HeroSection2;
