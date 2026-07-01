const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">
        {project.title}
      </h2>

      <p>
        <strong>Problem:</strong> {project.problem}
      </p>

      <p>
        <strong>Solution:</strong> {project.solution}
      </p>

      <p>
        <strong>Impact:</strong> {project.impact}
      </p>

      <div className="mt-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 px-3 py-1 rounded mr-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;