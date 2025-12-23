import React, { useState, useRef, useEffect } from 'react';

// FAQ data array
const faqData = [
  {
    id: 1,
    question: 'What is Flowvahub?',
    answer:
      'Flowvahub is a comprehensive platform designed to help you manage your tools, subscriptions, and daily habits while earning rewards for your productivity.',
  },
  {
    id: 2,
    question: 'Is my data secure with Flowva?',
    answer:
      'Yes, we use industry-standard encryption and security measures to ensure your data is protected at all times.',
  },
  {
    id: 3,
    question: 'How does team collaboration work?',
    answer:
      'Our team collaboration features allow you to share tools, manage subscriptions together, and coordinate workflows seamlessly with your team members.',
  },
  {
    id: 4,
    question: 'How do Smart Tool Recommendations work?',
    answer:
      'The more you use our platform, the better it understands your workflow — giving you smarter, more relevant tool suggestions over time.',
    defaultOpen: true,
  },
  {
    id: 5,
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Absolutely! You can cancel your subscription at any time without any penalties or hidden fees.',
  },
  {
    id: 6,
    question: 'Can I manage all my subscriptions in one place?',
    answer:
      'Yes, Flowva centralizes all your subscriptions, making it easy to track, manage, and optimize your spending in one dashboard.',
  },
  {
    id: 7,
    question: 'Do you offer mobile apps?',
    answer:
      'Yes, we offer mobile apps for both iOS and Android, so you can manage your productivity on the go.',
  },
  {
    id: 8,
    question: 'What if I need help getting started?',
    answer:
      'We provide comprehensive onboarding guides, video tutorials, and 24/7 customer support to help you get started quickly.',
  },
  {
    id: 9,
    question: 'Can I connect with other tech professionals on Flowva?',
    answer:
      'Yes, our platform includes networking features that allow you to connect, collaborate, and share insights with other professionals.',
  },
  {
    id: 10,
    question: 'What rewards can I earn with Flowva?',
    answer:
      'You can earn points for consistent usage, referrals, and achieving productivity milestones, which can be redeemed for discounts, premium features, and more.',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <div
        className={`w-full ${isOpen ? 'ant-collapse-item-active' : ''}`}
        style={{
          marginBottom: '8px',
          background: 'rgb(249, 249, 249)',
          borderRadius: '12px',
          border: 'none',
          padding: '12px 16px',
        }}
      >
        <div
          className="flex items-center gap-3 cursor-pointer"
          role="button"
          aria-expanded={isOpen}
          aria-disabled="false"
          tabIndex="0"
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <div className="shrink-0">
            <span
              role="img"
              aria-label="caret-right"
              className="anticon anticon-caret-right ant-collapse-arrow"
            >
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="caret-right"
                width="1.2em"
                height="1.2em"
                fill="currentColor"
                aria-hidden="true"
                style={{
                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
              </svg>
            </span>
          </div>
          <span className="flex-1 font-semibold text-[20px] md:text-[24px] text-left">
            {question}
          </span>
        </div>

        <div
          style={{
            height: `${height}px`,
            overflow: 'hidden',
            transition: 'height 0.3s ease',
          }}
        >
          <div ref={contentRef} className="pl-8">
            <p className="text-black text-[16px] md:text-[20px] pt-3">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQS = () => {
  const [openItems, setOpenItems] = useState(
    faqData.reduce((acc, faq) => {
      if (faq.defaultOpen) {
        acc[faq.id] = true;
      }
      return acc;
    }, {})
  );

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="flex justify-center my-20 px-3.5">
      <div className="w-full md:max-w-[80%]">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          NEED ANSWERS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-manrope">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems[faq.id] || false}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
