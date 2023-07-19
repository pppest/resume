import { humanLanguages } from "@/config/skills";
import Skill from "../Skills/Skill";

export default function HumanLanguages() {
  return (
    <div id="languages" className="flex flex-col justify-center items-start w-[80vw] container">
      <h1 className="text-2xl font-display normal-case">I speak</h1>
      <div className="flex flex-wrap justify-center gap-4 normal-case">
        {humanLanguages.map((item, index) => {
          return <Skill key={item} skill={item} />;
        })}
      </div>
    </div>
  );
}
