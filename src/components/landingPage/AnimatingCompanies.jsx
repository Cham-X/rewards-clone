import React, { useState } from 'react';

const companies = [
  {
    id: 1,
    name: 'Brevo',
    banner: '/assets/brevo_banner-QsGdU9dm.svg',
    description: 'Email & Marketing Automation',
    link: 'https://get.brevo.com/9vml1qjuxigb',
    bgColor: 'rgb(249, 255, 246)',
    textColor: 'black',
  },
  {
    id: 2,
    name: 'Jotform',
    banner: '/assets/jotform_banner-66bbJqxw.svg',
    description: 'Form Builder Platform',
    link: 'https://www.jotform.com/ai/agents/?partner=flowvahub-WOAEEuoEob',
    bgColor: 'rgb(245, 215, 197)',
    textColor: 'black',
  },
  {
    id: 3,
    name: 'Monday',
    banner: '/assets/monday_banner-Dkyncs7F.svg',
    description: 'Project Management',
    link: 'https://try.monday.com/b7pem672ddxh',
    bgColor: 'rgb(184, 184, 250)',
    textColor: 'white',
  },
  {
    id: 4,
    name: 'Reclaim',
    banner: '/assets/reclaim_banner-WN7Bpwy1.svg',
    description: 'Smart Scheduling',
    link: 'https://go.reclaim.ai/ur9i6g5eznps',
    bgColor: 'rgb(255, 255, 255)',
    textColor: 'black',
  },
];

const ExternalLinkIcon = ({ color = 'black' }) => (
  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.83684 1L9.5 1.00016M9.5 1.00016L9.49998 5.64132M9.5 1.00016L1.5 9"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);

const FlipCard = ({ company }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="mx-4">
      <div
        className="flip-card w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px]"
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onFocus={() => setIsFlipped(true)}
        onBlur={() => setIsFlipped(false)}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front of card */}
          <div className="flip-card-front w-full h-full border !rounded-[16px] md:!rounded-[32px] overflow-hidden border-[#e0e0e0]">
            <img
              src={company.banner}
              alt={company.name}
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          {/* Back of card */}
          <div
            className="flip-card-back w-full h-full flex flex-col border border-[#e0e0e0] !rounded-[16px] md:!rounded-[32px] items-center justify-center text-center p-4"
            style={{ backgroundColor: company.bgColor, color: company.textColor }}
          >
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg flex gap-3 items-center font-bold mb-2 p-[10px_16px] rounded-[24px]"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.145)' }}
            >
              <span>{company.name}</span>
              <ExternalLinkIcon color={company.textColor} />
            </a>
            <p className="text-xs md:text-sm mb-3 font-manrope">{company.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatingCompanies = () => {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="overflow-hidden mt-12 md:mt-16 relative w-full group">
      <div className="flex w-max py-3 animate-scrollLeft group-hover:pause">
        {duplicatedCompanies.map((company, index) => (
          <FlipCard key={`${company.id}-${index}`} company={company} />
        ))}
      </div>
    </div>
  );
};

export default AnimatingCompanies;
