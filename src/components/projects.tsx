const ProjectsPageComponent = () => {
  // Define projects data
  const projects = [
    {
      name: "Insocial",
      description: "A End to End social media website",
      githubLink: "https://github.com/mayank2153/inSocial",
      liveLink: "https://insocial.tech",
    },
    {
      name: "Campus sync",
      description: "CRM for universities",
      githubLink: "https://github.com/wraith2009/EMS",
    },
    {
      name: "100xBrainly",
      description: "your secound brain",
      githubLink: "https://github.com/wraith2009/secoundBrainClone",
      // No live link for this project
    },
  ];

  // Define blogs data
  const blogs = [
    {
      date: "Mar 08, 2025",
      title: "How vector search works",
      link: "https://medium.com/@rbh97995/how-vector-search-works-1f965e167a63",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Create two columns with equal widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Projects */}
          <div className="px-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-red-600 hover:underline">
                View all
              </a>
            </div>
            <p className="text-gray-600 mb-6">Projects I have worked on.</p>

            {/* Projects list */}
            <ul className="space-y-6 list-none">
              {projects.map((project, index) => (
                <li key={index} className="pl-4 border-l-2 border-red-500">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.name}
                    </h3>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black"
                      title="View on GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                        title="View Live Demo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Blogs */}
          <div className="px-8">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Recent blog posts
              </h2>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-red-600 hover:underline">
                Full archive
              </a>
            </div>
            <p className="text-gray-600 mb-6">
              Things I have written recently.
            </p>

            {/* Blogs list */}
            <ul className="space-y-4 list-none">
              {blogs.map((blog, index) => (
                <li key={index} className="flex items-baseline">
                  <span className="text-gray-500 w-28">{blog.date} : </span>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageComponent;
