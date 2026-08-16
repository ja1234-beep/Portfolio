function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Jatin<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
        >
          Let's Talk
        </a>

      </div>

    </nav>
  )
}

export default Navbar