const WhySubscribeFlowva = () => {
  return (
    <section className="flex justify-center my-20 px-3.5">
      <div className="w-full md:max-w-[80%]">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          WHY SUBSCRIBE TO FLOWVA?
        </h2>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
            <div className="xl:col-span-2 md:col-span-2 hidden xl:block rounded-4">
              <p className="font-manrope font-bold text-center xl:text-start">VALUE PROPOSITION</p>
              <h2 className="text-[56px] font-[impact] text-center xl:text-start">
                TRUSTED BY LEADING PRODUCTS WITH ORGANIC MARKETING SUCCESS
              </h2>
            </div>

            <div className="bg-[#D966FF] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/verified_3d-CCrDsVYL.svg" alt="Verified engagement" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Verified engagement
              </h2>
              <p className="mt-2 text-white font-manrope">
                Reach active tech-savvy professionals who manage their tool libraries and actually
                try new tools, all included with your subscription.
              </p>
            </div>

            <div className="bg-[#FF66AB] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/growth_3d-4kWv8fe5.svg" alt="Reward-Driven Growth" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Reward-Driven Growth
              </h2>
              <p className="mt-2 text-white font-manrope">
                Incentivize users automatically with Flowva’s built-in rewards system — no extra
                fees, fully handled by the platform.
              </p>
            </div>

            <div className="bg-[#FF752C] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/service_3d-jhLrw6-a.svg" alt="Full Self-Serve Freedom" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Full Self-Serve Freedom
              </h2>
              <p className="mt-2 text-white font-manrope">
                Launch and manage campaigns anytime with an intuitive dashboard. Target your
                campaigns, schedule actions, and track engagement with complete control.
              </p>
            </div>

            <div className="bg-[#2C95FF] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/premium_3d-CBRQqQod.svg" alt="Optional Premium Support" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Optional Premium Support
              </h2>
              <p className="mt-2 text-white font-manrope">
                For top-tier brands or high-impact campaigns, our team can manage your campaigns,
                optimize engagement, and provide advanced analytics.
              </p>
            </div>

            <div className="bg-[#FC2367] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/access_3d-DZ4hiFUz.svg" alt="Exclusive Access" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Exclusive Access
              </h2>
              <p className="mt-2 text-white font-manrope">
                Your subscription unlocks Flowva’s curated audience. Our users are verified,
                engaged, and relevant. Limited campaign slots maintain visibility and exclusivity.
              </p>
            </div>

            <div className="bg-[#5BBB6A] p-4 rounded-2xl xl:min-h-75.25">
              <img src="/assets/analytic-Ci8bQ1TF.svg" alt="Actionable Analytics" />
              <h2 className="text-[24px] mt-5 font-manrope font-bold text-white">
                Actionable Analytics
              </h2>
              <p className="mt-2 text-white font-manrope">
                Track real results; tool trials, user interactions, engagement trends — not just
                impressions. Make data-driven decisions for every campaign.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div>
              <h2 className="font-[impact] text-[56px]">1200+</h2>
              <hr className="my-4 border border-[#e5e7eb]" />
              <p className="font-manrope font-bold text-sm">ACTIVE USER/MONTH</p>
            </div>

            <div>
              <h2 className="font-[impact] text-[56px]">35M+</h2>
              <hr className="my-4 border border-[#e5e7eb]" />
              <p className="font-manrope font-bold text-sm">IMPRESSIONS</p>
            </div>

            <div>
              <h2 className="font-[impact] text-[56px]">4200+</h2>
              <hr className="my-4 border border-[#e5e7eb]" />
              <p className="font-manrope font-bold text-sm">PERSONALIZED ADS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySubscribeFlowva;
