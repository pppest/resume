import { jobs } from "@/config/jobs";
import Job from "./Job";

export default function Resume() {
  return (
    <div id="jobs" className="flex flex-col justify-center items-start w-[80vw] gap-1">
      <h1 className="text-2xl font-display normal-case">Work</h1>
      <div className="flex flex-col gap-16">
        {jobs.map((job) => {
          return <Job key={job.title} job={job} />;
        })}
      </div>
    </div>
  );
}
