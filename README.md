# TTS Presentation System

A React-based presentation framework for the weekly TTS (Text-to-Speech) presentations. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📁 Project Structure

```
src/
├── components/slides/   # Reusable slide components
│   ├── TitleSlide.tsx
│   ├── BulletSlide.tsx
│   ├── CodeSlide.tsx
│   ├── ComparisonSlide.tsx
│   ├── ImageSlide.tsx
│   └── QASlide.tsx
├── presentations/       # Individual presentations
│   └── example.tsx     # Example presentation template
└── main.tsx            # Main app entry point
```

## 🎯 Branch Strategy

- **`main`** - Component library only (this branch)
- **`may-30-chatterbox`** - Chatterbox TTS presentation (May 30, 2025)
- Create new branches for each weekly presentation

## 📝 Creating a New Presentation

1. **Create a new branch from main:**
   ```bash
   git checkout main
   git pull
   git checkout -b month-day-topic
   ```

2. **Create your presentation file** in `src/presentations/`:
   ```tsx
   import { TitleSlide, BulletSlide, CodeSlide } from '../components/slides';
   
   export const MyPresentation = [
     () => <TitleSlide title="My Title" subtitle="My Subtitle" />,
     () => <BulletSlide title="Points" bullets={["Point 1", "Point 2"]} />,
     // Add more slides...
   ];
   ```

3. **Update** `src/main.tsx` to import your presentation:
   ```tsx
   import { MyPresentation } from "./presentations/my-presentation";
   const slides = MyPresentation;
   ```

4. **Run the presentation:**
   ```bash
   npm run dev
   ```

## 🎨 Available Slide Components

### TitleSlide
```tsx
<TitleSlide 
  title="Main Title" 
  subtitle="Optional Subtitle"
  theme="brand" // 'brand' | 'dark' | 'light'
/>
```

### BulletSlide
```tsx
<BulletSlide
  title="Slide Title"
  bullets={["Point 1", "Point 2", "Point 3"]}
  theme="dark" // 'dark' | 'light'
/>
```

### CodeSlide
```tsx
<CodeSlide
  title="Code Example"
  code={`function hello() {
    return "world";
  }`}
  language="javascript"
  theme="dark"
/>
```

### ComparisonSlide
```tsx
<ComparisonSlide
  title="Comparison"
  leftTitle="Option A"
  leftItems={["Feature 1", "Feature 2"]}
  rightTitle="Option B"
  rightItems={["Feature 1", "Feature 2"]}
  theme="dark"
/>
```

### ImageSlide
```tsx
<ImageSlide
  title="Optional Title"
  imageUrl="/path/to/image.png"
  caption="Optional caption"
  theme="dark"
/>
```

### QASlide
```tsx
<QASlide theme="brand" />
```

## ⌨️ Navigation

- **→** or **Enter**: Next slide
- **←** or **Backspace**: Previous slide
- **Direct URL**: `/0`, `/1`, `/2`... for specific slides

## 🎨 Theming

Built with Tailwind CSS v4 using CSS custom properties:
- **Colors**: Primary (amber), Secondary (deep orange), Accent (magenta)
- **Font**: Berkeley Mono
- **Themes**: `dark`, `light`, `brand`

## 📋 TODO

- [ ] Add transition effects between slides
- [ ] Support for speaker notes
- [ ] Export to PDF functionality
- [ ] Timer/progress indicator
- [ ] Responsive mobile view