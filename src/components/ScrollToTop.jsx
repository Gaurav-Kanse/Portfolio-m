import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const size = 52;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth - 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`fixed bottom-8 left-8 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center border-2 border-black bg-white shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 rounded-full">

        <svg
          width={size}
          height={size}
          className="rotate-[-90deg]"
        >
          {/* Background Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="black"
            strokeWidth={strokeWidth}
            opacity="0.1"
          />

          {/* Progress Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="black"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp className="w-5 h-5 text-black transition-transform duration-300 group-hover:-translate-y-1" />
        </div>

      </div>
    </button>
  );
};

export default ScrollToTop;