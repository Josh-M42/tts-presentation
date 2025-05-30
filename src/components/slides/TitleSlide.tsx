interface TitleSlideProps {
  title: string;
  subtitle?: string;
  theme?: 'brand' | 'dark' | 'light';
}

export function TitleSlide({ title, subtitle, theme = 'brand' }: TitleSlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : theme === 'light' ? 'bg-light' : 'bg-brand';
  
  return (
    <section className={`${bgClass} slide-enter flex justify-center items-center h-screen w-screen`}>
      <div className="flex flex-col justify-evenly items-start h-[30vh] w-[60vw] max-w-[50vw] bg-secondary rounded-lg px-8">
        <h2 className="text-9xl font-bold text-black font-mono">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-3xl 3xl:text-5xl font-mono font-bold text-black pl-2">
            {subtitle}
          </h3>
        )}
      </div>
    </section>
  );
}