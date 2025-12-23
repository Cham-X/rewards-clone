import { useState, useEffect } from 'react';

const StarRating = () => (
  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 26, 52, 78, 104].map((offset) => (
      <path
        key={offset}
        d={`M${9.99675 + offset} 1.04199C${10.8711 + offset} 1.04199 ${11.5599 + offset} 1.70244 ${
          11.9996 + offset
        } 2.59359L${13.468 + offset} 5.55463C${13.5125 + offset} 5.64627 ${
          13.618 + offset
        } 5.77531 ${13.7767 + offset} 5.89336C${13.9352 + offset} 6.01128 ${
          14.0905 + offset
        } 6.07634 ${14.1926 + offset} 6.0935L${16.8506 + offset} 6.53876C${
          17.8107 + offset
        } 6.70011 ${18.6155 + offset} 7.17074 ${18.8767 + offset} 7.99024C${
          19.1378 + offset
        } 8.80907 ${18.7553 + offset} 9.66 ${18.0649 + offset} 10.3517L${
          18.0642 + offset
        } 10.3524L${15.9993 + offset} 12.4344C${15.9174 + offset} 12.5169 ${
          15.8257 + offset
        } 12.6723 ${15.7682 + offset} 12.8749C${15.7111 + offset} 13.076 ${
          15.7061 + offset
        } 13.2592 ${15.732 + offset} 13.3776L${15.7323 + offset} 13.3793L${
          16.3231 + offset
        } 15.9548C${16.5681 + offset} 17.0268 ${16.4869 + offset} 18.0898 ${
          15.7309 + offset
        } 18.6455C${14.9723 + offset} 19.2031 ${13.9356 + offset} 18.9559 ${
          12.9938 + offset
        } 18.395L${10.5021 + offset} 16.9078C${10.3975 + offset} 16.8453 ${
          10.2178 + offset
        } 16.7947 ${10.0009 + offset} 16.7947C${9.78561 + offset} 16.7947 ${
          9.60214 + offset
        } 16.8447 ${9.4907 + offset} 16.9095L${9.48912 + offset} 16.9104L${
          7.0024 + offset
        } 18.3947C${6.06171 + offset} 18.9575 ${5.02628 + offset} 19.2003 ${
          4.26759 + offset
        } 18.6422C${3.51208 + offset} 18.0863 ${3.42678 + offset} 17.0254 ${
          3.67259 + offset
        } 15.9543L${4.26325 + offset} 13.3793L${4.26361 + offset} 13.3776C${
          4.28951 + offset
        } 13.2592 ${4.28444 + offset} 13.076 ${4.22733 + offset} 12.8749C${
          4.16983 + offset
        } 12.6723 ${4.07815 + offset} 12.5169 ${3.99631 + offset} 12.4344L${
          1.92988 + offset
        } 10.3509C${1.24387 + offset} 9.65919 ${0.862672 + offset} 8.809 ${
          1.12162 + offset
        } 7.99137C${1.38133 + offset} 7.17136 ${2.18452 + offset} 6.70016 ${
          3.14528 + offset
        } 6.53871L${5.8011 + offset} 6.09382L${5.80194 + offset} 6.09367C${
          5.89931 + offset
        } 6.07678 ${6.05225 + offset} 6.01246 ${6.2104 + offset} 5.89423C${
          6.36884 + offset
        } 5.77578 ${6.47466 + offset} 5.64645 ${6.51927 + offset} 5.55463L${
          6.52151 + offset
        } 5.55005L${7.98802 + offset} 2.5928L${7.9886 + offset} 2.59164C${
          8.43247 + offset
        } 1.70122 ${9.12336 + offset} 1.04199 ${9.99675 + offset} 1.04199Z`}
        fill="#141B34"
      />
    ))}
  </svg>
);

const testimonials = [
  {
    id: 1,
    text: "Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools everything's clear, organized, and right there. Feels less like searching, more like unlocking possibilities. ☕💜",
    name: 'Ummaratu M.',
    role: 'Freelancer & Virtual Assistant',
    bgColor: 'rgb(93, 206, 255)',
  },
  {
    id: 2,
    text: "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I'd marry it",
    name: 'Adewale O.',
    role: 'Freelancer & Digital Creator',
    bgColor: 'rgb(247, 255, 93)',
  },
  {
    id: 3,
    text: "Didn't even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That's the kind of motivation I need.",
    name: 'Lois E.',
    role: 'Social media manager',
    bgColor: 'rgb(237, 133, 249)',
  },
  {
    id: 4,
    text: 'The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!',
    name: 'Stella R.',
    role: 'Trainee at Digital Witch Community',
    bgColor: 'rgb(96, 255, 93)',
  },
  {
    id: 5,
    text: 'My favorite feature is subscription management — it helps me avoid wasting money and makes sure every penny counts.',
    name: 'Uchechukwu P.',
    role: 'Freelancer',
    bgColor: 'rgb(93, 255, 233)',
  },
];

const TestimonialCard = ({ text, name, role, bgColor }) => (
  <div
    className="p-6 rounded-xl shadow-md flex flex-col justify-between h-full min-h-147.5"
    style={{ backgroundColor: bgColor }}
  >
    <p className="text-[24px] font-semibold mb-4 font-manrope">{text}</p>
    <div>
      <StarRating />
      <div className="mt-4">
        <h4 className="font-semibold text-[28px]">{name}</h4>
        <p className="text-[20px]">{role}</p>
      </div>
    </div>
  </div>
);

const JoinCommunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleTestimonials = () => {
    const testimonialsCopy = [...testimonials, ...testimonials];
    return testimonialsCopy.slice(currentIndex, currentIndex + 4);
  };

  return (
    <section className="mb-16 px-3.5">
      <div className="flex justify-center">
        <svg
          width="73"
          height="51"
          viewBox="0 0 73 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.3275 8.59811C24.8945 7.27805 21.9922 13.7634 21.9922 13.7634C21.9922 13.7634 15.8152 10.2518 10.6035 15.7135C4.29112 22.3286 9.00907 38.5919 30.4172 39.486C47.1481 26.0999 41.3302 10.1969 32.3275 8.59811Z"
            stroke="#141B34"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M51.5082 11.8063C51.5278 11.8317 51.5469 11.8567 51.5657 11.8814C51.5938 11.8684 51.6225 11.8553 51.6516 11.8422C52.367 11.5191 53.3873 11.146 54.6095 10.9494C57.0896 10.5504 60.3684 10.8912 63.4954 13.7232C67.3936 17.2538 68.1628 23.5668 65.2679 29.1475C62.3396 34.7924 55.7171 39.7049 44.7588 40.9448L44.2939 40.9974L43.9083 40.7324C34.8198 34.4857 31.2847 27.0364 31.3543 20.6775C31.4231 14.391 35.0702 9.18095 40.1707 7.89782C44.262 6.86855 47.316 8.10946 49.3174 9.6277C50.3036 10.3759 51.0288 11.1849 51.5082 11.8063Z"
            fill="#9013FE"
          />
        </svg>
      </div>

      <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
        JOIN A GROWING COMMUNITY
      </h2>

      <div className="flex justify-center">
        <div className="w-full md:max-w-[80%]">
          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-7.5"
              style={{
                transform: `translateX(-${(currentIndex % testimonials.length) * (100 / 4)}%)`,
              }}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="min-w-[calc(25%-22.5px)]">
                  <TestimonialCard
                    text={testimonial.text}
                    name={testimonial.name}
                    role={testimonial.role}
                    bgColor={testimonial.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % testimonials.length
                    ? 'bg-black w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
