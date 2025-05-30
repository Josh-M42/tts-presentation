interface QASlideProps {
  theme?: 'brand' | 'dark' | 'light';
}

export function QASlide({ theme = 'brand' }: QASlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : theme === 'light' ? 'bg-light' : 'bg-brand';
  const textClass = theme === 'brand' ? 'text-black' : theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <section className={`${bgClass} slide-enter flex justify-center items-center h-screen w-screen`}>
      <h1 className={`h0 font-mono font-bold ${textClass}`}>
        Q&A
      </h1>
    </section>
  );
}