import experience from "../data/experience";
import Timeline from "../components/Timeline";

const Experience = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Experience Timeline
      </h1>

      {experience.map((item, index) => (
        <Timeline key={index} item={item} />
      ))}
    </div>
  );
};

export default Experience;