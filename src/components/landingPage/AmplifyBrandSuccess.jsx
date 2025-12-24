import React from 'react';

const features = [
  {
    id: 1,
    title: 'Engage an active community of tech savvy users',
    image: '/assets/tech_savy_users-CyVPbV-1.svg',
    description: 'Thousands of engaged users explore and use tools on our platform everyday',
    colSpan: 'lg:col-span-3',
    bgColor: 'bg-[#F5EBFF]',
    textColor: 'text-black',
  },
  {
    id: 2,
    title: 'Offer Exclusive Value',
    image: '/assets/exclusive_offer-DIkQR0Gj.svg',
    description: 'Stand out with special discounts, cashback, or unique perks for our users',
    colSpan: 'lg:col-span-4',
    bgColor: 'bg-[#F5EBFF]',
    textColor: 'text-black',
  },
  {
    id: 3,
    title: 'Boost Your Visibility',
    image: '/assets/top_tool_spotlight-BISlDxDf.svg',
    description:
      'Get featured across our Homepage, Discover section, Rewards Hub, Library, Newsletter, and Blog',
    colSpan: 'lg:col-span-4',
    bgColor: 'bg-[#F5EBFF]',
    textColor: 'text-black',
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div
      className={`h-[453px] text-start flex flex-col items-start justify-between ${feature.bgColor} rounded-[24px] p-[32px] w-full ${feature.colSpan}`}
    >
      <h2 className={`text-[32px] font-manrope font-bold ${feature.textColor}`}>{feature.title}</h2>
      <img src={feature.image} alt={feature.title} />
      <p className="text-[20px] text-[#535862]">{feature.description}</p>
    </div>
  );
};

const ImpactCard = () => {
  return (
    <div className="h-[453px] bg-[#111111] relative text-white flex flex-col items-start overflow-hidden rounded-[24px] lg:col-span-3 p-[32px]">
      <h2 className="text-[32px] font-manrope font-bold">Measure Your Impact</h2>
      <p className="text-[20px] mt-5 text-[#FFFFFFCC]">
        Track how many users unlock, engage with, and activate your offer.
      </p>

      <div className="flex items-center mt-auto">
        <div className="flex flex-col self-end">
          <h3 className="text-[impact] p-0 m-0 -ml-2 -mb-3 text-white text-[56px]">30,000+</h3>
          <p className="text-[20px] mt-2 text-[#FFFFFF]">Tools Added to Libraries</p>
        </div>

        <div className="flex w-[200px]">
          <img
            src="/assets/reviews_icon-CrecVBPZ.svg"
            className="w-full h-full"
            alt="reviews icon"
          />
          <img
            src="/assets/progress_icon-BsbFTYok.svg"
            className="w-full h-full -ml-24 -mt-14"
            alt="progress icon"
          />
        </div>
      </div>
    </div>
  );
};

const AmplifyBrandSuccess = () => {
  return (
    <section className="flex justify-center mb-20 overflow-hidden">
      <div className="w-full md:max-w-[80%] px-[14px]">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          AMPLIFY YOUR BRAND'S SUCCESS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-[24px]">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}

          <ImpactCard />
        </div>
      </div>
    </section>
  );
};

export default AmplifyBrandSuccess;
