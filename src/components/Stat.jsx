const StatCard = ({ number, label, description, chipImage, chipText }) => {
  return (
    <div className="w-full shadow-md max-w-[417.67px] pb-10 flex flex-col justify-between p-4 h-81.75 md:h-96 rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
      <div className="flex flex-col gap-3">
        <h2 className="font-[impact] text-[56px]">{number}</h2>
        <p className="text-[24px]">{label}</p>
      </div>

      <p className="text-[20px] font-manrope text-[#5F5F5F]">{description}</p>

      <div className="flex items-center gap-2">
        <img src={chipImage} alt={label.toLowerCase()} />
        {chipText && <span className="font-semibold font-manrope">{chipText}</span>}
      </div>
    </div>
  );
};

const StatAndParagraphText = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Users',
      description: 'Already simplifying their workflow with Flowva',
      chipImage: '/assets/users_chip-Bbqn3miE.svg',
      chipText: '10,000+',
    },
    {
      number: '200+',
      label: 'Tools',
      description: 'Curated and organized for you in the library',
      chipImage: '/assets/Tools_chip-2aCfSVxA.svg',
      chipText: 'and many more',
    },
    {
      number: '25+',
      label: 'Countries',
      description: 'Reviewing tools and building smarter stacks every day',
      chipImage: '/assets/country_flags-CgQMcyc7.svg',
      chipText: null,
    },
  ];

  return (
    <>
      <p className="px-3.5 text-[20px] md:text-[36px] mt-17.5 mb-20 md:my-28 text-center font-semibold font-manrope leading-8 md:leading-10">
        Turn productivity into rewards with a calm, smart <br className="hidden md:block" /> space
        that organizes your tools, and keeps you in control.
      </p>

      <section className="flex justify-center px-3.5">
        <div className="flex flex-col md:flex-row w-full lg:w-[80%] items-center gap-5">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              chipImage={stat.chipImage}
              chipText={stat.chipText}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default StatAndParagraphText;
