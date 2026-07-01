const Timeline = ({ item }) => {
  return (
    <div className="border-l-4 border-blue-600 pl-4 mb-6">
      <h3 className="font-bold">{item.year}</h3>
      <h4>{item.role}</h4>
      <p>{item.company}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Timeline;