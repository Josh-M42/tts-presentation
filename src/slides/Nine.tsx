export function SlideNine() {
  const methods = [
    {
      label: "Out-Of-The-Box",
      advantages: "Simple and quick deployment",
      disadvantages:
        "Most OS models feel incomplete (e.g. missing voice-pinning, style configuration, inconsistent generations, etc.)",
    },
    {
      label: "Fine-Tuning",
      advantages: "Alleviates many issues seen in OOTB disadvantages",
      disadvantages:
        "Many OS TTS models only open-sourced their weights, while architecture and implementation details are missing, making fine-tuning tricky\nIncreased complexity and upfront costs",
    },
    {
      label: "From-Scratch",
      advantages:
        "Allows for maximum personalization and customization (emotion/style tokens/prompting, our own proprietary voices that fit what we’re looking for; unlimited languages & accents)",
      disadvantages:
        "Most complex; no guarantee of quality results; expensive upfront costs",
    },
  ];

  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[75vw] px-6">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)] mb-10 text-center tracking-wide">
          SELF-HOSTED
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
              {methods.map(({ label, advantages, disadvantages }) => (
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
