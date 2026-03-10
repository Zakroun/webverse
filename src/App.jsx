import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  useEffect(() => {
    const handleMove = (e) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = e.clientX + "px";
        cursorRingRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div className="App">
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}