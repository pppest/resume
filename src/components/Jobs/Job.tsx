import { IJob } from "@/config/jobs";
import Link from "next/link";

interface Props {
  job: IJob;
}

function Job({ job }: Props) {
  return (
    <div key={job.title}>
      {/* job container */}
      <div className="flex flex-col  justify-center items-start w-[80vw] border-l-0 border-black border-separate border-spacing-4 pl-">
        {/* info box */}
        <div className="h-[16vh] xl:h-[10vh] w-auto flex flex-col  text-black py-1 border-b border-black justify-around items-start uppercase">
          <div>
            <h1 id="job-title" className="text-xl font-display">
              {job.title} {job.subtitle}
            </h1>
            <h2 className="font-display text-xl">@{job.employer}</h2>
          </div>
          <Link className="text-md lowercase" href={job.link} target={"_blank"}>
            {job.link}
          </Link>
        </div>

        {/* description */}
        <div>
          <div id="job-description" className="pt-4  xl:mt-0 normal-case text-lg  font-primaryFont">
            {job.description}
          </div>
          <div id="job-dates" className="py-2 mt-4 xl:mt-0 normal-case text-lg font-primaryFont">
            {job.dates}
          </div>
        </div>
      </div>

      {/* skills */}
      <div id="skills-used" className="mx-4 flex flex-wrap space-x-4 text-lg justify-center items-center text-center italic font-mono ">
        {job.skills.map((skill) => (
          <span key={skill} className="">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;
