import { useState } from "react"


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)


  const closeMenu = () => {
    setIsOpen(false)
  }


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
          onClick={closeMenu}
        >
          Jatin<span className="text-cyan-400">.</span>
        </a>


        {/* Desktop Navigation */}
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


        {/* Desktop Let's Talk */}
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black md:block"
        >
          Let's Talk
        </a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar