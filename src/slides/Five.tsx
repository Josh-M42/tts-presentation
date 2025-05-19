export function SlideFive() {
  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col w-full h-[30vh] px-12 justify-center items-center space-y-12 text-center">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)] leading-tight">
          HIGH-THROUGHPUT &<br />
          CONCURRENCY
        </h1>
        <div className="text-3xl flex flex-col space-y-8 justify-center items-center w-[30vw] whitespace-pre-wrap">
          <p>Handle many parallel requests</p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>Maintain reasonable price-per-token costs</p>
          <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
          <p>Support various request formats (bulk vs. real-time)</p>
        </div>
      </div>
    </section>
  );
}
