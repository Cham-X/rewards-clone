const GrowthPlans = () => {
  return (
    <section className="px-3.5 select-none">
      <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">GROWTH PLANS</h2>

      <div className="w-full md:max-w-6xl mx-auto md:px-6 grid md:grid-cols-3 gap-8 font-manrope">
        {/* Launch */}
        <div
          className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between border"
          style={{
            backgroundColor: 'rgb(249, 249, 249)',
            color: 'black',
            borderColor: 'rgba(0, 0, 0, 0.16)',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-bold">Launch</h3>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[36px] font-[impact] font-bold">$50/Month</p>
            </div>

            <p className="text-sm font-semibold">Save 20% - $480/year </p>

            <button
              className="mt-10 w-full relative h-18.5 text-sm font-bold rounded-[100px] border p-1.5 transition-all ease-linear duration-200 hover:scale-[1.05]"
              tabIndex={0}
              style={{ borderColor: 'rgba(0, 0, 0, 0.16)' }}
            >
              <div
                className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 
               "
                tabIndex={0}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                Start Your 3-Day Free Trial
              </div>
            </button>

            <hr className="my-8" style={{ borderColor: 'rgba(0, 0, 0, 0.16)' }} />

            <h4 className="font-bold italic">
              Perfect for brands testing Flowva or running focused campaigns.
            </h4>

            <ul className="space-y-2 text-sm mt-2">
              {[
                'Self-serve campaign dashboard – manage everything yourself',
                'Run 1-2 featured campaigns per month',
                'Featured placement in Discovery and Newsletter',
                'Basic analytics & performance reporting',
                'Offer perks and discounts directly to users',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accelerate */}
        <div
          className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between border"
          style={{
            backgroundColor: 'rgb(107, 22, 202)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.16)',
          }}
        >
          <div>
            <div className="absolute p-[8px_16px] rounded-bl-[24px] text-[#9013FE] rounded-tr-[24px] bg-white top-[2px] right-[2px]">
              Most Popular
            </div>

            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-bold">Accelerate</h3>
            </div>

            <p className="text-[36px] font-[impact] font-bold">$250/Month</p>
            <p className="text-sm font-semibold">Save 20% - $2,400/year </p>

            <button
              className="mt-10 w-full relative h-[74px] text-sm font-bold rounded-[100px] border p-[6px]"
              tabIndex={0}
              style={{ borderColor: 'rgba(255, 255, 255, 0.16)' }}
            >
              <div
                className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]"
                tabIndex={0}
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                Get Started Now
              </div>
            </button>

            <hr className="my-8" style={{ borderColor: 'rgba(255, 255, 255, 0.16)' }} />

            <h4 className="font-bold italic">
              For brands ready to scale visibility and drive meaningful engagement
            </h4>

            <ul className="space-y-2 text-sm mt-2">
              {[
                'Self-serve campaign dashboard – manage everything yourself',
                'Run 3-5 featured campaigns per month',
                'Featured placement in Discovery, Rewards, and Newsletter',
                'Priority visibility in listings and recommendations',
                'Advanced analytics with deeper user insights',
                'Offer perks, discounts, and rewards on the highly-engaged Rewards page for maximum visibility',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dominate */}
        <div
          className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between border"
          style={{
            backgroundColor: 'rgb(249, 249, 249)',
            color: 'black',
            borderColor: 'rgba(0, 0, 0, 0.16)',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-bold">Dominate</h3>
            </div>

            <p className="text-[36px] font-[impact] font-bold">$450/Month</p>
            <p className="text-sm font-semibold">Save 20% - $4,320/year </p>

            <button
              className="mt-10 w-full relative h-[74px] text-sm font-bold rounded-[100px] border p-[6px]"
              tabIndex={0}
              style={{ borderColor: 'rgba(0, 0, 0, 0.16)' }}
            >
              <div
                className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]"
                tabIndex={0}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                Get Started Now
              </div>
            </button>

            <hr className="my-8" style={{ borderColor: 'rgba(0, 0, 0, 0.16)' }} />

            <h4 className="font-bold italic">
              For brands seeking premium positioning and consistent exposure across Flowva.
            </h4>

            <ul className="space-y-2 text-sm mt-2">
              {[
                'Self-serve campaign dashboard – manage everything yourself',
                'Unlimited features per month',
                'Premium placement across Homepage, Discovery, Rewards, Blog, and Newsletter',
                'Premium analytics with trend tracking and performance reports',
                'Early access to new users and emerging tools',
                'Optional managed campaigns by the Flowva team',
                'Offer perks, discounts, and rewards on the highly-engaged Rewards page for maximum visibility and participation',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlans;
