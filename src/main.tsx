import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  useLocation,
} from "react-router";

import "./App.css";
import { TitleSlide } from "./components/slides";

// Import your presentation here
// Example: import { MyPresentation } from "./presentations/my-presentation";

// For now, showing a placeholder slide
const slides = [
  () => <TitleSlide 
    title="Welcome" 
    subtitle="Create your presentation by importing it above"
  />
];

/* ------------------------------------------------------------------ */
/* Component that sets up key-handling + renders the current slide    */
/* ------------------------------------------------------------------ */
function SlideFrame() {
  const nav = useNavigate();
  const { pathname } = useLocation(); // pathname is like "/0", "/1" …
  const index = Math.max(
    0,
    Math.min(slides.length - 1, parseInt(pathname.slice(1) || "0", 10)),
  );

  /* Keyboard navigation ------------------------------------------------ */
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const go = (i: number) => nav(`/${i}`);
      if (["Enter", "ArrowRight"].includes(e.key)) go(index + 1);
      if (["Backspace", "ArrowLeft"].includes(e.key)) go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, nav]);

  /* Render and sprinkle fade classes ---------------------------------- */
  return React.cloneElement(slides[index](), {
    className: `slide-enter`,
    key: index, // force re-mount → animation runs each time
  });
}

/* ------------------------------------------------------------------ */
/* Router config                                                      */
/* ------------------------------------------------------------------ */
const router = createBrowserRouter([
  { path: "/", element: <SlideFrame /> },
  { path: "/:id", element: <SlideFrame /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);