import { IJob } from "@/config/jobs";
import Link from "next/link";
import React from "react";

interface Props {
  job: IJob;
}

function Job({ job }: Props) {
  return (
    <div key={job.title}>
      {/* job container */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-evenly xl:items-start xl:h-[40vh] space-x-8 px-8">
        {/* black box */}
        <div className="h-[32vh] xl:w-[32vw] flex flex-col bg-black text-white p-8 xl:p-12 justify-between items-start uppercase">
          <div>
            <h1 className="text-4xl">{job.title}</h1>
            <h1 className="text-4xl">{job.subtitle}</h1>
            <h1 className="font-display text-xl">@{job.employer}</h1>
          </div>
          <Link className="text-md lowercase" href={job.link} target={"_blank"}>
            {job.link}
          </Link>
        </div>

        {/* description */}
        <div>
          <div className="w-[80vw] xl:w-[32vw] py-2 mt-4 xl:mt-0 normal-case text-3xl xl:text-4xl font-primaryFont">{job.description}</div>
          <div className="w-[80vw] xl:w-[32vw] py-2 mt-4 xl:mt-0 normal-case text-2xl xl:text-3xl font-primaryFont">{job.dates}</div>
        </div>
      </div>

      {/* skills */}
      <div className="mx-4 px-6 xl:px-0 flex flex-wrap space-x-4 text-lg justify-center items-center text-center italic font-mono">
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
