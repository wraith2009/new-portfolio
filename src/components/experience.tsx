const ExperiencePageComponent = () => {
  // Define experience data
  const experiences = [
    {
      company: "Experiment Labs",
      position: "Founding Engineer",
      timeline: "Dec 2024 - Present",
    },
    {
      company: "Stealth startup",
      position: "Full stack Developer Intern.",
      timeline: "Aug 2024 - Dec 2024",
    },
    {
      company: "Hill One technologies.",
      position: "Full stack Developer Intern",
      timeline: "May 2024 - Jul 2024",
    },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgresql",
    "Redis",
    "BullMQ",
  ];

  const learningTech = ["GraphQL", "AWS", "Docker", "Kubernetes", "Golang"];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Create two columns with equal widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Experience */}
          <div className="px-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-red-600 hover:underline">
                View all
              </a>
            </div>
            <p className="text-gray-600 mb-6">Places I have worked at.</p>

            {/* Experience list */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-700">{exp.position}</p>
                  <p className="text-sm text-gray-500">{exp.timeline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Tech Stack */}
          <div className="px-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-red-600 hover:underline">
                View all
              </a>
            </div>
            <p className="text-black mb-6">Technologies I work with.</p>

            {/* Tech Stack list */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2">
                  {techStack
                    .slice(0, Math.ceil(techStack.length / 2))
                    .map((tech, index) => (
                      <li key={index} className="text-gray-700">
                        {tech}
                      </li>
                    ))}
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  {techStack
                    .slice(Math.ceil(techStack.length / 2))
                    .map((tech, index) => (
                      <li key={index} className="text-gray-700">
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Learning Technologies */}
            <p className="text-black mb-6">Technologies I am learning</p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="list-disc pl-5 space-y-2">
                {learningTech
                  .slice(0, Math.ceil(learningTech.length / 2))
                  .map((tech, index) => (
                    <li key={index} className="text-gray-700">
                      {tech}
                    </li>
                  ))}
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                {learningTech
                  .slice(Math.ceil(learningTech.length / 2))
                  .map((tech, index) => (
                    <li key={index} className="text-gray-700">
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePageComponent;
