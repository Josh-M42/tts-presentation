import { 
  TitleSlide, 
  BulletSlide, 
  CodeSlide, 
  ComparisonSlide,
  ImageSlide,
  QASlide 
} from '../components/slides';

// Example presentation showing how to use all slide components
export const ExamplePresentation = [
  () => <TitleSlide 
    title="Your Title Here" 
    subtitle="Your subtitle here"
    theme="brand"
  />,
  
  () => <BulletSlide
    title="Bullet Points"
    bullets={[
      "First point",
      "Second point",
      "Third point"
    ]}
    theme="dark"
  />,
  
  () => <CodeSlide
    title="Code Example"
    code={`// Your code here
function example() {
  return "Hello World";
}`}
    language="javascript"
    theme="dark"
  />,
  
  () => <ComparisonSlide
    title="Comparison"
    leftTitle="Option A"
    leftItems={[
      "Feature 1",
      "Feature 2"
    ]}
    rightTitle="Option B"
    rightItems={[
      "Feature 1",
      "Feature 2"
    ]}
    theme="dark"
  />,
  
  () => <ImageSlide
    title="Image Slide"
    imageUrl="/path/to/your/image.png"
    caption="Optional caption"
    theme="dark"
  />,
  
  () => <QASlide theme="brand" />
];