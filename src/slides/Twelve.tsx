import React from "react";

export function SlideTwelve() {
  const qaItems = [
    {
      question: "Can we achieve ElevenLabs-level quality with our own models using ESPnet?",
      answer: "ESPnet has reproducible pre-trained models we can test. We can experiment with these existing models before building our own to evaluate quality. Models can be tested directly on Hugging Face."
    },
    {
      question: "What about data collection for building our own models?",
      answer: "Speech synthesis is one of the easier tasks for data collection. It's relatively affordable to hire voice actors or use open source audiobooks. Fine-tuning and voice cloning are typically faster and cheaper than building from scratch."
    },
    {
      question: "Should we prioritize regional accents and voices?",
      answer: "Students may engage better with voices that sound familiar to their region. This varies by demographic - some regions may prefer local voices while others might prefer 'standard' accents. This requires further testing."
    },
    {
      question: "Next steps?",
      answer: "Plan to run a simple training experiment on RunPod. Focus on basic text-to-speech without complex features. Will try to use a model that can work with our existing style tokens/annotations."
    }
  ];

  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[75vw] px-6">
        <h1 className="text-9xl uppercase font-bold font-mono text-[var(--color-primary)] mb-10 text-center tracking-wide">
          Q&A SESSION
        </h1>
        <div className="overflow-x-auto">
          <table
            className="table-fixed w-full border-separate"
            style={{ borderSpacing: "0.75rem 0.75rem" }}
          >
            <colgroup>
              <col className="w-[35%]" />
              <col className="w-[65%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="bg-[var(--color-secondary)] text-black text-4xl py-4 px-3 rounded-md text-center">
                  QUESTION
                </th>
                <th className="bg-[var(--color-secondary)] text-black text-4xl py-4 px-3 rounded-md text-center">
                  RESPONSE
                </th>
              </tr>
            </thead>
            <tbody>
              {qaItems.map(({ question, answer }, i) => (
                <tr key={i}>
                  <td className="bg-[var(--color-accent)] text-black text-xl leading-snug whitespace-pre-wrap py-4 px-3 rounded-md">
                    {question}
                  </td>
                  <td className="bg-white text-black text-lg leading-snug whitespace-pre-wrap py-4 px-3 rounded-md">
                    {answer}
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