interface ImageSlideProps {
  title?: string;
  imageUrl: string;
  caption?: string;
  theme?: 'dark' | 'light';
}

export function ImageSlide({ title, imageUrl, caption, theme = 'dark' }: ImageSlideProps) {
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <section className={`${bgClass} slide-enter flex flex-col justify-center items-center h-screen w-screen`}>
      {title && (
        <h2 className={`text-6xl 3xl:text-8xl font-mono font-bold ${textClass} mb-8`}>
          {title}
        </h2>
      )}
      <img 
        src={imageUrl} 
        alt={caption || title || 'Slide image'} 
        className="max-h-[70vh] max-w-[90vw] object-contain"
      />
      {caption && (
        <p className={`text-2xl font-mono ${textClass} mt-6`}>
          {caption}
        </p>
      )}
    </section>
  );
}