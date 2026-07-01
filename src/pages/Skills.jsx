import skills from "../data/skills";
import SkillBar from "../components/SkillBar";

const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Technical Skills
      </h1>

      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;