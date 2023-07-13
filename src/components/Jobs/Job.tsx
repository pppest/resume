import { IJob } from "@/config/jobs";
import Link from "next/link";
import React from "react";

interface Props {
  job: IJob;
}

function Job({ job }: Props) {
  return (
    <div key={job.title} >
      {/* job container */}
      {/* <div className="flex flex-col space-x-8 lg:flex-row mx-4 items-center justify-center"> */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:h-[16rem] space-x-8 px-8">
        {/* black box */}
        <div className="h-[18rem] lg:h-[16rem] lg:w-[32rem] flex flex-col bg-black text-white p-8 lg:p-12 justify-between items-start uppercase">
          <div>
            <h1 className="text-4xl">{job.title}</h1>
            <h1 className="text-4xl">{job.subtitle}</h1>
            <h1 className="font-display text-xl">@{job.employer}</h1>
          </div>
          <Link className="text-md lowercase" href={job.link} target={"_blank"}>{job.link}</Link>
        </div>

        {/* description */}
        <div>
          <div className="w-[80vw] lg:w-[52rem] py-2 mt-4 lg:mt-0 normal-case text-3xl lg:text-4xl font-primaryFont">{job.description}</div>
        </div>
      </div>

      {/* skills */}
      <div className="mx-4 mt-4 px-6 lg:px-0 flex flex-wrap space-x-4 text-lg justify-center items-center text-center italic font-mono">
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
