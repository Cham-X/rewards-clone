const AnimatedSection = ({ active, children }) => {
  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12.5'}
      `}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
