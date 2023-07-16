import { projects } from "@/config/projects";
import Project from "./Project";

function Projects() {
  return (
    <div id="skills" className="flex flex-col gap-8 justify-center items-center w-[80vw] container">
      <h1 className="text-6xl font-display normal-case">Projects</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {projects.map((item, index) => {
          return <Project key={item.name} project={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
