import { projects } from "@/config/projects";
import Project from "./Project";

function Projects() {
  return (
    <div id="projects" className="flex flex-col  justify-center items-start w-[80vw] container">
      <h1 className="text-2xl font-display normal-case">Projects</h1>
      <div className="flex flex-wrap gap-1 justify-center items-start">
        {projects.map((item, index) => {
          return <Project key={item.name} project={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
