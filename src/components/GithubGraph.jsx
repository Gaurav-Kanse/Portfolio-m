import React, { useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubGraph = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      // Small timeout ensures calendar finishes rendering
      setTimeout(() => {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth;
      }, 100);
    }
  }, []);

  return (
    <div className="border-4 border-black p-6 bg-white text-black hover:shadow-[8px_8px_0px_black] transition-all duration-300">
      <h3 className="font-mono text-xl font-bold mb-6 border-b-2 border-black pb-2 uppercase tracking-tight">
        GitHub Activity_
      </h3>

      <div
        ref={scrollRef}
        className="flex justify-start overflow-x-auto pb-4"
      >
        <GitHubCalendar
          username="Gaurav-Kanse"
          blockSize={13}
          blockMargin={4}
          fontSize={12}
          colorScheme="light"
          style={{ fontFamily: "monospace" }}
          theme={{
            light: [
              "#f5f5f5",
              "#d4d4d4",
              "#a3a3a3",
              "#525252",
              "#000000",
            ],
          }}
        />
      </div>

      <div className="mt-3 text-right font-mono text-xs text-black/60">
        // showing latest contributions
      </div>
    </div>
  );
};

export default GithubGraph;