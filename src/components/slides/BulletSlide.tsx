interface BulletSlideProps {
  title: string;
  bullets: string[];
  theme?: 'dark' | 'light';
}

export function BulletSlide({ title, bullets, theme = 'dark' }: BulletSlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <section className={`${bgClass} slide-enter flex justify-center items-center h-screen w-screen`}>
      <div className="flex flex-col items-start justify-start max-w-[90vw]">
        <h2 className={`text-7xl 3xl:text-9xl font-mono font-bold ${textClass} mb-8`}>
          {title}
        </h2>
        <ul className={`bullet-list ${textClass}`}>
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}