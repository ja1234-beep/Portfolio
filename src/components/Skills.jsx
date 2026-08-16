const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
  },
]


function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  )
}


function Skills() {
  return (
    <section id="skills" className=" scroll-mt-24 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-medium text-cyan-400">
            02. SKILLS
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A growing collection of technologies and tools that I'm
            learning and using to build applications.
          </p>

        </div>


        {/* Skill Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills