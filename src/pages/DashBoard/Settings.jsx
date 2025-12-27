const Settings = () => {
  return (
    <div className="lg:h-[calc(100vh-99px)] my-3 [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto">
      <div className="grid md:grid-cols-[1fr_1fr] gap-[1.5rem]">
        {/* Profile Information */}
        <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-[1.5rem] rounded-[12px] border border-[#E2E8F0]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-[1.1rem] flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                className="mr-3 text-[#9013FE]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                />
              </svg>
              Profile Information
            </h2>
          </div>

          {/* Avatar */}
          <div className="md:flex items-center mb-[1rem] gap-[1.5rem] w-full">
            <div className="flex justify-center md:block">
              <div className="w-[80px] h-[80px] cursor-pointer rounded-full flex items-center mb-[1.5rem] xl:mb-0 justify-center overflow-hidden bg-[#E9D4FF]">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocKEPMw1OIlnO52rggGz1vLFMf5mt-7s8ggpEDVL5gIUuleRAnU=s400-c"
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Upload / Remove */}
            <div className="grid grid-cols-[1fr_1fr] gap-[0.75rem] w-full">
              <button className="inline-flex items-center justify-center px-4 py-3 rounded-[8px] text-[0.9rem] font-medium transition-all duration-300 ease-in-out text-white bg-[#9013FE] hover:bg-[#7c0fe0] hover:translate-y-[-2px] shadow-[0_4px_8px_rgba(144,_19,_254,_0.2)]">
                Upload
              </button>

              <button className="inline-flex items-center justify-center px-4 py-3 rounded-[8px] text-[0.9rem] font-medium transition-all duration-300 ease-in-out bg-transparent border border-[#E2E8F0] text-[#2D3748] hover:bg-[#F7FAFC] hover:translate-y-[-2px] hover:border-[#E9D4FF]">
                Remove
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-[1rem]">
            <div className="flex gap-[1rem]">
              <div className="w-full">
                <label htmlFor="firstName" className="text-[0.9rem] mb-[0.5rem] block">
                  First Name
                </label>
                <input
                  id="firstName"
                  defaultValue="Hjjjj"
                  className="w-full rounded-[8px] p-[0.75rem] text-[0.9rem] border border-[#E2E8F0] outline-none focus:border-[#9013fe]"
                />
              </div>

              <div className="w-full">
                <label htmlFor="lastName" className="text-[0.9rem] mb-[0.5rem] block">
                  Last Name
                </label>
                <input
                  id="lastName"
                  className="w-full rounded-[8px] p-[0.75rem] text-[0.9rem] border border-[#E2E8F0] outline-none focus:border-[#9013fe]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-[0.9rem] mb-[0.5rem] block">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value="zakariyyahshamsudeen@gmail.com"
                readOnly
                disabled
                className="w-full rounded-[8px] p-[0.75rem] text-[0.9rem] border border-[#E2E8F0]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-3 rounded-[8px] text-[0.9rem] font-medium text-white bg-[#9013FE] hover:bg-[#7c0fe0] hover:translate-y-[-2px] shadow-[0_4px_8px_rgba(144,_19,_254,_0.2)]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
