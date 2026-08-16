function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">

        {/* Small introduction */}
        <p className="mb-5 text-lg font-medium text-cyan-400">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Jatin Gupta
        </h1>

        {/* Role */}
        <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
          AI & Machine Learning Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Computer Science student specializing in Artificial Intelligence
          and Machine Learning, passionate about building intelligent
          applications and modern web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>

        </div>

        {/* Social links */}
        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-400">

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero