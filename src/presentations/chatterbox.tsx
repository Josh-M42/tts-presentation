import { 
  TitleSlide, 
  BulletSlide, 
  CodeSlide, 
  ComparisonSlide,
  ImageSlide,
  QASlide 
} from '../components/slides';

export const ChatterboxPresentation = [
  () => <TitleSlide 
    title="CHATTERBOX" 
    subtitle="Open-source TTS that beats ElevenLabs"
  />,
  
  () => <BulletSlide
    title="What is Chatterbox?"
    bullets={[
      "First production-grade open source TTS by Resemble AI",
      "MIT licensed - completely free to use",
      "0.5B parameter Llama-based model",
      "Trained on 500,000 hours of curated audio",
      "63.75% preference over ElevenLabs in blind tests"
    ]}
  />,
  
  () => <BulletSlide
    title="Key Features"
    bullets={[
      "🎭 Emotion exaggeration control (first in open source!)",
      "🎯 Zero-shot voice cloning (5 seconds of audio)",
      "⚡ Sub-200ms latency for real-time applications",
      "🛡️ Built-in Perth watermarking for responsible AI",
      "🔊 Ultra-stable alignment-informed inference"
    ]}
  />,
  
  () => <CodeSlide
    title="Installation & Basic Usage"
    code={`pip install chatterbox-tts

# Basic usage
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")
text = "Hello from Chatterbox TTS!"
wav = model.generate(text)
ta.save("output.wav", wav, model.sr)`}
  />,
  
  () => <CodeSlide
    title="Voice Cloning"
    code={`# Clone any voice with just 5 seconds of audio
AUDIO_PROMPT_PATH = "reference_voice.wav"

wav = model.generate(
    text="This will sound like the reference voice",
    audio_prompt_path=AUDIO_PROMPT_PATH
)

ta.save("cloned_voice.wav", wav, model.sr)`}
  />,
  
  () => <CodeSlide
    title="Emotion Control"
    code={`# Control emotion intensity
wav = model.generate(
    text="I'm so excited about this!",
    exaggeration=0.8,  # 0=monotone, 1=very expressive
    cfg_weight=0.3     # Lower for dramatic speech
)

# Tips:
# - Default: exaggeration=0.5, cfg_weight=0.5
# - For drama: exaggeration=0.7+, cfg_weight=0.3
# - For fast speakers: lower cfg_weight`}
  />,
  
  () => <ComparisonSlide
    title="Chatterbox vs ElevenLabs"
    leftTitle="Chatterbox"
    leftItems={[
      "✅ Free & open source (MIT)",
      "✅ Emotion control",
      "✅ No API limits",
      "✅ Run locally",
      "✅ Watermarked outputs"
    ]}
    rightTitle="ElevenLabs"
    rightItems={[
      "❌ Paid API ($$$)",
      "❌ No emotion control",
      "❌ Rate limits",
      "❌ Cloud-only",
      "❌ No watermarking"
    ]}
  />,
  
  () => <BulletSlide
    title="My Voice Library Project"
    theme="light"
    bullets={[
      "Building a curated voice library for Chatterbox",
      "Using GigaSpeech dataset (thousands of audiobook narrators)",
      "Gender detection model to filter female voices",
      "Voice embeddings + clustering to find unique speakers",
      "Automated pipeline: filter → embed → cluster → export"
    ]}
  />,
  
  () => <CodeSlide
    title="Voice Clustering Pipeline"
    code={`# Key components of my pipeline:
embedder = Inference("pyannote/embedding", device=device)
gender_cls = AutoModelForAudioClassification.from_pretrained(
    "alefiury/wav2vec2-large-xlsr-53-gender-recognition-librispeech"
)

# Process: Extract embeddings → Cluster similar voices
clustering = AgglomerativeClustering(
    metric="cosine", 
    distance_threshold=0.15
).fit(voice_embeddings)

# Result: Unique voice clusters for TTS training`}
  />,
  
  () => <BulletSlide
    title="Use Cases"
    bullets={[
      "🎮 Game character voices",
      "🤖 AI agents and assistants",
      "📹 Video narration and content creation",
      "🎙️ Podcast production",
      "📚 Audiobook generation",
      "😂 Memes and entertainment"
    ]}
  />,
  
  () => <BulletSlide
    title="Resources"
    bullets={[
      "GitHub: github.com/resemble-ai/chatterbox",
      "Demo: huggingface.co/spaces/ResembleAI/Chatterbox",
      "Discord: Community support and updates",
      "Perth Watermarker: github.com/resemble-ai/perth",
      "My voice library: Coming soon!"
    ]}
  />,
  
  () => <QASlide />
];