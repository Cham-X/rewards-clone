import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const navItems = [
  { id: 1, label: 'Hub', hasDropdown: true },
  { id: 2, label: 'Company', hasDropdown: true },
  { id: 3, label: 'Support', hasDropdown: true },
  { id: 4, label: 'Community', hasDropdown: true },
];

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="cursor-pointer relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="flex items-center gap-1 hover:text-[#9013fe] text-[#A5A5A5] transition-colors">
        {item.label}
        {item.hasDropdown && (
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </span>
    </li>
  );
};

const Logo = ({ size = 'default' }) => {
  const sizeClasses = size === 'mobile' ? 'w-12 h-12 -mt-[3px]' : 'w-8 -mt-1';

  return (
    <div className="flex gap-1.5 items-center">
      <img src="/assets/flowva_icon-DYe7ga1V.png" className={sizeClasses} alt="Flowva logo" />
    </div>
  );
};

const AuthButtons = () => {
  return (
    <div className="w-48.75 font-manrope flex items-center gap-8 h-10">
      <button className="w-21 h-10 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1">
        <div className="h-full w-full flex justify-center items-center px-4 transition-all ease-linear duration-200 rounded-[100px] bg-white hover:bg-[#111111] hover:shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] hover:text-white relative shadow-[0px_2px_4px_0px_#0000001A]">
          <a href="/sign-in">Login</a>
        </div>
      </button>

      <button className="w-21 font-manrope h-10 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1">
        <div className="h-full flex items-center justify-center w-full whitespace-nowrap px-4 rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
          <a href="/sign-up">Sign up</a>
        </div>
      </button>
    </div>
  );
};

const Divider = () => <div className="border h-7 mx-5 border-[#0000000D] w-0" />;

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center w-full">
      <div className="w-full font-semibold text-sm flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex gap-1.5 items-center">
            <Logo />
          </div>
          <Divider />

          <ul className="flex items-center gap-6 relative">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <Divider />
      <AuthButtons />
    </div>
  );
};

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:hidden flex justify-between items-center w-full relative">
      {/* Logo */}
      <Logo size="mobile" />

      {/* Menu button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 17H19M5 12H19M5 7H19"
            stroke="#141B34"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Accordion Menu */}
      {isMenuOpen && (
        <aside className="absolute top-17.5 left-0 right-0 bg-white border border-[#0000000D] rounded-2xl mx-3.5 p-4 shadow-lg z-50">
          <div className="space-y-4">
            {navItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id}>
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-[32px] font-semibold font-[impact]">{item.label}</span>
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {/* Optional dropdown content */}
                  {isOpen && (
                    <div className="mt-3 pl-2 text-sm text-[#A5A5A5]">
                      {/* Add submenu links here later */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Auth buttons */}
          <div className="flex mt-5 items-center gap-3 flex-col">
            <button className="w-full h-14.25 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1">
              <span className="h-full flex justify-center items-center w-full p-[6px_16px] hover:bg-[#111111] hover:shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] hover:text-white rounded-[100px] relative shadow-[0px_2px_4px_0px_#0000001A]">
                <a href="/sign-in">Login</a>
              </span>
            </button>

            <button className="w-full h-14.25 text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-1">
              <span className="h-full flex justify-center items-center w-full whitespace-nowrap p-[6px_16px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                <a href="/sign-up">Sign up</a>
              </span>
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="left-1/2 right-1/2 -translate-x-1/2 md:border bg-white relative top-2.5 md:top-5 md:w-full font-manrope md:max-w-[80%] md:border-[#0000000D] rounded-[100px] h-14 py-2 px-3.5">
      <nav className="flex items-center w-full">
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
