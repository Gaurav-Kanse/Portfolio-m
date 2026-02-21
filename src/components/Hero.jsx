import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Instagram,
} from "lucide-react";

const roles = [
  "Ml Engineer",
  "React Engineer",
  "3D Artist",
  "Tech Enthusiast",
  "Python Developer",
  "UI/UX Designer",
  "Full-Stack Creator",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const canvasRef = useRef(null);

  /* ---------------- Cursor Blink ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Typewriter ---------------- */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));

        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  /* ---------------- Matrix Background ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const chars =
      "01{}[]<>/*#=+-;:.abcdefghijklmnopqrstuvwxyz";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Pure white fade background
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char =
          chars[Math.floor(Math.random() * chars.length)];

        // Darker characters for better visibility
        ctx.fillStyle = "rgba(0,0,0,0.65)";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.96
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden bg-white text-black">

      {/* Matrix Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
      />
      {/* Top-left Dev Comment */}
        <div className="absolute top-24 left-6 md:left-10 z-10 hidden md:block">
            <p className="font-mono text-xs text-black/60 leading-relaxed font-medium">
                // portfolio.jsx
                <br />
                // version: 3.0.0
                <br />
                // status: production
                <br />
                // last_build: 2026-02-21
            </p>
        </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">

        {/* Availability Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-black bg-white">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-mono text-xs tracking-widest uppercase">
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(48px,10vw,130px)] font-black leading-[0.85]">
          Gaurav Kanse
          <br />
          <span className="text-black/20">Developer.</span>
        </h1>

        {/* Typewriter Role */}
        <div className="mt-6 h-8 flex items-center justify-center">
          <span className="font-mono text-sm tracking-widest text-black/50">
            {"< "}
          </span>

          <span className="font-mono text-sm tracking-wide text-black/80">
            {displayText}
          </span>

          <span
            className={`font-mono ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>

          <span className="font-mono text-sm tracking-widest text-black/50">
            {" />"}
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mt-10">
          {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
            <div
              key={i}
              className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_black] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all cursor-pointer"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom-right Dev Stats */}
        <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-black/70 text-right leading-relaxed font-medium">
            <p>const experience = "1 year Freelance";</p>
            <p>const projects = 10+;</p>
            <p>const passion = Infinity;</p>
        </div>
        </div>
      {/* Scroll Indicator */}
      <ChevronDown className="absolute bottom-10 animate-bounce text-black/30" />
    </section>
  );
}