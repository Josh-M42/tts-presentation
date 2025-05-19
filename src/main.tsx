import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  useLocation,
} from "react-router";

import "./App.css"; /* <-- the file above */
import { SlideOne } from "./slides/One";
import { SlideTwo } from "./slides/Two";
import { SlideThree } from "./slides/Three";
import { SlideFour } from "./slides/Four";
import { SlideFive } from "./slides/Five";
import { SlideSix } from "./slides/Six";
import { SlideSeven } from "./slides/Seven";
import { SlideEight } from "./slides/Eight";
import { SlideNine } from "./slides/Nine";
import { SlideTen } from "./slides/Ten";
import { SlideEleven } from "./slides/Eleven";

const slides = [
  () => <SlideOne />,
  () => <SlideTwo />,
  () => <SlideThree />,
  () => <SlideFour />,
  () => <SlideFive />,
  () => <SlideSix />,
  () => <SlideSeven />,
  () => <SlideEight />,
  () => <SlideNine />,
  () => <SlideTen />,
  () => <SlideEleven />,
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
