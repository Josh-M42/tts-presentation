export function SlideFour() {
  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col w-full h-[30vh] px-12 justify-center items-center space-y-12 text-center">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)]">
          CONTROLLABILITY
        </h1>
        <div className="text-3xl flex flex-col space-y-8 justify-center items-center w-[30vw] whitespace-pre-wrap">
          <p>
            Accepts natural-language style prompts (e.g. “A patient K-6
            teacher”)
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>
            Context-aware; retains conversation history for coherent responses
          </p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>
            Tone and cadence adapt to user’s emotional state (e.g. extra care
            when frustration is detected)
          </p>
        </div>
      </div>
    </section>
  );
}
