function InfoCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {description}
      </p>
    </div>
  )
}


function About() {
  return (
    <section id="about" className=" scroll-mt-24 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-medium text-cyan-400">
            01. ABOUT ME
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Turning ideas into reality.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Computer Science student specializing in Artificial
            Intelligence and Machine Learning. I enjoy building
            intelligent applications, exploring new technologies, and
            solving real-world problems through code.
          </p>

        </div>


        {/* Info Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <InfoCard
            icon="🎓"
            title="CSE Student"
            description="Pursuing Computer Science with a specialization in AI & Machine Learning."
          />

          <InfoCard
            icon="🤖"
            title="AI & ML"
            description="Interested in machine learning, intelligent systems, and AI-powered applications."
          />

          <InfoCard
            icon="💻"
            title="Developer"
            description="Building modern web applications while continuously improving my development skills."
          />

        </div>

      </div>

    </section>
  )
}

export default About