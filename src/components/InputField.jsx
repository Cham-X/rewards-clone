const InputField = ({ id, type, label, placeholder, value, onChange, error }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-[#111827]">
        {label}
      </label>
      <div className="relative group w-full">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`peer w-full border text-base py-2.5 px-3.5 ${
            error ? 'border-red-500' : 'border-[#EDE9FE]'
          } transition-all ease-linear duration-200s rounded-md outline-none focus:border-[#9013fe]`}
          required
          value={value}
          onChange={onChange}
        />
        <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
