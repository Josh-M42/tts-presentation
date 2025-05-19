export function SlideOne() {
  return (
    <>
      <section className="bg-brand slide-enter flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col justify-evenly items-start h-[30vh] w-[60vw] max-w-[50vw] bg-secondary rounded-lg px-8">
          <h2 className="text-9xl font-bold text-black font-mono">
            TEXT-TO-SPEECH
          </h2>
          <h3 className="text-3xl 3xl:text-5xl font-mono font-bold text-black pl-2">
            Third-party, fine-tuning, and from-scratch
          </h3>
        </div>
      </section>
    </>
  );
}
