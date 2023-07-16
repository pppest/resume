import { IProject } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: IProject;
}

function Project({ project }: Props) {
  return (
    <div className="flex flex-col space-y-2 items-center justify-center  w-[80vw] normal-case">
      <h2 className="font-display text-xl md:text-2xl lg:text-4xl text-black px-8 py-4">{project.name}</h2>
      {/* <Image src={project.image} alt={project.name} width={200} height={300} /> */}
      <div className="font-primaryFont text-black text-md md:text-lg lg:text-xl text-left w-[40vw]">{project.description}</div>
      <div className="flex  gap-8">
        <Link className="font-primaryFont text-black text-md md:text-lg lg:text-xl" href={project.link} target="_blank">
          <button className="border-2 border-black font-display  px-4 py-2">github repo</button>
        </Link>
        <Link
          className="font-primaryFont text-black text-md md:text-lg lg:text-xl"
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
