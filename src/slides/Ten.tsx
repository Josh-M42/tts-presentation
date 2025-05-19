export function SlideTen() {
  const models = [
    {
      label: "Dia (1.6B)",
      advantages:
        "Multi-speaker generation, non-verbal tags (laugh, cheer, applause), emotion/tone control, very realistic, allows for voice-cloning",
      disadvantages:
        "No specific voices; generates a different voice every time (even when setting a seed)",
    },
    {
      label: "Sesame (1B)",
      advantages: "Flagship demo was promising; very realistic voices",
      disadvantages:
        "Only released their smallest model; no specific voices; generates a different voice each time; uses Llama backbone which isn’t Apache 2.0 or MIT despite license claims",
    },
    {
      label: "Kokoro (82M)",
      advantages: "Sounds great; extremely fast generation",
      disadvantages:
        "Sounds robotic at times\nOnly open-sourced their weights\nTraining, implementation, and fine-tuning are unclear\nOnly one decent voice",
    },
    {
      label: "Orpheus (3B)",
      advantages:
        "Realistic; supports voice-cloning, expressions, and styling via tags",
      disadvantages:
        "Generations unstable; similar to Dia; uses Llama backbone",
    },
  ];

  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[75vw] px-6">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)] mb-10 text-center tracking-wide">
          FOSS MODELS
        </h1>
        <div className="overflow-x-auto">
          <table
            className="table-fixed w-full border-separate"
            style={{ borderSpacing: "0.75rem 0.75rem" }}
          >
            <colgroup>
              <col className="w-[20%]" />
              <col className="w-[40%]" />
              <col className="w-[40%]" />
            </colgroup>
            <thead>
              <tr>
                <th></th>
                <th className="bg-[var(--color-success)] text-black text-4xl py-4 px-3 rounded-md text-center">
                  ADVANTAGES
                </th>
                <th className="bg-[var(--color-danger)] text-black text-4xl py-4 px-3 rounded-md text-center">
                  DISADVANTAGES
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map(({ label, advantages, disadvantages }) => (
                <tr key={label}>
                  <td className="bg-[var(--color-accent)] text-black text-2xl uppercase font-semibold py-4 px-3 rounded-md tracking-wide">
                    {label}
                  </td>
                  <td className="bg-white text-black text-lg leading-snug whitespace-pre-wrap py-4 px-3 rounded-md">
                    {advantages}
                  </td>
                  <td className="bg-white text-black text-lg leading-snug whitespace-pre-wrap py-4 px-3 rounded-md">
                    {disadvantages}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
