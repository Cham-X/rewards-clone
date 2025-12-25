import React from 'react';

const StartCampaign = () => {
  return (
    <section className="w-full flex justify-center my-24 px-3.5">
      <div className="bg-[#1365FE] md:max-w-[80%] flex justify-center p-8 w-full rounded-2xl md:rounded-4xl min-h-165.5">
        <div className="max-w-187.5 w-full">
          <h2 className="text-[40px] md:text-[48px] text-white font-[impact] text-center">
            START YOUR CAMPAIGN
          </h2>

          <div className="flex justify-center mt-5 md:mt-10">
            <img
              src="/assets/hand-shake-BMjlZIGL.png"
              className="w-110.5"
              alt="Handshake welcome"
            />
          </div>

          <p className="text-center text-[20px] text-[#FFFFFF]">
            Flowva works with brands to give our users exclusive discounts, cashback, and perks.
          </p>

          <button className="mt-10 left-1/2 font-manrope right-1/2 -translate-x-1/2 relative w-58 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1.5">
            <div className="w-full text-sm whitespace-nowrap p-6 rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
              Claim Your Spot
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartCampaign;
