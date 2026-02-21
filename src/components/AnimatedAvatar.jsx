import { useState } from "react";

export default function AnimatedAvatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 shrink-0 group">

      {/* Offset Shadow Frame */}
      <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

      {/* Main Frame */}
      <div className="relative w-full h-full border-2 border-black bg-white overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">

        {/* Floating Image Wrapper */}
        <div className="w-full h-full animate-[float_6s_ease-in-out_infinite]">

          {!imageError ? (
            <img
              src="https://i.ibb.co/20jtF9Lm/Chat-GPT-Image-Feb-14-2026-10-13-36-PM.png"
              alt="Gaurav Kanse"
              className="w-full h-full object-cover object-top"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-sm">
              Image
            </div>
          )}

        </div>

        {/* Subtle Scan Line Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)",
          }}
        />

      </div>

      {/* Status Badge */}
      <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-black z-10">
        <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
        Available
      </div>

    </div>
  );
}