import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Badge } from "./ui/badge";

const username = "Gaurav-Kanse";

/* Your 6 pinned repos */
const pinnedRepoNames = [
  "Ai-Business-Manager",
  "BookBridge",
  "Machine-Learning",
  "Nyx-Personal-Chatbot",
  "Portfolio",
  "Alexis",
];

/* Normalize helper (prevents dash / case mismatch issues) */
const normalize = (str) =>
  str.toLowerCase().replace(/-+$/g, "").trim();

export default function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("GitHub API error:", data);
          setLoading(false);
          return;
        }

        const filtered = data
          .filter((repo) =>
            pinnedRepoNames.some(
              (name) => normalize(repo.name) === normalize(name)
            )
          )
          .sort(
            (a, b) =>
              pinnedRepoNames.findIndex(
                (name) => normalize(name) === normalize(a.name)
              ) -
              pinnedRepoNames.findIndex(
                (name) => normalize(name) === normalize(b.name)
              )
          );

        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GitHub fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <SectionBlock id="projects" title="Projects">
      {loading ? (
        <p className="font-mono text-sm">Fetching pinned repositories...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group relative border-2 border-black p-5 flex flex-col justify-between bg-white hover:shadow-[8px_8px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-black group-hover:underline underline-offset-4 decoration-4">
                  {repo.name.replace(/-/g, " ")}
                </h3>

                <p className="text-sm mt-4 text-black/80">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {repo.language && (
                    <Badge variant="secondary">
                      {repo.language}
                    </Badge>
                  )}

                  <Badge variant="outline">
                    ⭐ {repo.stargazers_count}
                  </Badge>

                  <Badge variant="outline">
                    🍴 {repo.forks_count}
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-black/10">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-bold uppercase shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>

                {repo.homepage && repo.homepage !== "" && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-bold uppercase shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionBlock>
  );
}