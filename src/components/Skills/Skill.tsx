interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return (
    <div>
      <div className="font-primaryFont text-black text-lg h-8 normal-case">{skill}</div>
    </div>
  );
}

export default Skill;
