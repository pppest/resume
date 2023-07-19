import { skills } from "@/config/skills";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col  justify-center items-start w-[80vw] container">
      <h1 className="text-2xl font-display normal-case">I know</h1>
      <div className="flex flex-wrap gap-2 justify-start items-start">
        {skills.map((item, index) => {
          return <Skill key={item} skill={item} />;
        })}
      </div>
    </div>
  );
}
