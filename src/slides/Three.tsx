export function SlideThree() {
  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col w-full h-[30vh] px-12 justify-center items-center space-y-12 text-center">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)]">
          QUALITY & REALISM
        </h1>
        <div className="text-3xl flex flex-col space-y-8 justify-center items-center w-[30vw] whitespace-pre-wrap">
          <p>
            Voice should be lifelike and mimic a professional human narrator
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>
            Model should embody correct emotion, intonation, pitch, pauses, and
            be context-aware
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>
            Users should not be able to tell the voice is artificially generated
          </p>
        </div>
      </div>
    </section>
  );
}
