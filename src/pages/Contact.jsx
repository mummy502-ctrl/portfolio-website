const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Contact Me
      </h1>

      <form className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Your Name"
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
        />

        <textarea
          className="border p-2 w-full"
          rows="5"
          placeholder="Message"
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;