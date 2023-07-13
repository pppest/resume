import { jobs } from "@/config/jobs";
import Job from "./Job";

export default function Resume() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center font-primaryFont container">
      <h1 className="text-6xl font-display normal-case">I worked</h1>
      <div className="flex flex-col gap-12">
        {jobs.map((job) => {
          return <Job key={job.title} job={job} />;
        })}
      </div>
    </div>
  );
}
