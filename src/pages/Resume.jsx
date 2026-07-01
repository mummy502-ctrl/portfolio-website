const Resume = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Resume Download
      </h1>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;