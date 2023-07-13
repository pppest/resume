interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return (
    <div>
      <div className="font-primaryFont text-black text-xl md:text-2xl lg:text-4xl h-8">{skill}</div>
    </div>
  );
}

export default Skill;
