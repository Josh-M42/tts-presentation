interface ComparisonSlideProps {
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  theme?: 'dark' | 'light';
}

export function ComparisonSlide({ 
  title, 
  leftTitle, 
  leftItems, 
  rightTitle, 
  rightItems,
  theme = 'dark' 
}: ComparisonSlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <section className={`${bgClass} slide-enter flex flex-col justify-center items-center h-screen w-screen`}>
      <h2 className={`text-6xl 3xl:text-8xl font-mono font-bold ${textClass} mb-12`}>
        {title}
      </h2>
      <div className="flex flex-row justify-center items-start gap-16 max-w-[90vw]">
        <div className="flex-1">
          <h3 className={`text-4xl font-mono font-bold ${textClass} mb-6 text-center`}>
            {leftTitle}
          </h3>
          <ul className={`bullet-list ${textClass}`}>
            {leftItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className={`text-4xl font-mono font-bold ${textClass} mb-6 text-center`}>
            {rightTitle}
          </h3>
          <ul className={`bullet-list ${textClass}`}>
            {rightItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}