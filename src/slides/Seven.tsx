export function SlideSeven() {
  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col w-full h-[30vh] px-12 justify-center items-center space-y-12 text-center">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)]">
          LANGUAGES, VOICES & ACCENTS
        </h1>
        <div className="text-3xl flex flex-col space-y-8 justify-center items-center w-[30vw] whitespace-pre-wrap">
          <p>
            Text-to-speech model should work with a large number of languages
            around the world
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>
            Library of different voices for a variety of languages, genders, and
            accents
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>Accent should mimic the accent given to the model</p>
        </div>
      </div>
    </section>
  );
}
