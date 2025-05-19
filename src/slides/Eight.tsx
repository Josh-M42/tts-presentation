export function SlideEight() {
  const providers = ["ElevenLabs", "Hume AI", "OpenAI"];
  const rows = [
    {
      label: "REALISM",
      values: ["5/5\nGOLD-STANDARD", "4/5\nHigh-quality", "4/5\nHigh-quality"],
    },
    {
      label: "CONCURRENCY",
      values: [
        "1/5\n~15 parallel requests",
        "1/5\n100 requests/min",
        "5/5\nOnly limited by API quota",
      ],
    },
    {
      label: "CONTROL",
      values: [
        "2/5\nLimited (pace, style, pronunciation",
        "5/5\nEmotion, style, prompting\n(context-aware)",
        "4/5\nAccent, pitch, style,\nemotion via text prompts",
      ],
    },
    {
      label: "VOICES",
      values: [
        "4/5\n29 languages, largest voice + accent library",
        "1/5\nEnglish-only, moderate library",
        "3/5\n50+ languages, 11 voices\n(promptable accents)",
      ],
    },
    {
      label: "PRICING",
      values: [
        "$1,320/22M tokens monthly\n---\n$60/million overage",
        "$900/10M tokens monthly\n---\n$10/million overage",
        "$0 monthly\n---\n$20/million overage",
      ],
    },
  ];
  return (
    <>
      <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="w-[75vw] px-6">
          <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)] mb-10 text-center tracking-wide">
            THIRD PARTY PROVIDERS
          </h1>
          <div className="overflow-x-auto">
            <table
              className="table-fixed w-full border-separate"
              style={{ borderSpacing: "0.75rem 0.75rem" }}
            >
              <colgroup>
                <col className="w-[18%]" />

                <col className="" />
                <col className="" />
                <col className="" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  {providers.map((p) => (
                    <th
                      key={p}
                      className="bg-(--color-secondary) text-black text-4xl py-4 px-3 rounded-md"
                    >
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, values }) => (
                  <tr key={label}>
                    <td className="bg-(--color-accent) text-black text-2xl uppercase font-semibold py-4 px-3 rounded-md tracking-wide">
                      {label}
                    </td>
                    {values.map((txt, i) => (
                      <td
                        key={i}
                        className="bg-white text-black text-lg leading-snug whitespace-pre-wrap py-4 px-3 rounded-md"
                      >
                        {txt}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
