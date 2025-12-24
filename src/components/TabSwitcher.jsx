const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="left-1/2 right-1/2 top-6.25 md:top-17.5 bg-[#F9F9F9] border border-[#0000000D] -translate-x-1/2 relative w-full max-w-66.25 h-16 flex items-center gap-2 rounded-[100px] p-2">
      <div
        className={`
    absolute top-2 h-12 w-[calc(50%-8px)] rounded-[100px] 
    transition-transform duration-300 ease-in-out 
    shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] 
    bg-[#111111]
    ${activeTab === 'users' ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'}
        ${activeTab === 'brands' && '-left-px'}
  `}
      />

      <button
        onClick={() => setActiveTab('users')}
        className="relative z-10 flex items-center justify-center w-[50%] h-12 text-sm font-bold rounded-[100px] font-manrope"
      >
        <img src="/assets/users_icon-B6c0TcgG.svg" className="w-6 mr-2" alt="users" />
        <span
          className={`
            transition-colors duration-300
            ${
              activeTab === 'users'
                ? 'bg-linear-to-r from-[#ECD6FF] to-[#FF8687] bg-clip-text text-transparent'
                : 'text-black'
            }
          `}
        >
          For users
        </span>
      </button>

      <button
        onClick={() => setActiveTab('brands')}
        className="relative z-10 flex items-center justify-center w-[50%] h-12 text-sm font-bold rounded-[100px] font-manrope"
      >
        <img src="/assets/brands-BkudvqTg.svg" className="w-6 mr-2" alt="brands" />
        <span
          className={`
            transition-colors duration-300
            ${
              activeTab === 'brands'
                ? 'bg-linear-to-r from-[#ECD6FF] to-[#FF8687] bg-clip-text text-transparent'
                : 'text-black'
            }
          `}
        >
          For brands
        </span>
      </button>
    </div>
  );
};

export default TabSwitcher;






