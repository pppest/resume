import { IProject } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: IProject;
}

function Project({ project }: Props) {
  return (
    <div className="flex flex-col  items-start justify-center w-[80vw] mt-4 normal-case">
      <h2 className="font-display text-xl text-black">{project.name}</h2>
      <p className="font-primaryFont text-black text-lg text-left">{project.description}</p>
      <div className="flex gap-8 pt-8">
        <Link className="font-primaryFont text-black text-md " href={project.link} target="_blank">
          <button className="border-2 border-black font-display  px-4 py-2">github repo</button>
        </Link>
        <Link
          className="font-primaryFont text-black text-md "
          href={project.videoLink ? project.videoLink : ""}
          target="_blank"
        >
          <button className="border-2 border-black font-display text-black px-4 py-2">youtube</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
