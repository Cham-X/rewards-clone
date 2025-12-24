const DownloadCard = () => {
  return (
    <div className="bg-[#FFD7D780] max-w-145 w-full rounded-2xl md:rounded-4xl p-4 md:p-10">
      <button className="p-[10px_16px] bg-[#0000000D] text-sm rounded-[100px]">Download</button>

      <h2 className="mt-5 mb-3 text-[20px] md:text-[32px] font-semibold">
        ORGANIZE, DISCOVER, AND EARN ON THE GO.
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center my-3">
        <div className="bg-[#FFFFFF] shadow-[1px_4px_10px_0px_#ABABAB1A,2px_17px_17px_0px_#ABABAB17,5px_39px_24px_0px_#ABABAB0D,9px_69px_28px_0px_#ABABAB03,15px_108px_30px_0px_#ABABAB00] rounded-4xl w-full flex-1 p-4 md:p-6">
          <div className="flex flex-col text-[20px] gap-4">
            <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-4 w-full">
              <img src="/assets/appstore-ksfiS9rm.svg" alt="app store icon" />
              Apple App Store
            </button>

            <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-4 w-full">
              <img src="/assets/playstore.svg" alt="play store icon" />
              Google Play Store
            </button>
          </div>

          <div className="mt-5 flex justify-center md:hidden">
            <img src="/assets/barcode.png" className="w-37.5" alt="barcode" />
          </div>
        </div>

        <div className="hidden -ml-5 md:block">
          <img src="/assets/barcode.png" className="w-37.5" alt="barcode" />
        </div>
      </div>

      <button className="rounded-[100px] bg-[#FFFFFFCC] w-full mt-3 p-4 md:p-6 text-[20px] text-start">
        ⌛ Coming soon
      </button>
    </div>
  );
};

const BenefitsCard = () => {
  const benefits = [
    { text: 'QUICK DAILY CHECK-INS', active: true },
    { text: 'DISCOVER TOOLS ANYWHERE', active: false },
    { text: 'NEVER MISS A REWARD', active: false },
  ];

  return (
    <div className="bg-[#111111] rounded-2xl md:rounded-4xl max-w-145 p-4 md:p-10 w-full">
      <button className="p-[10px_16px] bg-[#FFFFFF3D] text-white text-sm rounded-[100px]">
        Benefits
      </button>

      <ul className="space-y-4 my-5">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-4">
            <span
              className={`w-4 h-4 rounded-full shrink-0 ${
                benefit.active ? 'bg-white' : 'bg-[#ffffff4f]'
              }`}
            />
            <span
              className={`text-[18px] md:text-[24px] font-bold ${
                benefit.active ? 'text-white' : 'text-[#ffffff4f]'
              }`}
            >
              {benefit.text}
            </span>
          </li>
        ))}
      </ul>

      <img src="/assets/how_it_works-DSuy1oyD.png" alt="how it works" className="mt-10" />
    </div>
  );
};

const OrganizeDiscoverAndEarnOnTheGo = () => {
  return (
    <section className="flex justify-center mb-20 mx-3.5">
      <div className="xl:max-w-[80%] w-full flex flex-col lg:flex-row items-center gap-8">
        <DownloadCard />
        <BenefitsCard />
      </div>
    </section>
  );
};

export default OrganizeDiscoverAndEarnOnTheGo;
