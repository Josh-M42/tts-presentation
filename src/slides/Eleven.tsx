import React from "react";
export function SlideEleven() {
  const features = [
    "Research-grade end-to-end speech toolkit built on PyTorch",
    "Fully configurable via YAML/JSON recipes; abstracts away boilerplate training code",
    "Scalable training: single-GPU, multi-GPU, mixed precision, and distributed setups",
    "Production-ready recipes for TTS, ASR, ST, voice conversion, speech enhancement, speaker diarization",
    "Extensible modular design: plug in custom architectures, loss functions, and data pipelines",
  ];

  return (
    <section className="bg-brand slide-enter h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex flex-col w-full h-[30vh] px-12 justify-center items-center space-y-12 text-center">
        <h1 className="text-9xl font-bold font-mono text-[var(--color-primary)]">
          ESPnet
        </h1>
        <div className="text-3xl flex flex-col space-y-8 justify-center items-center w-[30vw] whitespace-pre-wrap">
          {features.map((text, i) => (
            <React.Fragment key={i}>
              <p>{text}</p>
              {i < features.length - 1 && (
                <hr className="border-dotted border-[var(--color-primary)] border-2 w-[15vw]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
