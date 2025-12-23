const StayProductive = () => {
  return (
    <section className="flex justify-center mb-20 px-3.5">
      <div className="bg-[#F7FF5D] relative overflow-hidden min-h-98.5 md:min-h-147.5 py-16 border border-[#00000014] w-full rounded-2xl md:rounded-4xl md:max-w-[80%]">
        <div className="relative z-10 px-11.25">
          <h2 className="text-[40px] md:text-[64px] leading-[120%] font-[impact] mb-10 text-center">
            STAY PRODUCTIVE. <br /> GET REWARDED.
          </h2>
          <p className="md:text-[28px] leading-7.5 md:leading-8.75 font-semibold text-center font-manrope">
            Turn your tools, subscriptions, and daily habits into <br className="hidden md:block" />
            rewards all in one calm space
          </p>
          <button className="mt-10 left-1/2 font-manrope right-1/2 -translate-x-1/2 relative w-58 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1.5">
            <div className="w-full text-sm whitespace-nowrap p-6 rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
              Unlock Rewards Now
            </div>
          </button>
        </div>

        <div className="absolute -left-16 top-[60%] md:-left-10 md:top-1/2 md:-translate-y-1/2">
          <img src="/assets/flowva_coin.svg" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" className="ml-28" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" className="ml-24" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" alt="flowva_coin" />
        </div>

        <div className="absolute -right-24 -top-[68%] rotate-180 md:-right-10 md:top-1/2 md:-translate-y-1/2">
          <img src="/assets/flowva_coin.svg" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" className="ml-28" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" className="ml-24" alt="flowva_coin" />
          <img src="/assets/flowva_coin.svg" alt="flowva_coin" />
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
