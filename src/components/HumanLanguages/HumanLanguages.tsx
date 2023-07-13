import { humanLanguages } from "@/config/skills";
import Skill from "../Skills/Skill";

export default function HumanLanguages() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-[60vw] container">
      <h1 className="text-6xl font-display normal-case">I speak</h1>
      <div className="flex flex-wrap justify-center gap-4 normal-case">
        {humanLanguages.map((item, index) => {
          return <Skill key={item} skill={item} />;
        })}
      </div>
    </div>
  );
}
