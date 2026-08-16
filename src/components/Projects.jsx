const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered application that analyzes resumes and provides insights to help improve skills and job readiness.",
    technologies: ["Python", "AI/ML", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Task Manager",
    description:
      "A responsive task management application for organizing academic tasks, priorities, and deadlines.",
    technologies: ["React", "JavaScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Machine Learning Project",
    description:
      "A machine learning application that uses data processing and predictive modeling to solve a real-world problem.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
]


function ProjectCard({ title, description, technologies, github, demo }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

      {/* Project Preview */}
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/5">

        <div className="text-5xl opacity-50 transition duration-300 group-hover:scale-110">
          🚀
        </div>

      </div>


      {/* Project Content */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {description}
        </p>


        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">

          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}

        </div>


        {/* Links */}
        <div className="mt-6 flex gap-5">

          <a
            href={github}
            className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
          >
            GitHub ↗
          </a>

          <a
            href={demo}
            className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
          >
            Live Demo ↗
          </a>

        </div>

      </div>

    </article>
  )
}


function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-medium text-cyan-400">
            03. PROJECTS
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A selection of projects I've worked on while learning
            software development, artificial intelligence, and
            machine learning.
          </p>

        </div>


        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects