interface CodeSlideProps {
  title: string;
  code: string;
  language?: string;
  theme?: 'dark' | 'light';
}

export function CodeSlide({ title, code, language = 'python', theme = 'dark' }: CodeSlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  const codeBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  
  return (
    <section className={`${bgClass} slide-enter flex justify-center items-center h-screen w-screen`}>
      <div className="flex flex-col items-start justify-start max-w-[90vw] w-[90vw]">
        <h2 className={`text-6xl 3xl:text-8xl font-mono font-bold ${textClass} mb-8`}>
          {title}
        </h2>
        <pre className={`${codeBgClass} p-6 rounded-lg overflow-x-auto w-full`}>
          <code className={`font-mono text-xl ${textClass}`}>{code}</code>
        </pre>
      </div>
    </section>
  );
}