function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

        {/* Logo */}
        <p className="font-semibold text-white">
          Jatin<span className="text-cyan-400">.</span>
        </p>

        {/* Built with */}
        <p>
          Built with React & Tailwind CSS
        </p>

        {/* Social links */}
        <div className="flex gap-5">
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

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-600">
        © 2026 Jatin Gupta. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer