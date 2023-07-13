import { skills } from "@/config/skills";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col gap-8 justify-center items-center w-[60vw] container">
      <h1 className="text-6xl font-display normal-case">I know</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {skills.map((item, index) => {
          return <Skill key={item} skill={item} />;
        })}
      </div>
    </div>
  );
}
