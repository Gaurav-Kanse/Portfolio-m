import SectionBlock from "./SectionBlock";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "NIELIT, Aurangabad",
    details: "Direct Second Year Entry",
    year: "2025 – Present",
  },
  {
    degree: "Diploma in Artificial Intelligence & Machine Learning",
    institute: "MIT, Aurangabad",
    details: "Completed",
    year: "2022 – 2025",
  },
];

export default function Education() {
  return (
    <SectionBlock id="education" title="Education">
      <div className="space-y-12">
        {education.map((item) => (
          <div
            key={item.degree}
            className="border-l-2 border-black/20 pl-6 py-2 hover:border-black transition-colors duration-300"
          >
            <h3 className="text-lg md:text-xl font-bold tracking-tight">
              {item.degree}
            </h3>

            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">

              <span className="font-medium text-black/80">
                {item.institute}
              </span>

              <span className="hidden md:inline text-black/30">•</span>

              <span className="text-black/70">
                {item.details}
              </span>

              <span className="hidden md:inline text-black/30">•</span>

              <span className="font-mono text-sm text-black/60">
                {item.year}
              </span>

            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}