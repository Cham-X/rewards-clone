import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-black grid place-items-center rounded-tl-2xl md:rounded-tl-2xl rounded-tr-4xl pb-14">
      <div class="bg-[#FFFFFF0D] w-full max-w-186.25 grid place-items-center pb-10 rounded-bl-4xl rounded-br-4xl">
        <img src="/assets/flowva_icon_white.svg" alt="flowva logo" class="mt-10 md:mt-16" />

        <div class="w-full flex justify-center mt-5 ">
          <form class="relative w-full max-w-[320px] md:max-w-125.75">
            <input
              type="email"
              placeholder="Enter email address"
              required=""
              class="w-full max-w-[320px] pr-[40%] border border-[#00000014]  outline-none focus:border-[#9013FE] focus:ring-0 focus:shadow-[0_0_0_3px_rgba(144,19,254,0.1)] transition md:max-w-125.75 text-white p-4 rounded-3xl h-16 md:h-17 bg-[#FFFFFF29] "
              value=""
            />
            <button class="bg-white  hover:bg-[#b362fae3] transition-all  hover:shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] hover:transition-all ease-linear duration-200 group flex items-center hover:text-white text-black absolute p-[8px_16px] rounded-[100px] right-5 top-1/2 -translate-y-1/2">
              Submit
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                class="svg-inline--fa fa-arrow-right ml-2 group-hover:translate-x-0.75 transition-all duration-300 ease-in-out"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <p class="text-[#FFFFFF80] text-sm md:text-base mt-5 text-center">
          10,000+ end their week inspired. Join Friday Flow.
        </p>
      </div>
      <div class="flex w-full justify-start md:justify-center mt-14 px-3.5">
        <div class=" grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-8  w-full md:max-w-[80%] ">
          <div class="col-span-2 space-y-6 hidden md:block">
            <div>
              <img src="/assets/flowva_footer_icon.svg" alt="flowva logo" />
            </div>
            <p class="text-[#FFFFFF] text-sm">
              The smart way to manage your digital life and get rewarded
            </p>
            <p class="text-[#FFFFFF] text-sm">© 2025 Flowva</p>
          </div>
          <div class="col-span-1">
            <h4 class="font-semibold text-white mb-2">Hub</h4>
            <ul class="space-y-3 text-sm text-[#A5A5A5] ">
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Rewards
                </a>
              </li>
            </ul>
          </div>
          <div class="col-span-1">
            <h4 class="font-semibold text-white mb-2">Company</h4>
            <ul class="space-y-3 text-sm text-[#A5A5A5] ">
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/blog"
                  data-discover="true"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-span-1">
            <h4 class="font-semibold text-white mb-2">Support</h4>
            <ul class="space-y-3 text-sm text-[#A5A5A5] ">
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/contact"
                  data-discover="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div class="col-span-1">
            <h4 class="font-semibold text-white mb-2">Community</h4>
            <ul class="space-y-3 text-sm text-[#A5A5A5] ">
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Affiliate
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Influencer
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Referral
                </a>
              </li>
            </ul>
          </div>
          <div class="col-span-1 whitespace-nowrap">
            <h4 class="font-semibold text-white mb-2">Legal</h4>
            <ul class="space-y-3 text-sm text-[#A5A5A5] ">
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="/"
                  data-discover="true"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  class="hover:underline underline-offset-2  font-bold"
                  href="https://docs.google.com/document/d/12S_rqEERUuq_NrS2WKoG7pt_pAQqy9Q37BLxGOTMKQs/edit?usp=drivesdk"
                  target="_blanck"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:w-fit flex items-center gap-5 justify-between w-full mt-10 px-3.5">
        <a
          class="flex items-center gap-2 hover:underline underline-offset-1"
          href="https://www.facebook.com/share/1DKr8atT1i/"
          target="_blanck"
        >
          <span class="font-manrope text-[#A5A5A5] text-sm font-semibold whitespace-nowrap hidden md:block">
            Facebook
          </span>
        </a>
        <a
          class="flex items-center gap-2 hover:underline underline-offset-1"
          href="https://x.com/FlowvaHub"
          target="_blanck"
        >
          <span class="font-manrope text-[#A5A5A5] text-sm font-semibold whitespace-nowrap hidden md:block">
            X (Formerly Twitter)
          </span>
        </a>
        <a
          class="flex items-center gap-2 hover:underline underline-offset-1"
          href="https://www.instagram.com/flowvahub?igsh=MXE0cGsyMnRzc3FpeQ%3D%3D&amp;utm_source=qr"
          target="_blanck"
        >
          <span class="font-manrope text-[#A5A5A5] text-sm font-semibold whitespace-nowrap hidden md:block">
            Instagram
          </span>
        </a>
        <a
          class="flex items-center gap-2 hover:underline underline-offset-1"
          href="https://www.linkedin.com/company/flowva/"
          target="_blanck"
        >
          <span class="font-manrope text-[#A5A5A5] text-sm font-semibold whitespace-nowrap hidden md:block">
            Linkedin
          </span>
        </a>
        <a
          class="flex items-center gap-2 hover:underline underline-offset-1"
          href="https://www.tiktok.com/@flowva.hub"
          target="_blanck"
        >
          <span class="font-manrope text-[#A5A5A5] text-sm font-semibold whitespace-nowrap hidden md:block">
            Tiktok
          </span>
        </a>
      </div>
      <div class="w-full flex justify-center  px-3.5 md:hidden gap-2 mt-5 items-center">
        <p class="text-[#A5A5A5] text-sm font-semibold whitespace-nowrap mt-7">© 2025 Flowva</p>
      </div>
    </footer>
  );
};

export default Footer;
