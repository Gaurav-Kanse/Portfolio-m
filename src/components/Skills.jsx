import SectionBlock from "./SectionBlock";
import GithubGraph from "./GithubGraph";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
      "UI/UX Focus",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "Data Warehousing",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Supervised Learning",
      "Unsupervised Learning",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Blender",
      "ElevenLabs SDK",
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionBlock id="skills" title="Technical Skills">
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {skillCategories.map((category) => (
          <div key={category.title} className="group">
            <div className="flex flex-col h-full border-t-2 border-black pt-4">

              <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-black/40 group-hover:text-black transition-colors duration-300">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-black/10 text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* GitHub Activity */}
      <div className="w-full pt-12 border-t border-black/10">
        <div className="flex flex-col gap-6">
          
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-black/40">
              GitHub Activity
            </h3>
            <div className="h-[1px] flex-1 bg-black/10 mx-6"></div>
          </div>

          <GithubGraph />

        </div>
      </div>

    </SectionBlock>
  );
};

export default SkillsSection;