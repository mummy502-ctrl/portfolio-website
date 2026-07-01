const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;