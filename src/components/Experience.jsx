const timeline = [
  {
    year: "2022 – 2026",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Your University",
    description:
      "Specialization in Artificial Intelligence and Machine Learning.",
    type: "Education",
  },
  {
    year: "2025",
    title: "Internship / Experience",
    organization: "Company Name",
    description:
      "Add your internship, work experience, or relevant professional experience here.",
    type: "Experience",
  },
  {
    year: "2024",
    title: "Achievement / Certification",
    organization: "Organization",
    description:
      "Add an important achievement, certification, competition, or milestone here.",
    type: "Achievement",
  },
]


function TimelineItem({ year, title, organization, description, type }) {
  return (
    <div className="relative pl-10 sm:pl-12">

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-400 bg-black">
        <div className="h-2 w-2 rounded-full bg-cyan-400" />
      </div>


      {/* Content */}
      <div className="pb-12">

        <p className="text-sm font-medium text-cyan-400">
          {year}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mt-1 text-sm font-medium text-gray-400">
          {organization}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          {description}
        </p>

        <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400">
          {type}
        </span>

      </div>

    </div>
  )
}


function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-medium text-cyan-400">
            04. JOURNEY
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Education & Experience.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A timeline of my academic journey, experiences, and
            milestones.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-12 max-w-3xl">

          {/* Vertical line */}
          <div className="absolute bottom-0 left-2 top-0 w-px bg-white/10" />

          {timeline.map((item) => (
            <TimelineItem
              key={`${item.year}-${item.title}`}
              year={item.year}
              title={item.title}
              organization={item.organization}
              description={item.description}
              type={item.type}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience