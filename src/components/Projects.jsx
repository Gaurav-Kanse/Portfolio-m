import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Ai Business Manager",
    description:
      "An AI-powered business automation platform built to manage invoices, inventory, and intelligent analytics using modern web technologies and integrated AI systems.",
    language: "Python",
    githubUrl: "https://github.com/Gaurav-Kanse/Ai-Business-Manager",
  },
  {
    title: "BookBridge",
    description:
      "A modern book exchange and discovery platform that connects readers and enables seamless sharing, exploration, and community-driven circulation.",
    language: "JavaScript",
    githubUrl: "https://github.com/Gaurav-Kanse/BookBridge",
  },
  {
    title: "Machine Learning",
    description:
      "A collection of practical machine learning implementations including classification, regression, and predictive analytics models applied to real-world datasets.",
    language: "Jupyter Notebook",
    githubUrl: "https://github.com/Gaurav-Kanse/Machine-Learning-",
  },
  {
    title: "Nyx Personal Chatbot",
    description:
      "An AI-driven conversational chatbot engineered for contextual responses, automation workflows, and intelligent human-computer interaction.",
    language: "Python",
    githubUrl:
      "https://github.com/Gaurav-Kanse/Nyx-Personal-Chatbot-",
  },
  {
    title: "Portfolio",
    description:
      "A high-performance personal developer portfolio built with React and Tailwind CSS featuring dynamic GitHub integration and clean brutalist design.",
    language: "JavaScript",
    githubUrl: "https://github.com/Gaurav-Kanse/Portfolio",
  },
  {
    title: "Alexis",
    description:
      "A full-scale AI voice assistant integrating conversational AI, automation tools, screen interaction capabilities, and dynamic personality modes.",
    language: "Python",
    githubUrl: "https://github.com/Gaurav-Kanse/Alexis",
  },
];

export default function ProjectsSection() {
  return (
    <SectionBlock id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border-2 border-black p-6 flex flex-col justify-between bg-white hover:shadow-[8px_8px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-black group-hover:underline underline-offset-4 decoration-4">
                {project.title}
              </h3>

              <p className="text-sm mt-4 text-black/80 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <Badge variant="secondary">
                  {project.language}
                </Badge>
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-black/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-bold uppercase shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-20 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-black/40 mb-6">
          Want to see more?
        </p>

        <a
          href="https://github.com/Gaurav-Kanse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 border-2 border-black bg-white text-black uppercase tracking-widest font-bold shadow-[8px_8px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore More Projects →
        </a>
      </div>
    </SectionBlock>
  );
}